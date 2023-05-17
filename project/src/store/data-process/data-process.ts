import { createSlice } from '@reduxjs/toolkit';
import { Film, Films } from '../../types/data';
import { fetchFilmSimilarAction, fetchFilmsAction, fetchGetFilmAction, fetchPromoFilmAction, fetchSetFavoriteAction } from '../api-actions';
import { NameSpace } from '../../conts';

type DataProcess = {
  films: Films;
  promo: Film | undefined;
  isLoading: boolean;
  similarFilms: Films;
  currentFilm: Film | undefined;
  isFavoriteStatus: boolean;
}

const initialState: DataProcess = {
  films: [],
  promo: undefined,
  isLoading: false,
  similarFilms: [],
  currentFilm: undefined,
  isFavoriteStatus: false,
};

export const dataProcess = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFilmsAction.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchFilmsAction.fulfilled, (state, action) => {
        state.films = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchPromoFilmAction.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchPromoFilmAction.fulfilled, (state, action) => {
        state.promo = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchFilmSimilarAction.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchFilmSimilarAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.similarFilms = action.payload;
      })
      .addCase(fetchGetFilmAction.pending, (state, action) => {
        state.isLoading = true;
        state.currentFilm = action.payload;
      })
      .addCase(fetchGetFilmAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.currentFilm = action.payload;
        if (action.payload.isFavorite === false) {
          state.currentFilm.isFavorite = false;
        } else {
          state.currentFilm.isFavorite = true;
        }
      })
      .addCase(fetchSetFavoriteAction.fulfilled, (state, action) => {
        if (action.payload.isFavorite) {
          state.isFavoriteStatus = true;
        } else {
          state.isFavoriteStatus = false;
        }
      });
  }
});

