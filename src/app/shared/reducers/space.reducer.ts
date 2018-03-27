import { Action, ActionReducer } from '@ngrx/store';
import * as SpaceActions from '../actions/space.actions';
import { initialSpaceState, SpaceState } from '../states/space.state';

export const SpaceReducer: ActionReducer<SpaceState> =
  (state = initialSpaceState, action: Action) => {
    switch (action.type) {
      case SpaceActions.GET_SUCCESS: {
        const stateString = JSON.stringify(state);
        console.log(`SpaceActions.SUCCESS ${JSON.stringify(stateString)}`);
        return (action as any).payload;
      }
      case SpaceActions.GET_ERROR: {
        const stateString = JSON.stringify(state);
        console.log(`SpaceActions.GET_ERROR ${JSON.stringify(stateString)}`);
        return (action as any).payload;
      }
      case SpaceActions.ADD_SUCCESS: {
        const stateString = JSON.stringify(state);
        console.log(`SpaceActions.ADD_SUCCESS ${JSON.stringify(stateString)}`);
        return (action as any).payload;
      }
      case SpaceActions.ADD_ERROR: {
        const stateString = JSON.stringify(state);
        console.log(`SpaceActions.ADD_ERROR ${JSON.stringify(stateString)}`);
        return (action as any).payload;
      }
      default: {
        const stateString = JSON.stringify(state);
        console.log(`SpaceActions.DEFAULT ${JSON.stringify(stateString)}`);
        return state;
      }
   }
};

