  import { TextareaAutosize, FormControl} from '@mui/base'; 
  import { Button } from '@mui/material';

 


export function EditTask ({task, setIsEdit, tasks, setTasks}) {
function handleCancelEdit () {
    setIsEdit(false)
}
console.log(tasks)
function handleEditTask (e) {
    e.preventDefault()
    console.log(e.target.description.value)
    setIsEdit(false)
    
   const newTaskArray = tasks.map(tasks => 
    {return {
    ...tasks,
    task: e.target.description.value
}
})
console.log(newTaskArray)
setTasks(newTaskArray)

}

    return(
        <>
        <FormControl defaultValue="" onSubmit={handleEditTask} style={{ margin: "auto"}}> 
        <TextareaAutosize defaultValue={task} name='description'/>
        <Button style={{margin:"auto"}}>Editar</Button>
        <Button variant='outline' style={{margin:"auto", ml:"10px"}} onClick={handleCancelEdit}>Cancelar</Button>
        
        </FormControl>
        </>
    )
}

