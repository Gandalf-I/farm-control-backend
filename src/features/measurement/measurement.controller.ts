import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { NoteDto } from '@features/note/dto/note.dto';
import { MeasurementService } from '@features/measurement/measurement.service';
import { MeasurementsModel } from '@features/measurement/models/measurements.model';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Measurement')
@Controller('measurement')
export class MeasurementController {

  constructor(private measurementService: MeasurementService) {
  }

  @Get()
  getAllMeasurement(@Param('id') id: string): Promise<MeasurementsModel[]> {
    return this.measurementService.getAllMeasurement(id);
  }

  @Post()
  addMeasurement(@Param('id') id,
          @Body() body: NoteDto): Promise<MeasurementsModel> {
    return null;
  }

  @Patch()
  patchMeasurement(@Param('id') id,
            @Body() body: NoteDto): Promise<MeasurementsModel> {
    return null;
  }

  @Delete()
  deleteMeasurement(@Param('id') id): Promise<MeasurementsModel> {
    return null;
  }
}
