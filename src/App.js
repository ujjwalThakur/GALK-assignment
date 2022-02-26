import { useState, useEffect } from "react";
import "./App.css";
import Input from "./Input";
import List from "./List";
import { db } from "./firebase.config";
import { collection, addDoc, getDocs } from "firebase/firestore"; 

function App() {

  const [tasks, setTasks] = useState([]);
  const [removedTasks, setRemovedTasks] = useState([])

  
  useEffect(() => {
    const collectionRef = collection(db, 'tasks')
    const getTasks = async () => {
      const querySnapshot = await getDocs(collectionRef)
      const removed = []
      const remaining = []
      querySnapshot.docs.forEach((doc) => {
        const task = doc.data()
        if (task.status === 'removed') removed.push({ id: doc.id, text: task.text, completed: true })
        else if(task.status === 'completed') remaining.push({ id: doc.id, text: task.text, completed: true })
        else remaining.push({ id: doc.id, text: task.text, completed: false })
      })
      setTasks(remaining)
      setRemovedTasks(removed)
    }
    getTasks()
  }, [])
  
  const onSubmitHandler = async (value) => {
    const docRef = await addDoc(collectionRef, {text: value, status: 'incomplete'})
    setTasks([...tasks, { id: docRef.id, text: value, completed: false }])
  }

  const onRemoveHandler = () => {
    const newCompletedTasks = []
    const remainingTasks = []
    tasks.forEach((task) => {
      if (task.completed) newCompletedTasks.push({id: task.id, text: task.text, completed: true })
      else remainingTasks.push({id: task.id, text: task.text, completed: false })
    })
    setTasks([...remainingTasks])
    setRemovedTasks([...removedTasks, ...newCompletedTasks])
  }

  const listItemClickHandler = (index) => {
    const tasksCopy = [...tasks]
    tasksCopy[index].completed = !tasksCopy[index].completed
    console.log(tasksCopy)
    setTasks([...tasksCopy])
  }

  return <div className="App">
    <Input onSubmit={onSubmitHandler}/>
    <div className='list-container'>
      <List data={tasks} onClick={listItemClickHandler} />
      <List data={removedTasks} />
    </div>
    <button className='remove-button' onClick={onRemoveHandler}>REMOVE COMPLETED TASKS</button>
  </div>;
}

export default App;


