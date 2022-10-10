import { useEffect, useState } from "react"
import { getAllUsers } from "../modules/userProfileManager";
import { UserProfile } from "./UserProfile";


export const UserProfileList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getAllUsers().then(setUsers);
    }, []
    );

    return (
        <section>
            {users.map((userProfile) => (
                <UserProfile key={userProfile.id} userProfile={userProfile} />
            ))}
        </section>
    );
}