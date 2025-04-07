
import mongoose, { Mongoose } from 'mongoose';
import { DATA_SOURCE } from './data.source';
import { mongoDbUrl } from '../env/envoriment';

export const databaseProviders = [
  {
    provide: DATA_SOURCE,
    useFactory: async () => {
      const mongo = mongoose.connect(mongoDbUrl);
      return mongo;
    },
  },
];
