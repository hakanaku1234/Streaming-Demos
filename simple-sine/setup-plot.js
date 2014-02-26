var request = require('request');
var querystring = require('querystring');


// DEV

var user = "Streaming-Demo"; // Your plotly username or email. Sign up here: https://plot.ly/ssu
var key = "unqmhifzd1"; // Your plotly API key, view here: https://plot.ly/api/key
var token = "rso0jwpmfg"; // Your plotly streaming token, generate here: https://plot.ly/settings
var token2 = "kydr0ia5tj"; 

var data = [{
    'x':[]
  , 'y':[]
  , 'type':'scatter'
  , 'mode':'lines'
  , stream: {
      "token": token
    , "maxpoints": 500
    }
  }
  ,{
    x:[]
  , y:[]
  , type: 'scatter'
  , mode: 'lines'
  , stream: {
      token: token2
    , maxpoints: 500
    }
  }
]

var query = {
    "un": user
  , "key": key
  , "origin": "plot"
  , "platform": "REST"
  , "args": JSON.stringify(data)
  , "kwargs": JSON.stringify({
     "filename": "streaming-plot"
   , "fileopt": "overwrite"
    , "layout": {
        "title": "streaming-demo"
      , "width" : 600
      , "height": 600
    }
    , "world_readable": true
  })
};


request(
    {
        method: 'POST'
      // , uri: 'https://plot.ly/clientresp'
      , uri: 'http://ec2-54-196-84-85.compute-1.amazonaws.com/clientresp/'
      , body:  querystring.stringify(query)
    }
  , function (err, res) {

      if(res.statusCode == 200){
        var payload = JSON.parse(res.body);
        console.log(payload)
      }

      else {
        console.log('error: '+ err, 'status', res.statusCode);
      }

    }

)
