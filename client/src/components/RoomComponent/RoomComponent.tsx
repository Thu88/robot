import { useEffect, useState } from "react"
import Room from "../../models/Room"
import SquareComponent from "../SquareComponent"
import { ClassNameMap, makeStyles } from "@mui/styles";
import { Box, Paper } from "@mui/material"

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

   /*  useEffect(() => {
        setRoom(new Room(10));
    }, []) */
    return (
        <Box className={classes.container}>
            <Paper className={classes.room}>
                {room.squares.map((sqrow, index)=> {
                    console.log(sqrow)
                    return (
                        <Box className={classes.row} key={`sqrow${index}`}>
                            {sqrow.map((square) => {
                                return (
                                    <SquareComponent key={`square${square.x}${square.y}`} robot={room.robot} square={square} />
                                )
                            })}
                    
                        </Box>
                    )
                })}
            </Paper>
        </Box>
    )
}

export default RoomComponent