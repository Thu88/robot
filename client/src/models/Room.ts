import Robot, { DIRECTION } from "./Robot";
import Square from "./Square";

/*
    This file exports a room which contains an array of sqaures
    and a robot, who can move between the sqaures via methods 
    provided by the room.
*/

export enum INSTRUCTION {
    Forward = "Forward",
    Right = "Right",
    Left = "Left",
}

export default class Room{
    private _length: number;
    private _squares: Square[][];
    private _robot: Robot;

    constructor(length: number) {
        this._length = length;
        this._squares = this.initializeSqaures();
        this._robot = new Robot(this._squares[0][0]);
    }
    /*
        This method initializes the squares by construction a multi-dimensional array.
        The first dimension of the array contains the x-axsis of length size, and
        the second dimension contains the y-axis of length size.
    */
    private initializeSqaures(): Square[][] {
        const sqaures: Square[][] = [];

        for (let x = 0; x < this._length; x++) {
            const xAxsis: Square[] = [];

            for (let y = 0; y < this._length; y++) {
                xAxsis.push(new Square(x, y))
            }
            sqaures.push(xAxsis);
        }

        return sqaures;
    }

    /*
        This method can set the start position of the robot. it returns false if 
        the x or y koordinates aren't included in the squares array, or if the
        provided direction contains an error.
    */
    public setRobotPositionAndDirection(x: number, y: number, direction: DIRECTION): boolean {
        try {
            this._robot.position = this._squares[x][y];
            this._robot.direction = direction;
            this._robot.position.active = true;
        }
        catch (err) {
            return false;
        }

        return true;
    }

    /*
        This method moves the robot around the room according the the instructions.
    */
    public moveRobot(instructions: string): boolean {
        //Get an array where each element is a single instruction.
        const disassembledInstructions: string[] = instructions.split('');
        console.log(disassembledInstructions)

        //Loop through each instruction.
        for (let instruction of disassembledInstructions) {
            let convertedInstruction: string = instruction;
            
            if (instruction === "F")
                convertedInstruction = "Forward"  
            else if (instruction === "L")
                convertedInstruction = "Left"
            else if (instruction === "R")
                convertedInstruction = "Right"


            //If the instruction contain an error (it isn't included in the INSTRUCTIONS enum) return false.
            if (!(convertedInstruction in INSTRUCTION)) {
                console.log("Error: Only use (F, L, R) in commands.")
                return false;
            }

            //If the instruction if Right or Left, change the robots direction.
            if (convertedInstruction !== INSTRUCTION.Forward) {
                this._robot.changeDirection(INSTRUCTION[convertedInstruction as keyof typeof INSTRUCTION]);
            }

            //If the instruction is Forward, move the robot to the correct square.
            if (convertedInstruction === INSTRUCTION.Forward) {
                try {
                    //Save a local copy of the robot's x and y coordinates.
                    const robotPosX = this._robot.position.x;
                    const robotPosY = this._robot.position.y;

                    //Inform the square the robot is located on, that the robot is moving to a new sqaure.
                    this.robot.position.active = false;

                    //Move the robot the correct square based on its direction.
                    switch (this._robot.direction) {
                        case DIRECTION.North:
                            this._robot.position = this._squares[robotPosX + 1][robotPosY];
                            break;
                            
                        case DIRECTION.South:
                            this._robot.position = this._squares[robotPosX - 1][robotPosY];
                            break;
                        
                        case DIRECTION.East:
                            this._robot.position = this._squares[robotPosX][robotPosY + 1];
                            break;
                        
                        case DIRECTION.West:
                            this._robot.position = this._squares[robotPosX][robotPosY - 1];
                            break;
                    }
                }
                //If the instructions move the x or y coordinates below 0 or above length, return false.
                catch (err) {
                    console.log("Error: Commands move robot out of room.")
                    return false;
                }
            }
        }

        //Inform the square the robot is moving to that the robot has moved to it.
        this._robot.position.active = true;

        return true;
    }

    public get squares(): Square[][] {
        return this._squares;
    }

    public get robot(): Robot {
        return this._robot;
    }

    public set robot(robot: Robot) {
        this._robot = robot;
    }


}