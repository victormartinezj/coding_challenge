const PaginationComponent = ({
    currentPage,
    maxPage,
    prev,
    next,
    isFirst,
    isLast,
}) => {
    return (
        <div>
            {maxPage > 1 && (
                <div className="w-full flex justify-center my-4  bg-white">
                    <div className="bg-blue-400 py-4 px-6 rounded  ">
                        {!isFirst() && (
                            <button
                                className="mr-2 text-white underline"
                                onClick={() => prev()}>
                                {"<< Prev"}
                            </button>
                        )}
                        <span className="text-blue-600 font-bold">{`${currentPage} of ${maxPage}`}</span>
                        {!isLast() && (
                            <button
                                className="ml-2 text-white underline"
                                onClick={() => next()}>
                                {"Next >>"}
                            </button>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};
export default PaginationComponent;
