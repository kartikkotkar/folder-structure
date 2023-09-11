import "./Button.css"

export default function Button({text}){
    return(
    <>
    <div className="button-container">
    <button className='btn'>{text}</button>
    </div>
    </>
    )
}
