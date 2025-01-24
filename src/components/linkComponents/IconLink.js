import { Link } from 'react-router-dom'

function IconLink({target, icon}){
    return (
        <> 
            <Link to={target}>
                <i className={icon}></i>
            </Link>
        </>
    )
}

export default IconLink