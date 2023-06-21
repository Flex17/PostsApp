import React from "react";
import css from '../userPage.module.scss';
import Post from '../../posts/post/Post';
import { Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/reducer';

const UserPosts: React.FC = () => {
	const posts = useSelector((state: RootState) => state.user.posts);

    return (
		posts && (
			<Col className={`me-5 ${css.posts}`}>
				{
					posts?.map(post => {
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
		)
    );
};

export default UserPosts;
