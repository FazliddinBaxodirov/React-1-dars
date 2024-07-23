import Sectionimg from "../SectionImg/Sectionimg"
import Title from "../SectionTitle/Title"
import Firstphoto from "../../../assets/images/support-1.png"
import Secondphoto from "../../../assets/images/support-2.png"
import Thirdphoto from "../../../assets/images/support-3.png"
import Fourthphoto from "../../../assets/images/support-4.png"
import "./support.css"


const Support = () => {
    return(
        <section className="support">
            <div className="container">
                <Title title={"Supportive Pages"} text={"Feel the feature of creativity with these inner page layouts that perfectly match your site."}/>
                <Sectionimg img1={Firstphoto} text1={"About Me"} img2={Secondphoto} text2={"Blog"}/>
                <Sectionimg img1={Thirdphoto} text1={"Blog single"} img2={Fourthphoto} text2={"Contact Us"}/>
            </div>
        </section>
    )
}

export default Support