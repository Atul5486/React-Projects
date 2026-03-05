const express =require('express')
const app=express();
const cors = require('cors')
const employee =require('./model/employee')

let cor={
    origin: 'http://localhost:5173'
};
app.use(cors(cor))
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.get('/employee',async(req,res)=>{
    let users=await employee.find({});
    res.json(users);
})

app.post('/employee',async(req,res)=>{
    const {name,profileUrl,email,highlight,bio}=req.body;
let user=await employee.create({
        name,
        profileUrl,
        email,
        bio,
        highlight
    })
    console.log(user,"Employee created successfully")
    res.json("Employee Created successfully");
})

app.put('/employee/:id',async(req,res)=>{
     const {name,profileUrl,email,highlight,bio}=req.body;
     const {id}=req.params;
let user=await employee.findOneAndUpdate({_id:id},{
        name,
        profileUrl,
        email,
        bio,
        highlight
    })
    console.log(user,"Employee updated successfully")
    res.json("Employee updated successfully");
})
app.delete('/employee/:id',async(req,res)=>{
    const { id } = req.params;
    let user=await employee.findOneAndDelete({_id:id})
    res.json("user deleted successfully");
})

app.listen(3000,()=>{
    console.log("Server is running at 3000 port");
}) 