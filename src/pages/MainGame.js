import { useState, useEffect } from "react";

import Players from "../modules/Players";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

import Dice from "../components/Dice";

const MainGame = ({ players }) => {
	const [playerScore, setPlayerScore] = useState({});

	let [{ diceResult, playerId, nextPlayerIndex = 0 }, setRollResult] = useState(
		{},
	);
	useEffect(() => {
		if (Object.keys(playerScore).length === 0) {
			players.map((player) => (playerScore[player.id] = 0));
		}
		if (playerId) {
			playerScore[playerId] += diceResult;
		}
		setPlayerScore(playerScore);
	}, [diceResult, playerId, playerScore, nextPlayerIndex]);

	const handleDiceAction = (playerInfo) => {
		// find a number between 1 - 6
		const diceResult = Math.floor(Math.random() * 5) + 1;
		//in each action we know who is next player
		players[nextPlayerIndex + 1] ? nextPlayerIndex++ : (nextPlayerIndex = 0);
		setRollResult({
			diceResult,
			playerId: playerInfo.id,
			nextPlayerIndex,
		});
	};

	return (
		<Container sx={{ p: 4 }} maxWidth="lg">
			<Grid container>
				<Grid item md={8}>
					<Dice diceResult={diceResult} />
				</Grid>
				<Grid item md={4}>
					<Typography fontWeight={700}>Dice Game</Typography>
					<Typography fontWeight={700}>Score to win: {scoreToWin}</Typography>
					<Typography fontWeight={700}>Match Id: {matchId}</Typography>
				</Grid>
				<Players
					playersInfo={players}
					handleDiceAction={handleDiceAction}
					playerScore={playerScore}
					totalScore={10}
					nextPlayer={players[nextPlayerIndex]}
				/>
			</Grid>
		</Container>
	);
};

export default MainGame;
