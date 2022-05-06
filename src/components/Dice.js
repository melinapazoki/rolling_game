import Box from "@mui/material/Box";

import rollingDice from "../images/rollingDice.gif";
import diceImg1 from "../images/huge-dice1.png";
import diceImg2 from "../images/huge-dice2.png";
import diceImg3 from "../images/huge-dice3.png";
import diceImg4 from "../images/huge-dice4.png";
import diceImg5 from "../images/huge-dice5.png";
import diceImg6 from "../images/huge-dice6.png";
const diceArrayResult = [
	diceImg1,
	diceImg2,
	diceImg3,
	diceImg4,
	diceImg5,
	diceImg6,
];

const Dice = ({ diceResult }) => {
	// find Image according the result of match
	const [diceImgResult] = diceArrayResult.filter((imgItem, key) => {
		return diceResult === key + 1;
	});
	const diceImage = diceImgResult ? diceImgResult : rollingDice;
	return (
		<Box>
			<img
				width="100px"
				src={diceImage}
				alt={`Dice-${diceResult}`}
				className="dice"
			/>
		</Box>
	);
};

export default Dice;
