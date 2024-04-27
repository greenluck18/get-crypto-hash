# get crypto hash

## Description

This Node.js project generates hash values (MD5, SHA-1, SHA-256, SHA-512) via a command-line interface for cryptographic computations.

## Installation

To install this utility globally, use npm:

```sh
npm install -g get-crypto-hash
```

After installation, you can use the get-crypto-hash command followed by the data you want to hash.

## Using samples

```sh
get-crypto-hash "Lorem ipsum dolor sit amet"
```

The utility will output the hash values in JSON format, including MD5, SHA-1, SHA-256, and SHA-512.

Example:

```json
{
  "md5": "fea80f2db003d4ebc4536023814aa885",
  "sha1": "38f00f8738e241daea6f37f6f55ae8414d7b0219",
  "sha256": "16aba5393ad72c0041f5600ad3c2c52ec437a2f0c7fc08fadfc3c0fe9641d7a3",
  "sha512": "b1f4aaa6b51c19ffbe4b1b6fa107be09c8acafd7c768106a3faf475b1e27a940d3c075fda671eadf46c68f93d7eabcf604bcbf7055da0dc4eae6743607a2fc3f"
}
```