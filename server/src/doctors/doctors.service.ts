import { Injectable } from '@nestjs/common';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { UpdateDoctorDto } from './dto/update-doctor.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Doctor } from './entities/doctor.entity';

@Injectable()
export class DoctorsService {
  constructor(
    @InjectRepository(Doctor) private doctorRepository: Repository<Doctor>,
  ) {}
  create(createDoctorDto: CreateDoctorDto) {
    return this.doctorRepository.save(createDoctorDto);
  }

  findAll() {
    return this.doctorRepository.find({
      relations: {
        tasks: true,
      },
    });
  }

  findOne(id: number) {
    return this.doctorRepository.findOne({
      where: { id },
      relations: { tasks: true },
    });
  }

  update(id: number, updateDoctorDto: UpdateDoctorDto) {
    return this.doctorRepository.update(id, updateDoctorDto);
  }

  remove(id: number) {
    return this.doctorRepository.delete(id);
  }
}
