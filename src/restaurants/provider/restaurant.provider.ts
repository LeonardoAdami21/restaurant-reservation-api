import { IProvider } from '../../interface/IProvider';
import { DATA_SOURCE } from '../../config/data.source';
import mongoose, { Model, Mongoose } from 'mongoose';
import { RestaurantSchema } from '../schema/restaurant.schema';

export const RESTAURANT__MODEL = 'RESTAURANT__MODEL';

export const restaurantProviders: IProvider<Model<any>>[] = [
  {
    provide: RESTAURANT__MODEL,
    useFactory: (mongoose: Mongoose): Model<any> => {
      return mongoose.model('Restaurants', RestaurantSchema);
    },
    inject: [DATA_SOURCE],
  },
];
