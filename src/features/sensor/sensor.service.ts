import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StatusModel } from '@shared/models/status.model';
import { SensorRepository } from '@features/sensor/database/sensor.repository';
import { SensorEntity } from '@features/sensor/database/sensor.entity';

@Injectable()
export class SensorService {

  constructor(@InjectRepository(SensorRepository)
              private sensorRepository: SensorRepository) {
  }

  async getAllSensor(): Promise<SensorEntity[]> {
    return this.sensorRepository.find();
  }

  async getSensors(workspaceId): Promise<SensorEntity[]> {
    return this.sensorRepository.find( );
  }

  async createSensor(sensor): Promise<SensorEntity> {
    return this.sensorRepository.insertAndReturnOne(sensor);
  }

  async deleteSensor(id): Promise<StatusModel> {
    return this.sensorRepository.deleteById(id);
  }
}
