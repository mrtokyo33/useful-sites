import { Link } from 'react-router-dom'

function TextLink({target, text, linkClass}){
    return (
        <>
            <Link to={target} className={linkClass}>{text}</Link>
        </>
    )
}

export default TextLink
