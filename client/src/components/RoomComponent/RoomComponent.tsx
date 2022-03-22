import { useEffect, useState } from "react"
import Room from "../../models/Room"
import SquareComponent from "../SquareComponent"

const RoomComponent = () => {
    const [room, setRoom] = useState<Room>(new Room(10))

   /*  useEffect(() => {
        setRoom(new Room(10));
    }, []) */
    return (
        <div>
            {room.squares.map((sqrow, index)=> {
                console.log(sqrow)
                return (
                    <div key={`sqrow${index}`}>
                        {sqrow.map((square) => {
                            return (
                                <SquareComponent key={`square${square.x}${square.y}`} robot={room.robot} square={square} />
                            )
                        })}
                   
                    </div>
                )
            })}

        </div>
    )
}

export default RoomComponent