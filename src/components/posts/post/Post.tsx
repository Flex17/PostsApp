import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import logo from '../../../img/avatar.jpg';
import { NavLink } from 'react-router-dom';
import { ABOUT_USER_PAGE } from '../../../App';
import { PostsI } from '../../../store/postsReducer';
import Comments from '../comments/Comments';

const Post: React.FC<PostsI> = ({
	body,
	title,
	userId,
	id,
}: PostsI) => {

    return (
        <div>
			<Container className="border border-bottom-0 rounded-bottom-0 rounded-1 p-2">
				<Row className="d-flex">
					<NavLink to={`${ABOUT_USER_PAGE}/${userId}`} className="w-25" style={{maxWidth: '150px'}}>
						<Image roundedCircle src={logo} className="w-100" alt="Post image"/>
					</NavLink>
					<Col>
						<div className="fs-3">{title}</div>
						<div className="fs-5">{body}</div>
					</Col>
				</Row>
			</Container>
			<Comments postId={id} />
		</div>
    );
};

export default Post;
