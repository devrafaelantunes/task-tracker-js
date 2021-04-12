import Task from './Task'

const Tasks = ({tasks, onDelete, onToggle}) => {
    
    return (
        <div>
            {tasks.length == 0 && <p>No tasks to show</p>}
            {tasks == undefined ? console.log("Starting app") : tasks.map((task, index) =>
            (<Task
                task={task}
                onDelete={onDelete}
                onToggle={onToggle}
            />))}
        </div>
    )
}

export default Tasks

