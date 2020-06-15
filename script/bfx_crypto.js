/*
Bitfinex Price Alert
About the author:
If reproduced, indicate the source
Telegram channel: @TTmuller
*/

$task
  .fetch({ url: "https://api-pub.bitfinex.com/v2/tickers?symbols=ALL" })
  .then((response) => {
    const data = JSON.parse(response.body);

    var info = [
      `BTC：${data[0][7]}｜LTC：${data[1][7]}`,
      `\nETH：${data[3][7]}｜IOTA：${data[18][7]}`,
      `\nUSDT：${data[204][7]}`
    ];
  
  var logo = {"media-url" : "https://github.com/ttmuller/QuanX/raw/rm/photo/bfx_logo.png"};

    $notify(
      "Bitfinex定時報價(USD pair)",
      "",
      info,
      logo
    )
  })
  .then(() => $done());
