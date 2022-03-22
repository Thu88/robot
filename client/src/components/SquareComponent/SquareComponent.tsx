import Robot from "../../models/Robot";
import Square from "../../models/Square";
import RobotComponent from "../RobotComponent";
import { ClassNameMap, makeStyles } from "@mui/styles";
import { Box, Paper } from "@mui/material"

interface Props {
    robot: Robot,
    square: Square,
}

const useStyles = makeStyles(() => ({
    square: {
        width: '40px',
        height: '40px',
        margin: '3px',
    }
}))

const SquareComponent = ({ robot, square }: Props) => {
    const classes: ClassNameMap = useStyles();
    return (
        <Box>
            <Paper className={classes.square}>
                {square.active && (
                    <RobotComponent robot={robot} />

                )}
            </Paper>
        </Box>
    )
};

export default SquareComponent;
