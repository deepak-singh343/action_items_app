import React from 'react';

function TodoCard({todo}) {
    return (
        <div className='todo_card_container'>
            <div className='left'>
                <div className='taskname'>
                    {todo.task_name}
                </div>
                <div className='description'>
                    {todo.instruction}
                </div>
                <div className='time'>
                    {todo.time}
                </div>
            </div>
            <div className='right'>
                <div className='icon'>
                    <img src={todo.icon} alt='icon'/>
                </div>
                
            </div>
        </div>
    );
}

export default TodoCard;