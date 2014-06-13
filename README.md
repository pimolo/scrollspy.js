jquery.scrollspy.js
======================

### What's it ?

scrollspy.js is a plugin for jQuery that spy your scroll to dynamise your navbar very easily !

### Demo

See scrollSpy.js in action on [codepen](http://codepen.io/anon/pen/krqDj/) (OLD)

### How does it works ?

It adds a class 'active' on the right link of your menu when you scroll on its target.

### Usage

Define a CSS class shared by all the differents sections of your HTML. At the moment this class must be called 'section'...

Then, the effect applied on navbar's links is defined in a CSS class. By default, it's called "active" but you can change it in the parameters. More accurately, it styles the `<a>` element linked to the section which is in scolling.

Indicate the parent container of your all your links like this : (for exemple, <nav> here)

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

```javascript
$('nav').spy(params....)
```

Define the CSS class and a slow scroll like this :

```javascript
$(...).spy({ class: 'theClass', scroll: 'smooth' })
```

### Requirements

Needs jQuery

### Releases notes :

v0.1 : Works fine, but needs a specific markup (*cf.* [usage](https://github.com/pimolo/scrollspy.js#usage))
v1.0 : scrollspy.js is now a plugin !
v1.1 : you can active a scroll smooth fonctionality :)
