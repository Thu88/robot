import { FormEvent, useEffect, useState } from "react"
import Room from "../../models/Room"
import SquareComponent from "../SquareComponent"
import { ClassNameMap, makeStyles } from "@mui/styles";
import { Box, Button, FormControl, InputLabel, MenuItem, Paper, Select, TextField } from "@mui/material"
import Robot, { DIRECTION } from "../../models/Robot";
import React from "react";

const useStyles = makeStyles(() => ({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh',
        gridGap: '100px'
    },
    row: {
      display: 'flex',
      flexDirection: 'row',
    },
    room: {
      width: 'fit-content'  
    },
    inputsContainer: {
        padding: '50px',
    },
    startInputsContainer: {
        width: '500px',
        display: 'flex',
        flexDirection: 'column',
        gridGap: '30px',
        alignItems: 'center',
        justifyContent: 'center'
    
    },
    inputs: {
       width: '300px'
    },
    input: {
    }
}))

const RoomComponent = () => {
    const classes: ClassNameMap = useStyles();
    const [room, setRoom] = useState<Room>(new Room(10))
    const [robot, setRobot] = useState<Robot>();
    const [startX, setStartX] = useState<number>(0);
    const [startY, setStartY] = useState<number>(0);
    const [startDirection, setStartDirection] = useState<DIRECTION>(DIRECTION.East);
    const [commands, setCommands] = useState<string>("");
    const [update, setUpdate] = useState<boolean>(false);

    const handleChange = ((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, setState: Function) => {
       setState(e.target.value);
    })
    const xyValidation = (val: String): boolean => {
        val.split('').forEach((s) => {
            console.log(s)
            if (!(s >= '0' && s <= '9')) {
                return false;
            }
        });
        return true;
    }
    const setStartPosition = () => {
        const valid = room.setRobotPositionAndDirection(startX, startY, startDirection);

        valid ? setUpdate(!update) : window.alert("Unvalid commands.")
        
    }
    const moveRobot = () => {
        const valid = room.moveRobot(commands);
        
        valid ? setUpdate(!update) : window.alert("Unvalid commands.")

    }
    useEffect(() => {
       
    }, [])
    return (
        <Box className={classes.container}>
            <Paper className={classes.inputsContainer}>
                <Box className={classes.startInputsContainer}>
                    <Box className={classes.inputs}>
                        <FormControl fullWidth>
                            <TextField type="number" value={startX} onChange={(e) => {handleChange(e, setStartX)}} className={classes.input} label="Enter the robot's start x coordinate" />
                        </FormControl>
                    </Box>

                    <Box className={classes.inputs}>
                        <FormControl fullWidth>
                            <TextField className={classes.input} value={startY} onChange={(e) => {handleChange(e, setStartY)}} label="Enter the robot's start y coordinate" />
                        </FormControl>
                    </Box>

                    <Box className={classes.inputs}>
                        <FormControl fullWidth>
                            <InputLabel id="select-start-direction">Start direction</InputLabel>
                            <Select
                                labelId="select-start-direction"
                                id="demo-simple-select"
                                className={classes.input}
                                label="Start direction"
                                type="number"
                                value={startDirection}
                                onChange={(e) => {
                                    setStartDirection(e.target.value as DIRECTION);
                                }}
                            >
                                <MenuItem value={DIRECTION.North}>North</MenuItem>
                                <MenuItem value={DIRECTION.East}>East</MenuItem>
                                <MenuItem value={DIRECTION.South}>South</MenuItem>
                                <MenuItem value={DIRECTION.West}>West</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                    <Box className={classes.inputs}>
                        <FormControl fullWidth>
                            <Button className={classes.input} onClick={setStartPosition} variant="contained">Enter</Button>
                        </FormControl>
                    </Box>
               
                    <Box className={classes.inputs}>
                        <FormControl fullWidth>
                            <TextField type="text" value={commands} onChange={(e) => {handleChange(e, setCommands)}} className={classes.input} label="Enter commands" />
                        </FormControl>
                    </Box>

                    
                    <Box className={classes.inputs}>
                        <FormControl fullWidth>
                            <Button className={classes.input} onClick={moveRobot} variant="contained">Enter</Button>
                        </FormControl>
                    </Box>
                </Box>
            </Paper>
            <Paper className={classes.room}>
                {/* Render the squares */}
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