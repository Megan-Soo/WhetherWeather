import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from "react-native";
import { fetchWeatherData } from './src/api/weatherApi'; // API call helper
import WeatherCard from './src/components/WeatherCard'; // Weather display component

const App = () => {
  const [city, setCity] = useState(""); // Store user input
  const [weather, setWeather] = useState(null); // Store weather data
  const [error, setError] = useState(""); // Store error messages

  const getWeather = async () => {
    setError(""); // Reset error message before making a new request
    try {
      const data = await fetchWeatherData(city); // Fetch data from the API
      if (data) {
        setWeather(data);
      } else {
        setWeather(null);
        setError("City not found.");
      }
    } catch (err) {
      setWeather(null);
      setError("Failed to fetch data.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Weather App</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter city name"
        value={city}
        onChangeText={setCity}
      />
      <Button title="Get Weather" onPress={getWeather} />
      
      {error && <Text style={styles.error}>{error}</Text>}
      
      <ScrollView style={styles.weatherContainer}>
        {weather && <WeatherCard weather={weather} />}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, alignItems: "center", justifyContent: "center" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  input: { width: "80%", padding: 10, borderWidth: 1, marginBottom: 10, borderRadius: 5 },
  weatherContainer: { marginTop: 20, width: '100%' },
  error: { color: "red", marginTop: 10 },
});

export default App;
