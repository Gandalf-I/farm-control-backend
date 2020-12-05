import { Body, Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { Culture1Dto } from '@features/culture/models/culture1.dto';
import { CultureService } from '@features/culture/culture.service';
import { StatusModel } from '@shared/models/status.model';
import { IdDto } from '@shared/dto/id.dto';
import { CultureUpdateDto } from '@features/culture/dto/culture-update.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Culture')
@Controller('culture')
export class CultureController {

  constructor(private cultureService: CultureService) {
  }

  @Get()
  async getAllCultures(): Promise<Culture1Dto[]> {
    const result = await this.cultureService.getAllCultures();

    return result.map(e => new Culture1Dto(e));
  }

  @Post()
  async createCulture(@Body() body: Culture1Dto): Promise<Culture1Dto> {
    return this.cultureService.createCulture(body);
  }

  @Patch()
  async patchCulture(@Body() body: CultureUpdateDto): Promise<Culture1Dto> {
    return this.cultureService.patchCulture(body);
  }

  @Delete()
  async deleteCulture(@Body() id: IdDto): Promise<StatusModel> {
    return this.cultureService.deleteCulture(id);
  }
}
