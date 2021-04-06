import React,{useState, useEffect} from "react"
import NameForm from "../../components/NameForm"
import Sidebar from "../../components/Sidebar"
import "./index.css"

function Home() {
    const [userName, setUserName] = useState("");

    return(
        <div className="home">
            {userName === "" ? 
                <NameForm userNameFunction={setUserName} /> : 
                <Sidebar />}
        </div>
    )
}

export default Home