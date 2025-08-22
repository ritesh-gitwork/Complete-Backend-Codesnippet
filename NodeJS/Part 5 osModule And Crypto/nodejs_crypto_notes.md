# Notes on Crypto Module in Node.js

The `crypto` module in Node.js provides cryptographic functionality that
includes a set of wrappers for OpenSSL's hash, HMAC, cipher, decipher,
sign, and verify functions.

## Importing Crypto

``` js
const crypto = require('crypto');
```

or in ES modules:

``` js
import crypto from 'crypto';
```

## Commonly Used Features

### 1. Hashing

Hashing is a one-way function to convert data into a fixed-length hash
value.

``` js
const hash = crypto.createHash('sha256')
                   .update('Hello World')
                   .digest('hex');
console.log(hash);
```

-   Common algorithms: `sha256`, `sha512`, `md5` (not secure).

### 2. HMAC (Hash-based Message Authentication Code)

HMAC adds a secret key to the hashing process.

``` js
const hmac = crypto.createHmac('sha256', 'secret-key')
                   .update('Hello World')
                   .digest('hex');
console.log(hmac);
```

### 3. Symmetric Encryption and Decryption

Encryption with a secret key (both encryption and decryption use the
same key).

``` js
const algorithm = 'aes-256-cbc';
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

// Encrypt
const cipher = crypto.createCipheriv(algorithm, key, iv);
let encrypted = cipher.update('Hello World', 'utf8', 'hex');
encrypted += cipher.final('hex');
console.log('Encrypted:', encrypted);

// Decrypt
const decipher = crypto.createDecipheriv(algorithm, key, iv);
let decrypted = decipher.update(encrypted, 'hex', 'utf8');
decrypted += decipher.final('utf8');
console.log('Decrypted:', decrypted);
```

### 4. Asymmetric Encryption (RSA / Public Key Cryptography)

Uses a pair of keys (public and private).

``` js
// Generate key pair
crypto.generateKeyPair('rsa', {
  modulusLength: 2048,
}, (err, publicKey, privateKey) => {
  if (err) throw err;

  const message = "Hello RSA";

  // Encrypt with public key
  const encryptedData = crypto.publicEncrypt(publicKey, Buffer.from(message));
  console.log("Encrypted:", encryptedData.toString("base64"));

  // Decrypt with private key
  const decryptedData = crypto.privateDecrypt(privateKey, encryptedData);
  console.log("Decrypted:", decryptedData.toString());
});
```

### 5. Digital Signatures

Ensures data authenticity and integrity.

``` js
const { generateKeyPairSync, createSign, createVerify } = crypto;

// Generate keys
const { privateKey, publicKey } = generateKeyPairSync('rsa', {
  modulusLength: 2048,
});

const message = "This is a secret message";

// Sign
const sign = createSign('SHA256');
sign.update(message);
sign.end();
const signature = sign.sign(privateKey, 'hex');

// Verify
const verify = createVerify('SHA256');
verify.update(message);
verify.end();
console.log(verify.verify(publicKey, signature, 'hex')); // true
```

## Utilities

-   **`crypto.randomBytes(size)`**: Generates cryptographically strong
    pseudo-random data.
-   **`crypto.pbkdf2()`**: Provides password-based key derivation.
-   **`crypto.scrypt()`**: Another key derivation function, designed to
    be memory-hard.

## Best Practices

-   Always use modern algorithms (`sha256`, `sha512`, `aes-256-cbc`).
-   Avoid outdated/weak algorithms like `md5` and `sha1`.
-   Never store raw passwords, always hash with salt using `pbkdf2` or
    `bcrypt`.
-   Use `randomBytes` for generating secure keys and tokens.

## References

-   [Node.js Crypto Documentation](https://nodejs.org/api/crypto.html)
