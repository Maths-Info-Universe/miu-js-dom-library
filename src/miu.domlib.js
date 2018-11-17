/**
 *	Some reusable functions
**/

function miuDomLibFn () {
	/* A simple function to add a new class value to an elt */
	this.addClass = function(elt, newClass) {
		var myArr = elt.className.split(' ');
		if (myArr.indexOf(newClass) == -1) {
			elt.className += ' ' + newClass;
		}
	};

	this.hasClass = function(elt, classToCheck) {
		if(!elt || !elt.className)
			return false;
		var myArr = elt.className.split(' ');
		return myArr.indexOf(classToCheck) != -1;
	};

	this.remClass = function(elt, classToRem) {
		var myArr = elt.className.split(' '),
			i = 0, newClassName = '';
		for(i = 0; i < myArr.length; i++){
			if(myArr[i] !== classToRem){
				newClassName += myArr[i] + ' ';
			}
		}
		elt.className = newClassName.trim();
	};

	/* A simple function to wrap all innerHTML of an elt into another elt */
	this.wrap = function(toWrPrt, wr) {
		wr.innerHTML = toWrPrt.innerHTML;
		toWrPrt.innerHTML = '';
		toWrPrt.appendChild(wr);
	};

	this.getStyleVal = function(elt, p) {
		var value = window.getComputedStyle(elt).getPropertyValue(p);
		return parseFloat(value.substring(0, value.length - 2), 10);
	};
	
	this.getClr = function() {
		var clr = document.createElement('div');
		this.addClass(clr, 'miu-clr');
		clr.style.clear = 'both';
		return clr;
	};
	
	this.getGap = function(width, height) {
		var gap = document.createElement('div');
		this.addClass(gap, 'miu-gap');
		gap.style.width = (width == -1) ? 'auto' : width + 'px';
		gap.style.height = (height == -1) ? 'auto' : height + 'px';
		gap.style.marginTop = '0px';
		gap.style.marginBottom = '0px';
		gap.style.marginLeft = '0px';
		gap.style.marginRight = '0px';
		return gap;
	};

	this.addClr = function(elt) {
		var clr = this.getClr();
		elt.appendChild(clr);
	};
	
	this.addGap = function(elt, width, height) {
		var gap = this.getGap(width, height);
		elt.appendChild(gap);
	};
	
	this.remChildsWithClass = function(prt, className) {
		var childs = prt.childNodes,
			i = 0;
		for(i = 0; i < childs.length; i++){
			var child = childs[i];
			if(this.hasClass(child, className)){
				prt.removeChild(child);
			}
		}
	};
}
var miuDomLib = new miuDomLibFn;