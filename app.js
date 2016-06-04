var express = require('express');
var app = express();
var request = require('request');

//  Series / Sequence
//  Pros:
//    - Ensure that you have all data upon completion of last request
//  Cons:
//    - Slow, have to wait for one request to return before making the next.
//    - Can't make use of asynchronous nature of JS

//  Parallel
//  Pros:
//    - Faster, non-blocking. No redundant idle time.
//  Cons:
//    - Request completion order is not guaranteed

// Questions:
//  1. Why did you write your requests in this fashion?
//  2. What if there are more pricing sources in future?
//  3. What if there are more hotels in future?
//  4. What if there are more lists of hotels in future?
//  5. What did you choose ejs as templating engine?
//  6. What if the pricing sources return the price in differing currencies?

//set our port
var port = process.env.PORT || 3000;

app.listen(port, function (){
  console.log(`server started on ${port}`);
})
app.use(express.static('./js'))
app.set('view engine', 'ejs');

const API_ROUTE = 'https://api.myjson.com/bins';

app.get('/', function (req, res) {
  const hotelApis = '1c80k';
  const priceApis = ['2tlb8', '42lok', '15ktg'];
  const allRequests = [hotelApis, ...priceApis];

  Promise
    .all(allRequests.map(function (apiName) {
      return new Promise(function (resolve, reject) {
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
