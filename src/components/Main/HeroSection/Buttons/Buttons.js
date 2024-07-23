import "./Buttons.css"

const Button = ({title,bgBtn}) => {
    return(
        <button className={bgBtn ? "blue" : "orange"}>{title}</button>
    )
}

export default Button