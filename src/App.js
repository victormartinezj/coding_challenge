import DirectoryList from "ui/components/DirectoryList";

const fetchOffersList = async () => {
    const response = await fetch(
        "http://universities.hipolabs.com/search?country=Mexico",
    );
    return await response.json();
};

export default function App() {
    return (
        <div className="mb-10 md:mt-10">
            <DirectoryList offerList={fetchOffersList()} />
        </div>
    );
}
