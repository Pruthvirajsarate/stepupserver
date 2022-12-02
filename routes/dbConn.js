var mongo=require('mongodb')
function getConnection(){
    var url ="mongodb+srv://Stepup:Sarate2001@cluster0.hfqpawt.mongodb.net/?retryWrites=true&w=majority" 
    var mongoClient=mongo.MongoClient
    return mongoClient.connect(url)
    
   
}

module.exports=getConnection