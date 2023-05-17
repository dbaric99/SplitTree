import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AdminsService } from './admins.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { AdminEntity } from './entities/admin.entity';

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
  findOne(@Param('id') id: string) {
    return this.adminsService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: AdminEntity })
  update(@Param('id') id: string, @Body() updateAdminDto: UpdateAdminDto) {
    return this.adminsService.update(+id, updateAdminDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: AdminEntity })
  remove(@Param('id') id: string) {
    return this.adminsService.remove(+id);
  }
}
