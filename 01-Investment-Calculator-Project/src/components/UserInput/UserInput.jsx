export const UserInput = ({data, onHandleChange}) => {

    return (
        <div>
            {data.map((data, i) => (
                <div id="user-input">
                    <label>{data.label}</label>
                    <input
                        onChange={onHandleChange}
                        name={data.value}
                        type="text"
                    />
                </div>
            ))}
        </div>
    )
}