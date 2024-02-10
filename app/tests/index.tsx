import { StyleSheet, View } from "react-native";
import { IPerson } from "../../interfaces/person";
import { TitlePage } from "../../components/TitlePage";
import TestCardComponent from "../../components/TestCard";
import { Link } from "expo-router";

export default function TestList() {
  const persons: IPerson[] = [
    {
      id: 1,
      name: "Joe White",
      years: 36,
      totalOfTest: 6,
      percentage: 56,
      completedTest: 6,
      gender: "male",
    },
    {
      id: 2,
      name: "Elise Taylor",
      years: 25,
      totalOfTest: 6,
      percentage: 23,
      completedTest: 6,
      gender: "female",
    },
    {
      id: 3,
      name: "Evelyn Mosby",
      years: 25,
      totalOfTest: 6,
      percentage: 78,
      completedTest: 6,
      gender: "male",
    },
  ];

  return (
    <View>
      <TitlePage
        title="Good Morning"
        subtitle="Here the list of the lasts tests."
      />
      <View style={styles.wrapper}>
        {persons.map((item) => (
          <Link key={item.id} href={`/tests/${item.id}`}>
            <TestCardComponent person={item} />
          </Link>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
  },
});
