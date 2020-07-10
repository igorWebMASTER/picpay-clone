import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign, Ionicons } from "@expo/vector-icons";

import HomeScreen from "./screens/Home";
import WalletScreen from "./screens/Wallet";
import PayScreen from "./screens/Pay";

const Tab = createBottomTabNavigator();

const icons = {
  Home: {
    lib: AntDesign,
    name: "home",
  },
  Wallet: {
    lib: AntDesign,
    name: "credicard",
  },
  Notifications: {
    lib: Ionicons,
    name: "ios-notification-outline",
  },
  Settings: {
    lib: AntDesign,
    name: "settings",
  },
};

export default function Navigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          const { lib: Icon, name } = icons[route.name];
          return <Icon name={name} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Inicio",
        }}
      />
      <Tab.Screen
        name="Wallet"
        component={WalletScreen}
        options={{
          title: "Carteira",
        }}
      />
      {/* <Tab.Screen
        name="Pay"
        component={PayScreen}
        options={{
          title: "Pagar",
        }}
      /> */}
      <Tab.Screen
        name="Ajustes"
        component={PayScreen}
        options={{
          title: "Settings",
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={PayScreen}
        options={{
          title: "Notifications",
        }}
      />
    </Tab.Navigator>
  );
}
