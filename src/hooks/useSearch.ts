import { useState } from 'react';

const useSearch = () => {
	const [searchValue, setSearchValue] = useState('');

	// * При изменении поискового значения
	const onChangeSearchValue = (text: string) => {
		setSearchValue(text);
	}

	// * Очистить поле ввода
	const cleanSearchValue = () => {
		setSearchValue('');
	}

	return {
		searchValue,
		onChangeSearchValue,
		cleanSearchValue,
	}
}

export default useSearch;
