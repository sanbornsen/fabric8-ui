import { Space } from 'ngx-fabric8-wit';
import { Feature } from '../../feature-flag/service/feature-toggles.service';
import { MenuItem } from '../../models/menu-item';
import { UserState } from './user.state';


export interface AppState {
  'fabric8-ui'?: {
    space: Space, // rename spaceVisited
    userSpaceVisited: UserState,
    featureflags: Feature[],
    menus: MenuItem[]
  };
}
