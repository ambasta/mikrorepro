import { EntitySchema } from "@mikro-orm/core";

import type { BaseModel } from "./base.model.js";

export const BaseSchema = new EntitySchema<BaseModel>({
  name: 'BaseModel',
  abstract: true,
  properties: {
    _id: {
      type: 'ObjectId',
      primary: true,
    },
    id: {
      type: String,
      serializedPrimaryKey: true,
    },
    attributes: {
      type: 'object',
    },
    createdAt: {
      type: Date,
    },
    updatedAt: {
      type: Date,
      onUpdate: () => new Date()
    },
  },
});
