import MovieFilter from "../Components/MoviesFilter";
import Nav from "../Components/Nav";

export default function MovieFilterPage(){
    return(
        <div className="home">
        <div>
            <Nav />
        </div>
        <div className="home_movie-filter">
           <MovieFilter/>
        </div>
    </div>
    )
}