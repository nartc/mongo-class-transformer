import { Injectable } from '@nestjs/common';
import { User } from './user.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { plainToClass } from 'class-transformer';

@Injectable()
export class UserService {

  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}

  // Exception: TypeError: Cannot read property 'plugin' of undefined
  getUsers(): Promise<User[]> {
    return this.userModel
      .find()
      .lean()
      .then((users) => plainToClass(User, users));
  }
}
