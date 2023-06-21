import { renderHook, act } from '@testing-library/react';
import useSortPosts, { STRAIGHT_SORT, REVERSE_SORT } from './useSortPosts';

describe('useSortPosts', () => {
    test('Изменяет текущую сортировку', () => {
        const { result } = renderHook(() => useSortPosts());

        expect(result.current.currentSort).toBeNull();

        act(() => {
            result.current.setCurrentSort(STRAIGHT_SORT);
        });

        expect(result.current.currentSort).toBe(STRAIGHT_SORT);

        act(() => {
            result.current.setCurrentSort(REVERSE_SORT);
        });

        expect(result.current.currentSort).toBe(REVERSE_SORT);
    });

    test('Сортирует посты в соответствии с прямой сортировкой', () => {
        const { result } = renderHook(() => useSortPosts());

        const posts = [
            { id: 1, title: 'B', userId: 1, body: 'CC' },
            { id: 2, title: 'A', userId: 2, body: 'BB' },
            { id: 3, title: 'C', userId: 3, body: 'AA' },
        ];

        act(() => {
            result.current.setCurrentSort(STRAIGHT_SORT);
        });

        const sortedPosts = result.current.sort(posts);

        expect(sortedPosts[0].title).toBe('A');
        expect(sortedPosts[1].title).toBe('B');
        expect(sortedPosts[2].title).toBe('C');
    });

    test('Сортирует посты в соответствии с обратной сортировкой', () => {
        const { result } = renderHook(() => useSortPosts());

        const posts = [
            { id: 1, title: 'B', userId: 1, body: 'CC' },
            { id: 2, title: 'A', userId: 2, body: 'BB' },
            { id: 3, title: 'C', userId: 3, body: 'AA' },
        ];

        act(() => {
            result.current.setCurrentSort(REVERSE_SORT);
        });

        const reverseSortedPosts = result.current.sort(posts);

        expect(reverseSortedPosts[0].title).toBe('C');
        expect(reverseSortedPosts[1].title).toBe('B');
        expect(reverseSortedPosts[2].title).toBe('A');
    });
});
