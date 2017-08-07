'use strict';

module.exports.handler = (event, context, callback) => {
  callback(null, event.x - event.y);
};