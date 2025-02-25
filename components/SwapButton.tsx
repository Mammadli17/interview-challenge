import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface SwapButtonProps {
  onPress: () => void;
}

const SwapButton: React.FC<SwapButtonProps> = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>Swap</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 100,
    height: 40,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginVertical: 10,
    borderRadius: 5,
  },
  text: {
    fontSize: 15,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default SwapButton;
