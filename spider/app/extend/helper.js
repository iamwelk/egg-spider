'use strict';
const dayjs = require('dayjs');

module.exports = {
  formatTime(param) {
    return dayjs.unix(param).format('YYYY-MM-DD HH:mm:ss');
  },
};
