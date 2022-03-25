import { useEffect, useState } from "react"
import Room from "../../models/Room"
import SquareComponent from "../SquareComponent"
import { ClassNameMap, makeStyles } from "@mui/styles";
import { Box, Paper } from "@mui/material"
import { DIRECTION } from "../../models/Robot";

const useStyles = makeStyles(() => ({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    row: {
      display: 'flex',
      flexDirection: 'row',
    },
    room: {
      width: 'fit-content'  
    }
}))

const RoomComponent = () => {
    const classes: ClassNameMap = useStyles();
    const [room, setRoom] = useState<Room>(new Room(10))
    room.setRobotPositionAndDirection(0, 0, DIRECTION.East);
    useEffect(() => {
       
    }, [])
    return (
        <Box className={classes.container}>
            <Paper className={classes.room}>
                {room.squares.map((sqrow, index)=> {
                    return (
                        <Box className={classes.row} key={`sqrow${index}`}>
                            {sqrow.map((square) => {
                                return (
                                    <SquareComponent key={`square${square.x}${square.y}`} robot={room.robot} square={square} />
                                )
                            })}
                    
                        </Box>
                    )
                }).reverse()}
            </Paper>
        </Box>
    )
}

export default RoomComponent