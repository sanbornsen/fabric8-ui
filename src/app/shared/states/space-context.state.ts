import { Space } from 'ngx-fabric8-wit';
import { UserState } from './user.state';

export class SpaceContextState {
  currentEntity: UserState;
  currentSpace: Space;
  errorMessage: string;
}

export const initialSpaceContextState: SpaceContextState | null = null;
