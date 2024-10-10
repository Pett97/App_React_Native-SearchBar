import React from "react";
import { StyleSheet ,View, Text } from "react-native";

interface CarProps{
  car:string;
  brand:string;
  hp:number;
}

const Car:React.FC<CarProps>=({car,brand,hp}:CarProps)=>{
  return(
    <View style={styles.carStyle}>
      <Text>Carro:{car}</Text>
      <Text>Marca:{brand}</Text>
      <Text>HP:{hp}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  carStyle:{
    marginBottom:14
  }
});
export default Car;
