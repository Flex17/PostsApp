import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {render,screen} from '@testing-library/react';
import PostsList from './PostsList';
import configureStore from 'redux-mock-store';
import {Provider, useSelector} from "react-redux";
import { BrowserRouter as Router } from 'react-router-dom';

const mockStore = configureStore([]);
const store = mockStore({});

jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useSelector: jest.fn(),
}));

const renderPostsList = () => render(
    <Provider store={store}>
        <Router>
            <PostsList />
        </Router>
    </Provider>
);

describe('PostsList', () => {
    test('отображает сообщение "Постов не найдено..." при отсутствии постов', () => {
        (useSelector as jest.Mock).mockReturnValue([]);

        renderPostsList();

        expect(screen.getByText('Постов не найдено...')).toBeInTheDocument();
    });

    test('should render posts', () => {
        (useSelector as jest.Mock).mockReturnValue([
            { id: 1, title: 'Post 1' },
            { id: 2, title: 'Post 2' },
        ]);

        renderPostsList();

        expect(screen.getByText('Post 1')).toBeInTheDocument();
        expect(screen.getByText('Post 2')).toBeInTheDocument();
    });

    test('Posts snapshot', () => {
        (useSelector as jest.Mock).mockReturnValue([]);

        const page = renderPostsList();

        expect(page).toMatchSnapshot();
    })
});

