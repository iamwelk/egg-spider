'use strict';

const Controller = require('egg').Controller;

class NewsController extends Controller {
  async index() {
    // 获取数据显示到新闻页面

    const list = await this.service.news.getNewsList();


    await this.ctx.render('news', {
      list,
    });
  }

  async content() {
    // 获取get传值
    const aid = this.ctx.query.aid;
    const list = await this.service.news.getNewsContent(aid);

    await this.ctx.render('newscontent', {
      list: list[0],
    });
  }
}

module.exports = NewsController;
