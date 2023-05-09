import { NameSpace } from '../../conts';
import { Films } from '../../types/data';
import { State } from '../../types/state';

export const getFilms = (state: State): Films =>
  state[NameSpace.Data].films;
