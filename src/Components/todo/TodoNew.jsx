import { useState } from "react"

const TodoNew = (props) => {
    // console.log(props);
    const { addNewTodo } = props
    // addNewTodo()
    // gọi hàm từ hàm con kp hàm cha
    // props.addNewTodo()
    const [text, setText] = useState("atd");

    const handleClick = () => {
        console.log(text);
    }

    const handleTextChange = (e) => {
        setText(e.target.value)
    }

    const handleOnchange = (e) => {
        console.log('Handel onChange', e.target.value);
    }

    return (
        <div className='todo-new'>
            <input type="text" 
                onChange={(e) => handleTextChange(e)}
            />
            <button 
                style={{cursor: "pointer"}}
                onClick={handleClick}
            >Add</button>

            <div>
                My text input is: {text}
            </div>
        </div>
    )
}

export default TodoNew