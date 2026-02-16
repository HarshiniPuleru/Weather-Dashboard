# React Weather App

A dynamic weather application built with React, that fetches real-time weather data and displays it with an animated video background. The background video changes based on the weather condition and time of day.

## Features

- **Real-time Weather Data:** Fetches live weather information for any city using the OpenWeatherMap API.
- **Dynamic Video Background:** The background changes based on the weather condition (e.g., sunny, clouds, rain, snow) and whether it's day or night.
- **Responsive Design:** Built with Material-UI to ensure a clean and responsive user interface that works on different screen sizes.
- **Error Handling:** Provides a clear message to the user when an invalid city is entered.

## Technologies Used

- **React.js:** The core JavaScript library for building the user interface.
- **Material-UI (MUI):** A popular React UI framework used for styling and components like `TextField` and `Button`.
- **OpenWeatherMap API:** The data source for all weather information.
- **Vite:** A fast build tool for modern web projects.

## Setup and Installation

1.  **Clone the repository:**
    ```bash
    cd React-WeatherApp
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up your API Key:**
    -   Get an API key from [OpenWeatherMap](https://openweathermap.org/api).
    -   Create a `.env` file in the root of your project.
    -   Add your API key to the `.env` file with the following format:
    ```
    VITE_APIKEY="your_api_key_here"
    ```

4.  **Run the application:**
    ```bash
    npm run dev
    ```



## How it Works

The application uses a parent-child component data flow. `WeatherApp` is the main component that holds the state for weather data. `SearchBox` fetches new data and passes it up to `WeatherApp` via a prop function. The `WeatherApp` then passes this data down to `InfoBox` and `Background` to update their displays.

The `Background.jsx` component contains logic to select a specific video based on the `main` weather condition (`Clouds`, `Clear`, etc.) and the time of day, determined by the `icon` property from the API response (`04d` for day, `04n` for night).
