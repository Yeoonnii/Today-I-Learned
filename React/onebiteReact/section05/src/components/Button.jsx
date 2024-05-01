const Button = ({text, color = "black", a = 0, b = 0, c = 0, children = null}) => {
const handleClick = ((e) => {
    console.log(e)
})
    return (
    <button 
        onClick={handleClick}
        // onMouseEnter={() => {
        //     console.log(color);
        // }}
        style={{color}}>
            {text} - {color.toUpperCase()} - {[a,b,c]} 
            {children}
    </button>
    )
}


export default Button;