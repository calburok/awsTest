import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('test')
  getTest(): object {
    return { data: 'test', message: 'test' };
  }

  @Get('siuu')
  getsiuu(): object {
    return { data: 'siuu', message: 'siuu' };
  }
}
