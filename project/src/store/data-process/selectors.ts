import { NameSpace } from '../../conts';
import { Film, Films } from '../../types/data';
import { State } from '../../types/state';

export const getFilms = (state: State): Films =>
  state[NameSpace.Data].films;

export const getSimilarFilms = (state: State): Films =>
  state[NameSpace.Data].similarFilms;

export const getPromo = (state: State): Film | undefined =>
  state[NameSpace.Data].promo;

export const getCurrentFilm = (state: State): Film | undefined =>
  state[NameSpace.Data].currentFilm;

export const getIsLoading = (state: State): boolean =>
  state[NameSpace.Data].isLoading;

export const getFavoriteStatus = (state: State): boolean =>
  state[NameSpace.Data].isFavoriteStatus;
