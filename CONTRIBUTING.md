# Contributing to Dgraph Commnity Docs

:+1::tada: First off, thanks for taking the time to contribute! :tada::+1:

For now, let's just keep this guide really short and simple. All contributions
are welcome!

### Adding Content to Existing Pages/Docs

If you want to add content to pages that are work in progress, simply find the
page and edit away. You will need to fork this repo and then create PRs from
your fork. If you wish to become a maintainer of the repo to work on it directly
and help review and merge PRs, then please contact
[amaster507](https://github.com/amaster507).

**Working on your first Pull Request?** You can learn how from this _free_
series
[How to Contribute to an Open Source Project on GitHub](https://kcd.im/pull-request)

#### Having Trouble Finding the Document Page?

Document pages can be found in the
[docs](https://github.com/amaster507/dgraph-docs-community/tree/master/docs)
directory. The
[sidebar.js](https://github.com/amaster507/dgraph-docs-community/blob/master/sidebars.js)
file can help guide you to the correct document using the sidebar navigation
structure.

#### New to using Docusaurus?

If you are new to Docusaurus then maybe the
[Docusaurus Docs](https://docusaurus.io/docs) might be of assistance.

#### New to Markdown MDX?

If you are new to writing in Markdown in the MDX form, then maybe the
[MDX Docs](https://mdxjs.com/) might be of help.

### Adding a new Page/Document.

If you wish to add a new page or document then follow these guidelines:

- Prefer .mdx files over .md files
- Prefer using VS Code IDE to assist in code formatting
- For a new Document:
  - Create a new document in
    [docs](https://github.com/amaster507/dgraph-docs-community/tree/master/docs).
  - Name the file the same as the `id` frontmatter.
  - Update the
    [sidebar.js](https://github.com/amaster507/dgraph-docs-community/blob/master/sidebars.js)
    to include the newly added page by `id`.
  - Use the `sidebar_label` frontmatter for the Sidebar Page Title
  - Use the `title` frontmatter for the H1 and meta title.
- For a new Page:

  - Create a new document in
    [pages](https://github.com/amaster507/dgraph-docs-community/tree/master/src/pages)
  - Prefer `*.mdx` for simple pages and `*.tsx` for complex pages with custom
    layouts.
  - If creating a `*.tsx` page, also create the corresponding `*.module.css` for
    styling.
  - Prefer all for react pages be in the css module.

- Documents and Pages can import react components and markdown snippets. See
  [Docusaurs Docs](https://docusaurus.io/docs/markdown-features/react).

  - For document specific markdown snippets, begin the filename with an
    underscore (`_`) and place in the docs folder.
  - For React components, place the component in the
    [components directory](https://github.com/amaster507/dgraph-docs-community/tree/master/src/components).
  - If you are creating a React component, also create the corresponding
    `*.module.css` for styling if needed.
  - Prefer all styling to be done in the css module.

- To include static content (images, fonts, scripts, zip files, pdf, etc.):

  - Place the file in the corresponding directory inside the
    [static directory](https://github.com/amaster507/dgraph-docs-community/tree/master/static).
  - If you are adding several files related to a specfic document or page,
    prefer those files to be grouped together in a sub-category named similarly
    to the document or page they are used for.

- To add a blog post,
  - If you have not been added alread, add yourself to the
    [authors.yml](https://github.com/amaster507/dgraph-docs-community/blob/master/blog/authors.yml)
    following the existing authors format.
  - Create a new directory for your blog post following the pattern
    `YYYY-MM-DD-slug`
  - Prefer blog posts are simple markdown files (`*.md`)
  - Put any images included inside of your blog post directory
  - Add frontmatter `slug`, `title`, `authors`, `tags`, and `description`
