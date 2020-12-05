import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { WorkspaceRepository } from '@features/workspace/database/workspace.repository';
import { WorkspaceEntity } from '@features/workspace/database/workspace.entity';
import { WorkspaceDto } from '@features/workspace/dto/workspace.dto';
import { CultureUpdateDto } from '@features/culture/dto/culture-update.dto';
import { StatusModel } from '@shared/models/status.model';
import { IdDto } from '@shared/dto/id.dto';

@Injectable()
export class WorkspaceService {

  constructor(@InjectRepository(WorkspaceRepository)
              private workspaceRepository: WorkspaceRepository) {
  }

  async getAllWorkspace(): Promise<WorkspaceEntity[]> {
    return this.workspaceRepository.find();
  }

  async createWorkspace(body: WorkspaceDto) {
    return this.workspaceRepository.insertAndReturnOne({
      ...body,
    });
  }

  async patchWorkspace(body: CultureUpdateDto): Promise<WorkspaceEntity> {
    return this.workspaceRepository.updateByIdAndReturn(body.id, body);
  }

  async deleteWorkspace(body: IdDto): Promise<StatusModel> {
    return this.workspaceRepository.deleteById(body.id)
  }
}
