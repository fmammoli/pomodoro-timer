(this.webpackJsonppomodoro=this.webpackJsonppomodoro||[]).push([[0],{30:function(n,e,t){"use strict";t.r(e);var o,r,c,i,a=t(0),s=t.n(a),l=t(16),d=t.n(l),j=t(12),b=t(9),u=t(3),x=t(4),f=x.b.button(o||(o=Object(u.a)(["\n  width: 40px;\n  height: 40px;\n  background-color: tomato;\n  border-color: tomato;\n  color: #fff;\n  font-size: 12px;\n  text-align: center;\n  line-height: 30px;\n  margin: 1px;\n  //border-radius: 50%;\n  &:focus {\n    outline: 0;\n  }\n"]))),h=t(5),m=t(7),p=t(1),g=function(){var n=15e5,e=s.a.useState(n),t=Object(b.a)(e,2),o=t[0],r=t[1],c=s.a.useState(!1),i=Object(b.a)(c,2),a=i[0],l=i[1],d=s.a.useState(!0),u=Object(b.a)(d,2),x=u[0],g=u[1];return s.a.useEffect((function(){if(a){var e=Date.now(),t=setInterval((function(){var t=Date.now()-e;if(console.log(t),r((function(n){return n-t})),o<=0)return r(x?3e5:n),void setTimeout((function(){g(!x)}),1e3)}),1e3);return function(){clearInterval(t)}}}),[a,o]),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("p",{style:{margin:"0",color:"tomato",textAlign:"center"},children:x?"work":"rest"}),Object(p.jsx)("p",{style:{margin:"70px 0",fontSize:"5em",textAlign:"center"},children:function(n){var e=Math.floor(n/6e4),t=(n%6e4/1e3).toFixed(0);return 60===t&&(Object(j.a)("minutes"),e+=1,Object(j.a)("seconds"),t=0),(e<10?"0":"")+e+":"+(t<10?"0":"")+t}(o)}),Object(p.jsxs)("div",{style:{margin:"20px 0",display:"flex",justifyContent:"center"},children:[Object(p.jsx)(f,{onClick:function(){a||r((function(n){return n-1e3})),l(!0)},children:Object(p.jsx)(h.a,{icon:m.b})}),Object(p.jsx)(f,{onClick:function(){l(!1)},children:Object(p.jsx)(h.a,{icon:m.a})}),Object(p.jsx)(f,{onClick:function(){r((function(n){return n+6e4}))},children:Object(p.jsx)(h.a,{icon:m.c})}),Object(p.jsx)(f,{onClick:function(){l(!1),r(n),g(!0)},children:Object(p.jsx)(h.a,{icon:m.d})})]})]})},O=x.b.div(r||(r=Object(u.a)(["\n  position: absolute;\n  top: 0;\n  border: 0;\n  right: 0;\n  z-index: 20;\n"]))),C=x.b.svg(c||(c=Object(u.a)(["\n  fill: tomato;\n  color: #1a1a42;\n  cursor: pointer;\n  &:hover .octo-arm{\n    animation:octocat-wave 560ms ease-in-out\n  }\n  @keyframes octocat-wave{\n    0%,100%{transform:rotate(0)}\n    20%,60%{transform:rotate(-25deg)}\n    40%,80%{transform:rotate(10deg)}\n  }\n  @media (max-width:500px){\n    &:hover .octo-arm{\n      animation:none\n    }\n    & .octo-arm{\n      animation:octocat-wave 560ms ease-in-out\n    }\n  }\n"])));function v(n){var e=n.projectUrl;return Object(p.jsx)(O,{children:Object(p.jsx)("a",{href:e,target:"_blank",rel:"noreferrer",children:Object(p.jsxs)(C,{className:"githubCorner",width:"80",height:"80",viewBox:"0 0 250 250","aria-hidden":"true",children:[Object(p.jsx)("path",{d:"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"}),Object(p.jsx)("path",{d:"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",fill:"currentColor",style:{transformOrigin:"130px 106px"},className:"octo-arm"}),Object(p.jsx)("path",{d:"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",fill:"currentColor",className:"octo-body"})]})})})}var w,y=x.b.div(i||(i=Object(u.a)(["\n  width: 350px;\n  height: 80vh;\n  background-color: #1a1a42;\n  box-shadow: 0px 0px 5px 2px rgba(0,0,0,0.5);\n  /* padding: 20px; */\n  margin: auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  @media only screen and (max-width: 768px) {\n    width: 100vw;\n    height: 100vh;\n    padding: 15px 0;\n  }\n"]))),k=Object(x.a)(w||(w=Object(u.a)(["\n  * {\n    box-sizing: border-box;\n  }\n  body {\n    margin: 0;\n    padding: 0;\n    background-image: linear-gradient( #1a1a42, #151535 );\n    font-family: 'Cutive Mono', monospace;\n    color: #fff;\n    min-height: 100vh;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  }\n"])));var L=function(){return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)(k,{}),Object(p.jsx)(v,{projectUrl:"https://github.com/heyralfs/pomodoro-timer"}),Object(p.jsx)(y,{children:Object(p.jsx)(g,{})})]})},F=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,31)).then((function(e){var t=e.getCLS,o=e.getFID,r=e.getFCP,c=e.getLCP,i=e.getTTFB;t(n),o(n),r(n),c(n),i(n)}))};d.a.render(Object(p.jsx)(s.a.StrictMode,{children:Object(p.jsx)(L,{})}),document.getElementById("root")),F()}},[[30,1,2]]]);
//# sourceMappingURL=main.eeee1723.chunk.js.map