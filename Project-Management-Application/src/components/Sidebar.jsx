const Sidebar = () => {
    return (
        <div className="w-[250px] mt-10 h-5/6 bg-stone-900 text-white rounded-tr-xl text-xl uppercase">
            <h1 className="font-bold ml-5 mt-10">Your projects</h1>
            <button
                className="ml-5 text-sm bg-stone-700 py-[0.4rem] px-[1rem] rounded-lg mt-[30px] text-stone-400"
            >
                + Add Project
            </button>
        </div>
    )
}

export default Sidebar;