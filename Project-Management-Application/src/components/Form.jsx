import { useState } from "react";

const Form = ({ submitHandler }) => {

    const [values, setValues] = useState({
        title: '',
        description: '',
        date: ''
    })

    const handleValueChange = (e) => {
        setValues((prevValues) => {
            return {
                ...prevValues,
                [e.target.name]: e.target.value
            }
        })
    }

    return (
        <div className="w-full self-center justify-items-center">
            <form
                className="uppercase text-xs font-bold w-2/5 flex flex-col gap-5">

                <div className="">
                    <button onClick={(e) => submitHandler(e, values)}>Cancel</button>
                    <button onClick={(e) => submitHandler(e, values)}>Save</button>
                </div>

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
                        value={values.title}
                        onChange={(e) => handleValueChange(e)}
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
                        value={values.description}
                        onChange={(e) => handleValueChange(e)}
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
                        name="date"
                        id="date"
                        value={values.date}
                        onChange={(e) => handleValueChange(e)}
                    />
                </div>
            </form>
        </div>
    )
}

export default Form;