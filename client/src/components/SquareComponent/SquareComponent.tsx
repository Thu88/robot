import Robot from "../../models/Robot";
import Square from "../../models/Square";
import RobotComponent from "../RobotComponent";

interface Props {
    robot: Robot,
    square: Square,
}

const SquareComponent = ({ robot, square }: Props) => {
    return (
        <div>
            {square.active && (
                <RobotComponent robot={robot} />

            )}
        </div>
    )
};

export default SquareComponent;
