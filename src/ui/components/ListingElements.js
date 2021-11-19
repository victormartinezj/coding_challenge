import { useEffect } from "react";
import usePagination from "../../customHooks/UsePagination";
import PaginationComponent from "./PaginationComponent";
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
            <div className="bg-blue-700 p-4 rounded mb-6 flex justify-between items-center flex-wrap  text-white ">
                <div>
                    Search:{" "}
                    <input
                        className="rounded px-4 py-1 text-blue-600"
                        type="text"
                        id="search-university"
                        value={filterUniversities}
                        onChange={e => setFilterUniversities(e.target.value)}
                    />
                </div>
                <div className="space-x-2 w-14 py-2">
                    <button
                        className={`rounded py-2 px-2 border border-gray-200 ${
                            sortingElements === "order"
                                ? "bg-white text-blue-600"
                                : ""
                        } `}
                        onClick={() => {
                            setSortingElements("order");
                        }}>
                        A-Z
                    </button>
                    <button
                        className={`rounded py-2 px-2 border border-gray-200 ${
                            sortingElements === "reverse"
                                ? "bg-white text-blue-600"
                                : ""
                        } `}
                        onClick={() => {
                            setSortingElements("reverse");
                        }}>
                        Z-A
                    </button>
                </div>
            </div>
            <div className="px-4 grid grid-col-1 gap-y-4 sm:grid-cols-2 sm:gap-x-4 md:grid-cols-3 justify-items-center">
                {currentData().map(university => (
                    <UniversityCard
                        key={university.name}
                        university={university}
                    />
                ))}
            </div>
            <PaginationComponent
                prev={prev}
                next={next}
                currentPage={currentPage}
                maxPage={maxPage}
                isFirst={isFirst}
                isLast={isLast}
            />
        </div>
    );
};
export default ListingElements;
