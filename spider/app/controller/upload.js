'use strict';

const Controller = require('egg').Controller;
const path = require('path');
const fs = require('fs');
const awaitStreamReady = require('await-stream-ready').write;
const sendToWormhole = require('stream-wormhole');

class UploadController extends Controller {
  async index() {
    const { ctx } = this;
    // const file = ctx.request.files[0];
    const stream = await ctx.getFileStream();
    const filename = Date.now() + '' + Number.parseInt(Math.random() * 10000) + path.extname(stream.filename);
    const target = path.join(this.config.baseDir, 'app/public/img/', filename);
    const writeStream = fs.createWriteStream(target);

    try {
      await awaitStreamReady(stream.pipe(writeStream));
      this.ctx.body = {
        success: true,
        url: `http://127.0.0.1:7001/public/img/${filename}`,
      };
    } catch (err) {
      await sendToWormhole(stream);
      this.ctx.body = {
        success: false,
      };
      throw err;
    }
  }
}

module.exports = UploadController;
