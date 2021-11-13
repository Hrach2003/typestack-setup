import { Column, JoinColumn, ManyToOne } from 'typeorm';
import { InstructorType } from '@models/instructor';
import { GroupEntity } from '@models/group';

export class GroupInstructorEntity {
	@ManyToOne(() => GroupEntity, group => group.id)
	@JoinColumn({ name: 'group_id' })
	group: GroupEntity;

	// @ManyToOne()
	// @JoinColumn(name = "instructor_id")
	// private Instructor instructor;

	// @Column({
	// 	type: 'enum',
	// 	enum: InstructorType,
	// })
	// instructorType: InstructorType;

	// @OneToOne(cascade = CascadeType.ALL)
	// private Salary salary;
}
