import React from "react";
import { Col } from 'react-bootstrap';
import Post from '../post/Post';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/reducer';
import usePagination from '../../../hooks/usePagination';
import Pagination from '../../../ui/Pagination';

const PostsList: React.FC = () => {
	const filteredPosts = useSelector((state: RootState) => state.posts.filteredPosts);
	const {
		goToPage,
		nextPage,
		previousPage,
		totalItems,
		totalPages,
		pageData,
		currentPage
	} = usePagination(filteredPosts);

    return (
        <>
			{
				filteredPosts.length > 0
					? <Col className="mt-5">
						{
							pageData.map(post => {
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
					: <div className="fs-3 text-center mt-5">Постов не найдено...</div>
			}
			<Pagination
				totalItems={totalItems}
				totalPages={totalPages}
				currentPage={currentPage}
				nextPage={nextPage}
				previousPage={previousPage}
				goToPage={goToPage}
			/>
		</>
    );
};

export default PostsList;
