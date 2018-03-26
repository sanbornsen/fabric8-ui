import { Action, ActionReducer } from '@ngrx/store';
import * as UserActions from '../actions/user.actions';
import { UserState } from '../states/user.state';

export const initialState: UserState | null = null;

export const UserReducer: ActionReducer<UserState> =
  (state = initialState, action: Action) => {
    switch (action.type) {
      case UserActions.GET: {
        return (action as any).payload;
      }
      case UserActions.GET_SUCCESS: {
        return (action as any).payload;
      }
      case UserActions.GET_ERROR: {
        return (action as any).payload;
      }
      case UserActions.UPDATE_SUCCESS: {
        return (action as any).payload;
      }
      case UserActions.UPDATE_ERROR: {
        return (action as any).payload;
      }
      default: {
        return state;
      }
    }
  };

