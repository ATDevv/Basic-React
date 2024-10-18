

const TodoData = (props) => {
    // props là 1 obj

    const { todoList } = props;

    // console.log(todoList);
    return (
        <div className='todo-data'>
            {todoList.map((item, index) => {
                return (
                    <div className="todo-item">
                        <div key={item.id}>{item.name}</div>
                        <button style={{cursor: "pointer"}}>Delete</button>
                    </div>
                )
                // vì item là 1 obj
            })}

            {/* <div>
                {JSON.stringify(todoList)}
            </div> */}
        </div>
    )
}

export default TodoData