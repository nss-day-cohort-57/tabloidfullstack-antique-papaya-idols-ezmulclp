import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { Form, FormGroup } from "reactstrap"
import { updateCategory } from "../modules/categoryManager"


export const CategoryEdit = () => {
    const { categoryId } = useParams()
    const navigate = useNavigate()

    const [updatedCategory, update] = useState({
        id: categoryId,
        Name: ""
    })

    const handleEditButtonClick = (category) => {
        updateCategory(category)
        return navigate("/category")
    }

    return (
        <>
            <Form>
                <FormGroup>
                    <fieldset>
                        <div>
                            <label htmlFor="name">Name:</label>
                            <input type="name"
                                placeholder="Enter category name..."
                                onChange={
                                    (evt) => {
                                        let copy = { ...updatedCategory }
                                        copy.Name = evt.target.value
                                        update(copy)
                                    }
                                } />
                            <button onClick={() => { handleEditButtonClick(updatedCategory) }}>
                                Save
                            </button>
                            <button onClick={() => { navigate("/category") }}>
                                Cancel
                            </button>
                        </div>
                    </fieldset>
                </FormGroup>
            </Form>
        </>
    )
}