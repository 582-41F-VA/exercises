import { Nav } from "components/Nav.tsx";
import { Link } from "lib/router";
import { useEffect, useState } from "react";

type Note = {
    url: string;
    content: string;
    id: number;
};

export function Home() {
    const [notes, setNotes] = useState<Array<Note>>([]);

    useEffect(() => {
        async function getNotes(): Promise<void> {
            const res = await fetch("http://localhost:8000/notes/");
            const data = await res.json();
            setNotes(data);
        }
        getNotes();
    }, []);

    return (
        <>
            <Nav />
            <ul>
                {notes.map(n => {
                    const firstLine = n.content.split("\n")[0];
                    return (
                        <li key={n.url}>
                            <Link to={`/${n.id}`}>
                                {firstLine || "Empty note"}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </>
    );
}
