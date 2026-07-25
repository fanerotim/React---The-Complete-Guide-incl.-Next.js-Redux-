import { formatter } from "../../util/investment";

export const Result = ({ data, investmentState }) => {

    return (
        <table id="result">
            <tbody>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>

                {data.map((data, index) => (
                    <tr key={index}>
                        <td>{data.year}</td>
                        <td>{formatter.format(data.valueEndOfYear)}</td>
                        <td>{formatter.format(data.interest)}</td>
                        <td>{formatter.format(data.interest * data.year)}</td>
                        <td>{formatter.format(investmentState.initialInvestment + (investmentState.annualInvestment * data.year))}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}