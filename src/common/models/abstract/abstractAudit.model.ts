import { CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

export class AbstractAuditEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@CreateDateColumn({
		type: 'timestamp',
	})
	createdAt: Date;

	@UpdateDateColumn({
		type: 'timestamp',
	})
	updatedAt: Date;
}
