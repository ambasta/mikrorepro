import { BaseModel } from "./base.model.js";
import type { EStatus } from "./status.js";

export class RealmModel extends BaseModel {
  name!: string;
  status!: EStatus;
}
