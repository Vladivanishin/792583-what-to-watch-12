import { PayloadAction } from '@reduxjs/toolkit';
import { rootReducer } from '..';
import { Middleware } from '@reduxjs/toolkit';
import { browserHistory } from '../../browser-history';

type Reducer = ReturnType<typeof rootReducer>;

export const redirect: Middleware<unknown, Reducer> =
  (_store) => (next) => (action: PayloadAction<string>) => {
    if (action.type === 'user/redirectToRoute') {
      browserHistory.push(action.payload);
    }

    return next(action);
  };
