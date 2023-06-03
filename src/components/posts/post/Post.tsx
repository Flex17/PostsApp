import React from "react";
import { Col, Container, Image, Row } from 'react-bootstrap';
import logo from '../../../img/avatar.jpg';
import { NavLink } from 'react-router-dom';
import { ABOUT_USER_PAGE } from '../../../App';

interface PostI {
	title: string;
	body: string;
	userId: number,
}

const Post: React.FC<PostI> = ({
	body,
	title,
	userId,
}: PostI) => {

    return (
        <Container className="mb-4">
			<Row>
				<NavLink to={`${ABOUT_USER_PAGE}/${userId}`}>
					<Image roundedCircle src={logo} style={{maxWidth: '85px'}}/>
				</NavLink>
				<Col>
					<div>{title}</div>
					<div>{body}</div>
				</Col>
			</Row>
		</Container>
    );
};

export default Post;
