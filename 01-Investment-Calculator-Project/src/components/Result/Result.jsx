export const Result = ({data, investmentState}) => {
    console.log(investmentState)
    
    return (
        <table id="result">
                <thead>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </thead> 

            <tbody>
                {data.map(data => (
                    <tr>
                    <td>{data.year}</td>
                    <td>{data.investment_value}</td>
                    <td>{data.interest}</td>
                    <td>{data.total_interest}</td>
                    <td>{data.invested_capital}</td>
                </tr>
                ))}   
            </tbody>
        </table>
    )
}