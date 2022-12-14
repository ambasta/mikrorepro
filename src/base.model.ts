import type { ObjectId } from '@mikro-orm/mongodb';

export abstract class BaseModel {
  _id!: ObjectId;
  id!: string;
  attributes: Record<string, string> = {};
  createdAt: Date = new Date();
  updatedAt: Date = new Date();
}
