// generateSecret.cjs
const crypto = require('crypto');
const secretKey = crypto.randomBytes(64).toString('hex');
console.log('Your JWT Secret Key:', secretKey);