import { createAction, props } from '@ngrx/store';
import { Movie } from '../movie';

export const fetchMovies = createAction(
  '[MOVIES] Fetch Movies',
);

export const fetchMoviesSuccess = createAction(
  '[MOVIES] Fetch Movies Success',
  props<{ movies: Movie[] }>(),
);
