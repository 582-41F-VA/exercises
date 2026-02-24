import { useNavigate } from "lib/router";

export function CreateNoteButton() {
    const navigate = useNavigate();

    async function handleClick() {
        const res = await fetch("http://localhost:8000/notes/", {
            method: "post",
            headers: { "content-type": "application/json" },
        });
        const data = await res.json();
        const noteId = data.id;
        navigate(`/${noteId}`);
    }

    return <button onClick={handleClick}>Create note</button>;
}
