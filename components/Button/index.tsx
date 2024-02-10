import { ReactNode } from "react";
import { View, StyleSheet, TouchableHighlight, Text } from "react-native";

interface IProp {
  onClick: () => void;
  children: ReactNode;
}

export default function ButtonComponent(props: IProp) {
  return (
    <TouchableHighlight onPress={props.onClick} underlayColor="white">
      <View style={styles.button}>
        <Text style={styles.buttonText}>{props.children}</Text>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    alignItems: "center",
  },
  button: {
    marginBottom: 30,
    width: "100%",
    alignItems: "center",
    backgroundColor: "#65A287",
    borderRadius: 30,
  },
  buttonText: {
    textAlign: "center",
    paddingHorizontal: 20,
    paddingVertical: 15,
    fontSize: 16,
    color: "#DEEDE4",
  },
});
