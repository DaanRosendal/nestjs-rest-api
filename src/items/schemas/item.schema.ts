import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ItemDocument = Item & Document;

@Schema()
class Item {
  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop()
  quantity: number;
}

export const ItemSchema = SchemaFactory.createForClass(Item);
