import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import ModalSelector from 'react-native-modal-selector';

const currencies = ['EUR', 'USD', 'AZN'];

interface CurrencyInputProps {
    label: string;
    amount: string;
    onAmountChange: (text: string) => void;
    selectedCurrency: string;
    onCurrencyChange: (currency: string) => void;
    excludeCurrency: string;
}

const CurrencyInput: React.FC<CurrencyInputProps> = ({
    label,
    amount,
    onAmountChange,
    selectedCurrency,
    onCurrencyChange,
    excludeCurrency,
}) => {
    const [isEditing, setIsEditing] = useState(false);

    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}:</Text>
            <TextInput
                placeholder="Amount"
                placeholderTextColor="#ccc"
                style={styles.input}
                value={amount}
                keyboardType="numeric"
                onFocus={() => setIsEditing(true)}
                onBlur={() => setIsEditing(false)}
                onChangeText={(text) => {
                    const numericValue = text.replace(/[^0-9.]/g, '');
                    onAmountChange(numericValue );
                }}
            />

            <ModalSelector
                selectStyle={styles.picker}
                selectTextStyle={styles.pickerText}
                data={currencies
                    .filter((c) => c !== excludeCurrency)
                    .map((c) => ({ key: c, label: c }))}
                initValue={selectedCurrency}
                cancelText="Close"
                onChange={(option) => {
                    onCurrencyChange(option.label);
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        marginVertical: 10,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    input: {
        borderWidth: 1,
        borderColor: 'black',
        width: 100,
        padding: 5,
        borderRadius: 5,
        textAlign: 'center',
    },
    picker: {
        height: 35,
        width: 60,
        borderRadius: 3,
        borderColor: '#000',
    },
    pickerText: {
        fontSize: 14,
    },
});

export default CurrencyInput;