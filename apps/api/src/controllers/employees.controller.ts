import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  NotFoundException,
} from '@nestjs/common';
import { EmployeesService } from 'src/services/employees.service';
import { CreateEmployeeDto } from 'src/dtos/create-employee.dto';
import { UpdateEmployeeDto } from 'src/dtos/update-employee.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { EmployeeEntity } from 'src/entities/employee.entity';

@Controller('employees')
@ApiTags('Employee')
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) {}

  @Post()
  @ApiCreatedResponse({ type: EmployeeEntity })
  create(@Body() createEmployeeDto: CreateEmployeeDto) {
    return this.employeesService.create(createEmployeeDto);
  }

  @Get()
  @ApiOkResponse({ type: [EmployeeEntity] })
  findAll() {
    return this.employeesService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: EmployeeEntity })
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const employee = await this.employeesService.findOne(id);
    if (!employee) {
      throw new NotFoundException(`Employee with ${id} does not exist.`);
    }
    return employee;
  }

  @Patch(':id')
  @ApiOkResponse({ type: EmployeeEntity })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateEmployeeDto: UpdateEmployeeDto,
  ) {
    return this.employeesService.update(id, updateEmployeeDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: EmployeeEntity })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.employeesService.remove(id);
  }
}
