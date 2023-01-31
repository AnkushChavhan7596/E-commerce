const userModel = require("../models/userModel");

// ###########################################################################
// get user
const get_user = async (req, res) =>{
    const id = req.params.id;
    console.log(id)

    try{
        const user = await userModel.findById(id);
        console.log(user)

        if(!user){
            res.json({msg: "User not found"});
        }
        else{
            return res.json({user : user})
        }

    }
    catch(err){
        console.log(err.message);
        res.json({msg : err.message});
    }

}


// ###########################################################################
// update user
const update_user = async (req, res) =>{
    const id = req.params.id;

    try{
        const updateUser = await userModel.findByIdAndUpdate(id, {
            name : req.body.name,
            email : req.body.email,
            mobile : req.body.mobile,
        })

        if(!updateUser){
            res.json({msg : "User not Updated !!"});
        }
        else{
            res.json({user : updateUser, msg : "User updated Successfully !!"})
        }
    }
    catch(err){
        res.json({msg : err.message})
    }
}


// ###########################################################################
// delete user
const delete_user = async (req, res) =>{

    const id = req.params.id;

    try{
        const deleteUser = await userModel.findByIdAndDelete(id);


        if(deleteUser){
            res.json({user : deleteUser, msg : "User deleted Successfully !!"});
        }
        else{
            res.json({msg: "User not deleted !!"})
        }

    }catch(err){
        console.log(err.message);
        res.json(err.message)
    }

}


// ###########################################################################
// all user
const all_users = async (req, res) =>{
    try{
        const users = await userModel.find({});
        
        if(!users){
            res.json({msg: "Users not found !!"});
        }
        else{
            res.json({users : users})
        }

    }catch(err){
        res.json({msg : err.message});
    }

}

module.exports = {
    get_user,
    update_user,
    delete_user,
    all_users
}