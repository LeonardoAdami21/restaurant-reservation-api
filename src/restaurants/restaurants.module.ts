import { Module } from '@nestjs/common';
import { RestaurantsService } from './restaurants.service';
import { RestaurantsController } from './restaurants.controller';
import { restaurantProviders } from './provider/restaurant.provider';
import { MongooseConfigModule } from '../config/mongo.module';

@Module({
  imports: [MongooseConfigModule],
  controllers: [RestaurantsController],
  providers: [RestaurantsService, ...restaurantProviders],
})
export class RestaurantsModule {}
