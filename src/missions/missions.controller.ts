import { Controller, Get } from '@nestjs/common';
import { MissionsService } from './missions.service';

@Controller('missions')
export class MissionsController {

  constructor(
    private missionService: MissionsService,
  ) { }

  @Get()
  getMissions() {
    return this.missionService.getMissions();
  }

}
