import { renderHook, act } from '@testing-library/react';
import usePagination, { POSTS_PER_PAGE } from './usePagination';
import '@testing-library/jest-dom/extend-expect';
import {PostsI} from "../store/postsReducer";

jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useSelector: jest.fn(),
}));

describe('usePagination', () => {
    let posts: PostsI[] = [];

    beforeAll(() => {
        for (let i = 1; i <= 40; i++) {
            const post = {
                userId: i,
                id: i,
                title: `Post ${i}`,
                body: `Body ${i}`,
            };

            posts.push(post);
        }
    });

    test('Получает правильные данные для пагинации', () => {
        const { result } = renderHook(() => usePagination(posts));

        expect(result.current.currentPage).toBe(1);
        expect(result.current.totalPages).toBe(4);
        expect(result.current.totalItems).toBe(40);
        expect(result.current.pageData).toEqual(posts.slice(0, 10));
    });


    test('Переходит к следующей странице', () => {
        const { result } = renderHook(() => usePagination(posts));

        act(() => {
            result.current.nextPage();
        });

        expect(result.current.currentPage).toBe(2);
    });

    test('Переходит к предыдущей странице', () => {
        const { result } = renderHook(() => usePagination(posts));

        act(() => {
            result.current.goToPage(2);
        });

        expect(result.current.currentPage).toBe(2);

        act(() => {
            result.current.previousPage();
        });

        expect(result.current.currentPage).toBe(1);
    });

    test('Переходит к указанной странице', () => {
        const { result } = renderHook(() => usePagination(posts));

        act(() => {
            result.current.goToPage(2);
        });

        expect(result.current.currentPage).toBe(2);

        act(() => {
            result.current.goToPage(3);
        });

        expect(result.current.currentPage).toBe(3);
    });


    test('Корректно разбивает данные на страницы', () => {
        const { result } = renderHook(() => usePagination(posts));

        expect(result.current.currentPage).toBe(1);
        expect(result.current.totalPages).toBe(4);
        expect(result.current.totalItems).toBe(40);

        expect(result.current.pageData.length).toBe(POSTS_PER_PAGE);

        act(() => {
            result.current.nextPage();
        });

        expect(result.current.currentPage).toBe(2);
        expect(result.current.pageData.length).toBe(POSTS_PER_PAGE);

        act(() => {
            result.current.goToPage(4);
        });

        expect(result.current.currentPage).toBe(4);
        expect(result.current.pageData.length).toBe(POSTS_PER_PAGE);

        act(() => {
            result.current.nextPage();
        });

        expect(result.current.currentPage).toBe(4);
        expect(result.current.pageData.length).toBe(POSTS_PER_PAGE);
    });
});
