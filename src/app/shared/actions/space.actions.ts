import { Action } from '@ngrx/store';
import { Space } from 'ngx-fabric8-wit';

export const GET          = '[space] Get';
export const GET_SUCCESS  = '[space] GetSuccess';
export const GET_ERROR    = '[space] GetError';
export const ADD          = '[space] Add';
export const ADD_ERROR    = '[space] AddError';
export const ADD_SUCCESS  = '[space] AddSuccess';

export class Get implements Action {
  readonly type = GET;
}

export class GetSuccess implements Action {
  payload: Space;
  constructor(payload: Space) {
    this.payload = payload;
  }
  readonly type = GET_SUCCESS;
}

export class GetError implements Action {
  readonly type = GET_ERROR;
}

export class Add implements Action {
  payload: {spaceName: string, ownerId: string};
  constructor(payload: {spaceName: string, ownerId: string}) {
    this.payload = payload;
  }
  readonly type = ADD;
}

export class AddSuccess implements Action {
  payload: Space;
  constructor(payload: Space) {
    this.payload = payload;
  }
  readonly type = ADD_SUCCESS;
}

export class AddError implements Action {
  readonly type = ADD_ERROR;
}

export type All
  = Get
  | GetSuccess
  | GetError
  | Add
  | AddSuccess
  | AddError;

