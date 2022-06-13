import { INSTRUCTION } from "./Room";
import Square from "./Square";

export enum DIRECTION {
    North,
    East,
    South,
    West
};

export default class Robot{
    private _position: Square;
    private _directrion: DIRECTION;

    constructor(square: Square) {
        this._position = new Square(-1 ,-1)
        this._directrion = DIRECTION.North;
    }

    public get position(): Square {
        return this._position;
    }

    public set position(sqare: Square) {
        this._position = sqare;
    }

    public get direction(): DIRECTION {
        return this._directrion;
    }

    public set direction(direction: DIRECTION) {
        this._directrion = direction;
    }

    /*
        This method changes the robots direction. It assumes the direcions
        is like a watch with 4 types a hours. If instruction is Right, it
        moves clock-wise throuh the directions, if instruction is Left, it 
        moves counter clock-wise through the directions.
    */
    public changeDirection(instruction: INSTRUCTION): void{
        switch(instruction) {
            case INSTRUCTION.Right:
                if (this.direction < 3) {
                    this.direction += 1
                }
                else if (this._directrion === 3) {
                    this.direction = 0;
                }
                break;

            case INSTRUCTION.Left:
                if (this.direction <= 3 && this.direction > 0) {
                    this.direction -= 1
                }
                else if (this._directrion === 0) {
                    this.direction = 3;
                }
                break;
        }
    }
}