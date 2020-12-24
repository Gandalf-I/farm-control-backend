import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { SensorService } from '@features/sensor/sensor.service';
import { SensorModel } from '@features/sensor/model/sensor.model';
import { SensorDto } from '@features/sensor/dto/sensor.dto';
import { ApiTags } from '@nestjs/swagger';
import { StatusModel } from '@shared/models/status.model';

@ApiTags('Sensor')
@Controller('sensor/:id')
export class SensorController {

  constructor(private sensorService: SensorService) {
  }

  @Get()
  getSensor(@Param('id') id): Promise<SensorModel[]> {
    return this.sensorService.getSensors(id);
  }

  @Post()
  addSensor(@Param('id') id,
            @Body() body: SensorDto): Promise<SensorModel> {
    return this.sensorService.createSensor(body);
  }

  @Patch()
  patchSensor(@Param('id') id,
              @Body() body: SensorDto): Promise<SensorModel> {
    return null;
  }

  @Delete()
  deleteSensor(@Param('id') id): Promise<StatusModel> {
    return this.sensorService.deleteSensor(id);
  }
}
