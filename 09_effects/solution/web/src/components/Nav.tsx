import { Link } from "lib/router";
import { CreateNoteButton } from "./CreateNoteButton.tsx";

export function Nav() {
    return (
        <>
            <nav>
                <Link to="/">Home</Link>
                <CreateNoteButton />
            </nav>
        </>
    );
}
