import React,{useState} from "react"
import {Card, Input, Typography, Button} from "antd"
import "./index.css"

function EmptyCard(props) {
    const [titleValue, setTitleValue] = useState("")
    const {Title} = Typography;

    const TitleInput = (
            <Title>
                <Input 
                    value={titleValue} 
                    placeholder="Project's title"
                    className="content__card"
                    onChange={(e) => {setTitleValue(e.target.value)}} />
            </Title>
        )

    const handleCancelClick = () => {
        props.addingCardFunction(false)
    }

    return(
        <Card className="content__card" title={TitleInput}>
            <div className="addItem">
                <Button className="addItemBtn">
                    +
                </Button>
            </div>
            <div className="addCard">
                <Button className="addCard--cancelBtn" onClick={(e) => handleCancelClick()}>
                    Cancel
                </Button>
                <Button className="addCard--confirmBtn">
                    Confirm
                </Button>
            </div>
        </Card>
    )
}

export default EmptyCard;