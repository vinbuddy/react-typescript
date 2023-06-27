import { ChangeEvent, FormEvent, useRef, useState } from "react";
import "./Todo.css";
import { ITodo } from "../../interfaces";
import TodoItem from "./TodoItem";

const Todo = () => {
    const [todoList, setTodoList] = useState<ITodo[]>([]);
    const [todoInput, setTodoInput] = useState<string>("");
    const inputRef = useRef<HTMLInputElement>(null);

    const handleAddTodo = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();

        const todo: ITodo = {
            name: todoInput,
            id: Date.now(),
            completed: false,
        };

        setTodoList((prev) => [...prev, todo]);
        setTodoInput("");
        inputRef.current?.focus();
    };

    const handleChangeTodoInput = (e: ChangeEvent<HTMLInputElement>): void => {
        setTodoInput(e.target.value);
    };

    const handleDeleteTodo = (id: number): void => {
        setTodoList(todoList.filter((todo) => todo.id !== id));
    };

    const handleCompleteTodo = (id: number): void => {
        const todoListCompleted = todoList.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        );

        setTodoList(todoListCompleted);
    };

    return (
        <div className="todo-wrapper">
            <form onSubmit={handleAddTodo}>
                <input
                    ref={inputRef}
                    value={todoInput}
                    onChange={handleChangeTodoInput}
                    placeholder="Todo ..."
                    type="text"
                />
                <button type="submit">Add</button>
            </form>

            <ul>
                {todoList.map((todo) => (
                    <TodoItem
                        handleCompleteTodo={handleCompleteTodo}
                        handleDeleteTodo={handleDeleteTodo}
                        id={todo.id}
                        key={todo.id}
                        name={todo.name}
                        completed={todo.completed}
                    />
                ))}
            </ul>
        </div>
    );
};

export default Todo;
