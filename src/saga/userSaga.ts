import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import { getUserFailure, getUserPostsFailure, getUserPostsSuccess, getUserSuccess } from '../store/userReducer';

function* workGetUserFetch(action: any): Generator<any, void, any> {
	try {
		const response = yield call(() =>
			axios.get(`https://jsonplaceholder.typicode.com/users/${action.payload}`)
		);
		const formattedUser = response.data;
		yield put(getUserSuccess(formattedUser));
	} catch (error) {
		yield put(getUserFailure());
	}
}

function* userSaga() {
	yield takeEvery('user/getUserFetch', workGetUserFetch);
}

function* workGetUserPostsFetch(action: any): Generator<any, void, any> {
	try {
		const response = yield call(() =>
			axios.get(`https://jsonplaceholder.typicode.com/users/${action.payload}/posts`)
		);
		const formattedUser = response.data;
		yield put(getUserPostsSuccess(formattedUser));
	} catch (error) {
		yield put(getUserPostsFailure());
	}
}

function* userPostsSaga() {
	yield takeEvery('user/getUserPostsFetch', workGetUserPostsFetch);
}

export { userSaga, userPostsSaga };

