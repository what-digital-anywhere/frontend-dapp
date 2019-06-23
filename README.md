# Readme

URL: https://anywhere.what.digital

## What is this?

Anywhere provides an infrastructure for a unified ticketing solution that handles multi-leg journeys across many means of transport elegantly and includes a cashback mechanism to incentivize certain means of transport (e.g. more eco-friendly).  

### For transportation providers

Transportation providers of all kinds can participate, no signup required. From e-scooters, public transport networks, buses, trains, taxi networks, car share networks, etc. 

Transportation providers need to set up a pricing backend (see https://github.com/what-digital-anywhere/pricing-backend) which they can configure the way they like. This allows a transportation provider to use its existing pricing and business logic on the anywhere network.

The passenger app also allows the transportation provider's staff to validate passenger's ticket in a secure and simple way.

### For passengers

Passengers can add their Ethereum wallet to the passenger app (the anywhere frontend). To start a ride, the passenger can scan the transportation provider's QR code (which is attached to the vehicle). When the ride is finished, the passenger can check out. The transportation provider then calculate's a fare price for the trip and they passenger can pay with one simple click.


## Credentials

### Passenger Wallets

https://anywhere.what.digital is running on a private network for testing purposes. The following wallets are pre-charged with ETH:

Use one of the **private keys** codes to log into https://anywhere.what.digital:

### Available Accounts
(0) 0x90f8bf6a479f320ead074411a4b0e7944ea8c9c1 (~100 ETH)  
(1) 0xffcf8fdee72ac11b5c542428b35eef5769c409f0 (~100 ETH)  
(2) 0x22d491bde2303f2f43325b2108d26f1eaba1e32b (~100 ETH)  
(3) 0xe11ba2b4d45eaed5996cd0823791e0c93114882d (~100 ETH)  
(4) 0xd03ea8624c8c5987235048901fb614fdca89b117 (~100 ETH)  
(5) 0x95ced938f7991cd0dfcb48f0a06a40fa1af46ebc (~100 ETH)  
(6) 0x3e5e9111ae8eb78fe1cc3bb8915d5d461f3ef9a9 (~100 ETH)  
(7) 0x28a8746e75304c0780e011bed21c72cd78cd535e (~100 ETH)  
(8) 0xaca94ef8bd5ffee41947b4585a84bda5a3d3da6e (~100 ETH)  
(9) 0x1df62f291b2e969fb0849d99d9ce41e2f137006e (~100 ETH)  

### Private Keys
(0) 0x4f3edf983ac636a65a842ce7c78d9aa706d3b113bce9c46f30d7d21715b23b1d  
(1) 0x6cbed15c793ce57650b9877cf6fa156fbef513c4e6134f022a85b1ffdd59b2a1  
(2) 0x6370fd033278c143179d81c5526140625662b8daa446c22ee2d73db3707e620c  
(3) 0x646f1ce2fdad0e6deeeb5c7e8e5543bdde65e86029e2fd9fc169899c440a7913  
(4) 0xadd53f9a7e588d003326d1cbf9e4a43c061aadd9bc938c843a79e7b4fd2ad743  
(5) 0x395df67f0c2d2d9fe1ad08d1bc8b6627011959b79c53d7dd6a3536a33ab8a4fd  
(6) 0xe485d098507f54e7733a205420dfddbe58db035fa577fc294ebd14db90767a52  
(7) 0xa453611d9419d0e56f499079478fd72c37b251a94bfde4d19872c44cf65386e3  
(8) 0x829e924fdf021ba3dbbc4225edfece9aca04b929d6e75613329ca6f1d31c0bb4  
(9) 0xb0057716d5917badaf911b193b12b910811c1497b5bada8d7711f758981c3773  

### Transportation Providers (= vehicles)

There are currently two transportation providers that each provide one vehicle. Both transportation providers have a demo backend running that will add prices for your trips once you check out. You can check into those vehicles with the following public keys:

- Transportation Provider A - vehicle: 0xE380b3c532F2Cff69858FB95270Ae4Fa2eB6161d

<img src="https://chart.googleapis.com/chart?cht=qr&chl=0xE380b3c532F2Cff69858FB95270Ae4Fa2eB6161d&chs=250x250&choe=UTF-8&chld=L|2"/>

- Transportation Provider B - vehicle: 0x6043bCCB598318da02663d01643030a9E255c198

<img src="https://chart.googleapis.com/chart?cht=qr&chl=0x6043bCCB598318da02663d01643030a9E255c198&chs=250x250&choe=UTF-8&chld=L|2"/>


## How to set up the frontend

- check out https://ionicframework.com/docs/installation/environment to make sure your environment is ready
- cd to the project directory
- npm install -g ionic
- npm install
- ionic serve
- a browser window should now be opened, otherwise try http://localhost:8100

