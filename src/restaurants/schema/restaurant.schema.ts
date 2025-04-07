import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type RestaurantDocument = Restaurant & Document;
@Schema({
  timestamps: true,
})
export class Restaurant {
  @Prop({ required: true, type: String, minlength: 3, maxlength: 50 })
  firstName: string;

  @Prop({ required: true, type: String, minlength: 3, maxlength: 50 })
  lastName: string;

  @Prop({ required: true, type: String })
  date: string;

  @Prop({ required: true, type: String })
  time: string;

  @Prop({ required: true, type: String, unique: true })
  email: string;

  @Prop({ required: true, type: String, minlength: 11, maxlength: 11 })
  phone: string;
}

export const RestaurantSchema = SchemaFactory.createForClass(Restaurant);
