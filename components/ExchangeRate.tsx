import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface ExchangeRateProps {
  fromCurrency: string;
  toCurrency: string;
  rate: number | null;
}

const ExchangeRate: React.FC<ExchangeRateProps> = ({ fromCurrency, toCurrency, rate }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.rateText}>
        {fromCurrency} - {toCurrency} rate: {rate ? rate.toFixed(2) : 'N/A'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    alignItems: 'center',
  },
  rateText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ExchangeRate;
