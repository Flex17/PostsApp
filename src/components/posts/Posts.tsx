import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/reducer';
import { getPostsFetch, setFilteredPosts } from '../../store/postsReducer';
import Spinner from '../../ui/Spinner';
import useDelay from '../../hooks/useDelay';
import useSearch from '../../hooks/useSearch';
import SearchBar from '../../ui/SearchBar';
import PostsList from './PostsList';
import useSortPosts from '../../hooks/useSortPosts';
import SortMenu from '../../ui/SortMenu';

const Posts: React.FC = () => {
    const posts = useSelector((state: RootState) => state.posts.posts);
    const isLoading = useSelector((state: RootState) => state.posts.isLoading);

    const dispatch = useDispatch();
    const {isVisible} = useDelay();
    const {currentSort, setCurrentSort, sort} = useSortPosts();

    const {
        searchValue,
        onChangeSearchValue,
        cleanSearchValue,
    } = useSearch();

    // * Получение постов при загрузке страницы
    useEffect(() => {
        dispatch(getPostsFetch());
    }, [dispatch]);

    // * Фильтр постов
    useEffect(() => {
        if (searchValue) {
            const filteredPosts = posts.filter(post => post.title.includes(searchValue));
            dispatch(setFilteredPosts(sort(filteredPosts)));
        } else {
            dispatch(setFilteredPosts(sort(posts)));
        }
    }, [searchValue, currentSort])


    // * Отображение спинера при подгрузке постов
    if (isLoading || isVisible) {
        return (
            <Spinner />
        );
    }

    return (
        <>
            <div className="fs-1 fw-medium mb-4 mt-3 text-center">Список постов</div>
            <SearchBar
                searchValue={searchValue}
                cleanSearchValue={cleanSearchValue}
                onChangeSearchValue={onChangeSearchValue}
            />
            <SortMenu
                currentSort={currentSort}
                setCurrentSort={setCurrentSort}
            />
            <PostsList />
        </>
    );
};

export default Posts;
