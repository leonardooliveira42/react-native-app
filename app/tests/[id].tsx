import { StyleSheet, Text, View } from "react-native";
import { TitlePage } from "../../components/TitlePage";
import InsigthComponent from "../../components/Insigths";
import TableActionsUnitsComponent from "../../components/TableActionsUnits";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import { useLocalSearchParams } from "expo-router";

export default function PacientResult() {
  const { id } = useLocalSearchParams();

  useEffect(() => {
    getPacientInfo();
  });

  function getPacientInfo() {
    console.log(id);
  }

  const resultPacientInfo = {
    time: 125,
    accuracy: 92.9,
    match: 23.32,
    conclusion: "Healthy Person",
  };

  const varianceOfActionsUnits = [
    { au: "01", value: 0.1 },
    { au: "02", value: 0.34 },
    { au: "04", value: 0.26 },
    { au: "05", value: 0.27 },
    { au: "06", value: 0.78 },
    { au: "07", value: 0.98 },
    { au: "09", value: 0.85 },
    { au: "10", value: 1 },
    { au: "11", value: 0.43 },
    { au: "12", value: 0.95 },
    { au: "14", value: 0.55 },
    { au: "15", value: 0.03 },
    { au: "17", value: 0.22 },
    { au: "20", value: 0.92 },
    { au: "23", value: 0.09 },
    { au: "24", value: 0.26 },
    { au: "25", value: 0.89 },
    { au: "26", value: 0.17 },
    { au: "28", value: 0.02 },
    { au: "43", value: 0.24 },
  ];

  return (
    <View>
      <TitlePage title="Detailed Result" subtitle="" />

      <TableActionsUnitsComponent aus={varianceOfActionsUnits} />

      <View style={styles.row}>
        <View style={{ marginRight: 8, flex: 1 }}>
          <InsigthComponent
            title="Time"
            result={`${resultPacientInfo.time} seconds`}
          />
        </View>
        <View style={{ flex: 1 }}>
          <InsigthComponent
            title="Accuracy"
            result={`${resultPacientInfo.accuracy}%`}
          />
        </View>
      </View>
      <View style={styles.row}>
        <View style={{ marginRight: 8, flex: 1 }}>
          <InsigthComponent
            title="Match"
            result={`${resultPacientInfo.match}%`}
          />
        </View>
        <View style={{ flex: 1 }}>
          <InsigthComponent
            title="Conclusion"
            result={resultPacientInfo.conclusion}
            dark
          />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  row: {
    maxWidthwidth: "100vw",
    display: "flex",
    flexDirection: "row",
  },
});
