const express = require('express');
const router = express.Router();
const connectDB = require('./utilities/connection');

router.get('/data',async(req,res,nxt)=>{
    try{

        let db = await connectDB.getProjects();
        let data = await db.find().sort({addedOn:-1});
        
        res.json(data);

    }
    catch(error){
        nxt(error);
    }

})
router.get('/about',async(req,res,nxt)=>{
    try{

        let db = await connectDB.getAbout();
        let data = await db.find().sort({addedOn:-1});
        
        res.json(data);

    }
    catch(error){
        nxt(error);
    }

})

module.exports = router;