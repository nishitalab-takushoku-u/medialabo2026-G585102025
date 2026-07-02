function print(data) {
    console.log("経度: " + data.coord.lon);
    console.log("緯度: " + data.coord.lat);
    console.log("天気: " + data.weather[0].description);
    console.log("最低気温: " + data.main.temp_min);
    console.log("最高気温: " + data.main.temp_max);
    console.log("湿度: " + data.main.humidity);
    console.log("風速: " + data.wind.speed);
    console.log("風向: " + data.wind.deg);
    console.log("都市名: " + data.name);
}
function printDom(data) {
    const existingResult = document.getElementById('result');
    if (existingResult) {
        existingResult.remove();
    }
    const resultDiv = document.createElement('div');
    resultDiv.id = 'result';
    document.body.appendChild(resultDiv);
    const table = document.createElement('table');
    table.border = '1';
    const rows = [
        ['経度', data.coord.lon],
        ['緯度', data.coord.lat],
        ['天気', data.weather[0].description],
        ['最低気温', data.main.temp_min],
        ['最高気温', data.main.temp_max],
        ['湿度', data.main.humidity],
        ['風速', data.wind.speed],
        ['風向', data.wind.deg],
        ['都市名', data.name]
    ];
    rows.forEach(([label, value]) => {
        const tr = document.createElement('tr');
        const th = document.createElement('th');
        th.textContent = label;
        const td = document.createElement('td');
        td.textContent = value;
        tr.appendChild(th);
        tr.appendChild(td);
        table.appendChild(tr);
    });
    resultDiv.appendChild(table);
}
const button = document.getElementById('btn');
if (button) {
    button.addEventListener('click', sendRequest);
}
function sendRequest() {
    const cityIdInput = document.getElementById('city-id');
    const cityId = cityIdInput ? cityIdInput.value.trim() : '1816670';
    const data = findCityDataById(cityId);
    if (data) {
        showResult(data);
    } else {
        showError(new Error('指定された都市IDのデータはありません'));
    }
    finish();
}
function showResult(resp) {
    const data = typeof resp === 'object' ? resp : JSON.parse(resp);
    print(data);
    printDom(data);
}
function showError(err) {
    console.log(err);
}
function finish() {
    console.log('Ajax 通信が終わりました');
}
function findCityDataById(id) {
    const normalizedId = String(id).trim();
    return cityData.find((item) => String(item.id) === normalizedId) || null;
}
const cityData = [
    {id: 360630, name: 'Cairo', coord: {lon: 31.24967, lat: 30.06263}, weather: [{description: '晴れ'}], main: {temp_min: 24, temp_max: 32, humidity: 45}, wind: {speed: 4.1, deg: 180}},
    {id: 524901, name: 'Moscow', coord: {lon: 37.61556, lat: 55.75222}, weather: [{description: '雪'}], main: {temp_min: -8, temp_max: -2, humidity: 80}, wind: {speed: 6.2, deg: 300}},
    {id: 993800, name: 'Johannesburg', coord: {lon: 28.04363, lat: -26.20227}, weather: [{description: '晴れ'}], main: {temp_min: 12, temp_max: 24, humidity: 35}, wind: {speed: 3.1, deg: 150}},
    {id: 1816670, name: 'Beijing', coord: {lon: 116.39723, lat: 39.9075}, weather: [{description: '曇りがち'}], main: {temp_min: 9, temp_max: 15, humidity: 14}, wind: {speed: 2.6, deg: 197}},
    {id: 1850147, name: 'Tokyo', coord: {lon: 139.69171, lat: 35.68949}, weather: [{description: '晴れ'}], main: {temp_min: 25, temp_max: 31, humidity: 60}, wind: {speed: 3.5, deg: 220}},
    {id: 1880252, name: 'Singapore', coord: {lon: 103.85007, lat: 1.28967}, weather: [{description: '雨'}], main: {temp_min: 26, temp_max: 31, humidity: 85}, wind: {speed: 2.4, deg: 90}},
    {id: 2147714, name: 'Sydney', coord: {lon: 151.20732, lat: -33.86785}, weather: [{description: '晴れ'}], main: {temp_min: 12, temp_max: 20, humidity: 55}, wind: {speed: 4.0, deg: 250}},
    {id: 2643743, name: 'London', coord: {lon: -0.12574, lat: 51.50853}, weather: [{description: '霧'}], main: {temp_min: 8, temp_max: 16, humidity: 70}, wind: {speed: 5.6, deg: 280}},
    {id: 2968815, name: 'Paris', coord: {lon: 2.3488, lat: 48.85341}, weather: [{description: 'くもり'}], main: {temp_min: 10, temp_max: 18, humidity: 65}, wind: {speed: 3.2, deg: 320}},
    {id: 3451189, name: 'Rio de Janeiro', coord: {lon: -43.2075, lat: -22.90278}, weather: [{description: '晴れ'}], main: {temp_min: 20, temp_max: 28, humidity: 72}, wind: {speed: 3.8, deg: 120}},
    {id: 5128581, name: 'New York', coord: {lon: -74.00597, lat: 40.71427}, weather: [{description: '曇り'}], main: {temp_min: 21, temp_max: 29, humidity: 58}, wind: {speed: 4.7, deg: 230}},
    {id: 5368361, name: 'Los Angeles', coord: {lon: -118.24368, lat: 34.05223}, weather: [{description: '晴れ'}], main: {temp_min: 17, temp_max: 28, humidity: 50}, wind: {speed: 2.6, deg: 200}}
];