import { MikroOrmModule } from "@mikro-orm/nestjs";
import { Module } from "@nestjs/common";

import { RealmModel } from "./realm.model.js";

@Module({
  imports: [
    MikroOrmModule.forFeature(
      [RealmModel]
    )
  ],
})
export class RealmModule { }
