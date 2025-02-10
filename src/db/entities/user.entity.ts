import { Entity, Property } from '@mikro-orm/core';
import { BaseEntity } from './base.entity';

@Entity()
export class User extends BaseEntity {
  @Property()
  password: string;

  @Property()
  fullname: string;

  constructor({ fullname, password }: { fullname: string; password: string }) {
    super();
    this.fullname = fullname;
    this.password = password;
  }
}
