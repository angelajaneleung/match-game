(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e){e.exports=[{id:1,image:"dog1.jpg"},{id:2,image:"dog2.jpg"},{id:3,image:"dog3.jpg"},{id:4,image:"dog4.jpg"},{id:5,image:"dog5.jpg"},{id:6,image:"dog6.jpg"},{id:7,image:"dog7.jpg"},{id:8,image:"dog8.jpg"},{id:9,image:"dog9.jpg"},{id:10,image:"dog10.jpg"},{id:11,image:"dog11.jpg"},{id:12,image:"dog12.jpg"},{id:13,image:"dog13.jpg"},{id:14,image:"dog14.jpg"},{id:15,image:"dog15.jpg"}]},function(e,t,a){e.exports=a(35)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){var o={"./dog1.jpg":20,"./dog10.jpg":21,"./dog11.jpg":22,"./dog12.jpg":23,"./dog13.jpg":24,"./dog14.jpg":25,"./dog15.jpg":26,"./dog2.jpg":27,"./dog3.jpg":28,"./dog4.jpg":29,"./dog5.jpg":30,"./dog6.jpg":31,"./dog7.jpg":32,"./dog8.jpg":33,"./dog9.jpg":34};function n(e){var t=i(e);return a(t)}function i(e){var t=o[e];if(!(t+1)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return t}n.keys=function(){return Object.keys(o)},n.resolve=i,e.exports=n,n.id=19},function(e,t,a){e.exports=a.p+"static/media/dog1.8146deb9.jpg"},function(e,t,a){e.exports=a.p+"static/media/dog10.d3ee9681.jpg"},function(e,t,a){e.exports=a.p+"static/media/dog11.d759d333.jpg"},function(e,t,a){e.exports=a.p+"static/media/dog12.8316c3d0.jpg"},function(e,t,a){e.exports=a.p+"static/media/dog13.a4d08f58.jpg"},function(e,t,a){e.exports=a.p+"static/media/dog14.166439ee.jpg"},function(e,t,a){e.exports=a.p+"static/media/dog15.ce1f2bfb.jpg"},function(e,t,a){e.exports=a.p+"static/media/dog2.d6ee8f02.jpg"},function(e,t,a){e.exports=a.p+"static/media/dog3.2fbf6403.jpg"},function(e,t,a){e.exports=a.p+"static/media/dog4.d13c0c88.jpg"},function(e,t,a){e.exports=a.p+"static/media/dog5.ec88c026.jpg"},function(e,t,a){e.exports=a.p+"static/media/dog6.db6e9969.jpg"},function(e,t,a){e.exports=a.p+"static/media/dog7.c6e9ecc1.jpg"},function(e,t,a){e.exports=a.p+"static/media/dog8.19fdfebd.jpg"},function(e,t,a){e.exports=a.p+"static/media/dog9.c313cfdd.jpg"},function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),i=a(7),c=a.n(i),g=(a(14),a(1)),r=a(2),d=a(4),s=a(3),p=a(5),m=(a(15),a(16),function(e){function t(){return Object(g.a)(this,t),Object(d.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return n.a.createElement("nav",{className:"navbar navbar-default navbar-fixed-top"},n.a.createElement("li",{className:"clickyLeft"},"Cute Doggo Game!"),n.a.createElement("li",{className:"clickyScoreRight"},"Score: ",this.props.score))}}]),t}(o.Component)),l=(a(17),function(){return n.a.createElement("header",{className:"header"},n.a.createElement("h1",null,"Click the DOGOS"),n.a.createElement("h2",null,"Click on an image to earn points, but don't click on any image more than once!"))}),u=(a(18),function(e){return n.a.createElement("div",{className:"card",onClick:e.imageClick},n.a.createElement("div",{className:"img-container"},n.a.createElement("img",{alt:e.image.replace(".jpg",""),src:a(19)("./"+e.image)})))}),f=a(8),j=function(e){function t(){var e,a;Object(g.a)(this,t);for(var o=arguments.length,n=new Array(o),i=0;i<o;i++)n[i]=arguments[i];return(a=Object(d.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(n)))).state={dog:f,clickedDog:[],score:0},a.imageClick=function(e){var t=e.target.alt;a.state.clickedDog.indexOf(t)>-1?(a.setState({wizard:a.state.dog.sort(function(e,t){return.5-Math.random()}),clickedDog:[],score:0}),alert("You already clicked that Dog! You've lost. Play again?")):a.setState({dog:a.state.dog.sort(function(e,t){return.5-Math.random()}),clickedDog:a.state.clickedDog.concat(t),score:a.state.score+1},function(){12===a.state.score&&(alert("Congrats! You Win!"),a.setState({dog:a.state.dog.sort(function(e,t){return.5-Math.random()}),clickedDog:[],score:0}))})},a}return Object(p.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",null,n.a.createElement(m,{score:this.state.score}),n.a.createElement(l,null),n.a.createElement("div",{className:"wrapper"},this.state.dog.map(function(t){return n.a.createElement(u,{imageClick:e.imageClick,id:t.id,key:t.id,image:t.image})})))}}]),t}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,1,2]]]);
//# sourceMappingURL=main.3f9839bd.chunk.js.map