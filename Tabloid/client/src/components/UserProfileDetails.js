import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { getUserProfileById } from "../modules/userProfileManager";
import { ProfileDetails } from "./ProfileDetails";


export const UserProfileDetails = () => {
    const { firebaseUserId } = useParams();
    const [details, setDetails] = useState({});

    const getDetails = (id) => {
        getUserProfileById(id).then((userProfile) => {
            setDetails(userProfile);
        });
    };

    useEffect(() => {
        getDetails(firebaseUserId);
    }, []);

    return (
        <section>
            {details.map((profileDetails) => (
                <ProfileDetails key={profileDetails.id} profileDetails={profileDetails} />
            ))}
        </section>
    );
}