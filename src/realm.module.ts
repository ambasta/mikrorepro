import { MikroOrmModule } from "@mikro-orm/nestjs";
import { Module } from "@nestjs/common";

import { RealmSchema } from "./realm.entity.js";

@Module({
  imports: [
    MikroOrmModule.forFeature(
      [RealmSchema]
    )
  ],
})
export class RealmModule { }
