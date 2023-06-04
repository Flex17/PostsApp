import React from "react";
import { POSTS_PER_PAGE } from '../hooks/usePagination';
import { Container } from 'react-bootstrap';

interface PaginationI {
	totalItems: number;
	totalPages: number;
	currentPage: number;
	nextPage: () => void,
	previousPage: () => void;
	goToPage: (page: number) => void;
}

const Pagination: React.FC<PaginationI> = ({
	currentPage,
	totalItems,
	previousPage,
	goToPage,
	nextPage,
	totalPages,
}: PaginationI) => {

	const isPreviousActive = currentPage === 1 ? 'disabled' : '';
	const isNextActive = currentPage === totalPages ? 'disabled' : '';

	// * Рендерит кнопочки с номерами страниц
	// const renderPaginationItems = (totalPages: number) => {
	// 	const paginationItems = [];
	// 	for (let i = 1; i <= totalPages; i++) {
	// 		const clickHandler = () => {
	// 			goToPage(i);
	// 		}
	// 		const isActive = i === currentPage ? 'active' : '';
	// 		paginationItems.push(
	// 			<li
	// 				className={`page-item ${isActive}`}
	// 				onClick={clickHandler}
	// 				role="button"
	// 			>
	// 				<div className="page-link">{i}</div>
	// 			</li>
	// 		);
	// 	}
	// 	return paginationItems;
	// }

	const renderPaginationItems = (totalPages: number) => {
		const paginationItems = [];
		let startPage = 1;
		let endPage = totalPages;
		if (totalPages > 5) {
			if (currentPage <= 3) {
				endPage = 4;
			} else if (currentPage >= totalPages - 2) {
				startPage = totalPages - 3;
			} else {
				startPage = currentPage - 1;
				endPage = currentPage + 1;
			}
			if (startPage !== 1) {
				paginationItems.push(
					<li className="page-item" onClick={() => goToPage(1)} role="button">
						<div className="page-link">{1}</div>
					</li>
				);
				paginationItems.push(
					<li className="page-item disabled" role="button">
						<div className="page-link">...</div>
					</li>
				);
			}
		}
		for (let i = startPage; i <= endPage; i++) {
			const clickHandler = () => {
				goToPage(i);
			};
			const isActive = i === currentPage ? "active" : "";
			paginationItems.push(
				<li className={`page-item ${isActive}`} onClick={clickHandler} role="button">
					<div className="page-link">{i}</div>
				</li>
			);
		}
		if (endPage !== totalPages) {
			paginationItems.push(
				<li className="page-item disabled" role="button">
					<div className="page-link">...</div>
				</li>
			);
			paginationItems.push(
				<li className="page-item" onClick={() => goToPage(totalPages)} role="button">
					<div className="page-link">{totalPages}</div>
				</li>
			);
		}
		return paginationItems;
	};

    return (
		<>
			{
				totalItems > POSTS_PER_PAGE && (
					<Container className="d-flex justify-content-center w-100">
						<ul className="pagination user-select-none overflow-auto">
							<li
								className={`page-item ${isPreviousActive}`}
								onClick={previousPage}
								role="button"
							>
								<span className="page-link">Предыдущая</span>
							</li>
							{renderPaginationItems(totalPages)}
							<li
								className={`page-item ${isNextActive}`}
								onClick={nextPage}
								role="button"
							>
								<div className="page-link">Следующая</div>
							</li>
						</ul>
					</Container>
				)
			}
		</>
    );
};

export default Pagination;
