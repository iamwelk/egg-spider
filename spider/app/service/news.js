'use strict';

const Service = require('egg').Service;

class NewsService extends Service {
  async getNewsList() {
    const url = `${this.config.baseUrl}/appapi.php?a=getPortalList&catid=20&page=1`;
    const result = this.ctx.curl(url, {
      dataType: 'json',
    });
    return result;
  }
}

module.exports = NewsService;
