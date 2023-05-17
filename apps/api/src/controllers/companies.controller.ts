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
import { CompaniesService } from 'src/services/companies.service';
import { CreateCompanyDto } from 'src/dtos/create-company.dto';
import { UpdateCompanyDto } from 'src/dtos/update-company.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CompanyEntity } from 'src/entities/company.entity';

@Controller('companies')
@ApiTags('Company')
export class CompaniesController {
  constructor(private readonly companiesService: CompaniesService) {}

  @Post()
  @ApiCreatedResponse({ type: CompanyEntity })
  create(@Body() createCompanyDto: CreateCompanyDto) {
    return this.companiesService.create(createCompanyDto);
  }

  @Get()
  @ApiOkResponse({ type: [CompanyEntity] })
  findAll() {
    return this.companiesService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: CompanyEntity })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.companiesService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: CompanyEntity })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateCompanyDto: UpdateCompanyDto,
  ) {
    return this.companiesService.update(+id, updateCompanyDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: CompanyEntity })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.companiesService.remove(+id);
  }
}
