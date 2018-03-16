import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import {
  Notification,
  Notifications,
  NotificationType
} from 'ngx-base';
import { Space, SpaceAttributes, Spaces, SpaceService } from 'ngx-fabric8-wit';
import { Observable } from 'rxjs';
import { ADD, GET, GetError, GetSuccess } from './../actions/space.actions';


@Injectable()
export class SpaceEffects {
  constructor(
    private actions$: Actions,
    private spaces: Spaces,
    private spaceService: SpaceService,
    private notifications: Notifications
  ) {}

  @Effect() getSpace$: Observable<Action> = this.actions$
    .ofType(GET)
    .switchMap(action => {
      return this.spaces.current
        .map((space: Space) => {
          return new GetSuccess(space);
        })
        .catch(e => {
          try {
            this.notifications.message({
              message: `Problem in getting space`,
              type: NotificationType.DANGER
            } as Notification);
          } catch (e) {
            console.log('Problem in getting space');
          }
          return Observable.of(new GetError());
        });
    });
  @Effect() createSpace$: Observable<Action> = this.actions$
    .ofType(ADD)
    .switchMap((action: Action) => {
      let newSpace = this.createTransientSpace((action as any).payload.spaceName, (action as any).payload.ownerId);
      return this.spaceService.create(newSpace)
        .map((space: Space) => {
          return new GetSuccess(space);
        })
        .catch(e => {
          try {
            this.notifications.message({
              message: `Problem in getting space`,
              type: NotificationType.DANGER
            } as Notification);
          } catch (e) {
            console.log('Problem in getting space');
          }
          return Observable.of(new GetError());
        });
    });

  private createTransientSpace(name: string, ownerId: string): Space {
    let space = {} as Space;
    space.name = name;
    space.path = '';
    space.attributes = new SpaceAttributes();
    space.attributes.name = space.name;
    space.type = 'spaces';
    space.privateSpace = false;
    space.process = { name: '', description: '' };
    space.relationships = {
      areas: {
        links: {
          related: ''
        }
      },
      iterations: {
        links: {
          related: ''
        }
      },
      workitemtypegroups: {
        links: {
          related: ''
        }
      },
      'owned-by': {
        data: {
          id: ownerId,
          type: 'identities'
        }
      }
    };
    return space;
  }
}
