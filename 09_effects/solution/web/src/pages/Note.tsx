import { Nav } from "components/Nav.tsx";
import { useParams } from "lib/router";
import { useEffect, useState } from "react";

type Note = {
    url: string;
    content: string;
    id: number;
};

export function Note() {
    const [note, setNote] = useState<Note | null>(null);
    const [content, setContent] = useState("");
    const { noteId } = useParams();
    const url = `http://localhost:8000/notes/${noteId}/`;

    useEffect(() => {
        async function getNote(): Promise<void> {
            const res = await fetch(url);
            const data = await res.json();
            setNote(data);
            setContent(data.content);
        }
        getNote();
    }, []);

    function handleClick(): void {
        fetch(url, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ content }),
        });
    }

    if (note === null) {
        return <p>Loading...</p>;
    }
    return (
        <>
            <Nav />
            <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
            >
            </textarea>
            <button onClick={handleClick}>Save</button>
        </>
    );
}
