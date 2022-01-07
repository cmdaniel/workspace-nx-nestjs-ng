import { HttpModule } from '@nestjs/axios';
import { Test } from '@nestjs/testing';
import { lastValueFrom } from 'rxjs';

import { AppService } from './app.service';

describe('AppService', () => {
  let service: AppService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      imports: [HttpModule],
      providers: [AppService],
    }).compile();

    service = app.get<AppService>(AppService);
  });

  describe('getData', () => {
    it('should return "Welcome to api!"', () => {
      expect(service.getData()).toEqual({ message: 'Welcome to api!' });
    });
  });

  describe('getTickets', () => {
    it('shoud return array of tickets with more than one element', async () => {
      const res = await lastValueFrom(service.getTickets());
      expect(res.length > 0).toBeTruthy();
    });
  });

});



