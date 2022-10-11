import { Card, CardBody } from "reactstrap"
import React from "react";


export const UserProfile = ({ userProfile }) => {
    return (
        <Card className="m-4">
            <CardBody>
                <strong>Full Name: {userProfile.fullName}</strong>
                <p>Display Name: {userProfile.displayName}</p>
                <p>User Type: {userProfile.userType.name} </p>
            </CardBody>
        </Card>
    );
}