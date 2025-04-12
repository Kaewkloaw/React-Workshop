import { DataContext } from "../App";
import { useContext, useState, useEffect } from "react";
import QuestionsData from "../data/QuestionsData";

const Quiz = () => {
    const {setAppState, score, setScore } = useContext(DataContext);
    const [current, setCurrent] = useState(0);
    const [selectChoice, setSelectChoice] = useState("");

    useEffect(() => {
        CheckAnswer();
        // eslint-disable-next-line
    }, [selectChoice]);

    const CheckAnswer = () => {
        if (selectChoice !== "") {
            if (selectChoice === QuestionsData[current].answer) {
                setScore(score + 1);
                nextQuestion();
            } else {
                console.log("Wrong Answer");
                nextQuestion();
            }
        }
    };

    const nextQuestion = () => {
        setSelectChoice("");
        if (current === QuestionsData.length - 1) { // 0 to 4 = 5 questions
            setAppState("score");
        }
         else if (current < QuestionsData.length - 1) {
            setCurrent(current + 1);
        }
    };

    return (
        <div className="quiz">
            <p>{current + 1} / {QuestionsData.length}</p>
            <h1>{QuestionsData[current].question}</h1>
            <div className="options">
                <button onClick={() => setSelectChoice("A")}>{QuestionsData[current].A}</button>
                <button onClick={() => setSelectChoice("B")}>{QuestionsData[current].B}</button>
                <button onClick={() => setSelectChoice("C")}>{QuestionsData[current].C}</button>
                <button onClick={() => setSelectChoice("D")}>{QuestionsData[current].D}</button>
            </div>
        </div>
    );
};

export default Quiz;
