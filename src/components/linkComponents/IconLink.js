import { Link } from 'react-router-dom'

function IconLink({ target, icon }){
    if(target.startsWith('http')){
        return (
            <a href={target} target="_blank" rel="noopener noreferrer">
                <i className={icon}></i>
            </a>
        )
    }
    return (
        <Link to={target}>
            <i className={icon}></i>
        </Link>
    )
}

export default IconLink
