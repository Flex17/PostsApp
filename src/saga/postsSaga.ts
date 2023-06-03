import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import { getPostsFailure, getPostsSuccess } from '../store/postsReducer';

function* workGetPostsFetch(): Generator<any, void, any> {
	try {
		const response = yield call(() =>
			axios.get('https://jsonplaceholder.typicode.com/posts')
		);
		const formattedPosts = response.data;
		yield put(getPostsSuccess(formattedPosts));
	} catch (error) {
		yield put(getPostsFailure());
	}
}

function* postsSaga() {
	yield takeEvery('posts/getPostsFetch', workGetPostsFetch);
}

export default postsSaga;

