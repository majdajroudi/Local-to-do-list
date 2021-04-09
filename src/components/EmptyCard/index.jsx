import React,{useState, useRef, useEffect} from "react"
import {Card, Input, Typography, Button, message} from "antd"
import "./index.css"

function EmptyCard(props) {
    const [titleValue, setTitleValue] = useState("");
    const newCardTitleRef = useRef(null)
    const {Title} = Typography;

    const TitleInput = (
            <Title>
                <Input 
                    value={titleValue} 
                    placeholder="Project's title"
                    className="content__card"
                    onChange={(e) => setTitleValue(e.target.value)}
                    onKeyDown={(e) =>  handleEnterClick(e)}
                    ref={newCardTitleRef}/>
            </Title>
    )

    const handleEnterClick = (e) => {
        if (e.key === "Enter") {
            handleConfirmClick(e)
        } else if (e.key === "Escape") {
            props.addingCardFunction(false)
        }
    }


    const handleConfirmClick = (e) => {
        e.preventDefault()
        if (titleValue !== ""){
        const cardsCopy = [...props.cards]
        const capitalizedTitle = titleValue.charAt(0).toUpperCase() + titleValue.slice(1)
        cardsCopy.push({title: capitalizedTitle, items: [], category: ""})
        props.cardsFunction(cardsCopy)
        props.addingCardFunction(false)
        message.success("Project successfully added. You can add items now")
        } else {
            message.error("Please add a project title")
        }
    }

    useEffect(() => {
        if(props.addingCard){
            newCardTitleRef.current.focus()
        }
    }, [props.addingCard])

    return(
        <Card className="content__card" title={TitleInput}>
            <div className="addCard">
                <Button className="addCard--cancelBtn" onClick={() => props.addingCardFunction(false)}>
                    Cancel
                </Button>
                <Button className="addCard--confirmBtn" onClick={(e) => handleConfirmClick(e)}>
                    Confirm
                </Button>
            </div>
        </Card>
    )
}

export default EmptyCard;