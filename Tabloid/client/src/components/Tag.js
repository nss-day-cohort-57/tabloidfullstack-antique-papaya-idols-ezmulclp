import React from "react";
import { useNavigate } from "react-router-dom";
import {Card, CardBody, Button } from "reactstrap";
import { deleteTag } from "../modules/tagManager";

const deleteMyTag = (id, nav) => {
    deleteTag(id).then(() => nav(0))
}


export default function Tag({ tag, setTags } ) {
    const navigate = useNavigate();
    return (
        <Card className="m-4">
            <CardBody>
                <strong>{tag.name}</strong>
                <br />
                <Button color="danger" size="sm" onClick={()=>deleteMyTag(tag.id, navigate)}>delete</Button>
            </CardBody>
        </Card>
    );
}