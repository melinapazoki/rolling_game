import { useState, useEffect } from "react";

import Players from "../modules/Players";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

import Dice from "../components/Dice";
import useFetchData from "../hooks/useFetchData";
import { postGameResult } from "../services/api";

const MainGame = () => {
	const { data } = useFetchData();
	const [players, setPlayer] = useState([]);
	let [{ diceResult, nextPlayerIndex = 0, totalScore = 0 }, setRollResult] =
		useState({});
	useEffect(() => {
		const { players } = data;
		if (players) {
			players.forEach((player) => (player.score = 0));
			setPlayer(players);
		}
	}, [data]);

	const { scoreToWin, matchId } = data;
	const handleDiceAction = (playerInfo) => {
		// find a number between 1 - 6
		const diceResult = Math.floor(Math.random() * 5) + 1;
		playerInfo.score += diceResult;
		//in each action we know who is next player
		players[nextPlayerIndex + 1] ? nextPlayerIndex++ : (nextPlayerIndex = 0);
		// to find the total score and winner
		const totalScore = players.map((i) => i.score).sort()[players.length - 1];
		//to post winner
		if (totalScore >= scoreToWin) {
			(async function () {
				const result = await postGameResult(matchId, totalScore);
				console.log("result", result);
			})();
		}

		setRollResult({
			diceResult,
			nextPlayerIndex,
			totalScore,
		});
	};

	const isGameOver = totalScore >= scoreToWin;
	return (
		<Container sx={{ p: 4 }} maxWidth="lg">
			<Grid container>
				<Grid item md={8}>
					<Dice diceResult={diceResult} />
				</Grid>
				<Grid item md={4}>
					<Typography variant="body1">Match ID: {matchId}</Typography>
					<Typography>Score To Win:</Typography>
					{scoreToWin}
				</Grid>

				{!isGameOver ? (
					<Grid item md={12} sx={{ p: 2 }}>
						<Players
							playersInfo={players}
							handleDiceAction={handleDiceAction}
							totalScore={scoreToWin}
							nextPlayer={players[nextPlayerIndex]}
						/>
					</Grid>
				) : (
					<Grid item md={12} sx={{ p: 2 }}>
						<Typography variant="h2" color="secondary">
							Congratulations, Match is over
						</Typography>
					</Grid>
				)}
			</Grid>
		</Container>
	);
};

export default MainGame;
