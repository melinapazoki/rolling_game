import { useState, useEffect } from "react";

import { fetchGameData } from "../services/api";
const useFetchData = () => {
	const [data, setData] = useState({});
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			(async function () {
				const result = await fetchGameData();
				setData(result);
				setLoading(true);
			})();
		}, 1000);
		return () => clearTimeout(timer);
	}, []);

	return { data, loading };
};

export default useFetchData;
