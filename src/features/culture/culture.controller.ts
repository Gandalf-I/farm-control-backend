import { Body, Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { CultureService } from '@features/culture/culture.service';
import { StatusModel } from '@shared/models/status.model';
import { IdDto } from '@shared/dto/id.dto';
import { CultureUpdateDto } from '@features/culture/dto/culture-update.dto';
import { ApiTags } from '@nestjs/swagger';
import { CultureModel } from '@features/culture/models/culture.model';

@ApiTags('Culture')
@Controller('culture')
export class CultureController {

  constructor(private cultureService: CultureService) {
  }

  @Get()
  async getAllCultures(): Promise<CultureModel[]> {
    const result = await this.cultureService.getAllCultures();

    return result.map(e => new CultureModel(e));
  }

  @Post()
  async createCulture(@Body() body: CultureModel): Promise<CultureModel> {
    return this.cultureService.createCulture(body);
  }

  @Patch()
  async editCulture(@Body() body: CultureUpdateDto): Promise<CultureModel> {
    return this.cultureService.patchCulture(body);
  }

  @Delete()
  async deleteCulture(@Body() id: IdDto): Promise<StatusModel> {
    return this.cultureService.deleteCulture(id);
  }
}
