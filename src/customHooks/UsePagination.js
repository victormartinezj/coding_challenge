import { useEffect } from "react";

function usePagination(data, itemsPerPage) {
    const [currentPage, setCurrentPage] = useState(1);
    const [maxPage, setMaxPage] = useState(
        Math.ceil(data.length / itemsPerPage),
    );

    useEffect(() => {
        setMaxPage(Math.ceil(data.length / itemsPerPage));
        setCurrentPage(1);
    }, [data]);

    function currentData() {
        const begin = (currentPage - 1) * itemsPerPage;
        const end = begin + itemsPerPage;
        return data.slice(begin, end);
    }

    function next() {
        setCurrentPage(currentPage => Math.min(currentPage + 1, maxPage));
    }

    function prev() {
        setCurrentPage(currentPage => Math.max(currentPage - 1, 1));
    }

    function jump(page) {
        const pageNumber = Math.max(1, page);
        setCurrentPage(currentPage => Math.min(pageNumber, maxPage));
    }

    function isLast() {
        return currentPage === maxPage;
    }

    function isFirst() {
        return currentPage === 1;
    }

    return {
        next,
        prev,
        jump,
        currentData,
        currentPage,
        maxPage,
        isLast,
        isFirst,
    };
}

export default usePagination;
