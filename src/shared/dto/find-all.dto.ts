import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsObject,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

export class FindAllDto<Entity = any> {
  @IsNumber()
  page: number;

  @IsNumber()
  pageSize: number;

  @IsObject()
  order: {
    [P in keyof Entity]?: "ASC" | "DESC" | 1 | -1;
  }

  @ValidateNested({ each: true })
  @Type(() => Where)
  where: Where[];
}

export enum WhereTypeEnum {
  LIKE,
  SIMPLE
}

export class Where<V = any> {
  @IsNotEmpty()
  key: string;

  @IsNotEmpty()
  value: V;

  @IsEnum(WhereTypeEnum)
  type: WhereTypeEnum;

  constructor(key: string, value: V, type: WhereTypeEnum) {
    this.key = key;
    this.value = value;
    this.type = type;
  }
}
