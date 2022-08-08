import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text>Another Text Component</Text>
      </View>

      <Text>Welcome to Expo React</Text>
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
