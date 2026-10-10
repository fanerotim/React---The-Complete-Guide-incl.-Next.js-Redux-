import { useState } from "react";

const Tasks = ({handleTaskSubmit, projectId}) => {

    const [value, setValue] = useState('');

    const handleChange = (e) => {
        setValue((_) => e.target.value);
    }
    
    return (
        <>
            <form onSubmit={(e) => handleTaskSubmit(e, value, projectId)}>
                <h1>Tasks</h1>
                <input
                    type="text"
                    placeholder="Add a new task..."
                    value={value}
                    onChange={(e) => handleChange(e)}
                />
                <button>Add task</button>
            </form>

            <div>
                {/* {tasks.length > 0 ? (
                    <ul>
                        {tasks.map((task, index) => (
                            <li key={index}>{task}</li>
                        ))}
                    </ul>
                ) : (
                    <p>No tasks available.</p>
                )} */}
            </div>
        </>
    )
}

export default Tasks;