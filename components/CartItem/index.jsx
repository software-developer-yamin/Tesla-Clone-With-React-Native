import { Text, View, ImageBackground } from "react-native";
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
      <Button />
    </View>
  );
};

export default CartItem;
