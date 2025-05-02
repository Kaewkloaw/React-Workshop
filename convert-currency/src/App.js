import CurrencyComponent from './component/CurrencyComponent'
import money from './img/money.png'
import { useEffect, useState } from 'react'

function App() {
  const [currencyChoice, setCurrencyChoice] = useState([])
  const [fromCurrency, setFromCurrency] = useState('USD')
  const [toCurrency, setToCurrency] = useState('THB')

  const [amount, setAmount] = useState(1)
  const [exchangeRate, setExchangeRate] = useState(1)

  const [checkFromCurrency, setCheckFromCurrency] = useState(true)

  let fromAmount, toAmount
  if (checkFromCurrency) {
    fromAmount = amount
    toAmount = exchangeRate ? (amount * exchangeRate).toFixed(2) : ''
  } else {
    fromAmount = exchangeRate ? (amount / exchangeRate).toFixed(2) : ''
    toAmount = amount
  }

  useEffect(() => {
    const url = `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setCurrencyChoice(Object.keys(data.rates))
        const rate = data.rates[toCurrency]
        if (rate) {
          setExchangeRate(rate)
        }
      })
      .catch(err => console.error('Failed to fetch exchange rates:', err))
  }, [fromCurrency, toCurrency])

  const amountFromCurrency = (e) => {
    setAmount(e.target.value)
    setCheckFromCurrency(true)
  }
  const amountToCurrency = (e) => {
    setAmount(e.target.value)
    setCheckFromCurrency(false)
  }
  return (
    <div>
      <img src={money} alt="money" className='money-img' />
      <h1>Convert Currency</h1>
      <h4>Convert your currency to any currency you want</h4>
      <div className='container'>
        
        <CurrencyComponent
          currencyChoice={currencyChoice}
          selectCurrency={fromCurrency}
          changeCurrency={(e) => setFromCurrency(e.target.value)}
          amount={fromAmount}
          onChangeAmount={amountFromCurrency}
        />
        <div className='equal'> =</div>
        <CurrencyComponent
          currencyChoice={currencyChoice}
          selectCurrency={toCurrency}
          changeCurrency={(e) => setToCurrency(e.target.value)}
          amount={toAmount}
          onChangeAmount={amountToCurrency}
        />

      </div>
    </div>
  )
}

export default App