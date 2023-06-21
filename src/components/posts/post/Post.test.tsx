import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Post from './Post';

const fakePost = {
    id: 1,
    userId: 1,
    title: 'Test Title',
    body: 'Test Body',
};

const renderPost = () => render(
    <Router>
        <Post {...fakePost} />
    </Router>
);

describe('Post', () => {
    test('Рендер заголовка и текста', () => {
        renderPost();

        const titleElement = screen.getByText('Test Title');
        const bodyElement = screen.getByText('Test Body');

        expect(titleElement).toBeTruthy();
        expect(bodyElement).toBeTruthy();
    });

    test('Рендер изображения', () => {
        renderPost();

        const imageElement = screen.getByAltText('Post image');

        expect(imageElement).toBeTruthy();
        expect(imageElement.getAttribute('src')).toContain('avatar.jpg');
    });

    test('Posts snapshot', () => {
        const page = renderPost();

        expect(page).toMatchSnapshot();
    });
});
