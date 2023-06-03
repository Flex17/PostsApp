import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/reducer';
import { getPostsFetch } from '../../store/postsReducer';
import Post from './post/Post';
import { Col, Container } from 'react-bootstrap';

const Posts: React.FC = () => {
    const posts = useSelector((state: RootState) => state.posts.posts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPostsFetch());
    }, [dispatch]);

    return (
        <Container>
            <div className="fs-1 fw-medium mb-4 text-center">Список постов</div>
            <Col>
                {
                    posts.map(post =>(
                        <Post
                            title={post.title}
                            body={post.body}
                            userId={post.userId}
                        />
                    ))
                }
            </Col>
        </Container>
    );
};

export default Posts;
