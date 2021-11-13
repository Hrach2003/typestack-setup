import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Service } from 'typedi';

@Entity()
@Service()
export class Track {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ nullable: false, unique: true })
	name: string;

	// @ManyToMany(
	// 	(targetEntity = Instructor.class),
	// 	(fetch = FetchType.EAGER),
	// 	(mappedBy = 'tracks'),
	// 	(cascade = CascadeType.ALL)
	// )
	// instructors: InstructorEntity[];
}
