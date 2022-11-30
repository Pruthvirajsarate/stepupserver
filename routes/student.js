var express= require('express')
var router= express.Router()
var mongo=require('mongodb')

router.get('/test',function(request,response,next){
    response.send('  hi this is sachin , i am from mumbai  ')

})

router.get('/testq',function(request,response,next){
    var n=request.query.name
    var l=request.query.loc
    response.send(` hi this is ${n} , i am from ${l} `)

})
// router.get('/testp/:name/:loc',function(request,response,next){
//     var n=request.params.name
//     var l=request.params.loc
//     response.send(` hi this is ${n} , i am from ${l} `)

// })



//register student
router.post('/reg',function(request,response,next) {
    var document = request.body.data;
    var url ="mongodb+srv://Stepup:Sarate2001@cluster0.hfqpawt.mongodb.net/?retryWrites=true&w=majority" 
    var mongoClient=mongo.MongoClient
    mongoClient.connect(url)
    .then((server)=>{
        var db = server.db('school')
        var collection=db.collection('students')
        collection.insertOne(document)
        .then((res)=>{
            response.send(res)
        })
        .catch((res)=>{
            response.send(res)
        })


    })
    .catch(()=>{
        response.send('DB connection error')
    })

})
//update the student
router.put('/update',function(request,response,next){

})
//delete the student
router.delete('delete',function(request,response,next){

})
//get or retrive the student
router.get('/get',function(request,response,next){
    var url ="mongodb+srv://Stepup:Sarate2001@cluster0.hfqpawt.mongodb.net/?retryWrites=true&w=majority" 
    var mongoClient=mongo.MongoClient
    mongoClient.connect(url)
    .then(function(server){
        var db = server.db('school')
        var collection=db.collection('students')
        collection.find({}).toArray()
        .then(function(res){
            response.send(res)
        })
        .catch(function(res){
            response.send(res)
        })

    })
    .catch(function(){
        response.send('DB connection error')
    })
})

module.exports =router 