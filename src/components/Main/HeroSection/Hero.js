import Button from './Buttons/Buttons'
import './Hero.css'
import heroimg from "../../../assets/images/hero-img.png"

const Hero = () => {
    return(
        <section className='hero_section'>
            <div className='containers'>
                <div className='hero'>
                    <h2 className='hero__title'>
                        Tell your creativity to the world with 
                        <span className='hero__span'>UIUXer</span>
                    </h2>
                    <div className='hero__content'>
                        <p className='hero__text'>UIUXer is a creative, minimal, and cleanly designed personal and portfolio Webflow template.</p>
                        <div className='hero__buttons'>
                            <Button title={"Buy Template"} bgBtn={false}/>
                            <Button title={"Explore Page"} bgBtn={true}/>
                        </div>
                    </div>
                    <img src={heroimg} width={203} height={205} alt='hero img' />
                </div>
            </div>
        </section>
    )
}

export default Hero