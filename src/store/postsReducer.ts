import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface PostsI {
	userId: number,
	id: number,
	title: string,
	body: string,
}

interface initialStateI {
	posts: PostsI[],
	filteredPosts: PostsI[],
	isLoading: boolean,
}

const initialState: initialStateI = {
	posts: [],
	filteredPosts: [],
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
			state.filteredPosts = action.payload;
			state.isLoading = false;
		},
		getPostsFailure: (state) => {
			state.isLoading = false;
		},
		setFilteredPosts: (state, action: PayloadAction<PostsI[]>) => {
			state.filteredPosts = action.payload;
		}
	}
});

export const {
	getPostsSuccess,
	getPostsFailure,
	getPostsFetch,
	setFilteredPosts,
} = postsSlice.actions;

export default postsSlice.reducer;
