const router = require('express').Router();
const sai = require('../models/Blog')
const bodyparser=require("body-parser")
const kiran=require('../models/Blog')

// Your routing code goes here

router.use(bodyparser.json())



router.post('/blog', (req, res) => {

    const user = new kiran(req.body);

    user.save().then(() => {

        res.json({
            status: "sucess",
            result: user

        })}).catch((e) => {
            res.json({
                status: "failed",
                result: e.message
            })
        })

    })




router.get("/blog", async (req, res) => {

    try {
       
        const data = await sai.find();
         
        
        res.json({
            status: "sucess",
            result: data
        })

    }
    catch (e) {
               console.log(e.message)
               res.send(e.message)
         }
})

router.get("/blog", async (req, res) => {

    try {
        const data = await sai.find({ topic:req.query.search}).limit(req.query.page * 2);
   
         
        
        res.json({
            status: "sucess",
            result: data
        })

    }
    catch (e) {
               console.log(e.message)
               res.send(e.message)
         }
})

router.put("/blog/:id", async(req, res) => {
    try {
        const update = await kiran.findByIdAndUpdate( req.params.id,req.body);

        res.json({
            status: "sucess",
            result: update
        })
    }
    catch (e) {
        console.log(e.message)
        res.send(e.message)
  }
   
});

router.delete("/blog/:id", async(req, res) => {
    try {
        const del = await  sai.findOneAndDelete({_id: req.params.id });

        res.json({
            status: "deleted sucessfully",
            result: del
        })
    }
    catch (e) {
        console.log(e.message)
  }
       
    }
);






module.exports = router;