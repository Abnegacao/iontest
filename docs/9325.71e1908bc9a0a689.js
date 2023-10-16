"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9325],{9325:(Bn,Te,T)=>{T.r(Te),T.d(Te,{DocumentPageModule:()=>qn});var be=T(6814),$=T(95),h=T(2303),j=T(5877),N=T(5861),i=T(9468),M=T(553),et=T(3182),Re=T(2251),q=T(15),B=T(534),Q=T(9058),tt=T(4537);const we="firebasestorage.googleapis.com";class f extends Q.ZR{constructor(t,n,o=0){super(se(t),`Firebase Storage: ${n} (${se(t)})`),this.status_=o,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,f.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return se(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.message=this.customData.serverResponse?`${this._baseMessage}\n${this.customData.serverResponse}`:this._baseMessage}}var _=function(e){return e.UNKNOWN="unknown",e.OBJECT_NOT_FOUND="object-not-found",e.BUCKET_NOT_FOUND="bucket-not-found",e.PROJECT_NOT_FOUND="project-not-found",e.QUOTA_EXCEEDED="quota-exceeded",e.UNAUTHENTICATED="unauthenticated",e.UNAUTHORIZED="unauthorized",e.UNAUTHORIZED_APP="unauthorized-app",e.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",e.INVALID_CHECKSUM="invalid-checksum",e.CANCELED="canceled",e.INVALID_EVENT_NAME="invalid-event-name",e.INVALID_URL="invalid-url",e.INVALID_DEFAULT_BUCKET="invalid-default-bucket",e.NO_DEFAULT_BUCKET="no-default-bucket",e.CANNOT_SLICE_BLOB="cannot-slice-blob",e.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",e.NO_DOWNLOAD_URL="no-download-url",e.INVALID_ARGUMENT="invalid-argument",e.INVALID_ARGUMENT_COUNT="invalid-argument-count",e.APP_DELETED="app-deleted",e.INVALID_ROOT_OPERATION="invalid-root-operation",e.INVALID_FORMAT="invalid-format",e.INTERNAL_ERROR="internal-error",e.UNSUPPORTED_ENVIRONMENT="unsupported-environment",e}(_||{});function se(e){return"storage/"+e}function re(e){return new f(_.INVALID_ARGUMENT,e)}function Pe(){return new f(_.APP_DELETED,"The Firebase app was deleted.")}class E{constructor(t,n){this.bucket=t,this.path_=n}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,n){let o;try{o=E.makeFromUrl(t,n)}catch{return new E(t,"")}if(""===o.path)return o;throw function dt(e){return new f(_.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}(t)}static makeFromUrl(t,n){let o=null;const s="([A-Za-z0-9.\\-_]+)",u=new RegExp("^gs://"+s+"(/(.*))?$","i");function l(w){w.path_=decodeURIComponent(w.path)}const p=n.replace(/[.]/g,"\\."),y=[{regex:u,indices:{bucket:1,path:3},postModify:function r(w){"/"===w.path.charAt(w.path.length-1)&&(w.path_=w.path_.slice(0,-1))}},{regex:new RegExp(`^https?://${p}/v[A-Za-z0-9_]+/b/${s}/o(/([^?#]*).*)?$`,"i"),indices:{bucket:1,path:3},postModify:l},{regex:new RegExp(`^https?://${n===we?"(?:storage.googleapis.com|storage.cloud.google.com)":n}/${s}/([^?#]*)`,"i"),indices:{bucket:1,path:2},postModify:l}];for(let w=0;w<y.length;w++){const G=y[w],z=G.regex.exec(t);if(z){let W=z[G.indices.path];W||(W=""),o=new E(z[G.indices.bucket],W),G.postModify(o);break}}if(null==o)throw function lt(e){return new f(_.INVALID_URL,"Invalid URL '"+e+"'.")}(t);return o}}class mt{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}function ce(e,t,n,o){if(o<t)throw re(`Invalid value for '${e}'. Expected ${t} or greater.`);if(o>n)throw re(`Invalid value for '${e}'. Expected ${n} or less.`)}var F=function(e){return e[e.NO_ERROR=0]="NO_ERROR",e[e.NETWORK_ERROR=1]="NETWORK_ERROR",e[e.ABORT=2]="ABORT",e}(F||{});class Et{constructor(t,n,o,s,r,a,u,c,l,d,p,m=!0){this.url_=t,this.method_=n,this.headers_=o,this.body_=s,this.successCodes_=r,this.additionalRetryCodes_=a,this.callback_=u,this.errorCallback_=c,this.timeout_=l,this.progressCallback_=d,this.connectionFactory_=p,this.retry=m,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((b,R)=>{this.resolve_=b,this.reject_=R,this.start_()})}start_(){const n=(o,s)=>{const r=this.resolve_,a=this.reject_,u=s.connection;if(s.wasSuccessCode)try{const c=this.callback_(u,u.getResponse());!function Rt(e){return void 0!==e}(c)?r():r(c)}catch(c){a(c)}else if(null!==u){const c=function ie(){return new f(_.UNKNOWN,"An unknown error occurred, please check the error payload for server response.")}();c.serverResponse=u.getErrorText(),a(this.errorCallback_?this.errorCallback_(u,c):c)}else a(s.canceled?this.appDelete_?Pe():function ke(){return new f(_.CANCELED,"User canceled the upload/download.")}():function Ee(){return new f(_.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}())};this.canceled_?n(0,new ee(!1,null,!0)):this.backoffId_=function Tt(e,t,n){let o=1,s=null,r=null,a=!1,u=0;function c(){return 2===u}let l=!1;function d(...g){l||(l=!0,t.apply(null,g))}function p(g){s=setTimeout(()=>{s=null,e(b,c())},g)}function m(){r&&clearTimeout(r)}function b(g,...D){if(l)return void m();if(g)return m(),void d.call(null,g,...D);if(c()||a)return m(),void d.call(null,g,...D);let y;o<64&&(o*=2),1===u?(u=2,y=0):y=1e3*(o+Math.random()),p(y)}let R=!1;function P(g){R||(R=!0,m(),!l&&(null!==s?(g||(u=2),clearTimeout(s),p(0)):g||(u=1)))}return p(0),r=setTimeout(()=>{a=!0,P(!0)},n),P}((o,s)=>{if(s)return void o(!1,new ee(!1,null,!0));const r=this.connectionFactory_();this.pendingConnection_=r;const a=u=>{null!==this.progressCallback_&&this.progressCallback_(u.loaded,u.lengthComputable?u.total:-1)};null!==this.progressCallback_&&r.addUploadProgressListener(a),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{null!==this.progressCallback_&&r.removeUploadProgressListener(a),this.pendingConnection_=null;const u=r.getErrorCode()===F.NO_ERROR,c=r.getStatus();if(!u||function Ce(e,t){const n=e>=500&&e<600,s=-1!==[408,429].indexOf(e),r=-1!==t.indexOf(e);return n||s||r}(c,this.additionalRetryCodes_)&&this.retry){const d=r.getErrorCode()===F.ABORT;return void o(!1,new ee(!1,null,d))}const l=-1!==this.successCodes_.indexOf(c);o(!0,new ee(l,r))})},n,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,null!==this.backoffId_&&function bt(e){e(!1)}(this.backoffId_),null!==this.pendingConnection_&&this.pendingConnection_.abort()}}class ee{constructor(t,n,o){this.wasSuccessCode=t,this.connection=n,this.canceled=!!o}}class L{constructor(t,n){this._service=t,this._location=n instanceof E?n:E.makeFromUrl(n,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,n){return new L(t,n)}get root(){const t=new E(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return function Oe(e){const t=e.lastIndexOf("/",e.length-2);return-1===t?e:e.slice(t+1)}(this._location.path)}get storage(){return this._service}get parent(){const t=function Lt(e){if(0===e.length)return null;const t=e.lastIndexOf("/");return-1===t?"":e.slice(0,t)}(this._location.path);if(null===t)return null;const n=new E(this._location.bucket,t);return new L(this._service,n)}_throwIfRoot(t){if(""===this._location.path)throw function gt(e){return new f(_.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}(t)}}function Ke(e,t){const n=null==t?void 0:t.storageBucket;return null==n?null:E.makeFromBucketSpec(n,e)}class pe{constructor(t,n,o,s,r){this.app=t,this._authProvider=n,this._appCheckProvider=o,this._url=s,this._firebaseVersion=r,this._bucket=null,this._host=we,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=12e4,this._maxUploadRetryTime=6e5,this._requests=new Set,this._bucket=null!=s?E.makeFromBucketSpec(s,this._host):Ke(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._bucket=null!=this._url?E.makeFromBucketSpec(this._url,t):Ke(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){ce("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){ce("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}_getAuthToken(){var t=this;return(0,N.Z)(function*(){if(t._overrideAuthToken)return t._overrideAuthToken;const n=t._authProvider.getImmediate({optional:!0});if(n){const o=yield n.getToken();if(null!==o)return o.accessToken}return null})()}_getAppCheckToken(){var t=this;return(0,N.Z)(function*(){const n=t._appCheckProvider.getImmediate({optional:!0});return n?(yield n.getToken()).token:null})()}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new L(this,t)}_makeRequest(t,n,o,s,r=!0){if(this._deleted)return new mt(Pe());{const a=function It(e,t,n,o,s,r,a=!0){const u=function Ie(e){const t=encodeURIComponent;let n="?";for(const o in e)e.hasOwnProperty(o)&&(n=n+(t(o)+"=")+t(e[o])+"&");return n=n.slice(0,-1),n}(e.urlParams),c=e.url+u,l=Object.assign({},e.headers);return function Pt(e,t){t&&(e["X-Firebase-GMPID"]=t)}(l,t),function kt(e,t){null!==t&&t.length>0&&(e.Authorization="Firebase "+t)}(l,n),function xt(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(null!=t?t:"AppManager")}(l,r),function Ut(e,t){null!==t&&(e["X-Firebase-AppCheck"]=t)}(l,o),new Et(c,e.method,l,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,s,a)}(t,this._appId,o,s,n,this._firebaseVersion,r);return this._requests.add(a),a.getPromise().then(()=>this._requests.delete(a),()=>this._requests.delete(a)),a}}makeRequestWithTokens(t,n){var o=this;return(0,N.Z)(function*(){const[s,r]=yield Promise.all([o._getAuthToken(),o._getAppCheckToken()]);return o._makeRequest(t,n,s,r).getPromise()})()}}const Ve="@firebase/storage",Qe="storage";function xn(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),o=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return new pe(n,o,s,t,B.Jn)}!function Pn(){(0,B.Xd)(new tt.wA(Qe,xn,"PUBLIC").setMultipleInstances(!0)),(0,B.KN)(Ve,"0.11.2",""),(0,B.KN)(Ve,"0.11.2","esm2017")}();var Un=T(701),In=T(7838),Ye=T(8162);function Cn(e,t){1&e&&i._UZ(0,"ion-progress-bar",6)}function vn(e,t){if(1&e){const n=i.EpF();i.TgZ(0,"ion-card",23)(1,"ion-card-subtitle")(2,"ion-grid",24)(3,"ion-row",25)(4,"ion-col",26)(5,"strong"),i._uU(6,"\xa0GPS:\xa0"),i.qZA()(),i.TgZ(7,"ion-col"),i._uU(8),i._UZ(9,"br"),i.TgZ(10,"small"),i._uU(11,"Latitude"),i.qZA()(),i.TgZ(12,"ion-col"),i._uU(13),i._UZ(14,"br"),i.TgZ(15,"small"),i._uU(16,"Longitude"),i.qZA()(),i.TgZ(17,"ion-col",27),i.NdJ("click",function(){i.CHM(n);const s=i.oxw(3);return i.KtG(s.openMap())}),i._UZ(18,"ion-icon",28),i.qZA()()()()()}if(2&e){const n=i.oxw(3);i.xp6(8),i.Oqu(n.document.geolocation.split(",")[0]),i.xp6(5),i.Oqu(n.document.geolocation.split(",")[1])}}function An(e,t){if(1&e){const n=i.EpF();i.TgZ(0,"ion-col")(1,"ion-button",13),i.NdJ("click",function(){i.CHM(n);const s=i.oxw(3);return i.KtG(s.reloadDocument())}),i._uU(2,"Recarregar"),i.qZA()()}}function Sn(e,t){if(1&e){const n=i.EpF();i.TgZ(0,"div")(1,"ion-card"),i._UZ(2,"ion-img",9),i.TgZ(3,"ion-card-content",2)(4,"ion-grid",10)(5,"ion-row")(6,"ion-col")(7,"ion-button",11),i.NdJ("click",function(){i.CHM(n);const s=i.oxw(2);return i.KtG(s.getPhoto("new"))}),i._UZ(8,"ion-icon",12),i._uU(9,"C\xe2mera "),i.qZA()(),i.TgZ(10,"ion-col")(11,"ion-button",13),i.NdJ("click",function(){i.CHM(n);const s=i.oxw(2);return i.KtG(s.getPhoto("reset"))}),i._UZ(12,"ion-icon",14),i._uU(13,"Padr\xe3o "),i.qZA()()()()()(),i.TgZ(14,"div",15)(15,"p")(16,"ion-input",16),i.NdJ("ngModelChange",function(s){i.CHM(n);const r=i.oxw(2);return i.KtG(r.document.name=s)})("ionInput",function(){i.CHM(n);const s=i.oxw(2);return i.KtG(s.change())}),i.qZA()(),i.TgZ(17,"p")(18,"ion-textarea",17),i.NdJ("ngModelChange",function(s){i.CHM(n);const r=i.oxw(2);return i.KtG(r.document.description=s)})("ionInput",function(){i.CHM(n);const s=i.oxw(2);return i.KtG(s.change())}),i.qZA()(),i.TgZ(19,"p")(20,"ion-input",18),i.NdJ("ngModelChange",function(s){i.CHM(n);const r=i.oxw(2);return i.KtG(r.document.location=s)})("ionInput",function(){i.CHM(n);const s=i.oxw(2);return i.KtG(s.change())}),i.qZA()(),i.TgZ(21,"p")(22,"ion-toggle",19),i.NdJ("ngModelChange",function(s){i.CHM(n);const r=i.oxw(2);return i.KtG(r.pageGPS=s)})("ionChange",function(){i.CHM(n);const s=i.oxw(2);return i.KtG(s.toggleGPS())}),i._uU(23,"Adicionar GPS na localiza\xe7\xe3o."),i.qZA()(),i.YNc(24,vn,19,2,"ion-card",20),i.qZA(),i.TgZ(25,"ion-grid")(26,"ion-row"),i.YNc(27,An,3,0,"ion-col",8),i.TgZ(28,"ion-col",21)(29,"ion-button",22),i.NdJ("click",function(){i.CHM(n);const s=i.oxw(2);return i.KtG(s.saveDocument())}),i._uU(30,"Salvar"),i.qZA()()()()()}if(2&e){const n=i.oxw(2);i.xp6(2),i.Q6J("src",n.document.image)("alt",n.document.name),i.xp6(14),i.Q6J("ngModel",n.document.name),i.xp6(2),i.Q6J("ngModel",n.document.description),i.xp6(2),i.Q6J("ngModel",n.document.location),i.xp6(2),i.Q6J("checked",!0)("ngModel",n.pageGPS),i.xp6(2),i.Q6J("ngIf",n.capacitorGPS&&n.pageGPS&&""!=n.document.geolocation),i.xp6(3),i.Q6J("ngIf",n.docEdit),i.xp6(2),i.Q6J("disabled",n.pageBtnDisabled)}}function Dn(e,t){if(1&e){const n=i.EpF();i.TgZ(0,"ion-col")(1,"ion-button",32),i.NdJ("click",function(){i.CHM(n);const s=i.oxw(3);return i.KtG(s.reload())}),i._UZ(2,"ion-icon",33),i._uU(3,"Novo"),i.qZA()()}}function On(e,t){if(1&e&&(i.TgZ(0,"div")(1,"ion-card")(2,"ion-card-header")(3,"ion-card-title"),i._uU(4,"Oba!"),i.qZA()(),i.TgZ(5,"ion-card-content"),i._uU(6),i.TgZ(7,"ion-grid",29)(8,"ion-row"),i.YNc(9,Dn,4,0,"ion-col",8),i.TgZ(10,"ion-col")(11,"ion-button",30),i._UZ(12,"ion-icon",31),i._uU(13,"Listagem"),i.qZA()()()()()()()),2&e){const n=i.oxw(2);i.xp6(6),i.hij(" ",n.pageMessage," "),i.xp6(3),i.Q6J("ngIf",!n.docEdit)}}function Nn(e,t){if(1&e&&(i.TgZ(0,"ion-content",7),i.YNc(1,Sn,31,10,"div",8),i.YNc(2,On,14,2,"div",8),i.qZA()),2&e){const n=i.oxw();i.Q6J("fullscreen",!0),i.xp6(1),i.Q6J("ngIf",!n.pageSended),i.xp6(1),i.Q6J("ngIf",n.pageSended)}}const Mn=[{path:"",component:(()=>{var e;class t{constructor(){this.app=(0,et.ZF)(M.N.firebase),this.auth=(0,Re.v0)(this.app),this.db=(0,q.ad)(this.app),this.storage=function En(e=(0,B.Mq)(),t){e=(0,Q.m9)(e);const o=(0,B.qX)(e,Qe).getImmediate({identifier:t}),s=(0,Q.P0)("storage");return s&&function kn(e,t,n,o={}){!function yn(e,t,n,o={}){e.host=`${t}:${n}`,e._protocol="http";const{mockUserToken:s}=o;s&&(e._overrideAuthToken="string"==typeof s?s:(0,Q.Sg)(s,e.app.options.projectId))}(e,t,n,o)}(o,...s),o}(this.app),this.router=(0,i.f3M)(j.F0),this.activatedRoute=(0,i.f3M)(j.gz),this.alertController=(0,i.f3M)(h.Br),this.tools=(0,i.f3M)(Un.G),this.userId="",this.docId="",this.docEdit=!1,this.pageTitle="",this.pageView=!1,this.pageGPS=!1,this.pageBtnDisabled=!0,this.pageSended=!1,this.pageMessage="",this.capacitorFotoFormat=""}ngOnInit(){(0,Re.Aj)(this.auth,o=>{o?this.userId=o.uid:this.router.navigate(["/login"])}),this.docId=this.activatedRoute.snapshot.paramMap.get("id"),this.getGPS(),this.docId?(this.docEdit=!0,this.pageTitle="Editar Documento",this.getDocument()):(this.docEdit=!1,this.pageTitle="Novo Documento",this.newDocument())}getDocument(){var o=this;return(0,N.Z)(function*(){o.docRef=(0,q.JU)(o.db,M.N.dbCollection,o.docId);const s=yield(0,q.QT)(o.docRef);var a;s.exists()?(o.document=s.data(),o.pageGPS=""!=o.document.geolocation,o.pageView=!0,o.pageBtnDisabled=!1):yield(yield o.alertController.create({header:"Oooops!",message:"Documento n\xe3o encontrado...",buttons:[{text:"OK",handler:(a=(0,N.Z)(function*(){o.router.navigate(["/"])}),function(){return a.apply(this,arguments)})}]})).present()})()}newDocument(){this.document={date:"",name:"",description:"",image:M.N.dbDefaultImage,location:"",geolocation:"",owner:"",views:0,status:"on"},this.pageView=!0}getPhoto(o){var s=this;"new"==o?Ye.V1.getPhoto({quality:20,allowEditing:!0,resultType:Ye.dk.DataUrl}).then(function(){var r=(0,N.Z)(function*(a){M.N.dbImageFormats.includes(a.format)?(s.document.image=a.dataUrl+"",s.capacitorFotoFormat=a.format):yield(yield s.alertController.create({header:"Oooops!",message:"Formato de imagem n\xe3o suportado! Use somente "+M.N.dbImageFormats.join(", ")+".",buttons:["OK"]})).present()});return function(a){return r.apply(this,arguments)}}()):this.document.image=M.N.dbDefaultImage}getGPS(){In.b.getCurrentPosition().then(o=>{this.capacitorGPS=`${o.coords.latitude}, ${o.coords.longitude}`})}change(){this.pageBtnDisabled=!(this.tools.stripTags(this.document.name).length>2&&this.tools.stripTags(this.document.description).length>4&&this.tools.stripTags(this.document.location).length>3)}toggleGPS(){this.document.geolocation=this.pageGPS?this.capacitorGPS:""}reloadDocument(){var o=this;return(0,N.Z)(function*(){var r;yield(yield o.alertController.create({header:"Oooops!",message:"As altera\xe7\xf5es j\xe1 feitas no documento, que n\xe3o foram salvas, ser\xe3o perdidas...",buttons:[{text:"Cancelar",role:"cancel"},{text:"OK",role:"confirm",handler:(r=(0,N.Z)(function*(){o.getDocument()}),function(){return r.apply(this,arguments)})}]})).present()})()}openMap(){window.open(`https://www.google.com/maps?q=${this.document.geolocation}`,"blank")}saveDocument(){if(this.pageBtnDisabled=!0,this.pageView=!1,this.docEdit)(0,q.r7)(this.docRef,this.document).then(()=>{this.pageSended=!0,this.pageView=!0,this.pageMessage="Documento atualizado com sucesso!"});else{const o=(0,q.hJ)(this.db,M.N.dbCollection);this.document.date=this.tools.now(),this.document.owner=this.userId,(0,q.ET)(o,this.document).then(s=>{this.pageSended=!0,this.pageView=!0,this.pageMessage="Documento criado com sucesso!"})}}reload(){this.pageSended=!1,this.pageView=!0,this.newDocument()}}return(e=t).\u0275fac=function(o){return new(o||e)},e.\u0275cmp=i.Xpm({type:e,selectors:[["app-document"]],decls:9,vars:4,consts:[[3,"translucent"],["slot","start"],[1,"ion-text-center"],["ios","document-outline","md","document-sharp","slot","end",1,"ion-padding"],["type","indeterminate",4,"ngIf"],[3,"fullscreen",4,"ngIf"],["type","indeterminate"],[3,"fullscreen"],[4,"ngIf"],[3,"src","alt"],[1,"ion-no-padding"],["color","success",3,"click"],["ios","camera-outline","md","camera-sharp","slot","start"],["color","warning",3,"click"],["ios","refresh-outline","md","refresh-sharp","slot","start"],[1,"ion-padding-start","ion-padding-end"],["label","Nome:","type","text","name","name","labelPlacement","floating","fill","outline","placeholder","Digite o nome do item.","errorText","Nome inv\xe1lido.","required","","minlength","3",3,"ngModel","ngModelChange","ionInput"],["label","Descri\xe7\xe3o:","name","description","labelPlacement","floating","fill","outline","placeholder","Digite a descri\xe7\xe3o.","errorText","Descri\xe7\xe3o inv\xe1lida.","required","","minlength","5","autoGrow","true",3,"ngModel","ngModelChange","ionInput"],["label","Localiza\xe7\xe3o:","type","text","name","location","labelPlacement","floating","fill","outline","placeholder","Digite a localiza\xe7\xe3o do item.","errorText","Localiza\xe7\xe3o inv\xe1lida.","required","","minlength","3",3,"ngModel","ngModelChange","ionInput"],["labelPlacement","end",3,"checked","ngModel","ngModelChange","ionChange"],["class","ion-text-center ion-no-margin",4,"ngIf"],[1,"ion-text-end"],[3,"disabled","click"],[1,"ion-text-center","ion-no-margin"],[1,"ion-no-padding","ion-no-margin","ion-text-center"],[1,"ion-align-items-center"],["size","auto"],["size","auto",1,"ion-padding-start","ion-padding-end",3,"click"],["ios","eye-outline","md","eye-sharp",2,"color","steelblue","cursor","pointer"],[1,"ion-no-padding","ion-margin-top"],["routerLink","/"],["ios","home-outline","md","home-sharp","slot","start"],[3,"click"],["ios","add-circle-outline","md","add-circle-sharp","slot","start"]],template:function(o,s){1&o&&(i.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-buttons",1),i._UZ(3,"ion-menu-button"),i.qZA(),i.TgZ(4,"ion-title",2),i._uU(5),i.qZA(),i._UZ(6,"ion-icon",3),i.YNc(7,Cn,1,0,"ion-progress-bar",4),i.qZA()(),i.YNc(8,Nn,3,3,"ion-content",5)),2&o&&(i.Q6J("translucent",!0),i.xp6(5),i.Oqu(s.pageTitle),i.xp6(2),i.Q6J("ngIf",!s.pageView),i.xp6(1),i.Q6J("ngIf",s.pageView))},dependencies:[be.O5,$.JJ,$.Q7,$.wO,$.On,h.YG,h.Sm,h.PM,h.FN,h.Zi,h.tO,h.Dq,h.wI,h.W2,h.jY,h.Gu,h.gu,h.Xz,h.pK,h.fG,h.X7,h.Nd,h.g2,h.wd,h.ho,h.sr,h.w,h.j9,h.YI,j.rH]}),t})()}];let Ln=(()=>{var e;class t{}return(e=t).\u0275fac=function(o){return new(o||e)},e.\u0275mod=i.oAB({type:e}),e.\u0275inj=i.cJS({imports:[j.Bz.forChild(Mn),j.Bz]}),t})(),qn=(()=>{var e;class t{}return(e=t).\u0275fac=function(o){return new(o||e)},e.\u0275mod=i.oAB({type:e}),e.\u0275inj=i.cJS({imports:[be.ez,$.u5,h.Pc,Ln]}),t})()}}]);