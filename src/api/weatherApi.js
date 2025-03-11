import { API_KEY } from '@env'; // Import API_KEY from .env

export const fetchWeatherData = async (city) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    const data = await response.json();

    if (response.ok) {
      return {
        city: data.name,
        temp: data.main.temp,
        description: data.weather[0].description,
      };
    } else {
      throw new Error(data.message);
    }
  } catch (error) {
    console.error(error);
    return null;
  }
};
