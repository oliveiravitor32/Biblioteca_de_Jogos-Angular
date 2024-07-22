import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gameDescription'
})
export class GameDescriptionPipe implements PipeTransform {

  transform(description: string): string {
    const INVALID_DESCRIPTION = !description;
    const MAX_LENGTH = 850;

    if(INVALID_DESCRIPTION) {
      return "Descrição indisponível";
    }
   
    return description.substring(0, MAX_LENGTH) + '...';
  }

}
