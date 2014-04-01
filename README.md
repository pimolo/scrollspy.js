scrollSpy.js by pimolo
======================

### What's it ?

ScrollSpy.js is a plugin for jQuery that spy your scroll to dynamise your navbar very easily !

### Demo

See scrollSpy.js in action on [codepen](http://codepen.io/anon/pen/krqDj/)

### How does it works ?

It adds a class 'active' on the right link of your menu when you scroll on its target.

### Usage

Define a CSS class shared by all the differents sections of your HTML. At the moment this class must be called 'section'

The 'active' class can contain any styles you want. It styles the `<a>` tag linked to the section which is in scolling.

Your menu has to be a `<nav>`, which contains an `<ul>` which contains `<li>`s with a `<a>` for each. (recommended by the standards of HTML5)

```html
<nav>
  <ul>
    <li><a href="#home">Home</a></li>
    <li><a href="#text">Some text</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
</nav>
.....
<div id="home" class="section">.....</div>
<div id="text" class="section">.....</div>
<div id="contact" class="section">.....</div>
```

### Requirements

Needs jQuery

### Releases :

v1.0 : Works fine, but needs a specific markup (*cf.* [usage](https://github.com/pimolo/scrollspy.js#usage))
