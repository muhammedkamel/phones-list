const { SignJWT } = require('jose/jwt/sign');
const { createPrivateKey } = require('crypto');
const fs = require('fs');

let privateKey;

module.exports = {

  get privateKey() {
    if (!privateKey) {
      privateKey = createPrivateKey(fs.readFileSync('config/certs/key.pem'));
    }

    return privateKey;
  },

  async login({ email }) {
    // should sign roles, permissions
    const jwt = await new SignJWT({
      id: 20, name: 'hamada', roles: ['admin'], permissions: ['tm', 'email'],
    })
      .setProtectedHeader({ alg: 'RS256' })
      .setSubject(email)
      .setIssuedAt()
      .setIssuer('urn:example:issuer')
      .setAudience('urn:example:audience')
      .setExpirationTime('2h')
      .sign(this.privateKey);

    return jwt;
  },
};
