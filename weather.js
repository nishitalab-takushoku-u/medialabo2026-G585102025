function print(data) {
    console.log('経度: ' + data.coord.lon);
    console.log('緯度: ' + data.coord.lat);
    console.log('天気: ' + data.weather[0].description);
    console.log('最低気温: ' + data.main.temp_min);
    console.log('最高気温: ' + data.main.temp_max);
    console.log('湿度: ' + data.main.humidity);
    console.log('風速: ' + data.wind.speed);
    console.log('風向: ' + data.wind.deg);
    console.log('都市名: ' + data.name);
}

function printDom(data) {
    const container = document.getElementById('result');
    if (!container) return;
    container.textContent = '';

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

    container.appendChild(table);
}

// 課題: イベントハンドラ sendRequest() の定義
function sendRequest() {
    const cityInput = document.getElementById('city-id');
    const cityId = cityInput ? cityInput.value.trim() : '1816670';
    const url = `https://www.nishita-lab.org/web-contents/jsons/openweather/${encodeURIComponent(cityId)}.json`;

    // 通信開始
    axios.get(url)
        .then(showResult)   // 通信成功
        .catch(showError)   // 通信失敗
        .then(finish);      // 通信の最後の処理
}

// 通信が成功した時の処理
function showResult(resp) {
    // サーバから送られてきたデータを取得
    let data = resp.data;

    // data が文字列型なら、オブジェクトに変換する
    if (typeof data === 'string') {
        data = JSON.parse(data);
    }

    print(data);
    printDom(data);
}

// 通信エラーが発生した時の処理
function showError(err) {
    console.log(err);
    const container = document.getElementById('result');
    if (container) container.textContent = '通信に失敗しました';
}

// 通信の最後に行う処理
function finish() {
    console.log('Ajax通信が終わりました');
}

const btn = document.getElementById('btn');
if (btn) btn.addEventListener('click', sendRequest);