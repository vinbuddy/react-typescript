import * as React from "react";
import { ITodoItem } from "../../interfaces";

const TodoItem: React.FunctionComponent<ITodoItem> = ({
    id,
    name,
    completed,
    handleDeleteTodo,
    handleCompleteTodo,
}) => {
    return (
        <li className="todo-item">
            <div>
                <input
                    onChange={() => handleCompleteTodo(id)}
                    checked={completed}
                    type="checkbox"
                />
                <span>{name}</span>
            </div>

            <button
                onClick={() => {
                    handleDeleteTodo(id);
                }}
                className="todo-delete"
            >
                X
            </button>
        </li>
    );
};

export default TodoItem;
