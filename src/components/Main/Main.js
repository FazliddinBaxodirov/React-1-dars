import Case from "./Casesection/Casesection"
import Hero from "./HeroSection/Hero"
import Homepage from "./HomepageSection/Homepage"
import Support from "./Support/Support"



const Main = () => {
    return(
        <main>
            <Hero/>
            <Homepage/>
            <Case/>
            <Support/>
        </main>
    )
}

export default Main