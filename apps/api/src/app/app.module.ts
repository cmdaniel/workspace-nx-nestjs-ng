import { RailTransformService } from './services/rail-transform.service';
import { RailOnlineService } from './services/rail-online.service';
import { RailOfflineService } from './services/rail-offline.service';
import { RailService } from './services/rail.service';
import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [HttpModule],
  controllers: [AppController],
  providers: [
    RailTransformService,
    RailOnlineService,
    RailOfflineService,
    RailService, AppService],
})
export class AppModule { }
