import React,{useState, useEffect} from "react"
import {Form} from "react-bootstrap"
import "./index.css"

function NameForm(props) {
    const [userInput, setUserInput] = useState("")

    const handleInputChange = (e) => {
        setUserInput(e.target.value)
    }

    const handleEnterKey = (e) => {
        if (e.key === "Enter") {
            props.userNameFunction(userInput)
        }
    }

    return(
        <div className="nameForm">
            <Form.Control className="nameForm_control" 
              value={userInput} onChange={(e) => {handleInputChange(e)}}  
              placeholder="Type your name and press Enter"
              onKeyDown={(e) => {handleEnterKey(e)}}
              size="lg"/>
        </div>
    )
}

export default NameForm