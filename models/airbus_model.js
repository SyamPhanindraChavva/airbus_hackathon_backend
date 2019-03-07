var request = require('request');
var dbHelper = require("../models/databaseHelper");
var url = require('url');



 exports.getAllHeadlines = function(req,res)
 {
	 var connection = dbHelper.getConnection();
	 var z = (req.url).split('/');
	 var ee=parseInt(z[1]);
	 console.log(z);
	 console.log(req.url);
	 connection.query("select * from head_lines",function(err,result){
		 console.log(result);
		 if(err)
		 {
			 res.statusCode = 400;
			 res.message = "error in  getting";
			 res.send(err);
		 }
		 else {
			 res.statusCode = 200;
 			res.message = "successful";
 			res.send(result);
		 }
	 });
 };

  exports.getAircraftByMsn = function(req,res)
  {
 	 var connection = dbHelper.getConnection();
   console.log("*************************************");
   var msn = req.query.msn;
   var flight_name = req.query.flight_name;
   var source = req.query.source;
   var destination = req.query.destination;
   var flight_no = req.query.flight_no;
   // console.log(req.query.msn);
   // console.log("flight_no");
   // console.log(req.query.flight_no);
   // console.log(req.url.toString());
   if(msn!=undefined){
 	 connection.query("select * from form_screen where msn= ?",[msn],function(err,result){
     console.log(msn);
 		 console.log(result);
     console.log(err);
 		 if(err)
 		 {
 			 res.statusCode = 400;
 			 res.message = "error in  getting";
 			 res.send(err);
 		 }
 		 else {
 			 res.statusCode = 200;
  			res.message = "successful";
  			res.send(result);
 		 }
 	 });
 }
 else if(flight_no!=undefined){
  connection.query("select * from form_screen where flight_no= ?",[flight_no],function(err,result){
   console.log(msn);
    console.log(result);
   console.log(err);
    if(err)
    {
      res.statusCode = 400;
      res.message = "error in  getting";
      res.send(err);
    }
    else {
      res.statusCode = 200;
     res.message = "successful";
     res.send(result);
    }
  });
}
 else if(flight_name!=undefined){
   console.log(flight_name);
   connection.query("select * from form_screen where flight_name="+flight_name,function(err,result){
    console.log(msn);
     console.log(result);
    console.log(err);
     if(err)
     {
       res.statusCode = 400;
       res.message = "error in  getting";
       res.send(err);
     }
     else {
       res.statusCode = 200;
      res.message = "successful";
      res.send(result);
     }
   });
 }
 else if(source!=undefined&&destination!=undefined){
   connection.query("select * from form_screen where source="+source+ "and destination="+destination,function(err,result){
    console.log(msn);
     console.log(result);
    console.log(err);
     if(err)
     {
       res.statusCode = 400;
       res.message = "error in  getting";
       res.send(err);
     }
     else {
       res.statusCode = 200;
      res.message = "successful";
      res.send(result);
     }
   });
 }
 else if(source!=undefined&&destination==undefined){
   console.log(source);
   connection.query("select * from form_screen where source="+source,function(err,result){
    console.log(msn);
     console.log(result);
    console.log(err);
     if(err)
     {
       res.statusCode = 400;
       res.message = "error in  getting";
       res.send(err);
     }
     else {
       res.statusCode = 200;
      res.message = "successful";
      res.send(result);
     }
   });
 }
 else if(source==undefined&&destination!=undefined){
   console.log(source);
   connection.query("select * from form_screen where destination="+destination,function(err,result){
    console.log(msn);
     console.log(result);
    console.log(err);
     if(err)
     {
       res.statusCode = 400;
       res.message = "error in  getting";
       res.send(err);
     }
     else {
       res.statusCode = 200;
      res.message = "successful";
      res.send(result);
     }
   });
 }
  };

  exports.insertform = function(req,res)
   {
  	 var connection = dbHelper.getConnection();
     console.log(req.body);
  	connection.query("insert into form_screen  set ?",req.body,
      function(err, result){
  			console.log(err)
  			if(err){
  			res.statusCode = 400;
  			res.message = "Error in query";
  			res.send(err);
  		}
  		else{
  			connection.query("select * from form_screen where id=?",[result.insertId],function(err1,result1){
  	 		 if(err)
  	 		 {
  	 			 res.statusCode = 400;
  	 			 res.message = "error in  getting";
  	 			 res.send(err1);
  	 		 }
  	 		 else {
  	 			 res.statusCode = 200;
  	  			res.message = "successful";
  	  			res.send(result1);
  	 		 }
  	 	 });
  		}
  	});
   };
