import config from "../config";

export const handleError = async (e) => {
	// this part should complete by error handling in all posible cases
	return console.log(e);
};
export const commonFetch = async (url, Method, body) => {
	return await fetch(url, {
		method: Method,
		headers: {
			"Access-Control-Allow-Origin": "*",
			"Content-Type": "application/json",
		},
		body: JSON.stringify(body),
	})
		.then(async (result) => {
			const response = await result.json().catch(() => {
				handleError();
			});
			return response;
		})
		.catch((e) => {
			handleError(e);
		});
};

const fetchGameData = async () => {
	return await commonFetch(config.API_URL, config.API_METHOD.GET);
};

const postGameResult = async (matchId, winnerId) => {
	debugger;
	const postBody = {
		matchId,
		winnerId,
	};
	return await commonFetch(config.API_URL, config.API_METHOD.POST, postBody);
};

export { fetchGameData, postGameResult };
