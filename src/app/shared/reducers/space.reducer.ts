import { Action, ActionReducer } from '@ngrx/store';
import { Space } from 'ngx-fabric8-wit';
import { ADD_ERROR, ADD_SUCCESS, All, GET, GET_ERROR, GET_SUCCESS } from '../actions/space.actions';
import { initialState } from '../states/space.state';

export const SpaceReducer: ActionReducer<Space> =
  (state = initialState, action: Action) => {
    switch (action.type) {
      case GET_SUCCESS: {
        return (action as any).payload;
      }
      case GET_ERROR: {
        return state;
      }
      case ADD_SUCCESS: {
        return (action as any).payload;
      }
      case ADD_ERROR: {
        return state;
      }
      default: {
        return state;
      }
   }
};

