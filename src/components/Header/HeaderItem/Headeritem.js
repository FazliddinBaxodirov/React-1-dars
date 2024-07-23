import './HeaderItem.css'


const HeaderItem = ({title}) => {
    return(
        <li>
            <a className='item__link'>{title}</a>
        </li>
    )
}

export default HeaderItem