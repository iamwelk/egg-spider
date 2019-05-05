'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async login() {
    console.log('login----------------');
    console.log(this.ctx.request.body);
    const result = await this.ctx.service.user.add(this.ctx.request.body);
    this.ctx.body = result;
  }
}

module.exports = UserController;
