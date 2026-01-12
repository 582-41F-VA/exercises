import posts from "./dummy-data.json";
import { Timeline } from "./Timeline.tsx";

export default function App() {
    return <Timeline posts={posts} />;
}
