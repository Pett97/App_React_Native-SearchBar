import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Car from "./src/components/Car"; // Supondo que este componente já exista
import SearchBar from "./src/components/SearchBar";

interface CarObject {
  car: string;
  brand: string;
  hp: number;
}

export default function App() {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const objs: CarObject[] = [
    { car: "Fusca", brand: "VW", hp: 150 },
    { car: "Kombi", brand: "VW", hp: 67 },
    { car: "Gol", brand: "VW", hp: 87 },
  ];

  const filteredCars = objs.filter((item) =>
    item.car.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <Text>Minha Lista de Carro</Text>
      <SearchBar setSearchTerm={setSearchTerm} />
      {filteredCars.map((item, index) => (
        <Car key={index} car={item.car} brand={item.brand} hp={item.hp} />
      ))}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
