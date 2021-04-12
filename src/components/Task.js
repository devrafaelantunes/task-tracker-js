import {FaTimes} from 'react-icons/fa'

const Task = ({task, onDelete, onToggle}) => {
    return (
        <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.task_id)}>
            <h3>{task.task_name} <FaTimes style={{color: 'red', cursor: 'pointer'}} 
            onClick={() => onDelete(task.task_id)}/> </h3>
            <p style={{fontSize: "15px"}}>{task.task_description}</p>
            <p style={{color: "red", marginTop: "5px"}}>{task.date}</p>
        </div>
    )
}

export default Task