import express from 'express';
import path from 'path';
import { useExpressServer } from 'routing-controllers';
import { Service } from 'typedi';
import { createConnection } from 'typeorm';
import { LoggerService, SwaggerService } from '@modules/index';
import { env } from '@config';

@Service()
export class BackofficeApi {
	constructor(private readonly swagger: SwaggerService, private readonly logger: LoggerService) {}

	async run() {
		try {
			const app = express();

			await createConnection(env.database.connection);

			useExpressServer(app, {
				cors: true,
				controllers: [
					path.join(__dirname, './**/*.controller.{ts,js}'),
					path.join(__dirname, './**/controllers/*.{ts,js}'),
				],
			});

			this.swagger.useOpenAPI(app);

			app.listen(env.app.port, () => this.logger.info(`Server started at http://localhost:${env.app.port}.`));
		} catch (error) {
			this.logger.error(`Failed to start the server.`, String(error));
		}
	}
}
