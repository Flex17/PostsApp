import { useState, useEffect } from 'react';
import { PostsI } from '../store/postsReducer';

export const POSTS_PER_PAGE = 10;

const usePagination = (posts: PostsI[]) => {
	const [currentPage, setCurrentPage] = useState(1);
	const [pageData, setPageData] = useState<PostsI[]>([]);
	const totalItems = posts.length;

	const totalPages = Math.ceil(totalItems / POSTS_PER_PAGE);

	useEffect(() => {
		if (posts.length <= 10) {
			setPageData(posts);
		} else {
			const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
			const endIndex = startIndex + POSTS_PER_PAGE;
			const pageData = posts.slice(startIndex, endIndex);
			setPageData(pageData);
		}
	}, [currentPage, POSTS_PER_PAGE]);


	const goToPage = (page: number) => {
		if (page >= 1 && page <= totalPages) {
			setCurrentPage(page);
		}
	};

	const nextPage = () => {
		if (currentPage < totalPages) {
			setCurrentPage((prevPage) => prevPage + 1);
		}
	};

	const previousPage = () => {
		if (currentPage > 1) {
			setCurrentPage((prevPage) => prevPage - 1);
		}
	};

	return {
		currentPage,
		pageData,
		totalPages,
		totalItems,
		goToPage,
		nextPage,
		previousPage,
	};
}

export default usePagination;
