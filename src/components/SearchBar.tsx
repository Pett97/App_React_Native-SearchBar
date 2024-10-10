import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

interface SearchBarProps {
  setSearchTerm: (term: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ setSearchTerm }) => {
  const [itemSearch, setItemSearch] = useState("");

  const handleSearch = () => {
    setSearchTerm(itemSearch);
    setItemSearch("");
  };
  return (
    <View>
      <Text>search</Text>
      <TextInput
        style={styles.input}
        placeholder="Termo De Busca"
        value={itemSearch}
        onChangeText={setItemSearch}
        onSubmitEditing={handleSearch}
      />
      <Button title="Buscar" onPress={handleSearch} />
    </View>
  );
};

export default SearchBar;
