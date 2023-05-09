import { createAction } from '@reduxjs/toolkit';
import { AppRoute } from '../conts';

export const redirectToRoute = createAction<AppRoute>('user/redirectToRoute');
