const mongoose=require('mongoose');

const schema=mongoose.Schema({
    image: {
        type:String,
        required:true
            },
    title: {
        type:String,
        required:true
            },
    author: {
        type:String,
        required:true
            },
    description: {
        type:String,
        required:true
            },
    price: {
        type:String,
        required:true
            },
    pdf: {
        type:String,
        required:true
            },
});

const User=mongoose.model('Book',schema);

module.exports=Book;