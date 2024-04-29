import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import bookRoute from './route/book.route.js'
import userRoute from './route/user.route.js'
import cors from 'cors'

const app = express()


app.use(cors())
app.use(express.json())


dotenv.config()

const PORT=process.env.PORT || 3000
const URL=process.env.MongoDBURL



// connect to mongoDB
try {
    mongoose.connect(URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    console.log("connected to mongodb");
    
} catch (error) {
    console.log("Mongodb not connected", error);
    
}

// define routes
app.use("/book", bookRoute)
app.use("/user", userRoute)

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})