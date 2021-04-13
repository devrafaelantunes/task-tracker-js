import Task from './Task'

const Tasks = ({tasks, onDelete, onToggle, onToggleComplete}) => {
    
    return (
        <div>
            {tasks == undefined ? "Starting App" : tasks.length == 0 && <p>No tasks to show</p>}
            {tasks == undefined ? "Starting App" : tasks.length > 0 &&
            <p style={{margin: '0, auto'}}>You completed: {tasks[0].task_count} tasks.</p>}
            {tasks == undefined ? console.log("Starting app") : tasks.map((task, index) =>
            (<Task
                task={task}
                onDelete={onDelete}
                onToggle={onToggle}
                onComplete={onToggleComplete}
            />))}
        </div>
    )
}

export default Tasks

