import { Get, Controller, Render } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  @Render('list')
  listpaintings() {
    return {};
  }

  root() {
    return {};
  }
}
