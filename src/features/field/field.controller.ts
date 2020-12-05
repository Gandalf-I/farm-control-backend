import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { FieldService } from '@features/field/field.service';
import { FieldModel } from '@features/field/models/field.model';
import { IdDto } from '@shared/dto/id.dto';
import { FieldDto } from '@features/field/dto/field.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Field')
@Controller('field')
export class FieldController {

  constructor(private fieldService: FieldService) {
  }

  @Get()
  async getAllField(): Promise<FieldModel[]> {
    return this.fieldService.getAllField();
  }

  @Get(':id')
  async getField(@Param('id') id: IdDto): Promise<FieldModel> {
    return this.fieldService.getField(id);
  }

  @Post()
  async createCulture(@Body() body: FieldDto): Promise<FieldModel> {
    return this.fieldService.createField(body);
  }

}
