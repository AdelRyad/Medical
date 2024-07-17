import { Patients } from 'src/patients/entities/patients.entity';
import { Task } from 'src/tasks/entities/task.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'doctors' })
export class Doctor {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @OneToMany(() => Patients, (patients) => patients.doctor, {
    cascade: true,
  })
  patients: Patients[];
  @ManyToMany(() => Task, (task) => task.doctors)
  @JoinTable({ name: 'doctors_tasks' })
  tasks: Task[];
}
