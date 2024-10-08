import { Configuration } from 'log4js';

export const LOG4JS_DEFAULT_LAYOUT = {
  type: 'pattern',
  pattern: '%[%d{yyyy-MM-dd hh:mm:ss:SSS} %p --- [%x{name}]%] : %m',
  tokens: {
    name: (logEvent) => {
      return (logEvent.context && logEvent.context['name']) || '-';
    },
  },
};

export const LOG4JS_NO_COLOR_DEFAULT_LAYOUT = {
  type: 'pattern',
  pattern: '%d{yyyy-MM-dd hh:mm:ss:SSS} %p --- [%x{name}]%]] : %m',
  tokens: {
    name: (logEvent) => {
      return (logEvent.context && logEvent.context['name']) || '-';
    },
  },
};

export const LOG4JS_DEFAULT_CONFIG: Configuration = {
  appenders: {
    stdout: {
      type: 'stdout',
      layout: LOG4JS_DEFAULT_LAYOUT,
    },
    file: {
      type: 'file',
      filename: `./logs/application.log`,
      maxLogSize: 20 * 1024 * 1024, // maxLogSize use bytes ad unit
      backups: 10, // default use 5 so 1KB file size total rotating
      keepFileExt: 30,
      layout: LOG4JS_NO_COLOR_DEFAULT_LAYOUT,
    },
  },
  categories: {
    default: {
      enableCallStack: true,
      appenders: ['stdout', 'file'],
      level: 'debug',
    },
  },
};
