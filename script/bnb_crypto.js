/*
Binance Price Alert
About the author:
If reproduced, indicate the source
Telegram channel: @TTmuller
*/

$task
  .fetch({ url: "https://api.binance.com/api/v1/ticker/price" })
  .then((response) => {
    const data = JSON.parse(response.body);

    var info = [
      `BTC：${data[11].price}｜LTC：${data[190].price}`,
      `\nETH：${data[12].price}｜IOTA：${data[336].price}`
    ];
  
    var logo = {"media-url" : "https://github.com/ttmuller/QuanX/raw/rm/photo/bnb_logo.jpg"};

    $notify(
      "Binance定時報價(USDT pair)",
      "",
      info,
      logo
    )
  })
  .then(() => $done());
