const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const middleware=require('./models/middleware');
const cors = require("cors");
const EmployeeSchema = require("./models/Employee");
const { OAuth2Client } = require("google-auth-library");

const app = express()
app.use(express.json())
app.use(cors({origin:"*"}))

mongoose.connect("mongodb://127.0.0.1:27017/employee").then(
  ()=>console.log("db connected")
)


const googleClientId = "858995134030-o2dfikp0bsrvvao3r0fv7mrda6bukec1.apps.googleusercontent.com"; // Replace with your actual Google client ID
const client = new OAuth2Client(googleClientId);

app.post("/google-login", async (req, res) => {
  try {
    const { tokenId } = req.body;

    const ticket = await client.verifyIdToken({
      idToken: tokenId,
      audience: googleClientId,
    });

    const payload = ticket.getPayload();
    const email = payload.email;

    let user = await EmployeeSchema.findOne({ email });
    if (!user) {
      // You can choose to register the user here if they don't exist in your system
      // For now, let's just send an error response
      return res.status(400).send("User not found");
    }

    // Generate a JWT token
    const jwtPayload = { user: { id: user.id } };
    jwt.sign(jwtPayload, "jwtSecret", { expiresIn: "1h" }, (err, token) => {
      if (err) {
        console.error(err);
        return res.status(500).send("Server error");
      }
      res.json({ token });
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});
app.use(express.json());

app.post("/",(req,res)=>{
  res.send("hello")
})


app.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body
    let exist = await EmployeeSchema.findOne({ email: email })
    if (exist) {
      return res.status(400).send('user already exist')
    }
    let newUser = new EmployeeSchema({
      name,
      email,
      password
    })
    await newUser.save();
    res.status(200).send('register successfully')
  } catch (error) {
    console.log(error)
    return res.status(500).send('internal server error')
  }

  /*EmployeeModel.create(req.body)
  .then(Employees=>res.json(Employees))
  .catch(err=>res.json(err))*/

})

//login route

app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    let exist = await EmployeeSchema.findOne({ email: email });
    if (!exist) {
      return res.status(400).send('user not found');

    }
    if (exist.password !== password) {
      return res.status(400).send('invalid credentials');
    }
    let payload = {
      user: {
        id: exist.id
      }
    }
    jwt.sign(payload, 'jwtSecret', { expiresIn: 3600000 },
      (err, token) => {
        if (err) throw err;
        return res.json({token})
      }
    )

  }
  catch (error)
   {
    return res.status(500).send('server error')
  }

  /* const {email,password}=req.body;
   EmployeeModel.findOne({email:email})
   .then(user =>{
     if (user)
     {
       if(user.password===password){
         res.json("success")
       }  else{
         res.json("the password is incorrect")
       }
       
     }else{
       res.json("No records found")
     }
   })*/
})

app.get('/myprofile',middleware,async(req,res)=>{
  try {
    let exist = await EmployeeSchema.findById(req.user.id)
    if (!exist) {
      return res.status(400).send('user not found');
    }
    res.json(exist);
  } catch (error) {
     console.log(error)
     return res.status(500).send('Server Error')
  }
})

app.listen(3001, () => {
  console.log("server is running")
})
