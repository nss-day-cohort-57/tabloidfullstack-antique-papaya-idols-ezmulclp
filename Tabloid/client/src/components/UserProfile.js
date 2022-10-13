import { Card, CardBody } from "reactstrap"
import React from "react";
import { Link } from "react-router-dom";


export const UserProfile = ({ userProfile }) => {
    return (
        <Card className="m-4">
            <CardBody>
                <p>
                    <Link to={`/users/${userProfile.firebaseUserId}`}>
                        <strong>Name: {userProfile.fullName}</strong>
                    </Link>
                </p>
                <p>Display Name: {userProfile.displayName}</p>
                <p>User Type: {userProfile.userType.name} </p>
            </CardBody>
        </Card>
    );
}
