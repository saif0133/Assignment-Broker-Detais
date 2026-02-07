import { useEffect, useState } from "react";
import UserDetails from '../../Components/userdetails/UserDetails.tsx';
import './BrokerDetails.css';
import { getBrokerData } from "../../api/methods.ts";
import LoadingBackdrop from "../LoadingBackdrop/LoadingBackdrop.tsx";

function BrokerDetails() {
    const [Name, setName] = useState("");
    const [Company, setCompany] = useState("");
    const [Email, setEmail] = useState("");
    const [PhoneNumber, setPhoneNumber] = useState("");
    const [Status, setStatus] = useState("");
    const [pic, setPic] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let wait = true;


        const initialTimer = setTimeout(() => {
            if (wait) {
                const fetchData = async () => {
                    setLoading(true);
                    setError(null);

                    try {
                        const data = await getBrokerData();
                        if (!wait) return; // Prevent state updates if unmounted

                        if (!data) throw new Error("No broker data found");
                        setName(data.name);
                        setCompany(data.company);
                        setEmail(data.email);
                        setPhoneNumber(data.phone);
                        setStatus(data.status);
                        if (!data.image) {
                            setPic(`https://ui-avatars.com/api/?name=${encodeURIComponent(data.name)}&background=3e97b5&color=fff&rounded=false&size=1080`);
                        } else {
                            setPic(data.image);
                        }
                    } catch (err: unknown) {
                        if (wait) {
                            setError(err instanceof Error ? err.message : "Something went wrong");
                        }
                    } finally {
                        if (wait) {
                            setLoading(false);
                        }
                    }
                };

                fetchData();
            }
        }, 2000);


        return () => {
            wait = false;
            clearTimeout(initialTimer);
        };
    }, []);


    if (error) {
        return (
            <div className="error-container">
                <div className="error-message">Error: {error}</div>
                <button onClick={() => window.location.reload()}>Retry</button>
            </div>
        );
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