import { Column, Entity } from 'typeorm';
import { AbstractEntity } from '@models/abstract';
import { FeeType } from '@models/fee';
import { Currency } from '@models/common';

@Entity()
export class Fee extends AbstractEntity {
	@Column({
		type: 'enum',
		enum: FeeType,
		nullable: false,
	})
	feeType: FeeType;

	@Column({ nullable: false })
	amount: number;

	@Column({
		type: 'enum',
		enum: Currency,
		nullable: false,
	})
	currency: Currency;
}
