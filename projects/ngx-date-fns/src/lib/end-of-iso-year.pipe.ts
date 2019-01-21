import { Pipe, PipeTransform } from '@angular/core';
import { endOfISOYear } from 'date-fns';

@Pipe({ name: 'dfnsEndOfISOYear' })
export class EndOfISOYearPipe implements PipeTransform {
  static readonly NO_ARGS_ERROR =
    'dfnsEndOfISOYear: missing required arguments';

  transform(date: string | number | Date): Date {
    if (!date) {
      throw new Error(EndOfISOYearPipe.NO_ARGS_ERROR);
    }
    return endOfISOYear(date);
  }
}
