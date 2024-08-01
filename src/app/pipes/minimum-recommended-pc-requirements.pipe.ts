import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'minimumRecommendedPcRequirements',
})
export class MinimumRecommendedPcRequirementsPipe implements PipeTransform {
  transform(requirements: string): string[] {
    const EMPTY_STRING =
      requirements === '' ||
      requirements === undefined ||
      requirements === null;
    if (EMPTY_STRING) {
      return ['--'];
    }
    // Remove inícios de string vindos da API
    const removeStartsOfString = requirements
      .replace('Minimum:\r\n\r\n', '')
      .replace('Minimum:\n', '')
      .replace('Recommended:\r\n\r\n', '')
      .replace('Recommended:\n', '');

    // Separa a string em espaços pré formatados vindos da resposta da API para serem utilizados
    // em um loop @for e gerar uma lista <li> de requerimentos.
    // Caso 1 de pré formatação recebida da API \r\n\r\n
    let splitInPreFormattedWhiteSpaces = removeStartsOfString.split('\r\n\r\n');

    // Caso 2 de pré formatação recebida da API \n
    if (splitInPreFormattedWhiteSpaces.length === 1) {
      splitInPreFormattedWhiteSpaces =
        splitInPreFormattedWhiteSpaces[0].split('\n');
    }

    // Caso 3 string recebida sem formatação - limitar tamanho
    if (splitInPreFormattedWhiteSpaces.length === 1) {
      splitInPreFormattedWhiteSpaces[0] =
        splitInPreFormattedWhiteSpaces[0].substring(0, 700).trim() + '...';
    }

    return splitInPreFormattedWhiteSpaces;
  }
}
