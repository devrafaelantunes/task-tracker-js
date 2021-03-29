export const Footer = () => {
    return (
    <h1>Footer</h1>
    )
}

export const Name = ({name}) => {
    return (
        <h1 style={headingStyle}>Greetings {name}</h1>
    )
}


const headingStyle =  {
    color: 'red',
    fontSize: '21px'
}

//export default Footer