--- {src:"project_env.toml"} ---
---
title = "Grammars special in Evomark"
---

=== Title ===

========= SlidesBox

# Evomark grammars

=== Voice{clk:""}
In this slides-show, we will introduce some grammars that are used in Evomark to extend Markdown. The Evomark grammars can be simply categorized as two parts. The container and the inline command.
===

- [$clk]Container
- [$clk](then) Inline command

--- Slide 
section = "Containers"
---

# Container


==== Code
=== Equation {id:"equ:mc2", title:"Mass and Energy"}
E=mc^2
===
====


- [$clk]Evomark use **containers** to efficiently organize a document.
    === Voice
    A key feature of Evomark is its support to a lot of useful containers. What is wrapped in a container can be transformed into a math formula, a box of theorem, a figure and even the voice you are hearing.
    ===
- [$clk]A container starts from more than 3 "=" signs.
    === Voice
    Unlike LaTeX which uses "begin" and "end" to open and close an environment, Evomark uses equal signs to open or close a container. A container can be opened by 3 or more equal signs. The type of the container should be put after the equal signs of this opener.
    ===
- [$clk]A container ends by "=" signs greater or equal to its opener.
    === Voice
    To close a container, one just need to input a series of equal signs that is at least as long as the container opener.
    ===
- [$clk]One can pass parameters to a container.
    === Voice
    To pass parameters to a container, one need to write a key-value pair dictionary in json style after the type of the  container. Evomark also accepts simplified json so that you don't need to put quotes around the keys.
    ===

--- Slide
title = "Nested container" 
---
# Nested container
===== Code
==== Theorem
[#mc2] is true.
=== Equation {id:"mc2", title:"Mass and Energy"}
E=mc^2
===
====
=====
=== Voice
When you want to put containers in a container, you need to make sure the child containers do not have a opener longer that its parent.
===
==== Theorem
[#mc2] is true.
=== Equation {id:"mc2", title:"Mass and Energy"}
E=mc^2
===
====
--- Slide
title = "Fenced container" 
---
# Container with fence
===== Code
==== List
- Open the door of the fridge.
- Put the elephant in it.
- Close the door.
~~~~
How to put an elephant into a fridge.
====
=====
==== Voice{clk:""}
There are some containers which allow you to use tilde signs to divide them. In that case, the number of tilde signs should be as many as the equal signs in the opener. To explain why we need fences, in the example code, you write the main content of the container first and then divide it to put the caption. Isn't is more intuitive than using a new environment called "caption"? 
====
==== List
- Open the door of the fridge.
- Put the elephant in it.
- Close the door.
~~~~
How to put an elephant into a fridge.
====

--- Slide
title = "Examples"
---

# Examples of Containers
=== Voice {clk:""}
We prepared a lot of examples to help you learn how to use the containers defined in Evomark. You can find them out in the document below the slides.
===

--- Slide 
title = "Config"
---

# Configuration container

==== Code
---
// TOML inside
title = "Grammars special in Evomark"
---
--- {src:"authors.toml"} ---
====

=========

# Container examples {id:"container-examples"}

## Figure

==== Code
=== Figure {src:"Irena.jpg"}
This is Irena.
===
====

=== Figure {src:"Irena.jpg"}
This is Irena.
===

##  Proof

==== Code
=== Proof
We know that $1+2=3$ and $2+1=3$. Therefore $1+2=2+1$.
===
====

=== Proof
We know that $1+2=3$ and $2+1=3$. Therefore $1+2=2+1$.
===

## Code & Styled Box

===== Code
==== Code
=== Box {style:"text-align:center;background-color:green;color:red;"}
I'm a ugly box produced by the code above.
===
====
=====
==== Code
=== Box {style:"text-align:center;background-color:green;color:red;"}
I'm a ugly box produced by the code above.
===
====
=== Box {style:"text-align:center;background-color:green;color:red;"}
I'm a ugly box produced by the code above.
===