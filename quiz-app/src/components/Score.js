import { DataContext} from "../App";
import { useContext } from "react";
import QuestionsData from "../data/QuestionsData";

const Score = () => {
    const {score, setAppState,setScore} = useContext(DataContext);
    const restartApp = () => {
        setScore(0)
        setAppState("menu")
    }

    return (
        <div className="score">
            <h1>Your Score</h1>
            <h2>{score} / {QuestionsData.length}</h2>
            <button onClick={restartApp}>Again</button>
        </div>
    )
}

export default Score;