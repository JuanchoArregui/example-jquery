/* IronHacker Class */

function IronHacker(domElement) {
  this.domElement = domElement;
}

IronHacker.prototype.doMagic = function() {
  this.domElement.style.backgroundColor = "red";
};

IronHacker.prototype.onClick = function(callback) {
  this.domElement.addEventListener("click", callback);
};

/* ironhack function */

function ironhack(selector) {
  var domElem = document.querySelector(selector);

  return new IronHacker(domElem);
}

/* WTF? */

var $ = ironhack;
