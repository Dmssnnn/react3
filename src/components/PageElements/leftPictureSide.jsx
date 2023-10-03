import leftmainpic from "../pictures/leftmainpic/leftpicture.svg"
import blockpicture from "../pictures/blockpicture/blockpicture.svg"

export default function  LeftPictureSide() {
    return (
        <div className="leftDiv">
            <img className="leftmainpic" src={leftmainpic}  alt="desk"/>
            <img className="blockpic" src={blockpicture} alt="block"/>
        </div>
    )
}
