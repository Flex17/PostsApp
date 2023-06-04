import { combineReducers } from '@reduxjs/toolkit';
import postsReducer from './postsReducer';
import userReducer from './userReducer';

export const reducers = combineReducers({
	posts: postsReducer,
	user: userReducer,
});

export type RootState = ReturnType<typeof reducers>
