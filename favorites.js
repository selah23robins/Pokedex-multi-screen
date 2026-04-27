import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Favorites({ route }) {
  const pokemon = route.params;

  return (
    <View style={styles.container}>
      {pokemon ? (
        <>
          <Text style={styles.title}>Favorites</Text>
          <Text style={styles.text}>{pokemon.name}</Text>
          <Text style={styles.text}>{pokemon.type}</Text>
        </>
      ) : (
        <Text style={styles.text}>No favorites yet ❤️</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 10 },
  text: { fontSize: 18 }
});
