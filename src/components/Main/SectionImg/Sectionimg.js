import "./sectionimg.css"

const Sectionimg = ({img1,text1,img2,text2}) =>{
    return(
        <div className="img-wrapper">
            <div className="img-wrapper__content">
                <img src={img1} width={645} height={958} alt="img"/>
                <p className="img-text">{text1}</p>
            </div>
            <div className="img-wrapper__content">
                <img src={img2} width={645} height={958} alt="img"/>
                <p className="img-text">{text2}</p>
            </div>
        </div>
    )
}

export default Sectionimg