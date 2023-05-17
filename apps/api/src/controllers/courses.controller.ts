import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { CoursesService } from 'src/services/courses.service';
import { CreateCourseDto } from 'src/dtos/create-course.dto';
import { UpdateCourseDto } from 'src/dtos/update-course.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CourseEntity } from 'src/entities/course.entity';

@Controller('courses')
@ApiTags('Course')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Post()
  @ApiCreatedResponse({ type: CourseEntity })
  create(@Body() createCourseDto: CreateCourseDto) {
    return this.coursesService.create(createCourseDto);
  }

  @Get()
  @ApiOkResponse({ type: [CourseEntity] })
  findAll() {
    return this.coursesService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: CourseEntity })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.coursesService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: CourseEntity })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateCourseDto: UpdateCourseDto,
  ) {
    return this.coursesService.update(+id, updateCourseDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: CourseEntity })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.coursesService.remove(+id);
  }
}
