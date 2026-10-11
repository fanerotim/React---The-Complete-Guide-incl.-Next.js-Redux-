import Tasks from "./Tasks";

const Project = ({
    project,
    deleteProjectHandler,
    handleTaskSubmit
}) => {

    return (
        <div className="flex w-full h-full p-40 flex-col align-center gap-10">
            <div className="flex w-2/3 justify-between">
                <div>
                    <h1 className="font-bold text-2xl mb-4">{project.title}</h1>
                    <p className="text-gray-500 mb-6">{project.date}</p>
                    <p className="">{project.description}</p>
                </div>
                <button className="self-start" onClick={() => deleteProjectHandler(project.id)}>
                    Delete
                </button>
            </div>
            <Tasks
                handleTaskSubmit={handleTaskSubmit}
                project={project}
            />
        </div>
    )
}

export default Project;