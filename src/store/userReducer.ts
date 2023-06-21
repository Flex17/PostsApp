import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PostsI } from './postsReducer';

interface UserI {
	id: number,
	name: string,
	username: string,
	email: string,
	address: {
		city: string,
	},
	phone: string,
}

interface initialStateI {
	user: UserI | null,
	posts: PostsI[] | null,
	isUserLoading: boolean,
	isPostsLoading: boolean,
}

const initialState: initialStateI = {
	user: null,
	posts: null,
	isUserLoading: false,
	isPostsLoading: false,
}

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		getUserFetch: (state, action: PayloadAction<string>) => {
			state.isUserLoading = true;
		},
		getUserSuccess: (state, action: PayloadAction<UserI>) => {
			state.user = action.payload;
			state.isUserLoading = false;
		},
		getUserFailure: (state) => {
			state.isUserLoading = false;
		},

		getUserPostsFetch: (state, action: PayloadAction<string>) => {
			state.isPostsLoading = true;
		},
		getUserPostsSuccess: (state, action: PayloadAction<PostsI[]>) => {
			state.posts = action.payload;
			state.isPostsLoading = false;
		},
		getUserPostsFailure: (state) => {
			state.isPostsLoading = false;
		},
	}
});

export const {
	getUserFetch,
	getUserSuccess,
	getUserFailure,
	getUserPostsSuccess,
	getUserPostsFailure,
	getUserPostsFetch,
} = userSlice.actions;

export default userSlice.reducer;
