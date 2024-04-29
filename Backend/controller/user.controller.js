// we know very well in contrioller we are defined function

import User from "../model/user.model.js";
import bcryptjs from 'bcryptjs'

export const signup = async (req, res) => {
  try {
    // in try block we are trying to get data from body
    const { fullname, email, password } = req.body;
    // so first we check, Is our user already register or not, so that we find in our model
    const user =await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "Email already exists" });
    }
    // here we hash our password
    const hashPassword= await bcryptjs.hash(password, 10)
    // if user not exits so we create user
    const createdUser = new User({
      fullname,
      email,
      password:hashPassword,

    });
    // Now Save this data in db
   await createdUser.save();
    // and after saving data send response
    res.status(201).json({ message: "User created successfully",user:{
       _id:createdUser._id,
       fullname:createdUser.fullname,
       email:createdUser.email
    } });
  } catch (error) {
    console.log("Error" + error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};
// Note - vvi
// User - This is our model name so we store our data inside Users model in mongodb


// login 
export const login=async(req, res)=>{
  try {
    // we know very well for login we need only email and password.
    const {email, password}=req.body;
    // after that we find data in mongodb
    const user=await User.findOne({email});
    // compare password
    const isMatch=await bcryptjs.compare(password, user.password)
    // agar user nhi hai to 
    if(!user || !isMatch){
      return res.status(400).json({message:"Invalid user name and password"})

    }
    // if everyrhing is correct then send success status
    else{
      res.status(200).json({message:"Login successful", user:{
        _id:user._id,
        fullname:user.fullname,
        email:user.email
      }})
    }
    
  } catch (error) {
    console.log("Error :" + error.message )
    res.status(500).json({ message: "Internal server error" });
    
  }

}