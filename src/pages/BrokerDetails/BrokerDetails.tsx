import { useEffect, useState } from "react";
import UserDetails from '../../Components/userdetails/UserDetails.tsx';
import './BrokerDetails.css';
import { getBrokerData } from "../../api/methods.ts";
import LoadingBackdrop from "../../Components/LoadingBackdrop/LoadingBackdrop.tsx";
import ErrorPage from "../../Components/Error/ErrorPage.tsx";

function BrokerDetails() {
    const [Name, setName] = useState("");
    const [Company, setCompany] = useState("");
    const [Email, setEmail] = useState("");
    const [PhoneNumber, setPhoneNumber] = useState("");
    const [Status, setStatus] = useState("");
    const [pic, setPic] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [reload, setReload] = useState(false);

    useEffect(() => {
        let isMounted = true;
        const abortController = new AbortController();

        const fetchData = async () => {
            setLoading(true);
            setError(null);

            try {
                
                await new Promise(resolve => setTimeout(resolve, 500));

                if (!isMounted) return;

                const data = await getBrokerData();
                console.log("Fetched broker data:", data);

                if (!isMounted) return;

                if (!data) {
                    throw new Error("No broker data found");
                }

                
                setName(data.name);
                setCompany(data.company);
                setEmail(data.email);
                setPhoneNumber(data.phone);
                setStatus(data.status);

                const avatarUrl = data.image
                    ? data.image
                    : `https://ui-avatars.com/api/?name=${encodeURIComponent(data.name)}&background=3e97b5&color=fff&rounded=false&size=1080`;
                setPic(avatarUrl);

            } catch (err) {
                if (!isMounted) return;

                

                setError(err instanceof Error ? err.message : "Something went wrong");
            } finally {
                if (isMounted) {
                    setLoading(false);
                }
            }
        };

        fetchData();

        return () => {
            isMounted = false;
            abortController.abort();
        };
    }, [reload]);

    if (error) {
        return <ErrorPage message={error} onRefresh={() => { setReload(!reload); }} />;
    }



    return (
        <>

            <LoadingBackdrop open={loading} />

            {!loading && (
                <>
                    <UserDetails
                        Name={Name}
                        Company={Company}
                        Email={Email}
                        PhoneNumber={PhoneNumber}
                        Status={Status}
                        pic={pic}
                    />
                    <div
                        className="simulate-error"
                        onClick={() => setError("Simulated error occurred!")}
                    >
                        Simulate Error
                    </div>
                </>
            )}
        </>
    );
}

export default BrokerDetails;