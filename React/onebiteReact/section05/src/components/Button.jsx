// const Button = ({text, color = "black", a = 0, b = 0, c = 0, children = null}) => {
const Button = ({text, color, a, b, c, children}) => {
    return (
    <button style={{color}}>
        {text} - {color.toUpperCase()} - {[a,b,c]} 
        {children}
    </button>
    )
}
// Button.defaultProps = {
//     color: "black",
// }


export default Button;