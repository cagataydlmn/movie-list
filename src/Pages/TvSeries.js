import Nav from "../Components/Nav";
import TvSeriesList from "../Components/TvSeriesList";

export default function TvSeries() {
    return (
        <div className="home">
            <div>
                <Nav />
            </div>
            <div className="Detail-comp">
                <TvSeriesList />
            </div>
        </div>
    )
}