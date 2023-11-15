import axios from 'axios'
import React, {  useEffect, useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { validationUser } from './Validation';
import Input from '../shared/Input';
import Loader from './Loader';


export default function Update() {
    
    const navigate = useNavigate();

    let [Loeader, setLoeader] = useState(false)
    
    let [user, setUser]= useState ({
        name : "",
        email: "",
        password: "",
    })

    let [Errors , setErrors] = useState({
        name: ' ',
        email: '',
        password: '',
    })

    let [ErrBack, setErrorBack] = useState('')

    const {id} = useParams('id')

    const getUser = async()=>{
        const {data} = await axios.get(`https://crud-users-gold.vercel.app/users/${id}`)
        console.log(data)
        setUser(data.user)
    }
    useEffect(()=>{
        getUser()
    },[])

const changeData = (e)=>{
// console.log(e.target.value)
// let {name, value} = e.target
console.log({...user,[e.target.name] : e.target.value})
setUser({...user,[e.target.name] : e.target.value})
}

const sendData = async(e)=>{
    e.preventDefault()
    setLoeader(true)
    // console.log("test")
    if(Object.keys(validationUser(user)).length>0){
        setErrors(validationUser(user))
        console.log(validationUser(user))
        setLoeader(false)
    }
else{
    const {data} = await axios.put(`https://crud-users-gold.vercel.app/users/${id}`,user).catch((err)=>{
            setErrorBack(err.response.data.message)
            setErrors([])
            setLoeader(false)
    })
    console.log(data)

    if(data.message=='success')
        toast('user updated successfully')
        navigate('/users/index') 
        setLoeader(false)
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
        
        <Input type={"text"} errors= {Errors} className="form-control" title={"Name"} id={"inputName"} value={user.name} name={"name"} changedata={changeData}/>
        <Input type={"email"} errors= {Errors} className="form-control" title={"email"} id={"inputEmail"} value={user.email} name={"email"} changedata={changeData}/>
        <Input type={"number"} errors= {Errors} className="form-control" title={"password"} id={"inputPassword"} value={user.password} name={"password"} changedata={changeData}/>

        
    
    
    <button type="submit" className="btn btn-primary">Sign in</button>
    </div>
    </form>
</>
)
}
