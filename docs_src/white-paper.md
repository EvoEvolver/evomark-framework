---
bibPath = "ref.bib"
title = "Evomark: marking language for collaborative content production"
---
--- {src:"math_config.yml"} ---

=== PaperHead ===

=== ContentTable ===

# What is Evomark?
Evomark is a marking language for content production. Evomark generalizes **Markdown** for better support of **reference** and **containers**, which is essential for **academic writing**. 
Evomark aims to become the top language for paper drafting. We hope it can help change the academic publishing media from .pdf file and A4 paper to webpage browser, which allows more interactive and intelligent display of content and easier communication between the authors and readers.

## Why not LaTeX?

In a very long term, people have used LaTeX for writing academic paper. LaTeX is an effort based on TeX to separate the concern on content and style and help the authors concentrate on content production rather than typesetting. 
However, as it heavily relies on the macro system of TeX and does not use the more modern solution like CSS, the grammar of LaTeX is not perfect and **most of the time the authors still need to deal with styles but their hand**. 
Also, the objective media of LaTeX is always .pdf or real paper, which assume **fixed size of document**. This means reading them on small screen maybe painful. In contrast, HTML-based output uses CSS and can be easily made responsive.
Another point why we should not continue using LaTeX or .pdf is the lack of interactivity. The output media determines LaTeX does not support animation and interactive diagram like ECharts [@li2018echarts].

## Why not Markdown?

Markdown is a great marking language, which produce HTML-based output and is widely used in software project documentation. 
The simplicity it provides in contrast to HTML make it very suitable for document or blog writing. 
However, it's strength can also be its drawback. 
Markdown lacks many properties academic writing usually requires like
=== List {title:"Requirements of academic writing"}
- **Caption** of figure, list and other components
- **Auto-labelling** of components
- Theorem, definition and other usually used **math environment**
- **Macros** used in math
- **Auto manifestation** of meta information like author list
- **Citation** and reference list
~~~~
Hi I'm a list!
===
Based on Markdown, we realized the above features in Evomark and make Evomark a desirable tool for academic drafting.  

# Features

## Containers and reference

Evomark aims to provide a Markdown-like easy experience for drafting as well as LaTeX-like experience of functionality.
The containers in Evomark provides very easy grammar for equations and figures. 
You can set a equation by just
===== Code
=== Equation {id:mc2}
E=mc^2
===
===== 
instead of
===== Code
\begin{equation}
  \label{mc2}
  E=mc^2
\end{equation}
=====
in LaTeX. The equation will be rendered as 
=== Equation {id:mc2}
E=mc^2
===
and you can cite [#mc2] everywhere in the document by `[#mc2]` instead of `Equ.~\ref{mc2}` or `\autoref{mc2}` in LaTeX. 
You can also draw a figure with caption by just
===== Code
=== Figure {src:"./Irena.jpg",id:"fig-irena"}
I am the caption of the figure. The above is Irena.
===
=====
and it will be rendered as in [#fig-irena].

=== Figure {src:"./Irena.jpg", id:"fig-irena", title:"Irene"} 
I am the caption of the figure. The above is Irena.
===

## Citation and reference list

Evomark uses `bibtex` for citation. You can include `bibtex` anywhere in the document by providing a key-value in the `---` config container as
==== Code
---
bibtex="./public/test.bib" // TOML inside
---
====
and then cite by `[@citeKey]` like `\cite{citeKey}` in LaTeX. This will produce a cite link the same as in LaTeX and we have already cited [@li2018echarts] above. You can draw a reference list everywhere by using
==== Code
=== CitationList ===
====
as
=== CitationList ===

## Paper heading
You can define the title and author in the `---` config container. Evomark supports `YAML`,`TOML` and relaxed-`JSON` for it. If not specified, the content is treated as `TOML`.
==== Code
--- {lang:"toml"}
title = "Evomark"
[[author]]
givenName = "Zi-Jian"
familyName = "Zhang"
affils = "Department of Computer Science, University of Toronto, Canada"
---
==== 
The headings can be draw by the following.
==== Code
=== Title ===
=== Author ===
=== Abstract
// content of abstract
===
====
As Evomark also provides abstract container, a usual heading of a paper draft may looks like

===== BoxQuote
=== Title ===
=== Author ===
=== Abstract
Evomark is a marking language for content production. Evomark generalizes Markdown for better support of reference and containers, which is essential for academic writing. 

Evomark aims to become the first language for paper drafting. We hope it can help change the academic publishing media from .pdf file and A4 paper to webpage browser, which allows more interactive and intelligent display of content and easier communication between the authors and readers. 
===
=====

# Collaborative academic production

## Open-source academic production
Making public doesn't solely make an open source project. Open source requires people to develop something and benefit from something together. Tools that facilitate collaboration is essential to an open source project. Here is some function that is required for collaborative development.
=== List {title:"Essentials to collaboration"}
- Project website with good source browser and contribution/reading instruction
- Discussion space (like an issue system) where people can communicate
- Contributing system (like fork and pull request system)
- Open source licence which define the copy-rights 
===

Nowadays, academic publishing is far from collaborative.

=== List {title:"Current collaborative academic development"} 
- Communication about a paper is not public on internet.
===

## WYSIWYG vs. Plain text
=== List {title:"Merits of Plain text"}
- (Most important) It is easy to compute the difference of two files in plain text. A good `diff` tool can extremely help the project holder review contributions.
- Developing editor/plugin for plain text form is much easier
===

## Roadmap and Future