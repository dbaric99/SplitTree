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
import { AdminsService } from 'src/services/admins.service';
import { CreateAdminDto } from 'src/dtos/create-admin.dto';
import { UpdateAdminDto } from 'src/dtos/update-admin.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { AdminEntity } from 'src/entities/admin.entity';

@Controller('admins')
@ApiTags('Admin')
export class AdminsController {
  constructor(private readonly adminsService: AdminsService) {}

  @Post()
  @ApiCreatedResponse({ type: AdminEntity })
  create(@Body() createAdminDto: CreateAdminDto) {
    return this.adminsService.create(createAdminDto);
  }

  @Get()
  @ApiOkResponse({ type: [AdminEntity] })
  findAll() {
    return this.adminsService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: AdminEntity })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.adminsService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: AdminEntity })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateAdminDto: UpdateAdminDto,
  ) {
    return this.adminsService.update(+id, updateAdminDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: AdminEntity })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.adminsService.remove(+id);
  }
}
