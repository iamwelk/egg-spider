'use strict';

module.exports = () => {
  // 返回一个异步的方法
  return async function forbidIp(ctx, next) {
    const ip = '0';
    console.log(ctx.request.ip);
    if (ctx.request.ip === ip) {
      ctx.state = 403;
      ctx.body = 'aaa';
    } else {
      await next();
    }
  };
};
