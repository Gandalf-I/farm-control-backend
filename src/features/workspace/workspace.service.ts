import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { WorkspaceRepository } from '@features/workspace/database/workspace.repository';
import { WorkspaceEntity } from '@features/workspace/database/workspace.entity';
import { WorkspaceDto } from '@features/workspace/dto/workspace.dto';
import { StatusModel } from '@shared/models/status.model';

@Injectable()
export class WorkspaceService {

  constructor(@InjectRepository(WorkspaceRepository)
              private workspaceRepository: WorkspaceRepository) {
  }

  async getAllWorkspace(): Promise<WorkspaceEntity[]> {
    return this.workspaceRepository.find({relations: ['users']});
  }

  async getWorkspaceById(id): Promise<WorkspaceEntity> {
    return this.workspaceRepository.findOne(id, {relations: ['users']});
  }

  async getWorkspaceCreateByUser(creatorId): Promise<WorkspaceEntity[]> {
    return this.workspaceRepository
      .createQueryBuilder('workspace')
      .leftJoinAndSelect('workspace.users', 'users')
      .where(`workspace.creatorId=${creatorId}`)
      .getMany();
  }

  async getWorkspaceAccessByUser(usersId: number): Promise<WorkspaceEntity[]> {
    return this.workspaceRepository
      .createQueryBuilder('workspace')
      .leftJoinAndSelect('workspace.users', 'users')
      .where(`users.id=${usersId}`)
      .getMany();
  }

  async createWorkspace(body) {
    const countWorkspaceUserCreated = (await this.getWorkspaceCreateByUser(body.creatorId)).length

    if(countWorkspaceUserCreated >= 5) {
      throw new HttpException(
        'Max total workspaces equally 5',
        HttpStatus.FORBIDDEN,
      );
    }

    const workspace = await this.workspaceRepository.insertAndReturnOne({
      ...body,
    });

    return this.setRelationsWorkspaceAndReturn(body, workspace)
  }

  async patchWorkspace(id, body: WorkspaceDto): Promise<WorkspaceEntity> {
    const workspace = await this.workspaceRepository.updateByIdAndReturn(id, body);

    return this.setRelationsWorkspaceAndReturn(body, workspace)
  }

  async deleteWorkspace(id): Promise<StatusModel> {
    return this.workspaceRepository.deleteById(id)
  }

  private async setRelationsWorkspaceAndReturn(body, workspace) {
    if (body?.usersId?.length) {
      await this.workspaceRepository.createQueryBuilder()
        .relation(WorkspaceEntity, 'users')
        .of(workspace.id)
        .add(body.usersId)
    }

    return this.workspaceRepository.findOne(workspace.id)
  }
}
