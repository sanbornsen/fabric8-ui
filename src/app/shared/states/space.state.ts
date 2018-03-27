import { Space } from 'ngx-fabric8-wit';
import { ProcessTemplate, RelationalData, SpaceAttributes, SpaceLink, SpaceRelationships, Team } from 'ngx-fabric8-wit';

export class SpaceState implements Space {
  name: string;
  path: String;
  process?: ProcessTemplate;
  privateSpace?: boolean;
  teams: Team[];
  defaultTeam: Team;
  id: string;
  attributes: SpaceAttributes;
  type: string;
  links: SpaceLink;
  relationships: SpaceRelationships;
  relationalData?: RelationalData;
  errorMessage: string;
}

export const initialSpaceState: SpaceState | null = null;
