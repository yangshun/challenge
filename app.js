var express = require('express');
var app = express();
var request = require('request');

//set our port
var port = process.env.PORT || 3000;

app.listen(3000, function (){
  console.log(`server started on ${port}`);
})
app.use(express.static('./js'))
app.set('view engine', 'ejs');

const API_ROUTE = 'https://api.myjson.com/bins';

app.get('/', function (req, res) {
  const staticApi = '1c80k';
  const priceApis = ['2tlb8', '42lok', '15ktg'];
  const allRequests = [staticApi, ...priceApis];

  Promise
    .all(allRequests.map(function (apiName) {
      return new Promise(function(resolve, reject) {
        request.get(`${API_ROUTE}/${apiName}`, function (err, response, body) {
          resolve({
            name: apiName,
            data: JSON.parse(body)
          });
        });
      })
    }))
    .then(function (values) {
      var hotels = values[0].data.hotels;
      var priceSources = values.slice(1);

      var bestPrices = {};
      priceSources.forEach(function (priceSource) {
        var apiName = priceSource.name;
        var prices = priceSource.data;
        for (var hotelName in prices) {
          if (!bestPrices.hasOwnProperty(hotelName) ||
            (prices[hotelName] < bestPrices[hotelName].price)) {
            bestPrices[hotelName] = {
              apiName: apiName,
              price: prices[hotelName]
            }
          }
        }
      });

      hotels.forEach(function (hotel) {
        const hotelName = hotel.id;
        if (bestPrices.hasOwnProperty(hotelName)) {
          hotel.bestPrice = bestPrices[hotelName];
        }
      });

      res.render('index', {
        hotels: hotels
      });
    });
});
