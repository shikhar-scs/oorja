const router = require('express').Router();
var scraperjs = require('scraperjs');

function callStaticScraper(url, params, callback) {
  scraperjs.StaticScraper.create(url)
    .scrape(function($) {
      return $(`${params}`).map(function() {
        return $(this).text();
      }).get();
    })
    .then(function(scrapedData) {
      callback(scrapedData);
    })
}

function callDynamicScraper(url, params, callback) {
  scraperjs.DynamicScraper.create(url)
    .scrape(function($) {
      return $(`${params}`).map(function() {
        return $(this).text();
      }).get();
    })
    .then(function(news) {
      callback(news);
    }
    )
}


router.post('/', (req,res)=>{
  let url = req.body.url;
  let params = req.body.params;
  callStaticScraper(url, params, (scrapedData)=>{
    console.log(scrapedData);
    res.send(scrapedData);
  });
});

module.exports.route = router;