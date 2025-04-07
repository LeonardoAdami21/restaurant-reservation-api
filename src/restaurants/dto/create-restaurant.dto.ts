import { ApiProperty } from '@nestjs/swagger';

export class CreateRestaurantDto {
  @ApiProperty({ required: true, type: String })
  firstName: string;

  @ApiProperty({ required: true, type: String })
  lastName: string;

  @ApiProperty({ required: true, type: String })
  date: string;

  @ApiProperty({ required: true, type: String })
  time: string;

  @ApiProperty({ required: true, type: String })
  email: string;

  @ApiProperty({ required: true, type: String })
  phone: string;
}
