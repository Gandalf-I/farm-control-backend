import { TypeOrmModuleAsyncOptions, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { AppConfigService } from '@core/config/config.service';
import { ConfigKeysEnum } from '@core/config/enums/config-keys.enum';
import { getMetadataArgsStorage } from 'typeorm';

export const DATABASE_SETTINGS: TypeOrmModuleAsyncOptions = {
  useFactory: async (configService: AppConfigService): Promise<TypeOrmModuleOptions> => ({
    type: 'postgres',
    host: configService.get(ConfigKeysEnum.DATABASE_HOST),
    port: configService.get<number>(ConfigKeysEnum.DATABASE_PORT),
    username: configService.get(ConfigKeysEnum.DATABASE_USER),
    password: configService.get(ConfigKeysEnum.DATABASE_PASSWORD),
    database: configService.get(ConfigKeysEnum.DATABASE_NAME),
    synchronize: true,
    entities: getMetadataArgsStorage().tables.map(tbl => tbl.target)
  }),
  inject: [AppConfigService],
}
