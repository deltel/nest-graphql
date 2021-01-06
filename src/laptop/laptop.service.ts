import { Injectable } from '@nestjs/common';
import { CreateLaptopInput, UpdateLaptopInput } from '../entity/Laptop';
import { InjectRepository } from '@nestjs/typeorm';
import { Laptop } from '../entity/Laptop';
import { Repository } from 'typeorm';

@Injectable()
export class LaptopService {
  constructor(
    @InjectRepository(Laptop)
    private readonly laptopRepository: Repository<Laptop>,
  ) {}

  async find() {
    return await this.laptopRepository.find();
  }

  async findOne(id: string): Promise<Laptop> {
    return await this.laptopRepository.findOne(id);
  }

  async create(input: CreateLaptopInput): Promise<Laptop> {
    const laptop = new Laptop();
    laptop.brand = input.brand;
    laptop.model = input.model;
    laptop.ram = input.ram;
    laptop.storage = input.storage;
    laptop.display = input.display;
    laptop.camera = input.camera;
    return this.laptopRepository.save(laptop);
  }

  async update(id: string, input: UpdateLaptopInput) {
      return await this.laptopRepository.update(id, {...input});
  }

  async remove(id: string) {
    const laptop = await this.laptopRepository.findOne(id);
    return await this.laptopRepository.remove(laptop);
  }
}