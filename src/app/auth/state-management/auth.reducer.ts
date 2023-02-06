import { createReducer, createSelector, on } from '@ngrx/store';
import { logoutUser, setUserInfoAction } from './auth.actions';
import { AuthState, selectAuthState } from '../../models/store.model';

const initialState: AuthState = {
  userId: 0,
  userEmail: '',
  userName: '',
}

export const selectUserId = createSelector(
  selectAuthState,
  (state: AuthState) => state.userId
);

export const selectUserName = createSelector(
  selectAuthState,
  (state: AuthState) => state.userName
);

export const authReducer = createReducer(
  initialState,
  on(setUserInfoAction, (state, user) => ({
    userId: user.id!,
    userEmail: user.email,
    userName: user.name,
  })),
  on(logoutUser, (state) => ({
    userId: 0,
    userEmail: '',
    userName: '',
  }))
);
