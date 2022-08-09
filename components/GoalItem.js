import { StyleSheet, View, Text, Pressable, Modal } from "react-native";
function GoalItem(props) {
  return (
    <Modal>
      <View style={styles.goalItem}>
        <Pressable
          android_ripple={{ color: "green" }}
          onPress={props.deleteItem.bind(this, props.id)}
          style={({ pressed }) => pressed && styles.pressedItem}
        >
          <Text style={styles.textItem}>{props.text}</Text>
        </Pressable>
      </View>
    </Modal>
  );
}

export default GoalItem;
const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#c1f5c6",
  },
  textItem: {
    color: "black",
  },
  pressedItem: {
    opacity: 0.2,
  },
});
