type TimelineProps = {
    posts: Array<Post>;
};

export function Timeline({ posts }: TimelineProps) {
    return (
        <ol>
            {posts.map(p => (
                <li key={p.id}>
                    <Post
                        author={p.author}
                        content={p.content}
                        likes={p.likes}
                    />
                </li>
            ))}
        </ol>
    );
}

type Account = {
    id: number;
    name: string;
    handle: string;
    avatar: string;
    isVerified: boolean;
};

type Post = {
    id: number;
    content: {
        text: string;
        image: string;
        caption: string;
    };
    author: Account; // show name, handle and ✅ if verified
    likes: Array<Account>; // show total number, plus avatar of last 5
};

type PostProps = {
    author: Account;
    content: {
        text: string;
        image: string;
        caption: string;
    };
    likes: Array<Account>;
};

function Post({ author, content, likes }: PostProps) {
    return (
        <article>
            <header>
                <PostAuthor {...author} />
            </header>
            <p>{content.text}</p>
            <figure>
                <img src={content.image} alt={content.caption} />
                <figcaption>
                    {content.caption}
                </figcaption>
            </figure>
            <footer>
                <p>Likes: {likes.length}</p>
                <ol>
                    {likes.slice(-5).map(account => (
                        <li key={account.id}>
                            <img
                                src={account.avatar}
                                alt={`Avatar of ${account.name}`}
                            />
                        </li>
                    ))}
                </ol>
            </footer>
        </article>
    );
}

type PostAuthorProps = {
    name: string;
    handle: string;
    isVerified: boolean;
};

function PostAuthor({ name, handle, isVerified }: PostAuthorProps) {
    return (
        <dl>
            <dt>Name</dt>
            <dd>{name}</dd>
            <dt>Handle</dt>
            <dd>{handle}</dd>
            <dt>Verified</dt>
            <dd>{isVerified && "✅"}</dd>
        </dl>
    );
}
