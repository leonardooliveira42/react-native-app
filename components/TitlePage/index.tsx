import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  titleWrapper: {},
  titlePage: {
    marginTop: 50,
    fontWeight: "bold",
    color: "#285444",
    fontSize: 36,
  },
  subtitlePage: {
    color: "#65A287",
    fontSize: 20,
  },
});

export function TitlePage({ title, subtitle }) {
  return (
    <View style={styles.titleWrapper}>
      <Text style={styles.titlePage}>{title}</Text>
      <Text style={styles.subtitlePage}>{subtitle}</Text>
    </View>
  );
}
