import logo from '../assets/no-projects.png'

const NoProjects = () => {

    return (
        <div className='flex flex-col justify-center items-center mt-[10rem] gap-6'>
            <img
                className='w-[100px]'
                src={logo}
                alt="No projects background image"
            />
            <h1 className='text-2xl font-bold text-stone-600'>No Project Selected</h1>
            <p className='text-stone-400'>Select a project or get started with a new one</p>
            <button
                className='text-stone-400 bg-stone-800 py-[.5rem] px-[.8rem] rounded-lg'
            >
                Create new project
            </button>
        </div>
    )
}

export default NoProjects;