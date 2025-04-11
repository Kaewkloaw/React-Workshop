import { DataContext } from "../App"
import { useContext } from "react"

const Quiz = () => {
    const {setAppState} = useContext(DataContext)
    return (
        <div className="quiz">
            <h1>Quiz Component</h1>
            <button onClick={()=>setAppState("menu")}>Back</button>
        </div>
    )
}

export default Quiz;