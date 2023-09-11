import "./About.css";
import Navbar from "../../components/Navbar/Navbar";
import Button from "../../components/Button/Button";
import Img from "../../Iamge/tree1.jpg";
import Img1 from "../../Iamge/tree.webp"
import Img3 from "../../Iamge/tree2.jpg";


export default function About() {
    return (
        <>
            <div className="container">
                <Navbar />
                <div className="container-about">

                    
                    <div className="about">
                    <img src={Img} alt="React Logo" className="img" />
                        <h1>About</h1>
                        <p>How do we define a tree and what makes it different from other forest plants and organisms?
                             In this post, we look a little closer at the common characteristics</p>
                         <Button text="Click Card" />
                         </div>

                    <div className="about">
                    <img src={Img1} alt="React Logo" className="img" />
                        <h1>About</h1>
                        <p>How do we define a tree and what makes it different from other forest plants and organisms?
                             In this post, we look a little closer at the common characteristics</p>
                        <Button text="Click card" /> 
                        </div>

                    <div className="about">
                        <img src={Img3} alt="React LOgo" className="img" />
                        <h1>About</h1>
                        <p>How do we define a tree and what makes it different from other forest plants and organisms?
                             In this post, we look a little closer at the common characteristics</p>
                        <Button text="Click card" /> 
                        </div>


                </div>

            </div>
        </>
    )
}