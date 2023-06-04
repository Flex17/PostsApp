import React from "react";
import { REVERSE_SORT, SORTING_TYPES, STRAIGHT_SORT } from '../hooks/useSortPosts';

interface SortMenuI {
	currentSort: SORTING_TYPES,
	setCurrentSort: (value: SORTING_TYPES) => void,
}

const SortMenu: React.FC<SortMenuI> = ({
	currentSort,
	setCurrentSort,
}: SortMenuI) => {

    return (
		<div className="dropdown d-flex justify-content-end">
			<button
				className="btn btn-outline-primary dropdown-toggle mt-3"
				type="button"
				id="dropdownMenu2"
				data-bs-toggle="dropdown"
				aria-expanded="false"
			>
				{
					currentSort
						? currentSort
						: 'Сортировка'
				}
			</button>
			<ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
				<li onClick={() => setCurrentSort(STRAIGHT_SORT)}>
					<button className="dropdown-item" type="button">{STRAIGHT_SORT}</button>
				</li>
				<li onClick={() => setCurrentSort(REVERSE_SORT)}>
					<button className="dropdown-item" type="button">{REVERSE_SORT}</button>
				</li>
			</ul>
		</div>
    );
};

export default SortMenu;
