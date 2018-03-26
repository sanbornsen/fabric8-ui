import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { UserService } from 'ngx-login-client';
import { Observable } from 'rxjs';
import * as UserActions from './../actions/user.actions';


@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions,
    private userService: UserService
  ) {}

  @Effect() loadUser$: Observable<Action> = this.actions$
    .ofType(UserActions.GET)
    .switchMap(action => {
      let username = (action as any).payload.username;
      return this.userService
        .getUserByUsername(username)
        .map(val => {
          if (val && val.id) {
            return new UserActions.GetSuccess(val);
          } else {
            Observable.of(new UserActions.GetError({errorMessage: `No user found for ${username}`}));
          }
        });
    });


  // @Effect() successGetUser$: Observable<Action> = this.actions$
  //   .ofType(UserActions.GET_SUCCESS);
  //   // .switchMap(action => {
  //   //   // TODO
  //   // });
}
