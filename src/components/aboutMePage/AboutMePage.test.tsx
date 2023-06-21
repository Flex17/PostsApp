import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import AboutMePage from "./AboutMePage";

describe('About me page component', () => {
    test('Component rendered', () => {
        render(<AboutMePage />);

        expect(screen.getByText('Здравствуйте, меня зовут Владислав!')).toBeInTheDocument();
        expect(screen.getByText('Мне 18 лет, учусь на 1 курсе Тюменского государственного университета, специальность: Информационные системы и технологии. Проживаю, соответственно, тоже в городе Тюмень.')).toBeInTheDocument();
        expect(screen.getByText('Фронтендом начал заниматься примерно 3 года тому назад, путь был такой: верстка → js → react → ts Уже успел поработать 1 год в компании Smart Bit, меня взяли на проект wakadoo.ru, можно сказать, что я один писал весь фронт (авторизация, работа с api, разрешения, роли и тд), разве что на первых порах мне помогал наставник. Сейчас этот проект практически закончен, дорабатываются некоторые мелочи, но я к нему уже не причастен.')).toBeInTheDocument();
        expect(screen.getByText('Спасибо за уделенное время!')).toBeInTheDocument();
    });

    test('About me page snapshot', () => {
        const page = render(<AboutMePage/>);

        expect(page).toMatchSnapshot();
    })
});

