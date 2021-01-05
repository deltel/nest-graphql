import { Module } from '@nestjs/common';
import { LaptopResolver } from './laptop.resolver';
import { LaptopService } from './laptop.service';
import { Laptop } from '../entity/Laptop'
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Laptop])],
  providers: [LaptopResolver, LaptopService]
})
export class LaptopModule {}
