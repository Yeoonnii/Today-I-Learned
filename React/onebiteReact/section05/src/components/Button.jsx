const Button = ({text, color = "black", a = 0, b = 0, c = 0, children = null}) => {
    return (
    <button style={{color}}>
        {text} - {color.toUpperCase()} - {[a,b,c]} 
        {children}
    </button>
    )
}

export default Button;