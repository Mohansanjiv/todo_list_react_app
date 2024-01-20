import React, { useState } from 'react'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@mui/icons-material/Add';

const CreateArea = (props) => {

  const [isExpanded, setExpanded]= useState(false)

  const [note, setNote] = useState({
    title: '',
    content: ''
  })

  function handleChange (event) {
    const { name, value } = event.target
    setNote(prev => {
      return { ...prev, [name]: value }
    })
  }
  function SubmitNote(event){
     props.onAdd(note);
    setNote({
        title:"",
        content:"",
    })
    event.preventDefault();
  }

  function expand(){
    setExpanded(true);
  }
  return (
    <div>
      <form className='create-note'>
      {isExpanded && <input
        type='text'
        onChange={handleChange}
        name='title'
        value={note.title}
        placeholder='Title'
      /> }
        
        <textarea
          name='content'
          onChange={handleChange}
          onClick={expand}
          value={note.content}
          row={isExpanded? 3 :1}
          placeholder='Note Your Work'
        />
        <Fab onClick={SubmitNote}>
             <AddIcon/>
        </Fab>
      </form>
    </div>
  )
}

export default CreateArea
