import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { UserService } from 'ngx-login-client';
import { Observable } from 'rxjs';
import * as SpaceContextActions from './../actions/space-context.actions';
import * as SpaceActions from './../actions/space.actions';
import * as UserActions from './../actions/user.actions';

@Injectable()
export class SpaceContextEffects {
  constructor(
    private actions$: Actions,
    private userService: UserService
  ) {}

  @Effect() loadUser$: Observable<Action> = this.actions$
    .ofType(SpaceContextActions.GET)
    .do(action => {
      let username = (action as any).payload.username;
      let spacename = (action as any).payload.spacename;
      if (spacename && username) {
        return new SpaceActions.Get({username, spacename});
      } else if (username) {
        return new UserActions.Get({username});
      }

    });

}
