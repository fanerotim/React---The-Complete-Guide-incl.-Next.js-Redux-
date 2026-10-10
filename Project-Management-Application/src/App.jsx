import NoProjects from "./components/NoProjects";
import Sidebar from "./components/Sidebar";
import Form from "./components/Form";
import Project from "./components/Project";
import { useState } from "react";

function App() {

    const [isFormOpen, setIsFormOpen] = useState(true);
    const [projects, setProjects] = useState([]);
    const [showProject, setShowProject] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const updateProjects = (e, newProject) => {
        e.preventDefault();

        setProjects((prevProjects) => {
            return [
                ...prevProjects,
                newProject
            ]
        })

        // close the form after adding a new project
        setIsFormOpen(false);
    }

    const formClickHandler = () => {
        setIsFormOpen((prev) => !prev);
        setShowProject(false);
    }

    const projectClickHandler = (projectId) => {
        if (projects.length === 0) {
            return;
        }

        setSelectedProject(() => projects.find((project) => project.id === projectId));
        setShowProject(true);
    }

    return (
        <>
            <div className="flex w-full h-dvh items-end">
                <Sidebar
                    clickHandler={formClickHandler}
                    projectClickHandler={projectClickHandler}
                    projects={projects}
                />
                {!showProject
                    ? isFormOpen
                        ? <Form submitHandler={updateProjects} />
                        : <NoProjects clickHandler={formClickHandler} />
                    : <Project project={selectedProject} />
                }
            </div>
        </>
    );
}

export default App;
