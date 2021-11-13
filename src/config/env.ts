import * as dotenv from 'dotenv';
import { ConnectionOptions } from 'typeorm';
dotenv.config();

export const env = {
	app: {
		isDev: process.env.NODE_ENV === 'development',
		isProd: process.env.NODE_ENV === 'production',
		isTest: process.env.NODE_ENV === 'test',
		port: process.env.PORT || 3000,
	},
	database: {
		connection: {
			type: 'mysql',
			host: process.env.DB_HOST || 'localhost',
			port: process.env.DB_PORT || 3306,
			username: process.env.DB_USER || 'root',
			password: process.env.DB_PASSWORD || 'password',
			database: process.env.DB_NAME || 'backoffice_node',
			synchronize: true,
			entities: ['./**/*.model.{ts,js}'],
		} as ConnectionOptions,
	},
	log: {
		level: 'dev',
	},
};
