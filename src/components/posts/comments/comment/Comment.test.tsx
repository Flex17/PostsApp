import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Comment from './Comment';

describe('Тестирование компонента Post', () => {
    test('Тест компонента комментарий', () => {
        render(<Comment id={1} email="test@mail.ru" body="Тестовый коммент"/>);

        expect(screen.getByText("Тестовый коммент")).toBeInTheDocument();
        expect(screen.getByText("test@mail.ru")).toBeInTheDocument();
    });

    test('Комментарий snapshot', () => {
        const comment = render(<Comment id={1} email="test@mail.ru" body="Тестовый коммент"/>);

        expect(comment).toMatchSnapshot();
    })
})
