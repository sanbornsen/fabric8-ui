import { SpaceState } from './space.state';
import { UserState } from './user.state';

export interface AppState {
  'fabric8-ui': {
    currentSpace: SpaceState;
    currentEntity: UserState;
  };
}
