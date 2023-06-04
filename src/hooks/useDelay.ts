import { useEffect, useState } from 'react';

const useDelay = () => {
	const [isVisible, setIsVisible] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsVisible(false);
		}, 500);

		return () => {
			clearTimeout(timer);
		};
	}, []);

	return {isVisible};
}

export default useDelay;
