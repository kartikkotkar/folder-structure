import Button from "../../components/Button/Button";
import Navbar from "../../components/Navbar/Navbar";
import Img1 from "../../Iamge/beautiful-tree.jpg";
import Img2 from "../../Iamge/image-tree.jpg";
import Img3 from "../../Iamge/tree-img.jpg";
import "./Contact.css";

export default function Contact() {
    return (
        <>
            <div className="container1">
                <Navbar />
                
                <div className="container-contact">


                    <div className="contact-card">
                        <img src={Img1} alt="React Logo" className="img" />
                        <h1 className="heading-contact">Contact</h1>
                        <p>How do we define a tree and what makes it different from other forest plants and organisms?
                             In this post.</p>
                          <Button text="Click Contact Page" /> 
                          </div>


                    <div className="contact-card">
                    <img src={Img2} alt="React Logo" className="img" />
                        <h1 className="heading-contact">Contact</h1>
                        <p> How do we define a tree and what makes it different from other forest plants and organisms?
                             In this post.</p>
                          <Button text="Click Contact Page" />
                          </div>


                    <div className="contact-card">
                        <img src={Img3} alt="React Lgo" className="img" />
                        <h1 className="heading-contact">Contact</h1>
                        <p>How do we define a tree and what makes it different from other forest plants and organisms?
                             In this post.</p>
                         <Button text="Click Contact Pgae" />
                          </div>
                </div>

            </div>
        </>
    )
}