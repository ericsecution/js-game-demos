parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"SAHT":[function(require,module,exports) {
module.exports=[{layout:["=====1======","=          =","=  @       =","=          =","=          =","=          =","=          =","=          =","=       i  =","=          =","============"],doors:{1:{isEnd:!0}}}];
},{}],"epB2":[function(require,module,exports) {
kaboom({global:!0,scale:3,clearColor:[0,0,0,1],canvas:document.getElementById("game"),width:180,height:180}),loadSprite("player","hero.png"),loadSprite("wall","wall2.png"),loadSprite("door","opendoor.png"),loadSprite("item","item.png"),window.onload=function(){var e=require("./game_map.json");scene("game",function(){var o=JSON.parse(JSON.stringify(e))[0],t={width:o.layout[0].length,height:o.layout.length,pos:vec2(20,20),"=":[sprite("wall"),solid(),"wall"],"@":[sprite("player"),"player"],i:[sprite("item"),solid(),"item"],1:[sprite("door"),solid(),"door"]};addLevel(o.layout,t);var i=get("player")[0],n={left:vec2(-1,0),right:vec2(1,0),up:vec2(0,-1),down:vec2(0,1)},a=function(e){keyDown(e,function(){i.move(n[e].scale(60))})};for(var r in n)a(r);i.overlaps("item",function(e){destroy(e)}),i.overlaps("door",function(){go("end")}),i.action(function(){i.resolve()})}),scene("end",function(){add([text("You have finished this Scene!",6),pos(width()/2,height()/2),origin("center")])}),scene("main",function(){add([text("Press the Spacebar to Begin!",6),pos(width()/2,height()/2),origin("center")]),keyPress("space",function(){go("game")}),add([sprite("player"),pos(90,65)])}),start("main")};
},{"./game_map.json":"SAHT"}]},{},["epB2"], null)
//# sourceMappingURL=/main.b8225f39.js.map