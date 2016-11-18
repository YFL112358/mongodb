//const Mongolass = require('mongolass');
//const Mongolass = new Mongolass('mongodb://localhost/mypractice');

var  mongodb = require('mongodb');
var  server  = new mongodb.Server('localhost',27017, {auto_reconnect:true});
var  db = new mongodb.Db('mypractice', server, {safe:true});
      function getRandomString() {   
      var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';  
      var str = '';
      for (i = 0; i <32 ; i++) {
          str += $chars.charAt(Math.floor(Math.random() * 26)+6);
      }
      return str;
  }
  
      var a = getRandomString();
      console.log(a);

			db.open(function(err, db){
    if(!err){
        console.log('connect db');
        // 连接Collection（可以认为是mysql的table）
        // 第1种连接方式
         db.collection('item',{safe:true}, function(err, collection){
             if(err){
                 console.log(err);
             }else{
										collection.remove();
                    for(var i = 0;i<10;i++){
                    collection.insert({ name: a, description: a,last_updated:new Date() }). then(console.log);}

                  }
         });
}
		
     // var item = db.model('item', {
     // name: { type: 'string' },
    	//description:{type:'string'},
      //last_updated:{type:'date' }
});
    
