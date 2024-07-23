import Sectionimg from "../SectionImg/Sectionimg"
import Title from "../SectionTitle/Title"
import Firstphoto from "../../../assets/images/case-1.png"
import Secondphoto from "../../../assets/images/case-2.png"
import "./cassection.css"


const Case = () => {
    return(
        <section className="case">
            <div className="container">
                <Title title={"Stunning Case Studies"} text={"Create an optimal visual experience for your users with these inspiring layouts."}/>
                <Sectionimg img1={Firstphoto} text1={"Case Study Single - Web"} img2={Secondphoto} text2={"Case Study Single - Mobile"}/>
            </div>
        </section>
    )
}

export default Case