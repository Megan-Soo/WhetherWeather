import React from "react";
import { View, Text, StyleSheet } from "react-native";

const WeatherCard = ({ weather }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.city}>{weather.city}</Text>
      <Text style={styles.temp}>{weather.temp}°C</Text>
      <Text>{weather.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 20,
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    marginBottom: 15,
    alignItems: "center",
  },
  city: { fontSize: 24, fontWeight: "bold" },
  temp: { fontSize: 18, marginVertical: 5 },
});

export default WeatherCard;
