import {FaTimes} from 'react-icons/fa'

const Task = ({task, onDelete, onToggle, onComplete}) => {
    return (
        <div style={task.task_completed ? {border: '5px solid green', opacity: '0.6'} : {}}
            className={`task ${task.reminder ? 'reminder' : ''}`}
                onDoubleClick={() => onToggle(task.task_id)}>
            
            
            <h3>{task.task_name} <FaTimes style={{color: 'red', cursor: 'pointer'}} 
            onClick={() => onDelete(task.task_id)}/> </h3>

            <h3 style={{fontSize: "15px", fontWeight: 'normal'}}>{task.task_description}

            <img src="https://simpleicon.com/wp-content/uploads/Calendar-Check.png"
            style={{width: '20px', cursor: 'pointer'}} onClick={() => onComplete(task.task_id)}/></h3>
           
            <p style={{color: "red", marginTop: "5px"}}>{task.date}</p>
        </div>
    )
}

export default Task