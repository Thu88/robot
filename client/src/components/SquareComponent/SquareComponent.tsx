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
        width: '50px',
        height: '50px',
        margin: '3px',
        padding: '5px'
    }
}))

const SquareComponent = ({ robot, square }: Props) => {
    const classes: ClassNameMap = useStyles();
    return (
        <Box>
            <Paper className={classes.square}>
                {square.active && (
                    <Box>
                        <RobotComponent robot={robot} />
                    </Box>
                )}
            </Paper>
        </Box>
    )
};

export default SquareComponent;
