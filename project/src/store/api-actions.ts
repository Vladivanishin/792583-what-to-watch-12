import { AxiosInstance } from 'axios';
import { AppDispatch, State } from '../types/state';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Film, Films, UserAuthStatus, UserData, UserLoginData } from '../types/data';
import { APIRoute } from '../conts';
import { dropToken, saveToken } from '../services/token';
import { toast } from 'react-toastify';

type ThunkConfig = {
  state: State;
  dispatch: AppDispatch;
  extra: AxiosInstance;
};

type FavoritePostStatus = {
  filmId: number;
  status: number;
}

export const fetchFilmsAction = createAsyncThunk<
  Films,
  undefined,
  ThunkConfig
>('fetchFilms', async (_arg, { dispatch, extra: api }) => {
  const { data: films } = await api.get<Films>(APIRoute.Films);
  return films;
});

export const fetchPromoFilmAction = createAsyncThunk<
  Film,
  undefined,
  ThunkConfig
>('fetchPromoFilm', async (_arg, { dispatch, extra: api }) => {
  const { data: promo } = await api.get<Film>(APIRoute.Promo);
  return promo;
});

export const fetchCheckAuthStatus = createAsyncThunk<
  UserAuthStatus,
  undefined,
  ThunkConfig
>('checkAuthStatus', async (_arg, { dispatch, extra: api }) => {
  try {
    const { data } = await api.get<UserAuthStatus>(APIRoute.Login);
    return data;
  } catch (error) {
    toast('Данные пользователя не получены. Пожалуйста повторите вход!');
    throw error;
  }
});

export const fetchFavoriteFilms = createAsyncThunk<
  Films,
  undefined,
  ThunkConfig
>('fetchFavoriteFilms', async (_arg, { dispatch, extra: api }) => {
  const { data: films } = await api.get<Films>(APIRoute.Favorite);
  return films;
});

export const fetchLoginAction = createAsyncThunk<
  UserData,
  UserLoginData,
  ThunkConfig
>('loginAction', async ({ email, password }, { dispatch, extra: api }) => {
  const { data } = await api.post<UserData>(APIRoute.Login, { email, password });
  saveToken(data.token);
  dispatch(fetchFavoriteFilms());
  return data;
});

export const fetchLogoutAction = createAsyncThunk<void, undefined, ThunkConfig>(
  'logoutAction',
  async (_arg, { dispatch, extra: api }) => {
    await api.delete(APIRoute.Logout);
    dropToken();
  }
);

export const fetchSetFavoriteAction = createAsyncThunk<
  Film,
  FavoritePostStatus,
  ThunkConfig
>('setFavoriteAction', async ({ filmId, status }, { extra: api }) => {
  const { data } = await api.post<Film>(`${APIRoute.Favorite}/${filmId}/${status}`);
  return data;
});

export const fetchGetFilmAction = createAsyncThunk<
  Film,
  number,
  ThunkConfig
>('getFilmAction', async (filmId, { dispatch, extra: api }) => {
  const { data } = await api.get<Film>(`${APIRoute.Films}/${filmId}`);
  return data;
});

export const fetchFilmSimilarAction = createAsyncThunk<
  Films,
  number,
  ThunkConfig
>('data/fetchNearOffer', async (filmId, { dispatch, extra: api }) => {
  const { data } = await api.get<Films>(
    `${APIRoute.Films}/${filmId}/similar`
  );
  return data;
});
