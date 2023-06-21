import React from 'react';
import {render, screen} from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Posts from './Posts';
import '@testing-library/jest-dom/extend-expect';
import {BrowserRouter as Router} from 'react-router-dom';

const mockStore = configureStore([]);

const store = mockStore({
    posts: {
        isLoading: true,
        posts: [
            { id: 1, title: 'Post 1' },
            { id: 2, title: 'Post 2' },
        ],
    },
});

const renderPosts = () => render(
    <Provider store={store}>
        <Router>
            <Posts />
        </Router>
    </Provider>
);

describe('Posts', () => {
    test('Должен отрендерить спиннер во время загрузки', async () => {
        renderPosts();

        const spinnerElement = screen.getByTestId('spinner');
        expect(spinnerElement).toBeInTheDocument();
    });

    test('Posts snapshot', () => {
        const page = renderPosts();

        expect(page).toMatchSnapshot();
    });
});
