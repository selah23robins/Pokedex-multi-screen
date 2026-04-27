import React, { useState } from "react"; 
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";

const POKEMON_DATA = [
  { id: "1", name: "Pikachu", type: "Electric" },
  { id: "2", name: "Charmander", type: "Fire" },
  { id: "3", name: "Squirtle", type: "Water" },
  { id: "4", name: "Bulbasaur", type: "Grass" },
  { id: "5", name: "Eevee", type: "Normal" },
];

/**
 * Pokedex screen with search + navigation
 */
export default function PokedexScreen({ navigation }) {
  const [search, setSearch] = useState("");

  // Filter Pokémon based on search input
  const filteredPokemon = POKEMON_DATA.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(search.toLowerCase())
  );

  const handlePress = (item) => {
    navigation.navigate("PokemonDetail", {
      name: item.name,
      type: item.type,
    });
  };

  return (
    <View style={styles.container}>
      {/* 🔍 Search Bar */}
      <TextInput
        style={styles.searchBar}
        placeholder="Search Pokémon..."
        value={search}
        onChangeText={(text) => setSearch(text)}
      />

      {/* 📋 List */}
      <FlatList
        data={filteredPokemon}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
  style={styles.card}
  onPress={() => navigation.navigate("Detail", {
    name: item.name,
    type: item.type
  })}
>
  <Text style={styles.name}>{item.name}</Text>
  <Text>{item.type}</Text>
</TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },

  searchBar: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    marginBottom: 10,
  },

  card: {
    padding: 15,
    marginVertical: 8,
    backgroundColor: "#eee",
    borderRadius: 10,
  },

  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
