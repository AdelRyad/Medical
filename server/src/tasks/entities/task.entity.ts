import { Doctor } from 'src/doctors/entities/doctor.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
export enum TaskStatus {
  pending = 'pending',
  completed = 'completed',
  cancelled = 'cancelled',
}
@Entity({ name: 'tasks' })
export class Task {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  title: string;
  @Column()
  description: string;
  @Column({
    type: 'enum',
    enum: TaskStatus,
    default: TaskStatus.pending,
  })
  status: TaskStatus;
  @CreateDateColumn()
  date: Date;
  @ManyToMany(() => Doctor, (doctor) => doctor.tasks, { cascade: true })
  doctors: Doctor[];
  @Column({ type: 'text', array: true })
  attachment: [{ name: string; size: string }];
}
