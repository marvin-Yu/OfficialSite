(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-91efd35e"],{"54c3":function(t,n,e){t.exports=e.p+"img/bgtop.ed43ac53.jpg"},"84af":function(t,n,e){"use strict";var s=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"banner"},[e("div",{staticClass:"mm"}),t._m(0),e("div",{staticClass:"banner-title"},[e("p",[t._v(t._s(t.title))])])])},a=[function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"banner-img"},[s("img",{attrs:{src:e("54c3")}})])}],i={name:"Banner",props:{title:{type:String,default:""},img:{type:String,default:"../assets/img/bgtop.jpg"}}},c=i,o=(e("cc57"),e("2877")),l=Object(o["a"])(c,s,a,!1,null,"8f80614c",null);n["a"]=l.exports},a2f9:function(t,n,e){"use strict";e.r(n);var s=function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"news"},[s("banner",{attrs:{title:"新闻资讯"}}),s("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"news-section"},[s("div",{staticClass:"news-section-content"},[s("div",{staticClass:"content-nav"},[s("div",{staticClass:"content-nav-btn",class:{"content-nav-active":1==t.newstype},on:{click:function(n){t.newstype=1}}},[s("span",[t._v("公司新闻")])]),s("div",{staticClass:"content-nav-btn",class:{"content-nav-active":2==t.newstype},on:{click:function(n){t.newstype=2}}},[s("span",[t._v("行业动态")])])]),s("div",{staticClass:"content-nav-item"},t._l(t.newsList,function(n,a){return s("div",{key:a,staticClass:"item-list"},[s("div",{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:t.imgserver+n.Img,expression:"imgserver + item.Img",arg:"background-image"}],staticClass:"item-img"}),s("p",{staticClass:"item-list-title"},[t._v(t._s(n.Title))]),s("p",{staticClass:"item-list-content"},[t._v(t._s(n.Content))]),s("div",{staticClass:"item-list-more"},[s("router-link",{staticClass:"text-decoration",attrs:{to:{name:"newsdetails",params:{id:n.Id}}}},[s("img",{attrs:{src:e("f441")}}),s("span",[t._v("more")])])],1)])}),0)])])],1)},a=[],i=e("84af"),c={name:"news",components:{Banner:i["a"]},data:function(){return{loading:!0,newsList:[],newstype:1}},methods:{loadData:function(){var t=this;this.loading=!0,this.$http.get("News?type=".concat(this.newstype,"&num=6")).then(function(n){t.newsList=n.data,t.loading=!1}).catch(function(t){window.console.log(t)})}},mounted:function(){this.loadData()},watch:{newstype:function(t){window.console.log(t),this.loadData()}}},o=c,l=(e("fa4e"),e("2877")),r=Object(l["a"])(o,s,a,!1,null,"32b2e022",null);n["default"]=r.exports},cc57:function(t,n,e){"use strict";var s=e("e954"),a=e.n(s);a.a},d2bf:function(t,n,e){},e954:function(t,n,e){},f441:function(t,n){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABP0lEQVRYR8XWTU7DMBAF4JlkwTVYxkouUMRPJdQD9A6sWPUQ7LtGvRSrSDkDFYiytOOHvKhkIdR47LHI2tH77BlPwvTPD0vyh2Ew1lo/TdMkee/SWhHAGPPcNM2Lc26lhRAB+r7fEdGeiD61EGIAM+8BhFNVQWQBQroWIhsQIT6ccze5PVEE0EAUA0oRKoAShBogRgB4HMfxLWVYqQIixDeA+xSEOuCMAHAiooclRBWABFENkIqoCkhBSAFPzHxI6e54TegHAH/2Q3XApfCArApYCq8KSAmvBvDefxHRemkGVAFIwtUB3vsjEW1Sdn6+JWpNGMLneb6V/pioAHLDVUpQEl4ECD+lALKOPZ6SWSUI4cz8bq29k9b89xgXA4jooBUuLoExZtu27avGzrOuYdd11wCuSo89uwekn+GU9T8Q30swpO2s/gAAAABJRU5ErkJggg=="},fa4e:function(t,n,e){"use strict";var s=e("d2bf"),a=e.n(s);a.a}}]);
//# sourceMappingURL=chunk-91efd35e.29709b29.js.map