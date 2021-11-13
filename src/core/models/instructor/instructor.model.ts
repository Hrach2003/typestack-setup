import { Column } from 'typeorm';
import { AbstractAuditEntity } from '@models/abstract';
import { InstructorStatus } from '@models/instructor';

export class InstructorEntity extends AbstractAuditEntity {
	@Column({ nullable: false, unique: true })
	uuid: string;

	@Column({ nullable: false })
	name: string;

	@Column({ unique: true })
	phoneNumber: string;

	@Column({ unique: true })
	email: string;

	@Column({ nullable: true })
	linkedInProfile: string;

	// @Column({
	// 	type: 'enum',
	// 	enum: InstructorStatus,
	// })
	// status: InstructorStatus;

	// @ManyToMany(targetEntity = Track.class,
	// 				cascade = CascadeType.ALL)
	// @JoinTable(
	// 				name = "track_instructor",
	// 				joinColumns = @JoinColumn(name = "instructor_id", referencedColumnName = "id"),
	// 				inverseJoinColumns = @JoinColumn(name = "track_id", referencedColumnName = "id"))
	// Set<Track> tracks = new HashSet<>();

	// @OneToMany(mappedBy = "instructor")
	// Set<GroupInstructor> groupInstructors;

	// @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
	// List<Comment> comments;

	@Column({ unique: true })
	signatureLink: string;
}
