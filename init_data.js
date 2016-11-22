
var  mongodb = require('mongodb');
var  server  = new mongodb.Server('localhost',27017, {auto_reconnect:true});
var  db = new mongodb.Db('mypractice', server, {safe:true});
      function getRandomString() {   
      var chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';  
      var str = '';
      
          for (i = 0; i <(Math.random() * 26)+6 ; i++) {
          str += chars.charAt(Math.floor(Math.random()*26)+6);
}
      
      return str;
  }
  
      var a = getRandomString();
      console.log(a);

			db.open(function(err, db){
    if(!err){
        console.log('connect db');
        // 连接Collection（可以认为是mysql的table）
         db.collection('item',{safe:true}, function(err, collection){
             if(err){
                 console.log(err);
             }else{
										collection.remove();
                    for(var i = 0;i<100;i++){
                    collection.insert({ name: a+i, description: a+i,last_updated:new Date() }). then(console.log);}

                  }
});
   }
}); 
