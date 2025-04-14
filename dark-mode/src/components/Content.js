import light from "../image/light.svg";
import dark from "../image/dark.svg";
import { useContext } from "react";
import { ThemeContext } from "../App";

const Content = () => {
    const {theme} = useContext(ThemeContext);
    return (
        <main className={theme === "dark" ? "dark" : "light"}>
            <div className="content">
                <h1>Kaewklaow</h1>
                <p>Dark Mode</p>
                <img src = {theme==="dark" ? dark : light} alt="Logo"/>
            </div>
        </main>
    )
}
export default Content;