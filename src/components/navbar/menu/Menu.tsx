import React from 'react';
import css from './menu.module.scss';
import { NavLink } from 'react-router-dom';
import { ABOUT_ME_PAGE, POSTS_PAGE } from '../../../App';
import logo from '../../../img/avatar.jpg';
import { Image } from 'react-bootstrap';

interface MenuI {
	active: boolean;
	setActive: (value: boolean) => void;
}

const Menu: React.FC<MenuI> = ({active, setActive}: MenuI) => {

	const onLinkClick = () => {
		setActive(false);
	}

    return (
		<div
			className={`${active ? `${css.menu} ${css.menu_active} ` : `${css.menu}`}`}
			onClick={() => setActive(false)}
		>
			<div className={css.blur}></div>
			<div className={css.menu_content} onClick={e => e.stopPropagation()}>
				<div className="d-flex flex-column mt-5">
					<NavLink
						className="fs-5 link-light text-decoration-none w-100 text-center"
						to={POSTS_PAGE}
						onClick={onLinkClick}
						data-testid="post-link"
					>
						Посты
					</NavLink>
					<NavLink
						className="fs-5 link-light text-decoration-none w-100 text-center mt-3"
						to={ABOUT_ME_PAGE}
						onClick={onLinkClick}
						data-testid="about-me-link"
					>
						Обо мне
					</NavLink>
				</div>
				<div className={css.menu_info}>
					<NavLink
						to={ABOUT_ME_PAGE}
						className="d-flex justify-content-center"
						onClick={onLinkClick}
					>
						<Image className="w-50 rounded-circle" src={logo}/>
					</NavLink>
					<div className="text-white fs-4 mt-4">Владислав Платов</div>
					<div className="text-white fs-4 mt-2">vladplatov3@yandex.ru</div>
				</div>
			</div>
		</div>
    );
};

export default Menu;
