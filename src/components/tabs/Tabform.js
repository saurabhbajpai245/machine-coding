import React, { useState } from 'react';
import './tabform.css';
import Profile from './Profile';
import Interests from './Interests';
import Settings from './Settings';

const Tabform = () => {
  const [tabList, setTabList] = useState([
    {name: 'Profile', selected: true, id: 1, completed: false , component: Profile},
    {name: 'Interests', selected: false, id: 2, completed: false, component: Interests},
    {name: 'Settings', selected: false, id: 3, completed: false, component: Settings}
  ]);
  const [formData, setFormData] = useState({
    firstName : '',
    lastName : '',
    age : null,
    address : '',
    hobbies: [],
    isAdmin : false,
  })
  const currentForm = (id) => {
    let newArr = tabList.map(item => {
      if(item.id == id){
        return {...item, selected : true}
      }else{
        return {...item, selected: false}
      }
    }) 
    setTabList(newArr);
  }
  const submitData = () => {
    console.log(formData)
  }
  const updateFormData = (name , data) => {
    setFormData({...formData, ...{[name]: data} })
  
  }
  return (
    <div className='wrapper'>
    <input type='text' />

      <div className='tabs'>
      {
        tabList.map((ele) => { 
          return (
          <div key={ele.id}>
            <div className={`tabItem ${ele.selected ? 'selectedItem' : 'unselected'}`} onClick={() => currentForm(ele.id)}>{ele.name}</div>
        
              {ele.selected && <div className='form-box'><ele.component formData={formData} updateState={updateFormData}/></div>} 
            </div>
          
          )
        })
      }
      <button onClick={submitData} >Submit</button>
      </div> 
    </div> 
  )
}

export default Tabform