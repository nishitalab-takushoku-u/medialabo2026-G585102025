function print(data) {
    console.log("都市名: " + data.name);
    console.log("天気: " + data.weather[0].description);
    console.log("最低気温: " + data.main.temp_min);
    console.log("最高気温: " + data.main.temp_max);
    console.log("湿度: " + data.main.humidity);
    console.log("風速: " + data.wind.speed);
    console.log("風向: " + data.wind.deg);
}