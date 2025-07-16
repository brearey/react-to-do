import {useState} from "react";

export function TaskItem(props) {
    const [checked, setChecked] = useState(props.checked)
    return <div className="task-item">
        <div className="checkbox">
            <input type="checkbox" checked={!!checked} onChange={setChecked}/>
        </div>
        <div className="name">
            <span>{props.name}</span>
        </div>
        <div className="edit-btn">
            <button>Edit</button>
        </div>
        <div className="delete-btn">
            <button>Delete</button>
        </div>
    </div>
}