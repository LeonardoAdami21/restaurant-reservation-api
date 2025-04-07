import { Mongoose } from 'mongoose';

export interface IProvider<T> {
  provide: string;
  useFactory: (mongoose: Mongoose) => T;
  inject: string[];
}
