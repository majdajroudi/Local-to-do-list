import React from "react"
import {Card, Checkbox} from "antd"
import "./index.css"

function SingleCard(props) {
    return(
        <Card className="content__card" title={props.card.title}>
            <ul className="itemList">
                {props.card.items.map((currentItem, itemIndex) => {
                    return(
                        <li key={`item-${itemIndex}`} className="itemList__singleItem">
                            <Checkbox/>
                            <span>{currentItem}</span>
                        </li>
                    )
                })}
            </ul>
        </Card>
    )
}

export default SingleCard