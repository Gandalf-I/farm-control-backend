import { Module } from '@nestjs/common';
import { WorkspaceController } from './workspace.controller';
import { WorkspaceService } from './workspace.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WorkspaceRepository } from '@features/workspace/database/workspace.repository';

@Module({
  controllers: [
    WorkspaceController
  ],
  providers: [
    WorkspaceService
  ],
  imports: [
    TypeOrmModule.forFeature([WorkspaceRepository]),
  ],
})
export class WorkspaceModule {}
