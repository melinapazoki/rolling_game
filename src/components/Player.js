import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
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
							color="success"
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
						<Typography>{playerScore}</Typography>
					</Grid>
				</Grid>
			</Card>
		</Grid>
	);
};

export default player;
