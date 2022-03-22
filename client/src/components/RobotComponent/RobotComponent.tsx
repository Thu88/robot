import { useEffect, useState } from "react";
import Robot, { DIRECTION } from "../../models/Robot";

interface Props {
    robot: Robot
}

const RobotComponent = ({ robot }: Props): JSX.Element => {
    const [imgDirection, setImgDirection] = useState<JSX.Element>(<img />);

    useEffect(() => {
        switch (robot.direction) {
            case DIRECTION.North:
                setImgDirection(<img src={"/img/robotnorth.svg"} />)
                break;
            
            case DIRECTION.East:
                setImgDirection(<img src="/img/roboteast.svg" />)
                break;

            case DIRECTION.South:
                setImgDirection(<img src="/img/robotsouth.svg" />)
                break;

            case DIRECTION.West:
                setImgDirection(<img src="/img/robotwest.svg" />)
                break;
        }
    }, []);

    return (
        <div>
            {imgDirection}
        </div>
    )
}

export default RobotComponent;