--- {src:"project_env.toml"} ---
---
title = "Writing slides by Evomark"
prevPage = "grammar-evomark"
---

# Making slides in Evomark

To start making slides in Evomark, you just need to begin with a `SlidesBox` container.
==> Code
========> SlidesBox
The contents
========|
==|

You can begin the container by a plain opener without specify its direction. However, we strongly suggest not to do so as a SlidesBox container will have many children containers.

To make a new slide, you just need to insert `--- Slide ---` to the middle of the SlidesBox. 
You can also put config of the new slide by using
==> Code
--- Slide
section = "Section 1"
title = ""
---
==|

A usual slides in Evomark will be like

==> Code
========> SlidesBox
--- Slide 
section = "Section 1"
title = "Title 1"
---

# I'm a place holder.

--- Slide ---

# I'm also a place holder.

- Hello
- 你好
- おはよう！

========|
==|

The effect of the above code is at below.

========> SlidesBox
--- Slide 
section = "Section 1"
title = "Title 1"
---

# I'm a place holder.

--- Slide ---

# I'm also a place holder.

- Hello
- 你好
- おはよう！

========|

# Animation in a slide

It is usually to show the content of a slide step by step in order to control the attention of the listeners. In Evomark, you can add an additional attribute `clk:""` (means click) to a container to achieve this.

===>
=== Box {clk:""}
I will be shown after a click.
===
=== Box {clk:""}
I will be shown after two clicks in total.
===
=== Box {clk:"then"}
I will be shown after two clicks in total.
===
===|

Also, as you can see in the above example, you can also add `clk:"then"` to the container. This will make the container show itself together with the last component with `clk:""`. We show the effect below.

========> SlidesBox
=== Box {clk:""}
I will be shown after a click.
===
=== Box {clk:""}
I will be shown after two clicks in total.
===
=== Box {clk:"then"}
I will be shown after two clicks in total.
===
========|

For inline contents like a paragraph, you can use inline command `[$clk]` (equivalent to `clk:""`) or `[$clk](then)` to achieve the same effect. You just need to add them in the beginning of the inline content. You will see how can we use this in the next section.

# Adding voices

You can add voices in the slides by using the `Voice` container. The `Voice` containers by default are with attribute `clk:"then"`. Here, we will show how can you create a bullet point presentation in Evomark.

===> Code
# Bullet points
- [$clk]Point 1
    === Voice
    Hi everyone. You can see point 1 now.
    ===
- [$clk]Point 2
    === Voice
    Hey, this is point 2!
    ===
[$clk](then) I'm a hidden paragraph!
===|

===> SlidesBox
# Bullet points
- [$clk]Point 1
    === Voice
    Hi everyone. You can see point 1 now.
    ===
- [$clk]Point 2
    === Voice
    Hey, this is point 2!
    ===
[$clk](then) I'm a hidden paragraph!
===|

# Columns

You can divide your slides into columns by `Cols` as below.

====> Code
=====> SlidesBox
=====> Cols {widths:[1,2,1]}
Col1
~~~~~~
=== Box {style:"background-color:red;"}
Col2
===
~~~~~~
Col2
======|
======|
====|

Here, we specified the widths of the columns. If the attribute `widths` is left blank, equally spaced columns will be produced. The effect of the above code is shown below.

=====> SlidesBox
=====> Cols {widths:[1,2,1]}
Col1
~~~~~~
=== Box {style:"background-color:red;"}
Col2
===
~~~~~~
Col2
======|
======|

# Multi-language support

You can set the voice language of a slides by opening it like
======> Code
=====> SlidesBox {voiceLang: "Japanese"}
======|

See more in [#@voice-language].