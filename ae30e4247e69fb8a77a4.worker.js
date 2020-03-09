!function(t){var r={};function e(n){if(r[n])return r[n].exports;var a=r[n]={i:n,l:!1,exports:{}};return t[n].call(a.exports,a,a.exports,e),a.l=!0,a.exports}e.m=t,e.c=r,e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:n})},e.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,r){if(1&r&&(t=e(t)),8&r)return t;if(4&r&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(e.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&r&&"string"!=typeof t)for(var a in t)e.d(n,a,function(r){return t[r]}.bind(null,a));return n},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},e.p="./",e(e.s=6)}([function(t,r,e){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.sum_unsafe=function(t,r){var e={};r.forEach((function(t){e[t]=0}));for(var n=function(n,a){r.forEach((function(r){e[r]+=t[n][r]}))},a=0,i=t.length;a<i;a++)n(a);return e},r.sum=function(t,r){var e={};r.forEach((function(t){e[t]=0}));for(var n=function(n,a){r.forEach((function(r){e[r]+=Number(t[n][r])||0}))},a=0,i=t.length;a<i;a++)n(a);return e},r.count=function(t,r){var e={};r.forEach((function(t){e[t]=0}));for(var n=0,a=t.length;n<a;n++)r.forEach((function(t){e[t]++}));return e},r.mean=function(t,r){var e={};r.forEach((function(t){e[t]=0}));for(var n=function(n,a){r.forEach((function(r){e[r]+=Number(t[n][r])||0}))},a=0,i=t.length;a<i;a++)n(a);return r.forEach((function(r){e[r]/=t.length})),e}},function(t,r,e){"use strict";this&&this.__assign;Object.defineProperty(r,"__esModule",{value:!0});var n=e(2),a=e(5),i=e(0),o={sum:i.sum_unsafe,mean:i.mean,count:i.count};function u(t){var r=t.type,e=t.aggFunc,a=void 0===e?i.count:e,o=t.factTable,u=void 0===o?[]:o,s=t.dimensions,l=void 0===s?[]:s,c=t.measures,f=void 0===c?[]:c;switch(r){case"period":return new n.periodCube({aggFunc:a,factTable:u,dimensions:l,measures:f});case"moment":default:return new n.momentCube({aggFunc:a,factTable:u,dimensions:l,measures:f})}}r.createCube=u,r.default=function(t){var r=t.dimensions,e=t.measures,n=t.asFields,s=t.operator,l=t.dataSource,c=u({type:"moment",aggFunc:o[s]||i.count,dimensions:r,measures:e,factTable:l}),f=a.tree2Table({dimensions:r,measures:e,cube:c});return f.forEach((function(t){n.forEach((function(r,n){t[r]=t[e[n]]}))})),f},function(t){for(var e in t)r.hasOwnProperty(e)||(r[e]=t[e])}(e(0))},function(t,r,e){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=e(3);r.periodCube=n.default;var a=e(4);r.momentCube=a.default},function(t,r,e){"use strict";var n=this&&this.__read||function(t,r){var e="function"===typeof Symbol&&t[Symbol.iterator];if(!e)return t;var n,a,i=e.call(t),o=[];try{for(;(void 0===r||r-- >0)&&!(n=i.next()).done;)o.push(n.value)}catch(u){a={error:u}}finally{try{n&&!n.done&&(e=i.return)&&e.call(i)}finally{if(a)throw a.error}}return o},a=this&&this.__spread||function(){for(var t=[],r=0;r<arguments.length;r++)t=t.concat(n(arguments[r]));return t},i=this&&this.__values||function(t){var r="function"===typeof Symbol&&Symbol.iterator,e=r&&t[r],n=0;if(e)return e.call(t);if(t&&"number"===typeof t.length)return{next:function(){return t&&n>=t.length&&(t=void 0),{value:t&&t[n++],done:!t}}};throw new TypeError(r?"Object is not iterable.":"Symbol.iterator is not defined.")};Object.defineProperty(r,"__esModule",{value:!0});var o=function(){function t(t){this.children=new Map,this._rawData=[],this.aggFunc=t,this.cache=!1}return t.prototype.push=function(){for(var t,r=[],e=0;e<arguments.length;e++)r[e]=arguments[e];(t=this._rawData).push.apply(t,a(r))},t.prototype.aggData=function(t){return void 0===t&&(t=[]),this.cache||(this._aggData=this.aggFunc(this.rawData,t),this.cache=!0),this._aggData},t.prototype.clearCache=function(){this.cache=!1},Object.defineProperty(t.prototype,"rawData",{get:function(){var t,r;if(!this.cache){if(0!==this.children.size){var e=this.children.values(),n=[];try{for(var a=i(e),o=a.next();!o.done;o=a.next()){var u=o.value,s=void 0,l=u.rawData,c=l.length;for(s=0;s<c;s++)n.push(l[s])}}catch(f){t={error:f}}finally{try{o&&!o.done&&(r=a.return)&&r.call(a)}finally{if(t)throw t.error}}this._rawData=n}this.cache=!0}return this._rawData},enumerable:!0,configurable:!0}),t.prototype.getNode=function(t){return function r(e,a){var o,u;if(a===t.length)return e;var s=e.children.entries();try{for(var l=i(s),c=l.next();!c.done;c=l.next()){var f=n(c.value,2),h=f[0],v=f[1];if(h===t[a])return r(v,a+1)}}catch(d){o={error:d}}finally{try{c&&!c.done&&(u=l.return)&&u.call(l)}finally{if(o)throw o.error}}return null}(this,0)},t}(),u=function(){function t(t){this.aggFunc=t.aggFunc,this.factTable=t.factTable,this.dimensions=t.dimensions,this.measures=t.measures}return t.prototype.get=function(t){var r=this.tree,e=(this.aggFunc,this.measures);return function r(a,o){var u,s;if(o===t.length)return a.aggData(e);var l=a.children.entries();try{for(var c=i(l),f=c.next();!f.done;f=c.next()){var h=n(f.value,2),v=h[0],d=h[1];if(v===t[o])return r(d,o+1)}}catch(y){u={error:y}}finally{try{f&&!f.done&&(s=c.return)&&s.call(c)}finally{if(u)throw u.error}}return!1}(r,0)},t.prototype.getNode=function(t){return this.tree.getNode(t)},t.prototype.buildTree=function(){var t,r=new o(this.aggFunc),e=this.factTable.length;for(t=0;t<e;t++)this.insertNode(this.factTable[t],r,0);return this.tree=r,r},t.prototype.insertNode=function(t,r,e){if(r.push(t),r.cache=!1,e<this.dimensions.length){var n=t[this.dimensions[e]];r.children.has(n)||r.children.set(n,new o(this.aggFunc)),this.insertNode(t,r.children.get(n),e+1)}},t.prototype.aggTree=function(t){var r,e;void 0===t&&(t=this.tree);var n=t.children.values();try{for(var a=i(n),o=a.next();!o.done;o=a.next()){var u=o.value;this.aggTree(u)}}catch(s){r={error:s}}finally{try{o&&!o.done&&(e=a.return)&&e.call(a)}finally{if(r)throw r.error}}return t.aggData(this.measures),t},t.prototype.aggNode=function(t){var r,e;void 0===t&&(t=this.tree);var n=t.children.values();try{for(var a=i(n),o=a.next();!o.done;o=a.next()){var u=o.value;this.aggTree(u)}}catch(s){r={error:s}}finally{try{o&&!o.done&&(e=a.return)&&e.call(a)}finally{if(r)throw r.error}}return t.aggData(this.measures),t},t}();r.default=u},function(t,r,e){"use strict";var n=this&&this.__read||function(t,r){var e="function"===typeof Symbol&&t[Symbol.iterator];if(!e)return t;var n,a,i=e.call(t),o=[];try{for(;(void 0===r||r-- >0)&&!(n=i.next()).done;)o.push(n.value)}catch(u){a={error:u}}finally{try{n&&!n.done&&(e=i.return)&&e.call(i)}finally{if(a)throw a.error}}return o},a=this&&this.__spread||function(){for(var t=[],r=0;r<arguments.length;r++)t=t.concat(n(arguments[r]));return t},i=this&&this.__values||function(t){var r="function"===typeof Symbol&&Symbol.iterator,e=r&&t[r],n=0;if(e)return e.call(t);if(t&&"number"===typeof t.length)return{next:function(){return t&&n>=t.length&&(t=void 0),{value:t&&t[n++],done:!t}}};throw new TypeError(r?"Object is not iterable.":"Symbol.iterator is not defined.")};Object.defineProperty(r,"__esModule",{value:!0});var o=function(){function t(){this.children=new Map,this.rawData=[]}return t.prototype.push=function(){for(var t,r=[],e=0;e<arguments.length;e++)r[e]=arguments[e];(t=this.rawData).push.apply(t,a(r))},t.prototype.aggData=function(t,r){return void 0===r&&(r=[]),this._aggData=t(this.rawData,r),this._aggData},t.prototype.getNode=function(t){return function r(e,a){var o,u;if(a===t.length)return e;var s=e.children.entries();try{for(var l=i(s),c=l.next();!c.done;c=l.next()){var f=n(c.value,2),h=f[0],v=f[1];if(h===t[a])return r(v,a+1)}}catch(d){o={error:d}}finally{try{c&&!c.done&&(u=l.return)&&u.call(l)}finally{if(o)throw o.error}}return null}(this,0)},t}();r.Node=o;var u=function(){function t(t){this.aggFunc=t.aggFunc,this.factTable=t.factTable,this.dimensions=t.dimensions,this.measures=t.measures,this.buildTree(),this.aggTree()}return t.prototype.get=function(t){var r=this.tree,e=this.aggFunc,a=this.measures;return function r(o,u){var s,l;if(u===t.length)return o.aggData(e,a);var c=o.children.entries();try{for(var f=i(c),h=f.next();!h.done;h=f.next()){var v=n(h.value,2),d=v[0],y=v[1];if(d===t[u])return r(y,u+1)}}catch(g){s={error:g}}finally{try{h&&!h.done&&(l=f.return)&&l.call(f)}finally{if(s)throw s.error}}return!1}(r,0)},t.prototype.getNode=function(t){return this.tree.getNode(t)},t.prototype.setData=function(t){var r=t.aggFunc,e=void 0===r?this.aggFunc:r,n=t.factTable,a=void 0===n?this.factTable:n,i=t.dimensions,o=void 0===i?this.dimensions:i,u=t.measures,s=void 0===u?this.measures:u;o!==this.dimensions||a!==this.factTable?(this.dimensions=o,this.factTable=a,this.measures=s,this.aggFunc=e,this.buildTree(),this.aggTree()):s===this.measures&&e===this.aggFunc||(this.measures=s,this.aggFunc=e,this.aggTree())},t.prototype.buildTree=function(){var t,r=new o,e=this.factTable.length;for(t=0;t<e;t++)this.insertNode(this.factTable[t],r,0);return this.tree=r,r},t.prototype.insertNode=function(t,r,e){if(e===this.dimensions.length)r.push(t);else{var n=t[this.dimensions[e]];r.children.has(n)||r.children.set(n,new o),this.insertNode(t,r.children.get(n),e+1)}},t.prototype.aggTree=function(t){var r,e;if(void 0===t&&(t=this.tree),t.children.size>0){t.rawData=[];var n=t.children.values();try{for(var a=i(n),o=a.next();!o.done;o=a.next()){var u=o.value,s=void 0,l=this.aggTree(u).rawData,c=l.length;for(s=0;s<c;s++)t.rawData.push(l[s])}}catch(f){r={error:f}}finally{try{o&&!o.done&&(e=a.return)&&e.call(a)}finally{if(r)throw r.error}}}return t.aggData(this.aggFunc,this.measures),t},t}();r.default=u},function(t,r,e){"use strict";var n=this&&this.__assign||function(){return(n=Object.assign||function(t){for(var r,e=1,n=arguments.length;e<n;e++)for(var a in r=arguments[e])Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a]);return t}).apply(this,arguments)},a=this&&this.__values||function(t){var r="function"===typeof Symbol&&Symbol.iterator,e=r&&t[r],n=0;if(e)return e.call(t);if(t&&"number"===typeof t.length)return{next:function(){return t&&n>=t.length&&(t=void 0),{value:t&&t[n++],done:!t}}};throw new TypeError(r?"Object is not iterable.":"Symbol.iterator is not defined.")},i=this&&this.__read||function(t,r){var e="function"===typeof Symbol&&t[Symbol.iterator];if(!e)return t;var n,a,i=e.call(t),o=[];try{for(;(void 0===r||r-- >0)&&!(n=i.next()).done;)o.push(n.value)}catch(u){a={error:u}}finally{try{n&&!n.done&&(e=i.return)&&e.call(i)}finally{if(a)throw a.error}}return o};Object.defineProperty(r,"__esModule",{value:!0}),r.tree2Table=function(t){var r=t.dimensions,e=(t.measures,t.cube),o=(e.aggFunc,[]);return function t(e,u,s){var l,c,f;if(0!==e.children.size)try{for(var h=a(e.children.entries()),v=h.next();!v.done;v=h.next()){var d=i(v.value,2),y=d[0];t(d[1],n(n({},u),((f={})[r[s]]=y,f)),s+1)}}catch(m){l={error:m}}finally{try{v&&!v.done&&(c=h.return)&&c.call(h)}finally{if(l)throw l.error}}else{var g=e._aggData;o.push(n(n({},u),g))}}(e.tree,{},0),o}},function(t,r,e){"use strict";e.r(r);var n={};function a(t){return function(t){if(Array.isArray(t)){for(var r=0,e=new Array(t.length);r<t.length;r++)e[r]=t[r];return e}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function i(t,r){return function(t){if(Array.isArray(t))return t}(t)||function(t,r){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)){var e=[],n=!0,a=!1,i=void 0;try{for(var o,u=t[Symbol.iterator]();!(n=(o=u.next()).done)&&(e.push(o.value),!r||e.length!==r);n=!0);}catch(s){a=!0,i=s}finally{try{n||null==u.return||u.return()}finally{if(a)throw i}}return e}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function o(t,r,e){for(var n=new Set,a=new Set,o=new Map,u=t.length,s=0;s<u;s++){var l=t[s];n.add(l[r]),a.add(l[e]),o.has(l[r])||o.set(l[r],new Map);var c=o.get(l[r]);c.has(l[e])||c.set(l[e],0),c.set(l[e],c.get(l[e])+1)}var f=function(t,r,e){if("undefined"===typeof t||"undefined"===typeof r||"undefined"===typeof e)return 0;var n=new Map,a=new Map,o=0,u=!0,s=!1,l=void 0;try{for(var c,f=r[Symbol.iterator]();!(u=(c=f.next()).done);u=!0){var h=c.value;n.set(h,0)}}catch($){s=!0,l=$}finally{try{u||null==f.return||f.return()}finally{if(s)throw l}}var v=!0,d=!1,y=void 0;try{for(var g,m=e[Symbol.iterator]();!(v=(g=m.next()).done);v=!0){var p=g.value;a.set(p,0)}}catch($){d=!0,y=$}finally{try{v||null==m.return||m.return()}finally{if(d)throw y}}var b=!0,S=!1,w=void 0;try{for(var M,x=t[Symbol.iterator]();!(b=(M=x.next()).done);b=!0){var E=i(M.value,2),z=E[0],_=E[1],D=!0,T=!1,O=void 0;try{for(var j,F=_[Symbol.iterator]();!(D=(j=F.next()).done);D=!0){var k=i(j.value,2),P=k[0],N=k[1];n.set(z,n.get(z)+N),a.set(P,a.get(P)+N),o+=N}}catch($){T=!0,O=$}finally{try{D||null==F.return||F.return()}finally{if(T)throw O}}}}catch($){S=!0,w=$}finally{try{b||null==x.return||x.return()}finally{if(S)throw w}}var A=0,I=!0,L=!1,R=void 0;try{for(var q,C=t[Symbol.iterator]();!(I=(q=C.next()).done);I=!0){var V=i(q.value,2),X=V[0],K=V[1],Y=!0,H=!1,W=void 0;try{for(var B,G=K[Symbol.iterator]();!(Y=(B=G.next()).done);Y=!0){var J=i(B.value,2),Q=J[0],U=J[1],Z=n.get(X)*a.get(Q)/o;A+=Math.pow(U-Z,2)/Z}}catch($){H=!0,W=$}finally{try{Y||null==G.return||G.return()}finally{if(H)throw W}}}}catch($){L=!0,R=$}finally{try{I||null==C.return||C.return()}finally{if(L)throw R}}return A}(o,n,a);return Math.sqrt(f/(t.length*Math.min(n.size-1,a.size-1)))}function u(t,r,e){var n=s(t.map((function(t){return t[r]})))/t.length,a=s(t.map((function(t){return t[e]})))/t.length;return s(t.map((function(t){return(t[r]-n)*(t[e]-a)})))/Math.sqrt(s(t.map((function(t){return Math.pow(t[r]-n,2)})))*s(t.map((function(t){return Math.pow(t[e]-a,2)}))))}function s(t){for(var r=0,e=0,n=t.length;e<n;e++)r+=t[e];return r}function l(t){var r=Math.min.apply(Math,a(t));return t.map((function(t){return t-r+1}))}function c(t){for(var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t.length,n=[],i=function r(e,i,o){i.length!==o?e>=t.length||(r(e+1,[].concat(a(i),[t[e]]),o),r(e+1,i,o)):n.push(a(i))},o=r;o<=e;o++)i(0,[],o);return n}function f(t){var r=0,e=!0,n=!1,a=void 0;try{for(var i,o=t[Symbol.iterator]();!(e=(i=o.next()).done);e=!0){var u=i.value;r+=u}}catch(s){n=!0,a=s}finally{try{e||null==o.return||o.return()}finally{if(n)throw a}}return t.map((function(t){return t/r}))}e.r(n),e.d(n,"kruskal",(function(){return E})),e.d(n,"kruskalWithFullMST",(function(){return x}));var h=function(t){var r=0,e=!0,n=!1,a=void 0;try{for(var i,o=t[Symbol.iterator]();!(e=(i=o.next()).done);e=!0){var u=i.value;r+=u*Math.log2(u)}}catch(s){n=!0,a=s}finally{try{e||null==o.return||o.return()}finally{if(n)throw a}}return-r};function v(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}function d(t,r){for(var e=0;e<r.length;e++){var n=r[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function y(t,r,e){return r&&d(t.prototype,r),e&&d(t,e),t}var g=function(){function t(r,e,n){v(this,t),this.dataSource=r,this.X=e,this.Y=n,this.normalizedDataSource=r}return y(t,[{key:"normalizeDimensions",value:function(t){var r=this;return this.normalizedDataSource=[],this.valueSets=[],t.forEach((function(){r.valueSets.push(new Map)})),this.dataSource.forEach((function(e){t.forEach((function(t,n){var a=(e[t]||"others").toString();r.valueSets[n].has(a)||r.valueSets[n].set(a,r.valueSets[n].size)}))})),this.dataSource.forEach((function(e){var n=r.normalizeRecord(e,t);r.normalizedDataSource.push(n)})),this.normalizedDataSource}},{key:"normalizeRecord",value:function(t,r){var e=this,n={};return Object.keys(t).forEach((function(r){n[r]=t[r]})),r.forEach((function(r,a){var i=(t[r]||"others").toString();n[r]=e.valueSets[a].get(i)})),n}},{key:"mean",value:function(){var t=this,r=0,e=0;return 0===this.normalizedDataSource.length?[r,e]:(this.normalizedDataSource.forEach((function(n,a){r+=n[t.X],e+=n[t.Y]})),r/=this.normalizedDataSource.length,e/=this.normalizedDataSource.length,[r,e])}},{key:"getRegressionEquation",value:function(){var t=this;if(0===this.normalizedDataSource.length)return[0,0];var r,e=i(this.mean(),2),n=e[0],a=e[1],o=0,u=0;return this.normalizedDataSource.forEach((function(r){o+=(r[t.X]-n)*(r[t.Y]-a),u+=Math.pow(r[t.X]-n,2)})),[a-n*(r=o/u),r]}},{key:"r_squared",value:function(){var t=this,r=i(this.mean(),2)[1],e=i(this.getRegressionEquation(),2),n=e[0],a=e[1],o=0,u=0;return this.normalizedDataSource.forEach((function(e){var i=e[t.X],s=e[t.Y],l=i*a+n;o+=Math.pow(l-r,2),u+=Math.pow(s-r,2)})),o/u}},{key:"cumulativeLogisticDistribution",value:function(t){return 1/(1+Math.pow(Math.E,-(t-.2)/2))}},{key:"pValue",value:function(){var t=i(this.getRegressionEquation(),2)[1];return 2*(1-this.cumulativeLogisticDistribution(Math.abs(t)))}},{key:"significance",value:function(){return this.r_squared()*(1-this.pValue())}}]),t}(),m=.5;function p(t){for(var r=[],e=0;e<t.length;e++)for(var n=e+1;n<t[e].length;n++)r.push([[e,n],Math.abs(t[e][n])]);return r}function b(t,r){return t[r]===r?r:t[r]=b(t,t[r])}function S(t,r,e){var n=b(t,r),a=b(t,e);t[n]=a,b(t,r),b(t,e)}function w(t,r,e){return t[e]===e?e:(t[e]=w(t,r,t[e]),r[e]=r[t[e]],t[e])}function M(t,r,e,n){var a=w(t,r,e),i=w(t,r,n),o=r[a],u=r[i];t[a]=i,r[a]=r[i]=o+u,w(t,r,e),w(t,r,n)}function x(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,n=p(t);n.sort((function(t,r){return r[1]-t[1]}));var i=[],o=t.map((function(t,r){return r})),u=a(o),s=!1,l=!0,c=!1,f=void 0;try{for(var h,v=n[Symbol.iterator]();!(l=(h=v.next()).done);l=!0){var d=h.value;b(o,d[0][0])!==b(o,d[0][1])&&(S(o,d[0][0],d[0][1]),i.push([d[0],d[1],s]));for(var y=0;y<o.length;y++)o[y]=b(o,y);var g=new Set(o);if(g.size<=r||d[1]<e?s=!0:u=a(o),1===g.size)break}}catch(m){c=!0,f=m}finally{try{l||null==v.return||v.return()}finally{if(c)throw f}}return{edgesInMST:i,groups:u}}var E=function(t){var r,e=t.matrix,n=t.measures,a=(t.method,t.groupMaxSize),i=void 0===a?4:a,o=t.limitSize,u=void 0!==o&&o,s=t.threshold,l=void 0===s?0:s;r=u?function(t,r){var e=p(t);e.sort((function(t,r){return r[1]-t[1]}));var n=t.map((function(t,r){return r})),a=t.map((function(){return 1})),i=!0,o=!1,u=void 0;try{for(var s,l=e[Symbol.iterator]();!(i=(s=l.next()).done);i=!0){var c=s.value;if(w(n,a,c[0][0])!==w(n,a,c[0][1])){if(a[c[0][0]]+a[c[0][1]]>r)continue;M(n,a,c[0][0],c[0][1])}for(var f=0;f<n.length;f++)n[f]=w(n,a,f);if(1===new Set(n).size)break}}catch(d){o=!0,u=d}finally{try{i||null==l.return||l.return()}finally{if(o)throw u}}for(var h=new Map,v=0;v<n.length;v++)h.has(n[v])||h.set(n[v],[]),h.get(n[v]).push(v);return h}(e,i):function(t,r){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,n=p(t);n.sort((function(t,r){return r[1]-t[1]}));var a=t.map((function(t,r){return r})),i=!0,o=!1,u=void 0;try{for(var s,l=n[Symbol.iterator]();!(i=(s=l.next()).done);i=!0){var c=s.value;b(a,c[0][0])!==b(a,c[0][1])&&S(a,c[0][0],c[0][1]);for(var f=0;f<a.length;f++)a[f]=b(a,f);var h=new Set(a);if(h.size<=r||c[1]<e)break}}catch(y){o=!0,u=y}finally{try{i||null==l.return||l.return()}finally{if(o)throw u}}for(var v=new Map,d=0;d<a.length;d++)v.has(a[d])||v.set(a[d],[]),v.get(a[d]).push(d);return v}(e,i,l);var c=[],f=!0,h=!1,v=void 0;try{for(var d,y=r.values()[Symbol.iterator]();!(f=(d=y.next()).done);f=!0){var g=d.value;c.push(g.map((function(t){return n[t]})))}}catch(m){h=!0,v=m}finally{try{f||null==y.return||y.return()}finally{if(h)throw v}}return c};function z(t){return(z="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _(t){return(_="function"===typeof Symbol&&"symbol"===z(Symbol.iterator)?function(t){return z(t)}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":z(t)})(t)}function D(t,r){return!r||"object"!==_(r)&&"function"!==typeof r?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):r}function T(t){return(T=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function O(t,r){return(O=Object.setPrototypeOf||function(t,r){return t.__proto__=r,t})(t,r)}function j(t,r){if("function"!==typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(r&&r.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),r&&O(t,r)}var F=function(t){function r(t){var e;v(this,r),e=D(this,T(r).call(this,t));var n=t.K;return e.K=n,e.normalize(),e}return j(r,t),y(r,[{key:"getNeighbors",value:function(t,r){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];e.length!==r.length&&r.forEach((function(t){e.push(1)}));for(var n=[],a=[],i=[],o=[],u=new Set(this.dimensions),s=0;s<r.length;s++)u.has(r[s])?(n.push(r[s]),i.push(e[s])):(a.push(r[s]),o.push(e[s]));var l=[];this.normalizedDataSource.forEach((function(r,e){var u=0;a.forEach((function(e,n){u+=Math.pow((r[e]-t[e])*o[n],2)})),n.forEach((function(e,n){r[e]!==t[e]&&(u+=Math.pow(i[n],2))})),l.push({dis:u,index:e})})),l.sort((function(t,r){return t.dis-r.dis}));for(var c=[],f=Math.min(this.K,l.length),h=0;h<f;h++)c.push(this.normalizedDataSource[l[h].index]);return c}},{key:"getTargetValue",value:function(t,r){var e=this,n=[];return t.forEach((function(t){var a=new Map;r.forEach((function(r){a.has(r[t])||a.set(r[t],0),a.set(r[t],a.get(r[t])+1)}));var i=0,o=0,u=!0,s=!1,l=void 0;try{for(var c,f=a[Symbol.iterator]();!(u=(c=f.next()).done);u=!0){var h=c.value;h[1]>i&&(i=h[1],o=h[0])}}catch(d){s=!0,l=d}finally{try{u||null==f.return||f.return()}finally{if(s)throw l}}var v=e.dimensions.indexOf(t);v>-1?n.push(e.valueParser[v][o]):n.push(o)})),n}}]),r}(function(){function t(r){v(this,t);var e=r.dataSource,n=r.dimensions,a=r.measures;this.dataSource=e,this.dimensions=n,this.measures=a}return y(t,[{key:"normalize",value:function(){var t=this;return this.normalizedDataSource=[],this.valueSets=[],this.valueParser=[],this.ranges=[],this.dimensions.forEach((function(r){t.valueSets.push(new Map),t.valueParser.push([])})),this.measures.forEach((function(){t.ranges.push([1/0,-1/0])})),this.dataSource.forEach((function(r){t.dimensions.forEach((function(e,n){var a=(r[e]||"others").toString();t.valueSets[n].has(a)||(t.valueSets[n].set(a,t.valueSets[n].size),t.valueParser[n].push(a))})),t.measures.forEach((function(e,n){var a=r[e];"number"===typeof a&&(t.ranges[n][0]=Math.min(t.ranges[n][0],a),t.ranges[n][1]=Math.max(t.ranges[n][1],a))}))})),this.dataSource.forEach((function(r){var e=t.normalizeRecord(r);t.normalizedDataSource.push(e)})),this.normalizedDataSource}},{key:"normalizeRecord",value:function(t){var r=this,e={};return this.measures.forEach((function(n,a){e[n]=(t[n]-r.ranges[a][0])/(r.ranges[a][1]-r.ranges[a][0])})),this.dimensions.forEach((function(n,a){var i=(t[n]||"others").toString();e[n]=r.valueSets[a].get(i)})),e}}]),t}());function k(t,r){for(var e=function(t,r){if(0===t)return[];for(var e=2147483647,n=[r],a=1;a<t;a++)n.push((1103515245*n[a-1]+12345)%e);return n.map((function(t){return t/e}))}(r,2147483647*Math.random()),n=[],a=0;a<r;a++){var i=Math.floor(e[a]*r)%r;n.push(t[i])}return n}var P={IsolationForest:function(){function t(r,e,n){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:100,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:256;v(this,t),this.dimensions=r,this.measures=e,this.dataSource=n,n.length<i?(this.treeNumber=Math.max(1,Math.ceil(i/50)),this.sampleSize=Math.max(2,Math.floor(n.length/2))):(this.treeNumber=a,this.sampleSize=i),this.limitHeight=Math.ceil(Math.log2(this.sampleSize)),this.iForest=[],this.normalizeDimensions()}return y(t,[{key:"normalizeDimensions",value:function(){var t=this;return this.normalizedDataSource=[],this.valueSets=[],this.ranges=[],this.dimensions.forEach((function(){t.valueSets.push(new Map)})),this.measures.forEach((function(){t.ranges.push([1/0,-1/0])})),this.dataSource.forEach((function(r){t.dimensions.forEach((function(e,n){var a=(r[e]||"others").toString();t.valueSets[n].has(a)||t.valueSets[n].set(a,t.valueSets[n].size)})),t.measures.forEach((function(e,n){var a=r[e];"number"===typeof a&&(t.ranges[n][0]=Math.min(t.ranges[n][0],a),t.ranges[n][1]=Math.max(t.ranges[n][1],a))}))})),this.dataSource.forEach((function(r){var e=t.normalizeRecord(r);t.normalizedDataSource.push(e)})),this.normalizedDataSource}},{key:"normalizeRecord",value:function(t){var r=this,e={};return this.measures.forEach((function(r){e[r]=t[r]})),this.dimensions.forEach((function(n,a){var i=(t[n]||"others").toString();e[n]=r.valueSets[a].get(i)})),e}},{key:"buildIsolationTree",value:function(t,r){if(r>=this.limitHeight||t.length<=1)return null;var e=Math.random(),n=this.measures[0]||this.dimensions[0],a=this.dimensions.length,i=this.measures.length,o=0;if(e>=a/(a+i)){var u=Math.floor(Math.random()*i)%i;n=this.measures[u],o=this.ranges[u][0]+(this.ranges[u][1]-this.ranges[u][0])*Math.random()}else{var s=Math.floor(Math.random()*a)%a;n=this.dimensions[s],o=Math.floor(this.valueSets[s].size*Math.random())%this.valueSets[s].size}var l=[],c=[],f=!0,h=!1,v=void 0;try{for(var d,y=t[Symbol.iterator]();!(f=(d=y.next()).done);f=!0){var g=d.value;g[n]<o?l.push(g):c.push(g)}}catch(p){h=!0,v=p}finally{try{f||null==y.return||y.return()}finally{if(h)throw v}}var m={field:n,value:o,size:t.length};return m.left=this.buildIsolationTree(l,r+1),m.right=this.buildIsolationTree(c,r+1),m}},{key:"AFS",value:function(t){return t>2?2*(Math.log(t-1)+Math.E)-2*(t-1)/t:2===t?1:0}},{key:"getPathLength",value:function(t,r,e,n){return null===r?e+this.AFS(n):t[r.field]<r.value?this.getPathLength(t,r.left,e+1,r.size):this.getPathLength(t,r.right,e+1,r.size)}},{key:"buildIsolationForest",value:function(){this.iForest=[];for(var t=0;t<this.treeNumber;t++){var r=k(this.normalizedDataSource,this.sampleSize),e=this.buildIsolationTree(r,0);this.iForest.push(e)}return this.iForest}},{key:"estimateOutierScore",value:function(){var t=this;return this.recordScoreList=[],this.normalizedDataSource.forEach((function(r){var e,n=0;t.iForest.forEach((function(e){n+=t.getPathLength(r,e,0,t.sampleSize)})),n/=t.iForest.length,e=Math.pow(2,-n/t.AFS(t.sampleSize)),t.recordScoreList.push(e)})),this.recordScoreList}}]),t}()},N=8;function A(t,r){for(var e=r.map((function(t){return r.map((function(t){return 0}))})),n=0;n<r.length;n++){e[n][n]=1;for(var a=n+1;a<r.length;a++){var i=u(t,r[n],r[a]);e[a][n]=e[n][a]=i}}return e}function I(t,r){var e=function(t,r){for(var e=r.map((function(t){return r.map((function(t){return 0}))})),n=0;n<r.length;n++){e[n][n]=1;for(var a=n+1;a<r.length;a++)e[n][a]=e[a][n]=o(t,r[n],r[a])}return e}(t,r);return n.kruskal({matrix:e,measures:r,groupMaxSize:Math.round(r.length/4),threshold:.3})}var L=e(1),R=e.n(L),q=function(t){function r(){return v(this,r),D(this,T(r).apply(this,arguments))}return j(r,t),y(r,[{key:"getTargetValuePercent",value:function(t,r,e){var n=[];return t.forEach((function(t,a){var i=0;e.forEach((function(e){e[t]===r[t]&&i++})),n.push(i/e.length)})),n}},{key:"getSignificance",value:function(t,r){var e=this,n=0;return this.normalizedDataSource.forEach((function(a){var i=e.getNeighbors(a,t),o=e.getTargetValuePercent(r,a,i),u=0;o.forEach((function(t){u+=t})),u/=o.length,n+=u})),n/=this.normalizedDataSource.length}}]),r}(F);function C(t,r,e){var i=[],o=I(t,r),u=function(t,r){var e=[],n=!0,a=!1,i=void 0;try{for(var o,u=t[Symbol.iterator]();!(n=(o=u.next()).done);n=!0){var s=o.value,l=!0,c=!1,f=void 0;try{for(var h,v=r[Symbol.iterator]();!(l=(h=v.next()).done);l=!0){var d=h.value;e.push({dimensions:s,measures:d})}}catch(y){c=!0,f=y}finally{try{l||null==v.return||v.return()}finally{if(c)throw f}}}}catch(y){a=!0,i=y}finally{try{n||null==u.return||u.return()}finally{if(a)throw i}}return e}(function(t){var r=[],e=!0,n=!1,i=void 0;try{for(var o,u=t[Symbol.iterator]();!(e=(o=u.next()).done);e=!0){var s=c(o.value,1,N);r.push.apply(r,a(s))}}catch(l){n=!0,i=l}finally{try{e||null==u.return||u.return()}finally{if(n)throw i}}return r}(o),function(t,r){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:3,a=A(t,r),i=n.kruskal({matrix:a,measures:r,groupMaxSize:Math.round(r.length/e),threshold:m});return i}(t,e)),s=new Map,v=!0,d=!1,y=void 0;try{for(var p,b=o[Symbol.iterator]();!(v=(p=b.next()).done);v=!0){var S=p.value,w=S.join("=;="),M=R()({dataSource:t,dimensions:S,measures:e,asFields:e,operator:"sum"});s.set(w,M)}}catch(E){d=!0,y=E}finally{try{v||null==b.return||b.return()}finally{if(d)throw y}}s.set("*",t),i.push.apply(i,a(function(t,r){var e=[],n=!0,a=!1,i=void 0;try{for(var o,u=r[Symbol.iterator]();!(n=(o=u.next()).done);n=!0){var s=o.value,c=s.dimensions,v=s.measures,d=c.join("=;=");if(t.has(d)){var y=t.get(d),g=0,m=0,p=!0,b=!1,S=void 0;try{for(var w,M=function(){var t=w.value,r=y.map((function(r){return r[t]})),e=f(l(r)),n=h(e);g+=n,m+=n/Math.log2(r.length)},x=v[Symbol.iterator]();!(p=(w=x.next()).done);p=!0)M()}catch(E){b=!0,S=E}finally{try{p||null==x.return||x.return()}finally{if(b)throw S}}g/=v.length,m/=v.length;var z={dimensions:c,measures:v,type:"general",score:g,significance:m=1-m,order:"asc"};e.push(z)}}}catch(E){a=!0,i=E}finally{try{n||null==u.return||u.return()}finally{if(a)throw i}}return e}(s,u))),i.push.apply(i,a(function(t,r){var e=[],n=!0,a=!1,i=void 0;try{for(var o,u=r[Symbol.iterator]();!(n=(o=u.next()).done);n=!0){var s=o.value,l=s.dimensions,c=s.measures,f=c.length>=2?"*":l.join("=;=");t.has(f)&&function(){var r=t.get(f),n=new P.IsolationForest([],c,r);n.buildIsolationForest();for(var a=n.estimateOutierScore(),i=0,o=0,u=0;u<a.length;u++)a[u]>o&&(o=a[u],i=u);var s={};l.concat(c).forEach((function(t){s[t]=r[i][t]}));var h={dimensions:l,measures:c,type:"outlier",score:o,significance:o,order:"desc",description:s};e.push(h)}()}}catch(E){a=!0,i=E}finally{try{n||null==u.return||u.return()}finally{if(a)throw i}}return e}(s,u))),i.push.apply(i,a(function(t,r){var e=[],n=!0,a=!1,i=void 0;try{for(var o,u=r[Symbol.iterator]();!(n=(o=u.next()).done);n=!0){var s=o.value,l=s.dimensions,c=s.measures,f=l.join("=;=");if(t.has(f)){var h,v=t.get(f);h=new q({dataSource:v,dimensions:l,measures:c,K:8}).getSignificance(c.concat(l.slice(0,-1)),l.slice(-1));var d={dimensions:l,measures:c,type:"group",score:h,significance:h,order:"desc"};e.push(d)}}}catch(E){a=!0,i=E}finally{try{n||null==u.return||u.return()}finally{if(a)throw i}}return e}(s,u)));var x=u.filter((function(t){return 1===t.dimensions.length}));return i.push.apply(i,a(function(t,r){var e=[],n=!0,i=!1,o=void 0;try{for(var u,s=function(){var r=u.value,n=r.dimensions,i=r.measures,o=n.join("=;=");if(t.has(o)){var s=a(t.get(o));s.sort((function(t,r){return t[n[0]]>r[n[0]]?1:t[n[0]]===r[n[0]]?0:t[n[0]]<r[n[0]]?-1:void 0}));var l=0,c=!0,f=!1,h=void 0;try{for(var v,d=i[Symbol.iterator]();!(c=(v=d.next()).done);c=!0){var y=v.value,m=new g(s,n[0],y);m.normalizeDimensions(n),l+=m.significance()}}catch(E){f=!0,h=E}finally{try{c||null==d.return||d.return()}finally{if(f)throw h}}l/=i.length;var p={dimensions:n,measures:i,type:"trend",score:l,significance:l,order:"desc"};e.push(p)}},l=r[Symbol.iterator]();!(n=(u=l.next()).done);n=!0)s()}catch(E){i=!0,o=E}finally{try{n||null==l.return||l.return()}finally{if(i)throw o}}return e}(s,x))),i}var V;self.addEventListener("message",(V=t=>{const{dataSource:r,dimensions:e,measures:n}=t.data;try{let t=C(r,e,n);t.sort((t,r)=>r.significance-t.significance),self.postMessage({success:!0,data:t})}catch(a){self.postMessage({success:!1,message:a})}},function(t){var r=(new Date).getTime();try{V(t)}finally{var e=(new Date).getTime()-r;console.log("Task [".concat(V.name,"] cost ").concat(e," ms."))}}),!1)}]);
//# sourceMappingURL=ae30e4247e69fb8a77a4.worker.js.map