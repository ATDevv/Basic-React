import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { useState } from 'react';

const TodoData = (props) => {
    // props là 1 obj

    const { todoList, deleteTodo, setTodoList } = props;
    const [editing, setEditing] = useState(false);

    // console.log(todoList);
    const handleEditing = (a) => {
        setEditing(true);
        console.log(todoList[a].name);
    };

    return (
        <div className='todo-data'>
            {todoList.map((item, index) => {
                return (
                    <div className="todo-item">
                        <div key={item.id} style={{borderBlock: '1px', borderBlockColor: 'red', borderBlockEndStyle: 'solid'}}>{item.name}</div>
                        <div>
                            <EditOutlined onClick={() => handleEditing(item.id)}/>
                            <DeleteOutlined
                                style={{ marginLeft: '15px' }}
                                onClick={() => deleteTodo(item.id)}
                            />
                        </div>
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