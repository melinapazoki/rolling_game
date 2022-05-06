import { useState, useEffect } from "react";

import { fetchGameData } from "../services/api";
const useFetchData = () => {
	const [data, setData] = useState({});

	useEffect(() => {
		const timer = setTimeout(() => {
			(async function () {
				const result = await fetchGameData();
				setData(result);
			})();
		}, 1000);
		return () => clearTimeout(timer);
	}, []);

	return { data };
};

export default useFetchData;
