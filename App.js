import { StyleSheet, Text, View,Button } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text>Another Text Component</Text>
      </View>

      <Text>Welcome to Expo React</Text>
      <Button title="Tab me"/>
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
});
