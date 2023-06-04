import React, { useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUserFetch, getUserPostsFetch } from '../../store/userReducer';
import { RootState } from '../../store/reducer';
import { POSTS_PAGE } from '../../App';
import { Col, Container, Image, Row } from 'react-bootstrap';
import Post from '../posts/post/Post';
import Spinner from '../../ui/Spinner';
import useDelay from '../../hooks/useDelay';
import css from './userPage.module.scss';

const UserPage: React.FC = () => {
	const {id} = useParams();

	const user = useSelector((state: RootState) => state.user.user);
	const posts = useSelector((state: RootState) => state.user.posts);
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
			<div aria-label="breadcrumb">
				<ol className="breadcrumb">
					<li className="breadcrumb-item">
						<NavLink to={POSTS_PAGE}>Посты</NavLink>
					</li>
					<li className="breadcrumb-item active" aria-current="page">Подробности о пользователе {user?.username}</li>
				</ol>
			</div>
			<Container>
				<div className="fs-2 mb-5">Список постов {user?.username}</div>
				<Row className={css.container}>
					<Col className={`me-5 ${css.posts}`}>
						{
							posts.map(post => {
								const {id, userId, title, body} = post;
								return (
									<Post
										title={title}
										body={body}
										userId={userId}
										id={id}
										key={id}
									/>
								)
							})
						}
					</Col>
					<Col className={css.info}>
						{
							user && (
								<div className={` ${css.wrapper}`}>
									<Image
										src="https://sun9-61.userapi.com/impg/CWNIcG5M4ptDHduoNNuTRerI38TmxTB09uPdIA/6EU9mcMHNtM.jpg?size=1280x853&quality=96&sign=532b96433526b8a88e07e1d4cd6d3d87&c_uniq_tag=dAlFz0Q1-rATyisWxIgWJJ7F3hfhlidU6wujPXKDMro&type=album"
										className="w-75 mb-5"
									/>
									<div className="mb-2">Имя: {user.name}</div>
									<div className="mb-2">E-mail: {user.email}</div>
									<div className="mb-2">Телефон: {user.phone}</div>
									<div className="mb-2">Город: {user.address.city}</div>
								</div>
							)
						}
					</Col>
				</Row>
			</Container>
        </div>
    );
};

export default UserPage;
