import { Action, ActionReducer } from '@ngrx/store';
import * as UserActions from '../actions/user.actions';
import { UserState } from '../states/user.state';

export const initialUserState: UserState | null = null;

export const UserReducer: ActionReducer<UserState> =
  (state = initialUserState, action: Action) => {
    switch (action.type) {
      case UserActions.GET_SUCCESS: {
        const stateString = JSON.stringify({...(action as any).payload});
        console.log(`UserActions.GET_SUCCESS ${JSON.stringify(stateString)}`);
        return {...(action as any).payload};
      }
      case UserActions.GET_ERROR: {
        const stateString = JSON.stringify(state);
        console.log(`UserActions.GET_ERROR ${JSON.stringify(stateString)}`);
        return (action as any).payload;
      }
      default: {
        const stateString = JSON.stringify(state);
        console.log(`UserActions.DEFAULT ${JSON.stringify(stateString)}`);
        return state;
      }
    }
  };

