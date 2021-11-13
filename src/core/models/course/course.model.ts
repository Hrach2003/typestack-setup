import { Column, Entity, ManyToOne } from 'typeorm';
import { AbstractAuditEntity } from '@models/abstract';
import { User } from '@models/user';

@Entity()
export class Course extends AbstractAuditEntity {
	@Column({ nullable: false, unique: true })
	uuid: string;

	// @ManyToOne(() => Track, track => track.id)
	// track: Track;

	@Column({ nullable: false })
	name: string;

	level: number;

	@Column({ nullable: false })
	expectedNumberOfApplicants: number;

	// @OneToOne(cascade = CascadeType.ALL)
	// @JoinColumn(name = "default_duration_id")
	// private Duration defaultDuration;

	// @OneToOne(() => Fee, fee => fee.id, {
	// 	cascade: true,
	// 	orphanedRowAction: 'delete',
	// })
	// defaultTuitionFee: Fee;

	// @OneToMany(() => GroupEntity, group => group.id mappedBy = "course", cascade = CascadeType.ALL, orphanRemoval = true)
	// groups: GroupEntity[];

	@ManyToOne(() => User, user => user.id)
	defaultProjectCoordinator: User;

	@Column({ nullable: true })
	emailTemplate: string;
}
