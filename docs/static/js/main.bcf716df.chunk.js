(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,n){e.exports=n(28)},22:function(e,t,n){},24:function(e,t,n){},26:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(11),c=n.n(i),o=(n(22),n(2)),l=n(3),s=n(6),u=n(4),h=n(7),f=n(12),v=n(5),d=n(1);function p(e){var t=["tile"];e.active?(t.push("active"),t.push(e.owner)):t.push("inactive"),e.win&&t.push("winner");var n=t.join(" ");return r.a.createElement("div",{className:n,onClick:e.clickhandler},r.a.createElement("div",{className:"content"}))}n(24);var w=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[6,4,2]],m=[0,1,2,3,4,5,6,7,8],g=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={tiles:{},turn:Math.random()>.5?"x":"y",winner:null,replay:!1},n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"cellClick",value:function(e){if(!this.state.winner&&!this.state.tiles[e]){var t=Object(d.a)({},this.state,{tiles:Object(d.a)({},this.state.tiles,Object(v.a)({},e,{active:!0,owner:this.state.turn}))});this.setState(this.checkWinAndGetNextState(t))}}},{key:"checkWinAndGetNextState",value:function(e){for(var t=[],n=e.tiles,a=0;a<w.length;a++){var r=Object(f.a)(w[a],3),i=r[0],c=r[1],o=r[2];n[i]&&n[c]&&n[o]&&n[i].owner===n[c].owner&&n[c].owner===n[o].owner&&(t.push(i),t.push(c),t.push(o))}if(t.length>0){var l={};return t.forEach(function(e){l[e]=Object(d.a)({},n[e],{win:!0})}),Object(d.a)({},e,{tiles:Object(d.a)({},n,l),winner:this.state.turn,replay:!0})}return Object(d.a)({},e,{turn:"x"===this.state.turn?"y":"x",replay:Object.keys(e.tiles).length===m.length})}},{key:"replay",value:function(){this.setState({tiles:{},winner:null,replay:!1})}},{key:"render",value:function(){var e=this,t=m.map(function(t){var n=e.state.tiles[t]||{};return r.a.createElement(p,{key:t,active:n.active,win:n.win,owner:n.owner,clickhandler:function(){return e.cellClick(t)}})});if(this.state.replay){var n=r.a.createElement("div",{className:"clearfix",key:"clearfix"}),a=r.a.createElement("div",{className:"replay",key:"replay",onClick:function(){return e.replay()}},r.a.createElement("h3",null,"Click to play again"));t.push(n),t.push(a)}return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("h3",null," Turn:",r.a.createElement("div",{className:"showTurn "+this.state.turn}))),r.a.createElement("div",{className:"gameboard turn-"+this.state.turn},t))}}]),t}(r.a.Component),k=(n(26),function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("h1",{className:"App-title"},"React-Tac-Toe")),r.a.createElement("main",null,r.a.createElement(g,null)))}}]),t}(a.Component)),y=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function b(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}c.a.render(r.a.createElement(k,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/react-tac-toe",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/react-tac-toe","/service-worker.js");y?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):b(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):b(e)})}}()}},[[13,2,1]]]);
//# sourceMappingURL=main.bcf716df.chunk.js.map