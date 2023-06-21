import React from 'react';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import UserInfo from './UserInfo';
import configureStore from "redux-mock-store";
import {Provider, useSelector} from "react-redux";

const mockStore = configureStore([]);
const store = mockStore({});

jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useSelector: jest.fn(),
}));

describe('UserInfo', () => {
    test('Отображает информацию о пользователе', () => {
        const mockUser = {
            name: 'John Doe',
            email: 'john@example.com',
            phone: '123-456-7890',
            address: {
                city: 'New York',
            },
        };

        (useSelector as jest.Mock).mockReturnValue(mockUser);

        const {getByText} = render(
            <Provider store={store}>
                <UserInfo />
            </Provider>
        );

        expect(getByText('Имя: John Doe')).toBeInTheDocument();
        expect(getByText('E-mail: john@example.com')).toBeInTheDocument();
        expect(getByText('Телефон: 123-456-7890')).toBeInTheDocument();
        expect(getByText('Город: New York')).toBeInTheDocument();
    });

    test('Не отображает информацию о пользователе, если пользователь отсутствует', () => {
        (useSelector as jest.Mock).mockReturnValue(null);

        const { container } = render(
            <Provider store={store}>
                <UserInfo />
            </Provider>
        );

        expect(container.firstChild).toBeNull();
    });
});
