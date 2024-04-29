import mongoose from "mongoose";

// Create a Schema
const bookSchema=mongoose.Schema({
    name:String,
    price:Number,
    category:String,
    image:String,
    title:String
})
// create a model
// Book is a model name
const Book=mongoose.model("Book", bookSchema)

export default Book;