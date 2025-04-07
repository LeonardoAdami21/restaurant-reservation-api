import {
  BadRequestException,
  ConflictException,
  Inject,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { RESTAURANT__MODEL } from './provider/restaurant.provider';
import { Model } from 'mongoose';

@Injectable()
export class RestaurantsService {
  constructor(
    @Inject(RESTAURANT__MODEL)
    private readonly restaurantModel: Model<'Restaurants'>,
  ) {}
  async create(dto: CreateRestaurantDto) {
    try {
      const { firstName, lastName, email, phone, date, time } = dto;
      if (!firstName || !lastName || !email || !phone || !date || !time) {
        throw new BadRequestException('All fields are required');
      }
      if (phone.length !== 11) {
        throw new BadRequestException('Phone number must be 11 digits');
      }
      if (!/^\d{11}$/.test(phone)) {
        throw new BadRequestException('Phone number must contain only digits');
      }
      if (!/^\S+@\S+\.\S+$/.test(email)) {
        throw new ConflictException('Invalid email format');
      }
      await this.restaurantModel.create(dto);
      return {
        message: 'Restaurant created successfully',
        data: dto,
      };
    } catch (error) {
      throw new InternalServerErrorException(
        'An error occurred while creating the restaurant',
      );
    }
  }
}
