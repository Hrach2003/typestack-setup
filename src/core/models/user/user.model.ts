import { Column, Entity, ManyToMany } from 'typeorm';
import { Role } from '@models/roles';
import { AbstractAuditEntity } from '@models/abstract';

@Entity({ name: 'users' })
export class User extends AbstractAuditEntity {
	@Column()
	firstName: string;

	@Column()
	lastName: string;

	@Column({ unique: true })
	email: string;

	@Column({ unique: true })
	username: string;

	phoneNumber: string;

	password: string;

	// @ManyToMany(() => RoleEntity, role => role.id)
	// @JoinTable({ name: 'user_roles',
	//         joinColumns = @JoinColumn(name = "user_id"),
	//         inverseJoinColumns = @JoinColumn(name = "role_id")})
	roles: Role[];
}
