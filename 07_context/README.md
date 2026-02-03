# Exercise: Context

For this assignment, your task is to refactor the `<TOC>` component we
implemented for the previous exercise. In the current implementation,
`<App>` passes the `breadcrumbs` prop to `<TOC>`, which in turn passes
it to each `<Entry>`. Instead, use context so that breadcrumbs are
available anywhere in the components tree.
