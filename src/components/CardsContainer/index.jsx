import React from "react"
import {Layout, Card, Button} from "antd"
import SingleCard from "../SingleCard"
import "./index.css"

function CardsContainer(props) {
    const {Content} = Layout;

    return(
        <Content className="content">
            {props.cards.map((currentCard, cardIndex) => {
                return (
                    <SingleCard card={currentCard} />
                )
            })}

            <Card hoverable={true} id="create-card" className="content__card" >
                <div className="content__card__createBox">
                    +
                </div>
            </Card>
        </Content>
    )
}

export default CardsContainer