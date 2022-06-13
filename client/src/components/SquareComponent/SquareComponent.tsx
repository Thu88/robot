import Robot from "../../models/Robot";
import Square from "../../models/Square";
import RobotComponent from "../RobotComponent";
import { ClassNameMap, makeStyles } from "@mui/styles";
import { Box, Paper } from "@mui/material"
import { useState } from "react";

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
    const [active, setActive] = useState<boolean>(square.active)
    
    if (square.active !== active) {
        setActive(square.active);
    }

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
