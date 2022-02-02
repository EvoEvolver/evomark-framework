# Evomark Framework

<div style="margin:auto;">

![Evomark](./docs_src/evomark.svg)

<p style="text-align:center;">
<a href="http://www.evoevolver.org/install">Install</a> | <a href="http://www.evoevolver.org">Homepage</a> | <a href="http://www.evoevolver.org/introduction">Presentations</a>
</p>

</div>

# Features

- **Supports what LaTeX supports**
    - Citation, reference, auto-indexing, theorems, math-macros, title&authors, table of contents. 
    - Everything you can imagine in LaTeX is included in Evomark.
- **Automatic presentation tools built-in**
    - You can make not only slides, but automatic presentation which can speak by Evomark. 
    - Every single sentences in the presentation can be changed by modify the source code.
- **Built on Modern browser eco-system**
    - Making next generation of academic contents with interactive components, sematic HTML tags and even blockchain.

# Ideas

- **A collaborative academia makes more possibilities**
    - Making knowledge suit the cognition system of human-beings is not easier than making awesome softwares. However, while softwares can gather thousands of people to together develop it, textbooks/online courses usually have authors less than 10.
    - Evomark aims to change this point by providing a marking language that is powerful and easy to read and review, so that contributors' commits can be efficiently reviewed by reviewers of git repos and then being adopted.
- **Media of academic contents should not be TeX and PDF**
    - TeX focuses more on typesetting but not record of contents and tends to mix up style and contents.
    - HTML is much easier to be analyzed by computer programs. Using HTML to convey academic contents can make large scale automatic analyze of academic contents easier. This point will become more and more important with the development of natural language processing technologies.
    - HTML on modern browsers can be made responsive, so that people can easily read it on small screen devices.



## Discuss

Interested? Meet us on
[![Gitter](https://badges.gitter.im/EvoEvolver/community.svg)](https://gitter.im/EvoEvolver/community?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge) !

## Install

See [Evomark Install](http://www.evoevolver.org/install) for installation.

## Project structure

Evomark framework contains the following parts:

1. [evomark-it](https://github.com/EvoEvolver/Evomark-it): The parser for the Evomark marking language, which shares a lot grammar with markdown. The parser is build based on [markdown-it](https://github.com/markdown-it/markdown-it). 
1. evomark-loader: A small development server which detect the change of Evomark source files and compile them in real-time. The compiled vue-based Evomark intermediate representation (Evomark-ir) will be sent to a front-end framework to be presented. So far, 
    - We have developed
        1. [evomarked-nuxt](https://github.com/EvoEvolver/Evomarked-nuxt): a framework based on Nuxt3 for presenting the Evomark-ir in an organized website.
    - We are planing to develop
        1. evomarked-latex: a framework for organize the Evomark-it in order to produce .pdf files.
        2. latex2Evomark: a translator to translate LaTeX codes into Evomark