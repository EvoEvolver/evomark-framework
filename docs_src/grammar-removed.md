--- {src:"project_env.toml"} ---
---
title = "Grammars removed from Markdown"
---

=== Title ===

Evomark only adopt some of the grammars of Markdown. Here we list some grammars that is invalid in Evomark. Most of them are replaced by containers in Evomark.

=== ContentTable ===

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