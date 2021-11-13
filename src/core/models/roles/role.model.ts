import { Column, Entity, PrimaryColumn } from 'typeorm';
import { RoleName } from '@models/roles';

@Entity({ name: 'roles' })
export class Role {
	@PrimaryColumn()
	id: number;

	// @Column({
	// 	type: 'enum',
	// 	nullable: false,
	// 	enum: RoleName,
	// })
	// name: RoleName;
}
