const crypto = require('crypto');

function generateMD5Hash(data) {
  return crypto.createHash('md5').update(data).digest('hex');
}

function generateSHA1Hash(data) {
  return crypto.createHash('sha1').update(data).digest('hex');
}

function generateSHA256Hash(data) {
  return crypto.createHash('sha256').update(data).digest('hex');
}

function generateSHA512Hash(data) {
  return crypto.createHash('sha512').update(data).digest('hex');
}

module.exports = {
  generateMD5Hash,
  generateSHA1Hash,
  generateSHA256Hash,
  generateSHA512Hash
};