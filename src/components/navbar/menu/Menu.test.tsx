import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {fireEvent, render, screen} from '@testing-library/react';
import {BrowserRouter as Router} from 'react-router-dom';
import Menu from "./Menu";
import App from "../../../App";
import {useDispatch, useSelector} from "react-redux";

jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useSelector: jest.fn(),
    useDispatch: jest.fn(),
}));

describe("Тесты меню компонента", () => {
    test("Тесты роутинга для постов", () => {
        const mockDispatch = jest.fn();

        (useSelector as jest.Mock).mockReturnValue([]);
        (useDispatch as jest.Mock).mockReturnValue(mockDispatch);

        render (
            <Router>
                <App />
            </Router>
        )

        const postLink = screen.getByTestId("post-link");

        fireEvent.click(postLink);

        expect(screen.getByTestId("spinner"));
    });

    test("Тесты роутинга для страницы обо мне", () => {
        const mockDispatch = jest.fn();

        (useSelector as jest.Mock).mockReturnValue([]);
        (useDispatch as jest.Mock).mockReturnValue(mockDispatch);

        render (
            <Router>
                <App />
            </Router>
        )
        const aboutMeLink = screen.getByTestId("about-me-link");

        fireEvent.click(aboutMeLink);

        expect(screen.getByTestId("about-me-elem"));
    });
})
