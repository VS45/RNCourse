import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.dummyText}>Another Text Component</Text>
      </View>
      <Text style={styles.dummyText}>Welcome to Expo React</Text>
      <Button title="Tab me" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#42f5ad",
    alignItems: "center",
    justifyContent: "center",
  },
  dummyText: {
    margin: 16,
    borderWidth: 1,
    borderColor: "red",
    padding: 16,
  },
});
