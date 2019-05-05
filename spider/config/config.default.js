'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1532656413112_8161';

  // add your config here
  config.middleware = [ 'printdate', 'forbidip' ];
  // 给中间件传参
  // config.printdate = {
  //   name: '123',
  // };

  // 配置ejs模板引擎
  config.view = {
    mapping: {
      '.html': 'ejs',
    },
  };


  // 配置公共的api

  config.api = 'http://www.phonegap100.com/';

  config.cors = {
    origin: '*',
    allowMethods: 'GET, HEAD, PUT, POST, DELETE, PATHC',
  };

  config.security = {
    csrf: {
      enable: false,
      useSession: true,
      cookieName: 'csrfToken',
      sessionName: 'csrfToken',
    },
  };

  config.mongoose = {
    url: 'mongodb://127.0.0.1/local',
    options: {},
  };

  // config.multipart = {
  //   mode: 'file',
  // };

  return config;
};
