import { Test, TestingModule } from '@nestjs/testing';
import { LaptopResolver } from './laptop.resolver';

describe('LaptopResolver', () => {
  let resolver: LaptopResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LaptopResolver],
    }).compile();

    resolver = module.get<LaptopResolver>(LaptopResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
