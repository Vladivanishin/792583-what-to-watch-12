import { FilmNavigation, GenreFilter, NameSpace } from '../../conts';
import { Film } from '../../types/data';
import { State } from '../../types/state';

export const getSelectedFilm = (state: State): Film | null =>
  state[NameSpace.Service].selectedFilm;

export const getSelectedFilmId = (state: State): number | null =>
  state[NameSpace.Service].selectedFilmId;

export const getNavigateFilter = (state: State): FilmNavigation =>
  state[NameSpace.Service].navigationFilter;

export const getGenreFilter = (state: State): GenreFilter =>
  state[NameSpace.Service].genreFilter;
