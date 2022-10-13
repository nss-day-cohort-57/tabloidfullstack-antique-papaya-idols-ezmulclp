import React, { useState } from "react";
import { Card, CardBody, Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { Link, NavLink as RRNavLink } from "react-router-dom";



export default function Category({ category }) {

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);



    return (
        <Card className="m-4">
            <CardBody>
                <strong>{category.name}</strong>
                <div className="buttonContainer">
                    <Link to={`/category/edit/${category.id}`}>
                        EDIT
                    </Link>
                </div>
                <Modal isOpen={modal} toggle={toggle} {...category}>
                    <ModalHeader toggle={toggle}>Edit Category</ModalHeader>
                    <ModalBody>
                        <>
                            <section>
                                <div>{category.name}</div>
                            </section>
                        </>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={toggle}>
                            CANCEL
                        </Button>
                        <Button color="secondary" >
                            SAVE
                        </Button>
                    </ModalFooter>
                </Modal>
            </CardBody>
        </Card>
    );
}