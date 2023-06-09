import React from "react";
import { FormControl, InputGroup } from 'react-bootstrap';

interface SearchBarI {
	searchValue: string,
	cleanSearchValue: () => void,
	onChangeSearchValue: (value: string) => void,
}

const SearchBar: React.FC<SearchBarI> = ({
	searchValue,
	cleanSearchValue,
	onChangeSearchValue,
}: SearchBarI) => {

    return (
		<div className="container p-0">
			<InputGroup
				className="col-6 d-flex align-items-center position-relative"
				style={{zIndex: 49}}
			>
				<FormControl
					placeholder="Search"
					aria-label="Search"
					aria-describedby="basic-addon2"
					className="shadow-none rounded"
					style={{zIndex: 49}}
					value={searchValue}
					onChange={e => onChangeSearchValue(e.target.value)}
				/>
				<button
					type="button"
					className="btn-close shadow-none focus-shadow-none position-absolute top-50 end-0 translate-middle-y me-2"
					style={{ transform: "translateY(-50%)", zIndex: 52 }}
					aria-label="Close"
					onClick={cleanSearchValue}
				></button>
			</InputGroup>
		</div>
    );
};

export default SearchBar;
