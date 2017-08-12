var express = require('express');
var multer = require('multer');
var app = express();
var upload = multer();

app.use(express.static('public'));

app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.post("/get-file-size", upload.single('file'), function (req, res){
  let answer = {
    size:req.file.size
  }
  res.send(answer);
})

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
