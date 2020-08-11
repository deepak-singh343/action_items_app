import React, { useState } from 'react';
import TodoCard from './TodoCard';
import TodoReadCard from './ToReadCard';
import {Todo_lists} from './todo_Data';
import {ToRead_lists} from './toread_Data';
function App() {
  const [tabValue,setTabValue]=useState(true);
  function changeTab(val)
  {
      setTabValue(val);
  }
  return (
    <div className="App">
      <div className='heading'>
          <h3>ACTION ITEMS</h3>
      </div>
      <div className='tabs'>
          <div className={`tab ${tabValue?' ':'active-tabs'}`} onClick={()=>changeTab(true)}>
              To Do
          </div>
          <div className={`tab ${tabValue?'active-tabs':' '}`} onClick={()=>changeTab(false)}>
              To Read
          </div>
      </div>
      <div className='list'>
        {
          tabValue?Todo_lists.map((todo,index)=>(
            <TodoCard todo={todo} key={index}/>
            )):
            ToRead_lists.map((toread,index)=>(
              <TodoReadCard toread={toread} key={index}/>
          ))
        }
      </div>
      
      <div>

      </div>
      
    </div>
  );
}

export default App;
