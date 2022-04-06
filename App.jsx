import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import CarsList from "./components/CarsList";
import CartItem from "./components/CartItem";

export default function App() {
  return (
    <View style={styles.container}>
      <CarsList/>
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
});
