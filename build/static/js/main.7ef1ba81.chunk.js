(window["webpackJsonpmy-app"]=window["webpackJsonpmy-app"]||[]).push([[0],{174:function(e,t,a){e.exports=a(303)},180:function(e,t,a){},303:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(35),o=a.n(l),c=(a(302),a(312)),s=(a(180),a(313)),d=a(315),u=(a(103),a(15)),h=a(158),i=a(159),g=a(160),m=a(162),p=a(163);var y=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleBrandChange=function(e){n.setState({Brand:e.target.value})},n.handleURLChange=function(e){n.setState({URL:e.target.value}),console.log(n.state.URL.length>0)},n.handleProductChange=function(e){n.setState({Product:e.target.value}),console.log(n.state.Product.length>0)},n.handleCategoryChange=function(e){n.setState({Category:e.target.value})},n.handleBlur=function(e){return function(t){n.setState({touched:Object(h.a)({},n.state.touched,Object(u.a)({},e,!0))})}},n.canBeSubmitted=function(){return!(0==n.state.URL.length&&n.state.Product.length>0&&n.state.Brand.length>0&&n.state.Category.length>0&&n.state.Brand.length>0)&&(!(n.state.URL.length>0&&0==n.state.Product.length&&0==n.state.Brand.length&&0==n.state.Category.length&&0==n.state.Brand.length)||(console.log("b"),!1))},n.handleSubmit=function(e){if(n.canBeSubmitted())e.preventDefault();else{e.preventDefault();var t=n.state,a=t.Brand,r=t.Product,l=t.Category;alert("Added row to google spreadsheet:  Brand: ".concat(a," Product: ").concat(r," Category: ").concat(l))}},n.state={Brand:"",Product:"",Category:"",URL:"",everFocusedBrand:!1,everFocusedProduct:!1,everFocusedCategory:!1,everFocusedURL:!1,touched:{Brand:!1,Product:!1,Category:!1,URL:!1}},n}return Object(g.a)(a,[{key:"render",value:function(){var e,t,a,n,l=this,o=(e=this.state.Brand,t=this.state.Product,a=this.state.Category,(n=this.state.URL).length?{Brand:!!e.length,Product:!!t.length,Category:!!a.length,URL:!1}:e.length||t.length||a.length?{Brand:!e.length,Product:!t.length,Category:!a.length,URL:!!n.length}:{}),c=this.canBeSubmitted(),u=function(e){var t=o[e],a=l.state.touched[e];return!!t&&a};return r.a.createElement(s.a,{name:"test-form",id:"form1",onSubmit:this.handleSubmit},r.a.createElement(s.a.Group,{widths:3},r.a.createElement(s.a.Input,{name:"URL",className:u("URL")?"error":"",label:"Add URL",type:"text",value:this.state.URL,onChange:this.handleURLChange,onBlur:this.handleBlur("URL"),placeholder:"https://www.company.com/product"})),r.a.createElement("p",null,"Or simply add manually details of the product"),r.a.createElement(s.a.Group,{widths:2},r.a.createElement(s.a.Input,{name:"Brand",label:"Brand",className:u("Brand")?"error":"",type:"text",value:this.state.Brand,onChange:this.handleBrandChange,onBlur:this.handleBlur("Brand"),placeholder:"Brand name"}),r.a.createElement(s.a.Input,{name:"Product",label:"Product",className:u("Product")?"error":"",type:"text",value:this.state.Product,onChange:this.handleProductChange,onBlur:this.handleBlur("Product"),placeholder:"Product name"}),r.a.createElement(s.a.Input,{name:"Category",label:"Category",className:u("Category")?"error":"",type:"text",value:this.state.Category,onBlur:this.handleBlur("Category"),onChange:this.handleCategoryChange,placeholder:"ex. Clenser, shampo, mascara..."})),r.a.createElement(d.a,{disabled:c,type:"submit",id:"form-submit"},"Submit"))}}]),a}(r.a.Component),C=function(e){var t=e.children;return r.a.createElement(c.a,{style:{margin:20}},t)},b=document.createElement("link");b.rel="stylesheet",b.href="https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css",document.head.appendChild(b),o.a.render(r.a.createElement(C,null,r.a.createElement("div",{class:"header",style:{}},r.a.createElement("div",{class:"header-cont"},r.a.createElement("img",{class:"logo",src:"beaubi_logo.png",alt:"logo",width:"150",height:"60"}))),r.a.createElement("div",{class:"thb_title  style7  ",id:"thb-title-5e8b3aba96479"},r.a.createElement("div",{class:"thb_title_inner"},r.a.createElement("h4",null,"PRODUCT LIBRARY"))),r.a.createElement("p",null,"Help us to build a library of products wanted by you"),r.a.createElement(y,null)),document.getElementById("root"));var B=document.forms["test-form"];B.addEventListener("submit",(function(e){e.preventDefault(),console.log(B),fetch("https://script.google.com/macros/s/AKfycbyTeFs74UamI-OEoc_GT6zveCiC0F8ymaKyNFkY80t02_2KCldn/exec",{method:"POST",body:new FormData(B)}).then((function(e){return console.log("Success!",e)})).catch((function(e){return console.error("Error!",e.message)}))}))}},[[174,1,2]]]);
//# sourceMappingURL=main.7ef1ba81.chunk.js.map