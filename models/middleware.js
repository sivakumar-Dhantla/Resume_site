const jwt=require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Employee = require('./Employee');
module.exports= async function(req, res, next){
try {
    let token =req.header('x-token');
    if(!token){
        return res.status(400).send("token not found");
    }
   let decode= jwt.verify(token,'jwtSecret');
    req.user=decode.user
    const isPasswordMatch = await bcrypt.compare(req.body.password, decode.user.password);
        
        if (!isPasswordMatch) {
            return res.status(401).send("Invalid password");
        }
        //  save user in database using hash password

  const newUser = new Employee({
    ...userData,
    password: hashedPassword,
  });

  const savedUser = await newUser.save();

  // return response to client

  console.log(userData);

    next();
} catch (error) {
    console.log(error)
    return res.status(500).send('server error')
}


}