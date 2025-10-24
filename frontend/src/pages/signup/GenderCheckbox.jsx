import React from 'react'

function GenderCheckbox({inputs, setInputs}) {
  return (
    <div className='flex gap-2  mt-2'>
      <div className='form-control'>
        <label className='label gap-2 cursor-pointer'>
          <span className='label-text'>Male</span>
          <input 
            type="checkbox" 
            checked={inputs.gender === "male"}
            onChange={() => setInputs({...inputs, gender: "male"})} 
            className={`checkbox border-slate-900 ${inputs.gender === "male" ? "selected" :""}`}
          />
        </label>
      </div>
      <div className='form-control'>
        <label className='label gap-2 cursor-pointer'>
          <span className='label-text'>Female</span>
          <input 
            type="checkbox" 
            checked={inputs.gender === "female"}
            onChange={()=> setInputs({...inputs, gender: "female"})}  
            className={`checkbox border-slate-900 ${inputs.gender === "female" ? "selected" :""}`} 
          />
        </label>
      </div>
    </div>
  )
}

export default GenderCheckbox