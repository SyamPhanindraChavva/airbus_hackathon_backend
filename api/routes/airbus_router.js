var tic = require("../../models/airbus_model");
var express=require('express');
var router=express.Router();
var url = require("url");
var querystring = require('querystring');


router.get('/filters/search/',(req,res,next) => {
  tic.getAircraftByMsn(req,res,function(err,result)
{
  console.log("inside")
  var final = Object.assign({status:200}, result);
  res.send(final);
})});

router.get('/home',(req,res,next) => {tic.getAllHeadlines(req,res,function(err,result)
{
  console.log("inside")
  var final = Object.assign({status:200}, result);
  res.send(final);
})});

router.post('/insert_form',(req,res,next) => {tic.insertform(req,res,function(err,result)
{
  console.log("inside")
  var final = Object.assign({status:200}, result);
  res.send(final);
})});
module.exports = router;
