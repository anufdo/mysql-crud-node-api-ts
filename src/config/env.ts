import "dotenv/config";

export const appEnv = {
  general: {
    APP_NAME: process.env.APP_NAME,
    PORT: process.env.PORT,
    SECRET_KEY: process.env.SECRET_KEY,
  },
};
