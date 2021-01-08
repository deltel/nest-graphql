import { Injectable } from '@nestjs/common';
import { RegisterInput } from '../entity/User';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entity/User';
import { Repository } from 'typeorm';
import bcrypt from 'bcryptjs'

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async findOne(id: string): Promise<User> {
    return this.userRepository.findOne(id);
  }

  async create(input: RegisterInput): Promise<User> {
    const hashedPassword = await bcrypt.hash(input.password, 12);
    const user = new User();
    user.firstname = input.firstname;
    user.lastname = input.lastname;
    user.email = input.email;
    user.password = hashedPassword;
    return this.userRepository.save(user);
  }

  async login (email: string, password: string): Promise<User | null> {
    const user = await this.userRepository.findOne({ email });

    if (!user) {
      return null
    }

    const valid = bcrypt.compare(password, user.password);

    if (!valid) {
      return null
    }

    return user;

  }
}