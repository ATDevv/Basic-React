import './Components/todo/todo.css'
import TodoNew from './Components/todo/TodoNew'
import TodoData from './Components/todo/TodoData'
import reactLogo from './assets/react.svg'

const App = () => {
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
      <TodoData name={name} age={age} data={data}/>

      <div className='todo-img'>
        <img src={reactLogo} className='logo' />
      </div>
    </div>
  )
}

export default App
