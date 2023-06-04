import React from "react";

const Spinner: React.FC = () => {

    return (
		<div style={{position: 'absolute', top: '50%', transform: 'translate(-50%, -50%)', left: '50%'}}>
			<div className="d-flex justify-content-center align-items-center">
				<div className="spinner-border" role="status" style={{width: '100px', height: '100px'}}>
					<span className="visually-hidden">Загрузка...</span>
				</div>
			</div>
		</div>
    );
};

export default Spinner;
