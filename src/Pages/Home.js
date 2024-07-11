import AnaSayfa from "../Components/AnaSayfa";
import AutoComplate from "../Components/AutoComplate";
import Nav from "../Components/Nav";
import Swiper from "../Components/Swiper";

export default function Home() {
    return (
        <div className="home">
            <div>
                <Nav />
            </div>
            <div className="home-comp">
                <AutoComplate />
                <Swiper />
                <AnaSayfa />
            </div>
        </div>
    )
}