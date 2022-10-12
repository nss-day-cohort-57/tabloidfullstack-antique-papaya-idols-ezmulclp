import { Card, CardBody } from "reactstrap";

export const ProfileDetails = ({ profileDetails }) => {
    return (
        <Card className="m-4">
            <h1>User Profile Details</h1>
            <CardBody>
                <div className="container">
                    <div className="row justify-content-center">
                        <p>
                            <img src={profileDetails.imageLocation} />
                        </p>
                        <p>Name: {profileDetails.fullName}</p>
                        <p>Display Name: {profileDetails.displayName}</p>
                        <p>Email: {profileDetails.email}</p>
                        <p>Date: {profileDetails.createDateTime}</p>
                        <p>UserType: {profileDetails.userType?.name}</p>
                    </div>
                </div>
            </CardBody>
        </Card>
    )
}