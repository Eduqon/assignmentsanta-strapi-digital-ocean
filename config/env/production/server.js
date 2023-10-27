module.exports = ({ env }) => {
  console.log({ url: env("APP_URL") });
  return {
    proxy: true,
    url: env("APP_URL"), // Sets the public URL of the application.
    app: {
      keys: env.array("APP_KEYS"),
    },
  };
};
