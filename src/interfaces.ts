export interface ITodo {
    id: number;
    name: string;
    completed: boolean;
}

export interface ITodoItem extends ITodo {
    handleDeleteTodo: (id: number) => void;
    handleCompleteTodo: (id: number) => void;
}
