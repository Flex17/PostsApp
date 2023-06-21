import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUserFetch, getUserPostsFetch } from '../../store/userReducer';
import { RootState } from '../../store/reducer';
import { Container, Row } from 'react-bootstrap';
import Spinner from '../../ui/Spinner';
import useDelay from '../../hooks/useDelay';
import css from './userPage.module.scss';
import UserPosts from './userPosts/UserPosts';
import UserInfo from './userInfo/UserInfo';
import BreadCrum from './BreadCrum';

const UserPage: React.FC = () => {
	const {id} = useParams();

	const user = useSelector((state: RootState) => state.user.user);
	const isPostsLoading = useSelector((state: RootState) => state.user.isPostsLoading);
	const isUserLoading = useSelector((state: RootState) => state.user.isUserLoading);

	const dispatch = useDispatch();

	const {isVisible} = useDelay();

	useEffect(() => {
		if (id) {
			dispatch(getUserFetch(id));
			dispatch(getUserPostsFetch(id));
		}
	}, [dispatch, id]);

	if (isPostsLoading || isUserLoading || isVisible) {
		return (
			<Spinner />
		);
	};

    return (
        <div style={{height: '100%'}}>
			<BreadCrum/>
			<Container>
				<div className="fs-2 mb-5">Список постов {user?.username}</div>
				<Row className={css.container}>
					<UserPosts />
					<UserInfo/>
				</Row>
			</Container>
        </div>
    );
};

export default UserPage;
