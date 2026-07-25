import { Header } from "./components/Header/Header"
import { UserInput } from "./components/UserInput/UserInput"
import { Result } from "./components/Result/Result";
import { useState } from "react";
import { calculateInvestmentResults } from "./util/investment";

const labels = [
    { value: 'initialInvestment', label: 'Initial investment' },
    { value: 'annualInvestment', label: 'Annual investment' },
    { value: 'expectedReturn', label: 'Expected return' },
    { value: 'duration', label: 'Duration' }
];

const initialInvestmentState = {
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0
}

function App() {

    const [investmentState, setInvestmentState] = useState(initialInvestmentState)
    const [annualData, setAnnualData] = useState([]);

    const onHandleChange = (e) => {
        setInvestmentState((prevState) => {
            return {
                ...prevState,
                [e.target.name]: Number(e.target.value)
            }
        })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const annualData = calculateInvestmentResults(investmentState);
        setAnnualData((prevData) => annualData);
    }

    return (
        <>
            <Header />
            <form
                onSubmit={onSubmit}
                id="user-input"
            >
                <UserInput
                    data={[labels[0], labels[1]]}
                    onHandleChange={onHandleChange}
                />
                <UserInput
                    data={[labels[2], labels[3]]}
                    onHandleChange={onHandleChange}
                />
                <input type="submit" hidden />
            </form>
            <Result data={annualData ?? annualData} investmentState={investmentState} />
        </>
    )
}

export default App
