import 'reflect-metadata';
import { useContainer as useContainerValidator } from 'class-validator';
import { useContainer as useContainerRouting } from 'routing-controllers';
import { useContainer as useContainerOrm } from 'typeorm';
import { Container } from 'typeorm-typedi-extensions';
import { BackofficeApi } from 'app.module';

async function bootstrap() {
	useContainerValidator(Container);
	useContainerOrm(Container);
	useContainerRouting(Container);

	const app = Container.get(BackofficeApi);
	await app.run();
}

bootstrap();
