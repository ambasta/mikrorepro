import { MikroOrmModule } from '@mikro-orm/nestjs';
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { BaseSchema }  from './base.entity.js';
import { RealmSchema } from './realm.entity.js';
import { RealmModule } from './realm.module.js';

@Module({
  imports: [
    RealmModule,
    MikroOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'mongo',
        dbName: config.get<string>('DB_NAME') ?? 'hello',
        entities: [
          BaseSchema,
          RealmSchema,
        ],
        forceUtcTimezone: true,
        metadataProvider: TsMorphMetadataProvider,
      }),
    }),
  ],
})
export class CoreModule {
}
