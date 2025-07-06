
import React, {useState} from 'react';
function ToDoList(){

    const [task ,setTask] = useState(['']);
    const [newTask , setNewTask] = useState('');
     const [editIndex, setEditIndex] = useState(null);
    const [editText, setEditText] = useState('');

    function handelInputChange(event){
 setNewTask(event.target.value);

    }

    function addTask(){


        if( newTask.trim() !== ""){

 setTask(t => [...t, newTask]);
 setNewTask ('');


        }
 

    }

    function deleteTask(index){

  const updatedTask = task.filter((_, i)=> i !==index);
  setTask(updatedTask);


    }

    function moveTaskUp(index){
if(index>0){

    const updatedTask =[...task];
    [updatedTask[index] , updatedTask[index-1]]=
    [updatedTask[index-1] ,updatedTask [index]];
    setTask(updatedTask);
}



    }

    function moveTaskDown(index){
if(index< task.length -1){

    const updatedTask =[...task];
    [updatedTask[index] , updatedTask[index+1]]=
    [updatedTask[index+1] ,updatedTask [index]];
    setTask(updatedTask);
}

    }

    function updatedTask(index){
  setEditIndex(index);
  setEditText(task[index]);


    }

       function handleEditChange(event) {
        setEditText(event.target.value);
    }

        function saveTask(index) {
        const updatedTaskList = [...task];
        updatedTaskList[index] = editText;
        setTask(updatedTaskList);
        setEditIndex(null);
        setEditText('');
    }


   return (
        <div className='to-do-list'>
            <h1>To-Do-List</h1>

            <div>
                <input
                    type="text"
                    placeholder='Enter Text...'
                    value={newTask}
                    onChange={handelInputChange}
                />
                <button className='add-button' onClick={addTask}>Add</button>
            </div>

            <ol>
                {task.map((task, index) =>
                    <li key={index}>
                        {editIndex === index ? (
                            <>
                                <input
                                    type="text"
                                    value={editText}
                                    onChange={handleEditChange}
                                />
                                <button className = 'save-task'
                                onClick={() => saveTask(index)}>
                                    Save</button>
                            </>
                        ) : (
                            <span className='text'>{task}</span>
                        )}
                        <button
                            className='update-task'
                            onClick={() => updatedTask(index)}>
                            Edit
                        </button>

                        <button
                            className='delete-button'
                    onClick={() => deleteTask(index)}>
                                  Delete
                        </button>

                        <button
                    className='move-button'
                            onClick={() => moveTaskUp(index)}>
                            ↑
                        </button>

                        <button
                            className='move-button'
                            onClick={() => moveTaskDown(index)}>
                            ↓
                        </button>

                        
                    </li>
                )}
            </ol>
        </div>
    );
}
export default ToDoList