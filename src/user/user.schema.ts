import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Exclude, Transform } from 'class-transformer';
import ObjectId = Types.ObjectId;

@Schema()
export class User extends Document {
  @Prop()
  @Transform((id: ObjectId) => id.toHexString(), { toPlainOnly: true })
  _id: ObjectId;

  @Prop()
  name: string;

  @Prop()
  @Exclude({ toPlainOnly: true })
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
