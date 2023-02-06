import { createAction, props } from '@ngrx/store';
import { UserDto } from '../models/user.dto';

export const loginUserAction = createAction('[Auth] Login user', props<{payload: UserDto}>());

export const registerUserAction = createAction('[Auth] Register user', props<{payload: UserDto}>());

export const setUserInfoAction = createAction('[Auth] Set user info', props<UserDto>());

export const logoutUser = createAction('[Auth] Logout user');
