export const isProduction = process.env.ENV_PROD === 'production' ? true : false;

export const SERVER_URL = isProduction ? process.env.SERVER_URL : process.env.SERVER_TEST_URL;