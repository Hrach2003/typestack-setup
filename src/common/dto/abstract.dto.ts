import { AbstractAuditEntity } from '@models/abstract';

export class AbstractDto {
	id: string;

	createdAt: Date;

	updatedAt: Date;

	constructor(entity: AbstractAuditEntity) {
		this.id = entity.id;
		this.createdAt = entity.createdAt;
		this.updatedAt = entity.updatedAt;
	}
}
