import { useState, useEffect } from 'react';

const rates = [
  { from: 'EUR', to: 'USD', rate: 1.04 },
  { from: 'EUR', to: 'AZN', rate: 1.78 },
  { from: 'USD', to: 'EUR', rate: 0.96 },
  { from: 'USD', to: 'AZN', rate: 1.7 },
  { from: 'AZN', to: 'EUR', rate: 0.56 },
  { from: 'AZN', to: 'USD', rate: 0.59 },
];

const useExchangeCalculator = () => {
  const [fromCurrency, setFromCurrency] = useState('EUR');
  const [toCurrency, setToCurrency] = useState('USD');
  const [fromAmount, setFromAmount] = useState('');
  const [toAmount, setToAmount] = useState('');
  const [rate, setRate] = useState<number | null>(null);

  const findRate = (from: string, to: string) => {
    const rateObj = rates.find((r) => r.from === from && r.to === to);
    return rateObj ? rateObj.rate : null;
  };

  useEffect(() => {
    const newRate = findRate(fromCurrency, toCurrency);
    setRate(newRate);
    if (fromAmount && newRate !== null) {
      setToAmount((parseFloat(fromAmount) * newRate).toFixed(2));
    }
  }, [fromCurrency, toCurrency, fromAmount]);

  const handleFromAmountChange = (text: string) => {
    setFromAmount(text);
    if (rate !== null) {
      setToAmount((parseFloat(text) * rate).toFixed(2));
    }
  };

  const handleToAmountChange = (text: string) => {
    setToAmount(text);
    if (rate !== null) {
      setFromAmount((parseFloat(text) / rate).toFixed(2));
    }
  };

  const handleSwap = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    setFromAmount(toAmount);
    setToAmount(fromAmount);
  };

  return {
    fromCurrency,
    toCurrency,
    fromAmount,
    toAmount,
    rate,
    handleFromAmountChange,
    handleToAmountChange,
    handleSwap,
    setFromCurrency,
    setToCurrency,
  };
};

export default useExchangeCalculator;
