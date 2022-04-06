import { FlatList, StyleSheet, View } from "react-native";
import CartItem from "../CartItem";
import cars from "./cars";

const CarsList = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={cars}
        keyExtractor={({ image }) => image}
        renderItem={({ item }) => (
          <CartItem
            title={item.name}
            subtitle={item.tagline}
            subtitleCTA={item.taglineCTA}
            backgroundImage={item.image}
          />
        )}
      />
    </View>
  );
};

export default CarsList;

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
});
