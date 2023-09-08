import Navbar from "./../../components/Navbar/Navbar";
import "./Home.css";
import Button from "./../../components/Button/Button";


export default function Home() {
    return(
        <>
        <Navbar />
        <div className="container">
            <h1>Homepage</h1>
            <Button text="Buy now" />
            <Button text="Click me" />
        </div>
        </>
    )
}