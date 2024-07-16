import Nav from "../Components/Nav";
import TvSeriesFilter from "../Components/TvSeriesFilter";

export default function TvSeriesFilterPage(){
    return(
        <div className="home">
        <div>
            <Nav />
        </div>
        <div className="home_movie-filter">
           <TvSeriesFilter/>
        </div>
    </div>
    )
}