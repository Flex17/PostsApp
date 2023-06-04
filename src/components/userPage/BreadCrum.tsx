import React from "react";
import { NavLink } from 'react-router-dom';
import { POSTS_PAGE } from '../../App';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/reducer';

const BreadCrum: React.FC = () => {
	const user = useSelector((state: RootState) => state.user.user);

    return (
		<div aria-label="breadcrumb">
			<ol className="breadcrumb">
				<li className="breadcrumb-item">
					<NavLink to={POSTS_PAGE}>Посты</NavLink>
				</li>
				<li className="breadcrumb-item active" aria-current="page">Подробности о пользователе {user?.username}</li>
			</ol>
		</div>
    );
};

export default BreadCrum;
