import { StyleSheet, Text, View } from "react-native";
import CardComponent from "../Card";

import { ActionUnit } from "../../interfaces/actionunits";

interface IProp {
  aus: ActionUnit[];
}

export default function TableActionsUnitsComponent({ aus }: IProp) {
  function auValueStyle(value: number) {
    return {
      backgroundColor: "#285444",
      width: `${value * 100}%`,
      height: 5,
    };
  }

  return (
    <CardComponent>
      <View style={styles.wrapper}>
        <Text style={styles.titleCard}>Variance of actions Units</Text>
        <View style={styles.tableWrapper}>
          <View style={styles.headerLine}>
            <View></View>
            <View>
              <Text>0.00</Text>
            </View>
            <View>
              <Text>0.25</Text>
            </View>
            <View>
              <Text>0.50</Text>
            </View>
            <View>
              <Text>0.75</Text>
            </View>
            <View>
              <Text>1.00</Text>
            </View>
          </View>
          {aus.map((item) => (
            <View key={item.au} style={styles.bodyLine}>
              <View>
                <Text style={styles.auTitle}>{`AU${item.au}`}</Text>
              </View>
              <View style={styles.auValueWrapper}>
                <View style={auValueStyle(item.value)}></View>
              </View>
            </View>
          ))}
        </View>
      </View>
    </CardComponent>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    paddingVertical: 5,
    paddingHorizontal: 15,
  },
  titleCard: {
    color: "#1C382E",
    fontSize: 16,
    fontWeight: "bold",
  },
  tableWrapper: {
    paddingVertical: 10,
    width: "100",
  },

  headerLine: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  bodyLine: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
  },
  auTitle: {
    fontWeight: "bold",
    color: "#285444",
  },
  auValueWrapper: {
    paddingHorizontal: 30,
    flex: 1,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  auValue: {
    backgroundColor: "#285444",
    width: "50%",
    height: 5,
  },
});
