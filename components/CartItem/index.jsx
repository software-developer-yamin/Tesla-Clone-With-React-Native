import { ImageBackground, Text, View } from "react-native";
import Button from "../Button";
import { styles } from "./styles";

const CartItem = ({ title, subtitle, backgroundImage, subtitleCTA }) => {
  return (
    <View style={styles.carContainer}>
      <ImageBackground
        style={styles.backgroundImage}
        source={backgroundImage}
      />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>
          {subtitle}{" "}
          {subtitleCTA && <Text style={styles.subtitleCTA}>{subtitleCTA}</Text>}
        </Text>
      </View>

      <View style={styles.buttonContainer}>
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
    </View>
  );
};

export default CartItem;
