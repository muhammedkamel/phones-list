module.exports = {
  inputs: {
    email: {
      type: 'string',
      required: true,
      unique: true,
    },
    password: {
      type: 'string',
      required: true,
    },
  },

  async fn({ email, password }) {
    password = await sails.helpers.hash(password);

    const signature = await AuthenticationService.login({ email });

    await User.create({ email, password });

    return { email, signature };
  },
};
