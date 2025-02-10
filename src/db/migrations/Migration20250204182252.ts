/* eslint-disable prettier/prettier */
import { Migration } from '@mikro-orm/migrations';

export class Migration20250204182252 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`create table "user" ("id" serial primary key, "created_at" timestamptz not null, "updated_at" timestamptz not null, "password" varchar(255) not null, "full_name" varchar(255) not null);`);
  }

  override async down(): Promise<void> {
    this.addSql(`drop table if exists "user" cascade;`);
  }

}
