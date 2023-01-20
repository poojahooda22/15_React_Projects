import React, {useState, useEffect} from 'react';
import List from './List';
import Alert from './Alert'

function App() {
  const[name, setName] = useState('');
  const[list, setList] = useState([]);
  const[isEditing, setIsEditing] = useState(false);
  const[editID, setEditID] = useState(null);
  const[alert, setAlert] = useState({show: false, msg:'', type:''});

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!name) {
      //display with alert

    }else if(name) {
      //deal with edit

    }
    else{
      //show alert
      const newItem = {id: new Date().getTime().toString(), title:name};
      setList([...list, newItem]);
    }
  }


  return (
    <section className="section-center">
      <form className='grocery-form' onSubmit={handleSubmit}>
        {alert.show && <Alert/>}
        <h3>Add items to the list</h3>
        <div className='form-control'>
          <input type="text" className='grocery' placeholder="eg. eggs" value={name}/>
          <button type="submit" className='submit-btn'>
            {isEditing ? 'edit': 'submit'}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className='grocery-container'>
        <List items={list}/>
        <button className='clear-btn'>Clear Items</button>
        </div>
      )}
      
    </section>
  );
}

export default App;
