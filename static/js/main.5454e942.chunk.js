(this["webpackJsonpbit-adder"]=this["webpackJsonpbit-adder"]||[]).push([[0],{12:function(e,t,n){e.exports=n(35)},3:function(e,t,n){e.exports={bit:"App_bit__1ixWz"}},34:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),l=n(9),c=n.n(l),u=n(11),i=n(5),m=n(10),s=n.n(m);function o(e){var t=e.bits,n=e.cssCell,r=e.heading,l=e.numEmptyLeadingCells,c=void 0===l?0:l,u=e.renderBit,i=t.slice().reverse();return a.a.createElement("tr",null,a.a.createElement("th",null,r),s()(c).map((function(e){return a.a.createElement("td",{className:n,key:e})})),i.map((function(e,r){var l=t.length-1-r;return a.a.createElement("td",{className:n,key:r},u(e,l))})),a.a.createElement("td",{className:n},function(e){var t=e.slice().reverse().join("");return parseInt(t,2)}(t)))}function E(e,t){return e&&t?1:0}function h(e){return e?0:1}function d(e,t){return h(E(e,t))}function p(e,t){return e||t?1:0}function f(e,t){return{sum:(n=e,r=t,d(d(n,d(n,r)),d(d(n,r),r))),carry:E(e,t)};var n,r}function b(e,t,n){var r=f(e,t),a=f(n,r.sum);return{sum:a.sum,carry:p(r.carry,a.carry)}}var y=n(3),g=n.n(y);function v(e){return function(t){var n=Object(u.a)(t);return n[e]=h(n[e]),n}}n(34);c.a.render(a.a.createElement((function(){var e=Object(r.useState)([0,0,0,0,0,0,0,0]),t=Object(i.a)(e,2),n=t[0],l=t[1],c=Object(r.useState)([0,0,0,0,0,0,0,0]),u=Object(i.a)(c,2),m=u[0],s=u[1],E=function(e,t){for(var n=[],r=0,a=0;a<e.length;a++){var l=b(e[a],t[a],r);n.push(l.sum),r=l.carry}return n.push(r),n}(n,m);return a.a.createElement("table",null,a.a.createElement("caption",null,"Binary adding machine"),a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null),a.a.createElement("th",null,"8"),a.a.createElement("th",null,"7"),a.a.createElement("th",null,"6"),a.a.createElement("th",null,"5"),a.a.createElement("th",null,"4"),a.a.createElement("th",null,"3"),a.a.createElement("th",null,"2"),a.a.createElement("th",null,"1"),a.a.createElement("th",null,"0"),a.a.createElement("th",null,"Decimal representation"))),a.a.createElement("tbody",null,a.a.createElement(o,{bits:n,cssCell:g.a.bit,heading:"Input A",numEmptyLeadingCells:1,renderBit:function(e,t){return a.a.createElement("input",{checked:!!e,onChange:function(){return l(v(t))},type:"checkbox"})}}),a.a.createElement(o,{bits:m,cssCell:g.a.bit,heading:"Input B",numEmptyLeadingCells:1,renderBit:function(e,t){return a.a.createElement("input",{checked:!!e,onChange:function(){return s(v(t))},type:"checkbox"})}}),a.a.createElement(o,{bits:E,cssCell:g.a.bit,heading:"Output",numEmptyLeadingCells:0,renderBit:function(e){return e?"\u2705":null}})))})),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.5454e942.chunk.js.map