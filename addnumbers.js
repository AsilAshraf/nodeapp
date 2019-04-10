const mymodule=require('./addmodule');
var x=25;
var y=40;
var z=mymodule.addNum(x,y);
var a=mymodule.subnum(x,y);
var c=mymodule.multi(x,y);
console.log(a);
console.log(z);
console.log(c);