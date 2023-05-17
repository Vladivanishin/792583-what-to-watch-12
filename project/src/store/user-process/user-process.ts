import { createSlice } from '@reduxjs/toolkit';
import { AuthorizationStatus, NameSpace } from '../../conts';
import { Films, UserData } from '../../types/data';
import { fetchCheckAuthStatus, fetchFavoriteFilms, fetchGetFilmAction, fetchLoginAction, fetchSetFavoriteAction } from '../api-actions';

type UserProcess = {
  authStatus: AuthorizationStatus;
  userData: UserData | null;
  favorites: Films;
  isFavoriteFilm: boolean;
};

const initialState: UserProcess = {
  authStatus: AuthorizationStatus.Unknown,
  userData: null,
  favorites: [],
  isFavoriteFilm: false,
};

export const userProcess = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCheckAuthStatus.fulfilled, (state, action) => {
        state.userData = action.payload;
        state.authStatus = AuthorizationStatus.Auth;
      })
      .addCase(fetchCheckAuthStatus.rejected, (state, action) => {
        state.authStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(fetchLoginAction.fulfilled, (state, action) => {
        state.authStatus = AuthorizationStatus.Auth;
        state.userData = action.payload;
      })
      .addCase(fetchLoginAction.rejected, (state, action) => {
        state.authStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(fetchFavoriteFilms.fulfilled, (state, action) => {
        state.favorites = action.payload;
      })
      .addCase(fetchSetFavoriteAction.fulfilled, (state, action) => {
        if (action.payload.isFavorite) {
          state.favorites.push(action.payload);
          state.isFavoriteFilm = action.payload.isFavorite;
        } else {
          state.favorites = state.favorites.filter(({ id }) => id !== action.payload.id);
        }
      })
      .addCase(fetchGetFilmAction.fulfilled, (state, action) => {
        state.isFavoriteFilm = action.payload.isFavorite;
      });
  }
});
