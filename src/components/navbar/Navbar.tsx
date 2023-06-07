import React, { useEffect, useState } from 'react';
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

	const handleBurger = () => {
		setMenuActive(!menuActive);
	}

    return (
		<>
			<nav>
				<div
					className={`${css.burger_btn} ${menuActive ? css.opened : ''}`}
					onClick={handleBurger}
				>
					<span></span>
				</div>
			</nav>
			<Menu active={menuActive} setActive={setMenuActive} />
		</>
    );
};

export default Navbar;
