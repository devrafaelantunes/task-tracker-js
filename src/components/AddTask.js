import {useState} from 'react'

const AddTask = ({ onAdd }) => {
    const [task_name, setText] = useState('')
    const [task_description, setDescription] = useState('')
    const [date, setDay] = useState('')
    const [reminder, setReminder] = useState(false)
    
    const onSubmit = (e) => {
        e.preventDefault()


        if(!task_name) {
            alert('Please add a task')
            return
        }

        //if(date.length < 10) {
        //    alert('Please input date in this format XX/XX/XXXX')
        //    return
        //}

        onAdd({task_name, date, reminder, task_description})


        setDescription('')
        setText('')
        setDay('')
        setReminder(false)
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Task Name</label>
                <input type='text' placeholder='Add Task' value={task_name} onChange={(e) => 
                setText(e.target.value)}></input>
            </div>
            <div className='form-control'>
                <label>Task Description</label>
                <input type='text' placeholder='Add Description' value={task_description} onChange={(e) => 
                setDescription(e.target.value)}></input>
            </div>
            <div className='form-control'>
                <label>Day and Time</label>
                <input type='text' placeholder='Input Date and Time' value={date} onChange={(e) => 
                setDay(e.target.value)}></input>
            </div>
            <div className='form-control form-control-check'>
                <label>Set Reminder</label>
                <input type='checkbox' value={reminder} onChange={(e) => 
                setReminder(e.currentTarget.checked)}></input>
            </div>

            <input type='submit' checked={reminder}
            value='Save Task' className='btn btn-block'></input>


        </form>

    )
}


export default AddTask