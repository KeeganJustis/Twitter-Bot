
// imports

var Twit=require('twit');

var bodyParser = require('body-parser');
// config.js has my authentication
var config=require('./config');
var axios = require('axios');

var redditdata;
var title;
var url;
var T = new Twit(config);
const millsec=1000;
const seconds=60;
const minutes=60;
const hours=24;
var oneday=millsec*seconds*minutes*hours;
console.log(oneday);
setInterval(tweetit,oneday);

function tweetit(){
 axios.get('https://api.reddit.com/r/UpliftingNews/hot.json?/raw_json=1', { params: { sort: 'hot', limit: 1 } })
.then(response => {
  redditdata= response.data;
  console.log(redditdata);
  console.log(redditdata);
  console.log(response.status);
   title=redditdata.data.children[1].data.title;
   url= redditdata.data.children[1].data.url;
   console.log(title);
   console.log(url);
   T.post('statuses/update', { status: title + " " + url }, function(err, data, response) {
     console.log(data)
   });
})
};




// Put Twitter  Authenication in config file.


console.log('Twitter Bot Starting');
// var parameters1 = { q: 'froy', count: 2 };
//
// T.get('search/tweets', parameters1,gotData);
//
// function gotData(err,data,response){
//   var tweets=data.statuses;
//   for (var i=0; i< tweets.length;i++){
//     console.log(tweets[i].text);
//   }
// }
