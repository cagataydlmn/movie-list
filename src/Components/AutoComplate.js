import { useSite } from "../context/AppContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

export default function AutoComplate() {
    const { search, setSearch } = useSite();

    return (
        <div className="input">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <input
                type="text"
                placeholder="Search for movies or TV series"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
        </div>
    )
}