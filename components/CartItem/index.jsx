import { ImageBackground, Text, View } from "react-native";
import Button from "../Button";
import { styles } from "./styles";

const CartItem = () => {
  return (
    <View style={styles.carContainer}>
      <ImageBackground
        style={styles.backgroundImage}
        source={require("../../assets/images/ModelS.jpeg")}
      />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Model S</Text>
        <Text style={styles.subtitle}>Starting at $67,450</Text>
      </View>
      <Button
        type="primary"
        content={"Custom Order"}
        onPress={() => {
          console.warn("Custom Order was pressed");
        }}
      />

      <Button
        type="secondary"
        content={"Existing Inventory"}
        onPress={() => {
          console.warn("Existing Inventory was pressed");
        }}
      />
    </View>
  );
};

export default CartItem;
