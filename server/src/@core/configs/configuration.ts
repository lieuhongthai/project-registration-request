export default () => ({
  // ** Project title
  projectTitle: process.env.TITLE_PROJECT,

  // ** Port
  port: parseInt(process.env.PORT, 10) || 3000,

  // ** Node env
  nodeEnv: parseInt(process.env.NODE_ENV) || 'production',

  // ** Slack api
  slackApi: {
    token: process.env.SLACK_API_TOKEN,
  },

  // ** Database
  database: {
    uri: process.env.DB_URI,
    dialect: process.env.DB_DIALECT,
    logging: process.env.DB_LOGGING !== 'false',
  },

  // ** Redis
  redisHost: process.env.REDIS_HOST,
  redisPort: parseInt(process.env.REDIS_PORT) || 6379,

  secretKeyJwt: process.env.SECRET_KEY_JWT || 'SECRET_KEY_JWT',
  expiresInJwt: process.env.EXPIRES_IN_JWT || 'EXPIRES_IN_JWT',
});

export type TConfigService = {
  projectTitle: string;

  port: number;
  nodeEnv: string | 'production' | 'developer';
  slackApi: { token: string };
  database: { uri: string; dialect: string; logging: boolean };
  redisHost: string;
  redisPort: number;
  secretKeyJwt: string;
  expiresInJwt: string;
};
