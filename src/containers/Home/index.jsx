import React,{useState, useEffect} from "react"
import NameForm from "../../components/NameForm"

function Home() {
    const [userName, setUserName] = useState("");

    return(
        <div>
            {userName === "" ? <NameForm userNameFunction={setUserName} /> : ""}
        </div>
    )
}

export default Home