import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MissionsService } from './missions/missions.service';
import { MissionsController } from './missions/missions.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Mission } from './models/mission.model';
import { APP_INTERCEPTOR, APP_PIPE } from '@nestjs/core';
import { DataInterceptor } from './util/data.interceptor';
import { DataPipe } from './util/data.pipe';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'otto.db.elephantsql.com',
      port: 5432,
      username: 'mvobuviz',
      password: '7lJ7udXmJmgmu0glGuudIxhpoL7mZa-A',
      database: 'mvobuviz',
      entities: [__dirname + '/**/*.model{.ts,.js}'],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Mission])
  ],
  controllers: [AppController, MissionsController],
  providers: [
    AppService,
    MissionsService,
    {
      provide: APP_INTERCEPTOR,
      useClass: DataInterceptor,
    },
    {
      provide: APP_PIPE,
      useClass: DataPipe,
    }
  ],
})
export class AppModule {}
