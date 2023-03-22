import { Link } from "react-router-dom";

const NavBar = () => {
    return(
        <nav className='navBar'>
        <ul className='containerElements'>
          <Link style={{textDecoration: "none"}} to="/sneakers"><li className='navElement'>Sneakers</li></Link>
           <Link  style={{textDecoration: "none"}} to="/sweatshirt"><li className='navElement'>sweatshirt</li></Link>
           <Link  style={{textDecoration: "none"}} to="/blouses"><li className='navElement'>Blouse</li></Link>
        </ul>
      </nav>
    )
}

export default NavBar;