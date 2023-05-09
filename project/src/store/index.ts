import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { createAPI } from '../services/api';
import { NameSpace } from '../conts';
import { dataProcess } from './data-process/data-process';
import { redirect } from './middlewares/redirect';

const api = createAPI();

export const rootReducer = combineReducers({
  [NameSpace.Data]: dataProcess.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }).concat(redirect),
});
