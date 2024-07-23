import { HttpParams } from '@angular/common/http';
import { EGameListType } from './enum-game-list-type.interface';

export interface IGameQueryParams {
  query_type: EGameListType;
  params: HttpParams | undefined;
}
