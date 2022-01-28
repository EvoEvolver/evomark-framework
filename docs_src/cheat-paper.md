---
title = "Evomark cheat paper"
---

=== Title ===

=== ContentTable ===

## Markdowns

More detailed guide for Markdown grammars in Evomark is [here](grammar-markdown).

### Heading
===> Code
# Heading {id:"some-id"}
===|

### List
===> Code
- Item 1
- Item 2
1. Item 1
1. Item 2
===|

### Math
===> Code
$inline-math$
$$
Math without indexing
$$
=== Equation
Indexed math container
===
===|

### Inline decoration
=== Code
`Code`
**Strong**
*Italic*
===

## Container

More detailed guide for container, config and inline commands is [here](grammar-evomark).

What a general container looks like
===> Code
=== Container'sName {container's attributes}
Container's content
===
===|

At least **3** characters are needed. The closer should be as long as its opener.

### Common containers

#### Theorem, Figure, Equation

===> Code
=== Theorem {id:"the-id", title:"the-title"}
Some content
===
===|

===> Code
=== Figure {id:"the-id",title:"the-title",src:"./the/path"}
The caption
===
===|

===> Code
=== Equation {id:"the-id",title:"the-title"}
E=mc^2
===
===|

#### Code, Table

You can use `===>` and `===|` to open and close a container.

===> Code
==> Code {lang:"javascript"}
function helloWorld(){
    console.log("hello world!")
}
==|
===|


=====> Code
==== Table
[[item]]
Name = "Mike"
Subject = "Math"
Grade = "99"
[[item]]
Name = "Sarah"
Subject = "English"
Grade = "100"
~~~~
You can put the caption after the fence
====

==== Table {src:"some.file.toml"} ====

======|




### One line containers
===> Code
=== Title ===
=== Image {src:"", type:"normal/wide/narrow"} ===
=== CitationList ===
=== PaperHead ===
=== ContentTable ===
===|


## Inline command

Inline commands must begin with brackets.

===> Code
[#referenceId]
[@citationKey]
===|

===> Code
[$someCommand]()
[$someCommand]{}
[$someCommand](){}
===|

`()` accepts plain text and `{}` accepts a JSON key-value pairs. You can go to [#slides-animation] for an example of using `[]()`.

## Config

===> Code
---
title = "You config in TOML"
---
===|

===> Code
--- {lang:"yaml"}
You config in YAML
---
===|

### Config on a project

You can put the following codes in the `project_env.toml` file in your project root. It will automatically being imported.

===> Code {lang:"toml"}
chatUrl = "Your link to the group channel"
gitRepoUrl = "Your link to the Git repo"
linearize = ["link-to-page1","link-to-page2","link-to-page3"]
bibPath = "path/to/your/bib-file"
===|


### Config on every page
===> Code {lang:"toml"}
title = "Your title"
prevPage = "your-page-path"
nextPage.title = "Google"
nextPage.link = "https://www.google.com"
===|

### Authorship
#### Define affiliations
===> Code {lang:"toml"}
[affils]
uoft = "Department of Computer Science, University of Toronto, Canada"
someUniversity = "The University's Name"
===|
#### Define authors
===> Code {lang:"toml"}
[[author]]
givenName = "Foo"
familyName = "Bar"
affil = ["uoft","someUniversity"]
note = "aFootNote"
[[author]]
givenName = "Foo Jr."
familyName = "Bar"
affil = ["someUniversity"]
note = "email"
===|
#### Define annotation
===> Code {lang:"toml"}
[authorNotes]
aFootNote = "These authors contributed not equal"
email = "zijian.academic@outlook.com"
===|

You can use `=== PaperHead ===` to show the authorship configured. You can put the authorship in a page or define it globally in `project_env.toml`.

### Math macros

As the LaTeX math contents usually contains the symbol `\`, which needed to be escaped by `\\` in YAML and JSON, we suggest only use TOML for it. In TOML, you can use '''contents ''' to write literal contents. **''' is three single quotes**.

You can write your math macros as
===> Code {lang:"toml"}
[mathMacros]
ket = '''|#1\rangle'''
bra = '''\langle #1|'''
trace = '''\operatorname{Tr}'''
expectv = '''\langle #1\rangle'''
===|

You may include them in a `math_macros.toml` file in the project root and then import them by `--- {src:"math_macros.toml"} ---`.

## Slides

More detailed guide for slides is [here](slides).

### Simplest slides

===> Code
=======> SlidesBox

# Slide 1

--- Slide ---

# Slide 2

--- Slide
title = ""
section = ""
---

# Slide 3

=======|
===|

### Slides animation {id:"slides-animation"}

===> Code
=======> SlidesBox

=== Box {clk:""}
Show first
===

=== Box {clk:"then"}
Show first
===

[$clk](then) Show first

- [$clk] Show second
- [$clk] Show third

========|
===|

### Voices

===> Code
=======> SlidesBox {voiceLang:"default-english/chinese/japanese"}

# A heading {clk:""}
=== Voice
I will be played after the heading shows
====

========|
===|