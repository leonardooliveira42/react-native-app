import { Platform, View, Text, StyleSheet } from "react-native";
import { TitlePage } from "../components/TitlePage";
import TestCardComponent from "../components/TestCard";
import { IPerson } from "../interfaces/person";

export default function MainPage() {
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

      {persons.map((item) => (
        <TestCardComponent key={item.id} person={item} />
      ))}
    </View>
  );
}
