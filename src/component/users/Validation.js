


export const validationUser = (user)=>{
    let errors = {};
    
        if(user.name.trim()==" "){
        errors.name = "name is required"
        }
        else if(user.name.trim().length < 3){
        errors.name= 'name should be more than 3' 
        }
        if(user.email.trim()==" "){
        errors.email = "email required"
        }
        else if(user.email.trim().length<10)
        {
        errors.email = "email should be more than 10"
        }
        if(user.password.trim()==" "){
        errors.name = "password is required"
        }
        else if(user.password.trim().length<6)
        {
        errors.password ="password should be more than 6"
        }
    return errors
}