import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ABOUT_ME_PAGE, POSTS_PAGE } from '../../App';
import css from './navbar.module.scss';
import Menu from './menu/Menu';

const Navbar: React.FC = () => {
	const [menuActive, setMenuActive] = useState(false);

	useEffect(() => {
		if (menuActive) {
			document.body.style.overflowY = 'hidden';
		} else {
			document.body.style.overflowY = 'auto';
		}
	}, [menuActive]);

    return (
		<>
			<nav>
				<div className={css.burger_btn} onClick={() => setMenuActive(!menuActive)}>
					<span></span>
				</div>
			</nav>
			<Menu active={menuActive} setActive={setMenuActive} />
		</>
    );
};

export default Navbar;
