import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import { plainToClass } from 'class-transformer';

@Injectable()
export class PlainToClassPipe implements PipeTransform {
  transform(value: any, { metatype }: ArgumentMetadata) {
    if (!value || !metatype) {
      return value;
    }

    const validatedValue = plainToClass(metatype, value, {
      excludeExtraneousValues: true,
      exposeUnsetFields: false,
    });

    return validatedValue;
  }
}
