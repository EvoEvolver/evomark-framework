--- {src:"project_env.toml"} ---
---
title = "Grammars from Markdown"
---

=== Title ===

Here we list the Markdown grammars that are used in Evomark. You can also see the [#pre:md] for a vivid presentation.

# Headings

=== Code{clk:""}
# Section
## Subsection
###Subsubsection (Bad example: A space must be put after #)
===

==== BoxQuote
# Section's title
## Subsection's title
###Subsubsection (Bad example: A space must be put after #)
====

# Math
=== Code{clk:""}
If $a$ and $b$ are real numbers, $a+b=b+a$.
$$
a+b=b+1
$$
===
==== BoxQuote
If $a$ and $b$ are real numbers, $a+b=b+a$.
$$
a+b=b+1
$$
====

# Bullet-points

=== Code{clk:""}
- First, $a+b = 1$.
- Second, $a-b = 2$.
- What is $a$ and $b$?
===

=== Code{clk:"then"}
1. First, $a+b = 1$.
1. Second, $a-b = 2$.
1. What is $a$ and $b$?
===
==== BoxQuote
- First, $a+b = 1$.
- Second, $a-b = 2$.
- What is $a$ and $b$?

1. First, $a+b = 1$.
1. Second, $a-b = 2$.
1. What is $a$ and $b$?
====

# Inline-decoration

=== Code
*I'm italicized!*
**I'm bold!**
`I'm quoted`
===

=== BoxQuote
*I'm italicized!*

**I'm bold!**

`I'm quoted`
===

# What's next

- [Evomark grammars](grammar-evomark)
- [Removed Markdown grammars](#grammar-removed)

======== SlidesBox {id:"pre:md"}

# Markdown grammars in Evomark

=== Voice
Here, we will introduce you the markdown grammars that are used in Evomark.
===

--- Slide 
section = "Basic grammar"
title = "Heading"
---

# Headings

=== Code{clk:""}
# Section
## Subsection
###Subsubsection (Bad example: A space must be put after #)
===
=== Voice
Here is how you write headings in Evomark. It is a philosophy of Markdown and Evomark that we use symbols rather than letters to identify elements of the document. We believe this will help the writer identify the bare-content in an Evomark source code.
===
=== Box{clk:"then"}
# Section's title
## Subsection's title
###Subsubsection (Bad example: A space must be put after #)
===

--- Slide 
title = "Math"
---

# Math
=== Code{clk:""}
If $a$ and $b$ are real numbers, $a+b=b+a$.
$$
a+b=b+1
$$
===
=== Voice
Here is how you write equations in Evomark. It is the same as that in LaTeX. In Evomark, you can easily use math macros just as in LaTeX. We will introduce this point in a latter tutorial.
===
=== Box{clk:"then"}
If $a$ and $b$ are real numbers, $a+b=b+a$.
$$
a+b=b+1
$$
===

--- Slide 
title = "Bullet-points"
---
# Bullet-points
==== Cols
=== Code{clk:""}
- First, $a+b = 1$.
- Second, $a-b = 2$.
- What is $a$ and $b$?
===
~~~~
=== Code{clk:"then"}
1. First, $a+b = 1$.
1. Second, $a-b = 2$.
1. What is $a$ and $b$?
===
====
=== Voice
Here is how you write "bullet-points" and "enumerate" in Evomark. It is much easier than that in LaTeX, isn't it?
===
==== Cols
=== Box{clk:"then"}
- First, $a+b = 1$.
- Second, $a-b = 2$.
- What is $a$ and $b$?
===
~~~~
=== Box{clk:"then"}
1. First, $a+b = 1$.
1. Second, $a-b = 2$.
1. What is $a$ and $b$?
===
====
--- Slide 
title = "Inline-decoration"
---

# Inline-decoration

=== Code
*I'm italicized!*
**I'm bold!**
`I'm quoted`
===

=== Voice {clk:""}
You can wrap a fragment of texts by special signs shown here to make texts stylish. 
===

=== Box {clk:"then", style:"text-align:center;"}
*I'm italicized!*

**I'm bold!**

`I'm quoted`
===

--- Slide ---

# What's next

- Not all Markdown grammars are used in Evomark. 
    - [$clk] [Removed Markdown grammars](#grammar-removed)
    === Voice
    So far, you have learned all the essential markdown grammars in Evomark. However, you should notice that not all markdown grammars are used in Evomark. Here, we provide a document for it.
    ===
- [$clk]Let's dive into Evomark! 
    - [$clk](then) [Evomark grammars](grammar-evomark)
    === Voice
    For next, you can start learning the special grammars of Evomark now. See you there!
    ===

========


# Removed Markdown grammars {id:"grammar-removed"}


Evomark only adopt some of the grammars of Markdown. Here we list some grammars that is invalid in Evomark. Most of them are replaced by containers in Evomark.

# Code environment

=== Code {lang:"markdown"}
'''javascript
Code evironment by ''' is not supported.
'''
===

Please use Code container instead

==== Code
=== Code {lang:"javascript"}
function hello(){
    console.log("Hello world");
}
===
====

=== Code {lang:"javascript"}
function hello(){
    console.log("Hello world");
}
===

Also, unlike Markdown, Indent will also not produce a code environment in Evomark.

# Quote environment

=== Code {lang:"markdown"}
> Quote by ">" is not supported.
===

==== Code
=== Quote
Please use Quote container instead.
===
====

# Images

==== Code {lang:"markdown"}
![Image import such as this is not supported](Irena.jpg)
====

==== Code
=== Figure {src:"Irena.jpg"}
Caption texts: Please use Figure container for figures with caption 
and use Image container for figures without caption.
===

=== Image {src:"Irena.jpg"} ===

====

=== Figure {src:"Irena.jpg"}
Caption texts: Please use Figure container for figures with caption and use Image container for figures without caption.
===

=== Image {src:"Irena.jpg"} ===