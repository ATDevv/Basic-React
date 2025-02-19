import './todo.css'
import TodoNew from './TodoNew'
import TodoData from './TodoData'
import reactLogo from '../../assets/react.svg'
import { useState } from 'react'

const TodoApp = () => {
    const [todoList, setTodoList] = useState([]);
    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(count => count + 1)
    }

    const addNewTodo = (name) => {
        const newTodo = {
            id: count,
            name: name
        }

        setTodoList([...todoList, newTodo])
    }

    const deleteTodo = (id) => {
        // setTodoList(todoList => todoList.filter((ele, i) => ele.id !== id))
        const newTodo = todoList.filter(item => item.id !== id)
        setTodoList(newTodo)
    }

    return (
        <>
            <div className="todo-container">
                <div className="todo-title">Todo List</div>

                <TodoNew addNewTodo={addNewTodo} incrementCount={incrementCount} count={count} />
                {/* không thêm dấu () vì nếu có () sẽ là gọi hàm chứ kh phải truyền tham chiếu */}

                {/* Add toán tử điều kiện */}
                {
                    todoList.length > 0 ?
                        <TodoData todoList={todoList} deleteTodo={deleteTodo} setTodoList={setTodoList}/>

                        :

                        <div className='todo-img'>
                            <img src={reactLogo} className='logo' />
                        </div>
                }
            </div>
        </>
    )
}

export default TodoApp