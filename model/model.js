const mongoose=require('mongoose')
const Schema= mongoose.Schema


let Product=new Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    phone:{type:String,required:true},
    description:{type:String,required:true}

},{
    collection:"pugcollection"

})


module.exports = mongoose.model('Product',Product)