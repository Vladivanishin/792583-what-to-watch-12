import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { createAPI } from '../services/api';
import { NameSpace } from '../conts';
import { dataProcess } from './data-process/data-process';
import { redirect } from './middlewares/redirect';
import { userProcess } from './user-process/user-process';
import { serviceProcess } from './service-process/service-process';

const api = createAPI();

export const rootReducer = combineReducers({
  [NameSpace.Data]: dataProcess.reducer,
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.Service]: serviceProcess.reducer,
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
