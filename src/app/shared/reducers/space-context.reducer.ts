import { Action, ActionReducer } from '@ngrx/store';
import * as SpaceContextActions from '../actions/space-context.actions';
import { initialSpaceContextState, SpaceContextState } from '../states/space-context.state';

export const SpaceContextReducer: ActionReducer<SpaceContextState> =
  (state = initialSpaceContextState, action: Action) => {
    switch (action.type) {
      case SpaceContextActions.GET: {
        return {...(action as any).payload};
      }
      case SpaceContextActions.GET_SUCCESS: {
        return {...(action as any).payload};
      }
      case SpaceContextActions.GET_ERROR: {
        return (action as any).payload;
      }
      default: {
        return state;
      }
    }
  };

