import { useEffect } from "react";
import { SpinnerInfinity } from "spinners-react";
import ListingElements from "./ListingElements";

export default function DirectoryList({ offerList, ...props }) {
    const [data, setData] = useState({
        loading: true,
        elements: [],
        error: false,
    });
    useEffect(() => {
        (async () => {
            try {
                const value = await offerList;
                console.log(value);
                setData(prev => ({
                    ...prev,
                    elements: [...value],
                    loading: false,
                }));
            } catch (error) {
                setData(prev => ({ ...prev, error: true, loading: false }));
                console.log(error);
            }
        })();
    }, []);

    log.debug("Here is your offers list", offerList);

    return (
        <>
            <div className="container mx-auto max-w-5xl">
                {data.loading && (
                    <div className="bg-blue-700 w-full py-10 flex flex-col justify-center items-center">
                        <div className="text-white">
                            <SpinnerInfinity
                                size={82}
                                thickness={108}
                                speed={100}
                                color="rgba(76, 57, 172, 0.79)"
                                secondaryColor="rgba(57, 172, 72, 0.89)"
                            />
                        </div>
                        <p className="text-4xl text-white font-light ">
                            Loading...
                        </p>
                    </div>
                )}
                {data.error && (
                    <div className="w-full bg-red-400 text-white flex justify-center items-center font-light text-4xl py-10 ">
                        <p>
                            Error something went wrong, we're fixing it please
                            try later <span role="img"> 🧐 </span>
                        </p>
                    </div>
                )}
                {!data.error && !data.loading && data.elements && (
                    <div>
                        <div>Success</div>
                        <ListingElements universities={data.elements} />
                    </div>
                )}
            </div>
        </>
    );
}
