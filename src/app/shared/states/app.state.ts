import { Space } from 'ngx-fabric8-wit';

export interface AppState {
  fabric8Context?: {
    space: Space
  };
}
