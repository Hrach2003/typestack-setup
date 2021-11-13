import { Column, Entity } from 'typeorm';
import { AbstractAuditEntity } from '@models/abstract';
import { ApplicantStatus, RegistrationSource } from '@models/applicant';

@Entity()
export class Applicant extends AbstractAuditEntity {
	@Column({ unique: true })
	uuid: string;

	@Column({ nullable: false })
	name: string;

	@Column()
	nameHy: string;

	@Column()
	nameEn: string;

	@Column({
		type: 'enum',
		enum: RegistrationSource,
		default: RegistrationSource.WEBSITE,
	})
	registrationSource: RegistrationSource;

	@Column({ nullable: false })
	email: string;

	@Column({ nullable: false })
	phoneNumber: string;

	// @ManyToMany()
	// group;

	@Column({
		type: 'enum',
		enum: ApplicantStatus,
		default: ApplicantStatus.ARCHIVED,
	})
	status: ApplicantStatus;

	// @OneToMany(type => "", comments = true, {
	// 	cascade: true
	// })
	// private List<Comment> comments = new ArrayList<>();

	// @OneToMany(cascade = CascadeType.ALL,
	// 				orphanRemoval = true, mappedBy = "applicant")
	// private List<Absentee> absentees = new ArrayList<>();

	@Column()
	discount: number;

	@Column({ nullable: false })
	isCertificateGiven: boolean;

	@Column({ nullable: false })
	isOpenToWork: boolean;

	// @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
	// private List<Attachment> attachments = new ArrayList<>();

	// @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true, mappedBy = "applicant")
	// private List<ApplicantAgreementInfo> applicantAgreementInfos = new ArrayList<>();
}
