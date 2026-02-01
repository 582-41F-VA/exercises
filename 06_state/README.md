# Exercise: State

![mockup](mockup.excalidraw.svg)

For this exercise, you task is to implement a `TOC` component that
renders a hierarchical table of contents, similar to the one found on
React's website. Here is its interface:

```ts
type Entry = {
    /** Label of the entry (e.g., "Introduction"). */
    label: string;

    /** Slug of the entry (e.g., "/content/introduction"). */
    slug: string;

    /** Optional list of child entries. */
    children?: Array<Entry>;
};

type TOCProps = {
    /** First level entries to display. */
    entries: Array<Entry>;

    /** Breadcrumbs for the current page. */
    breadcrumbs: Array<Entry>;
};
```

The entry matching the current page should be highlighted, and its
parent expanded. To determine whether an entry is current or should be
expanded, we suggest keeping track of its level in the hierarchy. If the
entry matches the breadcrumb at its level, then it should be highlighted
or expanded. E.g., the "Guides" entry is expanded because it is at level
2, and the 2nd breadcrumb is "Guides".
