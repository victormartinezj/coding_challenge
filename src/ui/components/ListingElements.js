import { useEffect } from "react";

const ListingElements = ({ universities }) => {
    const [currentUniversities, setCurrentUniversities] = useState(
        universities,
    );
    const [filterUniversities, setFilterUniversities] = useState("");
    const [sortingElements, setSortingElements] = useState(null);
    useEffect(() => {
        console.log(filterUniversities);
        setSortingElements(null);
        if (filterUniversities) {
            const regExpression = new RegExp(filterUniversities, "giu");
            setCurrentUniversities(
                universities.filter(filterUniversities =>
                    regExpression.test(filterUniversities.name),
                ),
            );
        } else {
            setCurrentUniversities(universities);
        }
    }, [filterUniversities]);

    useEffect(() => {
        if (sortingElements) {
            (() => {
                console.log([...currentUniversities]);
                const tempOrder = [...currentUniversities].sort((a, b) => {
                    if (a.name > b.name) {
                        return 1;
                    }
                    if (a.name < b.name) {
                        return -1;
                    }
                    return 0;
                });
                setCurrentUniversities(
                    sortingElements === "order"
                        ? tempOrder
                        : tempOrder.reverse(),
                );
            })();
        }
    }, [sortingElements]);
    return (
        <div>
            <div>
                Search:{" "}
                <input
                    type="text"
                    id="search-university"
                    value={filterUniversities}
                    onChange={e => setFilterUniversities(e.target.value)}
                />
                <div>
                    <button
                        onClick={() => {
                            setSortingElements("order");
                        }}>
                        Order alphabetically
                    </button>
                </div>
                <div>
                    <button
                        onClick={() => {
                            setSortingElements("reverse");
                        }}>
                        Order reverse
                    </button>
                </div>
            </div>
            {currentUniversities.map(university => (
                <div key={university.name}>{university.name}</div>
            ))}
        </div>
    );
};
export default ListingElements;
