'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async add(params) {
    console.log(params);
    const result = await this.ctx.model.User.create({
      userName: params.name,
      password: params.password,
    });
    console.log(result);
    return result;
  }
}

module.exports = UserService;
