import { useState } from "react";
import {
  Button,
  Image,
  Modal,
  StyleSheet,
  TextInput,
  View,
} from "react-native";

const GoalInput = ({ onGoalAdd, onEndAddGoal, isModalVisible }) => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const onGoalInput = (text) => {
    setEnteredGoal(text);
  };

  const onGoalAddHandler = () => {
    onGoalAdd(enteredGoal);
    setEnteredGoal("");
  };

  return (
    <Modal animationType="sliding" visible={isModalVisible}>
      <View style={styles.inputContainer}>
        <Image
          source={require("../assets/images/goal.png")}
          style={styles.image}
        />
        <TextInput
          onChangeText={onGoalInput}
          placeholder="Your course goal!"
          style={styles.textInput}
          value={enteredGoal}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button onPress={onEndAddGoal} title="Cancel" color="red" />
          </View>
          <View style={styles.button}>
            <Button
              color="#5e0acc"
              onPress={onGoalAddHandler}
              title="Add Goal"
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  button: {
    marginHorizontal: 8,
    width: "35%",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
    width: "100%",
  },
  image: {
    height: 100,
    margin: 20,
    width: 100,
  },
  inputContainer: {
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    backgroundColor: "#50ac00",
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
  textInput: {
    borderColor: "#e4d0ff",
    borderRadius: 6,
    borderWidth: 1,
    backgroundColor: "#e4d0ff",
    color: "#120438",
    padding: 16,
    width: "90%",
  },
});
