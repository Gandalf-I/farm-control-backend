import * as Joi from '@hapi/joi';
import { SchemaLike } from '@hapi/joi';
import { ConfigKeysEnum } from '@core/config/enums/config-keys.enum';
import { ModeEnum } from '@core/config/enums/mode.enum';

export const configValidator = Joi.object<ConfigKeysEnum, SchemaLike>({
  [ConfigKeysEnum.NODE_ENVIRONMENT]: Joi
    .string()
    .valid(ModeEnum.Development, ModeEnum.Production),
  [ConfigKeysEnum.SERVER_PORT]: Joi
    .number(),
  [ConfigKeysEnum.DATABASE_PORT]: Joi
    .number(),
  [ConfigKeysEnum.DATABASE_HOST]: Joi
    .string(),
  [ConfigKeysEnum.DATABASE_USER]: Joi
    .string(),
  [ConfigKeysEnum.DATABASE_PASSWORD]: Joi
    .string(),
  [ConfigKeysEnum.DATABASE_NAME]: Joi
    .string(),
  [ConfigKeysEnum.SERVER_HOST]: Joi
    .string()
});

