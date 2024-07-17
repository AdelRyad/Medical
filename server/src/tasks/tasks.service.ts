import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './entities/task.entity';
import { Repository } from 'typeorm';
import { Doctor } from 'src/doctors/entities/doctor.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private tasksRepository: Repository<Task>,
    @InjectRepository(Doctor)
    private doctorsRepository: Repository<Doctor>,
  ) {}
  async create(createTaskDto: CreateTaskDto) {
    const { doctorIds, ...rest } = createTaskDto;

    const doctors = await this.doctorsRepository.findByIds(doctorIds);

    const task = this.tasksRepository.create({
      ...rest,
      doctors,
    });

    return this.tasksRepository.save(task);
  }

  findAll() {
    return this.tasksRepository.find({
      relations: {
        doctors: true,
      },
    });
  }

  findOne(id: number) {
    return this.tasksRepository.findOne({
      where: { id },
      relations: { doctors: true },
    });
  }

  async update(id: number, updateTaskDto: UpdateTaskDto): Promise<Task> {
    const task = await this.tasksRepository.findOne({ where: { id } });

    if (!task) {
      throw new NotFoundException(`task with ID ${id} not found`);
    }

    if (updateTaskDto.doctorIds) {
      const doctor = await this.doctorsRepository.findByIds(
        updateTaskDto.doctorIds,
      );

      if (!doctor) {
        throw new NotFoundException(
          `Doctor with ID ${updateTaskDto.doctorIds} not found`,
        );
      }
      task.doctors = doctor;
    }

    Object.assign(task, updateTaskDto);

    return await this.tasksRepository.save(task);
  }
  remove(id: number) {
    return this.tasksRepository.delete(id);
  }
}
