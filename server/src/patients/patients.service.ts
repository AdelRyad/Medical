import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Patients } from './entities/patients.entity';
import { Doctor } from 'src/doctors/entities/doctor.entity';

@Injectable()
export class PatientsService {
  constructor(
    @InjectRepository(Patients)
    private patientsRepository: Repository<Patients>,
    @InjectRepository(Doctor)
    private doctorsRepository: Repository<Doctor>,
  ) {}
  async create(createPatientDto: CreatePatientDto): Promise<Patients> {
    const { doctorId } = createPatientDto;

    const doctor = await this.doctorsRepository.findOneById(doctorId);

    if (!doctor) {
      throw new NotFoundException(`Doctor with ID ${doctorId} not found`);
    }

    const patient = this.patientsRepository.create({
      ...createPatientDto,
      doctor,
    });

    return this.patientsRepository.save(patient);
  }
  async findAll(table: number = 0) {
    const [patients, count] = await this.patientsRepository.findAndCount({
      take: 2,
      skip: table * 2,
      relations: {
        doctor: true,
      },
    });

    return { patients, count };
  }

  findOne(id: number) {
    return this.patientsRepository.findOne({
      where: { id },
      relations: { doctor: true },
    });
  }

  async update(
    id: number,
    updatePatientDto: UpdatePatientDto,
  ): Promise<Patients> {
    const patient = await this.patientsRepository.findOne({ where: { id } });

    if (!patient) {
      throw new NotFoundException(`Patient with ID ${id} not found`);
    }

    if (updatePatientDto.doctorId) {
      const doctor = await this.doctorsRepository.findOne({
        where: { id: updatePatientDto.doctorId },
      });

      if (!doctor) {
        throw new NotFoundException(
          `Doctor with ID ${updatePatientDto.doctorId} not found`,
        );
      }
      patient.doctor = doctor;
    }

    Object.assign(patient, updatePatientDto);

    return await this.patientsRepository.save(patient);
  }
  remove(id: number) {
    return this.patientsRepository.delete(id);
  }
}
