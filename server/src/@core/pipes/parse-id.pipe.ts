import { Injectable, NotFoundException, PipeTransform } from '@nestjs/common';

@Injectable()
export class ParseIdPipe implements PipeTransform {
  transform(value: string): number {
    const parsedId = parseInt(value);

    if (isNaN(parsedId)) {
      throw new NotFoundException();
    }

    return parsedId;
  }
}
