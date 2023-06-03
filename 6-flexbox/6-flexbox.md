# Flexbox

\+ Note: Should also be aware of (learn) [CSS grid](https://developer.mozilla.org/en-US/docs/Web/CSS/grid) - newer than flex with similar use cases

## **Intro to flexbox**
A way to arrange items into rows or columns. Items 'flex' (grow or shrink) based on rules.

### **Flex containers & flex items**
- Flex container: Any element containing `display: flex` (changes mode from flow layout to flex layout)
- Flex items: Any element that lives inside a flex container

Since flex items themselves can be flex containers, allows for complex layouts.

[Flexbox tutorial](https://internetingishard.netlify.app/html-and-css/flexbox/index.html)

<br>

## **Growing & shrinking**

### **Flex shorthand**
`flex` declaration is shorthand for 3 properties that affect how flex items siZe themselves within a container:
- `flex-grow`
- `flex-shrink`
- `flex-basis`

Ex: `flex: 1` on children of container is shorthand for `flex: 1 1 0`

\+ Reminder: A comma-separated list selects multiple classes

**Flex-grow:**
Single item used as 'growth factor', i.e. `flex: 2` makes item grow twice the size of others

**Flex-shrink:** Only applies when size of all flex items larger than parent container; if you don't want an item to shrink, specify `flex-shrink: 0`

**Flex-basis:** Sets initial size of flex item. Using `flex-basis: auto` tells item to check for a width declaration, preserving width.

\+ Note: `flex: auto` = `flex: 1 1 auto`

### **Axes**
Can work horizontally (`row`) or vertically (`column`):  
```
.flex-container {
    flex-direction: row/column;
}
```

\+ [Flexbox cheat sheet](https://flexbox.malven.co)  
\+ [Flexbox docs](https://www.w3.org/TR/css-flexbox-1/#flex-common)  
\+ [Flexbox MDN docs](https://developer.mozilla.org/en-US/docs/Web/CSS/flex)

### **Alignment**

- `justify-content: value` aligns on primary axis  
  \+ Possible values:
  - flex-start: Start of main axis (Left/up by default)
  - flex-end: End of main axis (Right/down by default)
  - center: ...
  - space-around: Each item has equal space on LHS/RHS, additive (twice as much between as on edges)
  - space-between: Each item has space between it and next item
  - space-evenly: Equal space on LHS/RHS regardless of between or edge
- `align-items: value` aligns on cross axis  
  \+ Possible values:
  - `flex-start`: ...
  - `flex-end`: ...
  - `center`: ...
  - `stretch`: ...
  - `baseline`: aligns at bottom of each item  

  \+ `align-self': Same values as align-items, safe works on single child instead of whole container.

\+ Possible values:
- flex-start: Start of main axis (Left/up by default)
- flex-end: End of main axis (Right/down by default)
- center: ...
- space-around: Each item has equal space on LHS/RHS, additive (twice as much between as on edges)
- space-between: Each item has space between it and next item
- space-evenly: Equal space on LHS/RHS regardless of between or edge

Note that when `flex-direction` is changed, so is the orientation of main/cross axes (i.e. Changing from default to `flex-direction: column` results in `justify-content` aligning vertically, `align-items' horizontally).

\+ `gap: Xpx` makes a gap of x pixels between items

[Interactive flexbox guide](https://www.joshwcomeau.com/css/interactive-guide-to-flexbox/  
)  

\+ **Note:** Primary axis distributes group, while cross axis distributes each item individually. (So, the primary axis 'skewers' all items while the secondary is parallel to them)

\+ **Note:** flex causes 'hard constraints' in layout mode to act as 'recommendations', i.e. `width: 2000px;` will create a huge item in layout, but will be resized/wrap in flex.

\+ **Note:** `flex-basis` acts as width for `flex-direction:row`, as height for `flex-direction:column`; generic size pegged to primary axis.

\+ **Note:** `flex-grow: val` sets the *ratio* of growth when items smaller than container, i.e. values of 1 and 2 means that one item takes up 1/3rd, other 2/3rds. `shrink` is 'inverse', setting the ratio of how space is removed when items bigger than container. 

\+ **Note:** `min-width` must be set manually else `flex-shrink` will overflow  since doesn't override `min-width`

\+ **Note: In flex, `margin-left` maxes out left space,  `margin-right` maxes out right space. If both auto, acts as `margin:auto`.

**Wrapping:**  
`flex-wrap:wrap` makes it so that items don't shrink past hypothetical size.

\+ [Flexbox cheat-sheet/visual guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)  
\+ [MDN flexbox use cases](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Typical_Use_Cases_of_Flexbox)  
\+ 