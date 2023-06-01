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
   **\+ Note:** The `rel` attribute is required, specifies relationship between the HTML file & linked file

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

\+ [CSS Values & units](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units)

<br>

## **The Cascade**

3 factors which determine which rules are applied to the HTML:

1. **Specificity**
   
   More specific declarations take precedence; ID > Class > Type. When no declaration has a selector w higher specificity, a larger amount of a single selector beats a smaller amount of the same selector. EX's:
   ```
    <!-- index.html -->
    <div class="main">
        <div class="list subsection"></div>
        </div>
   ```
   ```
    /* rule 1 */
    .subsection {
        color: blue;
        }

    /* rule 2 */
    .main .list {
        color: red;
        }
   ```
   Above, both class but rule 2 > rule 1 since using more selectors.

   ```
    <!-- index.html -->
    <div class="main">
        <div class="list" id="subsection"></div>
    </div>
   ```
   ```
    /* rule 1 */
    #subsection {
        color: blue;
        }

    /* rule 2 */
    .main .list {
        color: red;
        }
   ```
    Above, rule 1 > rule 2.

    ```
    /* rule 1 */
    #subsection .list {
        background-color: yellow;
        color: blue;
    }

    /* rule 2 */
    #subsection .main .list {
        color: red;
    }    
    ```
    In this case, both use ID & class so none more specific. Both have one ID, but rule 2 has more class selectors thus rule 2 > rule 1.

    \+ Chaining/descendant combinator are of same specificity; `.class.second-class` = `.class .second-class`. Applies to child combinators (`>`).

    \+ `*` (Universal selector) has no specificity value thus is always overridden.

2. **Inheritance**
   
   Direct targeting > inheritance, i.e.
   ```
    <!-- index.html -->
    <div id="parent">
        <div class="child"></div>
    </div>
   ```
   ```
    /* styles.css */
    #parent {
        color: red;
        }

    .child {
        color: blue;
    }
   ```
   Here, child blue since declaration directly targets (despite red being inherited).

3. **Rule order**
   
   Whichever is defined last 'wins'.

    ```
    /* styles.css */
    .alert {
        color: red;
        }

    .warning {
        color: yellow;
        }
    ```

<br>

## **Inspecting HTML & CSS**

To open inspector, press F12. Use mouse icon to inspect elements w mouse. Styles displayed on right. Overwritten styles displayed w strike-through.

<br>

## The Box Model

To see boxes:
```
* {
  border: 2px solid red;
}
```

4 properties of boxes:

1.Content box: Sized using `inline-size`, `block-size`, `width`, `height`, etc.
2. `padding`: Whitespace around content
3. `border`: Adds space between margin & padding; wraps content & padding
    - Incl.`border-width`, `border-style`, `border-color`
4. `margin`: Increases space between borders of box & borders of adjacent boxes

\+ All include `x-top`, `x-right`, `x-bottom`, `x-left`.

[MDN box model](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model)

### **Outer display type**

**Block boxes (Up/Dn)**
- Breaks into new line
- `width`\`height` respected
- Padding/margin/border causes other elements to be pushed away from box
- If `width` not specified, box extends in inline direction to fill the space available in its container (in most cases fills entire container).
- `h1` & `p` use block as outer display type by default

**Inline Boxes (L/R)**
- Box does not break onto a new line
- `width`/`height` do not apply
- Top & bottom padding, margins, borders apply but do not cause other inline boxes to move away from the box
- L/R padding apply, will cause other inline boxes to move away from box
- `<a>`, `<span>`, `<em>`, `<strong>` use inline as outer display type by default

### **Inner display type**
... See flexbox

### **Std. vs alternative box model**
To turn on alternative model (common for devs):
```
.box {
  box-sizing: border-box;
}
```
Standard takes width/height as width/height of content box, while alternative takes width/height as literal (incl. padding, border, margin).

### **display:inline-block**
Item won't make new line, but respects both `width` & `height` 


**\+ Knowledge check:**

1. Order of box-model properties?
   1. padding
   2. border
   3. margin
2. `box-sizing' css property: turns on alternative model
3. Std.vs alt box model: Alternative counts all as size, std. counts content
4. margin to create space between two elements
5. padding to create space between contents and border
6. margin to create overlap
7. to use alt model: 
   ```
    .box {
        box-sizing: border-box;
    }
    ```
8. use `auto` value to centre automatically

<br>

## **Block and Inline**

**Divs & Spans**
- Div: Block-level, used as a container to group other elements.
- Span: Inline-level, used to group text & inline elements (ex: class="highlight")

[Default block/inline elements](https://www.w3schools.com/html/html_blocks.asp)

\+ Notes from margin & padding exercises:
- To quickly define TB/LR padding, use `padding: TBpx LRpx`
- To align text: `text-align`
- To align 'stacked' boxes, often must define `margin-top` & `margin-bottom` for 1st, `margin-bottom` for rest.

