import * as express from "express";
import { AddressInfo } from "net";

var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

var server = app.listen(3000, function () {
  var host = (server.address() as AddressInfo).address;
  var port = (server.address() as AddressInfo).port;

  console.log('Example app listening at http://%s:%s', host, port);
});