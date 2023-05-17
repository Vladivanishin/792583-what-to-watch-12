import { AuthorizationStatus, NameSpace } from '../../conts';
import { Films, UserAuthStatus } from '../../types/data';
import { State } from '../../types/state';

export const getAuthStatus = (state: State): AuthorizationStatus =>
  state[NameSpace.User].authStatus;

export const getUserData = (state: State): UserAuthStatus | null =>
  state[NameSpace.User].userData;

export const getFavorites = (state: State): Films =>
  state[NameSpace.User].favorites;

export const getIsFavoriteFilm = (state: State): boolean =>
  state[NameSpace.User].isFavoriteFilm;
