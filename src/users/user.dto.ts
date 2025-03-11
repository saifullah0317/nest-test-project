import { IsNotEmpty, IsString, IsArray } from 'class-validator';

export abstract class UserDto {
  @IsString()
  @IsNotEmpty()
  fullname: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}

export abstract class BulkUserDto {
  @IsArray()
  users: UserDto[];
}
