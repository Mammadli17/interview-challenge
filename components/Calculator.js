import { Text, View, StyleSheet, Image } from 'react-native';
import CurrencyInput from './CurrencyInput';
import SwapButton from './SwapButton';
import useExchangeCalculator from '../hooks/useExchangeCalculator';
import ExchangeRate from './ExchangeRate';

export default function Calculator() {
  const {
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
  } = useExchangeCalculator();

  return (
    <View style={styles.container}>
      <Text style={styles.textHeader}>Exchange Calculator</Text>
    
      <CurrencyInput
        label="From"
        amount={fromAmount}
        onAmountChange={handleFromAmountChange}
        selectedCurrency={fromCurrency}
        onCurrencyChange={setFromCurrency}
        excludeCurrency={toCurrency}
      />
      <SwapButton onPress={handleSwap} />
      <CurrencyInput
        label="To"
        amount={toAmount}
        onAmountChange={handleToAmountChange}
        selectedCurrency={toCurrency}
        onCurrencyChange={setToCurrency}
        excludeCurrency={fromCurrency}
      />
      <ExchangeRate fromCurrency={fromCurrency} toCurrency={toCurrency} rate={rate} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    flex: 1,
  },
  imageContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: 214,
    resizeMode: 'contain',
    marginVertical: 10,
  },
  textHeader: {
    fontSize: 22,
    color: "black"
  }
});
