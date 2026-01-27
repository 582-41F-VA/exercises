import { useState } from "react";

export default function App() {
    return <TaskApp />;
}

type Task = {
    id: string;
    name: string;
};

function TaskApp() {
    const [store, setStore] = useState<Array<Task>>([]);

    function handleCreate(t: Task): void {
        setStore(store.concat([t]));
    }

    function handleDelete(id: string): void {
        setStore(store.filter(task => task.id !== id));
    }

    return (
        <>
            <CreateTaskForm onCreate={handleCreate} />
            <TaskList tasks={store} onDelete={handleDelete} />
        </>
    );
}

type AddTaskFormProps = {
    onCreate: (t: Task) => void;
};

function CreateTaskForm({ onCreate }: AddTaskFormProps) {
    const [name, setName] = useState("");

    function handleSubmit(event: React.FormEvent): void {
        event.preventDefault();
        const task = { id: crypto.randomUUID(), name };
        setName("");
        onCreate(task);
    }

    return (
        <form onSubmit={handleSubmit}>
            <fieldset>
                <legend>Add task</legend>
                <label>
                    Name
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </label>
                <button>Add</button>
            </fieldset>
        </form>
    );
}

type TaskListProps = {
    tasks: Array<Task>;
    onDelete: (id: string) => void;
};

function TaskList({ tasks, onDelete }: TaskListProps) {
    return (
        <ul>
            {tasks.map(task => (
                <li key={task.id}>
                    <Task {...task} onDelete={onDelete} />
                </li>
            ))}
        </ul>
    );
}

type TaskProps = {
    id: string;
    name: string;
    onDelete: (id: string) => void;
};

function Task({ id, name, onDelete }: TaskProps) {
    function handleSubmit(id: string): (e: React.FormEvent) => void {
        return (e) => {
            e.preventDefault();
            onDelete(id);
        };
    }

    return (
        <article>
            {name}
            <form onSubmit={handleSubmit(id)}>
                <button>Delete</button>
            </form>
        </article>
    );
}
