# Quan-X

### Crypto Price Alert(Crypto價格定時提醒)
##### 如需報更多幣種，請自行修改js文件
```properties
[task_local]
#bitfinex報價
0 */1 * * * https://raw.githubusercontent.com/ttmuller/QuanX/rm/script/bfx_crypto.js, tag=Bitfinex報價, enabled=true

#binance報價
0 */1 * * * https://raw.githubusercontent.com/ttmuller/QuanX/rm/script/bnb_crypto.js, tag=Binance報價, enabled=true
```
![alt text](https://raw.githubusercontent.com/ttmuller/QuanX/rm/photo/Crypto_Price_Alert.PNG)
