import React, { useState, useEffect } from 'react';
import { getAll, updateRow, deleteRowById, getById } from './FetchData'

const EditRow = (props) => {
    const [title, setTitle] = useState("");
    const [completed, setCompleted] = useState("");

    useEffect(async () => {
        let id = props.match.params["id"];
        const result = await getById(id);
        setTitle(result.data.title);
        setCompleted(result.data.completed);
        console.log(result.data.completed)
    }, []);

    return (
        <form className="editForm">
            <div className="editFormHeader">Edit Form</div>
            <div className="editFormField">
                <label>Title:</label>
                <input type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div className="editFormField">
                <label> Status: </label>
                <div><input type="radio" name="status" id="rb1"
                    defauultChecked={completed}
                    onChange={() => setCompleted(true)} />
                    <label htmlFor="rb1" >Done</label>
                </div>
                <div><input type="radio" name="status" id="rb2"
                    defaultChecked={!completed}
                    onChange={() => setCompleted(false)} />
                    <label htmlFor="rb2" >To do</label>
                </div>
            </div>
            <button type="submit" onClick={() => alert("Tytuł: " + title +  ", status: " + completed)}>Edit</button>
        </form >
    );
};

export default EditRow;