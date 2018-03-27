import { Action } from '@ngrx/store';
import { SpaceContextState } from '../states/space-context.state';

export const GET          = '[space-context] Get';
export const GET_SUCCESS  = '[space-context] GetSuccess';
export const GET_ERROR    = '[space-context] GetError';

export class Get implements Action {
  constructor(public payload: {username: string, spacename: string}) {}
  readonly type = GET;
}

export class GetSuccess implements Action {
  constructor(public payload: SpaceContextState) {}
  readonly type = GET_SUCCESS;
}

export class GetError implements Action {
  constructor(public payload: {errorMessage: string}) {}
  readonly type = GET_ERROR;
}

export type All
  = Get
  | GetSuccess
  | GetError;
