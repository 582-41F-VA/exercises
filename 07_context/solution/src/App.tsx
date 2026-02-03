import { createContext, useContext, useState } from "react";

const BreadcrumbsContext = createContext<Array<Entry>>([]);

export default function App() {
    const entries = [
        { label: "Installation", slug: "/installation" },
        {
            label: "Introduction",
            slug: "/introduction",
            children: [
                {
                    label: "Getting started",
                    slug: "/introduction/getting-started",
                },
                {
                    label: "Guides",
                    slug: "/introduction/guides",
                    children: [
                        {
                            label: "Basic concepts",
                            slug: "/introduction/guides/basic-concepts",
                        },
                        {
                            label: "Advanced",
                            slug: "/introduction/guides/advanced",
                        },
                    ],
                },
            ],
        },
    ];

    const breadcrumbs = [
        {
            label: "Introduction",
            slug: "/introduction",
        },
        {
            label: "Guides",
            slug: "/introduction/guides",
        },
        {
            label: "Basic concepts",
            slug: "/introduction/guides/basic-concepts",
        },
    ];

    return (
        <>
            <p>{breadcrumbs.map(entry => entry.label).join(" → ")}</p>
            <BreadcrumbsContext value={breadcrumbs}>
                <TOC entries={entries} />
            </BreadcrumbsContext>
        </>
    );
}

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
};

function TOC({ entries }: TOCProps) {
    return (
        <nav>
            <ul>
                {entries.map(entry => (
                    <li key={entry.slug}>
                        <Entry {...entry} />
                    </li>
                ))}
            </ul>
        </nav>
    );
}

type EntryProps = {
    label: string;
    slug: string;
    children?: Array<Entry>;
};

function Entry({ label, slug, children }: EntryProps) {
    const breadcrumbs = useContext(BreadcrumbsContext);
    const isOpenByDefault = breadcrumbs
        .slice(0, -1)
        .some(entry => entry.slug === slug);

    const [isOpen, setIsOpen] = useState(isOpenByDefault);

    const lastBreadcrumb = breadcrumbs.at(-1);
    if (!lastBreadcrumb) throw Error("invariant: missing breadcrumbs");
    const isCurrent = lastBreadcrumb.slug === slug;

    return (
        <>
            <a href={slug} className={isCurrent ? "current" : ""}>{label}</a>
            {children && (
                <>
                    <button onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? "Close" : "Open"}
                    </button>
                    <ul style={{ display: isOpen ? "block" : "none" }}>
                        {children.map(entry => (
                            <li>
                                <Entry {...entry} />
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </>
    );
}
