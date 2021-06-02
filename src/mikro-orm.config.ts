import { Options } from '@mikro-orm/core';

const config: Options = {
  entities: ['./dist/**/entities/*.entity.js'],
  entitiesTs: ['./src/**/entities/*.entity.ts'],
  dbName: 'sandbox.sqlite3',
  type: 'sqlite',
  debug: true,
};

export default config;
