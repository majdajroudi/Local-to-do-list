import React,{useState, useEffect} from "react"
import NameForm from "../../components/NameForm"
import CardsContainer from "../../components/CardsContainer"
import Sidebar from "../../components/Sidebar"
import {Layout} from "antd"
import "./index.css"

function Home() {
    const [userName, setUserName]           = useState("");
    const [projectCards, setProjectCards]   = useState([]);

    useEffect(() => {
        const savedInfo = localStorage.getItem("user-name")
        if (savedInfo) {
            setUserName(JSON.parse(savedInfo))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("user-name", JSON.stringify(userName))
    })

    return(
        <>
            {userName === ""?
            <NameForm setUserName={setUserName}/>:
            <Layout className="home">
                
                <Sidebar userName={userName}/>
                <CardsContainer cards={projectCards} cardsFunction={setProjectCards}/>
            </Layout>}
        </>
    )
}

export default Home