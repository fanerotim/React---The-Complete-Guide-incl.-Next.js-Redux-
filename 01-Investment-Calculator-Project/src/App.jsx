import { Header } from "./components/Header/Header"
import { UserInput } from "./components/UserInput/UserInput"
import { Result } from "./components/Result/Result";
import { useState } from "react";

const labels = [
  {value: 'initial_investment', label: 'Initial investment'}, 
  {value: 'annual_investment', label: 'Annual investment'}, 
  {value: 'expected_return', label: 'Expected return'}, 
  {value: 'duration', label: 'Duration'}
];

const dummyData = [
  {year: 1, investment_value: '$13131313', interest: '$0530453', total_interest: '8989998', invested_capital: '$1398193'},
  {year: 1, investment_value: '$13131313', interest: '$0530453', total_interest: '8989998', invested_capital: '$1398193'},
  {year: 1, investment_value: '$13131313', interest: '$0530453', total_interest: '8989998', invested_capital: '$1398193'},
  {year: 1, investment_value: '$13131313', interest: '$0530453', total_interest: '8989998', invested_capital: '$1398193'}
  ,{year: 1, investment_value: '$13131313', interest: '$0530453', total_interest: '8989998', invested_capital: '$1398193'}
]

function App() {

  const [investmentState, setInvestmentState] = useState({
    initial_investment: 0,
    annual_investment: 0,
    expected_return: 0,
    duration: 0
  })

  const onHandleChange = (e) => {
      setInvestmentState((prevState) => {
        return {
          ...prevState,
          [e.target.name]: e.target.value
        }
      })
  }

  return (
    <>
      <Header/>
        <form id="user-input" className="input-group">
            <UserInput 
                data={[labels[0], labels[1]]}
                onHandleChange={onHandleChange}  
            />
            <UserInput 
                data={[labels[2], labels[3]]}
                onHandleChange={onHandleChange}  
            />
        </form>
      <Result data={dummyData} investmentState={investmentState}/>
    </>
  )
}

export default App
