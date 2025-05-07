import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get()
  getTest(): object {
    return { data: 'test', message: 'test' };
  }

  @Get()
  getsiuu(): object {
    return { data: 'siuu', message: 'siuu' };
  }
}
