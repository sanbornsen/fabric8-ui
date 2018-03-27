import { Space } from 'ngx-fabric8-wit';
import { Feature } from '../../feature-flag/service/feature-toggles.service';
import { MenuItem } from '../../models/menu-item';
import { UserState } from './user.state';

import { SpaceContextState } from './space-context.state';

export const initialAppState: AppState | null = null;

export interface AppState {
  'fabric8-ui'?: {
    spaceContext?: SpaceContextState,
    userContext: {
      loggedInuser: UserState,
      featureflags: Feature[],
      menus: MenuItem[]
    }

  };
}
