const UniversityCard = ({ university }) => {
    console.log("something");
    return (
        <div className="w-full max-w-md  border border-blue-400 shadow-lg rounded overflow-hidden flex flex-col justify-between">
            <div className="h-full px-4 py-6 text-4xl font-thin bg-white  text-blue-500 text-center ">
                {university.name}
            </div>
            <div className="px-4 py-6 bg-gradient-to-r from-blue-700 to-blue-300 text-white">
                <h3>
                    {university.country} {university.alpha_two_code}
                </h3>
                <p>{university.web_pages}</p>
            </div>
        </div>
    );
};
export default UniversityCard;
