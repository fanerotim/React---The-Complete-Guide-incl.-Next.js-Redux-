const Project = ({ project, deleteProjectHandler }) => {

    return (
        <div className="flex w-2/3 h-full p-40 justify-between">
            <div>
                <h1 className="font-bold text-2xl mb-4">{project.title}</h1>
                <p className="text-gray-500 mb-6">{project.date}</p>
                <p className="">{project.description}</p>
            </div>
            <button className="self-start" onClick={() => deleteProjectHandler(project.id)}>
                Delete
            </button>
        </div>
    )
}

export default Project;