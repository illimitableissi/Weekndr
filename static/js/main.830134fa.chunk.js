(this.webpackJsonpweeknd=this.webpackJsonpweeknd||[]).push([[0],{108:function(e,a,t){},190:function(e,a,t){e.exports=t(424)},195:function(e,a,t){},226:function(e,a){},228:function(e,a){},258:function(e,a){},259:function(e,a){},303:function(e,a){},305:function(e,a){},328:function(e,a){},40:function(e,a){a.spotify={id:"ac73e18e77e9438f97bc664c8503b3cd",secret:"1c84162373774c8cb85187e4c178afc6"}},424:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(186),l=t.n(r),s=(t(195),t(187)),m=t(36),i=(t(108),function(){return c.a.createElement("div",{className:"homeWrapper"},c.a.createElement("div",{className:"container center"},c.a.createElement("img",{src:"./images/xo.jpg",id:"weeknd"}),c.a.createElement("br",null),c.a.createElement("div",{className:"row"},c.a.createElement("a",{href:"/Weekndr/albums",className:"waves-effect black btn"},"View Albums"))))}),o=t(19),u=t(20),d=t(22),p=t(21),v=[{albumName:"after hours.",spotify:"https://api.spotify.com/v1/albums/6YlDIxqEjvY63ffH6AwCjd/tracks",cover:"./images/afterHours.jpg"},{albumName:"my dear melancholy.",spotify:"https://api.spotify.com/v1/albums/4qZBW3f2Q8y0k1A84d4iAO/tracks",cover:"./images/myDear.jpg"},{albumName:"starboy.",spotify:"https://api.spotify.com/v1/albums/2ODvWsOgouMbaA5xf0RkJe/tracks",cover:"./images/starboy.jpg"},{albumName:"beauty behind the madness.",spotify:"https://api.spotify.com/v1/albums/36yJ6fcaSCVsK1tybnNizj/tracks",cover:"./images/beautyMadness.jpg"},{albumName:"kiss land.",spotify:"https://api.spotify.com/v1/albums/6wRev1uYL0JsMsWqktJuVi/tracks",cover:"./images/kissLand.jpg"},{albumName:"trilogy.",spotify:"https://api.spotify.com/v1/albums/5EbpxRwbbpCJUepbqVTZ1U/tracks",cover:"./images/Trilogy.jpg"}],f=t(40),E=t(41);console.log(f);var b=function(e){Object(d.a)(t,e);var a=Object(p.a)(t);function t(){var e;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=a.call.apply(a,[this].concat(c))).state={album:[]},e}return Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;new E(f.spotify).request(v[0].spotify).then((function(a){e.setState({album:a.items}),console.log(e.state.album)})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return c.a.createElement("div",{className:"parallax-container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col s6 m3"},c.a.createElement("div",{className:"card blue-grey darken-1"},c.a.createElement("div",{className:"card-content"},c.a.createElement("span",{className:"card-title activator white-text text-darken-4"},"View Tracks",c.a.createElement("i",{className:"material-icons right"}))),c.a.createElement("div",{className:"card-reveal"},c.a.createElement("span",{className:"card-title grey-text text-darken-4"},"Track Listing",c.a.createElement("i",{className:"material-icons right"},"close")),this.state.album.map((function(e){return c.a.createElement("p",null,e.name," ",c.a.createElement("a",{href:e.external_urls.spotify},"Play on Spotify"))})))))),c.a.createElement("div",{className:"parallax"},c.a.createElement("img",{src:v[0].cover})))}}]),t}(c.a.Component),h=t(40),y=t(41),N=function(e){Object(d.a)(t,e);var a=Object(p.a)(t);function t(){var e;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=a.call.apply(a,[this].concat(c))).state={album:[]},e}return Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;new y(h.spotify).request(v[1].spotify).then((function(a){e.setState({album:a.items}),console.log(e.state.album)})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return c.a.createElement("div",{className:"parallax-container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col s6 m3"},c.a.createElement("div",{className:"card blue-grey darken-1"},c.a.createElement("div",{className:"card-content"},c.a.createElement("span",{className:"card-title activator white-text text-darken-4"},"View Tracks",c.a.createElement("i",{className:"material-icons right"}))),c.a.createElement("div",{className:"card-reveal"},c.a.createElement("span",{className:"card-title grey-text text-darken-4"},"Track Listing",c.a.createElement("i",{className:"material-icons right"},"close")),this.state.album.map((function(e){return c.a.createElement("p",null,e.name," ",c.a.createElement("a",{href:e.external_urls.spotify},"Play on Spotify"))})))))),c.a.createElement("div",{className:"parallax"},c.a.createElement("img",{src:v[1].cover})))}}]),t}(c.a.Component),g=t(40),k=t(41),w=function(e){Object(d.a)(t,e);var a=Object(p.a)(t);function t(){var e;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=a.call.apply(a,[this].concat(c))).state={album:[]},e}return Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;new k(g.spotify).request(v[2].spotify).then((function(a){e.setState({album:a.items}),console.log(e.state.album)})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return c.a.createElement("div",{className:"parallax-container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col s6 m3"},c.a.createElement("div",{className:"card blue-grey darken-1"},c.a.createElement("div",{className:"card-content"},c.a.createElement("span",{className:"card-title activator white-text text-darken-4"},"View Tracks",c.a.createElement("i",{className:"material-icons right"}))),c.a.createElement("div",{className:"card-reveal"},c.a.createElement("span",{className:"card-title grey-text text-darken-4"},"Track Listing",c.a.createElement("i",{className:"material-icons right"},"close")),this.state.album.map((function(e){return c.a.createElement("p",null,e.name," ",c.a.createElement("a",{href:e.external_urls.spotify},"Play on Spotify"))})))))),c.a.createElement("div",{className:"parallax"},c.a.createElement("img",{src:v[2].cover})))}}]),t}(c.a.Component),x=t(40),j=t(41),O=function(e){Object(d.a)(t,e);var a=Object(p.a)(t);function t(){var e;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=a.call.apply(a,[this].concat(c))).state={album:[]},e}return Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;new j(x.spotify).request(v[3].spotify).then((function(a){e.setState({album:a.items}),console.log(e.state.album)})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return c.a.createElement("div",{className:"parallax-container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col s6 m3"},c.a.createElement("div",{className:"card blue-grey darken-1"},c.a.createElement("div",{className:"card-content"},c.a.createElement("span",{className:"card-title activator white-text text-darken-4"},"View Tracks",c.a.createElement("i",{className:"material-icons right"}))),c.a.createElement("div",{className:"card-reveal"},c.a.createElement("span",{className:"card-title grey-text text-darken-4"},"Track Listing",c.a.createElement("i",{className:"material-icons right"},"close")),this.state.album.map((function(e){return c.a.createElement("p",null,e.name," ",c.a.createElement("a",{href:e.external_urls.spotify},"Play on Spotify"))})))))),c.a.createElement("div",{className:"parallax"},c.a.createElement("img",{src:v[3].cover})))}}]),t}(c.a.Component),S=t(40),T=t(41),A=function(e){Object(d.a)(t,e);var a=Object(p.a)(t);function t(){var e;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=a.call.apply(a,[this].concat(c))).state={album:[]},e}return Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;new T(S.spotify).request(v[4].spotify).then((function(a){e.setState({album:a.items}),console.log(e.state.album)})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return c.a.createElement("div",{className:"parallax-container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col s6 m3"},c.a.createElement("div",{className:"card blue-grey darken-1"},c.a.createElement("div",{className:"card-content"},c.a.createElement("span",{className:"card-title activator white-text text-darken-4"},"View Tracks",c.a.createElement("i",{className:"material-icons right"}))),c.a.createElement("div",{className:"card-reveal"},c.a.createElement("span",{className:"card-title grey-text text-darken-4"},"Track Listing",c.a.createElement("i",{className:"material-icons right"},"close")),this.state.album.map((function(e){return c.a.createElement("p",null,e.name," ",c.a.createElement("a",{href:e.external_urls.spotify},"Play on Spotify"))})))))),c.a.createElement("div",{className:"parallax"},c.a.createElement("img",{src:v[4].cover})))}}]),t}(c.a.Component),q=t(40),M=t(41),V=function(e){Object(d.a)(t,e);var a=Object(p.a)(t);function t(){var e;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=a.call.apply(a,[this].concat(c))).state={album:[]},e}return Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;new M(q.spotify).request(v[5].spotify).then((function(a){e.setState({album:a.items}),console.log(e.state.album)})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return c.a.createElement("div",{className:"parallax-container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col s6 m3"},c.a.createElement("div",{className:"card blue-grey darken-1"},c.a.createElement("div",{className:"card-content"},c.a.createElement("span",{className:"card-title activator white-text text-darken-4"},"View Tracks",c.a.createElement("i",{className:"material-icons right"}))),c.a.createElement("div",{className:"card-reveal"},c.a.createElement("span",{className:"card-title grey-text text-darken-4"},"Track Listing",c.a.createElement("i",{className:"material-icons right"},"close")),this.state.album.map((function(e){return c.a.createElement("p",null,e.name," ",c.a.createElement("a",{href:e.external_urls.spotify},"Play on Spotify"))})))))),c.a.createElement("div",{className:"parallax"},c.a.createElement("img",{src:v[5].cover})))}}]),t}(c.a.Component),C=function(e){return c.a.createElement("div",{class:"section white"},c.a.createElement("div",{class:"row container"},c.a.createElement("h2",{class:"header center",id:"section","data-aos":"fade-down","data-aos-offset":"300"},e.albumName)))},D=function(){return c.a.createElement("div",null,c.a.createElement(C,{albumName:v[0].albumName}),c.a.createElement(b,null),c.a.createElement(C,{albumName:v[1].albumName}),c.a.createElement(N,null),c.a.createElement(C,{albumName:v[2].albumName}),c.a.createElement(w,null),c.a.createElement(C,{albumName:v[3].albumName}),c.a.createElement(O,null),c.a.createElement(C,{albumName:v[4].albumName}),c.a.createElement(A,null),c.a.createElement(C,{albumName:v[5].albumName}),c.a.createElement(V,null),c.a.createElement("br",null),c.a.createElement("div",{className:"center"},c.a.createElement("a",{href:"/"},c.a.createElement("img",{src:"./images/xo.jpg",id:"weeknd"}))))};var W=function(){return c.a.createElement(s.a,null,c.a.createElement("div",null,c.a.createElement(m.a,{exact:!0,path:"/Weekndr/",component:i}),c.a.createElement(m.a,{exact:!0,path:"/Weekndr/albums",component:D})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(W,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[190,1,2]]]);
//# sourceMappingURL=main.830134fa.chunk.js.map