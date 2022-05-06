import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import Grid from "@mui/material/Grid";
import CardHeader from "@mui/material/CardHeader";

import CustomizedProgressBars from "./CustomizedProgressBars";
import Button from "@mui/material/Button";
import { calculatePercentage } from "../utils/commonUtils";
const player = ({
	info,
	handleDiceAction,
	playerScore,
	totalScore,
	nextPlayer,
}) => {
	const progressBarValue = calculatePercentage(playerScore, totalScore);
	const disableOnTrue = (flag) => {
		return {
			opacity: flag ? 1 : 0.4,
			pointerEvents: flag ? "initial" : "none",
			border: flag ? "2px solid #9d29b1" : "",
		};
	};
	const isYourTurn = nextPlayer.id === info.id;
	return (
		<Grid item md={4}>
			<Card sx={{ p: 2 }} style={disableOnTrue(isYourTurn)} variant="outlined">
				<CardHeader
					avatar={<Avatar aria-label="playerImg" src={info.imageUrl} />}
					action={
						<Button
							variant="outlined"
							aria-label="play"
							color="secondary"
							onClick={() => handleDiceAction(info)}>
							Play
						</Button>
					}
					title="Player Name"
					subheader={info.name}
				/>
				<Grid container>
					<Grid item md={10}>
						<CustomizedProgressBars progressBarValue={progressBarValue} />
					</Grid>
					<Grid item md={2}>
						<Badge color="secondary" badgeContent={playerScore} />
					</Grid>
				</Grid>
			</Card>
		</Grid>
	);
};

export default player;
