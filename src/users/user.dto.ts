import { IsNotEmpty, IsString } from 'class-validator';

export abstract class UserDto {
  @IsString()
  @IsNotEmpty()
  fullname: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
