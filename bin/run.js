#!/usr/bin/env node
const {
  generateMD5Hash,
  generateSHA1Hash,
  generateSHA256Hash,
  generateSHA512Hash,
} = ({} = require("../lib"));

const args = process.argv.slice(2);

if (!args || args.length === 0) {
  console.log("Usage: get-crypto-hash <data>");
  process.exit(1);
}

const data = args?.[0];

let hash = {
  md5: generateMD5Hash(data),
  sha1: generateSHA1Hash(data),
  sha256: generateSHA256Hash(data),
  sha512: generateSHA512Hash(data),
};

console.log(JSON.stringify(hash, 0, 2));
