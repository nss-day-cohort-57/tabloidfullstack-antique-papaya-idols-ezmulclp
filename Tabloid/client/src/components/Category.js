import React, { useState } from "react";
import { Card, CardBody, Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

import { Navigate } from "react-router-dom";

export default function Category({ category }) {

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);


    return (
        <Card className="m-4">
            <CardBody>
                <strong>{category.name}</strong>
                <div className="buttonContainer">
                    <button outline onClick={() =>
                        Navigate(`/category/edit/${category.id}`)}
                        className="editButton" >
                        EDIT
                    </button>
                </div>
                <Modal isOpen={modal} toggle={toggle} {...category}>
                    <ModalHeader
                </Modal>
            </CardBody>
        </Card>
    );
}