import { Body, Controller, Post } from '@nestjs/common';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { RestaurantsService } from './restaurants.service';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
  ApiOperation,
} from '@nestjs/swagger';

@Controller('restaurants')
export class RestaurantsController {
  constructor(private readonly restaurantsService: RestaurantsService) {}

  @ApiOperation({
    summary: 'Create a new restaurant',
    description: 'This endpoint creates a new restaurant.',
  })
  @ApiCreatedResponse({
    description: 'The restaurant has been successfully created.',
  })
  @ApiBadRequestResponse({
    description: 'Invalid input data.',
  })
  @ApiInternalServerErrorResponse({
    description: 'An internal server error occurred.',
  })
  @Post()
  create(@Body() createRestaurantDto: CreateRestaurantDto) {
    return this.restaurantsService.create(createRestaurantDto);
  }
}
