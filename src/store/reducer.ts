import { combineReducers } from '@reduxjs/toolkit';
import postsReducer from './postsReducer';

export const reducers = combineReducers({
	posts: postsReducer,
});

export type RootState = ReturnType<typeof reducers>
