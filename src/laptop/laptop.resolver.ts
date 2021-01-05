import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { LaptopService } from './laptop.service';
import { Laptop, CreateLaptopInput, UpdateLaptopInput } from '../entity/Laptop';

@Resolver('Laptop')
export class LaptopResolver {
  constructor(private readonly laptopService: LaptopService) {}

  @Query(() => Laptop)
  async getAllLaptops(): Promise<Laptop[]> {
    return await this.laptopService.find();
  }

  @Query(() => Laptop)
  async getLaptop(@Args('id') id: string) {
    return await this.laptopService.findOne(id);
  }

  @Mutation(() => Laptop)
  async addLaptop(@Args('data') data: CreateLaptopInput) {
    return await this.laptopService.create(data);
  }

  @Mutation(() => Laptop)
  async updateLaptop(@Args('data') data: UpdateLaptopInput, @Args('id') id: string) {
    return await this.laptopService.update(id, data);
  }
  
  @Mutation(() => Laptop)
  async removeLaptop(@Args('id') id: string) {
    return await this.laptopService.remove(id);
  }
}