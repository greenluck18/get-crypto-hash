# get crypto hash

## Description

This Node.js project generates hash values (MD5, SHA-1, SHA-256, SHA-512) via a command-line interface for cryptographic computations.

## Installation

To install this utility globally, use npm:

```
npm install -g get-crypto-hash
```

After installation, you can use the get-crypto-hash command followed by the data you want to hash.

## Using samples

```
get-crypto-hash Lorem ipsum dolor sit amet
```

The utility will output the hash values in JSON format, including MD5, SHA-1, SHA-256, and SHA-512.

### Example

```
{
  "md5": "70f04e66d87d6679648f308038b0d2b7",
  "sha1": "c890784496fa23db6de9c6b8f60a00d4f2513c5c",
  "sha256": "956461453c42dda59189ecdc34c1226f371e4df42b9bd4b0d597f9b01a5941f1",
  "sha512": "360b8fac572cf4abc8b4d1cf0f3c58274ecbc0cc08e4a56264e4ad1060f6c978907360e7324c7c225f62b21666ae1bd15fe9b85fe2fd493b8b9840ad2355f53b"
}
```

Please be aware that if you use special symbols such as '%$&' etc, it's advisable to enclose them in quotes ("") or single quotes ('').

```
get-crypto-hash "Lorem ipsum dolor sit amet $%^&^*%&$%^%$^%#%^#"
```
