(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports={app:"App_app__2u2Cn",loginScreen:"App_loginScreen__oL6Yt",nowPlaying:"App_nowPlaying__7ohWR",buttons:"App_buttons__1l3TR",bounce:"App_bounce__1EcbZ",row:"App_row__6K1N7",loginButton:"App_loginButton__3EMe6"}},14:function(e,t,n){e.exports={searchList:"SearchList_searchList__1uNje",list:"SearchList_list__3Yw2J",listItem:"SearchList_listItem__2EfTn",track:"SearchList_track__1iyna",albumImage:"SearchList_albumImage__UPUmS"}},34:function(e,t,n){e.exports={playButton:"PlayButton_playButton__3Pi26"}},41:function(e,t,n){e.exports={playlist:"Playlist_playlist__3Uwiw"}},42:function(e,t,n){e.exports={nextButton:"NextButton_nextButton__1ecGe"}},43:function(e,t,n){e.exports={previousButton:"PreviousButton_previousButton__2WbSe"}},50:function(e,t,n){e.exports=n(72)},72:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(19),o=n.n(i),c=n(25),l=n(12),s=n(38),u=(n(59),n(48)),p=n(2),m=n.n(p),d=n(7),f=n(21),g=n(22),h=n(26),y=n(23),v=n(27),E=n(24),b=n.n(E),S=n(46),_=n(8),k=n(9);function w(){return(w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function x(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var C=r.a.createElement("title",null,"Group 4"),O=r.a.createElement("desc",null,"Created with Sketch."),F=r.a.createElement("g",{id:"Description",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},r.a.createElement("g",{id:"Group-4"},r.a.createElement("path",{d:"M14.7832571,10.5578395 L14.7832571,10.5578395 C15.7075431,10.5543296 16.4596703,11.3007661 16.4631802,12.2250521 C16.4632191,12.2352993 16.4631639,12.2455466 16.4630146,12.2557928 L16.3652749,18.9629733 C16.3516141,19.9004155 15.5930625,20.6560322 14.6555744,20.6660588 L14.6555744,20.6660588 C13.7445914,20.6758019 12.9981953,19.9452027 12.9884522,19.0342196 C12.9883264,19.022459 12.9883264,19.0106973 12.9884522,18.9989366 L13.060432,12.2688224 C13.0705427,11.3234782 13.8378657,10.5614295 14.7832571,10.5578395 Z",id:"Rectangle",fill:"#7C7B7B",transform:"translate(14.725775, 15.611991) rotate(-45.000000) translate(-14.725775, -15.611991) "}),r.a.createElement("ellipse",{id:"Oval",stroke:"#7C7B7B",strokeWidth:2.75862069,cx:7.24137931,cy:7.35,rx:5.86206897,ry:5.97068966}))),P=function(e){var t=e.svgRef,n=x(e,["svgRef"]);return r.a.createElement("svg",w({width:"19px",height:"20px",viewBox:"0 0 19 20",ref:t},n),C,O,F)},j=r.a.forwardRef(function(e,t){return r.a.createElement(P,w({svgRef:t},e))});n.p;function L(){var e=Object(_.a)(["\n  margin-left: 10px;\n"]);return L=function(){return e},e}var R=k.a.div(L()),T=function(){return r.a.createElement(R,null,r.a.createElement(j,null))};function N(){var e=Object(_.a)(["\n  color: #191414;\n  background-color: #f4f2f2;\n  font-size: 1.6rem;\n  border: none;\n  padding: 1rem 4rem;\n  border-radius: 10rem;\n  width: 35%;\n  transition: all .2s;\n  margin-right: -5rem;\n\n  &:focus {\n    outline: none;\n    width: 45%;\n    background-color: #f0eeee;\n  }\n\n  &::-web-kit-input-placeholder {\n    font-weight: 100;\n    color: #ccc;\n  }\n\n  &:focus + .button {\n    background-color: #f0eeee;\n  }\n"]);return N=function(){return e},e}function B(){var e=Object(_.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 18rem;\n\n  @media (max-width: 37.5em) {\n    margin-top: 10rem;\n  }\n"]);return B=function(){return e},e}var I=k.a.div(B()),A=k.a.input(N()),G=function(e){var t=Object(a.useState)(""),n=Object(S.a)(t,2),i=n[0],o=n[1];return r.a.createElement(I,null,r.a.createElement(A,{type:"text",value:i,placeholder:"Search an artist or song ...",onChange:function(t){return n=t.target.value,o(n),void e.handleSearch(n);var n}}),r.a.createElement(T,null))},H=n(14),M=n.n(H),D=function(e){return r.a.createElement("div",{className:M.a.searchList},r.a.createElement("ul",{className:M.a.list},e.songs.map(function(t){return r.a.createElement("div",{className:M.a.track,onClick:function(){return e.addToPlay(t)}},r.a.createElement("img",{src:t.album.images[1].url,alt:"albumimg",className:M.a.albumImage}),r.a.createElement("li",{className:M.a.listItem,key:t.id},t.name," - ",t.artists[0].name))})))};function W(){var e=Object(_.a)(["\n  border-radius: 10rem;\n  margin: 1rem .5rem;\n  height: 10rem;\n\n  &:hover + "," {\n    opacity: 1;\n    position: absolute;\n    top: -1rem;\n    left: 50%;\n    transform: translate(-50%);\n    transition: all .2s;\n  }\n\n  @media only screen and (max-width: 37.5em) {  \n    height: 8rem;\n  }    \n        \n  @media only screen and (max-width: 56.25em) { \n    height: 8rem;\n  } \n\n  @media only screen and (max-width: 75em) { \n    height: 9rem;\n  } \n\n  @media only screen and (max-width: 112.5em) {  \n    height: 10rem;\n  }\n"]);return W=function(){return e},e}function U(){var e=Object(_.a)(["\n  opacity: 0;\n  font-size: 1.2rem;\n  font-weight: 300;\n  position: absolute;\n  top: -.5rem;\n  left: 5%;\n  transform: translateX(-50%);\n"]);return U=function(){return e},e}function Y(){var e=Object(_.a)(["\n  position: relative;\n"]);return Y=function(){return e},e}var Z=k.a.div(Y()),J=k.a.span(U()),z=k.a.div(W(),J),q=function(e){var t=e.id,n=e.albumImg,a=e.artist,i=e.title;return r.a.createElement(Z,null,r.a.createElement(z,{id:t},r.a.createElement("img",{src:n,alt:"albumimg"})),r.a.createElement(J,null,a," - ",i))},K=n(41),X=n.n(K),Q=function(e){function t(){return Object(f.a)(this,t),Object(h.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){return this.props.playlist?r.a.createElement("div",{className:X.a.playlist},this.props.playlist.map(function(e){return r.a.createElement(q,{id:e.id,key:e.id,title:e.name,artist:e.artists[0].name,albumImg:e.album.images[1].url})})):null}}]),t}(a.Component),V=n(33),$=n.n(V),ee=n(10),te=n.n(ee),ne=new b.a,ae=n(42),re=n.n(ae),ie=function(e){return r.a.createElement("div",{onClick:e.clickNext},r.a.createElement("svg",{width:"30px",height:"29px",viewBox:"0 0 30 29"},r.a.createElement("title",null,"Next"),r.a.createElement("desc",null,"Created with Sketch."),r.a.createElement("g",{id:"Description",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},r.a.createElement("g",{className:re.a.nextButton,id:"Group",fill:"#FFFFFF"},r.a.createElement("path",{d:"M13.380043,2.8427565 L26.6310856,25.1356413 C26.9132788,25.610389 26.7571826,26.224011 26.2824349,26.5062042 C26.1278394,26.5980969 25.9513233,26.6465974 25.7714788,26.6465974 L-0.730606279,26.6465974 C-1.28289103,26.6465974 -1.73060628,26.1988822 -1.73060628,25.6465974 C-1.73060628,25.466753 -1.68210571,25.2902369 -1.59021307,25.1356413 L11.6608295,2.8427565 C11.9430227,2.36800878 12.5566447,2.21191256 13.0313924,2.49410584 C13.174888,2.57940062 13.2947483,2.69926085 13.380043,2.8427565 Z",id:"Triangle-Copy",transform:"translate(12.520514, 14.500078) rotate(-270.000000) translate(-12.520514, -14.500078) "}),r.a.createElement("rect",{id:"Rectangle",x:"24.8739938",y:"0",width:"5",height:"29"})))))},oe=n(43),ce=n.n(oe),le=function(e){return r.a.createElement("div",{onClick:e.clickPrevious},r.a.createElement("svg",{width:"30px",height:"29px",viewBox:"0 0 30 29"},r.a.createElement("title",null,"Previous"),r.a.createElement("desc",null,"Created with Sketch."),r.a.createElement("g",{id:"Description",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},r.a.createElement("g",{className:ce.a.previousButton,id:"Group-Copy",transform:"translate(15.000000, 14.500000) rotate(-180.000000) translate(-15.000000, -14.500000) ",fill:"#FFFFFF"},r.a.createElement("path",{d:"M13.380043,2.8427565 L26.6310856,25.1356413 C26.9132788,25.610389 26.7571826,26.224011 26.2824349,26.5062042 C26.1278394,26.5980969 25.9513233,26.6465974 25.7714788,26.6465974 L-0.730606279,26.6465974 C-1.28289103,26.6465974 -1.73060628,26.1988822 -1.73060628,25.6465974 C-1.73060628,25.466753 -1.68210571,25.2902369 -1.59021307,25.1356413 L11.6608295,2.8427565 C11.9430227,2.36800878 12.5566447,2.21191256 13.0313924,2.49410584 C13.174888,2.57940062 13.2947483,2.69926085 13.380043,2.8427565 Z",id:"Triangle-Copy-2",transform:"translate(12.520514, 14.500078) rotate(-270.000000) translate(-12.520514, -14.500078) "}),r.a.createElement("rect",{id:"Rectangle",x:"24.8739938",y:"0",width:"5",height:"29"})))))},se=n(34),ue=n.n(se),pe=function(e){return e.isPlaying?r.a.createElement("div",{onClick:e.playSong},r.a.createElement("svg",{width:"56px",height:"56px",viewBox:"0 0 56 56"},r.a.createElement("title",null,"Group 2"),r.a.createElement("desc",null,"Created with Sketch."),r.a.createElement("g",{id:"Description",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},r.a.createElement("g",{id:"Group-6"},r.a.createElement("g",{id:"Group-2",stroke:"#FFFFFF",strokeWidth:"2",className:ue.a.playButton},r.a.createElement("circle",{id:"Oval",cx:"28",cy:"28",r:"27"})),r.a.createElement("g",{id:"Group-5",transform:"translate(20.000000, 14.000000)",fill:"#FFFFFF"},r.a.createElement("rect",{id:"Rectangle",x:"0",y:"0",width:"5",height:"29"}),r.a.createElement("rect",{id:"Rectangle-Copy",x:"10",y:"0",width:"5",height:"29"})))))):r.a.createElement("div",{onClick:e.playSong},r.a.createElement("svg",{width:"56px",height:"56px",viewBox:"0 0 56 56"},r.a.createElement("title",null,"Group 2"),r.a.createElement("desc",null,"Created with Sketch."),r.a.createElement("g",{id:"Description",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},r.a.createElement("g",{id:"Group-2",className:ue.a.playButton},r.a.createElement("circle",{id:"Oval",stroke:"#FFFFFF",strokeWidth:"2",cx:"28",cy:"28",r:"27"}),r.a.createElement("path",{d:"M31.9246646,15.5313589 L45.8542333,39.3892467 C46.1524238,39.8999728 45.9801296,40.5557293 45.4694035,40.8539197 C45.3055497,40.9495867 45.1192192,41 44.9294819,41 L17.0703444,41 C16.4789404,41 15.9995127,40.5205723 15.9995127,39.9291683 C15.9995127,39.739431 16.049926,39.5531005 16.145593,39.3892467 L30.0751617,15.5313589 C30.3733522,15.0206328 31.0291086,14.8483386 31.5398348,15.1465291 C31.6991119,15.239524 31.8316697,15.3720817 31.9246646,15.5313589 Z",id:"Triangle-Copy",fill:"#FFFFFF",transform:"translate(31.000000, 28.000000) rotate(-270.000000) translate(-31.000000, -28.000000) "})))))},me=n(44),de=n.n(me)()({basename:""}),fe=new b.a,ge=function(e){function t(){var e;Object(f.a)(this,t),(e=Object(h.a)(this,Object(y.a)(t).call(this))).componentDidMount=function(){e.props.onFetchUserPlaylist(),e.timer=setInterval(function(){e.props.onFetchCurrentSong(),e.playSong()},3e3)},e.nowPlaying=function(){var t=e.props.currentSong;return $.a.isEmpty(t)?null:r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null," ",t.artists[0].name," - ",t.name," "))},e.playSong=function(){var t=Object(d.a)(m.a.mark(function t(n){return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fe.getMyCurrentPlaybackState();case 2:t.sent.is_playing?e.setState({isPlaying:!0}):e.setState({isPlaying:!1});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}();var n=e.getHashParams().access_token;return n&&fe.setAccessToken(n),e.state={loggedIn:!!n,isPlaying:!0,colors:["rgb(200, 50, 20)","red"]},de.replace("/"),e}return Object(v.a)(t,e),Object(g.a)(t,[{key:"getHashParams",value:function(){var e,t={},n=/([^&;=]+)=?([^&;]*)/g,a=window.location.hash.substring(1);for(e=n.exec(a);e;)t[e[1]]=decodeURIComponent(e[2]),e=n.exec(a);return t}},{key:"render",value:function(){var e=this,t=$.a.debounce(function(t){e.props.onSearchSongs(t)},500),n=null;return this.props.currentSong&&(n=document.getElementById(this.props.currentSong.id),this.props.playlist.map(function(t){if(t.id!==e.props.currentSong.id){var n=document.getElementById(t.id);n&&n.classList.remove(te.a.bounce)}return!0}),n&&n.classList.add(te.a.bounce)),this.state.loggedIn?r.a.createElement("div",{className:te.a.app},r.a.createElement(G,{handleSearch:t}),r.a.createElement(D,{songs:this.props.searchList,addToPlay:this.props.onAddSongToPlaylist}),r.a.createElement("div",{className:te.a.row},r.a.createElement("div",{className:te.a.nowPlaying},this.nowPlaying()),r.a.createElement("div",{className:te.a.buttons},r.a.createElement(le,{clickPrevious:this.props.onPreviousSong}),r.a.createElement(pe,{clickPrevious:this.props.onPreviousSong,isPlaying:this.state.isPlaying,playSong:function(){return e.props.onTogglePlay(e.state.isPlaying)}}),r.a.createElement(ie,{clickNext:this.props.onNextSong})),r.a.createElement(Q,{playlist:this.props.playlist,playSong:this.playSong}))):r.a.createElement("div",{className:te.a.loginScreen},r.a.createElement("div",null,"Please make sure you are playing one of your playlists in Spotify on any device."),r.a.createElement("a",{className:te.a.loginButton,href:"https://quiet-castle-21882.herokuapp.com/api/login"}," Continue "))}}]),t}(a.Component),he=Object(c.b)(function(e){return{currentSong:e.songs.currentSong,playlist:e.songs.playlist,searchList:e.songs.searchList,playlistId:e.songs.playlistId}},function(e){return{onFetchCurrentSong:function(){return e(function(){var e=Object(d.a)(m.a.mark(function e(t){var n;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ne.getMyCurrentPlaybackState();case 3:n=e.sent,t({type:"FETCH_CURRENT_SONG",currentSong:n.item}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),t({type:"FETCH_ERROR",error:e.t0});case 10:case"end":return e.stop()}},e,null,[[0,7]])}));return function(t){return e.apply(this,arguments)}}())},onFetchUserPlaylist:function(){return e(function(){var e=Object(d.a)(m.a.mark(function e(t){var n,a,r,i,o;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ne.getMyCurrentPlayingTrack();case 3:return n=e.sent,a=n.context.uri.split(":"),r=a[a.length-1],e.next=8,ne.getPlaylistTracks(r);case 8:i=e.sent,o=i.items.map(function(e){return e.track}),t({type:"FETCH_SONGS_FROM_PLAYLIST",songs:o,playlistId:r}),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),t({type:"FETCH_ERROR",error:e.t0});case 16:case"end":return e.stop()}},e,null,[[0,13]])}));return function(t){return e.apply(this,arguments)}}())},onSearchSongs:function(t){return e(function(e){return function(){var t=Object(d.a)(m.a.mark(function t(n){var a;return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(""===e){t.next=7;break}return t.next=3,ne.searchTracks(e,{limit:5});case 3:a=t.sent,n({type:"FETCH_SONGS_SEARCH",songResults:a.tracks.items}),t.next=8;break;case 7:n({type:"CLEAR_SEARCH"});case 8:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()}(t))},onAddSongToPlaylist:function(t){return e(function(e){return function(){var t=Object(d.a)(m.a.mark(function t(n){var a,r,i;return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ne.getMyCurrentPlayingTrack();case 2:a=t.sent,r=a.context.uri.split(":"),i=r[r.length-1],ne.addTracksToPlaylist(i,[e.uri]),n({type:"ADD_SONG_TO_PLAYLIST",newSong:e});case 7:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()}(t))},onNextSong:function(){return e(function(){var e=Object(d.a)(m.a.mark(function e(t){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:ne.skipToNext();case 1:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}())},onPreviousSong:function(){return e(function(){var e=Object(d.a)(m.a.mark(function e(t){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:ne.skipToPrevious();case 1:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}())},onTogglePlay:function(t){return e(function(e){return function(){var t=Object(d.a)(m.a.mark(function t(n){return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e?ne.pause():ne.play();case 1:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()}(t))}}})(ge),ye=n(47),ve=n(15),Ee={currentSong:"",searchList:[],playlist:[],playlistUri:""},be=Object(l.c)({songs:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_CURRENT_SONG":return Object(ve.a)({},e,{currentSong:t.currentSong});case"FETCH_SONGS_SEARCH":return Object(ve.a)({},e,{searchList:t.songResults});case"CLEAR_SEARCH":return Object(ve.a)({},e,{searchList:[]});case"FETCH_SONGS_FROM_PLAYLIST":return Object(ve.a)({},e,{playlist:t.songs,playlistId:t.playlistId});case"ADD_SONG_TO_PLAYLIST":return Object(ve.a)({},e,{playlist:[].concat(Object(ye.a)(e.playlist),[t.newSong])});default:return e}}}),Se=Object(l.d)(be,Object(l.a)(s.a));o.a.render(r.a.createElement(c.a,{store:Se},r.a.createElement(u.a,null,r.a.createElement(he,null))),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.7a8a5ac9.chunk.js.map