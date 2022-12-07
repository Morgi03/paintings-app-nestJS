import {
  Get,
  Controller,
  Render,
  Query,
  Param,
  Post,
  Body,
} from '@nestjs/common';
import db from './db';
import { paintingDto } from './painting.dto';

@Controller()
export class AppController {
  @Get()
  @Render('list')
  async listpaintings(@Query('year') year = 1990) {
    const [rows] = await db.execute(
      'SELECT id, title FROM paintings WHERE year > ?',
      [year],
    );
    return {
      paintings: rows,
    };
  }

  @Get('paintings/new')
  @Render('form')
  newPaintingForm() {
    return {};
  }

  @Post('paintings/new')
  async newPainting(@Body() painting: paintingDto) {
    painting.on_display = painting.on_display == 1;
    await db.execute(
      'INSERT INTO paintings (title, year, on_display) VALUES (?, ?, ?)',
      [painting.title, painting.year, painting.on_display],
    );
    return 'OK';
  }

  @Get('paintings/:id')
  @Render('show')
  async showPainting(@Param('id') id: number) {
    const [rows] = await db.execute(
      'SELECT title, year, on_display FROM paintings WHERE id = ?',
      [id],
    );
    return { painting: rows[0] };
  }

  root() {
    return {};
  }
}
