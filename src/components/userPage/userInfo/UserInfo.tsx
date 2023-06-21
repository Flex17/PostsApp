import React from "react";
import css from '../userPage.module.scss';
import { Col, Image } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/reducer';

const UserInfo: React.FC = () => {
	const user = useSelector((state: RootState) => state.user.user);

    return (
		user && (
			<Col className={css.info}>
				<div className={` ${css.wrapper}`}>
					<Image
						src="https://sun9-61.userapi.com/impg/CWNIcG5M4ptDHduoNNuTRerI38TmxTB09uPdIA/6EU9mcMHNtM.jpg?size=1280x853&quality=96&sign=532b96433526b8a88e07e1d4cd6d3d87&c_uniq_tag=dAlFz0Q1-rATyisWxIgWJJ7F3hfhlidU6wujPXKDMro&type=album"
						className="w-75 mb-5"
					/>
					<div className="mb-2">Имя: {user.name}</div>
					<div className="mb-2">E-mail: {user.email}</div>
					<div className="mb-2">Телефон: {user.phone}</div>
					<div className="mb-2">Город: {user.address?.city}</div>
				</div>
			</Col>
		)
    );
};

export default UserInfo;
