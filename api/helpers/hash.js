const { createHash } = require('crypto');

module.exports = {
  inputs: {
    str: {
      type: 'string',
      required: true,
    },
  },
  async fn({ str }) {
    const hash = createHash('sha1');

    hash.update(str);

    return hash.digest('hex');
  },
};
