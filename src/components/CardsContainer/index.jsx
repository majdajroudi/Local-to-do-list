import React,{useState} from "react"
import {Layout, Card, Button} from "antd"
import SingleCard from "../SingleCard"
import EmptyCard from "../EmptyCard"
import "./index.css"

function CardsContainer(props) {
    const {Content} = Layout;
    const [addingCard, setAddingCard] = useState(false)

    return(
        <Content className="content">
            {props.cards.map((currentCard, cardIndex) => {
                return (
                    <SingleCard key={`project-${cardIndex}`} card={currentCard} />
                )
            })}

            {addingCard? 
                <EmptyCard addingCardFunction={setAddingCard} /> : 
                <Card 
                  hoverable={true} 
                  id="create-card" 
                  onClick={() => setAddingCard(true)}
                  className="content__card" >
                    <div className="content__card__createBox">
                        +
                    </div>
                </Card>}
        </Content>
    )
}

export default CardsContainer