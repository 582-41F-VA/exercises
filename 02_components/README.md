# Exercise: Components

Translate the UI below into five React components: `<Header>`, `<Nav>`,
`<Main>`, `<Form>`, and `<Footer>`.

```html
<body>
    <header>
        <nav>
            <a href="/">Home</a>
            <a href="/contact">Contact</a>
        </nav>
    </header>
    <main>
        <h1>Contact</h1>
        <form method="post">
            <fieldset>
                <legend>Send message</legend>
                <label>
                    Email
                    <input type="email" name="email">
                </label>
                <label>
                    Message
                    <textarea name="message"></textarea>
                </label>
                <button>Submit</button>
            </fieldset>
        </form>
    </main>
    <footer>
        <p>Made with React</p>
    </footer>
</body>
```
