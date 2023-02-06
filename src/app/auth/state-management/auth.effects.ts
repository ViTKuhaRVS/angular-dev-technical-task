import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loginUserAction, registerUserAction, setUserInfoAction } from './auth.actions';
import { catchError, map, switchMap } from 'rxjs';
import { AuthHttpService } from '../services/auth-http.service';
import { UserDto, UserResponse } from '../models/user.dto';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {
  registerUser$ = createEffect(() => this.actions$.pipe(
    ofType(registerUserAction.type),
    map((action: { type: string, payload: UserDto }) => action.payload),
    switchMap((user: UserDto) => this.authHttpService.registerUser(user).pipe(
      map((response: UserResponse) => {
        localStorage.setItem('jwt', response.accessToken);
        this.router.navigateByUrl('').then();
        return setUserInfoAction(response.user);
      }),
      catchError(({error}) => {
        alert(error);
        return [];
      })
    ))
  ));

  loginUser$ = createEffect(() => this.actions$.pipe(
    ofType(loginUserAction.type),
    map((action: {type: string, payload: UserDto }) => action.payload),
    switchMap((user: UserDto) => this.authHttpService.loginUser(user).pipe(
      map((response: UserResponse) => {
        localStorage.setItem('jwt', response.accessToken);
        this.router.navigateByUrl('').then();
        return setUserInfoAction(response.user);
      }),
      catchError(({error}) => {
        alert(error);
        return [];
      })
    ))
  ));

  constructor(private actions$: Actions,
              private authHttpService: AuthHttpService,
              private router: Router) {
  }
}
