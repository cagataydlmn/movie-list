import MovieDetail from "../Components/MovieDetail";
import Nav from "../Components/Nav";

export default function Detail() {
    return (
        <div className="home">
            <div>
                <Nav />
            </div>
            <div className="Detail-comp">
                <MovieDetail />
            </div>
        </div>
    )
}