import { EntityManager } from '@mikro-orm/postgresql';
import { Injectable } from '@nestjs/common';
import { User } from 'src/db/entities/user.entity';
import { UserDto } from './user.dto';

@Injectable()
export class UserService {
  constructor(private readonly em: EntityManager) {}

  async getUsers(): Promise<User[]> {
    const em = this.em.fork();
    return await em.find(User, {});
  }

  async create(createUserDto: UserDto): Promise<User> {
    const em = this.em.fork();
    try {
      const user = new User(createUserDto);
      await em.persistAndFlush(user);
      return user;
    } catch (error) {
      throw error;
    }
  }
}
