import { DatabaseOptions, configNamespace } from '@intentjs/core';

export default configNamespace(
  'db',
  (): DatabaseOptions => ({
    isGlobal: true,
    default: 'sqlite',
    connections: {
      sqlite: {
        client: 'sqlite3',
        connection: {
          filename: process.env.DB_FILENAME || './dev.sqlite3',
        },
        useNullAsDefault: true,
        migrations: {
          directory: './database/migrations',
        },
      },
    },
  }),
);


