import NoProjects from "./components/NoProjects";
import Sidebar from "./components/Sidebar";
import Form from "./components/Form";
import { useState } from "react";

function App() {

    const [isFormOpen, setIsFormOpen] = useState(true);
    const [projects, setProjects] = useState([]);

    const updateProjects = (e, newProject) => {
        e.preventDefault();

        setProjects((prevProjects) => {
            return [
                ...prevProjects,
                newProject
            ]
        })
    }

    const formClickHandler = () => {
        setIsFormOpen((prev) => !prev);
    }

    return (
        <div className="flex gap-6 justify-between w-full h-dvh items-end">
            <Sidebar 
                clickHandler={formClickHandler }
                projects={projects}    
            />
            {isFormOpen
                ? <Form submitHandler={updateProjects}/>
                : <NoProjects clickHandler={formClickHandler} />
            }
        </div>
    );
}

export default App;
