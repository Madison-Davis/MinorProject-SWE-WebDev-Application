// Data Exchange Example using Fetch(), which is a JS REST API
// Use this link for fake REST API public server (a way to pretend to access data online): https://my-json-server.typicode.com/Madison-Davis/Personal-IT-DataExchange-RESTAPI

// JSON string to JSON object
const text = '{"results":[{"Statistic":"Planted acres","Units":"1,000 Acres","Year":2010,"Estimate":"81,740.070","RSE":0},{"Statistic":"Acres treated with any pesticide","Units":"percent of planted acres","Year":2010,"Estimate":97.332,"RSE":0.5},{"Statistic":"Number of treatments with any pesticide","Units":"Number","Year":2010,"Estimate":3.374,"RSE":2.2},{"Statistic":"Treatment rate with any pesticide","Units":"Pounds a.i. per treated acre","Year":2010,"Estimate":2.331,"RSE":2.4},{"Statistic":"Acres treated with insecticide","Units":"percent of planted acres","Year":2010,"Estimate":9.284,"RSE":12.5},{"Statistic":"Number of treatments with insecticide","Units":"Number","Year":2010,"Estimate":1.245,"RSE":4.9},{"Statistic":"Treatment rate with insecticide","Units":"Pounds a.i. per treated acre","Year":2010,"Estimate":0.186,"RSE":16.1},{"Statistic":"Acres treated with herbicide","Units":"percent of planted acres","Year":2010,"Estimate":95.106,"RSE":0.8},{"Statistic":"Number of treatments with herbicide","Units":"Number","Year":2010,"Estimate":2.847,"RSE":2.2},{"Statistic":"Treatment rate with herbicide","Units":"Pounds a.i. per treated acre","Year":2010,"Estimate":2.249,"RSE":2.2},{"Statistic":"Acres treated with fungicide","Units":"percent of planted acres","Year":2010,"Estimate":7.493,"RSE":13.3},{"Statistic":"Number of treatments with fungicide","Units":"Number","Year":2010,"Estimate":1.369,"RSE":4.6},{"Statistic":"Treatment rate with fungicide","Units":"Pounds a.i. per treated acre","Year":2010,"Estimate":0.12,"RSE":5.9},{"Statistic":"Number of treatments with other pesticide","Units":"Number","Year":2010,"Estimate":2.298,"RSE":4.1},{"Statistic":"Acres treated with other pesticide","Units":"percent of planted acres","Year":2010,"Estimate":15.597,"RSE":9.4},{"Statistic":"Treatment rate with other pesticide","Units":"Pounds a.i. per treated acre","Year":2010,"Estimate":0.665,"RSE":13.1}]}'
const objJSON = JSON.parse(text)
console.log(objJSON)

// Fetch() API
const url = "https://my-json-server.typicode.com/Madison-Davis/Personal-IT-DataExchange-RESTAPI/db"
fetch(url)
   .then(function(response) {
      response.json()
   })
   .then(function(text) {
      console.log("Here is my output:", text)
   })
   .catch(function() {
      console.log("There was an error in retrieving the data.")
   })
