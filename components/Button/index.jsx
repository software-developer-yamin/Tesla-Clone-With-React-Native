import { Pressable, Text, View } from "react-native";
import { styles } from "./styles";

const Button = ({}) => {
  return (
    <View style={styles.container} >
      <Pressable style={styles.button} onPress={() => {console.warn("Hello")}}>
        <Text style={styles.text} >Custom Order</Text>
      </Pressable>
    </View>
  );
};

export default Button;
