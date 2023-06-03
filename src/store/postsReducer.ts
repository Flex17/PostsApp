import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PostsI {
	userId: number,
	id: number,
	title: string,
	body: string,
}

interface initialStateI {
	posts: PostsI[],
	isLoading: boolean,
}

const initialState: initialStateI = {
	posts: [],
	isLoading: false,
}

export const postsSlice = createSlice({
	name: 'posts',
	initialState,
	reducers: {
		getPostsFetch: (state) => {
			state.isLoading = true;
		},
		getPostsSuccess: (state, action: PayloadAction<PostsI[]>) => {
			state.posts = action.payload;
			state.isLoading = false;
		},
		getPostsFailure: (state) => {
			state.isLoading = false;
		}
	}
});

export const {
	getPostsSuccess,
	getPostsFailure,
	getPostsFetch,
} = postsSlice.actions;

export default postsSlice.reducer;
