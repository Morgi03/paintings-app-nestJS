import { Get, Controller, Render } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  @Render('list')
  listpaintings() {
    return {
      paintings: [
        { title: 'Festmény1' },
        { title: 'Festmény2' },
        { title: 'Festmény3' },
      ],
    };
  }

  root() {
    return {};
  }
}
