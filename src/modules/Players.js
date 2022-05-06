import Player from "../components/Player";
import Grid from "@mui/material/Grid";

const players = ({
	playersInfo,
	handleDiceAction,
	playerScore,
	totalScore,
	nextPlayer,
}) => {
	return (
		<Grid container spacing={8}>
			{playersInfo.map((player) => (
				<Player
					key={player.id}
					info={player}
					playerScore={playerScore[player.id]}
					handleDiceAction={handleDiceAction}
					totalScore={totalScore}
					nextPlayer={nextPlayer}
				/>
			))}
		</Grid>
	);
};

export default players;
