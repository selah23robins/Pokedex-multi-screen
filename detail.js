import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default function Detail({ route, navigation }) {
  const { name, type } = route.params;

  const addToFavorites = () => {
    navigation.navigate("Favorites", {
      name,
      type
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.text}>Type: {type}</Text>

      <Button title="Add to Favorites ❤️" onPress={addToFavorites} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 28, fontWeight: "bold" },
  text: { fontSize: 18, marginBottom: 20 }
});
