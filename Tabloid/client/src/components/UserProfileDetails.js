import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { getUserProfileById } from "../modules/userProfileManager";
import { Card, CardBody } from "reactstrap"



export const UserProfileDetails = () => {
    const { firebaseUserId } = useParams();
    const [detail, setDetail] = useState({});

    const getDetails = (id) => {
        getUserProfileById(id).then((userProfile) => {
            setDetail(userProfile);
        });
    };

    useEffect(() => {
        getDetails(firebaseUserId);
    }, []);

    return (
        <Card className="m-4">
            <h1>User Profile Details</h1>
            <CardBody>
                <div className="container">
                    <div className="row justify-content-center">
                        <p>
                            <img src={detail.imageLocation} />
                        </p>
                        <p>Name: {detail.fullName}</p>
                        <p>Display Name: {detail.displayName}</p>
                        <p>Email: {detail.email}</p>
                        <p>Date: {detail.createDateTime}</p>
                        <p>UserType: {detail.userType?.name}</p>
                    </div>
                </div>
            </CardBody>
        </Card>
    )
}