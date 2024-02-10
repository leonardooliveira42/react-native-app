import { Slot } from "expo-router";
import { View, StyleSheet } from "react-native";
import Svg, { Path } from "react-native-svg";
import { AvatarComponent } from "../components/Avatar";

function NotificationComponent() {
  return (
    <View style={styles.notification}>
      <Svg width={20} height={23} viewBox="0 0 448 512">
        <Path
          fill="#285444"
          d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z"
        />
      </Svg>
    </View>
  );
}

function Header() {
  return (
    <View style={styles.wrapper}>
      <Svg style={styles.svgBackground} width={"100%"} viewBox="0 0 390 188">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 118.77C24.5141 116.371 49.634 115.126 75.2154 115.126C195.284 115.126 305.186 142.551 390 188V0H0V118.77Z"
          fill="#65A287"
        />
      </Svg>
      <AvatarComponent />
      <NotificationComponent />
    </View>
  );
}

export default function HomeLayout() {
  return (
    <>
      <Header />
      <View style={styles.content}>
        <Slot />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: "relative",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "20px",
  },
  svgBackground: {
    position: "absolute",
    top: 0,
    left: 0,
  },
  notification: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "40px",
    height: "45px",
    borderRadius: 10,
    backgroundColor: "#94C1AB",
  },
  content: {
    paddingHorizontal: 10,
  },
});
