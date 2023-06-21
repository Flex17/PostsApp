import React from "react";

const AboutMePage: React.FC = () => {

    return (
        <div data-testid="about-me-elem">
        	<div className="fs-4 mb-4 mt-3">
				Здравствуйте, меня зовут Владислав!
			</div>
			<div className="fs-5 mb-2">
				Мне 18 лет, учусь на 1 курсе Тюменского государственного университета, специальность: Информационные системы и технологии.<br/> Проживаю, соответственно, тоже в городе Тюмень.
			</div>
			<div className="fs-5 mb-2">
				Фронтендом начал заниматься примерно 3 года тому назад, путь был такой: верстка &#8594; js &#8594; react &#8594; ts <br/>
				Уже успел поработать 1 год в компании Smart Bit, меня взяли на проект wakadoo.ru, можно сказать, что я один писал весь фронт (авторизация, работа с api, разрешения, роли и тд), разве что на первых порах мне помогал наставник. <br/>
				Сейчас этот проект практически закончен, дорабатываются некоторые мелочи, но я к нему уже не причастен.
			</div>
			<div className="fs-5 mb-4">
				Отмечу, что было интересно делать ваше тестовое задание, был приятно удивлен тз и тем, насколько оно подробно написано.<br/>
				В завершении скажу, что хотел бы работать в вашей компании, с нетерпением жду ответу и желательно комментариев по тестовому заданию, было бы интересно их услышать!
			</div>
			<div className="fs-5 text-end">
				Спасибо за уделенное время!
			</div>
        </div>
    );
};

export default AboutMePage;
