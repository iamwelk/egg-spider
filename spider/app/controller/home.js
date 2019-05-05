'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.session.username = '张三';

    // 注意异步
    await this.ctx.render('index');
  }
}

module.exports = HomeController;
