# HTML Foundations

## Intro to HTML & CSS
**HTML (Hypertext Markup Language) - Structure**
- Control layout, design

**CSS (Cascading Style Sheet) - Style**
- 'Look & feel'

**Javascript - Interactivity**
- Handles complex functions & features; programmatic

\+ [DevDocs](https://devdocs.io/)

</br>

## Elements & Tags
HTML elements create paragraphs, headings, lists, images & links that make up a webpage.

**Basic structure:** 
Content wrapped in opening & closing tags, i.e.
```
    <tag>element</tag>
```

\+ [HTML Tags](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)

</br>

## HTML Boilerplate

**Homepage/index.html:**
The desired homepage of a site is index.html - web servers look for this page by default, not having this file causes issues

**DOCTYPE:** 
All HTML pages begin w doctype declaration - tells the browser what version of HTML to use to render document.

\+ HTML5 is latest version, specified as `<!DOCTYPE html>`

**Root element:**
All other elements descendants of root
```
<!DOCTYPE html>
<html lang="en">
</html>
```

**Head element:** 
Contains meta-info about webpages, stuff req'd for correct rendering.

\+ Usual contents:
- Charset encoding: Ensures correct display of special symbols, characters
```
    <meta charset="utf-8">
```
- Title element: Displayed in browser tab
```
    <title>Webpage Title</title>
```

**Body element:** 
Holds content - text, images, etc. Always below head element.
```
    <body>...</body>
```
 \+ VSCode boilerplate shortcut: Double click index.html, press '!'

</br>

## Working w Text

**Paragraphs:** 
`<p></p>`

**Headings:** 
`<h1>`, ..., `<h6>`

**Bold:** 
`<strong>`

**Italic:** 
`<em>`

\+ Note: Use indentation in files to make nesting (parents, children) clear.

**Comments:** 
`<!-- comment -->`

</br>

## Lists

**Unordered:** 
`<ul>`, `<li>`
```
    <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
    </ul>
```

**Ordered:** 
`<ol>`, `\<li>`
```
    <ol>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
    </ol>
```

<br>

## Links & Images

**Anchor elements:**
Creates links.

`<a href="link.here">link text</a>`

**Absolute links:**
Links to pages on other sites, form protocol://domain/path

**Relative links:**
Links to pages within site, form path/file.html

\+ If having issues w links, use './' to specify file/directory relative to current directory

**Images (self-closing):** `<img src="linkOrPath.png">`

\+ Note: Like usual, use '..' in src attribute to reach parent directories

\+ 'alt' attribute: Used if image can't be loaded; `<img src="linkOrPath.png" alt="Description of image">`

\+ Formats:
- jpg
- png
- gif
- svg

<br>

## Commit Messages
GOOD COMMIT MESSAGES are ESSENTIAL! Begin practicing commit hygiene ASAP.

**Why are commit messages important?**
1. Potential employers looking through github may look at commit history
2. Allows you, other to see what changes were made & why
3. Allows you to come back to projects with context (thought process, reason for changes, lessons learned, etc.)

**[The seven rules of a great Git commit message:](https://cbea.ms/git-commit/)**
1. Separate subject from body with a blank line
2. Limit the subject line to 50 characters
3. Capitalize the subject line
4. Do not end the subject line with a period
5. Use the imperative mood in the subject line
6. Wrap the body at 72 characters
7. Use the body to explain what and why vs. how

\+ Relevant git commands:
- `git show`
- `git diff`
- `git log -p`
- Print subject line of commit message: `git log --oneline`


\+ [Customize text editor used for commit messages](https://git-scm.com/book/en/v2/Customizing-Git-Git-Configuration)

\+ [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)

\+ [Pro Git](https://git-scm.com/book/en/v2)