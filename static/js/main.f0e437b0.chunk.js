(this.webpackJsonpweeknd=this.webpackJsonpweeknd||[]).push([[0],{107:function(e,a,t){},189:function(e,a,t){e.exports=t(423)},194:function(e,a,t){},225:function(e,a){},227:function(e,a){},257:function(e,a){},258:function(e,a){},302:function(e,a){},304:function(e,a){},327:function(e,a){},423:function(e,a,t){"use strict";t.r(a);var c=t(0),n=t.n(c),r=t(185),l=t.n(r),s=(t(194),t(186)),m=t(36),i=(t(107),function(){return n.a.createElement("div",{className:"homeWrapper"},n.a.createElement("div",{className:"container center"},n.a.createElement("img",{src:"./images/xo.jpg",id:"weeknd"}),n.a.createElement("br",null),n.a.createElement("div",{className:"row"},n.a.createElement("a",{href:"/albums",className:"waves-effect black btn"},"View Albums"))))}),o=t(19),u=t(20),d=t(22),f=t(21),v=[{albumName:"after hours.",spotify:"https://api.spotify.com/v1/albums/6YlDIxqEjvY63ffH6AwCjd/tracks",cover:"./images/afterHours.jpg"},{albumName:"my dear melancholy.",spotify:"https://api.spotify.com/v1/albums/4qZBW3f2Q8y0k1A84d4iAO/tracks",cover:"./images/myDear.jpg"},{albumName:"starboy.",spotify:"https://api.spotify.com/v1/albums/2ODvWsOgouMbaA5xf0RkJe/tracks",cover:"./images/starboy.jpg"},{albumName:"beauty behind the madness.",spotify:"https://api.spotify.com/v1/albums/36yJ6fcaSCVsK1tybnNizj/tracks",cover:"./images/beautyMadness.jpg"},{albumName:"kiss land.",spotify:"https://api.spotify.com/v1/albums/6wRev1uYL0JsMsWqktJuVi/tracks",cover:"./images/kissLand.jpg"},{albumName:"trilogy.",spotify:"https://api.spotify.com/v1/albums/5EbpxRwbbpCJUepbqVTZ1U/tracks",cover:"./images/Trilogy.jpg"}],p=t(40);console.log(v);var E=function(e){Object(d.a)(t,e);var a=Object(f.a)(t);function t(){var e;Object(o.a)(this,t);for(var c=arguments.length,n=new Array(c),r=0;r<c;r++)n[r]=arguments[r];return(e=a.call.apply(a,[this].concat(n))).state={album:[]},e}return Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;new p({id:"ac73e18e77e9438f97bc664c8503b3cd",secret:"1c84162373774c8cb85187e4c178afc6"}).request(v[0].spotify).then((function(a){e.setState({album:a.items}),console.log(e.state.album)})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return n.a.createElement("div",{className:"parallax-container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col s6 m3"},n.a.createElement("div",{className:"card blue-grey darken-1"},n.a.createElement("div",{className:"card-content"},n.a.createElement("span",{className:"card-title activator white-text text-darken-4"},"View Tracks",n.a.createElement("i",{className:"material-icons right"}))),n.a.createElement("div",{className:"card-reveal"},n.a.createElement("span",{className:"card-title grey-text text-darken-4"},"Track Listing",n.a.createElement("i",{className:"material-icons right"},"close")),this.state.album.map((function(e){return n.a.createElement("p",null,e.name," ",n.a.createElement("a",{href:e.external_urls.spotify},"Play on Spotify"))})))))),n.a.createElement("div",{className:"parallax"},n.a.createElement("img",{src:v[0].cover})))}}]),t}(n.a.Component),b=t(40),h=function(e){Object(d.a)(t,e);var a=Object(f.a)(t);function t(){var e;Object(o.a)(this,t);for(var c=arguments.length,n=new Array(c),r=0;r<c;r++)n[r]=arguments[r];return(e=a.call.apply(a,[this].concat(n))).state={album:[]},e}return Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;new b({id:"ac73e18e77e9438f97bc664c8503b3cd",secret:"1c84162373774c8cb85187e4c178afc6"}).request(v[1].spotify).then((function(a){e.setState({album:a.items}),console.log(e.state.album)})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return n.a.createElement("div",{className:"parallax-container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col s6 m3"},n.a.createElement("div",{className:"card blue-grey darken-1"},n.a.createElement("div",{className:"card-content"},n.a.createElement("span",{className:"card-title activator white-text text-darken-4"},"View Tracks",n.a.createElement("i",{className:"material-icons right"}))),n.a.createElement("div",{className:"card-reveal"},n.a.createElement("span",{className:"card-title grey-text text-darken-4"},"Track Listing",n.a.createElement("i",{className:"material-icons right"},"close")),this.state.album.map((function(e){return n.a.createElement("p",null,e.name," ",n.a.createElement("a",{href:e.external_urls.spotify},"Play on Spotify"))})))))),n.a.createElement("div",{className:"parallax"},n.a.createElement("img",{src:v[1].cover})))}}]),t}(n.a.Component),N=t(40),y=function(e){Object(d.a)(t,e);var a=Object(f.a)(t);function t(){var e;Object(o.a)(this,t);for(var c=arguments.length,n=new Array(c),r=0;r<c;r++)n[r]=arguments[r];return(e=a.call.apply(a,[this].concat(n))).state={album:[]},e}return Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;new N({id:"ac73e18e77e9438f97bc664c8503b3cd",secret:"1c84162373774c8cb85187e4c178afc6"}).request(v[2].spotify).then((function(a){e.setState({album:a.items}),console.log(e.state.album)})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return n.a.createElement("div",{className:"parallax-container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col s6 m3"},n.a.createElement("div",{className:"card blue-grey darken-1"},n.a.createElement("div",{className:"card-content"},n.a.createElement("span",{className:"card-title activator white-text text-darken-4"},"View Tracks",n.a.createElement("i",{className:"material-icons right"}))),n.a.createElement("div",{className:"card-reveal"},n.a.createElement("span",{className:"card-title grey-text text-darken-4"},"Track Listing",n.a.createElement("i",{className:"material-icons right"},"close")),this.state.album.map((function(e){return n.a.createElement("p",null,e.name," ",n.a.createElement("a",{href:e.external_urls.spotify},"Play on Spotify"))})))))),n.a.createElement("div",{className:"parallax"},n.a.createElement("img",{src:v[2].cover})))}}]),t}(n.a.Component),g=t(40),k=function(e){Object(d.a)(t,e);var a=Object(f.a)(t);function t(){var e;Object(o.a)(this,t);for(var c=arguments.length,n=new Array(c),r=0;r<c;r++)n[r]=arguments[r];return(e=a.call.apply(a,[this].concat(n))).state={album:[]},e}return Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;new g({id:"ac73e18e77e9438f97bc664c8503b3cd",secret:"1c84162373774c8cb85187e4c178afc6"}).request(v[3].spotify).then((function(a){e.setState({album:a.items}),console.log(e.state.album)})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return n.a.createElement("div",{className:"parallax-container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col s6 m3"},n.a.createElement("div",{className:"card blue-grey darken-1"},n.a.createElement("div",{className:"card-content"},n.a.createElement("span",{className:"card-title activator white-text text-darken-4"},"View Tracks",n.a.createElement("i",{className:"material-icons right"}))),n.a.createElement("div",{className:"card-reveal"},n.a.createElement("span",{className:"card-title grey-text text-darken-4"},"Track Listing",n.a.createElement("i",{className:"material-icons right"},"close")),this.state.album.map((function(e){return n.a.createElement("p",null,e.name," ",n.a.createElement("a",{href:e.external_urls.spotify},"Play on Spotify"))})))))),n.a.createElement("div",{className:"parallax"},n.a.createElement("img",{src:v[3].cover})))}}]),t}(n.a.Component),w=t(40),x=function(e){Object(d.a)(t,e);var a=Object(f.a)(t);function t(){var e;Object(o.a)(this,t);for(var c=arguments.length,n=new Array(c),r=0;r<c;r++)n[r]=arguments[r];return(e=a.call.apply(a,[this].concat(n))).state={album:[]},e}return Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;new w({id:"ac73e18e77e9438f97bc664c8503b3cd",secret:"1c84162373774c8cb85187e4c178afc6"}).request(v[4].spotify).then((function(a){e.setState({album:a.items}),console.log(e.state.album)})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return n.a.createElement("div",{className:"parallax-container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col s6 m3"},n.a.createElement("div",{className:"card blue-grey darken-1"},n.a.createElement("div",{className:"card-content"},n.a.createElement("span",{className:"card-title activator white-text text-darken-4"},"View Tracks",n.a.createElement("i",{className:"material-icons right"}))),n.a.createElement("div",{className:"card-reveal"},n.a.createElement("span",{className:"card-title grey-text text-darken-4"},"Track Listing",n.a.createElement("i",{className:"material-icons right"},"close")),this.state.album.map((function(e){return n.a.createElement("p",null,e.name," ",n.a.createElement("a",{href:e.external_urls.spotify},"Play on Spotify"))})))))),n.a.createElement("div",{className:"parallax"},n.a.createElement("img",{src:v[4].cover})))}}]),t}(n.a.Component),j=t(40),O=function(e){Object(d.a)(t,e);var a=Object(f.a)(t);function t(){var e;Object(o.a)(this,t);for(var c=arguments.length,n=new Array(c),r=0;r<c;r++)n[r]=arguments[r];return(e=a.call.apply(a,[this].concat(n))).state={album:[]},e}return Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;new j({id:"ac73e18e77e9438f97bc664c8503b3cd",secret:"1c84162373774c8cb85187e4c178afc6"}).request(v[5].spotify).then((function(a){e.setState({album:a.items}),console.log(e.state.album)})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return n.a.createElement("div",{className:"parallax-container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col s6 m3"},n.a.createElement("div",{className:"card blue-grey darken-1"},n.a.createElement("div",{className:"card-content"},n.a.createElement("span",{className:"card-title activator white-text text-darken-4"},"View Tracks",n.a.createElement("i",{className:"material-icons right"}))),n.a.createElement("div",{className:"card-reveal"},n.a.createElement("span",{className:"card-title grey-text text-darken-4"},"Track Listing",n.a.createElement("i",{className:"material-icons right"},"close")),this.state.album.map((function(e){return n.a.createElement("p",null,e.name," ",n.a.createElement("a",{href:e.external_urls.spotify},"Play on Spotify"))})))))),n.a.createElement("div",{className:"parallax"},n.a.createElement("img",{src:v[5].cover})))}}]),t}(n.a.Component),S=function(e){return n.a.createElement("div",{class:"section white"},n.a.createElement("div",{class:"row container"},n.a.createElement("h2",{class:"header center",id:"section","data-aos":"fade-down","data-aos-offset":"300"},e.albumName)))},T=function(){return n.a.createElement("div",null,n.a.createElement(S,{albumName:v[0].albumName}),n.a.createElement(E,null),n.a.createElement(S,{albumName:v[1].albumName}),n.a.createElement(h,null),n.a.createElement(S,{albumName:v[2].albumName}),n.a.createElement(y,null),n.a.createElement(S,{albumName:v[3].albumName}),n.a.createElement(k,null),n.a.createElement(S,{albumName:v[4].albumName}),n.a.createElement(x,null),n.a.createElement(S,{albumName:v[5].albumName}),n.a.createElement(O,null),n.a.createElement("br",null),n.a.createElement("div",{className:"center"},n.a.createElement("a",{href:"/"},n.a.createElement("img",{src:"/images/xo.jpg",id:"weeknd"}))))};var A=function(){return n.a.createElement(s.a,null,n.a.createElement("div",null,n.a.createElement(m.a,{exact:!0,path:"/",component:i}),n.a.createElement(m.a,{exact:!0,path:"/albums",component:T})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(A,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[189,1,2]]]);
//# sourceMappingURL=main.f0e437b0.chunk.js.map