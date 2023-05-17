import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Film } from '../../types/data';
import { FilmNavigation, GenreFilter, NameSpace } from '../../conts';

type ServiceProcess = {
  selectedFilm: Film | null;
  selectedFilmId: number | null;
  navigationFilter: FilmNavigation;
  genreFilter: GenreFilter;
  isFavorite: boolean;
  film: Film | null;
  promo: Film | null;
}

const initialState: ServiceProcess = {
  selectedFilm: null,
  selectedFilmId: null,
  navigationFilter: FilmNavigation.Overview,
  genreFilter: GenreFilter.AllGenres,
  isFavorite: false,
  film: null,
  promo: null,
};

export const serviceProcess = createSlice({
  name: NameSpace.Service,
  initialState,
  reducers: {
    selectFilm: (state, action: PayloadAction<Film>) => {
      state.selectedFilm = action.payload;
    },
    selectFilmId: (state, action: PayloadAction<number | null>) => {
      state.selectedFilmId = action.payload;
    },
    changeNavigation: (state, action: PayloadAction<FilmNavigation>) => {
      state.navigationFilter = action.payload;
    },
    changeGenre: (state, action: PayloadAction<GenreFilter>) => {
      state.genreFilter = action.payload;
    },
    setFavorite: (state, action: PayloadAction<boolean>) => {
      state.isFavorite =
    },
  },
});

export const { selectFilm, selectFilmId, changeNavigation, changeGenre } = serviceProcess.actions;
