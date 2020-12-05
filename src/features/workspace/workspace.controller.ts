import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { WorkspaceService } from '@features/workspace/workspace.service';
import { WorkspaceModel } from '@features/workspace/models/workspace.model';
import { WorkspaceDto } from '@features/workspace/dto/workspace.dto';
import { SensorModel } from '@features/sensor/model/sensor.model';
import { StatusModel } from '@shared/models/status.model';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Workspace')
@Controller('workspace')
export class WorkspaceController {

  constructor(private workspaceService: WorkspaceService) {}

  @Get()
  async getAllWorkspace(): Promise<WorkspaceModel[]> {
    return this.workspaceService.getAllWorkspace();
  }

  @Post()
  async createWorkspace(@Body() body: WorkspaceDto): Promise<WorkspaceModel> {
    return this.workspaceService.createWorkspace(body);
  }

  @Patch(':id')
  async patchWorkspace(@Param('id') id,
                 @Body() body: WorkspaceDto): Promise<SensorModel> {
    return null;
  }

  @Delete(':id')
  async deleteWorkspace(@Param('id') id): Promise<StatusModel> {
    return this.workspaceService.deleteWorkspace(id);
  }
}
