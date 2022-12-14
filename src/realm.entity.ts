import { EntitySchema } from "@mikro-orm/core";

import type { BaseModel } from "./base.model.js";
import { RealmModel } from "./realm.model.js";
import { EStatus } from "./status.js";

export const RealmSchema = new EntitySchema<RealmModel, BaseModel>({
  class: RealmModel,
  extends: 'BaseModel',
  properties: {
    name: { type: String },
    status: { enum: true, items: () => EStatus }
  },
  indexes: [{
    properties: ['name', 'status'],
  }],
  uniques: [{
    properties: ['name'],
  }]
});
