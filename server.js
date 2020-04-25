const express=require('express')
const app=express()
const bodyParser=require('body-parser')
const route=require('./router/router')
const PORT=Number(process.env.PORT || 4500)
const mongoose=require('mongoose')
const config=require('./config/db')
const cors=require('cors')

mongoose.Promise=global.Promise
mongoose.connect(config.DB,{useNewUrlParser:true}).then(myRes=>{
    console.log("Mongoose Connection Success")
},
err=>{
    console.log("Mongoose Connection Failed")
})

app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))
app.use('/',route)


app.set('views','./views')
app.set('view engine','pug')


app.listen(PORT,()=>{
    console.log(`Server is up and Running at localhost://${PORT}`)

})

