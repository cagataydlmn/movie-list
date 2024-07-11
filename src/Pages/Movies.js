import MovieList from "../Components/MovieList";
import Nav from "../Components/Nav";

export default function Movies() {
    return (
        <div className="home">
            <div>
                <Nav />
            </div>
            <div className="Detail-comp">
                <MovieList />
            </div>
        </div>
    )
}