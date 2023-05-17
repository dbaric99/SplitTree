import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CourseEntity } from './entities/course.entity';

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
  findOne(@Param('id') id: string) {
    return this.coursesService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: CourseEntity })
  update(@Param('id') id: string, @Body() updateCourseDto: UpdateCourseDto) {
    return this.coursesService.update(+id, updateCourseDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: CourseEntity })
  remove(@Param('id') id: string) {
    return this.coursesService.remove(+id);
  }
}
