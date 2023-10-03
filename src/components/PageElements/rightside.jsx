import { useState } from "react"
import arrow from "../pictures/arrow/arrow.svg"

export default function RightSide () {

        const [showBlock,setShowBlock] = useState(false);
        const [showBlock2, setShowBlock2] = useState(false);
        const [showBlock3, setShowBlock3] = useState(false);
        const [showBlock4, setShowBlock4] = useState(false);
        const [showBlock5, setShowBlock5] = useState(false);
    return (
        <div className="rightside">
            <h1>FAQ</h1>
            <div className="span-wrap">
                    <div className="spandiv">
                        <span>How many team members can I invite?</span>
                        <img onClick={() =>  setShowBlock(!showBlock)} src={arrow} alt="arrow"/>
                    </div>
                    {showBlock && (
                    <p>No more than 2GB. All files in your account must fit your allotted storage space.</p>
                )}

                <div className="spandiv">
                        <span>What is the maximum file upload size?</span>
                        <img onClick={() =>  setShowBlock2(!showBlock2)} src={arrow} alt="arrow"/>
                    </div>
                    {showBlock2 && (
                    <p>No more than 2GB. All files in your account must fit your allotted storage space.</p>
                )}

                <div className="spandiv">
                        <span>How do I reset my password?</span>
                        <img onClick={() =>  setShowBlock3(!showBlock3)} src={arrow} alt="arrow"/>
                    </div>
                    {showBlock3 && (
                    <p>No more than 2GB. All files in your account must fit your allotted storage space.</p>
                )}

                <div className="spandiv">
                        <span>Can I cancel my subscription?</span>
                        <img onClick={() =>  setShowBlock4(!showBlock4)} src={arrow} alt="arrow"/>
                    </div>
                    {showBlock4 && (
                    <p>No more than 2GB. All files in your account must fit your allotted storage space.</p>
                )}

                <div className="spandiv">
                        <span>Do you provide additional support?</span>
                        <img onClick={() =>  setShowBlock5(!showBlock5)} src={arrow} alt="arrow"/>
                    </div>
                    {showBlock5 && (
                    <p>No more than 2GB. All files in your account must fit your allotted storage space.</p>
                )}

                </div>

        </div>
    )
}