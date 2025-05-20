const dotenv= require('dotenv');
dotenv.config();
const express= require('express');
const cors= require('cors')
const app=express();
const connectToDb= require('./db/db')
const userRoutes= require('./routes/user.routes')

connectToDb();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());
app.use('/users',userRoutes);

app.get('/',(req,res)=>{
    res.send('Hello world')
})
module.exports=app;