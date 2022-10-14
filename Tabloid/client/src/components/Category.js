import React, { useState } from "react";
import { Card, CardBody, Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { Link } from "react-router-dom";
import { deleteCategory, getAllCategories } from "../modules/categoryManager";
import { useNavigate } from "react-router-dom";



export default function Category({ category }) {

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const deleteButton = (id, nav) => {
        deleteCategory(id).then(() => nav(0));
    }

    const navigate = useNavigate();

    return (
        <Card className="m-4">
            <CardBody>
                <strong>{category.name}</strong>
                <div className="buttonContainer">
                    <Link to={`/category/edit/${category.id}`}>
                        EDIT
                    </Link>
                    <br />
                    <button onClick={toggle}>
                        DELETE
                    </button>
                </div>
                <Modal isOpen={modal} toggle={toggle} {...category}>
                    <ModalHeader toggle={toggle}>Delete Category</ModalHeader>
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
                        <Button color="secondary" onClick={() => { deleteButton(category.id, navigate) }}>
                            CONFIRM
                        </Button>
                    </ModalFooter>
                </Modal>
            </CardBody>
        </Card >
    );
}