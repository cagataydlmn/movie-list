import { NavLink } from "react-router-dom";
import { FaBorderAll, FaBookmark, FaFilm, FaTv, FaSpider } from "react-icons/fa";

export default function Nav() {
    return (
        <nav className="nav">
            <div className="nav-center">
                <div className="nav-center-first">
                    <NavLink to='/'><FaSpider />
                    </NavLink>
                </div>
                <div className="nav-center-second">
                    <NavLink to='/'>
                        <FaBorderAll />
                    </NavLink>
                    <NavLink to='/movies'>
                        <FaFilm />
                    </NavLink>
                    <NavLink to='/tv-series'>
                        <FaTv />
                    </NavLink>
                </div>
            </div>
            <div>
                <NavLink to='/save'>
                    <FaBookmark />
                </NavLink>
                {/* <NavLink to='/profile'>
                    <FaRegUserCircle />
                </NavLink> */}
            </div>
        </nav>
    )
}            