import { useEffect } from "react";
import usePagination from "../../customHooks/UsePagination";
import UniversityCard from "./UniversityCard";

const ListingElements = ({ universities }) => {
    const [currentUniversities, setCurrentUniversities] = useState(
        universities,
    );
    const {
        next,
        prev,
        currentData,
        currentPage,
        maxPage,
        isLast,
        isFirst,
    } = usePagination(currentUniversities, 12);

    console.log(currentPage);
    console.log(maxPage);
    const [filterUniversities, setFilterUniversities] = useState("");
    const [sortingElements, setSortingElements] = useState(null);
    useEffect(() => {
        console.log(filterUniversities);
        setSortingElements(null);
        if (filterUniversities) {
            const regExpression = new RegExp(filterUniversities, "gi");
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
            <div class="px-4 grid grid-col-1 gap-y-4 sm:grid-cols-2 sm:gap-x-4 md:grid-cols-3 justify-items-center">
                {currentData().map(university => (
                    <UniversityCard
                        key={university.name}
                        university={university}
                    />
                ))}
            </div>
            <div>
                Pagination{" "}
                <div>
                    {!isFirst() && <button onClick={() => prev()}>Prev</button>}
                    <span>{`${currentPage} of ${maxPage}`}</span>
                    {!isLast() && <button onClick={() => next()}>Next</button>}
                </div>
            </div>
        </div>
    );
};
export default ListingElements;
