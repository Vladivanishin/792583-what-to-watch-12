import { AxiosInstance } from 'axios';
import { AppDispatch, State } from '../types/state';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Films } from '../types/data';
import { APIRoute } from '../conts';

type ThunkConfig = {
  state: State;
  dispatch: AppDispatch;
  extra: AxiosInstance;
};

export const fetchFilmsAction = createAsyncThunk<
  Films,
  undefined,
  ThunkConfig
>('fetchFilms', async (_arg, { dispatch, extra: api }) => {
  const { data: films } = await api.get<Films>(APIRoute.Films);
  return films;
});
