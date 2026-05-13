# Weather App 🌤️

A modern and responsive weather application that displays real-time weather information for any city using the OpenWeather API. Built with HTML, CSS, and JavaScript.

---

## 📸 Preview

A clean glassmorphism-style weather UI inspired by modern dashboards like Apple Weather and RainViewer.

---

## 🚀 Features

- Search weather by city name
- Displays real-time temperature
- Weather condition description (clear, cloudy, rain, etc.)
- Dynamic weather icons
- Live date display
- High and low temperature tracking
- Glassmorphism UI design
- Fully responsive layout

---

## 🛠️ Technologies Used

- HTML5
- CSS3 (Flexbox + Grid + Glassmorphism)
- JavaScript (ES6+)
- OpenWeather API

---

## 📁 Project Structure

Weather/
│── index.html
│── styles.css
│── app.js
│── README.md

---

## ⚙️ How to Run the Project

1. Download or clone the repository

git clone https://github.com/your-username/weather-app.git

---

2. Navigate to the project folder

cd Weather

---

3. Open the project

Open index.html in your browser  
OR  
Use Live Server in VS Code for best experience

---

## 🔑 API Setup

This project uses the OpenWeather API.

### Get API Key:
https://openweathermap.org/api

---

### Add your API key in app.js

const API_KEY = "YOUR_API_KEY";

---

## 🌐 API Endpoint Used

https://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}&units=metric

---

## 🧠 How It Works

1. User enters a city name
2. JavaScript sends request to OpenWeather API
3. API returns weather data
4. UI updates dynamically with:
   - Temperature
   - Weather description
   - Weather icon
   - City name

---

## 🎨 UI Design

This app uses a modern glassmorphism design:

- Transparent blurred background
- Soft gradients
- Smooth hover animations
- Large temperature display
- Minimal clean layout

Inspired by:
- Apple Weather
- RainViewer
- Modern dashboard UI designs

---

## 📱 Responsive Design

- Works on mobile, tablet, and desktop
- Flexible layout using CSS Grid/Flexbox
- Scales smoothly across all screen sizes

---

## ❌ Common Issues

### 401 Error
- Wrong API key
- Missing API key
- Incorrect endpoint

### No Data Showing
- Check internet connection
- Ensure valid city name

---

## 🚀 Future Improvements

- Geolocation-based weather detection
- Hourly weather forecast
- Weather radar integration
- Dark/light mode toggle
- Saved favorite cities
- Animated weather backgrounds

---

## 👨‍💻 Author

Created by: Your Name

---

## 📄 License

This project is open-source and free to use for learning and personal projects.
