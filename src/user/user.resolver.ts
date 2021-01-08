import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from '../entity/User';
import { RegisterInput } from '../entity/User';

@Resolver('User')
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => String)
  async hello() {
    return await 'world';
  }

  @Query(() => User)
  async getUser(id: string) {
    return await this.userService.findOne(id);
  }

  @Mutation(() => User)
  async register(@Args('data') data: RegisterInput) {
    return await this.userService.create(data);
  }
  
  @Mutation(() => User)
  async login(@Args('email') email: string, @Args('password') password: string) {
    return await this.userService.login(email, password);
  }
}