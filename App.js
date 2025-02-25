import { Text, SafeAreaView, StyleSheet, Image, View, ScrollView } from 'react-native';
import { Card } from 'react-native-paper';
import Calculator from './components/Calculator';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView  >
        <Card>
        <Calculator />
      </Card>

      {/* <Text style={styles.paragraph}>
        1. Fix the layout, actual calculator should look like displayed below
        <View style={{ width: "100%", justifyContent: "center", alignItems: "center" }}>
          <Image
            source={require('./assets/screen.png')}
            style={{
              height: 214,
              resizeMode: 'contain',
              marginVertical: 10,
            }}
          />
        </View>
        2. User should be able to enter amounts in both input fields {'\n'}
        3. User shouldn't be allowed to select the same from and to currencies{' '}
        {'\n'}
        4. On swap "amount to" should be set as "amount from" and "amount to"
        should be re-calculated {'\n'}
        5. Current From-To rate should be displayed {'\n'}
        6. Amount fields validation (Optional)
      </Text> */}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 14,
    textAlign: 'left',
  },
});
