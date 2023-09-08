import "./About.css";
import Navbar from "../../components/Navbar/Navbar";
import Button from "../../components/Button/Button";


export default function About() {
    return (
        <div className="container">
            <Navbar />
            <h1>About</h1>
            <Button text="YE About Pagr Hai" />
        </div>
    )
}