# CSS Foundations

## **Intro to CSS**

### **Basic Syntax:**
Made up of a selector, semi-colon separated list of declarations, each declaration a property:value pair.
```
selector {
    property: value;
}
```

### **Selectors:**
Refer to HTML elements to which CSS rules apply.

**Universal Selector:** Applies declaration to all elements
```
* {
    color: purple;
}
```
**Type Selector:** selects all elements of given type
```
<!-- index.html -->
<div>Hello, World!</div>
```
```
/* styles.css */
div {
    color: white;
}
```

**Class Selectors:** Select all elements within given class (attribute placed on an HTML element)
```
<!-- index.html -->
<div class="alert-text">Please agree to our terms of service.</div>
```
```
/* styles.css */
.alert-text {
    color: red;
}
```
>\+ **Note:** Can be used anywhere, syntax requires period.

>\+ **Note:** Multiple classes can be added to a single element as a space-separated list i.e. `class="alert-text severe-alert"`. (Since whitespace separates, class names must be hyphenated.)

**ID Selectors:** Similar to class selectors, but unique (can only have one). Denoted by hashtag instead of period.
```
<!-- index.html -->
<div id="title">My Blog</div>
```
```
/* styles.css */
#title {
    background-color: red;
}
```

**Grouping Selector:** Can group selectors with common style declarations into a comma separated list, followed by individual lists for respective unique declarations.
```
.read,
.unread {
    color: white;background-color: black;
}
.read {
    /* several unique declarations */
}   
.unread {
    /* several unique declarations */
}
```

### **Chaining selectors:**
Selectors can be chained as list without separation, i.e. in the case of differentiating elements within a class. 
```
<div>
  <div class="subsection header">Latest Posts</div>
  <p class="subsection preview">This is where a preview for a post might go.</p>
</div>
```
```
.subsection.header {
  color: red;
}

.subsection.preview {
  color: white;
}
```
>\+ `.subsection.header` = "Subsection & header"; Syntax works for chaining any combination of selectors except >1 type (since an element can't be two types).

>\+ Can also be used to chain classes & ID's, i.e. `.subsection#preview {...}`

### **Descendant Combinator:**
Represented by a single space between selectors, only causes elements to be selected if they also have an ancestor that matches the previous selector, i.e. `.ancestor .child {...}` selects `child` iff. nested within `ancestor`.
```
<!-- index.html -->
<div class="ancestor">
    <!-- A -->
    <div class="contents">
        <!-- B -->
        <div class="contents"><!-- C --></div>
    </div>
</div>

<div class="contents"></div>
<!-- D -->
```
```
/* styles.css */
.ancestor .contents {
    /* some declarations */
}
```
(Here the first two elements with the contents class (B, C) are selected but not the last (D))

### **Properties to Get Started With:**

**Color**
- `color` & `background-color`: Accepts keywords (i.e. `red`, `transparent`), HEX, RGB, HSL values. [Alpha values](https://www.w3schools.com/cssref/css_colors_legal.php) adjust opacity.

**Typographic basics & text alignment**
- `font-family`: Single value or comma-separated list of values, each item being either a font family name (`"Times New Roman"`) or generic family name (`sans-serif`, note that generic names don't use quotes).
- `font-size`: Denoted `font-size: 22px`
- `font-weight`: Boldness of text, value can be keyword (`font-weight: bold`) or value in 1-1000 (`font-weight: 700`).
- `text-align`: Aligns text horizontally within an element, or as otherwise specified (`text-align: center`)

**Image height & width**
- Defaults to actual size, to adjust without distorting set either `height` or `width` to `auto`
    ```
    img {
        height: auto;
        width: 500px;
    }
    ```

### **Adding CSS to HTML:**
Three methods:

1. **External CSS**
   
   Most common method, involved creating seperate file for CSS, linking inside HTML's opening/closing `<head>` tagswith a self-closing `<link>` element.
   ```
    <!-- index.html -->
    <head>
        <link rel="stylesheet" href="styles.css" />
    </head>
   ```
   ```
    /* styles.css */
    div {
        color: white;
        background-color: black;
    }
    p {
        color: red;
    }   
   ```
   \+ **Note:** The `rel` attribute is required, specifies relationship between the HTML file & linked file

2. **Internal CSS**
   
   CSS embedded in `<style>` tags, placed within `<head>`. Useful for adding unique styles to a single page.
   ```
   <head>
        <style>
            div {
                color: white;
                background-color: black;
            }
            p {
            color: red;
            }
        </style>
    </head>
    <body>
     ...
    </body>
    ```

3. **Inline CSS**
   
   Makes it possible to add styles directly to HTML elements, but not recommended since messy.
    ```
    <body>
        <div style="color: white; background-color: black;">...</div>
    </body>
    ```

**\+ Assignment review:**
1. ...
2. Can add multiple classes to single element by separating w space i.e. class = "class-one class-two"
3. ...
4. ...
5. Can limit styles to ancestors by separating w space i.e. `.ancestor .child {...}`
6. Order matters for css files!!!

**\+ Knowledge check:**
1. Syntax for class/ID selectors?
   
   .class/#ID

2. How would you apply a single rule to two dif selectors?

    Set both selectors within the same class:
    ```
    <s1 class="same">...
    <s2 class="same">...
    ```
    ```
    .same {...}
    ```
3. Given an element w id `title` & class `primary`, how would you use both attributes for a single rule?
   
   ```
    .primary#title {...}
   ```

4. What does the descendant combinator do?
   
   Applies rules iff. instance of class is a descendant of superclass.

5. 3 ways to add CSS to HTML?
   1. External
   2. Internal
   3. Inline

6. Main differences between 3 aforementioned ways?
   1. External in seperate file
   2. Internal within `<head>`
   3. Inline defined within `<tag>`