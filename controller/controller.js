const Product=require('../model/model')
const assert = require('assert')


module.exports={
    home:(req,res)=>{
      

        Product.find((err,data)=>{
            if(err){
                assert.equal(null,err)
            }
            else{
                res.render('Home',{posts:data})
            }
        })


    },

    create:(req,res)=>{
        res.render('Create')
    },

    newProduct:(req,res)=>{
        let data= new Product(req.body)
        console.log("Newly Created Data is ....")
        console.log(data)

        data.save().then(myRes=>{
            console.log("data save success")

        }).catch(err=>{
            console.log('data save failed')
        })

       setTimeout(function(){
        res.redirect('/')

       },5000)
       
    },

    edit:(req,res)=>{
    let id= req.params.id

    Product.findById({_id:id},(err,data)=>{
        if(err){
            assert.equal(null,err)
        }
        else{
            res.render('Edit',{post:data})
        }

    
    })


    },

    update:(req,res)=>{
        let id= req.params.id

        Product.findById({_id:id},(err,data)=>{
            if(err){
                assert.equal(null,err)
            }

            if(!data){
                console.log("No Data Found")
            }

            else{
                data.name=req.body.name,
                data.email=req.body.email,
                data.phone=req.body.phone,
                data.description=req.body.description

                console.log(data)

                data.save().then(myRes=>{
                    console.log("Data Save Success")
                }).catch(err=>{
                    assert.equal(null,err)
                    console.log("Error Saving the data")
                })



            }

        })

        setTimeout(function(){
            res.redirect('/')
        },5000)
    },


    delete:(req,res)=>{
        let id=req.params.id

        Product.findByIdAndDelete({_id:id},(err,data)=>{
            if(err){
                console.log("Error in deleting")
                assert.equal(null,err)
            }

            else{

                console.log("Data is deleted successfully")
                console.log("Data that was deleted is ......")
                console.log(data)
            }
        })


        setTimeout(function(){
            res.redirect('/')

        },5000)
    }
}