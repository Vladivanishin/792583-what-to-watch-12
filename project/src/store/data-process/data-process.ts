import { createSlice } from '@reduxjs/toolkit';
import { Films } from '../../types/data';
import { fetchFilmsAction } from '../api-actions';
import { NameSpace } from '../../conts';

type DataProcess = {
  films: Films;
}

const initialState: DataProcess = {
  films: [],
};

export const dataProcess = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFilmsAction.fulfilled, (state, action) => {
        state.films = action.payload;
      });
  }
});

