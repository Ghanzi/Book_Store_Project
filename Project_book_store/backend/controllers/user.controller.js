const userServices=require("../services/user.services")

const addUser=async(req,res)=>{
    
    try{
        await userServices.createUser(req.body)
        res.status(201).json("utilisateur ajouté")
    }catch(error){
        res.status(500).json(error)
    }
}
 const getUsers=async(req,res)=>{
    
    try{
      const  users =await userServices.getAllUsers()
      res.status(200).json(users)
    }catch(error){
        res.status(500).json(error)
    }
 }
 module.exports={addUser,getUsers}