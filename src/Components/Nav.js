import { NavLink } from "react-router-dom";

export default function Nav() {
    return (
        <nav className="nav">

            <div className="nav-center">
                <div className="nav-center-first">
                    <NavLink to='/'>İKON</NavLink>
                </div>
                <div className="nav-center-second">
                    <NavLink to='/'>Tümü</NavLink>
                    <NavLink to='/movies'>Filimler</NavLink>
                    <NavLink to='/tv-series'>Diziler</NavLink>
                    <NavLink to='/save'>Kaydedilenler</NavLink>
                </div>
            </div>
            <div>
                <NavLink to='/profile'>Profil</NavLink>
            </div>
        </nav>

    )
}