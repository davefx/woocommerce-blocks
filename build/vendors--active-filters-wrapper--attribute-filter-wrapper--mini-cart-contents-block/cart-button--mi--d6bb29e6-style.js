(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[1],{130:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));function r(t){return t.toLowerCase()}var i=[/([a-z0-9])([A-Z])/g,/([A-Z])([A-Z][a-z])/g],c=/[^A-Z0-9]+/gi;function o(t,e){void 0===e&&(e={});for(var n=e.splitRegexp,o=void 0===n?i:n,u=e.stripRegexp,s=void 0===u?c:u,f=e.transform,p=void 0===f?r:f,d=e.delimiter,l=void 0===d?" ":d,v=a(a(t,o,"$1\0$2"),s,"\0"),b=0,g=v.length;"\0"===v.charAt(b);)b++;for(;"\0"===v.charAt(g-1);)g--;return v.slice(b,g).split("\0").map(p).join(l)}function a(t,e,n){return e instanceof RegExp?t.replace(e,n):e.reduce((function(t,e){return t.replace(e,n)}),t)}},299:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(82),i=n(130);function c(t,e){return void 0===e&&(e={}),function(t,e){return void 0===e&&(e={}),Object(i.a)(t,Object(r.a)({delimiter:"."},e))}(t,Object(r.a)({delimiter:"-"},e))}},82:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r=function(){return(r=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)};Object.create;Object.create}}]);