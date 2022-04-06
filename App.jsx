import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.carContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Model S</Text>
          <Text style={styles.subtitle}>Starting at $67,450</Text>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
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
});
