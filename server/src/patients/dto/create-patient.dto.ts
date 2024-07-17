import { PatientStatus, PatientType } from '../entities/patients.entity';

export class CreatePatientDto {
  name: string;
  time: string;
  date: string;
  type: PatientType;
  status: PatientStatus;
  doctorId: number;
}
