import { Injectable } from '@nestjs/common';
import { Mission } from 'src/models/mission.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class MissionsService {

  constructor(
    @InjectRepository(Mission) private missionRepository: Repository<Mission>,
  ) { }

  async getMissions(): Promise<Mission[]> {
    return this.missionRepository.find({ isDeleted: false });
  }

  async getMission(id: number): Promise<Mission | undefined> {
    return this.missionRepository.findOne(id, {
      where: {
        isDeleted: false,
      },
    });
  }

}
