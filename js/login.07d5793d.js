(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["login"],{a55b:function(e,s,a){"use strict";a.r(s);var r=function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("div",[a("h4",{staticClass:"fw-300 c-grey-900 mB-40"},[e._v("Login")]),e.isRedirecting?a("div",[a("i",{staticClass:"fas fa-spinner fa-2x fa-spin"})]):a("form",{on:{submit:function(s){return s.preventDefault(),e.login(s)}}},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"text-normal text-dark"},[e._v("Email")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email",placeholder:"john@example.com"},domProps:{value:e.email},on:{input:function(s){s.target.composing||(e.email=s.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{staticClass:"text-normal text-dark"},[e._v("Password")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",placeholder:"Password"},domProps:{value:e.password},on:{input:function(s){s.target.composing||(e.password=s.target.value)}}})]),a("div",{staticClass:"form-group"},[a("div",{staticClass:"peers ai-c jc-sb fxw-nw"},[a("div",{staticClass:"peer"},[a("div",{staticClass:"checkbox checkbox-circle checkbox-info peers ai-c"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.shouldRemember,expression:"shouldRemember"}],staticClass:"peer",attrs:{type:"checkbox",id:"inputCall1",name:"inputCheckboxesCall"},domProps:{checked:Array.isArray(e.shouldRemember)?e._i(e.shouldRemember,null)>-1:e.shouldRemember},on:{change:function(s){var a=e.shouldRemember,r=s.target,t=!!r.checked;if(Array.isArray(a)){var i=null,o=e._i(a,i);r.checked?o<0&&(e.shouldRemember=a.concat([i])):o>-1&&(e.shouldRemember=a.slice(0,o).concat(a.slice(o+1)))}else e.shouldRemember=t}}}),e._m(0)])]),e._m(1)])])]),e.hasError?a("div",{staticClass:"alert alert-warning",attrs:{role:"alert"}},[a("strong",[e._v(e._s(e.errorTitle))]),a("p",[e._v(e._s(e.errorMessage))])]):e._e(),(e.appAllowsRegister,a("div",{staticClass:"mT-40"},[e._v(" Don't have an account? "),a("router-link",{attrs:{to:{name:"signup"}}},[e._v("Sign up")])],1))])},t=[function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("label",{staticClass:" peers peer-greed js-sb ai-c",attrs:{for:"inputCall1"}},[a("span",{staticClass:"peer peer-greed"},[e._v("Remember Me")])])},function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("div",{staticClass:"peer"},[a("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[e._v("Login")])])}],i=a("d4ec"),o=a("bee2"),l=a("262e"),n=a("2caf"),c=a("9ab4"),m=a("60a3"),u=a("cdd0"),p=function(e){Object(l["a"])(a,e);var s=Object(n["a"])(a);function a(){var e;return Object(i["a"])(this,a),e=s.apply(this,arguments),e.email="",e.password="",e.shouldRemember=!1,e.hasError=!1,e.isRedirecting=!1,e.errorTitle="Login failed",e.errorMessage="Check your email and password",e}return Object(o["a"])(a,[{key:"clearForm",value:function(){this.password=""}},{key:"login",value:function(){var e=this;this.hasError=!1,u["a"].authRequest({email:this.email,password:this.password,remember:this.shouldRemember}).then((function(){e.isRedirecting=!0,setTimeout((function(){e.$router.push("/").catch((function(){}))}),1e3)}),(function(s){var a=s.error,r=s.message;e.hasError=!0,e.errorTitle=a,e.errorMessage=r,e.clearForm()}))}},{key:"appAllowsRegister",get:function(){return u["a"].appAllowsRegister}}]),a}(m["d"]);p=Object(c["a"])([Object(m["a"])({name:"Login",components:{}})],p);var d=p,v=d,h=a("2877"),b=Object(h["a"])(v,r,t,!1,null,null,null);s["default"]=b.exports}}]);
//# sourceMappingURL=login.07d5793d.js.map