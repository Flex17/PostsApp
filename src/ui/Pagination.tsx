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

	const renderPaginationItems = (totalPages: number) => {
		const paginationItems = [];
		for (let i = 1; i <= totalPages; i++) {
			const clickHandler = () => {
				goToPage(i);
			}
			paginationItems.push(
				<li
					className={`page-item ${i === currentPage ? 'active' : ''}`}
					onClick={clickHandler}
					role="button"
				>
					<div className="page-link">{i}</div>
				</li>
			);
		}
		return paginationItems;
	}

    return (
		<>
			{
				totalItems > POSTS_PER_PAGE && (
					<Container className="d-flex justify-content-center">
						<ul className="pagination user-select-none">
							<li
								className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}
								onClick={previousPage}
								role="button"
							>
								<span className="page-link">Предыдущая</span>
							</li>
							{renderPaginationItems(totalPages)}
							<li
								className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}
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
