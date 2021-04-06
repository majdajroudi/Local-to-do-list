import React,{useState, useEffect} from "react"
import NameForm from "../../components/NameForm"
import CardsContainer from "../../components/CardsContainer"
import Sidebar from "../../components/Sidebar"
import {Layout} from "antd"
import "./index.css"

function Home() {
    const [userName, setUserName]           = useState("");
    const [projectCards, setProjectCards]   = useState([])

    return(
        <Layout className="home">
            <Sidebar />
            <CardsContainer cards={projectCards} cardsFunction={setProjectCards}/>
        </Layout>
    )
}

export default Home