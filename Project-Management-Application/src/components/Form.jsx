const Form = () => {

    return (
        <>
            <form className="uppercase text-xs font-bold w-80 mb-80 flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                    <label
                        className="text-stone-600" 
                        htmlFor="title"
                    >
                            Title
                    </label>
                    <input
                        className="bg-stone-300 py-2 px-1" 
                        type="text" 
                        id="title" 
                        name="title" 
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label
                        className="text-stone-600" 
                        htmlFor="description"
                    >
                        Description
                    </label>
                    <textarea
                        className="bg-stone-300 py-3 px-1" 
                        name="description" 
                        id="description"
                    >    
                    </textarea>
                </div>

                <div className="flex flex-col gap-2">
                    <label
                        className="text-stone-600" 
                        htmlFor="date"
                    >
                        Due date
                    </label>
                    <input
                        className="bg-stone-300 py-2 px-1 font-normal" 
                        type="date" 
                        id="date" 
                    />
                </div>
            </form>
        </>
    )
}

export default Form;