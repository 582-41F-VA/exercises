export default function App() {
    return (
        <>
            <Header />
            <Main />
            <Footer />
        </>
    );
}

function Header() {
    return (
        <header>
            <Nav />
        </header>
    );
}

function Nav() {
    return (
        <nav>
            <a href="/">Home</a>
            <a href="/contact">Contact</a>
        </nav>
    );
}

function Main() {
    return (
        <main>
            <h1>Contact</h1>
            <Form />
        </main>
    );
}

function Form() {
    return (
        <form method="post">
            <fieldset>
                <legend>Send message</legend>
                <label>
                    Email
                    <input type="email" name="email" />
                </label>
                <label>
                    Message
                    <textarea name="message"></textarea>
                </label>
                <button>Submit</button>
            </fieldset>
        </form>
    );
}

function Footer() {
    return (
        <footer>
            <p>Made with React</p>
        </footer>
    );
}
