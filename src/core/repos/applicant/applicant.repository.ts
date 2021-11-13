import { EntityRepository, Repository } from 'typeorm';
import { Applicant } from '@models/applicant';

@EntityRepository(Applicant)
export class ApplicantRepository extends Repository<Applicant> {}
