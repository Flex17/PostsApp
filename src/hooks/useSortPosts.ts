import { PostsI } from '../store/postsReducer';
import { useState } from 'react';

export const STRAIGHT_SORT = "От А до Я";
export const REVERSE_SORT = "От Я до А";
export type SORTING_TYPES = typeof STRAIGHT_SORT | typeof REVERSE_SORT | null;

const useSortPosts = () => {
	const [currentSort, setCurrentSort] = useState<SORTING_TYPES>(null);

	const sort = (posts: PostsI[]) => {
		let sortedPosts = [...posts];
		switch (currentSort) {
			case STRAIGHT_SORT:
				sortedPosts = [...posts].sort((a, b) => a.title.localeCompare(b.title));
				break;
			case REVERSE_SORT:
				sortedPosts = [...posts].sort((a, b) => a.title.localeCompare(b.title)).reverse();
				break;
		}
		return sortedPosts;
	}

	return {
		currentSort,
		setCurrentSort,
		sort,
	}
}

export default useSortPosts;
