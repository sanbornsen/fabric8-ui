import { Action, ActionReducer } from '@ngrx/store';
import * as SpaceContextActions from '../actions/space-context.actions';
import { initialSpaceContextState, SpaceContextState } from '../states/space-context.state';

export const SpaceContextReducer: ActionReducer<SpaceContextState> =
  (state = initialSpaceContextState, action: Action) => {
    switch (action.type) {
      case SpaceContextActions.GET_SUCCESS: {
        const stateString = JSON.stringify(state);
        console.log(`SpaceContextActions.GET_SUCCESS ${JSON.stringify(stateString)}`);
        //return state;
        return {...(action as any).payload};

      }
      case SpaceContextActions.GET_ERROR: {
        const stateString = JSON.stringify(state);
        console.log(`SpaceContextActions.GET_ERROR ${JSON.stringify(stateString)}`);
        return {...(action as any).payload};
      }
      default: {
        const stateString = JSON.stringify(state);
        console.log(`SpaceContextActions.DEFAULT ${JSON.stringify(stateString)}`);
        return state;
      }
    }
  };

