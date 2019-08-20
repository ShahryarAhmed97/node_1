const express=require('express')
const app=express()

const router =express.Router()



router.post('/addNewUser',(req,res)=>{
    res.send({users:[],message:'Action completed successfully'});
    console.log(req.body.user.name);
    console.log(req.body.user.postBody);

})



router.get('/getAllUsers',(req,res)=>{
    res.send({users:[],message:'Action completed successfully'});
    
})


router.put('/updateUser',(req,res)=>{
    res.send({users:[],message:'Action completed successfully'});
    
})

router.delete('/deleteUser',(req,res)=>{
    res.send({users:[],message:'Action completed successfully'});
    
})


module.exports=router

// fetch('/addNewPost', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//         user: {
//             name: "John",
//             postBody: "The post body "
//         }
//     })
// });