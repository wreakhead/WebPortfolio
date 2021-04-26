const mongoose = require('mongoose');
const {Schema} = require('mongoose');

mongoose.Schema.promise =  global.Promise;

mongoose.set('useCreateIndex',true);
const url = "mongodb+srv://imran:imran6558@cluster0.he1vq.mongodb.net/portfolioDB?retryWrites=true&w=majority";

const projectData = Schema({
    title:String,
    tech:String,
    describe:String,
    linkSource:String,
    linkAction:String,
    priority:String,
    addedOn:Date,
},
{collection:"projects"});

const aboutData = Schema({
    title:String,
    image:String,
    describe:String,
    addedOn:Date,
},
{collection:"about"});



let collection = {};

collection.getProjects = async () =>{
    try{
        let database = await mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology: true} )
        let model = await database.model('projects',projectData);
        return model;
    }catch(error){
        let err = new Error("projectDB connection failed");
        err.status = 500;
        throw err;
    }
}
collection.getAbout = async () =>{
    try{
        let database = await mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology: true} )
        let model = await database.model('about',aboutData);
        return model;
    }catch(error){
        let err = new Error("aboutDB connection failed");
        err.status = 500;
        throw err;
    }
}
module.exports = collection;
