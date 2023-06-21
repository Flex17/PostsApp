import React from 'react';
import { screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { render,fireEvent, waitFor } from '@testing-library/react';
import Comments from './Comments';
import axios from 'axios';

const renderComments = () => render(<Comments postId={1} />);

jest.mock('axios');

describe('Comments', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('Рендер кнопки "Посмотреть комментарии"', () => {
        renderComments();

        const button = screen.getByTestId('btn');

        expect(button).toBeInTheDocument();
        expect(button).toHaveTextContent('Посмотреть комментарии');
    });

    test('Загрузка комментариев, когда был клик на кнопку "Посмотреть комментарии"', async () => {
        const mockComments = [
            { id: 1, email: 'test1@example.com', body: 'Comment 1' },
            { id: 2, email: 'test2@example.com', body: 'Comment 2' },
        ];

        (axios.get as jest.Mock).mockResolvedValueOnce({
            data: mockComments,
        });

        renderComments();

        expect(screen.getByTestId('btn')).toBeInTheDocument();

        const button = screen.getByTestId('btn');
        fireEvent.click(button);

        await waitFor(() => {
            const commentComponents = screen.queryAllByTestId('comment');
            expect(commentComponents.length).toBe(2);
        });
    });

    test('Обработка пустого массива данных', async () => {
        (axios.get as jest.Mock).mockResolvedValueOnce({
            data: [],
        });

        renderComments();

        expect(screen.getByTestId('btn')).toBeInTheDocument();

        const button = screen.getByTestId('btn');
        fireEvent.click(button);

        await waitFor(() => {
            const commentComponents = screen.queryAllByTestId('comment');
            expect(commentComponents.length).toBe(0);
        });
    });

    test('Обработка ошибки', async () => {
        (axios.get as jest.Mock).mockRejectedValueOnce(new Error('Request failed'));

        renderComments();

        expect(screen.getByTestId('btn')).toBeInTheDocument();

        const button = screen.getByTestId('btn');
        fireEvent.click(button);

        await waitFor(() => {
            expect(axios.get).toHaveBeenCalledTimes(1);
        });

        const comments = screen.queryAllByTestId('comment');
        expect(comments.length).toBe(0);
    });
});
