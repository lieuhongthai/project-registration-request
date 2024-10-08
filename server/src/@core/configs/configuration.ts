export default () => ({
  // ** Project title
  projectTitle: process.env.TITLE_PROJECT,

  // ** Port
  port: parseInt(process.env.PORT, 10) || 3000,

  // ** Node env
  nodeEnv: process.env.NODE_ENV || 'development',

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

  // ** OracleDB
  oracledb: {
    user: process.env.ORACLE_USER,
    password: process.env.ORACLE_PASSWORD,
    connectionString: process.env.ORACLE_CONNECTION_STRING,
  },

  cache: {
    oracleDepartmentsLifetime: parseInt(process.env.CACHE_ORACLE_DEPARTMENTS_LIFETIME) || 15552000,
  },

  // ** Redis
  redisHost: process.env.REDIS_HOST,
  redisPort: parseInt(process.env.REDIS_PORT) || 6379,

  secretKeyJwt: process.env.SECRET_KEY_JWT || 'GenerateSecretKey',
  expiresInJwt: process.env.EXPIRES_IN_JWT || 'EXPIRES_IN_JWT',

  // ** Ldap
  ldapOpts: {
    ldapOpts: { url: process.env.LDAP_URI || 'LDAP://10.70.170.41/' },
    userDn: process.env.LDAP_BIND_DN || 'DC=geo,DC=net',
    userPassword: process.env.PASSWORD_EXCEPTION,
  },

  // ** Seeder Database

  isSeeder: process.env.SEEDER !== 'false',
});

export type TConfigService = {
  projectTitle: string;
  port: number;
  nodeEnv: string | 'production' | 'developer';
  slackApi: { token: string };
  database: { uri: string; dialect: string; logging: boolean };
  oracledb: { user: string; password: string; connectionString: string };
  redisHost: string;
  redisPort: number;
  secretKeyJwt: string;
  expiresInJwt: string;
  cache: {
    oracleDepartmentsLifetime: number;
  };

  ldapOpts: {
    ldapOpts: {
      url: string;
    };
    userDn: string;
    userPassword: string;
  };
  isSeeder: boolean;
};
