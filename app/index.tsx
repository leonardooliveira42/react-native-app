import { Platform, View, Text, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { TitlePage } from "../components/TitlePage";
import ButtonComponent from "../components/Button";

export default function MainPage() {
  const router = useRouter();

  const navigateToTestsListPage = () => {
    router.push("/tests");
  };

  return (
    <View>
      <TitlePage
        title="Welcome back"
        subtitle="Checkout what we can do in the app"
      />

      <ButtonComponent onClick={navigateToTestsListPage}>
        Check out the tests
      </ButtonComponent>
    </View>
  );
}
