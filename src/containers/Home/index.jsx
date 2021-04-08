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
        const savedName = localStorage.getItem("user-name")
        const savedProjects = localStorage.getItem("project-cards")
        if (savedName) {
            setUserName(JSON.parse(savedName))
        }
        if (savedProjects) {
            setProjectCards(JSON.parse(savedProjects))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("user-name", JSON.stringify(userName))
        localStorage.setItem("project-cards", JSON.stringify(projectCards))
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