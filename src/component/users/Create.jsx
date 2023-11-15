import axios from 'axios'
import React, {  useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { validationUser } from './Validation';
import Input from '../shared/Input';
import Loader from './Loader';


export default function Create() {
    
    const navigate = useNavigate();

    let [user, setUser]= useState(
        {
            name: '',
            email: '',
            password: '',
        })
        let [Errors, setErrors]= useState({
            name: '',
            email: '',
            password: '',
        })
    let [ErrBack, setErrBack] = useState('')
    let [Loeader, setLoeader] = useState(false)

    const changeData= (e)=>{
        setUser({...user, [e.target.name]:e.target.value})
        // console.log(user);     
    }

    const sendData = async(e)=>{
        e.preventDefault();
        setLoeader(true)
        if(Object.keys(validationUser(user)).length>0)
        {
            console.log(validationUser(user))
        setErrors(validationUser(user));
        setLoeader(false)
        }
    else{
        try{
            const {data} = await axios.post('https://crud-users-gold.vercel.app/users/', user)
        console.log(data);
        if(data.message=='success')
        toast('user added successfully')
        navigate('/users/index') 
        setLoeader(false) 
    }catch(err){
            // console.log(err.response.data.message)
            setErrBack(err.response.data.message)
            setErrors([])
            setLoeader(false)
        }
        }
    }

    if(Loeader){
            return (
                <Loader/>
            )
        }

return (
    <>
    {ErrBack && <p className="text-danger m-5">{ErrBack}</p>}
    <form onSubmit={sendData}>
<div className='m-5'>
        
        <Input type={"text"} errors= {Errors} placeholder={"Name"} className="form-control" title={"Name"} id={"inputName"} value={user.name} name={"name"} changedata={changeData}/>
        <Input type={"email"} errors= {Errors} placeholder={"Email"} className="form-control" title={"email"} id={"inputEmail"} value={user.email} name={"email"} changedata={changeData}/>
        <Input type={"number"} errors= {Errors} placeholder={"Password"} className="form-control" title={"password"} id={"inputPassword"} value={user.password} name={"password"} changedata={changeData}/>

        
    
    
    <button type="submit" className="btn btn-primary" >Sign in</button>
    </div>
    </form>
</>
)
}
