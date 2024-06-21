  import { TextareaAutosize, FormControl} from '@mui/base'; 
  import { Button } from '@mui/material';
import { getTask, setTaskLS } from './localStorage';

export function EditTask ({task, setIsEdit, tasks, setTasks, id}) {
function handleCancelEdit () {
    setIsEdit(false)
}
console.log(tasks)
console.log(id)
function handleEditTask (e) {
    e.preventDefault()
    console.log(e.target.description.value)
    setIsEdit(false)
    
   const newTaskArray = getTask().map((tasks) => {
    if (tasks.id === id) {
        return {
    ...tasks,
     task: e.target.description.value
}
} else {
    return tasks
}
})
console.log(newTaskArray)
setTasks(newTaskArray)
setTaskLS(newTaskArray) 
}

    return(
        <>
        <form defaultValue="" onSubmit={handleEditTask} style={{ margin: "auto"}}>
        <TextareaAutosize defaultValue={task} name='description'/>
        <Button type="submit" style={{margin:"auto"}}>Editar</Button>
        <Button variant='outline' style={{margin:"auto", ml:"10px"}} onClick={handleCancelEdit}>Cancelar</Button>

        </form>
        </>
    )
}

