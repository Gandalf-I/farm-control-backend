import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { SensorService } from '@features/sensor/sensor.service';
import { SensorModel } from '@features/sensor/model/sensor.model';
import { SensorDto } from '@features/sensor/dto/sensor.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Sensor')
@Controller('sensor/:id')
export class SensorController {

  constructor(private sensorService: SensorService) {
  }

  @Get()
  getSensor(@Param('id') id): Promise<SensorModel[]> {
    return null;
  }

  @Post()
  addSensor(@Param('id') id,
            @Body() body: SensorDto): Promise<SensorModel> {
    return null;
  }

  @Patch()
  patchSensor(@Param('id') id,
              @Body() body: SensorDto): Promise<SensorModel> {
    return null;
  }

  @Delete()
  deleteSensor(@Param('id') id): Promise<SensorModel> {
    return null;
  }
}
