import { Action } from '@ngrx/store';
import { User } from 'ngx-login-client';

export const GET          = '[user] Get';
export const GET_SUCCESS  = '[user] GetSuccess';
export const GET_ERROR    = '[user] GetError';
export const UPDATE          = '[user] Update';
export const UPDATE_ERROR    = '[user] UpdateError';
export const UPDATE_SUCCESS  = '[user] UpdateSuccess';

export class Get implements Action {
  constructor(public payload: {username: string}) {}
  readonly type = GET;
}

export class GetSuccess implements Action {
  constructor(public payload: User) {}
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

