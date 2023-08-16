import { StyleSheet, SafeAreaView, TextInput, View, Button, Text } from 'react-native';
import { useState } from 'react-native';

export default function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [result, setResult] = useState(0);

  const calcIMC = () => {
    const IMC = weight / (height * height);
    const IMCFormulado = IMC.toFixed(2);
    setResult(+IMCFormulado);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View >
        <TextInput
          placeholder="Peso (kilos)"
          value={weight}
          style={styles.input}
          onChange={(e) => setWeight(+e.target.value)}
        />
        <TextInput
          placeholder="Altura (Centimetros)"
          value={height}
          onChange={(e) => setHeight(+e.target.value)}
          style={styles.input}
        />
      </View>
      <Button
        onPress={calcIMC}
        title="Calcular"
        color="#841584"
      />
      <Text>{result}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 2,
    padding: 10,
    borderRadius: 10,
  },
});
