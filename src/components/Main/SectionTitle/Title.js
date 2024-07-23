import './title.css'


const Title = ({title,text}) => {
    return(
        <>
            <h2 className="title">{title}</h2>
            <p className="text">{text}</p>
        </>
    )
}

export default Title