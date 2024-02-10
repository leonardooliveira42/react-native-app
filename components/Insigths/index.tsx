import { Text, View, StyleSheet } from "react-native";
import CardComponent from "../Card";

interface IProp {
  title: string;
  result: string;
  dark?: boolean;
}

export default function InsigthComponent(props: IProp) {
  const { wrapper, dark } = styles;
  const { title, result } = styles;
  const { titleDark, resultDark } = styles;
  const combinedStylesWrapper = StyleSheet.flatten([
    wrapper,
    props.dark ? dark : null,
  ]);

  const combinedStylesTitle = StyleSheet.flatten([
    title,
    props.dark ? titleDark : null,
  ]);

  const combinedStylesResult = StyleSheet.flatten([
    result,
    props.dark ? resultDark : null,
  ]);

  return (
    <CardComponent>
      <View style={combinedStylesWrapper}>
        <Text style={combinedStylesTitle}>{props.title}</Text>
        <Text style={combinedStylesResult}>{props.result}</Text>
      </View>
    </CardComponent>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  title: {
    color: "#1C382E",
    fontSize: 16,
    fontWeight: "bold",
  },
  result: {
    fontSize: 20,
    color: "#65A287",
  },
  titleDark: {
    color: "#BFDBCC",
    fontSize: 16,
    fontWeight: "bold",
  },
  resultDark: {
    fontSize: 20,
    color: "#F1F8F4",
  },
  dark: {
    backgroundColor: "#36715A",
    borderRadius: 8,
  },
});
