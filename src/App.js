import DirectoryList from "ui/components/DirectoryList";
import data from "./ui/components/borrarData";

const fetchOffersList = async () => {
    const response = await fetch(
        "http://universities.hipolabs.com/search?country=Mexico",
    );
    return await response.json();
};

export default function App() {
    return (
        <>
            <p class="py-4 text-lg text-center">Start here :) Good luck!</p>

            <DirectoryList offerList={data} />
        </>
    );
}
