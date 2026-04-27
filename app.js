import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import PokedexScreen from "./pokedexscreen";
import Detail from "./detail";
import Favorites from "./favorites";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

/**
 * STACK: Pokedex → Detail
 */
function PokedexStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#cc0000" },
        headerTintColor: "#fff",
      }}
    >
      <Stack.Screen
        name="Pokedex"
        component={PokedexScreen}
        options={{ title: "Pokédex" }}
      />

      <Stack.Screen
        name="Detail"
        component={Detail}
        options={({ route }) => ({
          title: route.params?.name || "Details",
        })}
      />
    </Stack.Navigator>
  );
}

/**
 * TAB NAVIGATOR (Main App)
 */
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === "PokedexTab") {
              iconName = "list";
            } else if (route.name === "Favorites") {
              iconName = "heart";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#cc0000",
        })}
      >
        <Tab.Screen
          name="PokedexTab"
          component={PokedexStack}
          options={{ title: "Pokedex" }}
        />

        <Tab.Screen
          name="Favorites"
          component={Favorites}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
