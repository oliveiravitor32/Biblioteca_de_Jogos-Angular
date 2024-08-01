import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncateGameDescription',
})
export class TruncateGameDescriptionPipe implements PipeTransform {
  transform(description: string): string {
    const INVALID_DESCRIPTION = !description;
    const MAX_LENGTH = 700;

    if (INVALID_DESCRIPTION) {
      return 'Descrição indisponível';
    }

    const VALUE_LESS_THAN_MAX_LENGTH = description.length <= MAX_LENGTH;

    if (VALUE_LESS_THAN_MAX_LENGTH) {
      return description;
    }

    return description.substring(0, MAX_LENGTH).trim() + '...';
  }
}
