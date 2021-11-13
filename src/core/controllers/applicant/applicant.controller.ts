import { Get, JsonController } from 'routing-controllers';
import { OpenAPI } from 'routing-controllers-openapi';
import { Service } from 'typedi';
import { InjectRepository } from 'typeorm-typedi-extensions';
import { ApplicantRepository } from '@repos/index';

@Service()
@JsonController()
export class ApplicantController {
	@InjectRepository()
	private readonly applicantRepository: ApplicantRepository;

	@OpenAPI({
		description: 'Get all applicants',
	})
	@Get('/applicants')
	getAll() {
		return this.applicantRepository.find({});
	}
}
