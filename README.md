# miu-js-dom-library
MIU DOM Library is a small set of JavaScript functions usable to manipulate the DOM. Actually, the accessible functions are:

## addClass
**Usage:** 
Add a new class value to a DOM element.

**Example:**

    // Adding the class activated to an element
    var elem = document.querySelector('#my-element');
    miuDomLib.addClass(elem, 'activated');

## remClass
**Usage:** 
Remove a class value on a given DOM element

**Example:**

    // Removing the class activated to an element
    var elem = document.querySelector('#my-element');
    miuDomLib.remClass(elem, 'activated');

## hasClass
**Usage:** 
Check whether or not a given DOM element has a particular class value

**Example:**

    var elem = document.querySelector('#my-element');
    if(miuDomLib.hasClass(elem, 'activated')){
	    // The element counts activated in its class values
	}

***This documentation is still being completed.***
