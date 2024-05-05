/*! For license information please see 9.d70d6affe3480ae6ba2b.js.LICENSE.txt */
(self.webpackChunkweb=self.webpackChunkweb||[]).push([[9],{54087:(e,t,r)=>{for(var a=r(75),i="undefined"==typeof window?r.g:window,n=["moz","webkit"],o="AnimationFrame",s=i["request"+o],u=i["cancel"+o]||i["cancelRequest"+o],c=0;!s&&c<n.length;c++)s=i[n[c]+"Request"+o],u=i[n[c]+"Cancel"+o]||i[n[c]+"CancelRequest"+o];if(!s||!u){var f=0,h=0,l=[];s=function(e){if(0===l.length){var t=a(),r=Math.max(0,16.666666666666668-(t-f));f=r+t,setTimeout((function(){var e=l.slice(0);l.length=0;for(var t=0;t<e.length;t++)if(!e[t].cancelled)try{e[t].callback(f)}catch(e){setTimeout((function(){throw e}),0)}}),Math.round(r))}return l.push({handle:++h,callback:e,cancelled:!1}),h},u=function(e){for(var t=0;t<l.length;t++)l[t].handle===e&&(l[t].cancelled=!0)}}e.exports=function(e){return s.call(i,e)},e.exports.cancel=function(){u.apply(i,arguments)},e.exports.polyfill=function(e){e||(e=i),e.requestAnimationFrame=s,e.cancelAnimationFrame=u}},26131:e=>{e.exports=function(e){this.ok=!1,this.alpha=1,"#"==e.charAt(0)&&(e=e.substr(1,6)),e=(e=e.replace(/ /g,"")).toLowerCase();var t={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dodgerblue:"1e90ff",feldspar:"d19275",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgrey:"d3d3d3",lightgreen:"90ee90",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslateblue:"8470ff",lightslategray:"778899",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"00ff00",limegreen:"32cd32",linen:"faf0e6",magenta:"ff00ff",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370d8",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"d87093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"ff0000",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",violetred:"d02090",wheat:"f5deb3",white:"ffffff",whitesmoke:"f5f5f5",yellow:"ffff00",yellowgreen:"9acd32"};e=t[e]||e;for(var r=[{re:/^rgba\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3}),\s*((?:\d?\.)?\d)\)$/,example:["rgba(123, 234, 45, 0.8)","rgba(255,234,245,1.0)"],process:function(e){return[parseInt(e[1]),parseInt(e[2]),parseInt(e[3]),parseFloat(e[4])]}},{re:/^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/,example:["rgb(123, 234, 45)","rgb(255,234,245)"],process:function(e){return[parseInt(e[1]),parseInt(e[2]),parseInt(e[3])]}},{re:/^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,example:["#00ff00","336699"],process:function(e){return[parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16)]}},{re:/^([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,example:["#fb0","f0f"],process:function(e){return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16)]}}],a=0;a<r.length;a++){var i=r[a].re,n=r[a].process,o=i.exec(e);if(o){var s=n(o);this.r=s[0],this.g=s[1],this.b=s[2],s.length>3&&(this.alpha=s[3]),this.ok=!0}}this.r=this.r<0||isNaN(this.r)?0:this.r>255?255:this.r,this.g=this.g<0||isNaN(this.g)?0:this.g>255?255:this.g,this.b=this.b<0||isNaN(this.b)?0:this.b>255?255:this.b,this.alpha=this.alpha<0?0:this.alpha>1||isNaN(this.alpha)?1:this.alpha,this.toRGB=function(){return"rgb("+this.r+", "+this.g+", "+this.b+")"},this.toRGBA=function(){return"rgba("+this.r+", "+this.g+", "+this.b+", "+this.alpha+")"},this.toHex=function(){var e=this.r.toString(16),t=this.g.toString(16),r=this.b.toString(16);return 1==e.length&&(e="0"+e),1==t.length&&(t="0"+t),1==r.length&&(r="0"+r),"#"+e+t+r},this.getHelpXML=function(){for(var e=new Array,a=0;a<r.length;a++)for(var i=r[a].example,n=0;n<i.length;n++)e[e.length]=i[n];for(var o in t)e[e.length]=o;var s=document.createElement("ul");s.setAttribute("id","rgbcolor-examples");for(a=0;a<e.length;a++)try{var u=document.createElement("li"),c=new RGBColor(e[a]),f=document.createElement("div");f.style.cssText="margin: 3px; border: 1px solid black; background:"+c.toHex()+"; color:"+c.toHex(),f.appendChild(document.createTextNode("test"));var h=document.createTextNode(" "+e[a]+" -> "+c.toRGB()+" -> "+c.toHex());u.appendChild(f),u.appendChild(h),s.appendChild(u)}catch(e){}return s}}},62449:(e,t,r)=>{"use strict";function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}r.d(t,{vR:()=>s});var i=[512,512,456,512,328,456,335,512,405,328,271,456,388,335,292,512,454,405,364,328,298,271,496,456,420,388,360,335,312,292,273,512,482,454,428,405,383,364,345,328,312,298,284,271,259,496,475,456,437,420,404,388,374,360,347,335,323,312,302,292,282,273,265,512,497,482,468,454,441,428,417,405,394,383,373,364,354,345,337,328,320,312,305,298,291,284,278,271,265,259,507,496,485,475,465,456,446,437,428,420,412,404,396,388,381,374,367,360,354,347,341,335,329,323,318,312,307,302,297,292,287,282,278,273,269,265,261,512,505,497,489,482,475,468,461,454,447,441,435,428,422,417,411,405,399,394,389,383,378,373,368,364,359,354,350,345,341,337,332,328,324,320,316,312,309,305,301,298,294,291,287,284,281,278,274,271,268,265,262,259,257,507,501,496,491,485,480,475,470,465,460,456,451,446,442,437,433,428,424,420,416,412,408,404,400,396,392,388,385,381,377,374,370,367,363,360,357,354,350,347,344,341,338,335,332,329,326,323,320,318,315,312,310,307,304,302,299,297,294,292,289,287,285,282,280,278,275,273,271,269,267,265,263,261,259],n=[9,11,12,13,13,14,14,15,15,15,15,16,16,16,16,17,17,17,17,17,17,17,18,18,18,18,18,18,18,18,18,19,19,19,19,19,19,19,19,19,19,19,19,19,19,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24];function o(e,t,r,i,n){if("string"==typeof e&&(e=document.getElementById(e)),!e||"object"!==a(e)||!("getContext"in e))throw new TypeError("Expecting canvas with `getContext` method in processCanvasRGB(A) calls!");var o=e.getContext("2d");try{return o.getImageData(t,r,i,n)}catch(e){throw new Error("unable to access image data: "+e)}}function s(e,t,r,a,s,c){if(!(isNaN(c)||c<1)){c|=0;var f=o(e,t,r,a,s);f=function(e,t,r,a,o,s){for(var c,f=e.data,h=2*s+1,l=a-1,p=o-1,d=s+1,m=d*(d+1)/2,y=new u,v=y,O=1;O<h;O++)v=v.next=new u,O===d&&(c=v);v.next=y;for(var T=null,g=null,x=0,_=0,N=i[s],b=n[s],A=0;A<o;A++){v=y;for(var E=f[_],C=f[_+1],M=f[_+2],R=f[_+3],w=0;w<d;w++)v.r=E,v.g=C,v.b=M,v.a=R,v=v.next;for(var I=0,S=0,L=0,H=0,U=d*E,V=d*C,k=d*M,D=d*R,X=m*E,Y=m*C,F=m*M,P=m*R,Q=1;Q<d;Q++){var q=_+((l<Q?l:Q)<<2),Z=f[q],B=f[q+1],j=f[q+2],z=f[q+3],G=d-Q;X+=(v.r=Z)*G,Y+=(v.g=B)*G,F+=(v.b=j)*G,P+=(v.a=z)*G,I+=Z,S+=B,L+=j,H+=z,v=v.next}T=y,g=c;for(var W=0;W<a;W++){var K=P*N>>b;if(f[_+3]=K,0!==K){var $=255/K;f[_]=(X*N>>b)*$,f[_+1]=(Y*N>>b)*$,f[_+2]=(F*N>>b)*$}else f[_]=f[_+1]=f[_+2]=0;X-=U,Y-=V,F-=k,P-=D,U-=T.r,V-=T.g,k-=T.b,D-=T.a;var J=W+s+1;J=x+(J<l?J:l)<<2,X+=I+=T.r=f[J],Y+=S+=T.g=f[J+1],F+=L+=T.b=f[J+2],P+=H+=T.a=f[J+3],T=T.next;var ee=g,te=ee.r,re=ee.g,ae=ee.b,ie=ee.a;U+=te,V+=re,k+=ae,D+=ie,I-=te,S-=re,L-=ae,H-=ie,g=g.next,_+=4}x+=a}for(var ne=0;ne<a;ne++){var oe=f[_=ne<<2],se=f[_+1],ue=f[_+2],ce=f[_+3],fe=d*oe,he=d*se,le=d*ue,pe=d*ce,de=m*oe,me=m*se,ye=m*ue,ve=m*ce;v=y;for(var Oe=0;Oe<d;Oe++)v.r=oe,v.g=se,v.b=ue,v.a=ce,v=v.next;for(var Te=a,ge=0,xe=0,_e=0,Ne=0,be=1;be<=s;be++){_=Te+ne<<2;var Ae=d-be;de+=(v.r=oe=f[_])*Ae,me+=(v.g=se=f[_+1])*Ae,ye+=(v.b=ue=f[_+2])*Ae,ve+=(v.a=ce=f[_+3])*Ae,Ne+=oe,ge+=se,xe+=ue,_e+=ce,v=v.next,be<p&&(Te+=a)}_=ne,T=y,g=c;for(var Ee=0;Ee<o;Ee++){var Ce=_<<2;f[Ce+3]=ce=ve*N>>b,ce>0?(ce=255/ce,f[Ce]=(de*N>>b)*ce,f[Ce+1]=(me*N>>b)*ce,f[Ce+2]=(ye*N>>b)*ce):f[Ce]=f[Ce+1]=f[Ce+2]=0,de-=fe,me-=he,ye-=le,ve-=pe,fe-=T.r,he-=T.g,le-=T.b,pe-=T.a,Ce=ne+((Ce=Ee+d)<p?Ce:p)*a<<2,de+=Ne+=T.r=f[Ce],me+=ge+=T.g=f[Ce+1],ye+=xe+=T.b=f[Ce+2],ve+=_e+=T.a=f[Ce+3],T=T.next,fe+=oe=g.r,he+=se=g.g,le+=ue=g.b,pe+=ce=g.a,Ne-=oe,ge-=se,xe-=ue,_e-=ce,g=g.next,_+=a}}return e}(f,0,0,a,s,c),e.getContext("2d").putImageData(f,t,r)}}var u=function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.r=0,this.g=0,this.b=0,this.a=0,this.next=null}},35851:(e,t,r)=>{"use strict";r.d(t,{OU:()=>x});var a=function(e,t){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])})(e,t)};function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}function n(e,t){var r=e[0],a=e[1];return[r*Math.cos(t)-a*Math.sin(t),r*Math.sin(t)+a*Math.cos(t)]}function o(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];for(var r=0;r<e.length;r++)if("number"!=typeof e[r])throw new Error("assertNumbers arguments["+r+"] is not a number. "+typeof e[r]+" == typeof "+e[r]);return!0}var s=Math.PI;function u(e,t,r){e.lArcFlag=0===e.lArcFlag?0:1,e.sweepFlag=0===e.sweepFlag?0:1;var a=e.rX,i=e.rY,o=e.x,u=e.y;a=Math.abs(e.rX),i=Math.abs(e.rY);var c=n([(t-o)/2,(r-u)/2],-e.xRot/180*s),f=c[0],h=c[1],l=Math.pow(f,2)/Math.pow(a,2)+Math.pow(h,2)/Math.pow(i,2);1<l&&(a*=Math.sqrt(l),i*=Math.sqrt(l)),e.rX=a,e.rY=i;var p=Math.pow(a,2)*Math.pow(h,2)+Math.pow(i,2)*Math.pow(f,2),d=(e.lArcFlag!==e.sweepFlag?1:-1)*Math.sqrt(Math.max(0,(Math.pow(a,2)*Math.pow(i,2)-p)/p)),m=a*h/i*d,y=-i*f/a*d,v=n([m,y],e.xRot/180*s);e.cX=v[0]+(t+o)/2,e.cY=v[1]+(r+u)/2,e.phi1=Math.atan2((h-y)/i,(f-m)/a),e.phi2=Math.atan2((-h-y)/i,(-f-m)/a),0===e.sweepFlag&&e.phi2>e.phi1&&(e.phi2-=2*s),1===e.sweepFlag&&e.phi2<e.phi1&&(e.phi2+=2*s),e.phi1*=180/s,e.phi2*=180/s}function c(e,t,r){o(e,t,r);var a=e*e+t*t-r*r;if(0>a)return[];if(0===a)return[[e*r/(e*e+t*t),t*r/(e*e+t*t)]];var i=Math.sqrt(a);return[[(e*r+t*i)/(e*e+t*t),(t*r-e*i)/(e*e+t*t)],[(e*r-t*i)/(e*e+t*t),(t*r+e*i)/(e*e+t*t)]]}var f,h=Math.PI/180;function l(e,t,r){return(1-r)*e+r*t}function p(e,t,r,a){return e+Math.cos(a/180*s)*t+Math.sin(a/180*s)*r}function d(e,t,r,a){var i=1e-6,n=t-e,o=r-t,s=3*n+3*(a-r)-6*o,u=6*(o-n),c=3*n;return Math.abs(s)<i?[-c/u]:function(e,t,r){void 0===r&&(r=1e-6);var a=e*e/4-t;if(a<-r)return[];if(a<=r)return[-e/2];var i=Math.sqrt(a);return[-e/2-i,-e/2+i]}(u/s,c/s,i)}function m(e,t,r,a,i){var n=1-i;return e*(n*n*n)+t*(3*n*n*i)+r*(3*n*i*i)+a*(i*i*i)}!function(e){function t(){return i((function(e,t,r){return e.relative&&(void 0!==e.x1&&(e.x1+=t),void 0!==e.y1&&(e.y1+=r),void 0!==e.x2&&(e.x2+=t),void 0!==e.y2&&(e.y2+=r),void 0!==e.x&&(e.x+=t),void 0!==e.y&&(e.y+=r),e.relative=!1),e}))}function r(){var e=NaN,t=NaN,r=NaN,a=NaN;return i((function(i,n,o){return i.type&x.SMOOTH_CURVE_TO&&(i.type=x.CURVE_TO,e=isNaN(e)?n:e,t=isNaN(t)?o:t,i.x1=i.relative?n-e:2*n-e,i.y1=i.relative?o-t:2*o-t),i.type&x.CURVE_TO?(e=i.relative?n+i.x2:i.x2,t=i.relative?o+i.y2:i.y2):(e=NaN,t=NaN),i.type&x.SMOOTH_QUAD_TO&&(i.type=x.QUAD_TO,r=isNaN(r)?n:r,a=isNaN(a)?o:a,i.x1=i.relative?n-r:2*n-r,i.y1=i.relative?o-a:2*o-a),i.type&x.QUAD_TO?(r=i.relative?n+i.x1:i.x1,a=i.relative?o+i.y1:i.y1):(r=NaN,a=NaN),i}))}function a(){var e=NaN,t=NaN;return i((function(r,a,i){if(r.type&x.SMOOTH_QUAD_TO&&(r.type=x.QUAD_TO,e=isNaN(e)?a:e,t=isNaN(t)?i:t,r.x1=r.relative?a-e:2*a-e,r.y1=r.relative?i-t:2*i-t),r.type&x.QUAD_TO){e=r.relative?a+r.x1:r.x1,t=r.relative?i+r.y1:r.y1;var n=r.x1,o=r.y1;r.type=x.CURVE_TO,r.x1=((r.relative?0:a)+2*n)/3,r.y1=((r.relative?0:i)+2*o)/3,r.x2=(r.x+2*n)/3,r.y2=(r.y+2*o)/3}else e=NaN,t=NaN;return r}))}function i(e){var t=0,r=0,a=NaN,i=NaN;return function(n){if(isNaN(a)&&!(n.type&x.MOVE_TO))throw new Error("path must start with moveto");var o=e(n,t,r,a,i);return n.type&x.CLOSE_PATH&&(t=a,r=i),void 0!==n.x&&(t=n.relative?t+n.x:n.x),void 0!==n.y&&(r=n.relative?r+n.y:n.y),n.type&x.MOVE_TO&&(a=t,i=r),o}}function s(e,t,r,a,n,s){return o(e,t,r,a,n,s),i((function(i,o,u,c){var f=i.x1,h=i.x2,l=i.relative&&!isNaN(c),p=void 0!==i.x?i.x:l?0:o,d=void 0!==i.y?i.y:l?0:u;function m(e){return e*e}i.type&x.HORIZ_LINE_TO&&0!==t&&(i.type=x.LINE_TO,i.y=i.relative?0:u),i.type&x.VERT_LINE_TO&&0!==r&&(i.type=x.LINE_TO,i.x=i.relative?0:o),void 0!==i.x&&(i.x=i.x*e+d*r+(l?0:n)),void 0!==i.y&&(i.y=p*t+i.y*a+(l?0:s)),void 0!==i.x1&&(i.x1=i.x1*e+i.y1*r+(l?0:n)),void 0!==i.y1&&(i.y1=f*t+i.y1*a+(l?0:s)),void 0!==i.x2&&(i.x2=i.x2*e+i.y2*r+(l?0:n)),void 0!==i.y2&&(i.y2=h*t+i.y2*a+(l?0:s));var y=e*a-t*r;if(void 0!==i.xRot&&(1!==e||0!==t||0!==r||1!==a))if(0===y)delete i.rX,delete i.rY,delete i.xRot,delete i.lArcFlag,delete i.sweepFlag,i.type=x.LINE_TO;else{var v=i.xRot*Math.PI/180,O=Math.sin(v),T=Math.cos(v),g=1/m(i.rX),_=1/m(i.rY),N=m(T)*g+m(O)*_,b=2*O*T*(g-_),A=m(O)*g+m(T)*_,E=N*a*a-b*t*a+A*t*t,C=b*(e*a+t*r)-2*(N*r*a+A*e*t),M=N*r*r-b*e*r+A*e*e,R=(Math.atan2(C,E-M)+Math.PI)%Math.PI/2,w=Math.sin(R),I=Math.cos(R);i.rX=Math.abs(y)/Math.sqrt(E*m(I)+C*w*I+M*m(w)),i.rY=Math.abs(y)/Math.sqrt(E*m(w)-C*w*I+M*m(I)),i.xRot=180*R/Math.PI}return void 0!==i.sweepFlag&&0>y&&(i.sweepFlag=+!i.sweepFlag),i}))}e.ROUND=function(e){function t(t){return Math.round(t*e)/e}return void 0===e&&(e=1e13),o(e),function(e){return void 0!==e.x1&&(e.x1=t(e.x1)),void 0!==e.y1&&(e.y1=t(e.y1)),void 0!==e.x2&&(e.x2=t(e.x2)),void 0!==e.y2&&(e.y2=t(e.y2)),void 0!==e.x&&(e.x=t(e.x)),void 0!==e.y&&(e.y=t(e.y)),void 0!==e.rX&&(e.rX=t(e.rX)),void 0!==e.rY&&(e.rY=t(e.rY)),e}},e.TO_ABS=t,e.TO_REL=function(){return i((function(e,t,r){return e.relative||(void 0!==e.x1&&(e.x1-=t),void 0!==e.y1&&(e.y1-=r),void 0!==e.x2&&(e.x2-=t),void 0!==e.y2&&(e.y2-=r),void 0!==e.x&&(e.x-=t),void 0!==e.y&&(e.y-=r),e.relative=!0),e}))},e.NORMALIZE_HVZ=function(e,t,r){return void 0===e&&(e=!0),void 0===t&&(t=!0),void 0===r&&(r=!0),i((function(a,i,n,o,s){if(isNaN(o)&&!(a.type&x.MOVE_TO))throw new Error("path must start with moveto");return t&&a.type&x.HORIZ_LINE_TO&&(a.type=x.LINE_TO,a.y=a.relative?0:n),r&&a.type&x.VERT_LINE_TO&&(a.type=x.LINE_TO,a.x=a.relative?0:i),e&&a.type&x.CLOSE_PATH&&(a.type=x.LINE_TO,a.x=a.relative?o-i:o,a.y=a.relative?s-n:s),a.type&x.ARC&&(0===a.rX||0===a.rY)&&(a.type=x.LINE_TO,delete a.rX,delete a.rY,delete a.xRot,delete a.lArcFlag,delete a.sweepFlag),a}))},e.NORMALIZE_ST=r,e.QT_TO_C=a,e.INFO=i,e.SANITIZE=function(e){void 0===e&&(e=0),o(e);var t=NaN,r=NaN,a=NaN,n=NaN;return i((function(i,o,s,u,c){var f=Math.abs,h=!1,l=0,p=0;if(i.type&x.SMOOTH_CURVE_TO&&(l=isNaN(t)?0:o-t,p=isNaN(r)?0:s-r),i.type&(x.CURVE_TO|x.SMOOTH_CURVE_TO)?(t=i.relative?o+i.x2:i.x2,r=i.relative?s+i.y2:i.y2):(t=NaN,r=NaN),i.type&x.SMOOTH_QUAD_TO?(a=isNaN(a)?o:2*o-a,n=isNaN(n)?s:2*s-n):i.type&x.QUAD_TO?(a=i.relative?o+i.x1:i.x1,n=i.relative?s+i.y1:i.y2):(a=NaN,n=NaN),i.type&x.LINE_COMMANDS||i.type&x.ARC&&(0===i.rX||0===i.rY||!i.lArcFlag)||i.type&x.CURVE_TO||i.type&x.SMOOTH_CURVE_TO||i.type&x.QUAD_TO||i.type&x.SMOOTH_QUAD_TO){var d=void 0===i.x?0:i.relative?i.x:i.x-o,m=void 0===i.y?0:i.relative?i.y:i.y-s;l=isNaN(a)?void 0===i.x1?l:i.relative?i.x:i.x1-o:a-o,p=isNaN(n)?void 0===i.y1?p:i.relative?i.y:i.y1-s:n-s;var y=void 0===i.x2?0:i.relative?i.x:i.x2-o,v=void 0===i.y2?0:i.relative?i.y:i.y2-s;f(d)<=e&&f(m)<=e&&f(l)<=e&&f(p)<=e&&f(y)<=e&&f(v)<=e&&(h=!0)}return i.type&x.CLOSE_PATH&&f(o-u)<=e&&f(s-c)<=e&&(h=!0),h?[]:i}))},e.MATRIX=s,e.ROTATE=function(e,t,r){void 0===t&&(t=0),void 0===r&&(r=0),o(e,t,r);var a=Math.sin(e),i=Math.cos(e);return s(i,a,-a,i,t-t*i+r*a,r-t*a-r*i)},e.TRANSLATE=function(e,t){return void 0===t&&(t=0),o(e,t),s(1,0,0,1,e,t)},e.SCALE=function(e,t){return void 0===t&&(t=e),o(e,t),s(e,0,0,t,0,0)},e.SKEW_X=function(e){return o(e),s(1,0,Math.atan(e),1,0,0)},e.SKEW_Y=function(e){return o(e),s(1,Math.atan(e),0,1,0,0)},e.X_AXIS_SYMMETRY=function(e){return void 0===e&&(e=0),o(e),s(-1,0,0,1,e,0)},e.Y_AXIS_SYMMETRY=function(e){return void 0===e&&(e=0),o(e),s(1,0,0,-1,0,e)},e.A_TO_C=function(){return i((function(e,t,r){return x.ARC===e.type?function(e,t,r){var a,i,o,s;e.cX||u(e,t,r);for(var c=Math.min(e.phi1,e.phi2),f=Math.max(e.phi1,e.phi2)-c,p=Math.ceil(f/90),d=new Array(p),m=t,y=r,v=0;v<p;v++){var O=l(e.phi1,e.phi2,v/p),T=l(e.phi1,e.phi2,(v+1)/p),g=T-O,_=4/3*Math.tan(g*h/4),N=[Math.cos(O*h)-_*Math.sin(O*h),Math.sin(O*h)+_*Math.cos(O*h)],b=N[0],A=N[1],E=[Math.cos(T*h),Math.sin(T*h)],C=E[0],M=E[1],R=[C+_*Math.sin(T*h),M-_*Math.cos(T*h)],w=R[0],I=R[1];d[v]={relative:e.relative,type:x.CURVE_TO};var S=function(t,r){var a=n([t*e.rX,r*e.rY],e.xRot),i=a[0],o=a[1];return[e.cX+i,e.cY+o]};a=S(b,A),d[v].x1=a[0],d[v].y1=a[1],i=S(w,I),d[v].x2=i[0],d[v].y2=i[1],o=S(C,M),d[v].x=o[0],d[v].y=o[1],e.relative&&(d[v].x1-=m,d[v].y1-=y,d[v].x2-=m,d[v].y2-=y,d[v].x-=m,d[v].y-=y),m=(s=[d[v].x,d[v].y])[0],y=s[1]}return d}(e,e.relative?0:t,e.relative?0:r):e}))},e.ANNOTATE_ARCS=function(){return i((function(e,t,r){return e.relative&&(t=0,r=0),x.ARC===e.type&&u(e,t,r),e}))},e.CLONE=function(){return function(e){var t={};for(var r in e)t[r]=e[r];return t}},e.CALCULATE_BOUNDS=function(){var e=t(),n=a(),o=r(),s=i((function(t,r,a){var i=o(n(e(function(e){var t={};for(var r in e)t[r]=e[r];return t}(t))));function f(e){e>s.maxX&&(s.maxX=e),e<s.minX&&(s.minX=e)}function h(e){e>s.maxY&&(s.maxY=e),e<s.minY&&(s.minY=e)}if(i.type&x.DRAWING_COMMANDS&&(f(r),h(a)),i.type&x.HORIZ_LINE_TO&&f(i.x),i.type&x.VERT_LINE_TO&&h(i.y),i.type&x.LINE_TO&&(f(i.x),h(i.y)),i.type&x.CURVE_TO){f(i.x),h(i.y);for(var l=0,y=d(r,i.x1,i.x2,i.x);l<y.length;l++)0<(L=y[l])&&1>L&&f(m(r,i.x1,i.x2,i.x,L));for(var v=0,O=d(a,i.y1,i.y2,i.y);v<O.length;v++)0<(L=O[v])&&1>L&&h(m(a,i.y1,i.y2,i.y,L))}if(i.type&x.ARC){f(i.x),h(i.y),u(i,r,a);for(var T=i.xRot/180*Math.PI,g=Math.cos(T)*i.rX,_=Math.sin(T)*i.rX,N=-Math.sin(T)*i.rY,b=Math.cos(T)*i.rY,A=i.phi1<i.phi2?[i.phi1,i.phi2]:-180>i.phi2?[i.phi2+360,i.phi1+360]:[i.phi2,i.phi1],E=A[0],C=A[1],M=function(e){var t=e[0],r=e[1],a=180*Math.atan2(r,t)/Math.PI;return a<E?a+360:a},R=0,w=c(N,-g,0).map(M);R<w.length;R++)(L=w[R])>E&&L<C&&f(p(i.cX,g,N,L));for(var I=0,S=c(b,-_,0).map(M);I<S.length;I++){var L;(L=S[I])>E&&L<C&&h(p(i.cY,_,b,L))}}return t}));return s.minX=1/0,s.maxX=-1/0,s.minY=1/0,s.maxY=-1/0,s}}(f||(f={}));var y,v=function(){function e(){}return e.prototype.round=function(e){return this.transform(f.ROUND(e))},e.prototype.toAbs=function(){return this.transform(f.TO_ABS())},e.prototype.toRel=function(){return this.transform(f.TO_REL())},e.prototype.normalizeHVZ=function(e,t,r){return this.transform(f.NORMALIZE_HVZ(e,t,r))},e.prototype.normalizeST=function(){return this.transform(f.NORMALIZE_ST())},e.prototype.qtToC=function(){return this.transform(f.QT_TO_C())},e.prototype.aToC=function(){return this.transform(f.A_TO_C())},e.prototype.sanitize=function(e){return this.transform(f.SANITIZE(e))},e.prototype.translate=function(e,t){return this.transform(f.TRANSLATE(e,t))},e.prototype.scale=function(e,t){return this.transform(f.SCALE(e,t))},e.prototype.rotate=function(e,t,r){return this.transform(f.ROTATE(e,t,r))},e.prototype.matrix=function(e,t,r,a,i,n){return this.transform(f.MATRIX(e,t,r,a,i,n))},e.prototype.skewX=function(e){return this.transform(f.SKEW_X(e))},e.prototype.skewY=function(e){return this.transform(f.SKEW_Y(e))},e.prototype.xSymmetry=function(e){return this.transform(f.X_AXIS_SYMMETRY(e))},e.prototype.ySymmetry=function(e){return this.transform(f.Y_AXIS_SYMMETRY(e))},e.prototype.annotateArcs=function(){return this.transform(f.ANNOTATE_ARCS())},e}(),O=function(e){return" "===e||"\t"===e||"\r"===e||"\n"===e},T=function(e){return"0".charCodeAt(0)<=e.charCodeAt(0)&&e.charCodeAt(0)<="9".charCodeAt(0)},g=function(e){function t(){var t=e.call(this)||this;return t.curNumber="",t.curCommandType=-1,t.curCommandRelative=!1,t.canParseCommandOrComma=!0,t.curNumberHasExp=!1,t.curNumberHasExpDigits=!1,t.curNumberHasDecimal=!1,t.curArgs=[],t}return i(t,e),t.prototype.finish=function(e){if(void 0===e&&(e=[]),this.parse(" ",e),0!==this.curArgs.length||!this.canParseCommandOrComma)throw new SyntaxError("Unterminated command at the path end.");return e},t.prototype.parse=function(e,t){var r=this;void 0===t&&(t=[]);for(var a=function(e){t.push(e),r.curArgs.length=0,r.canParseCommandOrComma=!0},i=0;i<e.length;i++){var n=e[i],o=!(this.curCommandType!==x.ARC||3!==this.curArgs.length&&4!==this.curArgs.length||1!==this.curNumber.length||"0"!==this.curNumber&&"1"!==this.curNumber),s=T(n)&&("0"===this.curNumber&&"0"===n||o);if(!T(n)||s)if("e"!==n&&"E"!==n)if("-"!==n&&"+"!==n||!this.curNumberHasExp||this.curNumberHasExpDigits)if("."!==n||this.curNumberHasExp||this.curNumberHasDecimal||o){if(this.curNumber&&-1!==this.curCommandType){var u=Number(this.curNumber);if(isNaN(u))throw new SyntaxError("Invalid number ending at "+i);if(this.curCommandType===x.ARC)if(0===this.curArgs.length||1===this.curArgs.length){if(0>u)throw new SyntaxError('Expected positive number, got "'+u+'" at index "'+i+'"')}else if((3===this.curArgs.length||4===this.curArgs.length)&&"0"!==this.curNumber&&"1"!==this.curNumber)throw new SyntaxError('Expected a flag, got "'+this.curNumber+'" at index "'+i+'"');this.curArgs.push(u),this.curArgs.length===_[this.curCommandType]&&(x.HORIZ_LINE_TO===this.curCommandType?a({type:x.HORIZ_LINE_TO,relative:this.curCommandRelative,x:u}):x.VERT_LINE_TO===this.curCommandType?a({type:x.VERT_LINE_TO,relative:this.curCommandRelative,y:u}):this.curCommandType===x.MOVE_TO||this.curCommandType===x.LINE_TO||this.curCommandType===x.SMOOTH_QUAD_TO?(a({type:this.curCommandType,relative:this.curCommandRelative,x:this.curArgs[0],y:this.curArgs[1]}),x.MOVE_TO===this.curCommandType&&(this.curCommandType=x.LINE_TO)):this.curCommandType===x.CURVE_TO?a({type:x.CURVE_TO,relative:this.curCommandRelative,x1:this.curArgs[0],y1:this.curArgs[1],x2:this.curArgs[2],y2:this.curArgs[3],x:this.curArgs[4],y:this.curArgs[5]}):this.curCommandType===x.SMOOTH_CURVE_TO?a({type:x.SMOOTH_CURVE_TO,relative:this.curCommandRelative,x2:this.curArgs[0],y2:this.curArgs[1],x:this.curArgs[2],y:this.curArgs[3]}):this.curCommandType===x.QUAD_TO?a({type:x.QUAD_TO,relative:this.curCommandRelative,x1:this.curArgs[0],y1:this.curArgs[1],x:this.curArgs[2],y:this.curArgs[3]}):this.curCommandType===x.ARC&&a({type:x.ARC,relative:this.curCommandRelative,rX:this.curArgs[0],rY:this.curArgs[1],xRot:this.curArgs[2],lArcFlag:this.curArgs[3],sweepFlag:this.curArgs[4],x:this.curArgs[5],y:this.curArgs[6]})),this.curNumber="",this.curNumberHasExpDigits=!1,this.curNumberHasExp=!1,this.curNumberHasDecimal=!1,this.canParseCommandOrComma=!0}if(!O(n))if(","===n&&this.canParseCommandOrComma)this.canParseCommandOrComma=!1;else if("+"!==n&&"-"!==n&&"."!==n)if(s)this.curNumber=n,this.curNumberHasDecimal=!1;else{if(0!==this.curArgs.length)throw new SyntaxError("Unterminated command at index "+i+".");if(!this.canParseCommandOrComma)throw new SyntaxError('Unexpected character "'+n+'" at index '+i+". Command cannot follow comma");if(this.canParseCommandOrComma=!1,"z"!==n&&"Z"!==n)if("h"===n||"H"===n)this.curCommandType=x.HORIZ_LINE_TO,this.curCommandRelative="h"===n;else if("v"===n||"V"===n)this.curCommandType=x.VERT_LINE_TO,this.curCommandRelative="v"===n;else if("m"===n||"M"===n)this.curCommandType=x.MOVE_TO,this.curCommandRelative="m"===n;else if("l"===n||"L"===n)this.curCommandType=x.LINE_TO,this.curCommandRelative="l"===n;else if("c"===n||"C"===n)this.curCommandType=x.CURVE_TO,this.curCommandRelative="c"===n;else if("s"===n||"S"===n)this.curCommandType=x.SMOOTH_CURVE_TO,this.curCommandRelative="s"===n;else if("q"===n||"Q"===n)this.curCommandType=x.QUAD_TO,this.curCommandRelative="q"===n;else if("t"===n||"T"===n)this.curCommandType=x.SMOOTH_QUAD_TO,this.curCommandRelative="t"===n;else{if("a"!==n&&"A"!==n)throw new SyntaxError('Unexpected character "'+n+'" at index '+i+".");this.curCommandType=x.ARC,this.curCommandRelative="a"===n}else t.push({type:x.CLOSE_PATH}),this.canParseCommandOrComma=!0,this.curCommandType=-1}else this.curNumber=n,this.curNumberHasDecimal="."===n}else this.curNumber+=n,this.curNumberHasDecimal=!0;else this.curNumber+=n;else this.curNumber+=n,this.curNumberHasExp=!0;else this.curNumber+=n,this.curNumberHasExpDigits=this.curNumberHasExp}return t},t.prototype.transform=function(e){return Object.create(this,{parse:{value:function(t,r){void 0===r&&(r=[]);for(var a=0,i=Object.getPrototypeOf(this).parse.call(this,t);a<i.length;a++){var n=i[a],o=e(n);Array.isArray(o)?r.push.apply(r,o):r.push(o)}return r}}})},t}(v),x=function(e){function t(r){var a=e.call(this)||this;return a.commands="string"==typeof r?t.parse(r):r,a}return i(t,e),t.prototype.encode=function(){return t.encode(this.commands)},t.prototype.getBounds=function(){var e=f.CALCULATE_BOUNDS();return this.transform(e),e},t.prototype.transform=function(e){for(var t=[],r=0,a=this.commands;r<a.length;r++){var i=e(a[r]);Array.isArray(i)?t.push.apply(t,i):t.push(i)}return this.commands=t,this},t.encode=function(e){return function(e){var t="";Array.isArray(e)||(e=[e]);for(var r=0;r<e.length;r++){var a=e[r];if(a.type===x.CLOSE_PATH)t+="z";else if(a.type===x.HORIZ_LINE_TO)t+=(a.relative?"h":"H")+a.x;else if(a.type===x.VERT_LINE_TO)t+=(a.relative?"v":"V")+a.y;else if(a.type===x.MOVE_TO)t+=(a.relative?"m":"M")+a.x+" "+a.y;else if(a.type===x.LINE_TO)t+=(a.relative?"l":"L")+a.x+" "+a.y;else if(a.type===x.CURVE_TO)t+=(a.relative?"c":"C")+a.x1+" "+a.y1+" "+a.x2+" "+a.y2+" "+a.x+" "+a.y;else if(a.type===x.SMOOTH_CURVE_TO)t+=(a.relative?"s":"S")+a.x2+" "+a.y2+" "+a.x+" "+a.y;else if(a.type===x.QUAD_TO)t+=(a.relative?"q":"Q")+a.x1+" "+a.y1+" "+a.x+" "+a.y;else if(a.type===x.SMOOTH_QUAD_TO)t+=(a.relative?"t":"T")+a.x+" "+a.y;else{if(a.type!==x.ARC)throw new Error('Unexpected command type "'+a.type+'" at index '+r+".");t+=(a.relative?"a":"A")+a.rX+" "+a.rY+" "+a.xRot+" "+ +a.lArcFlag+" "+ +a.sweepFlag+" "+a.x+" "+a.y}}return t}(e)},t.parse=function(e){var t=new g,r=[];return t.parse(e,r),t.finish(r),r},t.CLOSE_PATH=1,t.MOVE_TO=2,t.HORIZ_LINE_TO=4,t.VERT_LINE_TO=8,t.LINE_TO=16,t.CURVE_TO=32,t.SMOOTH_CURVE_TO=64,t.QUAD_TO=128,t.SMOOTH_QUAD_TO=256,t.ARC=512,t.LINE_COMMANDS=t.LINE_TO|t.HORIZ_LINE_TO|t.VERT_LINE_TO,t.DRAWING_COMMANDS=t.HORIZ_LINE_TO|t.VERT_LINE_TO|t.LINE_TO|t.CURVE_TO|t.SMOOTH_CURVE_TO|t.QUAD_TO|t.SMOOTH_QUAD_TO|t.ARC,t}(v),_=((y={})[x.MOVE_TO]=2,y[x.LINE_TO]=2,y[x.HORIZ_LINE_TO]=1,y[x.VERT_LINE_TO]=1,y[x.CLOSE_PATH]=0,y[x.QUAD_TO]=4,y[x.SMOOTH_QUAD_TO]=2,y[x.CURVE_TO]=6,y[x.SMOOTH_CURVE_TO]=4,y[x.ARC]=7,y)}}]);