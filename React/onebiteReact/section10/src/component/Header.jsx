import { memo } from "react"
import "./Header.css"

const Header = () => {
  return (
    <div className="Header">
        <h3>Daily To-Do 📆</h3>
        <h1>{new Date().toDateString()}</h1>
    </div>
  )
}

// const memoizedComponent = memo(Header);

// export default memoizedComponent;
export default memo(Header);
