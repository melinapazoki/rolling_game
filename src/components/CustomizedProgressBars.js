import { styled } from "@mui/material/styles";
import LinearProgress, {
	linearProgressClasses,
} from "@mui/material/LinearProgress";

const BorderLinearProgress = styled(LinearProgress)(() => ({
	height: 5,
	borderRadius: 5,
	[`& .${linearProgressClasses.bar}`]: {
		borderRadius: 5,
		backgroundColor: "#9d29b1",
	},
	top: 10,
}));

const CustomizedProgressBars = ({ progressBarValue }) => {
	return (
		<BorderLinearProgress variant="determinate" value={progressBarValue} />
	);
};

export default CustomizedProgressBars;
