export const UserInput = ({data, onHandleChange}) => {

    return (
        <div className="input-group">
            {data.map((data, i) => (
                <div
                    key={i} 
                    id="user-input"
                >
                    <label>{data.label}</label>
                    <input
                        onChange={onHandleChange}
                        name={data.value}
                        type="text"
                        required
                    />
                </div>
            ))}
        </div>
    )
}