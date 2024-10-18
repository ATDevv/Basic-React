import './Components/todo/todo.css'
import TodoNew from './Components/todo/TodoNew'
import TodoData from './Components/todo/TodoData'
import reactLogo from './assets/react.svg'
import { useState } from 'react'

const App = () => {

  const [todoList, setTodoList] = useState([
    {id: 1, name: 'Learning React'},
    {id: 2, name: 'Watching Youtube'}
  ]);

  const name = 'ATDev'
  const age = 18
  const data = {
    addRess: "HN",
    country: 'VN'
  }

  const addNewTodo = (name) => {
    alert(`Call me ${name}`)
  }

  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>

      <TodoNew addNewTodo={addNewTodo} />
      {/* không thêm dấu () vì nếu có () sẽ là gọi hàm chứ kh phải truyền tham chiếu */}
      <TodoData name={name} age={age} data={data} todoList={todoList}/>

      <div className='todo-img'>
        <img src={reactLogo} className='logo' />
      </div>
    </div>
  )
}

export default App
