import { IPerson } from "../../interfaces/person";
import { View, Text, StyleSheet } from "react-native";
import { Link } from "expo-router";

interface IProp {
  person: IPerson;
}

import { AvatarComponent } from "../Avatar";
import MaleIcon from "../Icons/Male";
import FemaleIcon from "../Icons/Female";
import TodoListIcon from "../Icons/TodoList";

export default function TestCardComponent({ person }: IProp) {
  return (
    <Link href={`/${person.id}`}>
      <View style={styles.wrapper}>
        <AvatarComponent />
        <View style={styles.info}>
          <Text style={styles.name}>{person.name}</Text>
          <Text style={styles.years}>
            {person.gender == "male" ? <MaleIcon /> : <FemaleIcon />}
            {person.years} years
          </Text>
          <Text style={styles.conclusion}>
            <TodoListIcon />
            {person.completedTest}/{person.totalOfTest} completed!
          </Text>
        </View>
        <View style={styles.percentage}>
          <Text style={styles.percentageTexT}>{person.percentage}%</Text>
        </View>
      </View>
    </Link>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    borderWidth: 1,
    borderColor: "#65A287",
    borderRadius: 8,
    paddingHorizontal: 20,
    paddingVertical: 15,
    width: "100%",
    marginBottom: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  info: {
    width: "60%",
  },
  percentage: {
    height: 50,
    width: 50,
    borderWidth: 5,
    borderColor: "#285444",
    borderRadius: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  name: {
    color: "#285444",
    fontSize: 24,
    fontWeight: "bold",
  },
  years: {
    display: "flex",
    alignItems: "center",
    color: "#65A287",
    fontSize: 16,
  },
  conclusion: {
    display: "flex",
    alignItems: "center",
    color: "#65A287",
    fontSize: 16,
  },
  percentageTexT: {
    color: "#65A287",
  },
});
