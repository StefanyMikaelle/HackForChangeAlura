import { ApiProperty } from '@nestjs/swagger';

export class RegisterDto {
  @ApiProperty()
  id: number;
  @ApiProperty()
  nome: string;
  @ApiProperty()
  email: string;
  @ApiProperty()
  senha: string;
}
