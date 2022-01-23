--- {src:"project_env.toml"} ---
---
title = "Grammars from Markdown"
---

=== Title ===

======== SlidesBox

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
    - [Removed Markdown grammars](grammar-removed)
    === Voice {clk:""}
    So far, you have learned all the essential markdown grammars in Evomark. However, you should notice that not all markdown grammars are used in Evomark. Here, we provide a document for it.
    ===
- [$clk]Let's dive into Evomark! 
    - [$clk](then) [Evomark grammars](grammar-evomark)
    === Voice
    For next, you can start learning the special grammars of Evomark now. See you there!
    ===

========