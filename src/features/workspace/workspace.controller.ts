import { Body, Controller, Delete, Get, Param, Patch, Post, Query, UseGuards } from '@nestjs/common';
import { WorkspaceService } from '@features/workspace/workspace.service';
import { WorkspaceModel } from '@features/workspace/models/workspace.model';
import { WorkspaceDto } from '@features/workspace/dto/workspace.dto';
import { SensorModel } from '@features/sensor/model/sensor.model';
import { StatusModel } from '@shared/models/status.model';
import { ApiTags } from '@nestjs/swagger';
import { User } from '@shared/decorators/user.decorator';
import { UserEntity } from '@features/user/database/user.entity';
import { JwtAuthGuard } from '@features/auth/guards/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@ApiTags('Workspace')
@Controller('workspace')
export class WorkspaceController {

  constructor(private workspaceService: WorkspaceService) {
  }

  @Get()
  async getAllWorkspace(): Promise<WorkspaceModel[]> {
    return this.workspaceService.getAllWorkspace();
  }

  @Get(':id')
  async getWorkspaceById(@Param('id') id): Promise<WorkspaceModel> {
    return this.workspaceService.getWorkspaceById(id);
  }

  @Get('user/creator')
  async getWorkspaceCreateByUser(
    @User() user: UserEntity
  ): Promise<WorkspaceModel[]> {
    return this.workspaceService.getWorkspaceCreateByUser(user.id);
  }

  @Get('user/access')
  async getWorkspaceAccessByUser(
    @User() user: UserEntity
  ): Promise<WorkspaceModel[]> {
    return this.workspaceService.getWorkspaceAccessByUser(user.id);
  }

  @Post()
  async createWorkspace(
    @User() user: UserEntity,
    @Body() body: WorkspaceDto,
  ): Promise<WorkspaceModel> {
    return this.workspaceService.createWorkspace({ ...body, creatorId: user.id });
  }

  @Patch(':id')
  async patchWorkspace(@Param('id') id,
                       @Body() body: WorkspaceDto): Promise<SensorModel> {
    return null;
  }

  @Delete()
  async deleteWorkspace(@Query('id') id): Promise<StatusModel> {
    return this.workspaceService.deleteWorkspace(id);
  }
}
