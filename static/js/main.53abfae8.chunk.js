(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{10:function(e,t,n){e.exports=n(11)},11:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(1),o=n(4),l=n(3),i=n(5),c=n(6),u=n(2),s=n.n(u),d=n(7),f=n.n(d),h=n(8),p=(n(16),Array.of());function g(e,t){var n=Math.random;Math.random=function(e){return function(){return(Math.pow(2,31)-1&(e=Math.imul(48271,e)))/Math.pow(2,31)}}(e);var r=t();return Math.random=n,r}function v(e,t,n,r,a,o){var l,i,c=a-n,u=o-r,s=c*c+u*u,d=-1;0!==s&&(d=((e-n)*c+(t-r)*u)/s),d<0?(l=n,i=r):d>1?(l=a,i=o):(l=n+d*c,i=r+d*u);var f=e-l,h=t-i;return Math.hypot(f,h)}function y(e,t,n){if(t){var r=t.fillStyle;"string"===typeof n.viewBackgroundColor?(t.fillStyle=n.viewBackgroundColor,t.fillRect(-.5,-.5,K.width,K.height)):t.clearRect(-.5,-.5,K.width,K.height),t.fillStyle=r,p.forEach((function(r){if(r.draw(e,t,n),r.isSelected){var a=b(r),o=C(r),l=M(r),i=B(r),c=t.getLineDash();t.setLineDash([8,4]),t.strokeRect(a-4+n.scrollX,l-4+n.scrollY,o-a+8,i-l+8),t.setLineDash(c)}}));var a=function(e,t,n,r){var a=e*e/(e+Math.abs(n)),o={x:(n>0?0:e-a)+4,y:t-6-4,width:a-8,height:6},l=t*t/(t+Math.abs(r));return{horizontal:o,vertical:{x:e-6-4,y:(r>0?0:t-l)+4,width:6,height:l-12}}}(t.canvas.width,t.canvas.height,n.scrollX,n.scrollY);t.fillStyle="rgba(0,0,0,0.3)",t.fillRect(a.horizontal.x,a.horizontal.y,a.horizontal.width,a.horizontal.height),t.fillRect(a.vertical.x,a.vertical.y,a.vertical.width,a.vertical.height),t.fillStyle=r}}function m(e){var t=e.exportBackground,n=e.exportVisibleOnly,r=e.exportPadding,a=void 0===r?10:r,o=e.viewBackgroundColor;if(!p.length)return window.alert("Cannot export empty canvas.");D(),f.a.render(s.a.createElement(R,null),V,(function(){var e=1/0,r=0,l=1/0,i=0;p.forEach((function(t){e=Math.min(e,b(t)),r=Math.max(r,C(t)),l=Math.min(l,M(t)),i=Math.max(i,B(t))}));var c=document.createElement("canvas"),u=c.getContext("2d");c.style.display="none",document.body.appendChild(c),c.width=n?r-e+2*a:K.width,c.height=n?i-l+2*a:K.height,t||y(z,W,{viewBackgroundColor:null,scrollX:0,scrollY:0}),u.drawImage(K,n?e-a:0,n?l-a:0,n?r-e+2*a:K.width,n?i-l+2*a:K.height,0,0,n?c.width:K.width,n?c.height:K.height),t||y(z,W,{viewBackgroundColor:o,scrollX:0,scrollY:0});var s=document.createElement("a");s.setAttribute("download","excalidraw.png"),s.setAttribute("href",c.toDataURL("image/png")),s.click(),s.remove(),c!==K&&c.remove()}))}function w(e,t,n,r,a){return[(e-n)*Math.cos(a)-(t-r)*Math.sin(a)+n,(e-n)*Math.sin(a)+(t-r)*Math.cos(a)+r]}var x=h.a.generator(null,null);function k(e){return"text"===e.type}function E(e){var t=e.width,n=e.height,r=Math.hypot(t-0,n-0),a=Math.min(30,r/2),o=t-(t-0)/r*a,l=n-(n-0)/r*a,i=w(o,l,t,n,-20*Math.PI/180),u=Object(c.a)(i,2),s=u[0],d=u[1],f=w(o,l,t,n,20*Math.PI/180),h=Object(c.a)(f,2);return[0,0,t,n,s,d,h[0],h[1]]}function S(e){if("selection"===e.type)e.draw=function(t,n,r){var a=r.scrollX,o=r.scrollY,l=n.fillStyle;n.fillStyle="rgba(0, 0, 255, 0.10)",n.fillRect(e.x+a,e.y+o,e.width,e.height),n.fillStyle=l};else if("rectangle"===e.type){var t=g(e.seed,(function(){return x.rectangle(0,0,e.width,e.height,{stroke:e.strokeColor,fill:e.backgroundColor})}));e.draw=function(n,r,a){var o=a.scrollX,l=a.scrollY;r.translate(e.x+o,e.y+l),n.draw(t),r.translate(-e.x-o,-e.y-l)}}else if("ellipse"===e.type){var n=g(e.seed,(function(){return x.ellipse(e.width/2,e.height/2,e.width,e.height,{stroke:e.strokeColor,fill:e.backgroundColor})}));e.draw=function(t,r,a){var o=a.scrollX,l=a.scrollY;r.translate(e.x+o,e.y+l),t.draw(n),r.translate(-e.x-o,-e.y-l)}}else{if("arrow"===e.type){var r=E(e),a=Object(c.a)(r,8),o=a[0],l=a[1],i=a[2],u=a[3],s=a[4],d=a[5],f=a[6],h=a[7],p=g(e.seed,(function(){return[x.line(s,d,i,u,{stroke:e.strokeColor}),x.line(o,l,i,u,{stroke:e.strokeColor}),x.line(f,h,i,u,{stroke:e.strokeColor})]}));return void(e.draw=function(t,n,r){var a=r.scrollX,o=r.scrollY;n.translate(e.x+a,e.y+o),p.forEach((function(e){return t.draw(e)})),n.translate(-e.x-a,-e.y-o)})}if(!k(e))throw new Error("Unimplemented type "+e.type);e.draw=function(t,n,r){var a=r.scrollX,o=r.scrollY,l=n.font;n.font=e.font;var i=n.fillStyle;n.fillStyle=e.strokeColor,n.fillText(e.text,e.x+a,e.y+e.actualBoundingBoxAscent+o),n.fillStyle=i,n.font=l}}}function b(e){return e.width>=0?e.x:e.x+e.width}function C(e){return e.width>=0?e.x+e.width:e.x}function M(e){return e.height>=0?e.y:e.y+e.height}function B(e){return e.height>=0?e.y+e.height:e.y}function D(){p.forEach((function(e){e.isSelected=!1}))}function O(){for(var e=p.length-1;e>=0;--e)p[e].isSelected&&p.splice(e,1)}var X="ArrowLeft",Y="ArrowRight",T="ArrowDown",U="ArrowUp",I="Escape",L="Delete",A="Backspace",N=[{label:"Rectange",value:"rectangle"},{label:"Ellipse",value:"ellipse"},{label:"Arrow",value:"arrow"},{label:"Text",value:"text"},{label:"Selection",value:"selection"}],P=N.map((function(e){return e.label[0].toLowerCase()}));function j(e){return N.reduce((function(t,n){return n.value[0]!==e?t:n.value}),"selection")}function J(e){return e===X||e===Y||e===T||e===U}var R=function(e){function t(){var e,n;Object(r.a)(this,t);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(n=Object(o.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(i)))).state={draggingElement:null,elementType:"selection",exportBackground:!1,exportVisibleOnly:!0,exportPadding:10,currentItemStrokeColor:"#000000",currentItemBackgroundColor:"#ffffff",viewBackgroundColor:"#ffffff",scrollX:0,scrollY:0},n.onKeyDown=function(e){if("INPUT"!==e.target.nodeName)if(e.key===I)D(),n.forceUpdate(),e.preventDefault();else if(e.key===A||e.key===L)O(),n.forceUpdate(),e.preventDefault();else if(J(e.key)){var t=e.shiftKey?5:1;p.forEach((function(n){n.isSelected&&(e.key===X?n.x-=t:e.key===Y?n.x+=t:e.key===U?n.y-=t:e.key===T&&(n.y+=t))})),n.forceUpdate(),e.preventDefault()}else"a"===e.key&&e.metaKey?(p.forEach((function(e){e.isSelected=!0})),n.forceUpdate(),e.preventDefault()):P.includes(e.key.toLowerCase())&&n.setState({elementType:j(e.key)})},n}return Object(i.a)(t,e),Object(a.a)(t,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.onKeyDown,!1);var e=function(){try{var e=localStorage.getItem("excalidraw"),t=localStorage.getItem("excalidraw-state");return e&&(p=JSON.parse(e)).forEach((function(e){return S(e)})),t?JSON.parse(t):null}catch(n){return p=[],null}}();e&&this.setState(e)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.onKeyDown,!1)}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{onCut:function(t){t.clipboardData.setData("text/plain",JSON.stringify(p.filter((function(e){return e.isSelected})))),O(),e.forceUpdate(),t.preventDefault()},onCopy:function(e){e.clipboardData.setData("text/plain",JSON.stringify(p.filter((function(e){return e.isSelected})))),e.preventDefault()},onPaste:function(t){var n,r=t.clipboardData.getData("text");try{n=JSON.parse(r)}catch(t){}Array.isArray(n)&&n.length>0&&n[0].type&&(D(),n.forEach((function(e){e.x+=10,e.y+=10,S(e),p.push(e)})),e.forceUpdate()),t.preventDefault()}},s.a.createElement("fieldset",null,s.a.createElement("legend",null,"Shapes"),N.map((function(t){var n=t.value,r=t.label;return s.a.createElement("label",null,s.a.createElement("input",{type:"radio",checked:e.state.elementType===n,onChange:function(){e.setState({elementType:n}),D(),e.forceUpdate()}}),s.a.createElement("span",null,r))}))),s.a.createElement("canvas",{id:"canvas",width:window.innerWidth,height:window.innerHeight-210,onWheel:function(t){t.preventDefault();var n=t.deltaX,r=t.deltaY;e.setState((function(e){return{scrollX:e.scrollX-n,scrollY:e.scrollY-r}}))},onMouseDown:function(t){var n=t.clientX-t.target.offsetLeft-e.state.scrollX,r=t.clientY-t.target.offsetTop-e.state.scrollY,a=function(e,t,n,r,a){var o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0,l=arguments.length>6&&void 0!==arguments[6]?arguments[6]:0,i={type:e,x:t,y:n,width:o,height:l,isSelected:!1,strokeColor:r,backgroundColor:a,seed:Math.floor(Math.random()*Math.pow(2,31)),draw:function(e,t,n){}};return i}(e.state.elementType,n,r,e.state.currentItemStrokeColor,e.state.currentItemBackgroundColor),o=!1,l=document.documentElement.style.cursor;if("selection"===e.state.elementType){var i=p.find((function(e){return function(e,t,n){if("ellipse"===e.type){var r=Math.abs(t-e.x-e.width/2),a=Math.abs(n-e.y-e.height/2),o=.707,l=.707,i=e.width/2,u=e.height/2;return[0,1,2,3].forEach((function(e){var t=i*o,n=u*l,c=(i*i-u*u)*Math.pow(o,3)/i,s=(u*u-i*i)*Math.pow(l,3)/u,d=t-c,f=n-s,h=r-c,p=a-s,g=Math.hypot(f,d),v=Math.hypot(p,h);o=Math.min(1,Math.max(0,(h*g/v+c)/i)),l=Math.min(1,Math.max(0,(p*g/v+s)/u));var y=Math.hypot(l,o);o/=y,l/=y})),Math.hypot(i*o-r,u*l-a)<10}if("rectangle"===e.type){var s=b(e),d=C(e),f=M(e),h=B(e);return v(t,n,s,f,d,f)<10||v(t,n,d,f,d,h)<10||v(t,n,d,h,s,h)<10||v(t,n,s,h,s,f)<10}if("arrow"===e.type){var p=E(e),g=Object(c.a)(p,8),y=g[0],m=g[1],w=g[2],x=g[3],k=g[4],S=g[5],D=g[6],O=g[7];return v(t-=e.x,n-=e.y,k,S,w,x)<10||v(t,n,y,m,w,x)<10||v(t,n,D,O,w,x)<10}if("text"===e.type){var X=b(e),Y=C(e),T=M(e),U=B(e);return t>=X&&t<=Y&&n>=T&&n<=U}if("selection"===e.type)return console.warn("This should not happen, we need to investigate why it does."),!1;throw new Error("Unimplemented type "+e.type)}(e,n,r)}));i?i.isSelected||(t.shiftKey||D(),i.isSelected=!0):D(),(o=p.some((function(e){return e.isSelected})))&&(document.documentElement.style.cursor="move")}if(k(a)){var u=prompt("What text do you want?");if(null===u)return;a.text=u,a.font="20px Virgil";var s=W.font;W.font=a.font;var d=W.measureText(a.text),f=d.actualBoundingBoxAscent,h=d.actualBoundingBoxDescent,g=d.width;a.actualBoundingBoxAscent=f,W.font=s;var y=f+h;a.x-=g/2,a.y-=f,a.width=g,a.height=y}S(a),p.push(a),"text"===e.state.elementType?(e.setState({draggingElement:null,elementType:"selection"}),a.isSelected=!0):e.setState({draggingElement:a});var m=n,w=r,x=function(t){var n=t.target;if(n instanceof HTMLElement){if(o){var r=p.filter((function(e){return e.isSelected}));if(r.length){var a=t.clientX-n.offsetLeft-e.state.scrollX,l=t.clientY-n.offsetTop-e.state.scrollY;return r.forEach((function(e){e.x+=a-m,e.y+=l-w})),m=a,w=l,void e.forceUpdate()}}var i=e.state.draggingElement;if(i){var c=t.clientX-n.offsetLeft-i.x-e.state.scrollX,u=t.clientY-n.offsetTop-i.y-e.state.scrollY;i.width=c,i.height=t.shiftKey?c:u,S(i),"selection"===e.state.elementType&&function(e){var t=b(e),n=C(e),r=M(e),a=B(e);p.forEach((function(e){var o=b(e),l=C(e),i=M(e),c=B(e);e.isSelected="selection"!==e.type&&t<=o&&r<=i&&n>=l&&a>=c}))}(i),e.forceUpdate()}}};window.addEventListener("mousemove",x),window.addEventListener("mouseup",(function t(n){var r=e.state,a=r.draggingElement,i=r.elementType;if(window.removeEventListener("mousemove",x),window.removeEventListener("mouseup",t),document.documentElement.style.cursor=l,null===a)return D(),void e.forceUpdate();"selection"===i?(o&&(o=!1),p.pop()):a.isSelected=!0,e.setState({draggingElement:null,elementType:"selection"}),e.forceUpdate()})),e.forceUpdate()}}),s.a.createElement("fieldset",null,s.a.createElement("legend",null,"Colors"),s.a.createElement("label",null,s.a.createElement("input",{type:"color",value:this.state.viewBackgroundColor,onChange:function(t){e.setState({viewBackgroundColor:t.target.value})}}),"Background"),s.a.createElement("label",null,s.a.createElement("input",{type:"color",value:this.state.currentItemStrokeColor,onChange:function(t){e.setState({currentItemStrokeColor:t.target.value})}}),"Shape Stroke"),s.a.createElement("label",null,s.a.createElement("input",{type:"color",value:this.state.currentItemBackgroundColor,onChange:function(t){e.setState({currentItemBackgroundColor:t.target.value})}}),"Shape Background")),s.a.createElement("fieldset",null,s.a.createElement("legend",null,"Export"),s.a.createElement("button",{onClick:function(){m({exportBackground:e.state.exportBackground,exportVisibleOnly:e.state.exportVisibleOnly,exportPadding:e.state.exportPadding,viewBackgroundColor:e.state.viewBackgroundColor})}},"Export to png"),s.a.createElement("label",null,s.a.createElement("input",{type:"checkbox",checked:this.state.exportBackground,onChange:function(t){e.setState({exportBackground:t.target.checked})}}),"background"),s.a.createElement("label",null,s.a.createElement("input",{type:"checkbox",checked:this.state.exportVisibleOnly,onChange:function(t){e.setState({exportVisibleOnly:t.target.checked})}}),"visible area only"),"(padding:",s.a.createElement("input",{type:"number",value:this.state.exportPadding,onChange:function(t){e.setState({exportPadding:Number(t.target.value)})},disabled:!this.state.exportVisibleOnly}),"px)"))}},{key:"componentDidUpdate",value:function(){var e;y(z,W,{scrollX:this.state.scrollX,scrollY:this.state.scrollY,viewBackgroundColor:this.state.viewBackgroundColor}),e=this.state,localStorage.setItem("excalidraw",JSON.stringify(p)),localStorage.setItem("excalidraw-state",JSON.stringify(e))}}]),t}(s.a.Component),V=document.getElementById("root");f.a.render(s.a.createElement(R,null),V);var K=document.getElementById("canvas"),z=h.a.canvas(K),W=K.getContext("2d");W.translate(.5,.5),f.a.render(s.a.createElement(R,null),V)},16:function(e,t,n){}},[[10,1,2]]]);
//# sourceMappingURL=main.53abfae8.chunk.js.map