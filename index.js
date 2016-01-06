'use strict';

exports = module.exports = {};

exports.Error = Error;

class HttpError extends Error {
  constructor(message, status) {
    super(message);
    this.status = status;
  }
}
exports.HttpError = HttpError;
