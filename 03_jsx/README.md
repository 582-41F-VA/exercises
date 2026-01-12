# Exercise: JSX

For this assignment, your task is to implement the "timeline" view for a
social media website, similar to [Bluesky] or [Mastodon]. You will find
the data model below. Make sure all the information is displayed.

```ts
type Timeline = Array<Post>;

type Post = {
    id: number;
    content: {
        text: string;
        image: string;
    };
    author: Account; // show name, handle and ✅ if verified
    likes: Array<Account>; // show total number, plus avatar of last 5
};

type Account = {
    id: number;
    name: string;
    handle: string;
    avatar: string;
    isVerified: boolean;
};
```

[Bluesky]: https://bsky.app/
[Mastodon]: https://mastodon.social/explore
