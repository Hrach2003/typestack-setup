import { Column, ManyToOne, OneToMany } from 'typeorm';
import { AbstractAuditEntity } from '@models/abstract';
import { CourseFormat, GroupInstructorEntity, GroupState } from '@models/group';
import { Course } from '@models/course';
import { User } from '@models/user';

export class GroupEntity extends AbstractAuditEntity {
	@ManyToOne(() => Course, course => course.id)
	course: Course;

	// @OneToOne(orphanRemoval = true, cascade = CascadeType.ALL)
	// Fee tuitionFee;

	// TODO: 9/14/2020 Add default owner (project coordinator)

	// @OneToOne(cascade = CascadeType.ALL)
	// Duration duration;

	// @Column({
	// 	type: 'enum',
	// 	enum: CourseFormat,
	// 	nullable: false,
	// })
	// courseFormat: CourseFormat;

	@Column({ nullable: false })
	startDate: Date;

	@Column({ nullable: true })
	endDate: Date;

	// @Column({
	// 	type: 'enum',
	// 	enum: GroupState,
	// 	nullable: false,
	// })
	// groupState: GroupState;

	@Column({ nullable: true })
	description: string;

	@Column({ nullable: true })
	slackLink: string;

	@OneToMany(() => GroupInstructorEntity, groupInstructor => groupInstructor.group, {
		orphanedRowAction: 'delete',
		cascade: true,
	})
	groupInstructors: GroupInstructorEntity[];

	@ManyToOne(() => User, user => user.id)
	projectCoordinator: User;

	// @OneToMany(mappedBy = "group", cascade = CascadeType.ALL, orphanRemoval = true)
	// List<GroupSchedule> schedule = new ArrayList<>();

	// @OneToMany(mappedBy = "group", cascade = CascadeType.ALL, orphanRemoval = true)
	// List<Lesson> lessons;

	@Column({ nullable: true })
	numberOfLessons: number;

	@Column({ nullable: true })
	maxExamGrade: number;

	@Column({ nullable: true })
	maxInterviewGrade: number;

	@Column({ nullable: true })
	examPassThreshold: number;

	@Column({ nullable: true })
	interviewPassThreshold: number;

	@Column({ nullable: true })
	interviewFailThreshold: number;

	@Column({ nullable: true })
	completenessPercentage: number;
}
