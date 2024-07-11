import { useSite } from "../context/AppContext";

export default function AutoComplate() {
    const { search, setSearch } = useSite();

    return (
        <div className="input">
            <input
                type="text"
                placeholder="Search for movies or TV series"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
        </div>
    )
}