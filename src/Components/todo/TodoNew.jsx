

const TodoNew = (props) => {
    // console.log(props);
    const { addNewTodo } = props
    // addNewTodo()
    // gọi hàm từ hàm con kp hàm cha
    // props.addNewTodo()

    const handleClick = () => {
        alert('Click me!')
    }

    const handleOnchange = (e) => {
        console.log('Handel onChange', e.target.value);
    }

    return (
        <div className='todo-new'>
            <input type="text" 
                onChange={handleOnchange}
            />
            <button 
                style={{cursor: "pointer"}}
                onClick={handleClick}
            >Add</button>
        </div>
    )
}

export default TodoNew