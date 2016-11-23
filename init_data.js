var  mongodb = require('mongodb');
var  server  = new mongodb.Server('localhost',27017, {auto_reconnect:true});
var  db = new mongodb.Db('mypractice', server, {safe:true});
      function getRandomString() {   
      var chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';  
      var str = '';
      //随机生成随机数
      for (i = 0; i <(Math.random() * 26)+6 ; i++) {
          str += chars.charAt(Math.floor(Math.random()*26)+6);
                                                   }
      
      return str;
                                }
  
      var a = getRandomString();
      console.log(a);
    //连接数据库
      db.open(function(err, db){
      if(!err){
        console.log('connect db');
         db.collection('item',{safe:true}, function(err, collection){
             if(err){
                 console.log(err);
             }else{
		 //插入数据库之前清空数据库
		    collection.remove();
		//插入100条记录
                    for(var i = 0;i<100;i++){
                    collection.insert({ name: a+i, description: a+i,last_updated:new Date() }). then(console.log);}

                  }
             });
         } 
  });   
