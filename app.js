'Access-Control-Allow-Origin', '*'
'Access-Control-Allow-Methods', 'GET,POST,OPTIONS,DELETE,PUT,PATCH'
const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const employe = require('./employeSchema')
var cors = require('cors');

const DB = 'mongodb+srv://Ronak:GMAMR@cluster0.jxxzuw1.mongodb.net/first?retryWrites=true&w=majority';

mongoose.connect(DB,{
    useNewUrlParser : true,
}).then(()=>{
    console.log('Connectoin Succ');
    
    const app = express();

    app.use(express.json());
    app.use(bodyParser.urlencoded({extended:false}));
    app.use(cors());

    app.get('/',async(req,res)=>{
        const user = await employe.find();
        console.log("get");
        res.send(user);
    })

    app.get('/:id',async(req,res)=>{
        const user = await employe.findById(req.params.id);
        console.log("get");
        res.send(user);
    })

    app.delete('/:id',async(req,res)=>{
        const user = await employe.findById(req.params.id);
        await user.deleteOne();
        res.send(user);
    })

    app.patch('/:id',async(req,res)=>{
        const user = await employe.findById(req.params.id);

        user.Name = req.body.Name,
        user.Salary = req.body.Salary,
        user.emailId = req.body.emailId,
        user.joinningDate = req.body.joinningDate,
        user.gender = req.body.gender,
        user.department =req.body.department,
        user.experianc  =req.body.experianc ,
        user.image = req.body.image ,
        user.city = req.body.city ,
        user.phone = req.body.phone ,
        user.leave = req.body.leave

        await user.save();
        res.send(user);
    })

    app.post('/',async(req,res)=>{
        const user = new employe({
            _id : new mongoose.Types.ObjectId(),
            Name : req.body.Name,
            Salary : req.body.Salary,
            emailId : req.body.emailId,
            joinningDate : req.body.joinningDate,
            gender : req.body.gender,
            department :req.body.department,
            experianc  :req.body.experianc ,
            image : req.body.image ,
            city : req.body.city ,
            phone : req.body.phone ,
            leave : req.body.leave

        });
        await user.save();
        res.send(user);
    })

    app.listen(3000,()=>{
        console.log("server Started");
    });
}).catch((err)=>console.log('Not connect'));
