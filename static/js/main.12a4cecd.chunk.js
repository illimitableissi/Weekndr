(this.webpackJsonpweeknd=this.webpackJsonpweeknd||[]).push([[0],{103:function(e,a,t){},184:function(e,a,t){e.exports=t(418)},189:function(e,a,t){},220:function(e,a){},222:function(e,a){},252:function(e,a){},253:function(e,a){},297:function(e,a){},299:function(e,a){},322:function(e,a){},34:function(e,a){a.spotify={id:"ac73e18e77e9438f97bc664c8503b3cd",secret:"1c84162373774c8cb85187e4c178afc6"}},418:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(181),l=t.n(r),s=(t(189),t(67)),i=(t(103),function(){return c.a.createElement("div",{className:"homeWrapper"},c.a.createElement("div",{className:"container center"},c.a.createElement("img",{src:"./images/xo.jpg",id:"weeknd"}),c.a.createElement("p",{id:"credit"},"Photo Credit: Steve Schofield"),c.a.createElement("br",null)))}),m=t(17),o=t(18),u=t(20),d=t(19),p=[{albumName:"after hours.",spotify:"https://api.spotify.com/v1/albums/6YlDIxqEjvY63ffH6AwCjd/tracks",cover:"./images/afterHours.jpg"},{albumName:"my dear melancholy.",spotify:"https://api.spotify.com/v1/albums/4qZBW3f2Q8y0k1A84d4iAO/tracks",cover:"./images/myDear.jpg"},{albumName:"starboy.",spotify:"https://api.spotify.com/v1/albums/2ODvWsOgouMbaA5xf0RkJe/tracks",cover:"./images/starboy.jpg"},{albumName:"beauty behind the madness.",spotify:"https://api.spotify.com/v1/albums/36yJ6fcaSCVsK1tybnNizj/tracks",cover:"./images/beautyMadness.jpg"},{albumName:"kiss land.",spotify:"https://api.spotify.com/v1/albums/6wRev1uYL0JsMsWqktJuVi/tracks",cover:"./images/kissLand.jpg"},{albumName:"trilogy.",spotify:"https://api.spotify.com/v1/albums/5EbpxRwbbpCJUepbqVTZ1U/tracks",cover:"./images/Trilogy.jpg"}],v=t(34),f=t(35);console.log(p);var E=function(e){Object(u.a)(t,e);var a=Object(d.a)(t);function t(){var e;Object(m.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=a.call.apply(a,[this].concat(c))).state={album:[]},e}return Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;new f(v.spotify).request(p[0].spotify).then((function(a){e.setState({album:a.items}),console.log(e.state.album)})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return c.a.createElement("div",{className:"parallax-container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col s6 m3"},c.a.createElement("div",{className:"card blue-grey darken-1"},c.a.createElement("div",{className:"card-content"},c.a.createElement("span",{className:"card-title activator white-text text-darken-4"},"View Tracks",c.a.createElement("i",{className:"material-icons right"}))),c.a.createElement("div",{className:"card-reveal"},c.a.createElement("span",{className:"card-title grey-text text-darken-4"},"Track Listing",c.a.createElement("i",{className:"material-icons right"},"close")),this.state.album.map((function(e){return c.a.createElement("p",null,e.name," ",c.a.createElement("a",{href:e.external_urls.spotify},"Play on Spotify"))})))))),c.a.createElement("div",{className:"parallax"},c.a.createElement("img",{src:p[0].cover})))}}]),t}(c.a.Component),b=t(34),y=t(35),h=function(e){Object(u.a)(t,e);var a=Object(d.a)(t);function t(){var e;Object(m.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=a.call.apply(a,[this].concat(c))).state={album:[]},e}return Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;new y(b.spotify).request(p[1].spotify).then((function(a){e.setState({album:a.items}),console.log(e.state.album)})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return c.a.createElement("div",{className:"parallax-container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col s6 m3"},c.a.createElement("div",{className:"card blue-grey darken-1"},c.a.createElement("div",{className:"card-content"},c.a.createElement("span",{className:"card-title activator white-text text-darken-4"},"View Tracks",c.a.createElement("i",{className:"material-icons right"}))),c.a.createElement("div",{className:"card-reveal"},c.a.createElement("span",{className:"card-title grey-text text-darken-4"},"Track Listing",c.a.createElement("i",{className:"material-icons right"},"close")),this.state.album.map((function(e){return c.a.createElement("p",null,e.name," ",c.a.createElement("a",{href:e.external_urls.spotify},"Play on Spotify"))})))))),c.a.createElement("div",{className:"parallax"},c.a.createElement("img",{src:p[1].cover})))}}]),t}(c.a.Component),N=t(34),g=t(35),k=function(e){Object(u.a)(t,e);var a=Object(d.a)(t);function t(){var e;Object(m.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=a.call.apply(a,[this].concat(c))).state={album:[]},e}return Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;new g(N.spotify).request(p[2].spotify).then((function(a){e.setState({album:a.items}),console.log(e.state.album)})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return c.a.createElement("div",{className:"parallax-container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col s6 m3"},c.a.createElement("div",{className:"card blue-grey darken-1"},c.a.createElement("div",{className:"card-content"},c.a.createElement("span",{className:"card-title activator white-text text-darken-4"},"View Tracks",c.a.createElement("i",{className:"material-icons right"}))),c.a.createElement("div",{className:"card-reveal"},c.a.createElement("span",{className:"card-title grey-text text-darken-4"},"Track Listing",c.a.createElement("i",{className:"material-icons right"},"close")),this.state.album.map((function(e){return c.a.createElement("p",null,e.name," ",c.a.createElement("a",{href:e.external_urls.spotify},"Play on Spotify"))})))))),c.a.createElement("div",{className:"parallax"},c.a.createElement("img",{src:p[2].cover})))}}]),t}(c.a.Component),w=t(34),x=t(35),j=function(e){Object(u.a)(t,e);var a=Object(d.a)(t);function t(){var e;Object(m.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=a.call.apply(a,[this].concat(c))).state={album:[]},e}return Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;new x(w.spotify).request(p[3].spotify).then((function(a){e.setState({album:a.items}),console.log(e.state.album)})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return c.a.createElement("div",{className:"parallax-container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col s6 m3"},c.a.createElement("div",{className:"card blue-grey darken-1"},c.a.createElement("div",{className:"card-content"},c.a.createElement("span",{className:"card-title activator white-text text-darken-4"},"View Tracks",c.a.createElement("i",{className:"material-icons right"}))),c.a.createElement("div",{className:"card-reveal"},c.a.createElement("span",{className:"card-title grey-text text-darken-4"},"Track Listing",c.a.createElement("i",{className:"material-icons right"},"close")),this.state.album.map((function(e){return c.a.createElement("p",null,e.name," ",c.a.createElement("a",{href:e.external_urls.spotify},"Play on Spotify"))})))))),c.a.createElement("div",{className:"parallax"},c.a.createElement("img",{src:p[3].cover})))}}]),t}(c.a.Component),O=t(34),S=t(35),T=function(e){Object(u.a)(t,e);var a=Object(d.a)(t);function t(){var e;Object(m.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=a.call.apply(a,[this].concat(c))).state={album:[]},e}return Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;new S(O.spotify).request(p[4].spotify).then((function(a){e.setState({album:a.items}),console.log(e.state.album)})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return c.a.createElement("div",{className:"parallax-container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col s6 m3"},c.a.createElement("div",{className:"card blue-grey darken-1"},c.a.createElement("div",{className:"card-content"},c.a.createElement("span",{className:"card-title activator white-text text-darken-4"},"View Tracks",c.a.createElement("i",{className:"material-icons right"}))),c.a.createElement("div",{className:"card-reveal"},c.a.createElement("span",{className:"card-title grey-text text-darken-4"},"Track Listing",c.a.createElement("i",{className:"material-icons right"},"close")),this.state.album.map((function(e){return c.a.createElement("p",null,e.name," ",c.a.createElement("a",{href:e.external_urls.spotify},"Play on Spotify"))})))))),c.a.createElement("div",{className:"parallax"},c.a.createElement("img",{src:p[4].cover})))}}]),t}(c.a.Component),q=t(34),A=t(35),C=function(e){Object(u.a)(t,e);var a=Object(d.a)(t);function t(){var e;Object(m.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=a.call.apply(a,[this].concat(c))).state={album:[]},e}return Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;new A(q.spotify).request(p[5].spotify).then((function(a){e.setState({album:a.items}),console.log(e.state.album)})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return c.a.createElement("div",{className:"parallax-container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col s6 m3"},c.a.createElement("div",{className:"card blue-grey darken-1"},c.a.createElement("div",{className:"card-content"},c.a.createElement("span",{className:"card-title activator white-text text-darken-4"},"View Tracks",c.a.createElement("i",{className:"material-icons right"}))),c.a.createElement("div",{className:"card-reveal"},c.a.createElement("span",{className:"card-title grey-text text-darken-4"},"Track Listing",c.a.createElement("i",{className:"material-icons right"},"close")),this.state.album.map((function(e){return c.a.createElement("p",null,e.name," ",c.a.createElement("a",{href:e.external_urls.spotify},"Play on Spotify"))})))))),c.a.createElement("div",{className:"parallax"},c.a.createElement("img",{src:p[5].cover})))}}]),t}(c.a.Component),M=function(e){return c.a.createElement("div",{class:"section white"},c.a.createElement("div",{class:"row container"},c.a.createElement("h2",{class:"header center",id:"section","data-aos":"fade-down","data-aos-offset":"300"},e.albumName)))},D=function(){return c.a.createElement("div",null,c.a.createElement(M,{albumName:p[0].albumName}),c.a.createElement(E,null),c.a.createElement(M,{albumName:p[1].albumName}),c.a.createElement(h,null),c.a.createElement(M,{albumName:p[2].albumName}),c.a.createElement(k,null),c.a.createElement(M,{albumName:p[3].albumName}),c.a.createElement(j,null),c.a.createElement(M,{albumName:p[4].albumName}),c.a.createElement(T,null),c.a.createElement(M,{albumName:p[5].albumName}),c.a.createElement(C,null),c.a.createElement("br",null),c.a.createElement("div",{className:"center"},c.a.createElement("img",{src:"./images/xo.jpg",id:"weeknd"})))};var V=function(){return c.a.createElement(s.a,{basename:"/Weekndr"},c.a.createElement("div",null,c.a.createElement(s.b,{to:"/",component:i}),c.a.createElement(s.b,{to:"/albums",component:D})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(V,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[184,1,2]]]);
//# sourceMappingURL=main.12a4cecd.chunk.js.map