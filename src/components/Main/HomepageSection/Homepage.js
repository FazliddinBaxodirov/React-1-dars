import Sectionimg from "../SectionImg/Sectionimg"
import Title from "../SectionTitle/Title"
import Firstphoto from "../../../assets/images/homepage-1.png"
import Secondphoto from "../../../assets/images/homepage-2.png"
import "./homepage.css"


const Homepage = () => {
    return(
        <section className="homepage">
            <div className="container">
                <Title title={"Professional Home Pages"} text={"Attractive and stylish home layouts bring your portfolio website to the next level."}/>
                <Sectionimg img1={Firstphoto} text1={"Home UX Designer"} img2={Secondphoto} text2={"Home UI Designer"}/>
            </div>
        </section>
    )
}

export default Homepage