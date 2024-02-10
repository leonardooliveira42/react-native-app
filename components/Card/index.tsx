import { View, StyleSheet } from "react-native";
import { ReactNode } from "react";

interface IProp {
  children: ReactNode;
}

export default function CardComponent({ children }: IProp) {
  return <View style={styles.wrapper}> {children} </View>;
}

const styles = StyleSheet.create({
  wrapper: {
    borderWidth: 1,
    borderColor: "#65A287",
    borderRadius: 8,
    flex: 1,
    width: "100%",
    marginBottom: 10,
  },
});
