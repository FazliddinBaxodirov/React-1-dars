import SiteLogo from "../../assets/images/logo.svg"
import HeaderItem from "./HeaderItem/Headeritem"
import './Header.css'

const Header = () => {
    return(
        <div className='container'>
            <div className="header">
                <a className="header__logo-link">
                    <img src={SiteLogo} width={176} height={41}></img>
                </a>
                <ul className="header__list">
                    <HeaderItem title={"Home"}/>
                    <HeaderItem title={"About me"}/>
                    <HeaderItem title={"Pages"}/>
                    <HeaderItem title={"Contact Us"}/>
                </ul>
            </div>
        </div>
    )
}

export default Header