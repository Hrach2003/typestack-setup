import { Service } from 'typedi';
import { getMetadataArgsStorage } from 'routing-controllers';
import { routingControllersToSpec } from 'routing-controllers-openapi';
import { Express } from 'express';
import * as swaggerUi from 'swagger-ui-express';

@Service()
export class SwaggerService {
	private generate() {
		const storage = getMetadataArgsStorage();
		const spec = routingControllersToSpec(storage);
		return spec;
	}

	useOpenAPI(app: Express) {
		app.use('/swagger-ui/', swaggerUi.serve, swaggerUi.setup(this.generate()));
	}
}
