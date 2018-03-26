import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  NavigationEnd,
  Resolve,
  Router,
  RouterStateSnapshot
} from '@angular/router';

import { Context, Contexts } from 'ngx-fabric8-wit';
import { BehaviorSubject, ConnectableObservable, Observable, Subject } from 'rxjs';

import { Store } from '@ngrx/store';
import { Navigation } from '../models/navigation';
import * as UserActions from './actions/user.actions';
import { ContextService } from './context.service';
import { AppState } from './states/app.state';
import { UserState } from './states/user.state';

@Injectable()
export class ContextResolver implements Resolve<UserState> {

  private _lastRoute: string;
  private userSpaceVisitedSource: Store<AppState['fabric8-ui']['userSpaceVisited']>;

  constructor(private contextService: ContextService,
              private store: Store<AppState>,
              private router: Router) {
    // The default place to navigate to if the context cannot be resolved
    this._lastRoute = '/_error';
    this.router.errorHandler = (err) => {
      this.router.navigateByUrl(this._lastRoute);
    };

    // Store the last visited URL so we can navigate back if the context
    // cannot be resolved
    this.router.events
      .filter(e => e instanceof NavigationEnd)
      .map((e: NavigationEnd) => e.urlAfterRedirects)
      .subscribe(val => this._lastRoute = val);

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<UserState> {
    this.store.dispatch(new UserActions.Get({username: route.params['entity']}));
    return this.contextService
      .changeContext(Observable.of({
        url: state.url,
        user: route.params['entity'],
        space: route.params['space']
      } as Navigation)).first()
      .catch((err: any, caught: Observable<Context>) => {
        console.log(`Caught in resolver ${err}`);
        return Observable.throw(err);
      });
  }

}
