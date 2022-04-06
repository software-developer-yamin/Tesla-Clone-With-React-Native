import { StatusBar } from "expo-status-bar";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.carContainer}>
        <ImageBackground
          style={styles.backgroundImage}
          source={require("./assets/images/ModelS.jpeg")}
        />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Model S</Text>
          <Text style={styles.subtitle}>Starting at $67,450</Text>
        </View>
      </View>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  carContainer: {
    height: "100%",
    width: "100%",
  },
  titleContainer: {
    marginTop: "30%",
    alignItems: "center",
    width: "100%",
  },
  title: {
    fontSize: 40,
    fontWeight: "500",
  },
  subtitle: {
    color: "#5c5e62",
    fontSize: 16,
  },
  backgroundImage: {
    height: "100%",
    width: "100%",
    position: "absolute",
    resizeMode: "cover",
  },
});
