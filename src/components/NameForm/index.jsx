import React,{useState, useRef, useEffect} from "react"
import {Input} from "antd"
import "./index.css"

function NameForm(props) {
    const [userInput, setUserInput] = useState("")
    const inputRef = useRef();

    const handleInputChange = (e) => {
        setUserInput(e.target.value)
    }

    const handleEnterKey = (e) => {
        if (e.key === "Enter") {
            props.setUserName(userInput)
        }
    }

    useEffect(() => {
        inputRef.current.focus()
    }, [])

    return(
        <div className="nameForm">
            <Input className="nameForm_control" 
              value={userInput} onChange={(e) => {handleInputChange(e)}}  
              placeholder="Type your name and press Enter"
              onKeyDown={(e) => {handleEnterKey(e)}}
              ref={inputRef}
              size="large"/>
        </div>
    )
}

export default NameForm