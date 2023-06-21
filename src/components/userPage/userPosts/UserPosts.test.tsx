import React from 'react';
import {render, screen} from '@testing-library/react';
import UserPosts from './UserPosts';
import configureStore from "redux-mock-store";
import { Provider, useSelector } from "react-redux";
import '@testing-library/jest-dom/extend-expect';
import {BrowserRouter as Router} from "react-router-dom";

const mockStore = configureStore([]);
const store = mockStore({});

jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useSelector: jest.fn(),
}));

describe('UserPosts', () => {
    test('Отображает посты пользователя', () => {
        const mockPosts = [
            {
                id: 1,
                userId: 1,
                title: 'Post 1',
                body: 'Body of post 1',
            },
            {
                id: 2,
                userId: 1,
                title: 'Post 2',
                body: 'Body of post 2',
            },
        ];

        (useSelector as jest.Mock).mockReturnValue(mockPosts);

        const { getByText } = render(
            <Provider store={store}>
                <Router>
                    <UserPosts />
                </Router>
            </Provider>
        );

        expect(getByText('Post 1')).toBeInTheDocument();
        expect(getByText('Body of post 1')).toBeInTheDocument();
        expect(getByText('Post 2')).toBeInTheDocument();
        expect(getByText('Body of post 2')).toBeInTheDocument();
    });

    test('Не отображает посты, если пользователь не имеет постов', () => {
        (useSelector as jest.Mock).mockReturnValue(null);

        const { container } = render(
            <Provider store={store}>
                <UserPosts />
            </Provider>
        );

        expect(container.firstChild).toBeNull();
    });
});
