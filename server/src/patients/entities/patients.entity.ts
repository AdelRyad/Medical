import { Doctor } from 'src/doctors/entities/doctor.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

export enum PatientStatus {
  active = 'active',
  inactive = 'inactive',
}

export enum PatientType {
  urgent = 'Urgent',
  followUp = 'Follow-Up',
}

@Entity()
export class Patients {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  time: string;
  @Column()
  date: string;
  @Column({
    type: 'enum',
    enum: PatientType,
    default: PatientType.followUp,
  })
  type: PatientType;
  @Column({
    type: 'enum',
    enum: PatientStatus,
    default: PatientStatus.active,
  })
  status: PatientStatus;
  @ManyToOne(() => Doctor, (doctor) => doctor.patients)
  doctor: Doctor;
}
