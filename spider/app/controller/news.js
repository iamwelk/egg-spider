'use strict';

const Controller = require('egg').Controller;

class NewsController extends Controller {
  async index() {
    // this.ctx.body = '首页';
    // 获取数据，显示到页面
    const list = await this.service.news.getNewsList();
    this.ctx.body = list;
  }
}

module.exports = NewsController;
