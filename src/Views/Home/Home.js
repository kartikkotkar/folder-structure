import Navbar from "./../../components/Navbar/Navbar";
import "./Home.css";
import Button from "./../../components/Button/Button";
import Img from "../../Iamge/image-1.jpeg";
import Img1 from "../../Iamge/image-2.jpeg";
import Img2 from "../../Iamge/image-3.jpeg";


export default function Home() {
    return (
        <>
            <Navbar />


            <div className="container">
                <h1>Homepage</h1>

            </div>
            <div className="container-home">
                <div className="about">
                    <img src={Img} alt="React Logo" className="img" />
                    <h2 className="about-heading">Home</h2>
                    <p> A tree is a tall plant that can live for a very long time.
                        It has a single stem or trunk and branches that support leaves. </p>
                    <Button text="Buy Now" />
                </div>


                <div className="about">
                    <img src={Img1} alt="React Logo" className="img" />
                    <h2 className="about-heading">Home</h2>
                    <p>  Beneath the ground, a tree has a root system that acts as an anchor and stores
                        the water and nutrients the plant needs to grow.</p>
                    <Button text="Buy Now" />
                </div>

                <div className="about">
                    <img src={Img2} alt="React Logo" className="img" />
                    <h2 className="about-heading">Home</h2>
                    <p>A tree is a tall plant that can live for a very long time. It has a single stem or trunk and branches that support leaves. Beneath the ground.</p>

                    <Button text="Buy Now" />
                </div>
            </div>



        </>
    )
}


