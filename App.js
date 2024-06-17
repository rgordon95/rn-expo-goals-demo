import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, FlatList, StyleSheet, View } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const onDeleteGoal = (id) => {
    setCourseGoals((prevCurrentGoals) => {
      return prevCurrentGoals.filter((goal) => goal.id !== id);
    });
  };

  const onGoalAdd = (enteredGoal) => {
    if (enteredGoal.length === 0) return;
    setCourseGoals((prevCurrentGoals) => [
      ...prevCurrentGoals,
      { text: enteredGoal, id: Math.random().toString() },
    ]);
    setIsModalVisible(false);
  };

  const onStartAddGoal = () => {
    setIsModalVisible(true);
  };

  const onEndAddGoal = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button title="Add New Goal" color="#50ac00" onPress={onStartAddGoal} />
        <GoalInput
          onGoalAdd={onGoalAdd}
          onEndAddGoal={onEndAddGoal}
          isModalVisible={isModalVisible}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            alwaysBounceHorizontal={false}
            data={courseGoals}
            key={(item) => item.id}
            renderItem={(itemData) => (
              <GoalItem
                id={itemData.item.id}
                text={itemData.item.text}
                onDeleteGoal={onDeleteGoal}
              />
            )}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    backgroundColor: "#020910",
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 50,
  },
  goalsContainer: {
    flex: 6,
  },
});
