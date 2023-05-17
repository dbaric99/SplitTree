import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CompaniesService } from './companies.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CompanyEntity } from './entities/company.entity';

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
  findOne(@Param('id') id: string) {
    return this.companiesService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: CompanyEntity })
  update(@Param('id') id: string, @Body() updateCompanyDto: UpdateCompanyDto) {
    return this.companiesService.update(+id, updateCompanyDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: CompanyEntity })
  remove(@Param('id') id: string) {
    return this.companiesService.remove(+id);
  }
}
