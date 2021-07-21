import React, { useState } from "react";
import {pantryData} from "../data/data";

export default function CheckBoxForm(){
  let [checked,setChecked] = useState(new Array(pantryData.length).fill(false))
  let [totalCheck, setTotalCheck] = useState(0)

  console.log(checked)

  function submit(e){}

  function handleOnchange(e){
    console.log(e.target.name)
    console.log(e.target.checked)
    checked[e.target.name] = e.target.value
    setChecked(checked)
    console.log(checked)
  }

  // const handleOnChange = (position) => {
  //   let updatedCheckedState = checked.map((item, index)=>{
  //     index==position? !item :item
  //   });
  //   setChecked(updatedCheckedState)
  // }

    return(
    <div id="checkBoxForm">
     <form>
      <div className='form-group'>
       <label>Campo de texto!!</label>
       <input type='text' className='form-control' placeholder='Escribe algo...'></input>
       <small>Gracias por tu preferencia!!!</small>
      </div>
      <div className='form-group'>
        <label>Password</label>
        <input type='password' className='form-control'></input>
      </div>
      <div className='form-check'>
        {pantryData.map((element,index) => {
         return (
           <div key={index}>
             <label><input type='checkbox' checked={checked[index]} onChange={handleOnchange} name={index}></input>{element.pantryItem.name}</label>
           </div>
         )
        })}
      </div>
     </form>
    </div>
    );
}
