import React from "react";
import { NavLink } from 'react-router-dom';
import { ABOUT_ME_PAGE, POSTS_PAGE } from '../../App';

const Navbar: React.FC = () => {

    return (
		<div className="navbar d-flex p-3 justify-content-start">
			<NavLink className="link-primary text-decoration-none me-4" to={POSTS_PAGE}>Посты</NavLink>
			<NavLink className="link-primary text-decoration-none" to={ABOUT_ME_PAGE}>Обо мне</NavLink>
		</div>
    );
};

export default Navbar;
