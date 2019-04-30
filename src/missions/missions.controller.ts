import { Controller, Get, UseInterceptors, Param } from '@nestjs/common';
import { MissionsService } from './missions.service';
import { classToPlain } from 'class-transformer';
import { DataInterceptor } from 'src/util/data.interceptor';
import { Mission } from 'src/models/mission.model';

@Controller('missions')
export class MissionsController {

  constructor(
    private missionService: MissionsService,
  ) { }

  @Get()
  async getMissions() {
    const missionEntities = await this.missionService.getMissions();
    const missions = classToPlain(missionEntities);
    return missions;
  }

  @Get(':id')
  async getMission(@Param('id') id: number) {
    return this.missionService.getMission(id);
  }

}
