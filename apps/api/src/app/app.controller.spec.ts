import { HttpModule } from '@nestjs/axios';
import { Test, TestingModule } from '@nestjs/testing';

import { TicketController } from './ticket.controller';
import { AppService } from './app.service';
import { RailOfflineService } from './services/rail-offline.service';
import { RailOnlineService } from './services/rail-online.service';
import { RailTransformService } from './services/rail-transform.service';
import { RailService } from './services/rail.service';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      imports: [HttpModule],
      controllers: [TicketController],
      providers: [AppService, RailService, RailTransformService, RailOfflineService, RailOnlineService],
    }).compile();
  });

  describe('getData', () => {
    it('should return "Welcome to api!"', () => {
      const appController = app.get<TicketController>(TicketController);
      expect(appController.getData()).toEqual({ message: 'Welcome to api!' });
    });
  });
});
