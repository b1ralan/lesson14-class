'use strict';

function DomElement(selector, height, width, bg, fontSize) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;
}

DomElement.prototype.create = function () {
  if (this.selector[0] === '.') {
    this.elem = document.createElement('div');
    this.elem.classList.add(this.selector.slice(1));
  }
  if (this.selector[0] === '#') {
    this.elem = document.createElement('p');
    this.elem.id = this.selector.slice(1);
  }
  this.elem.style.height = this.height;
  this.elem.style.width = this.width;
  this.elem.style.background = this.bg;
  this.elem.style.fontSize = this.fontSize;
  document.body.append(this.elem);
};

DomElement.prototype.insertText = function (text) {
  this.elem.innerText = text;
};

let elem1 = new DomElement('.block', '130px', '120px', 'red', '18px');
let elem2 = new DomElement('#best', '120px', '130px', 'green', '22px');

elem2.create();
elem1.create();
elem1.insertText('text1');
elem2.insertText('text2');
