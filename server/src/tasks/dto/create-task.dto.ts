import { TaskStatus } from '../entities/task.entity';

export class CreateTaskDto {
  title: string;
  description: string;
  status: TaskStatus;
  time: string;
  attachment: [{ name: string; size: string }];
  doctorIds: number[];
}
