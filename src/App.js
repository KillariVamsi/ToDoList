import { useState,useRef } from 'react';





function App() {

  let updateInputElementUsingUseRef = useRef()


  const [toDoItems,setToDoItems] = useState([])
  const [toDoName,setToDoName] = useState("")



  const addItem = () => {
    let toDoItemsCopy = [...toDoItems]
    toDoItemsCopy.push(toDoName)
    setToDoItems(toDoItemsCopy )
    setToDoName("")
  }

  const updateVal = (i) => {
    let updatedValueElement = document.getElementById("updatedVal"+i)
    let toDoItemsCopy = [...toDoItems]
    toDoItemsCopy.splice(i,1,updatedValueElement.value)
    setToDoItems(toDoItemsCopy)
    updateInputElementUsingUseRef.current.value = ""
    // updatedValueElement.value = ""       (It will update the input field directly in DOM )

  }



  const deleteItem = (i) => { 
    let toDoItemsCopy = [...toDoItems]
    toDoItemsCopy.splice(i,1)
    setToDoItems(toDoItemsCopy)
  }



  return (
    <>
    <h1 style={{ textAlign : "center"}} >To Do List </h1>
    <input value={toDoName} placeholder='Enter your item' onChange={ (e) => { setToDoName(e.target.value) } } /> 
    <button onClick={ () => (addItem() )} > Add Item </button>
    <ol>
    {toDoItems.map( (item,i) => {
      return <li key={i}> {item} <input ref={updateInputElementUsingUseRef} id={`updatedVal${i}`} placeholder='Enter updated value'  /> 
      <button onClick={ () => { updateVal(i) } }> Update Item</button>
      <button onClick={ () => { deleteItem(i) } }> Delete Item</button></li>
    })}
    </ol>
    
    </>
  );
}

export default App;
