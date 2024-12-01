import { CheckOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { useState } from 'react';

const TodoData = (props) => {
    // props là 1 obj

    const { todoList, deleteTodo, setTodoList } = props;
    const [editing, setEditing] = useState(null)
    const [newValue, setNewValue] = useState('')

    const handleEditing = (id, currentName) => {
        setEditing(id);
        setNewValue(currentName)
    }

    const handleSave = (id) => {
        const updateValueEdit = todoList.map(item => 
            item.id === id ? { ...item, name: newValue }: item
        )
        setTodoList(updateValueEdit)
        setEditing(null)
        setNewValue('')
    }

    const handleChange = (e) => {
        setNewValue(e.target.value) //Update value in input
    };

    return (
        <div className='todo-data'>
            {todoList.map((item, index) => {
                return (
                    <div className="todo-item">
                        {
                            editing === item.id ?
                                <>
                                    <input
                                        type="text"
                                        value={newValue}
                                        onChange={handleChange}
                                        style={{ borderColor: '#2ed4ff', borderStyle: 'solid', outline: 'none', borderRadius: 3, padding: 3 }}
                                    />
                                    <div>
                                        <CheckOutlined onClick={() => handleSave(item.id)} />
                                        <DeleteOutlined
                                            style={{ marginLeft: '15px' }}
                                            onClick={() => deleteTodo(item.id)}
                                        />
                                    </div>
                                </>
                                :
                                <>
                                    <div key={item.id}>{item.name}</div>
                                    <div>
                                        <EditOutlined onClick={() => handleEditing(item.id, item.name)} />
                                        <DeleteOutlined
                                            style={{ marginLeft: '15px' }}
                                            onClick={() => deleteTodo(item.id)}
                                        />
                                    </div>
                                </>
                        }
                    </div>
                )
                // vì item là 1 obj
            })}
        </div>
    )
}

export default TodoData