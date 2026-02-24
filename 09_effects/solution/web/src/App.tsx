import { Route, Router } from "./lib/router";
import { Home } from "./pages/Home.tsx";
import { Note } from "./pages/Note.tsx";

export default function App() {
    return (
        <Router>
            <Route path="/" element={<Home />} />
            <Route path="/:noteId" element={<Note />} />
        </Router>
    );
}
