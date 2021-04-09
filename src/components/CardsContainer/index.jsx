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
            <div className="content__header">
                <Button 
                  className="content__header--addBtn"
                  onClick={(e) => setAddingCard(true)}>
                    Add new card
                </Button>
                <Button 
                  className="content__header--clearBtn"
                  onClick={(e) => props.cardsFunction([])}>
                    Clear all
                </Button>
            </div>
            <div className="content__cards">
                {props.cards.map((currentCard, cardIndex) => {
                    return (
                        <SingleCard 
                        key={`project-${cardIndex}`} 
                        cards={props.cards} 
                        card={currentCard} 
                        cardIndex={cardIndex}
                        cardsFunction={props.cardsFunction}/>
                    )
                })}

                {addingCard? 
                    <EmptyCard 
                    addingCardFunction={setAddingCard} 
                    addingCard={addingCard}
                    cards={props.cards} 
                    cardsFunction={props.cardsFunction}/> : 
                    <Card 
                    hoverable={true} 
                    id="create-card" 
                    onClick={() => setAddingCard(true)}
                    className="content__card" >
                        <div className="content__card__createBox">
                            +
                        </div>
                </Card>}
            </div>
        </Content>
    )
}

export default CardsContainer