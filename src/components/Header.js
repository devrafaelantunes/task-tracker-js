import PropTypes from 'prop-types'
import Button from "./Button"
import {useLocation} from 'react-router-dom'

const Header = ({title, onAdd, buttonText}) => {
    const location = useLocation()

    return (
        <header className='header'>
            <h1>{title}</h1>
            {location.pathname === '/' && <Button
            color={buttonText ? 'red' : 'green'}
            text={buttonText ? "Hide" : "Add"}
            onClick={onAdd}/>}
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
    author: 'dev@rafaelantun.es'
}


Header.propTypes = {
    title: PropTypes.string.isRequired
}





export default Header