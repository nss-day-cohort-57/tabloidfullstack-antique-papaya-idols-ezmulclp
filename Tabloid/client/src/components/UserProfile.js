import { Card, CardBody } from "reactstrap"
import React from "react";


export const UserProfile = ({ userProfile }) => {
    return (
        <Card className="m-4">
            <CardBody>
                <strong>Full Name: {userProfile.fullName}</strong>
                <strong>Display Name: {userProfile.displayName}</strong>
                <strong>User Type: {userProfile.userType.Name} </strong>
            </CardBody>
        </Card>
    );
}