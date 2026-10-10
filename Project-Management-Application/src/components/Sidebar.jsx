const Sidebar = ({clickHandler, projects}) => {
    return (
        <div className="w-[250px] mt-10 h-5/6 bg-stone-900 text-white rounded-tr-xl text-xl uppercase">
            <h1 className="font-bold ml-5 mt-10">Your projects</h1>
            <button
                onClick={clickHandler}
                className="ml-5 text-sm bg-stone-700 py-[0.4rem] px-[1rem] rounded-lg mt-[30px] text-stone-400"
            >
                + Add Project
            </button>

            <ul>
                {projects.map((project, index) => {
                    return (
                        <li
                            key={index}
                            className="ml-5 mt-5 hover:bg-stone-700 p-2 rounded-lg"
                        >
                            {project.title}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Sidebar;