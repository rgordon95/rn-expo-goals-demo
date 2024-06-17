import { Pressable, StyleSheet, Text, View } from "react-native";

const GoalItem = ({ id, text, onDeleteGoal }) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#dddddd" }}
        onPress={onDeleteGoal.bind(this, id)}
        style={({ pressed }) => {
          pressed && styles.pressedItem;
        }}
      >
        <Text style={styles.goalItemText}>{text}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    borderColor: "#ccc",
    borderBottomWidth: 1,
    borderRadius: 4,
    backgroundColor: "#50ac00",
    margin: 8,
  },
  goalItemText: {
    color: "#f8f8f8",
    padding: 8,
  },
  pressedItem: {
    opacity: 0.5,
  }
});
