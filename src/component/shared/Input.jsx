import React from 'react'

export default function Input({type, id, value, name, changedata, title, placeholder, errors}) {
  return (
    <div className="row mb-3">
    <label htmlFor="inputName" className="col-sm-2 col-form-label">{title}</label>
    <div className="col-sm-10 col-md-4">
    <input type={type} className="form-control" placeholder={placeholder} id={id} value={value} name={name} onChange={changedata}/>
    {errors[name] && <p className='text-danger'>{errors[name]}</p>}
    </div>
</div> 
  )
}
