import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUserFetch, getUserPostsFetch } from '../../store/userReducer';
import { RootState } from '../../store/reducer';
import { POSTS_PAGE } from '../../App';
import { Col, Container, Image, Row } from 'react-bootstrap';
import Post from '../posts/post/Post';

const UserPage: React.FC = () => {
	const {id} = useParams();

	const [isVisible, setIsVisible] = useState(true);

	const user = useSelector((state: RootState) => state.user.user);
	const posts = useSelector((state: RootState) => state.user.posts);
	const isPostsLoading = useSelector((state: RootState) => state.user.isPostsLoading);
	const isUserLoading = useSelector((state: RootState) => state.user.isUserLoading);

	const dispatch = useDispatch();

	useEffect(() => {
		if (id) {
			dispatch(getUserFetch(id));
			dispatch(getUserPostsFetch(id));
		}
	}, [dispatch, id]);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsVisible(false);
		}, 500);

		return () => {
			clearTimeout(timer);
		};
	}, []);

	if (isPostsLoading || isUserLoading || isVisible) {
		return (
			<div style={{position: 'absolute', top: '50%', transform: 'translate(-50%, -50%)', left: '50%'}}>
				<div className="d-flex justify-content-center align-items-center">
					<div className="spinner-border" role="status" style={{width: '100px', height: '100px'}}>
						<span className="visually-hidden">Загрузка...</span>
					</div>
				</div>
			</div>
		);
	};

    return (
        <div style={{height: '100%'}}>
			<nav aria-label="breadcrumb">
				<ol className="breadcrumb">
					<li className="breadcrumb-item">
						<NavLink to={POSTS_PAGE}>Посты</NavLink>
					</li>
					<li className="breadcrumb-item active" aria-current="page">Подробности о пользователе {user?.username}</li>
				</ol>
			</nav>
			<Container>
				<div className="fs-2 mb-5">Список постов {user?.username}</div>
				<Row>
					<Col className="me-5">
						{
							posts.map(post =>(
								<Post title={post.title} body={post.body} userId={post.userId} />
							))
						}
					</Col>
					<Col>
						{
							user && (
								<div className="fs-4">
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
