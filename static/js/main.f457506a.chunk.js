(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,a){e.exports={fullStory:"comments_fullStory__2oyDf",comments:"comments_comments__2ENcL",comment:"comments_comment__10uPP",commentBody:"comments_commentBody__3GQtv",children:"comments_children__3SlK3",card:"comments_card__318Iw"}},21:function(e,t,a){e.exports={root:"card_root__1cdCV",index:"card_index__2F8-v",content:"card_content__1SOzr",meta:"card_meta__1NTdZ"}},22:function(e,t,a){e.exports={header:"header_header__rmrdQ",nav:"header_nav__1G1Uo",logo:"header_logo__3bkjP"}},28:function(e,t,a){e.exports={container:"app_container__18mIH"}},29:function(e,t,a){e.exports={root:"pagination_root__2nEVp"}},31:function(e,t,a){e.exports=a(57)},36:function(e,t,a){},57:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(27),i=a.n(c);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o=a(4),s=a(5),l=a(8),u=a(6),m=a(7),h=a(62),d=a(58),p=a(61),g=(a(36),a(28)),f=a.n(g),v=a(13),E=a(20),b=a(29),y=a.n(b);var O=function(e){var t=e.currentPage,a=function(e){var t,a,n="/"===e.path;return console.log("Match from current Pagination: ",e),n?t=function(e){return e.replace(/\/:.*/gi,"")}(e.path):(a=e.url,t=a.replace(/\/page\/.*/gi,"")),t.lastIndexOf("/")===t.length-1&&(t=t.slice(0,t.length-2)),t}(e.match),n=Number(t)+1,c=Number(t)-1;return r.a.createElement("div",{className:y.a.root},c<0?"":r.a.createElement(E.a,{to:"".concat(a,"/page/").concat(c)},r.a.createElement("button",null,"Previous")),r.a.createElement(E.a,{to:"".concat(a,"/page/").concat(n)},r.a.createElement("button",null,"Next")))};var j=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={items:[],currentPage:0},a.handleChangePage=a.handleChangePage.bind(Object(v.a)(Object(v.a)(a))),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.page||0;this.handleChangePage(e)}},{key:"componentDidUpdate",value:function(e){var t=this,a=e.match.params.page!==this.props.match.params.page,n=e.allData!==this.props.allData,r=e.addIndex!==this.props.addIndex;if(console.log(e,this.props),a||n||r){var c=this.props.match.params.page||0;this.setState({items:[],currentPage:c},function(){return t.handleChangePage(c,t.props.addIndex)})}}},{key:"sliceItems",value:function(e,t,a){var n=a*t;return e.slice(n,n+a)}},{key:"handleChangePage",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],a=this.props,n=a.allData,r=a.perPage,c=n;t&&(c=c.map(function(e,t){return{id:e,index:t}}));var i=this.sliceItems(c,e,r);this.setState({items:i,currentPage:e})}},{key:"render",value:function(){return r.a.createElement("div",null,this.props.render(this.state.items),r.a.createElement(O,Object.assign({currentPage:this.state.currentPage},this.props)))}}]),t}(n.Component),_=(a(30),a(23)),k=a.n(_),S="GET_BEST_STORIES",x="GET_TOP_STORIES",N="GET_NEW_STORIES";k.a.initializeApp({databaseURL:"https://hacker-news.firebaseio.com/"});var C=k.a.database().ref("v0");function w(e){return C.child(e).once("value").then(function(e){return e.val()})}function D(e){return C.child("item").child(e).once("value")}function I(e){return C.child("user").child(e).once("value").then(function(e){return e.val()})}var F=a(21),P=a.n(F);function T(e){return function(e){var t=Math.floor(e/1e3/60),a=Math.floor(t/60),n=Math.floor(a/24);return t<60?"".concat(t," minutes ago"):a<24?"".concat(a," hours ago"):"".concat(n," days ago")}(function(e){return(new Date).getTime()-new Date(e)}(1e3*e))}var M=function(e){var t=e.by,a=e.descendants,n=e.id,c=e.score,i=e.time,o=e.title,s=e.url,l=e.index;return r.a.createElement("div",{className:P.a.root},void 0!==l?r.a.createElement("div",{className:P.a.index},l,"."):"",r.a.createElement("div",{className:P.a.content},r.a.createElement("h3",null,r.a.createElement("a",{href:s},o)),r.a.createElement("div",{className:P.a.meta},c," points | by ",r.a.createElement(E.a,{to:{pathname:"/user/".concat(t)}},t)," ",T(i)," |"," ",r.a.createElement(E.a,{to:{pathname:"/story/".concat(n)}},a," comments."))))};var V=function(e){return e.isFetching?"Loading...":e.children},L=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={data:void 0,isFetching:!0},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"fetch",value:function(e){var t=this;D(e).then(function(e){t.setState({data:e.val(),isFetching:!1})})}},{key:"componentDidMount",value:function(){var e=this.props.id;this.setState({isLoading:!0},this.fetch(e))}},{key:"componentDidUpdate",value:function(e){var t=this.props.id;e.id!==this.props.id&&this.setState({isLoading:!0},this.fetch(t))}},{key:"render",value:function(){var e=Object.assign({},this.state.data,this.props);return r.a.createElement(V,{isFetching:this.state.isFetching},r.a.createElement(M,e))}}]),t}(n.Component),B=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={idList:[],hasError:!1},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.updateStoryItems(this.props.category)}},{key:"componentDidUpdate",value:function(e){e.category!==this.props.category&&this.setState({idList:[]},this.updateStoryItems(this.props.category)),e.match.path!==this.props.match.path&&this.setState({idList:[]},this.updateStoryItems(this.props.category))}},{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"updateStoryItems",value:function(){var e=this;(function(e){switch(e){case S:return w("beststories");case N:return w("newstories");case x:return w("topstories")}})(this.props.category).then(function(t){e.setState({idList:t})})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("div",{className:"error"},"Error occured!"):r.a.createElement(j,Object.assign({},this.props,{allData:this.state.idList,perPage:15,addIndex:!0,render:function(e){return e.map(function(e,t){return r.a.createElement("div",null,r.a.createElement(L,{key:t,id:e.id,index:e.index}))})}}))}}]),t}(n.Component),U=function(e){var t=e.match,a=e.location,n=e.category;return console.log("ROUTING...",n,t.url,a),r.a.createElement(h.a,null,r.a.createElement(d.a,{exact:!0,path:t.url,render:function(e){return r.a.createElement(B,Object.assign({category:n,match:t},e))}}),r.a.createElement(d.a,{path:"".concat(t.url,"/page/:page"),render:function(e){return r.a.createElement(B,Object.assign({category:n,match:t},e))}}))},H=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={items:[],isFetching:!0},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.getData()}},{key:"getData",value:function(){var e=this;I(this.props.match.params.userName).then(function(e){var t,a=e.submitted;return t=a,Promise.all(t.map(function(e){return D(e)})).then(function(e){return e.map(function(e){return e.val()})})}).then(function(t){var a=t.filter(function(e){return"story"===e.type});e.setState({items:a,isFetching:!1})})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(V,{isFetching:this.state.isFetching},r.a.createElement(j,Object.assign({},this.props,{allData:this.state.items,perPage:25,addIndex:!0,render:function(e){return e.map(function(e){return r.a.createElement(M,Object.assign({},e.id,{index:e.index}))})}}))))}}]),t}(n.Component),G=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={id:"",created:"",karma:"",about:void 0},a.updateUser(e.match.params.name),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"updateUser",value:function(e){var t=this;e&&I(e).then(function(e){console.log(e),t.setState({id:e.id,created:e.created,karma:e.karma,about:e.about})})}},{key:"render",value:function(){return r.a.createElement("div",{className:"user"},r.a.createElement("li",null,"User: ",this.state.id),r.a.createElement("li",null,"Created: ",this.state.created," "),r.a.createElement("li",null,"Karma: ",this.state.karma),this.state.about?r.a.createElement("li",null,"About:"," ",r.a.createElement("div",{dangerouslySetInnerHTML:{__html:this.state.about}})," "):"",r.a.createElement("li",null,r.a.createElement(E.a,{to:{pathname:"/user/submissions/".concat(this.state.id)}},"Submissions")," "),r.a.createElement("li",null,r.a.createElement(E.a,{to:{pathname:"/user/comments/".concat(this.state.id)}},"Comments")," "))}}]),t}(n.Component),R=a(12),W=a.n(R);var K=function(e){var t=e.id,a=e.by,n=e.time,c=e.toggleVisible,i=e.isVisible;return r.a.createElement("div",{className:W.a.card},"by  ",r.a.createElement(E.a,{to:{pathname:"/user/".concat(a)}},a)," | ",T(n)," |",r.a.createElement("button",{onClick:c},i?"Hide":"Show ".concat(function(e){return document.getElementById(e).getElementsByClassName("commentText").length}(t))))},z=function(e){return r.a.createElement("div",{className:W.a.children},e.children)},A=function(e){var t=e.text,a=e.kids;return r.a.createElement("div",{className:"".concat(W.a.commentBody," commentText")},r.a.createElement("div",{dangerouslySetInnerHTML:{__html:t}}),r.a.createElement(z,null,a?a.map(function(e,t){return r.a.createElement(J,{key:t,id:e})}):""))},J=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={data:void 0,isFetching:!0,isVisible:!0},a.toggleVisible=a.toggleVisible.bind(Object(v.a)(Object(v.a)(a))),a.countChildren=a.countChildren.bind(Object(v.a)(Object(v.a)(a))),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"fetch",value:function(e){var t=this;D(e).then(function(e){t.setState({data:e.val(),isFetching:!1})})}},{key:"componentDidMount",value:function(){var e=this.props.id;this.setState({isLoading:!0},this.fetch(e))}},{key:"toggleVisible",value:function(e){this.setState({isVisible:!this.state.isVisible}),this.countChildren()}},{key:"countChildren",value:function(){console.log("Counting children...",r.a.Children,this.props.children);var e=document.getElementById(this.props.id).getElementsByClassName("commentText").length;console.log(e)}},{key:"render",value:function(){return r.a.createElement("div",{className:"".concat(W.a.comment),id:this.props.id},r.a.createElement(V,{isFetching:this.state.isFetching},r.a.createElement(K,Object.assign({},this.state.data,{toggleVisible:this.toggleVisible,isVisible:this.state.isVisible,countChildren:this.countChildren})),r.a.createElement("div",{hidden:!this.state.isVisible},r.a.createElement(A,this.state.data))))}}]),t}(n.Component),Q=J,Z=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={kids:[],notFound:!1},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.getComments(this.props.storyId,this.props.newKids)}},{key:"getComments",value:function(e){var t=this;e&&D(e).then(function(e){var a,n=e.val();n?(a=n.kids||[],t.setState({kids:a})):t.setState({notFound:!0})})}},{key:"render",value:function(){return r.a.createElement("section",{className:W.a.comments},this.state.notFound?"":this.state.kids.map(function(e,t){return r.a.createElement(Q,{key:t,id:e})}))}}]),t}(n.Component),$=function(e){function t(e){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).call(this,e))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,"Here will be user comments!")}}]),t}(n.Component),q=function(e){return r.a.createElement("div",null,"The content you have been looking for is not found ")},X=function(e){var t=e.match;switch(console.log("Match",t),t.params.category){case"submissions":return console.log("Matched Submissions!"),r.a.createElement(h.a,null,r.a.createElement(d.a,{exact:!0,path:"/user/:submissions/:userName/",component:H}),r.a.createElement(d.a,{exact:!0,path:"/user/:submissions/:userName/page/:page",component:H}));case"comments":return console.log("Matched Comments!"),r.a.createElement(h.a,null,r.a.createElement(d.a,{exact:!0,path:"/user/:comments/:userName/",component:$}),r.a.createElement(d.a,{exact:!0,path:"/user/:comments/:userName/page/:page",component:$}));default:return console.log("Did not match!"),r.a.createElement(d.a,{component:q})}},Y=function(e){e.match,e.location,e.category;return r.a.createElement(h.a,null,r.a.createElement(d.a,{exact:!0,path:"/user/:name",component:G}),r.a.createElement(d.a,{exact:!0,path:"/user/:category/:userName",component:X}),r.a.createElement(d.a,{exact:!0,path:"/user/:category/:userName/page/:page",component:X}))},ee=a(59),te=a(22),ae=a.n(te),ne=function(e){return r.a.createElement("div",{className:ae.a.logo},"Hacker News")},re=function(e){var t={color:"red"};return r.a.createElement("nav",{className:ae.a.nav},r.a.createElement(ee.a,{to:"/top",activeStyle:t},"Home")," | ",r.a.createElement(ee.a,{to:"/best",activeStyle:t},"Best")," | ",r.a.createElement(ee.a,{to:"/new",activeStyle:t},"New"))},ce=function(){return r.a.createElement("div",{className:ae.a.header},r.a.createElement(ne,null),r.a.createElement(re,null))},ie=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={itemData:{},comments:[],hasError:!1,notFound:!1,isFetching:!0},a.getItemData(e.match.params.id),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"getItemData",value:function(e){var t=this;D(e).then(function(e){var a=e.val();a?t.setState({itemData:a,isFetching:!1}):t.setState({notFound:!0})})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("div",{className:"error"},"Error occured!"):this.state.notFound?r.a.createElement("div",{className:W.a.fullStory},"We could not find the following item."):r.a.createElement("div",{className:W.a.fullStory},r.a.createElement(V,{isFetching:this.state.isFetching},r.a.createElement(M,this.state.itemData),r.a.createElement(Z,{storyId:this.props.match.params.id})))}}]),t}(n.Component),oe=function(e){function t(e){var a;return Object(o.a)(this,t),a=Object(l.a)(this,Object(u.a)(t).call(this,e)),console.log(e),console.log("Change V1"),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:f.a.container},r.a.createElement(ce,null),r.a.createElement(h.a,null,r.a.createElement(d.a,{exact:!0,path:"/",render:function(){return console.log("Matched exact homepage!!!!!"),r.a.createElement(p.a,{to:"/top"})}}),r.a.createElement(d.a,{path:"/top",render:function(e){return r.a.createElement(U,Object.assign({},e,{category:x}))}}),r.a.createElement(d.a,{path:"/best",render:function(e){return r.a.createElement(U,Object.assign({},e,{category:S}))}}),r.a.createElement(d.a,{path:"/new",render:function(e){return r.a.createElement(U,Object.assign({},e,{category:N}))}}),r.a.createElement(d.a,{exact:!0,path:"/story/:id",component:ie}),r.a.createElement(d.a,{path:"/user/:name",component:Y}),r.a.createElement(d.a,{component:q}))))}}]),t}(n.Component),se=a(60);i.a.render(r.a.createElement(function(e){return r.a.createElement(se.a,{basename:"/hacker-news-reactjs"},r.a.createElement(d.a,{path:"/",component:oe}))},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[31,2,1]]]);
//# sourceMappingURL=main.f457506a.chunk.js.map