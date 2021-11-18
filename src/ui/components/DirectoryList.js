import { useEffect } from "react";
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
            <div>
                {data.loading && <div>Loading </div>}
                {data.error && <div>Error</div>}
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
