import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { NoteDto } from '@features/note/dto/note.dto';
import { MeasurementService } from '@features/measurement/measurement.service';
import { MeasurementsModel } from '@features/measurement/models/measurements.model';
import { ApiTags } from '@nestjs/swagger';
import { StatusModel } from '@shared/models/status.model';

@ApiTags('Measurement')
@Controller('measurement')
export class MeasurementController {

  constructor(private measurementService: MeasurementService) {
  }

  @Get('')
  getAllMeasurement(): Promise<MeasurementsModel[]> {
    return this.measurementService.getAllMeasurement();
  }

  @Post(':id/load')
  loadData(@Param('id') id,
           @Body() file): Promise<StatusModel> {
    return this.measurementService.createMeasurement(file);
  }
}
