var Jt=Object.defineProperty;var Qt=(s,t,e)=>t in s?Jt(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var l=(s,t,e)=>Qt(s,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(i){if(i.ep)return;i.ep=!0;const a=e(i);fetch(i.href,a)}})();class Rt{constructor(t,e,n,i){l(this,"eventName");l(this,"listenerId");l(this,"data");l(this,"pingData");this.eventName=t,this.listenerId=e,this.data=n,this.pingData=i}}class yt{constructor(t){l(this,"gppVersion");l(this,"cmpStatus");l(this,"cmpDisplayStatus");l(this,"signalStatus");l(this,"supportedAPIs");l(this,"cmpId");l(this,"sectionList");l(this,"applicableSections");l(this,"gppString");l(this,"parsedSections");this.gppVersion=t.gppVersion,this.cmpStatus=t.cmpStatus,this.cmpDisplayStatus=t.cmpDisplayStatus,this.signalStatus=t.signalStatus,this.supportedAPIs=t.supportedAPIs,this.cmpId=t.cmpId,this.sectionList=t.gppModel.getSectionIds(),this.applicableSections=t.applicableSections,this.gppString=t.gppModel.encode(),this.parsedSections=t.gppModel.toObject()}}class pt{constructor(t,e,n){l(this,"callback");l(this,"parameter");l(this,"success",!0);l(this,"cmpApiContext");this.cmpApiContext=t,Object.assign(this,{callback:e,parameter:n})}execute(){try{return this.respond()}catch{return this.invokeCallback(null),null}}invokeCallback(t){const e=t!==null;this.callback&&this.callback(t,e)}}class Zt extends pt{respond(){let t=this.cmpApiContext.eventQueue.add({callback:this.callback,parameter:this.parameter}),e=new Rt("listenerRegistered",t,!0,new yt(this.cmpApiContext));this.invokeCallback(e)}}class Xt extends pt{respond(){let t=new yt(this.cmpApiContext);this.invokeCallback(t)}}class qt extends pt{respond(){if(!this.parameter||this.parameter.length===0)throw new Error("<section>.<field> parameter required");let t=this.parameter.split(".");if(t.length!=2)throw new Error("Field name must be in the format <section>.<fieldName>");let e=t[0],n=t[1],i=null;this.parameter!="tcfeuv2"&&(i=this.cmpApiContext.gppModel.getFieldValue(e,n)),this.invokeCallback(i)}}class en extends pt{respond(){if(!this.parameter||this.parameter.length===0)throw new Error("<section> parameter required");let t=null;this.parameter!="tcfeuv2"&&this.cmpApiContext.gppModel.hasSection(this.parameter)&&(t=this.cmpApiContext.gppModel.getSection(this.parameter)),this.invokeCallback(t)}}class tn extends pt{respond(){if(!this.parameter||this.parameter.length===0)throw new Error("<section>[.version] parameter required");let t=this.cmpApiContext.gppModel.hasSection(this.parameter);this.invokeCallback(t)}}var _e;(function(s){s.ADD_EVENT_LISTENER="addEventListener",s.GET_FIELD="getField",s.GET_SECTION="getSection",s.HAS_SECTION="hasSection",s.PING="ping",s.REMOVE_EVENT_LISTENER="removeEventListener"})(_e||(_e={}));class nn extends pt{respond(){let t=this.parameter,e=this.cmpApiContext.eventQueue.remove(t),n=new Rt("listenerRemoved",t,e,new yt(this.cmpApiContext));this.invokeCallback(n)}}var Ut,Ft,jt,Ht,Kt,zt;zt=_e.ADD_EVENT_LISTENER,Kt=_e.GET_FIELD,Ht=_e.GET_SECTION,jt=_e.HAS_SECTION,Ft=_e.PING,Ut=_e.REMOVE_EVENT_LISTENER;class Pe{}l(Pe,zt,Zt),l(Pe,Kt,qt),l(Pe,Ht,en),l(Pe,jt,tn),l(Pe,Ft,Xt),l(Pe,Ut,nn);var gt;(function(s){s.STUB="stub",s.LOADING="loading",s.LOADED="loaded",s.ERROR="error"})(gt||(gt={}));var Et;(function(s){s.VISIBLE="visible",s.HIDDEN="hidden",s.DISABLED="disabled"})(Et||(Et={}));var kt;(function(s){s.GPP_LOADED="gpploaded",s.CMP_UI_SHOWN="cmpuishown",s.USER_ACTION_COMPLETE="useractioncomplete"})(kt||(kt={}));var ht;(function(s){s.NOT_READY="not ready",s.READY="ready"})(ht||(ht={}));class sn{constructor(t,e){l(this,"callQueue");l(this,"customCommands");l(this,"cmpApiContext");if(this.cmpApiContext=t,e){let n=_e.ADD_EVENT_LISTENER;if(e!=null&&e[n])throw new Error(`Built-In Custom Commmand for ${n} not allowed`);if(n=_e.REMOVE_EVENT_LISTENER,e!=null&&e[n])throw new Error(`Built-In Custom Commmand for ${n} not allowed`);this.customCommands=e}try{this.callQueue=window.__gpp()||[]}catch{this.callQueue=[]}finally{window.__gpp=this.apiCall.bind(this),this.purgeQueuedCalls()}}apiCall(t,e,n,i){if(typeof t!="string")e(null,!1);else{if(e&&typeof e!="function")throw new Error("invalid callback function");this.isCustomCommand(t)?this.customCommands[t](e,n):this.isBuiltInCommand(t)?new Pe[t](this.cmpApiContext,e,n).execute():e&&e(null,!1)}}purgeQueuedCalls(){const t=this.callQueue;this.callQueue=[],t.forEach(e=>{window.__gpp(...e)})}isCustomCommand(t){return this.customCommands&&typeof this.customCommands[t]=="function"}isBuiltInCommand(t){return Pe[t]!==void 0}}class an{constructor(t){l(this,"eventQueue",new Map);l(this,"queueNumber",1e3);l(this,"cmpApiContext");this.cmpApiContext=t;try{let n=window.__gpp("events")||[];for(var e=0;e<n.length;e++){let i=n[e];this.eventQueue.set(i.id,{callback:i.callback,parameter:i.parameter})}}catch(n){console.log(n)}}add(t){return this.eventQueue.set(this.queueNumber,t),this.queueNumber++}get(t){return this.eventQueue.get(t)}remove(t){return this.eventQueue.delete(t)}exec(t,e){this.eventQueue.forEach((n,i)=>{let a=new Rt(t,i,e,new yt(this.cmpApiContext));n.callback(a,!0)})}clear(){this.queueNumber=1e3,this.eventQueue.clear()}get size(){return this.eventQueue.size}}class mt extends Error{constructor(t){super(t),this.name="InvalidFieldError"}}class Y{constructor(){l(this,"segments");l(this,"encodedString",null);l(this,"dirty",!1);l(this,"decoded",!0);this.segments=this.initializeSegments()}hasField(t){this.decoded||(this.segments=this.decodeSection(this.encodedString),this.dirty=!1,this.decoded=!0);for(let e=0;e<this.segments.length;e++){let n=this.segments[e];if(n.getFieldNames().includes(t))return n.hasField(t)}return!1}getFieldValue(t){this.decoded||(this.segments=this.decodeSection(this.encodedString),this.dirty=!1,this.decoded=!0);for(let e=0;e<this.segments.length;e++){let n=this.segments[e];if(n.hasField(t))return n.getFieldValue(t)}throw new mt("Invalid field: '"+t+"'")}setFieldValue(t,e){this.decoded||(this.segments=this.decodeSection(this.encodedString),this.dirty=!1,this.decoded=!0);for(let n=0;n<this.segments.length;n++){let i=this.segments[n];if(i.hasField(t)){i.setFieldValue(t,e);return}}throw new mt("Invalid field: '"+t+"'")}toObj(){let t={};for(let e=0;e<this.segments.length;e++){let n=this.segments[e].toObj();for(const[i,a]of Object.entries(n))t[i]=a}return t}encode(){return(this.encodedString==null||this.encodedString.length===0||this.dirty)&&(this.encodedString=this.encodeSection(this.segments),this.dirty=!1,this.decoded=!0),this.encodedString}decode(t){this.encodedString=t,this.segments=this.decodeSection(this.encodedString),this.dirty=!1,this.decoded=!1}setIsDirty(t){this.dirty=t}}class p extends Error{constructor(t){super(t),this.name="DecodingError"}}class Z extends Error{constructor(t){super(t),this.name="EncodingError"}}class A{static encode(t,e){let n=[];if(t>=1)for(n.push(1);t>=n[0]*2;)n.unshift(n[0]*2);let i="";for(let a=0;a<n.length;a++){let o=n[a];t>=o?(i+="1",t-=o):i+="0"}if(i.length>e)throw new Z("Numeric value '"+t+"' is too large for a bit string length of '"+e+"'");for(;i.length<e;)i="0"+i;return i}static decode(t){if(!/^[0-1]*$/.test(t))throw new p("Undecodable FixedInteger '"+t+"'");let e=0,n=[];for(let i=0;i<t.length;i++)i===0?n[t.length-(i+1)]=1:n[t.length-(i+1)]=n[t.length-i]*2;for(let i=0;i<t.length;i++)t.charAt(i)==="1"&&(e+=n[i]);return e}}const at=class at{encode(t){if(!/^[0-1]*$/.test(t))throw new Z("Unencodable Base64Url '"+t+"'");t=this.pad(t);let e="",n=0;for(;n<=t.length-6;){let i=t.substring(n,n+6);try{let a=A.decode(i),o=at.DICT.charAt(a);e+=o,n+=6}catch{throw new Z("Unencodable Base64Url '"+t+"'")}}return e}decode(t){if(!/^[A-Za-z0-9\-_]*$/.test(t))throw new p("Undecodable Base64URL string '"+t+"'");let e="";for(let n=0;n<t.length;n++){let i=t.charAt(n),a=at.REVERSE_DICT.get(i),o=A.encode(a,6);e+=o}return e}};l(at,"DICT","ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"),l(at,"REVERSE_DICT",new Map([["A",0],["B",1],["C",2],["D",3],["E",4],["F",5],["G",6],["H",7],["I",8],["J",9],["K",10],["L",11],["M",12],["N",13],["O",14],["P",15],["Q",16],["R",17],["S",18],["T",19],["U",20],["V",21],["W",22],["X",23],["Y",24],["Z",25],["a",26],["b",27],["c",28],["d",29],["e",30],["f",31],["g",32],["h",33],["i",34],["j",35],["k",36],["l",37],["m",38],["n",39],["o",40],["p",41],["q",42],["r",43],["s",44],["t",45],["u",46],["v",47],["w",48],["x",49],["y",50],["z",51],["0",52],["1",53],["2",54],["3",55],["4",56],["5",57],["6",58],["7",59],["8",60],["9",61],["-",62],["_",63]]));let St=at;const At=class At extends St{constructor(){super()}static getInstance(){return this.instance}pad(t){for(;t.length%8>0;)t+="0";for(;t.length%6>0;)t+="0";return t}};l(At,"instance",new At);let O=At;const Tt=class Tt{constructor(){}static getInstance(){return this.instance}encode(t,e){let n="";for(let i=0;i<e.length;i++){let a=e[i];if(t.containsKey(a)){let o=t.get(a);n+=o.encode()}else throw new Error("Field not found: '"+a+"'")}return n}decode(t,e,n){let i=0;for(let a=0;a<e.length;a++){let o=e[a];if(n.containsKey(o)){let d=n.get(o);try{let r=d.substring(t,i);d.decode(r),i+=r.length}catch(r){if(r.name==="SubstringError"&&!d.getHardFailIfMissing())return;throw new p("Unable to decode field '"+o+"'")}}else throw new Error("Field not found: '"+o+"'")}}};l(Tt,"instance",new Tt);let S=Tt;class it{static encode(t){let e=[];if(t>=1&&(e.push(1),t>=2)){e.push(2);let i=2;for(;t>=e[i-1]+e[i-2];)e.push(e[i-1]+e[i-2]),i++}let n="1";for(let i=e.length-1;i>=0;i--){let a=e[i];t>=a?(n="1"+n,t-=a):n="0"+n}return n}static decode(t){if(!/^[0-1]*$/.test(t)||t.length<2||t.indexOf("11")!==t.length-2)throw new p("Undecodable FibonacciInteger '"+t+"'");let e=0,n=[];for(let i=0;i<t.length-1;i++)i===0?n.push(1):i===1?n.push(2):n.push(n[i-1]+n[i-2]);for(let i=0;i<t.length-1;i++)t.charAt(i)==="1"&&(e+=n[i]);return e}}class dt{static encode(t){if(t===!0)return"1";if(t===!1)return"0";throw new Z("Unencodable Boolean '"+t+"'")}static decode(t){if(t==="1")return!0;if(t==="0")return!1;throw new p("Undecodable Boolean '"+t+"'")}}class bt{static encode(t){t=t.sort((o,d)=>o-d);let e=[],n=0,i=0;for(;i<t.length;){let o=i;for(;o<t.length-1&&t[o]+1===t[o+1];)o++;e.push(t.slice(i,o+1)),i=o+1}let a=A.encode(e.length,12);for(let o=0;o<e.length;o++)if(e[o].length==1){let d=e[o][0]-n;n=e[o][0],a+="0"+it.encode(d)}else{let d=e[o][0]-n;n=e[o][0];let r=e[o][e[o].length-1]-n;n=e[o][e[o].length-1],a+="1"+it.encode(d)+it.encode(r)}return a}static decode(t){if(!/^[0-1]*$/.test(t)||t.length<12)throw new p("Undecodable FibonacciIntegerRange '"+t+"'");let e=[],n=A.decode(t.substring(0,12)),i=0,a=12;for(let o=0;o<n;o++){let d=dt.decode(t.substring(a,a+1));if(a++,d===!0){let r=t.indexOf("11",a),h=it.decode(t.substring(a,r+2))+i;i=h,a=r+2,r=t.indexOf("11",a);let m=it.decode(t.substring(a,r+2))+i;i=m,a=r+2;for(let v=h;v<=m;v++)e.push(v)}else{let r=t.indexOf("11",a),h=it.decode(t.substring(a,r+2))+i;i=h,e.push(h),a=r+2}}return e}}class on extends Error{constructor(t){super(t),this.name="ValidationError"}}class Te{constructor(t=!0){l(this,"hardFailIfMissing");l(this,"validator");l(this,"value");this.hardFailIfMissing=t}withValidator(t){return this.validator=t,this}hasValue(){return this.value!==void 0&&this.value!==null}getValue(){return this.value}setValue(t){if(!this.validator||this.validator.test(t))this.value=t;else throw new on("Invalid value '"+t+"'")}getHardFailIfMissing(){return this.hardFailIfMissing}}class Ae extends p{constructor(t){super(t),this.name="SubstringError"}}class L{static substring(t,e,n){if(n>t.length||e<0||e>n)throw new Ae("Invalid substring indexes "+e+":"+n+" for string of length "+t.length);return t.substring(e,n)}}class Wt extends Te{constructor(t,e=!0){super(e),this.setValue(t)}encode(){try{return bt.encode(this.value)}catch(t){throw new Z(t)}}decode(t){try{this.value=bt.decode(t)}catch(e){throw new p(e)}}substring(t,e){try{let n=A.decode(L.substring(t,e,e+12)),i=e+12;for(let a=0;a<n;a++)t.charAt(i)==="1"?i=t.indexOf("11",t.indexOf("11",i+1)+2)+2:i=t.indexOf("11",i+1)+2;return L.substring(t,e,i)}catch(n){throw new Ae(n)}}getValue(){return[...super.getValue()]}setValue(t){super.setValue(Array.from(new Set(t)).sort((e,n)=>e-n))}}class c extends Te{constructor(e,n,i=!0){super(i);l(this,"bitStringLength");this.bitStringLength=e,this.setValue(n)}encode(){try{return A.encode(this.value,this.bitStringLength)}catch(e){throw new Z(e)}}decode(e){try{this.value=A.decode(e)}catch(n){throw new p(n)}}substring(e,n){try{return L.substring(e,n,n+this.bitStringLength)}catch(i){throw new Ae(i)}}}class f{constructor(){l(this,"fields",new Map)}containsKey(t){return this.fields.has(t)}put(t,e){this.fields.set(t,e)}get(t){return this.fields.get(t)}getAll(){return new Map(this.fields)}reset(t){this.fields.clear(),t.getAll().forEach((e,n)=>{this.fields.set(n,e)})}}var Ce;(function(s){s.ID="Id",s.VERSION="Version",s.SECTION_IDS="SectionIds"})(Ce||(Ce={}));const ln=[Ce.ID,Ce.VERSION,Ce.SECTION_IDS];class b{constructor(){l(this,"fields");l(this,"encodedString",null);l(this,"dirty",!1);l(this,"decoded",!0);this.fields=this.initializeFields()}validate(){}hasField(t){return this.fields.containsKey(t)}getFieldValue(t){if(this.decoded||(this.decodeSegment(this.encodedString,this.fields),this.dirty=!1,this.decoded=!0),this.fields.containsKey(t))return this.fields.get(t).getValue();throw new mt("Invalid field: '"+t+"'")}setFieldValue(t,e){if(this.decoded||(this.decodeSegment(this.encodedString,this.fields),this.dirty=!1,this.decoded=!0),this.fields.containsKey(t))this.fields.get(t).setValue(e),this.dirty=!0;else throw new mt(t+" not found")}toObj(){let t={},e=this.getFieldNames();for(let n=0;n<e.length;n++){let i=e[n],a=this.getFieldValue(i);t[i]=a}return t}encode(){return(this.encodedString==null||this.encodedString.length===0||this.dirty)&&(this.validate(),this.encodedString=this.encodeSegment(this.fields),this.dirty=!1,this.decoded=!0),this.encodedString}decode(t){this.encodedString=t,this.dirty=!1,this.decoded=!1}}class cn extends b{constructor(e){super();l(this,"base64UrlEncoder",O.getInstance());l(this,"bitStringEncoder",S.getInstance());e&&this.decode(e)}getFieldNames(){return ln}initializeFields(){let e=new f;return e.put(Ce.ID.toString(),new c(6,Ve.ID)),e.put(Ce.VERSION.toString(),new c(6,Ve.VERSION)),e.put(Ce.SECTION_IDS.toString(),new Wt([])),e}encodeSegment(e){let n=this.bitStringEncoder.encode(e,this.getFieldNames());return this.base64UrlEncoder.encode(n)}decodeSegment(e,n){(e==null||e.length===0)&&this.fields.reset(n);try{let i=this.base64UrlEncoder.decode(e);this.bitStringEncoder.decode(i,this.getFieldNames(),n)}catch{throw new p("Unable to decode HeaderV1CoreSegment '"+e+"'")}}}const De=class De extends Y{constructor(t){super(),t&&t.length>0&&this.decode(t)}getId(){return De.ID}getName(){return De.NAME}getVersion(){return De.VERSION}initializeSegments(){let t=[];return t.push(new cn),t}decodeSection(t){let e=this.initializeSegments();if(t!=null&&t.length!==0){let n=t.split(".");for(let i=0;i<e.length;i++)n.length>i&&e[i].decode(n[i])}return e}encodeSection(t){let e=[];for(let n=0;n<t.length;n++){let i=t[n];e.push(i.encode())}return e.join(".")}};l(De,"ID",3),l(De,"VERSION",1),l(De,"NAME","header");let Ve=De;var g;(function(s){s.VERSION="Version",s.CREATED="Created",s.LAST_UPDATED="LastUpdated",s.CMP_ID="CmpId",s.CMP_VERSION="CmpVersion",s.CONSENT_SCREEN="ConsentScreen",s.CONSENT_LANGUAGE="ConsentLanguage",s.VENDOR_LIST_VERSION="VendorListVersion",s.POLICY_VERSION="PolicyVersion",s.IS_SERVICE_SPECIFIC="IsServiceSpecific",s.USE_NON_STANDARD_STACKS="UseNonStandardStacks",s.SPECIAL_FEATURE_OPTINS="SpecialFeatureOptins",s.PURPOSE_CONSENTS="PurposeConsents",s.PURPOSE_LEGITIMATE_INTERESTS="PurposeLegitimateInterests",s.PURPOSE_ONE_TREATMENT="PurposeOneTreatment",s.PUBLISHER_COUNTRY_CODE="PublisherCountryCode",s.VENDOR_CONSENTS="VendorConsents",s.VENDOR_LEGITIMATE_INTERESTS="VendorLegitimateInterests",s.PUBLISHER_RESTRICTIONS="PublisherRestrictions",s.PUBLISHER_PURPOSES_SEGMENT_TYPE="PublisherPurposesSegmentType",s.PUBLISHER_CONSENTS="PublisherConsents",s.PUBLISHER_LEGITIMATE_INTERESTS="PublisherLegitimateInterests",s.NUM_CUSTOM_PURPOSES="NumCustomPurposes",s.PUBLISHER_CUSTOM_CONSENTS="PublisherCustomConsents",s.PUBLISHER_CUSTOM_LEGITIMATE_INTERESTS="PublisherCustomLegitimateInterests",s.VENDORS_ALLOWED_SEGMENT_TYPE="VendorsAllowedSegmentType",s.VENDORS_ALLOWED="VendorsAllowed",s.VENDORS_DISCLOSED_SEGMENT_TYPE="VendorsDisclosedSegmentType",s.VENDORS_DISCLOSED="VendorsDisclosed"})(g||(g={}));const dn=[g.VERSION,g.CREATED,g.LAST_UPDATED,g.CMP_ID,g.CMP_VERSION,g.CONSENT_SCREEN,g.CONSENT_LANGUAGE,g.VENDOR_LIST_VERSION,g.POLICY_VERSION,g.IS_SERVICE_SPECIFIC,g.USE_NON_STANDARD_STACKS,g.SPECIAL_FEATURE_OPTINS,g.PURPOSE_CONSENTS,g.PURPOSE_LEGITIMATE_INTERESTS,g.PURPOSE_ONE_TREATMENT,g.PUBLISHER_COUNTRY_CODE,g.VENDOR_CONSENTS,g.VENDOR_LEGITIMATE_INTERESTS,g.PUBLISHER_RESTRICTIONS],rn=[g.PUBLISHER_PURPOSES_SEGMENT_TYPE,g.PUBLISHER_CONSENTS,g.PUBLISHER_LEGITIMATE_INTERESTS,g.NUM_CUSTOM_PURPOSES,g.PUBLISHER_CUSTOM_CONSENTS,g.PUBLISHER_CUSTOM_LEGITIMATE_INTERESTS],un=[g.VENDORS_ALLOWED_SEGMENT_TYPE,g.VENDORS_ALLOWED],pn=[g.VENDORS_DISCLOSED_SEGMENT_TYPE,g.VENDORS_DISCLOSED],_t=class _t extends St{constructor(){super()}static getInstance(){return this.instance}pad(t){for(;t.length%24>0;)t+="0";return t}};l(_t,"instance",new _t);let rt=_t;class ut{static encode(t){t.sort((a,o)=>a-o);let e=[],n=0;for(;n<t.length;){let a=n;for(;a<t.length-1&&t[a]+1===t[a+1];)a++;e.push(t.slice(n,a+1)),n=a+1}let i=A.encode(e.length,12);for(let a=0;a<e.length;a++)e[a].length===1?i+="0"+A.encode(e[a][0],16):i+="1"+A.encode(e[a][0],16)+A.encode(e[a][e[a].length-1],16);return i}static decode(t){if(!/^[0-1]*$/.test(t)||t.length<12)throw new p("Undecodable FixedIntegerRange '"+t+"'");let e=[],n=A.decode(t.substring(0,12)),i=12;for(let a=0;a<n;a++){let o=dt.decode(t.substring(i,i+1));if(i++,o===!0){let d=A.decode(t.substring(i,i+16));i+=16;let r=A.decode(t.substring(i,i+16));i+=16;for(let h=d;h<=r;h++)e.push(h)}else{let d=A.decode(t.substring(i,i+16));e.push(d),i+=16}}return e}}class Dt extends Te{constructor(t,e=!0){super(e),this.setValue(t)}encode(){try{return ut.encode(this.value)}catch(t){throw new Z(t)}}decode(t){try{this.value=ut.decode(t)}catch(e){throw new p(e)}}substring(t,e){try{let n=A.decode(L.substring(t,e,e+12)),i=e+12;for(let a=0;a<n;a++)t.charAt(i)==="1"?i+=33:i+=17;return L.substring(t,e,i)}catch(n){throw new Ae(n)}}getValue(){return[...super.getValue()]}setValue(t){super.setValue(Array.from(new Set(t)).sort((e,n)=>e-n))}}class Yt{constructor(t,e,n){l(this,"key");l(this,"type");l(this,"ids");this.key=t,this.type=e,this.ids=n}getKey(){return this.key}setKey(t){this.key=t}getType(){return this.type}setType(t){this.type=t}getIds(){return this.ids}setIds(t){this.ids=t}}class $t extends Te{constructor(e,n,i,a=!0){super(a);l(this,"keyBitStringLength");l(this,"typeBitStringLength");this.keyBitStringLength=e,this.typeBitStringLength=n,this.setValue(i)}encode(){try{let e=this.value,n="";n+=A.encode(e.length,12);for(let i=0;i<e.length;i++){let a=e[i];n+=A.encode(a.getKey(),this.keyBitStringLength),n+=A.encode(a.getType(),this.typeBitStringLength),n+=ut.encode(a.getIds())}return n}catch(e){throw new Z(e)}}decode(e){try{let n=[],i=A.decode(L.substring(e,0,12)),a=12;for(let o=0;o<i;o++){let d=A.decode(L.substring(e,a,a+this.keyBitStringLength));a+=this.keyBitStringLength;let r=A.decode(L.substring(e,a,a+this.typeBitStringLength));a+=this.typeBitStringLength;let h=new Dt([]).substring(e,a),m=ut.decode(h);a+=h.length,n.push(new Yt(d,r,m))}this.value=n}catch(n){throw new p(n)}}substring(e,n){try{let i="";i+=L.substring(e,n,n+12);let a=A.decode(i.toString()),o=n+i.length;for(let d=0;d<a;d++){let r=L.substring(e,o,o+this.keyBitStringLength);o+=r.length,i+=r;let h=L.substring(e,o,o+this.typeBitStringLength);o+=h.length,i+=h;let m=new Dt([]).substring(e,o);o+=m.length,i+=m}return i}catch(i){throw new Ae(i)}}}class T extends Te{constructor(t,e=!0){super(e),this.setValue(t)}encode(){try{return dt.encode(this.value)}catch(t){throw new Z(t)}}decode(t){try{this.value=dt.decode(t)}catch(e){throw new p(e)}}substring(t,e){try{return L.substring(t,e,e+1)}catch(n){throw new Ae(n)}}}class Gt{static encode(t){return t?A.encode(Math.round(t.getTime()/100),36):A.encode(0,36)}static decode(t){if(!/^[0-1]*$/.test(t)||t.length!==36)throw new p("Undecodable Datetime '"+t+"'");return new Date(A.decode(t)*100)}}class ft extends Te{constructor(t,e=!0){super(e),this.setValue(t)}encode(){try{return Gt.encode(this.value)}catch(t){throw new Z(t)}}decode(t){try{this.value=Gt.decode(t)}catch(e){throw new p(e)}}substring(t,e){try{return L.substring(t,e,e+36)}catch(n){throw new Ae(n)}}}class nt{static encode(t,e){if(t.length>e)throw new Z("Too many values '"+t.length+"'");let n="";for(let i=0;i<t.length;i++)n+=dt.encode(t[i]);for(;n.length<e;)n+="0";return n}static decode(t){if(!/^[0-1]*$/.test(t))throw new p("Undecodable FixedBitfield '"+t+"'");let e=[];for(let n=0;n<t.length;n++)e.push(dt.decode(t.substring(n,n+1)));return e}}class ye extends Te{constructor(e,n=!0){super(n);l(this,"numElements");this.numElements=e.length,this.setValue(e)}encode(){try{return nt.encode(this.value,this.numElements)}catch(e){throw new Z(e)}}decode(e){try{this.value=nt.decode(e)}catch(n){throw new p(n)}}substring(e,n){try{return L.substring(e,n,n+this.numElements)}catch(i){throw new Ae(i)}}getValue(){return[...super.getValue()]}setValue(e){let n=[...e];for(let i=n.length;i<this.numElements;i++)n.push(!1);n.length>this.numElements&&(n=n.slice(0,this.numElements)),super.setValue(n)}}class xt{static encode(t,e){for(;t.length<e;)t+=" ";let n="";for(let i=0;i<t.length;i++){let a=t.charCodeAt(i);if(a===32)n+=A.encode(63,6);else if(a>=65)n+=A.encode(t.charCodeAt(i)-65,6);else throw new Z("Unencodable FixedString '"+t+"'")}return n}static decode(t){if(!/^[0-1]*$/.test(t)||t.length%6!==0)throw new p("Undecodable FixedString '"+t+"'");let e="";for(let n=0;n<t.length;n+=6){let i=A.decode(t.substring(n,n+6));i===63?e+=" ":e+=String.fromCharCode(i+65)}return e.trim()}}class wt extends Te{constructor(e,n,i=!0){super(i);l(this,"stringLength");this.stringLength=e,this.setValue(n)}encode(){try{return xt.encode(this.value,this.stringLength)}catch(e){throw new Z(e)}}decode(e){try{this.value=xt.decode(e)}catch(n){throw new p(n)}}substring(e,n){try{return L.substring(e,n,n+this.stringLength*6)}catch(i){throw new Ae(i)}}}class st extends Te{constructor(t,e=!0){super(e),this.setValue(t)}encode(){try{let t=this.value.length>0?this.value[this.value.length-1]:0,e=ut.encode(this.value),n=e.length,i=t;if(n<=i)return A.encode(t,16)+"1"+e;{let a=[],o=0;for(let d=0;d<t;d++)d===this.value[o]-1?(a[d]=!0,o++):a[d]=!1;return A.encode(t,16)+"0"+nt.encode(a,i)}}catch(t){throw new Z(t)}}decode(t){try{if(t.charAt(16)==="1")this.value=ut.decode(t.substring(17));else{let e=[],n=nt.decode(t.substring(17));for(let i=0;i<n.length;i++)n[i]===!0&&e.push(i+1);this.value=e}}catch(e){throw new p(e)}}substring(t,e){try{let n=A.decode(L.substring(t,e,e+16));return t.charAt(e+16)==="1"?L.substring(t,e,e+17)+new Dt([]).substring(t,e+17):L.substring(t,e,e+17+n)}catch(n){throw new Ae(n)}}getValue(){return[...super.getValue()]}setValue(t){super.setValue(Array.from(new Set(t)).sort((e,n)=>e-n))}}class mn extends b{constructor(e){super();l(this,"base64UrlEncoder",rt.getInstance());l(this,"bitStringEncoder",S.getInstance());e&&this.decode(e)}getFieldNames(){return dn}initializeFields(){let e=new Date,n=new f;return n.put(g.VERSION.toString(),new c(6,ee.VERSION)),n.put(g.CREATED.toString(),new ft(e)),n.put(g.LAST_UPDATED.toString(),new ft(e)),n.put(g.CMP_ID.toString(),new c(12,0)),n.put(g.CMP_VERSION.toString(),new c(12,0)),n.put(g.CONSENT_SCREEN.toString(),new c(6,0)),n.put(g.CONSENT_LANGUAGE.toString(),new wt(2,"EN")),n.put(g.VENDOR_LIST_VERSION.toString(),new c(12,0)),n.put(g.POLICY_VERSION.toString(),new c(6,5)),n.put(g.IS_SERVICE_SPECIFIC.toString(),new T(!0)),n.put(g.USE_NON_STANDARD_STACKS.toString(),new T(!1)),n.put(g.SPECIAL_FEATURE_OPTINS.toString(),new ye([!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1])),n.put(g.PURPOSE_CONSENTS.toString(),new ye([!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1])),n.put(g.PURPOSE_LEGITIMATE_INTERESTS.toString(),new ye([!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1])),n.put(g.PURPOSE_ONE_TREATMENT.toString(),new T(!1)),n.put(g.PUBLISHER_COUNTRY_CODE.toString(),new wt(2,"AA")),n.put(g.VENDOR_CONSENTS.toString(),new st([])),n.put(g.VENDOR_LEGITIMATE_INTERESTS.toString(),new st([])),n.put(g.PUBLISHER_RESTRICTIONS.toString(),new $t(6,2,[],!1)),n}encodeSegment(e){let n=this.bitStringEncoder.encode(e,this.getFieldNames());return this.base64UrlEncoder.encode(n)}decodeSegment(e,n){(e==null||e.length===0)&&this.fields.reset(n);try{let i=this.base64UrlEncoder.decode(e);this.bitStringEncoder.decode(i,this.getFieldNames(),n)}catch{throw new p("Unable to decode TcfEuV2CoreSegment '"+e+"'")}}}class It extends Te{constructor(e,n,i=!0){super(i);l(this,"getLength");this.getLength=e,this.setValue(n)}encode(){try{return nt.encode(this.value,this.getLength())}catch(e){throw new Z(e)}}decode(e){try{this.value=nt.decode(e)}catch(n){throw new p(n)}}substring(e,n){try{return L.substring(e,n,n+this.getLength())}catch(i){throw new Ae(i)}}getValue(){return[...super.getValue()]}setValue(e){let n=this.getLength(),i=[...e];for(let a=i.length;a<n;a++)i.push(!1);i.length>n&&(i=i.slice(0,n)),super.setValue([...i])}}class vn extends b{constructor(e){super();l(this,"base64UrlEncoder",rt.getInstance());l(this,"bitStringEncoder",S.getInstance());e&&this.decode(e)}getFieldNames(){return rn}initializeFields(){let e=new f;e.put(g.PUBLISHER_PURPOSES_SEGMENT_TYPE.toString(),new c(3,3)),e.put(g.PUBLISHER_CONSENTS.toString(),new ye([!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1])),e.put(g.PUBLISHER_LEGITIMATE_INTERESTS.toString(),new ye([!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1]));let n=new c(6,0);return e.put(g.NUM_CUSTOM_PURPOSES.toString(),n),e.put(g.PUBLISHER_CUSTOM_CONSENTS.toString(),new It(()=>n.getValue(),[])),e.put(g.PUBLISHER_CUSTOM_LEGITIMATE_INTERESTS.toString(),new It(()=>n.getValue(),[])),e}encodeSegment(e){let n=this.bitStringEncoder.encode(e,this.getFieldNames());return this.base64UrlEncoder.encode(n)}decodeSegment(e,n){(e==null||e.length===0)&&this.fields.reset(n);try{let i=this.base64UrlEncoder.decode(e);this.bitStringEncoder.decode(i,this.getFieldNames(),n)}catch{throw new p("Unable to decode TcfEuV2PublisherPurposesSegment '"+e+"'")}}}class gn extends b{constructor(e){super();l(this,"base64UrlEncoder",rt.getInstance());l(this,"bitStringEncoder",S.getInstance());e&&this.decode(e)}getFieldNames(){return un}initializeFields(){let e=new f;return e.put(g.VENDORS_ALLOWED_SEGMENT_TYPE.toString(),new c(3,2)),e.put(g.VENDORS_ALLOWED.toString(),new st([])),e}encodeSegment(e){let n=this.bitStringEncoder.encode(e,this.getFieldNames());return this.base64UrlEncoder.encode(n)}decodeSegment(e,n){(e==null||e.length===0)&&this.fields.reset(n);try{let i=this.base64UrlEncoder.decode(e);this.bitStringEncoder.decode(i,this.getFieldNames(),n)}catch{throw new p("Unable to decode TcfEuV2VendorsAllowedSegment '"+e+"'")}}}class En extends b{constructor(e){super();l(this,"base64UrlEncoder",rt.getInstance());l(this,"bitStringEncoder",S.getInstance());e&&this.decode(e)}getFieldNames(){return pn}initializeFields(){let e=new f;return e.put(g.VENDORS_DISCLOSED_SEGMENT_TYPE.toString(),new c(3,1)),e.put(g.VENDORS_DISCLOSED.toString(),new st([])),e}encodeSegment(e){let n=this.bitStringEncoder.encode(e,this.getFieldNames());return this.base64UrlEncoder.encode(n)}decodeSegment(e,n){(e==null||e.length===0)&&this.fields.reset(n);try{let i=this.base64UrlEncoder.decode(e);this.bitStringEncoder.decode(i,this.getFieldNames(),n)}catch{throw new p("Unable to decode TcfEuV2VendorsDisclosedSegment '"+e+"'")}}}const we=class we extends Y{constructor(t){super(),t&&t.length>0&&this.decode(t)}getId(){return we.ID}getName(){return we.NAME}getVersion(){return we.VERSION}initializeSegments(){let t=[];return t.push(new mn),t.push(new vn),t.push(new gn),t.push(new En),t}decodeSection(t){let e=this.initializeSegments();if(t!=null&&t.length!==0){let n=t.split(".");for(let i=0;i<n.length;i++){let a=n[i];if(a.length!==0){let o=a.charAt(0);if(o>="A"&&o<="H")e[0].decode(n[i]);else if(o>="I"&&o<="P")e[3].decode(n[i]);else if(o>="Q"&&o<="X")e[2].decode(n[i]);else if(o>="Y"&&o<="Z"||o>="a"&&o<="f")e[1].decode(n[i]);else throw new p("Unable to decode TcfEuV2 segment '"+a+"'")}}}return e}encodeSection(t){let e=[];if(t.length>=1){e.push(t[0].encode());let n=this.getFieldValue(g.IS_SERVICE_SPECIFIC);if(n)t.length>=2&&e.push(t[3].encode()),t.length>=3&&e.push(t[1].encode());else throw new Z("Unable to encode TcfEuV2 segment with isServiceSpecific = '"+n+"'")}return e.join(".")}setFieldValue(t,e){t===g.PURPOSE_LEGITIMATE_INTERESTS&&(e[0]=!1,e[2]=e[3]=e[4]=e[5]=!1),t===g.CREATED||t===g.LAST_UPDATED?t===g.CREATED?super.setFieldValue(g.LAST_UPDATED,e):super.setFieldValue(g.CREATED,e):this.updateDateStamp(),super.setFieldValue(t,e)}updateDateStamp(){const t=new Date,e=new Date(Date.UTC(t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate()));super.setFieldValue(g.CREATED,e),super.setFieldValue(g.LAST_UPDATED,e)}};l(we,"ID",2),l(we,"VERSION",2),l(we,"NAME","tcfeuv2");let ee=we;var E;(function(s){s.VERSION="Version",s.CREATED="Created",s.LAST_UPDATED="LastUpdated",s.CMP_ID="CmpId",s.CMP_VERSION="CmpVersion",s.CONSENT_SCREEN="ConsentScreen",s.CONSENT_LANGUAGE="ConsentLanguage",s.VENDOR_LIST_VERSION="VendorListVersion",s.TCF_POLICY_VERSION="TcfPolicyVersion",s.USE_NON_STANDARD_STACKS="UseNonStandardStacks",s.SPECIAL_FEATURE_EXPRESS_CONSENT="SpecialFeatureExpressConsent",s.PUB_PURPOSES_SEGMENT_TYPE="PubPurposesSegmentType",s.PURPOSES_EXPRESS_CONSENT="PurposesExpressConsent",s.PURPOSES_IMPLIED_CONSENT="PurposesImpliedConsent",s.VENDOR_EXPRESS_CONSENT="VendorExpressConsent",s.VENDOR_IMPLIED_CONSENT="VendorImpliedConsent",s.PUB_RESTRICTIONS="PubRestrictions",s.PUB_PURPOSES_EXPRESS_CONSENT="PubPurposesExpressConsent",s.PUB_PURPOSES_IMPLIED_CONSENT="PubPurposesImpliedConsent",s.NUM_CUSTOM_PURPOSES="NumCustomPurposes",s.CUSTOM_PURPOSES_EXPRESS_CONSENT="CustomPurposesExpressConsent",s.CUSTOM_PURPOSES_IMPLIED_CONSENT="CustomPurposesImpliedConsent",s.DISCLOSED_VENDORS_SEGMENT_TYPE="DisclosedVendorsSegmentType",s.DISCLOSED_VENDORS="DisclosedVendors"})(E||(E={}));const hn=[E.VERSION,E.CREATED,E.LAST_UPDATED,E.CMP_ID,E.CMP_VERSION,E.CONSENT_SCREEN,E.CONSENT_LANGUAGE,E.VENDOR_LIST_VERSION,E.TCF_POLICY_VERSION,E.USE_NON_STANDARD_STACKS,E.SPECIAL_FEATURE_EXPRESS_CONSENT,E.PURPOSES_EXPRESS_CONSENT,E.PURPOSES_IMPLIED_CONSENT,E.VENDOR_EXPRESS_CONSENT,E.VENDOR_IMPLIED_CONSENT,E.PUB_RESTRICTIONS],Sn=[E.PUB_PURPOSES_SEGMENT_TYPE,E.PUB_PURPOSES_EXPRESS_CONSENT,E.PUB_PURPOSES_IMPLIED_CONSENT,E.NUM_CUSTOM_PURPOSES,E.CUSTOM_PURPOSES_EXPRESS_CONSENT,E.CUSTOM_PURPOSES_IMPLIED_CONSENT],bn=[E.DISCLOSED_VENDORS_SEGMENT_TYPE,E.DISCLOSED_VENDORS];class ct extends Te{constructor(t,e=!0){super(e),this.setValue(t)}encode(){try{let t=this.value.length>0?this.value[this.value.length-1]:0,e=bt.encode(this.value),n=e.length,i=t;if(n<=i)return A.encode(t,16)+"1"+e;{let a=[],o=0;for(let d=0;d<t;d++)d==this.value[o]-1?(a[d]=!0,o++):a[d]=!1;return A.encode(t,16)+"0"+nt.encode(a,i)}}catch(t){throw new Z(t)}}decode(t){try{if(t.charAt(16)==="1")this.value=bt.decode(t.substring(17));else{let e=[],n=nt.decode(t.substring(17));for(let i=0;i<n.length;i++)n[i]===!0&&e.push(i+1);this.value=e}}catch(e){throw new p(e)}}substring(t,e){try{let n=A.decode(L.substring(t,e,e+16));return t.charAt(e+16)==="1"?L.substring(t,e,e+17)+new Wt([]).substring(t,e+17):L.substring(t,e,e+17+n)}catch(n){throw new Ae(n)}}getValue(){return[...super.getValue()]}setValue(t){super.setValue(Array.from(new Set(t)).sort((e,n)=>e-n))}}class fn extends Te{constructor(e,n,i,a=!0){super(a);l(this,"keyBitStringLength");l(this,"typeBitStringLength");this.keyBitStringLength=e,this.typeBitStringLength=n,this.setValue(i)}encode(){try{let e=this.value,n="";n+=A.encode(e.length,12);for(let i=0;i<e.length;i++){let a=e[i];n+=A.encode(a.getKey(),this.keyBitStringLength),n+=A.encode(a.getType(),this.typeBitStringLength),n+=new ct(a.getIds()).encode()}return n}catch(e){throw new Z(e)}}decode(e){try{let n=[],i=A.decode(L.substring(e,0,12)),a=12;for(let o=0;o<i;o++){let d=A.decode(L.substring(e,a,a+this.keyBitStringLength));a+=this.keyBitStringLength;let r=A.decode(L.substring(e,a,a+this.typeBitStringLength));a+=this.typeBitStringLength;let h=new ct([]),m=h.substring(e,a);h.decode(m);let v=h.getValue();a+=m.length,n.push(new Yt(d,r,v))}this.value=n}catch(n){throw new p(n)}}substring(e,n){try{let i="";i+=L.substring(e,n,n+12);let a=A.decode(i.toString()),o=n+i.length;for(let d=0;d<a;d++){let r=L.substring(e,o,o+this.keyBitStringLength);o+=r.length,i+=r;let h=L.substring(e,o,o+this.typeBitStringLength);o+=h.length,i+=h;let m=new ct([]).substring(e,o);o+=m.length,i+=m}return i}catch(i){throw new Ae(i)}}}class In extends b{constructor(e){super();l(this,"base64UrlEncoder",O.getInstance());l(this,"bitStringEncoder",S.getInstance());e&&this.decode(e)}getFieldNames(){return hn}initializeFields(){return this.buildFields(!1)}buildFields(e){let n=new Date,i=new f;return i.put(E.VERSION.toString(),new c(6,te.VERSION)),i.put(E.CREATED.toString(),new ft(n)),i.put(E.LAST_UPDATED.toString(),new ft(n)),i.put(E.CMP_ID.toString(),new c(12,0)),i.put(E.CMP_VERSION.toString(),new c(12,0)),i.put(E.CONSENT_SCREEN.toString(),new c(6,0)),i.put(E.CONSENT_LANGUAGE.toString(),new wt(2,"EN")),i.put(E.VENDOR_LIST_VERSION.toString(),new c(12,0)),i.put(E.TCF_POLICY_VERSION.toString(),new c(6,2)),i.put(E.USE_NON_STANDARD_STACKS.toString(),new T(!1)),i.put(E.SPECIAL_FEATURE_EXPRESS_CONSENT.toString(),new ye([!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1])),i.put(E.PURPOSES_EXPRESS_CONSENT.toString(),new ye([!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1])),i.put(E.PURPOSES_IMPLIED_CONSENT.toString(),new ye([!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1])),e?(i.put(E.VENDOR_EXPRESS_CONSENT.toString(),new st([])),i.put(E.VENDOR_IMPLIED_CONSENT.toString(),new st([])),i.put(E.PUB_RESTRICTIONS.toString(),new $t(6,2,[],!1))):(i.put(E.VENDOR_EXPRESS_CONSENT.toString(),new ct([])),i.put(E.VENDOR_IMPLIED_CONSENT.toString(),new ct([])),i.put(E.PUB_RESTRICTIONS.toString(),new fn(6,2,[],!1))),i}encodeSegment(e){let n=this.bitStringEncoder.encode(e,this.getFieldNames());return this.base64UrlEncoder.encode(n)}decodeSegment(e,n){(e==null||e.length===0)&&this.fields.reset(n);try{let i=this.base64UrlEncoder.decode(e);if(this.tryDecode(i,n,!1)||this.tryDecode(i,n,!0))return;this.bitStringEncoder.decode(i,this.getFieldNames(),n)}catch{throw new p("Unable to decode TcfCaV1CoreSegment '"+e+"'")}}tryDecode(e,n,i){try{let a=this.buildFields(i);this.bitStringEncoder.decode(e,this.getFieldNames(),a);let o=this.bitStringEncoder.encode(a,this.getFieldNames());if(e.startsWith(o)){for(let d of this.getFieldNames())n.get(d).setValue(a.get(d).getValue());return!0}}catch{}return!1}}class On extends b{constructor(e){super();l(this,"base64UrlEncoder",O.getInstance());l(this,"bitStringEncoder",S.getInstance());e&&this.decode(e)}getFieldNames(){return Sn}initializeFields(){let e=new f;e.put(E.PUB_PURPOSES_SEGMENT_TYPE.toString(),new c(3,3)),e.put(E.PUB_PURPOSES_EXPRESS_CONSENT.toString(),new ye([!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1])),e.put(E.PUB_PURPOSES_IMPLIED_CONSENT.toString(),new ye([!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1]));let n=new c(6,0);return e.put(E.NUM_CUSTOM_PURPOSES.toString(),n),e.put(E.CUSTOM_PURPOSES_EXPRESS_CONSENT.toString(),new It(()=>n.getValue(),[])),e.put(E.CUSTOM_PURPOSES_IMPLIED_CONSENT.toString(),new It(()=>n.getValue(),[])),e}encodeSegment(e){let n=this.bitStringEncoder.encode(e,this.getFieldNames());return this.base64UrlEncoder.encode(n)}decodeSegment(e,n){(e==null||e.length===0)&&this.fields.reset(n);try{let i=this.base64UrlEncoder.decode(e);this.bitStringEncoder.decode(i,this.getFieldNames(),n)}catch{throw new p("Unable to decode TcfCaV1PublisherPurposesSegment '"+e+"'")}}}class Nn extends b{constructor(e){super();l(this,"base64UrlEncoder",O.getInstance());l(this,"bitStringEncoder",S.getInstance());e&&this.decode(e)}getFieldNames(){return bn}initializeFields(){return this.buildFields(!1)}buildFields(e){let n=new f;return n.put(E.DISCLOSED_VENDORS_SEGMENT_TYPE.toString(),new c(3,1)),e?n.put(E.DISCLOSED_VENDORS.toString(),new st([])):n.put(E.DISCLOSED_VENDORS.toString(),new ct([])),n}encodeSegment(e){let n=this.bitStringEncoder.encode(e,this.getFieldNames());return this.base64UrlEncoder.encode(n)}decodeSegment(e,n){(e==null||e.length===0)&&this.fields.reset(n);try{let i=this.base64UrlEncoder.decode(e);if(this.tryDecode(i,n,!1)||this.tryDecode(i,n,!0))return;this.bitStringEncoder.decode(i,this.getFieldNames(),n)}catch{throw new p("Unable to decode TcfCaV1DisclosedVendorsSegment '"+e+"'")}}tryDecode(e,n,i){try{let a=this.buildFields(i);this.bitStringEncoder.decode(e,this.getFieldNames(),a);let o=this.bitStringEncoder.encode(a,this.getFieldNames());if(e.startsWith(o)){for(let d of this.getFieldNames())n.get(d).setValue(a.get(d).getValue());return!0}}catch{}return!1}}const Me=class Me extends Y{constructor(t){super(),t&&t.length>0&&this.decode(t)}getId(){return Me.ID}getName(){return Me.NAME}getVersion(){return Me.VERSION}initializeSegments(){let t=[];return t.push(new In),t.push(new On),t.push(new Nn),t}decodeSection(t){let e=this.initializeSegments();if(t!=null&&t.length!==0){let n=t.split(".");for(let i=0;i<n.length;i++){let a=n[i];if(a.length!==0){let o=a.charAt(0);if(o>="A"&&o<="H")e[0].decode(n[i]);else if(o>="I"&&o<="P")e[2].decode(n[i]);else if(o>="Y"&&o<="Z"||o>="a"&&o<="f")e[1].decode(n[i]);else throw new p("Unable to decode TcfCaV1 segment '"+a+"'")}}}return e}encodeSection(t){let e=[];return e.push(t[0].encode()),e.push(t[1].encode()),this.getFieldValue(E.DISCLOSED_VENDORS).length>0&&e.push(t[2].encode()),e.join(".")}setFieldValue(t,e){if(super.setFieldValue(t,e),t!==E.CREATED&&t!==E.LAST_UPDATED){let n=new Date;super.setFieldValue(E.CREATED,n),super.setFieldValue(E.LAST_UPDATED,n)}}};l(Me,"ID",5),l(Me,"VERSION",1),l(Me,"NAME","tcfcav1");let te=Me;class Ct{constructor(t,e){l(this,"validator");l(this,"value",null);e?this.validator=e:this.validator=new class{test(n){return!0}},this.setValue(t)}hasValue(){return this.value!=null}getValue(){return this.value}setValue(t){t?this.value=t.charAt(0):t=null}}class An{constructor(t,e){l(this,"validator");l(this,"value",null);e?this.validator=e:this.validator=new class{test(n){return!0}},this.setValue(t)}hasValue(){return this.value!=null}getValue(){return this.value}setValue(t){this.value=t}}class Tn{constructor(){l(this,"fields",new Map)}containsKey(t){return this.fields.has(t)}put(t,e){this.fields.set(t,e)}get(t){return this.fields.get(t)}getAll(){return new Map(this.fields)}reset(t){this.fields.clear(),t.getAll().forEach((e,n)=>{this.fields.set(n,e)})}}var q;(function(s){s.VERSION="Version",s.NOTICE="Notice",s.OPT_OUT_SALE="OptOutSale",s.LSPA_COVERED="LspaCovered"})(q||(q={}));const _n=[q.VERSION,q.NOTICE,q.OPT_OUT_SALE,q.LSPA_COVERED];class yn extends b{constructor(t){super(),t&&this.decode(t)}getFieldNames(){return _n}initializeFields(){const t=new class{test(n){return n==="-"||n==="Y"||n==="N"}};let e=new Tn;return e.put(q.VERSION,new An(ne.VERSION)),e.put(q.NOTICE,new Ct("-",t)),e.put(q.OPT_OUT_SALE,new Ct("-",t)),e.put(q.LSPA_COVERED,new Ct("-",t)),e}encodeSegment(t){let e="";return e+=t.get(q.VERSION).getValue(),e+=t.get(q.NOTICE).getValue(),e+=t.get(q.OPT_OUT_SALE).getValue(),e+=t.get(q.LSPA_COVERED).getValue(),e}decodeSegment(t,e){if(t==null||t.length!=4)throw new p("Unable to decode UspV1CoreSegment '"+t+"'");try{e.get(q.VERSION).setValue(parseInt(t.substring(0,1))),e.get(q.NOTICE).setValue(t.charAt(1)),e.get(q.OPT_OUT_SALE).setValue(t.charAt(2)),e.get(q.LSPA_COVERED).setValue(t.charAt(3))}catch{throw new p("Unable to decode UspV1CoreSegment '"+t+"'")}}}const Re=class Re extends Y{constructor(t){super(),t&&t.length>0&&this.decode(t)}getId(){return Re.ID}getName(){return Re.NAME}getVersion(){return Re.VERSION}initializeSegments(){let t=[];return t.push(new yn),t}decodeSection(t){let e=this.initializeSegments();if(t!=null&&t.length!==0){let n=t.split(".");for(let i=0;i<e.length;i++)n.length>i&&e[i].decode(n[i])}return e}encodeSection(t){let e=[];for(let n=0;n<t.length;n++){let i=t[n];e.push(i.encode())}return e.join(".")}};l(Re,"ID",6),l(Re,"VERSION",1),l(Re,"NAME","uspv1");let ne=Re;var I;(function(s){s.VERSION="Version",s.SHARING_NOTICE="SharingNotice",s.SALE_OPT_OUT_NOTICE="SaleOptOutNotice",s.SHARING_OPT_OUT_NOTICE="SharingOptOutNotice",s.TARGETED_ADVERTISING_OPT_OUT_NOTICE="TargetedAdvertisingOptOutNotice",s.SENSITIVE_DATA_PROCESSING_OPT_OUT_NOTICE="SensitiveDataProcessingOptOutNotice",s.SENSITIVE_DATA_LIMIT_USE_NOTICE="SensitiveDataLimitUseNotice",s.SALE_OPT_OUT="SaleOptOut",s.SHARING_OPT_OUT="SharingOptOut",s.TARGETED_ADVERTISING_OPT_OUT="TargetedAdvertisingOptOut",s.SENSITIVE_DATA_PROCESSING="SensitiveDataProcessing",s.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS="KnownChildSensitiveDataConsents",s.PERSONAL_DATA_CONSENTS="PersonalDataConsents",s.MSPA_COVERED_TRANSACTION="MspaCoveredTransaction",s.MSPA_OPT_OUT_OPTION_MODE="MspaOptOutOptionMode",s.MSPA_SERVICE_PROVIDER_MODE="MspaServiceProviderMode",s.GPC_SEGMENT_TYPE="GpcSegmentType",s.GPC_SEGMENT_INCLUDED="GpcSegmentIncluded",s.GPC="Gpc"})(I||(I={}));const Vn=[I.VERSION,I.SHARING_NOTICE,I.SALE_OPT_OUT_NOTICE,I.SHARING_OPT_OUT_NOTICE,I.TARGETED_ADVERTISING_OPT_OUT_NOTICE,I.SENSITIVE_DATA_PROCESSING_OPT_OUT_NOTICE,I.SENSITIVE_DATA_LIMIT_USE_NOTICE,I.SALE_OPT_OUT,I.SHARING_OPT_OUT,I.TARGETED_ADVERTISING_OPT_OUT,I.SENSITIVE_DATA_PROCESSING,I.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS,I.PERSONAL_DATA_CONSENTS,I.MSPA_COVERED_TRANSACTION,I.MSPA_OPT_OUT_OPTION_MODE,I.MSPA_SERVICE_PROVIDER_MODE],Cn=[I.GPC_SEGMENT_TYPE,I.GPC];class Bt{static encode(t,e,n){if(t.length>n)throw new Z("Too many values '"+t.length+"'");let i="";for(let a=0;a<t.length;a++)i+=A.encode(t[a],e);for(;i.length<e*n;)i+="0";return i}static decode(t,e,n){if(!/^[0-1]*$/.test(t))throw new p("Undecodable FixedInteger '"+t+"'");if(t.length>e*n)throw new p("Undecodable FixedIntegerList '"+t+"'");if(t.length%e!=0)throw new p("Undecodable FixedIntegerList '"+t+"'");for(;t.length<e*n;)t+="0";t.length>e*n&&(t=t.substring(0,e*n));let i=[];for(let a=0;a<t.length;a+=e)i.push(A.decode(t.substring(a,a+e)));for(;i.length<n;)i.push(0);return i}}class U extends Te{constructor(e,n,i=!0){super(i);l(this,"elementBitStringLength");l(this,"numElements");this.elementBitStringLength=e,this.numElements=n.length,this.setValue(n)}encode(){try{return Bt.encode(this.value,this.elementBitStringLength,this.numElements)}catch(e){throw new Z(e)}}decode(e){try{this.value=Bt.decode(e,this.elementBitStringLength,this.numElements)}catch(n){throw new p(n)}}substring(e,n){try{return L.substring(e,n,n+this.elementBitStringLength*this.numElements)}catch(i){throw new Ae(i)}}getValue(){return[...super.getValue()]}setValue(e){let n=[...e];for(let i=n.length;i<this.numElements;i++)n.push(0);n.length>this.numElements&&(n=n.slice(0,this.numElements)),super.setValue(n)}}class Pn extends b{constructor(e){super();l(this,"base64UrlEncoder",O.getInstance());l(this,"bitStringEncoder",S.getInstance());e&&this.decode(e)}getFieldNames(){return Vn}initializeFields(){const e=new class{test(o){return o>=0&&o<=2}},n=new class{test(o){return o>=1&&o<=2}},i=new class{test(o){for(let d=0;d<o.length;d++){let r=o[d];if(r<0||r>2)return!1}return!0}};let a=new f;return a.put(I.VERSION.toString(),new c(6,se.VERSION)),a.put(I.SHARING_NOTICE.toString(),new c(2,0).withValidator(e)),a.put(I.SALE_OPT_OUT_NOTICE.toString(),new c(2,0).withValidator(e)),a.put(I.SHARING_OPT_OUT_NOTICE.toString(),new c(2,0).withValidator(e)),a.put(I.TARGETED_ADVERTISING_OPT_OUT_NOTICE.toString(),new c(2,0).withValidator(e)),a.put(I.SENSITIVE_DATA_PROCESSING_OPT_OUT_NOTICE.toString(),new c(2,0).withValidator(e)),a.put(I.SENSITIVE_DATA_LIMIT_USE_NOTICE.toString(),new c(2,0).withValidator(e)),a.put(I.SALE_OPT_OUT.toString(),new c(2,0).withValidator(e)),a.put(I.SHARING_OPT_OUT.toString(),new c(2,0).withValidator(e)),a.put(I.TARGETED_ADVERTISING_OPT_OUT.toString(),new c(2,0).withValidator(e)),a.put(I.SENSITIVE_DATA_PROCESSING.toString(),new U(2,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]).withValidator(i)),a.put(I.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS.toString(),new U(2,[0,0,0]).withValidator(i)),a.put(I.PERSONAL_DATA_CONSENTS.toString(),new c(2,0).withValidator(e)),a.put(I.MSPA_COVERED_TRANSACTION.toString(),new c(2,1).withValidator(n)),a.put(I.MSPA_OPT_OUT_OPTION_MODE.toString(),new c(2,0).withValidator(e)),a.put(I.MSPA_SERVICE_PROVIDER_MODE.toString(),new c(2,0).withValidator(e)),a}encodeSegment(e){let n=this.bitStringEncoder.encode(e,this.getFieldNames());return e.get(I.VERSION).getValue()===1&&(n=n.substring(0,48)+n.substring(56,60)+n.substring(62)),this.base64UrlEncoder.encode(n)}decodeSegment(e,n){(e==null||e.length===0)&&this.fields.reset(n);try{let i=this.base64UrlEncoder.decode(e);i.length==60?i=i.substring(0,48)+"00000000"+i.substring(48,52)+"00"+i.substring(52,60)+"00":i.length==66&&(i=i.substring(0,48)+"00000000"+i.substring(48,52)+"00"+i.substring(52,62)),this.bitStringEncoder.decode(i,this.getFieldNames(),n)}catch{throw new p("Unable to decode UsNatCoreSegment '"+e+"'")}}getFieldValue(e){let n=super.getFieldValue(e);return this.fields.get(I.VERSION).getValue()===1&&(e===I.SENSITIVE_DATA_PROCESSING?n=n.slice(0,12):e===I.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS&&(n=n.slice(0,2))),n}}class Dn extends b{constructor(e){super();l(this,"base64UrlEncoder",O.getInstance());l(this,"bitStringEncoder",S.getInstance());e&&this.decode(e)}getFieldNames(){return Cn}initializeFields(){let e=new f;return e.put(I.GPC_SEGMENT_TYPE.toString(),new c(2,1)),e.put(I.GPC_SEGMENT_INCLUDED.toString(),new T(!0)),e.put(I.GPC.toString(),new T(!1)),e}encodeSegment(e){let n=this.bitStringEncoder.encode(e,this.getFieldNames());return this.base64UrlEncoder.encode(n)}decodeSegment(e,n){(e==null||e.length===0)&&this.fields.reset(n);try{let i=this.base64UrlEncoder.decode(e);this.bitStringEncoder.decode(i,this.getFieldNames(),n)}catch{throw new p("Unable to decode UsNatGpcSegment '"+e+"'")}}}const ke=class ke extends Y{constructor(t){super(),t&&t.length>0&&this.decode(t)}getId(){return ke.ID}getName(){return ke.NAME}getVersion(){return ke.VERSION}initializeSegments(){let t=[];return t.push(new Pn),t.push(new Dn),t}decodeSection(t){let e=this.initializeSegments();if(t!=null&&t.length!==0){let n=t.split(".");n.length>0&&e[0].decode(n[0]),n.length>1?(e[1].setFieldValue(I.GPC_SEGMENT_INCLUDED,!0),e[1].decode(n[1])):e[1].setFieldValue(I.GPC_SEGMENT_INCLUDED,!1)}return e}encodeSection(t){let e=[];return t.length>=1&&(e.push(t[0].encode()),t.length>=2&&t[1].getFieldValue(I.GPC_SEGMENT_INCLUDED)===!0&&e.push(t[1].encode())),e.join(".")}};l(ke,"ID",7),l(ke,"VERSION",2),l(ke,"NAME","usnat");let se=ke;var _;(function(s){s.VERSION="Version",s.SALE_OPT_OUT_NOTICE="SaleOptOutNotice",s.SHARING_OPT_OUT_NOTICE="SharingOptOutNotice",s.SENSITIVE_DATA_LIMIT_USE_NOTICE="SensitiveDataLimitUseNotice",s.SALE_OPT_OUT="SaleOptOut",s.SHARING_OPT_OUT="SharingOptOut",s.SENSITIVE_DATA_PROCESSING="SensitiveDataProcessing",s.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS="KnownChildSensitiveDataConsents",s.PERSONAL_DATA_CONSENTS="PersonalDataConsents",s.MSPA_COVERED_TRANSACTION="MspaCoveredTransaction",s.MSPA_OPT_OUT_OPTION_MODE="MspaOptOutOptionMode",s.MSPA_SERVICE_PROVIDER_MODE="MspaServiceProviderMode",s.GPC_SEGMENT_TYPE="GpcSegmentType",s.GPC_SEGMENT_INCLUDED="GpcSegmentIncluded",s.GPC="Gpc"})(_||(_={}));const wn=[_.VERSION,_.SALE_OPT_OUT_NOTICE,_.SHARING_OPT_OUT_NOTICE,_.SENSITIVE_DATA_LIMIT_USE_NOTICE,_.SALE_OPT_OUT,_.SHARING_OPT_OUT,_.SENSITIVE_DATA_PROCESSING,_.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS,_.PERSONAL_DATA_CONSENTS,_.MSPA_COVERED_TRANSACTION,_.MSPA_OPT_OUT_OPTION_MODE,_.MSPA_SERVICE_PROVIDER_MODE],Mn=[_.GPC_SEGMENT_TYPE,_.GPC];class Rn extends b{constructor(e){super();l(this,"base64UrlEncoder",O.getInstance());l(this,"bitStringEncoder",S.getInstance());e&&this.decode(e)}getFieldNames(){return wn}initializeFields(){const e=new class{test(o){return o>=0&&o<=2}},n=new class{test(o){return o>=1&&o<=2}},i=new class{test(o){for(let d=0;d<o.length;d++){let r=o[d];if(r<0||r>2)return!1}return!0}};let a=new f;return a.put(_.VERSION.toString(),new c(6,ie.VERSION)),a.put(_.SALE_OPT_OUT_NOTICE.toString(),new c(2,0).withValidator(e)),a.put(_.SHARING_OPT_OUT_NOTICE.toString(),new c(2,0).withValidator(e)),a.put(_.SENSITIVE_DATA_LIMIT_USE_NOTICE.toString(),new c(2,0).withValidator(e)),a.put(_.SALE_OPT_OUT.toString(),new c(2,0).withValidator(e)),a.put(_.SHARING_OPT_OUT.toString(),new c(2,0).withValidator(e)),a.put(_.SENSITIVE_DATA_PROCESSING.toString(),new U(2,[0,0,0,0,0,0,0,0,0]).withValidator(i)),a.put(_.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS.toString(),new U(2,[0,0]).withValidator(i)),a.put(_.PERSONAL_DATA_CONSENTS.toString(),new c(2,0).withValidator(e)),a.put(_.MSPA_COVERED_TRANSACTION.toString(),new c(2,1).withValidator(n)),a.put(_.MSPA_OPT_OUT_OPTION_MODE.toString(),new c(2,0).withValidator(e)),a.put(_.MSPA_SERVICE_PROVIDER_MODE.toString(),new c(2,0).withValidator(e)),a}encodeSegment(e){let n=this.bitStringEncoder.encode(e,this.getFieldNames());return this.base64UrlEncoder.encode(n)}decodeSegment(e,n){(e==null||e.length===0)&&this.fields.reset(n);try{let i=this.base64UrlEncoder.decode(e);this.bitStringEncoder.decode(i,this.getFieldNames(),n)}catch{throw new p("Unable to decode UsCaCoreSegment '"+e+"'")}}}class kn extends b{constructor(e){super();l(this,"base64UrlEncoder",O.getInstance());l(this,"bitStringEncoder",S.getInstance());e&&this.decode(e)}getFieldNames(){return Mn}initializeFields(){let e=new f;return e.put(_.GPC_SEGMENT_TYPE.toString(),new c(2,1)),e.put(_.GPC_SEGMENT_INCLUDED.toString(),new T(!0)),e.put(_.GPC.toString(),new T(!1)),e}encodeSegment(e){let n=this.bitStringEncoder.encode(e,this.getFieldNames());return this.base64UrlEncoder.encode(n)}decodeSegment(e,n){(e==null||e.length===0)&&this.fields.reset(n);try{let i=this.base64UrlEncoder.decode(e);this.bitStringEncoder.decode(i,this.getFieldNames(),n)}catch{throw new p("Unable to decode UsCaGpcSegment '"+e+"'")}}}const Ge=class Ge extends Y{constructor(t){super(),t&&t.length>0&&this.decode(t)}getId(){return Ge.ID}getName(){return Ge.NAME}getVersion(){return Ge.VERSION}initializeSegments(){let t=[];return t.push(new Rn),t.push(new kn),t}decodeSection(t){let e=this.initializeSegments();if(t!=null&&t.length!==0){let n=t.split(".");n.length>0&&e[0].decode(n[0]),n.length>1?(e[1].setFieldValue(_.GPC_SEGMENT_INCLUDED,!0),e[1].decode(n[1])):e[1].setFieldValue(_.GPC_SEGMENT_INCLUDED,!1)}return e}encodeSection(t){let e=[];return t.length>=1&&(e.push(t[0].encode()),t.length>=2&&t[1].getFieldValue(_.GPC_SEGMENT_INCLUDED)===!0&&e.push(t[1].encode())),e.join(".")}};l(Ge,"ID",8),l(Ge,"VERSION",1),l(Ge,"NAME","usca");let ie=Ge;var J;(function(s){s.VERSION="Version",s.SHARING_NOTICE="SharingNotice",s.SALE_OPT_OUT_NOTICE="SaleOptOutNotice",s.TARGETED_ADVERTISING_OPT_OUT_NOTICE="TargetedAdvertisingOptOutNotice",s.SALE_OPT_OUT="SaleOptOut",s.TARGETED_ADVERTISING_OPT_OUT="TargetedAdvertisingOptOut",s.SENSITIVE_DATA_PROCESSING="SensitiveDataProcessing",s.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS="KnownChildSensitiveDataConsents",s.MSPA_COVERED_TRANSACTION="MspaCoveredTransaction",s.MSPA_OPT_OUT_OPTION_MODE="MspaOptOutOptionMode",s.MSPA_SERVICE_PROVIDER_MODE="MspaServiceProviderMode"})(J||(J={}));const Gn=[J.VERSION,J.SHARING_NOTICE,J.SALE_OPT_OUT_NOTICE,J.TARGETED_ADVERTISING_OPT_OUT_NOTICE,J.SALE_OPT_OUT,J.TARGETED_ADVERTISING_OPT_OUT,J.SENSITIVE_DATA_PROCESSING,J.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS,J.MSPA_COVERED_TRANSACTION,J.MSPA_OPT_OUT_OPTION_MODE,J.MSPA_SERVICE_PROVIDER_MODE];class xn extends b{constructor(e){super();l(this,"base64UrlEncoder",O.getInstance());l(this,"bitStringEncoder",S.getInstance());e&&this.decode(e)}getFieldNames(){return Gn}initializeFields(){const e=new class{test(o){return o>=0&&o<=2}},n=new class{test(o){return o>=1&&o<=2}},i=new class{test(o){for(let d=0;d<o.length;d++){let r=o[d];if(r<0||r>2)return!1}return!0}};let a=new f;return a.put(J.VERSION.toString(),new c(6,ae.VERSION)),a.put(J.SHARING_NOTICE.toString(),new c(2,0).withValidator(e)),a.put(J.SALE_OPT_OUT_NOTICE.toString(),new c(2,0).withValidator(e)),a.put(J.TARGETED_ADVERTISING_OPT_OUT_NOTICE.toString(),new c(2,0).withValidator(e)),a.put(J.SALE_OPT_OUT.toString(),new c(2,0).withValidator(e)),a.put(J.TARGETED_ADVERTISING_OPT_OUT.toString(),new c(2,0).withValidator(e)),a.put(J.SENSITIVE_DATA_PROCESSING.toString(),new U(2,[0,0,0,0,0,0,0,0]).withValidator(i)),a.put(J.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS.toString(),new c(2,0).withValidator(e)),a.put(J.MSPA_COVERED_TRANSACTION.toString(),new c(2,1).withValidator(n)),a.put(J.MSPA_OPT_OUT_OPTION_MODE.toString(),new c(2,0).withValidator(e)),a.put(J.MSPA_SERVICE_PROVIDER_MODE.toString(),new c(2,0).withValidator(e)),a}encodeSegment(e){let n=this.bitStringEncoder.encode(e,this.getFieldNames());return this.base64UrlEncoder.encode(n)}decodeSegment(e,n){(e==null||e.length===0)&&this.fields.reset(n);try{let i=this.base64UrlEncoder.decode(e);this.bitStringEncoder.decode(i,this.getFieldNames(),n)}catch{throw new p("Unable to decode UsVaCoreSegment '"+e+"'")}}}const xe=class xe extends Y{constructor(t){super(),t&&t.length>0&&this.decode(t)}getId(){return xe.ID}getName(){return xe.NAME}getVersion(){return xe.VERSION}initializeSegments(){let t=[];return t.push(new xn),t}decodeSection(t){let e=this.initializeSegments();if(t!=null&&t.length!==0){let n=t.split(".");for(let i=0;i<e.length;i++)n.length>i&&e[i].decode(n[i])}return e}encodeSection(t){let e=[];for(let n=0;n<t.length;n++){let i=t[n];e.push(i.encode())}return e.join(".")}};l(xe,"ID",9),l(xe,"VERSION",1),l(xe,"NAME","usva");let ae=xe;var x;(function(s){s.VERSION="Version",s.SHARING_NOTICE="SharingNotice",s.SALE_OPT_OUT_NOTICE="SaleOptOutNotice",s.TARGETED_ADVERTISING_OPT_OUT_NOTICE="TargetedAdvertisingOptOutNotice",s.SALE_OPT_OUT="SaleOptOut",s.TARGETED_ADVERTISING_OPT_OUT="TargetedAdvertisingOptOut",s.SENSITIVE_DATA_PROCESSING="SensitiveDataProcessing",s.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS="KnownChildSensitiveDataConsents",s.MSPA_COVERED_TRANSACTION="MspaCoveredTransaction",s.MSPA_OPT_OUT_OPTION_MODE="MspaOptOutOptionMode",s.MSPA_SERVICE_PROVIDER_MODE="MspaServiceProviderMode",s.GPC_SEGMENT_TYPE="GpcSegmentType",s.GPC_SEGMENT_INCLUDED="GpcSegmentIncluded",s.GPC="Gpc"})(x||(x={}));const Bn=[x.VERSION,x.SHARING_NOTICE,x.SALE_OPT_OUT_NOTICE,x.TARGETED_ADVERTISING_OPT_OUT_NOTICE,x.SALE_OPT_OUT,x.TARGETED_ADVERTISING_OPT_OUT,x.SENSITIVE_DATA_PROCESSING,x.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS,x.MSPA_COVERED_TRANSACTION,x.MSPA_OPT_OUT_OPTION_MODE,x.MSPA_SERVICE_PROVIDER_MODE],Ln=[x.GPC_SEGMENT_TYPE,x.GPC];class Un extends b{constructor(e){super();l(this,"base64UrlEncoder",O.getInstance());l(this,"bitStringEncoder",S.getInstance());e&&this.decode(e)}getFieldNames(){return Bn}initializeFields(){const e=new class{test(o){return o>=0&&o<=2}},n=new class{test(o){return o>=1&&o<=2}},i=new class{test(o){for(let d=0;d<o.length;d++){let r=o[d];if(r<0||r>2)return!1}return!0}};let a=new f;return a.put(x.VERSION.toString(),new c(6,oe.VERSION)),a.put(x.SHARING_NOTICE.toString(),new c(2,0).withValidator(e)),a.put(x.SALE_OPT_OUT_NOTICE.toString(),new c(2,0).withValidator(e)),a.put(x.TARGETED_ADVERTISING_OPT_OUT_NOTICE.toString(),new c(2,0).withValidator(e)),a.put(x.SALE_OPT_OUT.toString(),new c(2,0).withValidator(e)),a.put(x.TARGETED_ADVERTISING_OPT_OUT.toString(),new c(2,0).withValidator(e)),a.put(x.SENSITIVE_DATA_PROCESSING.toString(),new U(2,[0,0,0,0,0,0,0]).withValidator(i)),a.put(x.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS.toString(),new c(2,0).withValidator(e)),a.put(x.MSPA_COVERED_TRANSACTION.toString(),new c(2,1).withValidator(n)),a.put(x.MSPA_OPT_OUT_OPTION_MODE.toString(),new c(2,0).withValidator(e)),a.put(x.MSPA_SERVICE_PROVIDER_MODE.toString(),new c(2,0).withValidator(e)),a}encodeSegment(e){let n=this.bitStringEncoder.encode(e,this.getFieldNames());return this.base64UrlEncoder.encode(n)}decodeSegment(e,n){(e==null||e.length===0)&&this.fields.reset(n);try{let i=this.base64UrlEncoder.decode(e);this.bitStringEncoder.decode(i,this.getFieldNames(),n)}catch{throw new p("Unable to decode UsCoCoreSegment '"+e+"'")}}}class Fn extends b{constructor(e){super();l(this,"base64UrlEncoder",O.getInstance());l(this,"bitStringEncoder",S.getInstance());e&&this.decode(e)}getFieldNames(){return Ln}initializeFields(){let e=new f;return e.put(x.GPC_SEGMENT_TYPE.toString(),new c(2,1)),e.put(x.GPC_SEGMENT_INCLUDED.toString(),new T(!0)),e.put(x.GPC.toString(),new T(!1)),e}encodeSegment(e){let n=this.bitStringEncoder.encode(e,this.getFieldNames());return this.base64UrlEncoder.encode(n)}decodeSegment(e,n){(e==null||e.length===0)&&this.fields.reset(n);try{let i=this.base64UrlEncoder.decode(e);this.bitStringEncoder.decode(i,this.getFieldNames(),n)}catch{throw new p("Unable to decode UsCoGpcSegment '"+e+"'")}}}const Be=class Be extends Y{constructor(t){super(),t&&t.length>0&&this.decode(t)}getId(){return Be.ID}getName(){return Be.NAME}getVersion(){return Be.VERSION}initializeSegments(){let t=[];return t.push(new Un),t.push(new Fn),t}decodeSection(t){let e=this.initializeSegments();if(t!=null&&t.length!==0){let n=t.split(".");n.length>0&&e[0].decode(n[0]),n.length>1?(e[1].setFieldValue(x.GPC_SEGMENT_INCLUDED,!0),e[1].decode(n[1])):e[1].setFieldValue(x.GPC_SEGMENT_INCLUDED,!1)}return e}encodeSection(t){let e=[];return t.length>=1&&(e.push(t[0].encode()),t.length>=2&&t[1].getFieldValue(x.GPC_SEGMENT_INCLUDED)===!0&&e.push(t[1].encode())),e.join(".")}};l(Be,"ID",10),l(Be,"VERSION",1),l(Be,"NAME","usco");let oe=Be;var z;(function(s){s.VERSION="Version",s.SHARING_NOTICE="SharingNotice",s.SALE_OPT_OUT_NOTICE="SaleOptOutNotice",s.TARGETED_ADVERTISING_OPT_OUT_NOTICE="TargetedAdvertisingOptOutNotice",s.SENSITIVE_DATA_PROCESSING_OPT_OUT_NOTICE="SensitiveDataProcessingOptOutNotice",s.SALE_OPT_OUT="SaleOptOut",s.TARGETED_ADVERTISING_OPT_OUT="TargetedAdvertisingOptOut",s.SENSITIVE_DATA_PROCESSING="SensitiveDataProcessing",s.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS="KnownChildSensitiveDataConsents",s.MSPA_COVERED_TRANSACTION="MspaCoveredTransaction",s.MSPA_OPT_OUT_OPTION_MODE="MspaOptOutOptionMode",s.MSPA_SERVICE_PROVIDER_MODE="MspaServiceProviderMode"})(z||(z={}));const jn=[z.VERSION,z.SHARING_NOTICE,z.SALE_OPT_OUT_NOTICE,z.TARGETED_ADVERTISING_OPT_OUT_NOTICE,z.SENSITIVE_DATA_PROCESSING_OPT_OUT_NOTICE,z.SALE_OPT_OUT,z.TARGETED_ADVERTISING_OPT_OUT,z.SENSITIVE_DATA_PROCESSING,z.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS,z.MSPA_COVERED_TRANSACTION,z.MSPA_OPT_OUT_OPTION_MODE,z.MSPA_SERVICE_PROVIDER_MODE];class Hn extends b{constructor(e){super();l(this,"base64UrlEncoder",O.getInstance());l(this,"bitStringEncoder",S.getInstance());e&&this.decode(e)}getFieldNames(){return jn}initializeFields(){const e=new class{test(o){return o>=0&&o<=2}},n=new class{test(o){return o>=1&&o<=2}},i=new class{test(o){for(let d=0;d<o.length;d++){let r=o[d];if(r<0||r>2)return!1}return!0}};let a=new f;return a.put(z.VERSION.toString(),new c(6,le.VERSION)),a.put(z.SHARING_NOTICE.toString(),new c(2,0).withValidator(e)),a.put(z.SALE_OPT_OUT_NOTICE.toString(),new c(2,0).withValidator(e)),a.put(z.TARGETED_ADVERTISING_OPT_OUT_NOTICE.toString(),new c(2,0).withValidator(e)),a.put(z.SENSITIVE_DATA_PROCESSING_OPT_OUT_NOTICE.toString(),new c(2,0).withValidator(e)),a.put(z.SALE_OPT_OUT.toString(),new c(2,0).withValidator(e)),a.put(z.TARGETED_ADVERTISING_OPT_OUT.toString(),new c(2,0).withValidator(e)),a.put(z.SENSITIVE_DATA_PROCESSING.toString(),new U(2,[0,0,0,0,0,0,0,0]).withValidator(i)),a.put(z.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS.toString(),new c(2,0).withValidator(e)),a.put(z.MSPA_COVERED_TRANSACTION.toString(),new c(2,1).withValidator(n)),a.put(z.MSPA_OPT_OUT_OPTION_MODE.toString(),new c(2,0).withValidator(e)),a.put(z.MSPA_SERVICE_PROVIDER_MODE.toString(),new c(2,0).withValidator(e)),a}encodeSegment(e){let n=this.bitStringEncoder.encode(e,this.getFieldNames());return this.base64UrlEncoder.encode(n)}decodeSegment(e,n){(e==null||e.length===0)&&this.fields.reset(n);try{let i=this.base64UrlEncoder.decode(e);this.bitStringEncoder.decode(i,this.getFieldNames(),n)}catch{throw new p("Unable to decode UsUtCoreSegment '"+e+"'")}}}const Le=class Le extends Y{constructor(t){super(),t&&t.length>0&&this.decode(t)}getId(){return Le.ID}getName(){return Le.NAME}getVersion(){return Le.VERSION}initializeSegments(){let t=[];return t.push(new Hn),t}decodeSection(t){let e=this.initializeSegments();if(t!=null&&t.length!==0){let n=t.split(".");for(let i=0;i<e.length;i++)n.length>i&&e[i].decode(n[i])}return e}encodeSection(t){let e=[];for(let n=0;n<t.length;n++){let i=t[n];e.push(i.encode())}return e.join(".")}};l(Le,"ID",11),l(Le,"VERSION",1),l(Le,"NAME","usut");let le=Le;var B;(function(s){s.VERSION="Version",s.SHARING_NOTICE="SharingNotice",s.SALE_OPT_OUT_NOTICE="SaleOptOutNotice",s.TARGETED_ADVERTISING_OPT_OUT_NOTICE="TargetedAdvertisingOptOutNotice",s.SALE_OPT_OUT="SaleOptOut",s.TARGETED_ADVERTISING_OPT_OUT="TargetedAdvertisingOptOut",s.SENSITIVE_DATA_PROCESSING="SensitiveDataProcessing",s.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS="KnownChildSensitiveDataConsents",s.MSPA_COVERED_TRANSACTION="MspaCoveredTransaction",s.MSPA_OPT_OUT_OPTION_MODE="MspaOptOutOptionMode",s.MSPA_SERVICE_PROVIDER_MODE="MspaServiceProviderMode",s.GPC_SEGMENT_TYPE="GpcSegmentType",s.GPC_SEGMENT_INCLUDED="GpcSegmentIncluded",s.GPC="Gpc"})(B||(B={}));const Kn=[B.VERSION,B.SHARING_NOTICE,B.SALE_OPT_OUT_NOTICE,B.TARGETED_ADVERTISING_OPT_OUT_NOTICE,B.SALE_OPT_OUT,B.TARGETED_ADVERTISING_OPT_OUT,B.SENSITIVE_DATA_PROCESSING,B.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS,B.MSPA_COVERED_TRANSACTION,B.MSPA_OPT_OUT_OPTION_MODE,B.MSPA_SERVICE_PROVIDER_MODE],zn=[B.GPC_SEGMENT_TYPE,B.GPC];class Wn extends b{constructor(e){super();l(this,"base64UrlEncoder",O.getInstance());l(this,"bitStringEncoder",S.getInstance());e&&this.decode(e)}getFieldNames(){return Kn}initializeFields(){const e=new class{test(o){return o>=0&&o<=2}},n=new class{test(o){return o>=1&&o<=2}},i=new class{test(o){for(let d=0;d<o.length;d++){let r=o[d];if(r<0||r>2)return!1}return!0}};let a=new f;return a.put(B.VERSION.toString(),new c(6,ce.VERSION)),a.put(B.SHARING_NOTICE.toString(),new c(2,0).withValidator(e)),a.put(B.SALE_OPT_OUT_NOTICE.toString(),new c(2,0).withValidator(e)),a.put(B.TARGETED_ADVERTISING_OPT_OUT_NOTICE.toString(),new c(2,0).withValidator(e)),a.put(B.SALE_OPT_OUT.toString(),new c(2,0).withValidator(e)),a.put(B.TARGETED_ADVERTISING_OPT_OUT.toString(),new c(2,0).withValidator(e)),a.put(B.SENSITIVE_DATA_PROCESSING.toString(),new U(2,[0,0,0,0,0,0,0,0]).withValidator(i)),a.put(B.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS.toString(),new U(2,[0,0,0]).withValidator(i)),a.put(B.MSPA_COVERED_TRANSACTION.toString(),new c(2,1).withValidator(n)),a.put(B.MSPA_OPT_OUT_OPTION_MODE.toString(),new c(2,0).withValidator(e)),a.put(B.MSPA_SERVICE_PROVIDER_MODE.toString(),new c(2,0).withValidator(e)),a}encodeSegment(e){let n=this.bitStringEncoder.encode(e,this.getFieldNames());return this.base64UrlEncoder.encode(n)}decodeSegment(e,n){(e==null||e.length===0)&&this.fields.reset(n);try{let i=this.base64UrlEncoder.decode(e);this.bitStringEncoder.decode(i,this.getFieldNames(),n)}catch{throw new p("Unable to decode UsCtCoreSegment '"+e+"'")}}}class Yn extends b{constructor(e){super();l(this,"base64UrlEncoder",O.getInstance());l(this,"bitStringEncoder",S.getInstance());e&&this.decode(e)}getFieldNames(){return zn}initializeFields(){let e=new f;return e.put(B.GPC_SEGMENT_TYPE.toString(),new c(2,1)),e.put(B.GPC_SEGMENT_INCLUDED.toString(),new T(!0)),e.put(B.GPC.toString(),new T(!1)),e}encodeSegment(e){let n=this.bitStringEncoder.encode(e,this.getFieldNames());return this.base64UrlEncoder.encode(n)}decodeSegment(e,n){(e==null||e.length===0)&&this.fields.reset(n);try{let i=this.base64UrlEncoder.decode(e);this.bitStringEncoder.decode(i,this.getFieldNames(),n)}catch{throw new p("Unable to decode UsCtGpcSegment '"+e+"'")}}}const Ue=class Ue extends Y{constructor(t){super(),t&&t.length>0&&this.decode(t)}getId(){return Ue.ID}getName(){return Ue.NAME}getVersion(){return Ue.VERSION}initializeSegments(){let t=[];return t.push(new Wn),t.push(new Yn),t}decodeSection(t){let e=this.initializeSegments();if(t!=null&&t.length!==0){let n=t.split(".");n.length>0&&e[0].decode(n[0]),n.length>1?(e[1].setFieldValue(B.GPC_SEGMENT_INCLUDED,!0),e[1].decode(n[1])):e[1].setFieldValue(B.GPC_SEGMENT_INCLUDED,!1)}return e}encodeSection(t){let e=[];return t.length>=1&&(e.push(t[0].encode()),t.length>=2&&t[1].getFieldValue(B.GPC_SEGMENT_INCLUDED)===!0&&e.push(t[1].encode())),e.join(".")}};l(Ue,"ID",12),l(Ue,"VERSION",1),l(Ue,"NAME","usct");let ce=Ue;var W;(function(s){s.VERSION="Version",s.PROCESSING_NOTICE="ProcessingNotice",s.SALE_OPT_OUT_NOTICE="SaleOptOutNotice",s.TARGETED_ADVERTISING_OPT_OUT_NOTICE="TargetedAdvertisingOptOutNotice",s.SALE_OPT_OUT="SaleOptOut",s.TARGETED_ADVERTISING_OPT_OUT="TargetedAdvertisingOptOut",s.SENSITIVE_DATA_PROCESSING="SensitiveDataProcessing",s.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS="KnownChildSensitiveDataConsents",s.ADDITIONAL_DATA_PROCESSING_CONSENT="AdditionalDataProcessingConsent",s.MSPA_COVERED_TRANSACTION="MspaCoveredTransaction",s.MSPA_OPT_OUT_OPTION_MODE="MspaOptOutOptionMode",s.MSPA_SERVICE_PROVIDER_MODE="MspaServiceProviderMode"})(W||(W={}));const $n=[W.VERSION,W.PROCESSING_NOTICE,W.SALE_OPT_OUT_NOTICE,W.TARGETED_ADVERTISING_OPT_OUT_NOTICE,W.SALE_OPT_OUT,W.TARGETED_ADVERTISING_OPT_OUT,W.SENSITIVE_DATA_PROCESSING,W.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS,W.ADDITIONAL_DATA_PROCESSING_CONSENT,W.MSPA_COVERED_TRANSACTION,W.MSPA_OPT_OUT_OPTION_MODE,W.MSPA_SERVICE_PROVIDER_MODE];class Jn extends b{constructor(e){super();l(this,"base64UrlEncoder",O.getInstance());l(this,"bitStringEncoder",S.getInstance());e&&this.decode(e)}getFieldNames(){return $n}initializeFields(){const e=new class{test(o){return o>=0&&o<=2}},n=new class{test(o){return o>=1&&o<=2}},i=new class{test(o){for(let d=0;d<o.length;d++){let r=o[d];if(r<0||r>2)return!1}return!0}};let a=new f;return a.put(W.VERSION.toString(),new c(6,de.VERSION)),a.put(W.PROCESSING_NOTICE.toString(),new c(2,0).withValidator(e)),a.put(W.SALE_OPT_OUT_NOTICE.toString(),new c(2,0).withValidator(e)),a.put(W.TARGETED_ADVERTISING_OPT_OUT_NOTICE.toString(),new c(2,0).withValidator(e)),a.put(W.SALE_OPT_OUT.toString(),new c(2,0).withValidator(e)),a.put(W.TARGETED_ADVERTISING_OPT_OUT.toString(),new c(2,0).withValidator(e)),a.put(W.SENSITIVE_DATA_PROCESSING.toString(),new U(2,[0,0,0,0,0,0,0,0]).withValidator(i)),a.put(W.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS.toString(),new U(2,[0,0,0]).withValidator(i)),a.put(W.ADDITIONAL_DATA_PROCESSING_CONSENT.toString(),new c(2,0).withValidator(e)),a.put(W.MSPA_COVERED_TRANSACTION.toString(),new c(2,1).withValidator(n)),a.put(W.MSPA_OPT_OUT_OPTION_MODE.toString(),new c(2,0).withValidator(e)),a.put(W.MSPA_SERVICE_PROVIDER_MODE.toString(),new c(2,0).withValidator(e)),a}encodeSegment(e){let n=this.bitStringEncoder.encode(e,this.getFieldNames());return this.base64UrlEncoder.encode(n)}decodeSegment(e,n){(e==null||e.length===0)&&this.fields.reset(n);try{let i=this.base64UrlEncoder.decode(e);this.bitStringEncoder.decode(i,this.getFieldNames(),n)}catch{throw new p("Unable to decode UsFlCoreSegment '"+e+"'")}}}const Fe=class Fe extends Y{constructor(t){super(),t&&t.length>0&&this.decode(t)}getId(){return Fe.ID}getName(){return Fe.NAME}getVersion(){return Fe.VERSION}initializeSegments(){let t=[];return t.push(new Jn),t}decodeSection(t){let e=this.initializeSegments();if(t!=null&&t.length!==0){let n=t.split(".");for(let i=0;i<e.length;i++)n.length>i&&e[i].decode(n[i])}return e}encodeSection(t){let e=[];for(let n=0;n<t.length;n++){let i=t[n];e.push(i.encode())}return e.join(".")}};l(Fe,"ID",13),l(Fe,"VERSION",1),l(Fe,"NAME","usfl");let de=Fe;var y;(function(s){s.VERSION="Version",s.SHARING_NOTICE="SharingNotice",s.SALE_OPT_OUT_NOTICE="SaleOptOutNotice",s.TARGETED_ADVERTISING_OPT_OUT_NOTICE="TargetedAdvertisingOptOutNotice",s.SALE_OPT_OUT="SaleOptOut",s.TARGETED_ADVERTISING_OPT_OUT="TargetedAdvertisingOptOut",s.SENSITIVE_DATA_PROCESSING="SensitiveDataProcessing",s.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS="KnownChildSensitiveDataConsents",s.ADDITIONAL_DATA_PROCESSING_CONSENT="AdditionalDataProcessingConsent",s.MSPA_COVERED_TRANSACTION="MspaCoveredTransaction",s.MSPA_OPT_OUT_OPTION_MODE="MspaOptOutOptionMode",s.MSPA_SERVICE_PROVIDER_MODE="MspaServiceProviderMode",s.GPC_SEGMENT_TYPE="GpcSegmentType",s.GPC_SEGMENT_INCLUDED="GpcSegmentIncluded",s.GPC="Gpc"})(y||(y={}));const Qn=[y.VERSION,y.SHARING_NOTICE,y.SALE_OPT_OUT_NOTICE,y.TARGETED_ADVERTISING_OPT_OUT_NOTICE,y.SALE_OPT_OUT,y.TARGETED_ADVERTISING_OPT_OUT,y.SENSITIVE_DATA_PROCESSING,y.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS,y.ADDITIONAL_DATA_PROCESSING_CONSENT,y.MSPA_COVERED_TRANSACTION,y.MSPA_OPT_OUT_OPTION_MODE,y.MSPA_SERVICE_PROVIDER_MODE],Zn=[y.GPC_SEGMENT_TYPE,y.GPC];class Xn extends b{constructor(e){super();l(this,"base64UrlEncoder",O.getInstance());l(this,"bitStringEncoder",S.getInstance());e&&this.decode(e)}getFieldNames(){return Qn}initializeFields(){const e=new class{test(o){return o>=0&&o<=2}},n=new class{test(o){return o>=1&&o<=2}},i=new class{test(o){for(let d=0;d<o.length;d++){let r=o[d];if(r<0||r>2)return!1}return!0}};let a=new f;return a.put(y.VERSION.toString(),new c(6,re.VERSION)),a.put(y.SHARING_NOTICE.toString(),new c(2,0).withValidator(e)),a.put(y.SALE_OPT_OUT_NOTICE.toString(),new c(2,0).withValidator(e)),a.put(y.TARGETED_ADVERTISING_OPT_OUT_NOTICE.toString(),new c(2,0).withValidator(e)),a.put(y.SALE_OPT_OUT.toString(),new c(2,0).withValidator(e)),a.put(y.TARGETED_ADVERTISING_OPT_OUT.toString(),new c(2,0).withValidator(e)),a.put(y.SENSITIVE_DATA_PROCESSING.toString(),new U(2,[0,0,0,0,0,0,0,0]).withValidator(i)),a.put(y.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS.toString(),new U(2,[0,0,0]).withValidator(i)),a.put(y.ADDITIONAL_DATA_PROCESSING_CONSENT.toString(),new c(2,0).withValidator(e)),a.put(y.MSPA_COVERED_TRANSACTION.toString(),new c(2,1).withValidator(n)),a.put(y.MSPA_OPT_OUT_OPTION_MODE.toString(),new c(2,0).withValidator(e)),a.put(y.MSPA_SERVICE_PROVIDER_MODE.toString(),new c(2,0).withValidator(e)),a}encodeSegment(e){let n=this.bitStringEncoder.encode(e,this.getFieldNames());return this.base64UrlEncoder.encode(n)}decodeSegment(e,n){(e==null||e.length===0)&&this.fields.reset(n);try{let i=this.base64UrlEncoder.decode(e);this.bitStringEncoder.decode(i,this.getFieldNames(),n)}catch{throw new p("Unable to decode UsMtCoreSegment '"+e+"'")}}}class qn extends b{constructor(e){super();l(this,"base64UrlEncoder",O.getInstance());l(this,"bitStringEncoder",S.getInstance());e&&this.decode(e)}getFieldNames(){return Zn}initializeFields(){let e=new f;return e.put(y.GPC_SEGMENT_TYPE.toString(),new c(2,1)),e.put(y.GPC_SEGMENT_INCLUDED.toString(),new T(!0)),e.put(y.GPC.toString(),new T(!1)),e}encodeSegment(e){let n=this.bitStringEncoder.encode(e,this.getFieldNames());return this.base64UrlEncoder.encode(n)}decodeSegment(e,n){(e==null||e.length===0)&&this.fields.reset(n);try{let i=this.base64UrlEncoder.decode(e);this.bitStringEncoder.decode(i,this.getFieldNames(),n)}catch{throw new p("Unable to decode UsMtGpcSegment '"+e+"'")}}}const je=class je extends Y{constructor(t){super(),t&&t.length>0&&this.decode(t)}getId(){return je.ID}getName(){return je.NAME}getVersion(){return je.VERSION}initializeSegments(){let t=[];return t.push(new Xn),t.push(new qn),t}decodeSection(t){let e=this.initializeSegments();if(t!=null&&t.length!==0){let n=t.split(".");n.length>0&&e[0].decode(n[0]),n.length>1?(e[1].setFieldValue(y.GPC_SEGMENT_INCLUDED,!0),e[1].decode(n[1])):e[1].setFieldValue(y.GPC_SEGMENT_INCLUDED,!1)}return e}encodeSection(t){let e=[];return t.length>=1&&(e.push(t[0].encode()),t.length>=2&&t[1].getFieldValue(y.GPC_SEGMENT_INCLUDED)===!0&&e.push(t[1].encode())),e.join(".")}};l(je,"ID",14),l(je,"VERSION",1),l(je,"NAME","usmt");let re=je;var V;(function(s){s.VERSION="Version",s.PROCESSING_NOTICE="ProcessingNotice",s.SALE_OPT_OUT_NOTICE="SaleOptOutNotice",s.TARGETED_ADVERTISING_OPT_OUT_NOTICE="TargetedAdvertisingOptOutNotice",s.SALE_OPT_OUT="SaleOptOut",s.TARGETED_ADVERTISING_OPT_OUT="TargetedAdvertisingOptOut",s.SENSITIVE_DATA_PROCESSING="SensitiveDataProcessing",s.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS="KnownChildSensitiveDataConsents",s.ADDITIONAL_DATA_PROCESSING_CONSENT="AdditionalDataProcessingConsent",s.MSPA_COVERED_TRANSACTION="MspaCoveredTransaction",s.MSPA_OPT_OUT_OPTION_MODE="MspaOptOutOptionMode",s.MSPA_SERVICE_PROVIDER_MODE="MspaServiceProviderMode",s.GPC_SEGMENT_TYPE="GpcSegmentType",s.GPC_SEGMENT_INCLUDED="GpcSegmentIncluded",s.GPC="Gpc"})(V||(V={}));const es=[V.VERSION,V.PROCESSING_NOTICE,V.SALE_OPT_OUT_NOTICE,V.TARGETED_ADVERTISING_OPT_OUT_NOTICE,V.SALE_OPT_OUT,V.TARGETED_ADVERTISING_OPT_OUT,V.SENSITIVE_DATA_PROCESSING,V.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS,V.ADDITIONAL_DATA_PROCESSING_CONSENT,V.MSPA_COVERED_TRANSACTION,V.MSPA_OPT_OUT_OPTION_MODE,V.MSPA_SERVICE_PROVIDER_MODE],ts=[V.GPC_SEGMENT_TYPE,V.GPC];class ns extends b{constructor(e){super();l(this,"base64UrlEncoder",O.getInstance());l(this,"bitStringEncoder",S.getInstance());e&&this.decode(e)}getFieldNames(){return es}initializeFields(){const e=new class{test(o){return o>=0&&o<=2}},n=new class{test(o){return o>=1&&o<=2}},i=new class{test(o){for(let d=0;d<o.length;d++){let r=o[d];if(r<0||r>2)return!1}return!0}};let a=new f;return a.put(V.VERSION.toString(),new c(6,ue.VERSION)),a.put(V.PROCESSING_NOTICE.toString(),new c(2,0).withValidator(e)),a.put(V.SALE_OPT_OUT_NOTICE.toString(),new c(2,0).withValidator(e)),a.put(V.TARGETED_ADVERTISING_OPT_OUT_NOTICE.toString(),new c(2,0).withValidator(e)),a.put(V.SALE_OPT_OUT.toString(),new c(2,0).withValidator(e)),a.put(V.TARGETED_ADVERTISING_OPT_OUT.toString(),new c(2,0).withValidator(e)),a.put(V.SENSITIVE_DATA_PROCESSING.toString(),new U(2,[0,0,0,0,0,0,0,0,0,0,0]).withValidator(i)),a.put(V.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS.toString(),new U(2,[0,0,0]).withValidator(i)),a.put(V.ADDITIONAL_DATA_PROCESSING_CONSENT.toString(),new c(2,0).withValidator(e)),a.put(V.MSPA_COVERED_TRANSACTION.toString(),new c(2,1).withValidator(n)),a.put(V.MSPA_OPT_OUT_OPTION_MODE.toString(),new c(2,0).withValidator(e)),a.put(V.MSPA_SERVICE_PROVIDER_MODE.toString(),new c(2,0).withValidator(e)),a}encodeSegment(e){let n=this.bitStringEncoder.encode(e,this.getFieldNames());return this.base64UrlEncoder.encode(n)}decodeSegment(e,n){(e==null||e.length===0)&&this.fields.reset(n);try{let i=this.base64UrlEncoder.decode(e);this.bitStringEncoder.decode(i,this.getFieldNames(),n)}catch{throw new p("Unable to decode UsOrCoreSegment '"+e+"'")}}}class ss extends b{constructor(e){super();l(this,"base64UrlEncoder",O.getInstance());l(this,"bitStringEncoder",S.getInstance());e&&this.decode(e)}getFieldNames(){return ts}initializeFields(){let e=new f;return e.put(V.GPC_SEGMENT_TYPE.toString(),new c(2,1)),e.put(V.GPC_SEGMENT_INCLUDED.toString(),new T(!0)),e.put(V.GPC.toString(),new T(!1)),e}encodeSegment(e){let n=this.bitStringEncoder.encode(e,this.getFieldNames());return this.base64UrlEncoder.encode(n)}decodeSegment(e,n){(e==null||e.length===0)&&this.fields.reset(n);try{let i=this.base64UrlEncoder.decode(e);this.bitStringEncoder.decode(i,this.getFieldNames(),n)}catch{throw new p("Unable to decode UsOrGpcSegment '"+e+"'")}}}const He=class He extends Y{constructor(t){super(),t&&t.length>0&&this.decode(t)}getId(){return He.ID}getName(){return He.NAME}getVersion(){return He.VERSION}initializeSegments(){let t=[];return t.push(new ns),t.push(new ss),t}decodeSection(t){let e=this.initializeSegments();if(t!=null&&t.length!==0){let n=t.split(".");n.length>0&&e[0].decode(n[0]),n.length>1?(e[1].setFieldValue(V.GPC_SEGMENT_INCLUDED,!0),e[1].decode(n[1])):e[1].setFieldValue(V.GPC_SEGMENT_INCLUDED,!1)}return e}encodeSection(t){let e=[];return t.length>=1&&(e.push(t[0].encode()),t.length>=2&&t[1].getFieldValue(V.GPC_SEGMENT_INCLUDED)===!0&&e.push(t[1].encode())),e.join(".")}};l(He,"ID",15),l(He,"VERSION",1),l(He,"NAME","usor");let ue=He;var C;(function(s){s.VERSION="Version",s.PROCESSING_NOTICE="ProcessingNotice",s.SALE_OPT_OUT_NOTICE="SaleOptOutNotice",s.TARGETED_ADVERTISING_OPT_OUT_NOTICE="TargetedAdvertisingOptOutNotice",s.SALE_OPT_OUT="SaleOptOut",s.TARGETED_ADVERTISING_OPT_OUT="TargetedAdvertisingOptOut",s.SENSITIVE_DATA_PROCESSING="SensitiveDataProcessing",s.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS="KnownChildSensitiveDataConsents",s.ADDITIONAL_DATA_PROCESSING_CONSENT="AdditionalDataProcessingConsent",s.MSPA_COVERED_TRANSACTION="MspaCoveredTransaction",s.MSPA_OPT_OUT_OPTION_MODE="MspaOptOutOptionMode",s.MSPA_SERVICE_PROVIDER_MODE="MspaServiceProviderMode",s.GPC_SEGMENT_TYPE="GpcSegmentType",s.GPC_SEGMENT_INCLUDED="GpcSegmentIncluded",s.GPC="Gpc"})(C||(C={}));const is=[C.VERSION,C.PROCESSING_NOTICE,C.SALE_OPT_OUT_NOTICE,C.TARGETED_ADVERTISING_OPT_OUT_NOTICE,C.SALE_OPT_OUT,C.TARGETED_ADVERTISING_OPT_OUT,C.SENSITIVE_DATA_PROCESSING,C.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS,C.ADDITIONAL_DATA_PROCESSING_CONSENT,C.MSPA_COVERED_TRANSACTION,C.MSPA_OPT_OUT_OPTION_MODE,C.MSPA_SERVICE_PROVIDER_MODE],as=[C.GPC_SEGMENT_TYPE,C.GPC];class os extends b{constructor(e){super();l(this,"base64UrlEncoder",O.getInstance());l(this,"bitStringEncoder",S.getInstance());e&&this.decode(e)}getFieldNames(){return is}initializeFields(){const e=new class{test(o){return o>=0&&o<=2}},n=new class{test(o){return o>=1&&o<=2}},i=new class{test(o){for(let d=0;d<o.length;d++){let r=o[d];if(r<0||r>2)return!1}return!0}};let a=new f;return a.put(C.VERSION.toString(),new c(6,pe.VERSION)),a.put(C.PROCESSING_NOTICE.toString(),new c(2,0).withValidator(e)),a.put(C.SALE_OPT_OUT_NOTICE.toString(),new c(2,0).withValidator(e)),a.put(C.TARGETED_ADVERTISING_OPT_OUT_NOTICE.toString(),new c(2,0).withValidator(e)),a.put(C.SALE_OPT_OUT.toString(),new c(2,0).withValidator(e)),a.put(C.TARGETED_ADVERTISING_OPT_OUT.toString(),new c(2,0).withValidator(e)),a.put(C.SENSITIVE_DATA_PROCESSING.toString(),new U(2,[0,0,0,0,0,0,0,0]).withValidator(i)),a.put(C.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS.toString(),new c(2,0).withValidator(e)),a.put(C.ADDITIONAL_DATA_PROCESSING_CONSENT.toString(),new c(2,0).withValidator(e)),a.put(C.MSPA_COVERED_TRANSACTION.toString(),new c(2,1).withValidator(n)),a.put(C.MSPA_OPT_OUT_OPTION_MODE.toString(),new c(2,0).withValidator(e)),a.put(C.MSPA_SERVICE_PROVIDER_MODE.toString(),new c(2,0).withValidator(e)),a}encodeSegment(e){let n=this.bitStringEncoder.encode(e,this.getFieldNames());return this.base64UrlEncoder.encode(n)}decodeSegment(e,n){(e==null||e.length===0)&&this.fields.reset(n);try{let i=this.base64UrlEncoder.decode(e);this.bitStringEncoder.decode(i,this.getFieldNames(),n)}catch{throw new p("Unable to decode UsTxCoreSegment '"+e+"'")}}}class ls extends b{constructor(e){super();l(this,"base64UrlEncoder",O.getInstance());l(this,"bitStringEncoder",S.getInstance());e&&this.decode(e)}getFieldNames(){return as}initializeFields(){let e=new f;return e.put(C.GPC_SEGMENT_TYPE.toString(),new c(2,1)),e.put(C.GPC_SEGMENT_INCLUDED.toString(),new T(!0)),e.put(C.GPC.toString(),new T(!1)),e}encodeSegment(e){let n=this.bitStringEncoder.encode(e,this.getFieldNames());return this.base64UrlEncoder.encode(n)}decodeSegment(e,n){(e==null||e.length===0)&&this.fields.reset(n);try{let i=this.base64UrlEncoder.decode(e);this.bitStringEncoder.decode(i,this.getFieldNames(),n)}catch{throw new p("Unable to decode UsTxGpcSegment '"+e+"'")}}}const Ke=class Ke extends Y{constructor(t){super(),t&&t.length>0&&this.decode(t)}getId(){return Ke.ID}getName(){return Ke.NAME}getVersion(){return Ke.VERSION}initializeSegments(){let t=[];return t.push(new os),t.push(new ls),t}decodeSection(t){let e=this.initializeSegments();if(t!=null&&t.length!==0){let n=t.split(".");n.length>0&&e[0].decode(n[0]),n.length>1?(e[1].setFieldValue(C.GPC_SEGMENT_INCLUDED,!0),e[1].decode(n[1])):e[1].setFieldValue(C.GPC_SEGMENT_INCLUDED,!1)}return e}encodeSection(t){let e=[];return t.length>=1&&(e.push(t[0].encode()),t.length>=2&&t[1].getFieldValue(C.GPC_SEGMENT_INCLUDED)===!0&&e.push(t[1].encode())),e.join(".")}};l(Ke,"ID",16),l(Ke,"VERSION",1),l(Ke,"NAME","ustx");let pe=Ke;var P;(function(s){s.VERSION="Version",s.PROCESSING_NOTICE="ProcessingNotice",s.SALE_OPT_OUT_NOTICE="SaleOptOutNotice",s.TARGETED_ADVERTISING_OPT_OUT_NOTICE="TargetedAdvertisingOptOutNotice",s.SALE_OPT_OUT="SaleOptOut",s.TARGETED_ADVERTISING_OPT_OUT="TargetedAdvertisingOptOut",s.SENSITIVE_DATA_PROCESSING="SensitiveDataProcessing",s.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS="KnownChildSensitiveDataConsents",s.ADDITIONAL_DATA_PROCESSING_CONSENT="AdditionalDataProcessingConsent",s.MSPA_COVERED_TRANSACTION="MspaCoveredTransaction",s.MSPA_OPT_OUT_OPTION_MODE="MspaOptOutOptionMode",s.MSPA_SERVICE_PROVIDER_MODE="MspaServiceProviderMode",s.GPC_SEGMENT_TYPE="GpcSegmentType",s.GPC_SEGMENT_INCLUDED="GpcSegmentIncluded",s.GPC="Gpc"})(P||(P={}));const cs=[P.VERSION,P.PROCESSING_NOTICE,P.SALE_OPT_OUT_NOTICE,P.TARGETED_ADVERTISING_OPT_OUT_NOTICE,P.SALE_OPT_OUT,P.TARGETED_ADVERTISING_OPT_OUT,P.SENSITIVE_DATA_PROCESSING,P.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS,P.ADDITIONAL_DATA_PROCESSING_CONSENT,P.MSPA_COVERED_TRANSACTION,P.MSPA_OPT_OUT_OPTION_MODE,P.MSPA_SERVICE_PROVIDER_MODE],ds=[P.GPC_SEGMENT_TYPE,P.GPC];class rs extends b{constructor(e){super();l(this,"base64UrlEncoder",O.getInstance());l(this,"bitStringEncoder",S.getInstance());e&&this.decode(e)}getFieldNames(){return cs}initializeFields(){const e=new class{test(o){return o>=0&&o<=2}},n=new class{test(o){return o>=1&&o<=2}},i=new class{test(o){for(let d=0;d<o.length;d++){let r=o[d];if(r<0||r>2)return!1}return!0}};let a=new f;return a.put(P.VERSION.toString(),new c(6,me.VERSION)),a.put(P.PROCESSING_NOTICE.toString(),new c(2,0).withValidator(e)),a.put(P.SALE_OPT_OUT_NOTICE.toString(),new c(2,0).withValidator(e)),a.put(P.TARGETED_ADVERTISING_OPT_OUT_NOTICE.toString(),new c(2,0).withValidator(e)),a.put(P.SALE_OPT_OUT.toString(),new c(2,0).withValidator(e)),a.put(P.TARGETED_ADVERTISING_OPT_OUT.toString(),new c(2,0).withValidator(e)),a.put(P.SENSITIVE_DATA_PROCESSING.toString(),new U(2,[0,0,0,0,0,0,0,0,0]).withValidator(i)),a.put(P.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS.toString(),new U(2,[0,0,0,0,0]).withValidator(i)),a.put(P.ADDITIONAL_DATA_PROCESSING_CONSENT.toString(),new c(2,0).withValidator(e)),a.put(P.MSPA_COVERED_TRANSACTION.toString(),new c(2,1).withValidator(n)),a.put(P.MSPA_OPT_OUT_OPTION_MODE.toString(),new c(2,0).withValidator(e)),a.put(P.MSPA_SERVICE_PROVIDER_MODE.toString(),new c(2,0).withValidator(e)),a}encodeSegment(e){let n=this.bitStringEncoder.encode(e,this.getFieldNames());return this.base64UrlEncoder.encode(n)}decodeSegment(e,n){(e==null||e.length===0)&&this.fields.reset(n);try{let i=this.base64UrlEncoder.decode(e);this.bitStringEncoder.decode(i,this.getFieldNames(),n)}catch{throw new p("Unable to decode UsDeCoreSegment '"+e+"'")}}}class us extends b{constructor(e){super();l(this,"base64UrlEncoder",O.getInstance());l(this,"bitStringEncoder",S.getInstance());e&&this.decode(e)}getFieldNames(){return ds}initializeFields(){let e=new f;return e.put(P.GPC_SEGMENT_TYPE.toString(),new c(2,1)),e.put(P.GPC_SEGMENT_INCLUDED.toString(),new T(!0)),e.put(P.GPC.toString(),new T(!1)),e}encodeSegment(e){let n=this.bitStringEncoder.encode(e,this.getFieldNames());return this.base64UrlEncoder.encode(n)}decodeSegment(e,n){(e==null||e.length===0)&&this.fields.reset(n);try{let i=this.base64UrlEncoder.decode(e);this.bitStringEncoder.decode(i,this.getFieldNames(),n)}catch{throw new p("Unable to decode UsDeGpcSegment '"+e+"'")}}}const ze=class ze extends Y{constructor(t){super(),t&&t.length>0&&this.decode(t)}getId(){return ze.ID}getName(){return ze.NAME}getVersion(){return ze.VERSION}initializeSegments(){let t=[];return t.push(new rs),t.push(new us),t}decodeSection(t){let e=this.initializeSegments();if(t!=null&&t.length!==0){let n=t.split(".");n.length>0&&e[0].decode(n[0]),n.length>1?(e[1].setFieldValue(P.GPC_SEGMENT_INCLUDED,!0),e[1].decode(n[1])):e[1].setFieldValue(P.GPC_SEGMENT_INCLUDED,!1)}return e}encodeSection(t){let e=[];return t.length>=1&&(e.push(t[0].encode()),t.length>=2&&t[1].getFieldValue(P.GPC_SEGMENT_INCLUDED)===!0&&e.push(t[1].encode())),e.join(".")}};l(ze,"ID",17),l(ze,"VERSION",1),l(ze,"NAME","usde");let me=ze;var D;(function(s){s.VERSION="Version",s.PROCESSING_NOTICE="ProcessingNotice",s.SALE_OPT_OUT_NOTICE="SaleOptOutNotice",s.TARGETED_ADVERTISING_OPT_OUT_NOTICE="TargetedAdvertisingOptOutNotice",s.SENSITIVE_DATA_OPT_OUT_NOTICE="SensitiveDataOptOutNotice",s.SALE_OPT_OUT="SaleOptOut",s.TARGETED_ADVERTISING_OPT_OUT="TargetedAdvertisingOptOut",s.SENSITIVE_DATA_PROCESSING="SensitiveDataProcessing",s.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS="KnownChildSensitiveDataConsents",s.MSPA_COVERED_TRANSACTION="MspaCoveredTransaction",s.MSPA_OPT_OUT_OPTION_MODE="MspaOptOutOptionMode",s.MSPA_SERVICE_PROVIDER_MODE="MspaServiceProviderMode",s.GPC_SEGMENT_TYPE="GpcSegmentType",s.GPC_SEGMENT_INCLUDED="GpcSegmentIncluded",s.GPC="Gpc"})(D||(D={}));const ps=[D.VERSION,D.PROCESSING_NOTICE,D.SALE_OPT_OUT_NOTICE,D.TARGETED_ADVERTISING_OPT_OUT_NOTICE,D.SENSITIVE_DATA_OPT_OUT_NOTICE,D.SALE_OPT_OUT,D.TARGETED_ADVERTISING_OPT_OUT,D.SENSITIVE_DATA_PROCESSING,D.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS,D.MSPA_COVERED_TRANSACTION,D.MSPA_OPT_OUT_OPTION_MODE,D.MSPA_SERVICE_PROVIDER_MODE],ms=[D.GPC_SEGMENT_TYPE,D.GPC];class vs extends b{constructor(e){super();l(this,"base64UrlEncoder",O.getInstance());l(this,"bitStringEncoder",S.getInstance());e&&this.decode(e)}getFieldNames(){return ps}initializeFields(){const e=new class{test(o){return o>=0&&o<=2}},n=new class{test(o){return o>=1&&o<=2}},i=new class{test(o){for(let d=0;d<o.length;d++){let r=o[d];if(r<0||r>2)return!1}return!0}};let a=new f;return a.put(D.VERSION.toString(),new c(6,ve.VERSION)),a.put(D.PROCESSING_NOTICE.toString(),new c(2,0).withValidator(e)),a.put(D.SALE_OPT_OUT_NOTICE.toString(),new c(2,0).withValidator(e)),a.put(D.TARGETED_ADVERTISING_OPT_OUT_NOTICE.toString(),new c(2,0).withValidator(e)),a.put(D.SENSITIVE_DATA_OPT_OUT_NOTICE.toString(),new c(2,0).withValidator(e)),a.put(D.SALE_OPT_OUT.toString(),new c(2,0).withValidator(e)),a.put(D.TARGETED_ADVERTISING_OPT_OUT.toString(),new c(2,0).withValidator(e)),a.put(D.SENSITIVE_DATA_PROCESSING.toString(),new U(2,[0,0,0,0,0,0,0,0]).withValidator(i)),a.put(D.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS.toString(),new c(2,0).withValidator(e)),a.put(D.MSPA_COVERED_TRANSACTION.toString(),new c(2,1).withValidator(n)),a.put(D.MSPA_OPT_OUT_OPTION_MODE.toString(),new c(2,0).withValidator(e)),a.put(D.MSPA_SERVICE_PROVIDER_MODE.toString(),new c(2,0).withValidator(e)),a}encodeSegment(e){let n=this.bitStringEncoder.encode(e,this.getFieldNames());return this.base64UrlEncoder.encode(n)}decodeSegment(e,n){(e==null||e.length===0)&&this.fields.reset(n);try{let i=this.base64UrlEncoder.decode(e);this.bitStringEncoder.decode(i,this.getFieldNames(),n)}catch{throw new p("Unable to decode UsIaCoreSegment '"+e+"'")}}}class gs extends b{constructor(e){super();l(this,"base64UrlEncoder",O.getInstance());l(this,"bitStringEncoder",S.getInstance());e&&this.decode(e)}getFieldNames(){return ms}initializeFields(){let e=new f;return e.put(D.GPC_SEGMENT_TYPE.toString(),new c(2,1)),e.put(D.GPC_SEGMENT_INCLUDED.toString(),new T(!0)),e.put(D.GPC.toString(),new T(!1)),e}encodeSegment(e){let n=this.bitStringEncoder.encode(e,this.getFieldNames());return this.base64UrlEncoder.encode(n)}decodeSegment(e,n){(e==null||e.length===0)&&this.fields.reset(n);try{let i=this.base64UrlEncoder.decode(e);this.bitStringEncoder.decode(i,this.getFieldNames(),n)}catch{throw new p("Unable to decode UsIaGpcSegment '"+e+"'")}}}const We=class We extends Y{constructor(t){super(),t&&t.length>0&&this.decode(t)}getId(){return We.ID}getName(){return We.NAME}getVersion(){return We.VERSION}initializeSegments(){let t=[];return t.push(new vs),t.push(new gs),t}decodeSection(t){let e=this.initializeSegments();if(t!=null&&t.length!==0){let n=t.split(".");n.length>0&&e[0].decode(n[0]),n.length>1?(e[1].setFieldValue(D.GPC_SEGMENT_INCLUDED,!0),e[1].decode(n[1])):e[1].setFieldValue(D.GPC_SEGMENT_INCLUDED,!1)}return e}encodeSection(t){let e=[];return t.length>=1&&(e.push(t[0].encode()),t.length>=2&&t[1].getFieldValue(D.GPC_SEGMENT_INCLUDED)===!0&&e.push(t[1].encode())),e.join(".")}};l(We,"ID",18),l(We,"VERSION",1),l(We,"NAME","usia");let ve=We;var w;(function(s){s.VERSION="Version",s.PROCESSING_NOTICE="ProcessingNotice",s.SALE_OPT_OUT_NOTICE="SaleOptOutNotice",s.TARGETED_ADVERTISING_OPT_OUT_NOTICE="TargetedAdvertisingOptOutNotice",s.SALE_OPT_OUT="SaleOptOut",s.TARGETED_ADVERTISING_OPT_OUT="TargetedAdvertisingOptOut",s.SENSITIVE_DATA_PROCESSING="SensitiveDataProcessing",s.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS="KnownChildSensitiveDataConsents",s.ADDITIONAL_DATA_PROCESSING_CONSENT="AdditionalDataProcessingConsent",s.MSPA_COVERED_TRANSACTION="MspaCoveredTransaction",s.MSPA_OPT_OUT_OPTION_MODE="MspaOptOutOptionMode",s.MSPA_SERVICE_PROVIDER_MODE="MspaServiceProviderMode",s.GPC_SEGMENT_TYPE="GpcSegmentType",s.GPC_SEGMENT_INCLUDED="GpcSegmentIncluded",s.GPC="Gpc"})(w||(w={}));const Es=[w.VERSION,w.PROCESSING_NOTICE,w.SALE_OPT_OUT_NOTICE,w.TARGETED_ADVERTISING_OPT_OUT_NOTICE,w.SALE_OPT_OUT,w.TARGETED_ADVERTISING_OPT_OUT,w.SENSITIVE_DATA_PROCESSING,w.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS,w.ADDITIONAL_DATA_PROCESSING_CONSENT,w.MSPA_COVERED_TRANSACTION,w.MSPA_OPT_OUT_OPTION_MODE,w.MSPA_SERVICE_PROVIDER_MODE],hs=[w.GPC_SEGMENT_TYPE,w.GPC];class Ss extends b{constructor(e){super();l(this,"base64UrlEncoder",O.getInstance());l(this,"bitStringEncoder",S.getInstance());e&&this.decode(e)}getFieldNames(){return Es}initializeFields(){const e=new class{test(o){return o>=0&&o<=2}},n=new class{test(o){return o>=1&&o<=2}},i=new class{test(o){for(let d=0;d<o.length;d++){let r=o[d];if(r<0||r>2)return!1}return!0}};let a=new f;return a.put(w.VERSION.toString(),new c(6,ge.VERSION)),a.put(w.PROCESSING_NOTICE.toString(),new c(2,0).withValidator(e)),a.put(w.SALE_OPT_OUT_NOTICE.toString(),new c(2,0).withValidator(e)),a.put(w.TARGETED_ADVERTISING_OPT_OUT_NOTICE.toString(),new c(2,0).withValidator(e)),a.put(w.SALE_OPT_OUT.toString(),new c(2,0).withValidator(e)),a.put(w.TARGETED_ADVERTISING_OPT_OUT.toString(),new c(2,0).withValidator(e)),a.put(w.SENSITIVE_DATA_PROCESSING.toString(),new U(2,[0,0,0,0,0,0,0,0]).withValidator(i)),a.put(w.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS.toString(),new c(2,0).withValidator(e)),a.put(w.ADDITIONAL_DATA_PROCESSING_CONSENT.toString(),new c(2,0).withValidator(e)),a.put(w.MSPA_COVERED_TRANSACTION.toString(),new c(2,1).withValidator(n)),a.put(w.MSPA_OPT_OUT_OPTION_MODE.toString(),new c(2,0).withValidator(e)),a.put(w.MSPA_SERVICE_PROVIDER_MODE.toString(),new c(2,0).withValidator(e)),a}encodeSegment(e){let n=this.bitStringEncoder.encode(e,this.getFieldNames());return this.base64UrlEncoder.encode(n)}decodeSegment(e,n){(e==null||e.length===0)&&this.fields.reset(n);try{let i=this.base64UrlEncoder.decode(e);this.bitStringEncoder.decode(i,this.getFieldNames(),n)}catch{throw new p("Unable to decode UsNeCoreSegment '"+e+"'")}}}class bs extends b{constructor(e){super();l(this,"base64UrlEncoder",O.getInstance());l(this,"bitStringEncoder",S.getInstance());e&&this.decode(e)}getFieldNames(){return hs}initializeFields(){let e=new f;return e.put(w.GPC_SEGMENT_TYPE.toString(),new c(2,1)),e.put(w.GPC_SEGMENT_INCLUDED.toString(),new T(!0)),e.put(w.GPC.toString(),new T(!1)),e}encodeSegment(e){let n=this.bitStringEncoder.encode(e,this.getFieldNames());return this.base64UrlEncoder.encode(n)}decodeSegment(e,n){(e==null||e.length===0)&&this.fields.reset(n);try{let i=this.base64UrlEncoder.decode(e);this.bitStringEncoder.decode(i,this.getFieldNames(),n)}catch{throw new p("Unable to decode UsNeGpcSegment '"+e+"'")}}}const Ye=class Ye extends Y{constructor(t){super(),t&&t.length>0&&this.decode(t)}getId(){return Ye.ID}getName(){return Ye.NAME}getVersion(){return Ye.VERSION}initializeSegments(){let t=[];return t.push(new Ss),t.push(new bs),t}decodeSection(t){let e=this.initializeSegments();if(t!=null&&t.length!==0){let n=t.split(".");n.length>0&&e[0].decode(n[0]),n.length>1?(e[1].setFieldValue(w.GPC_SEGMENT_INCLUDED,!0),e[1].decode(n[1])):e[1].setFieldValue(w.GPC_SEGMENT_INCLUDED,!1)}return e}encodeSection(t){let e=[];return t.length>=1&&(e.push(t[0].encode()),t.length>=2&&t[1].getFieldValue(w.GPC_SEGMENT_INCLUDED)===!0&&e.push(t[1].encode())),e.join(".")}};l(Ye,"ID",19),l(Ye,"VERSION",1),l(Ye,"NAME","usne");let ge=Ye;var M;(function(s){s.VERSION="Version",s.PROCESSING_NOTICE="ProcessingNotice",s.SALE_OPT_OUT_NOTICE="SaleOptOutNotice",s.TARGETED_ADVERTISING_OPT_OUT_NOTICE="TargetedAdvertisingOptOutNotice",s.SALE_OPT_OUT="SaleOptOut",s.TARGETED_ADVERTISING_OPT_OUT="TargetedAdvertisingOptOut",s.SENSITIVE_DATA_PROCESSING="SensitiveDataProcessing",s.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS="KnownChildSensitiveDataConsents",s.ADDITIONAL_DATA_PROCESSING_CONSENT="AdditionalDataProcessingConsent",s.MSPA_COVERED_TRANSACTION="MspaCoveredTransaction",s.MSPA_OPT_OUT_OPTION_MODE="MspaOptOutOptionMode",s.MSPA_SERVICE_PROVIDER_MODE="MspaServiceProviderMode",s.GPC_SEGMENT_TYPE="GpcSegmentType",s.GPC_SEGMENT_INCLUDED="GpcSegmentIncluded",s.GPC="Gpc"})(M||(M={}));const fs=[M.VERSION,M.PROCESSING_NOTICE,M.SALE_OPT_OUT_NOTICE,M.TARGETED_ADVERTISING_OPT_OUT_NOTICE,M.SALE_OPT_OUT,M.TARGETED_ADVERTISING_OPT_OUT,M.SENSITIVE_DATA_PROCESSING,M.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS,M.ADDITIONAL_DATA_PROCESSING_CONSENT,M.MSPA_COVERED_TRANSACTION,M.MSPA_OPT_OUT_OPTION_MODE,M.MSPA_SERVICE_PROVIDER_MODE],Is=[M.GPC_SEGMENT_TYPE,M.GPC];class Os extends b{constructor(e){super();l(this,"base64UrlEncoder",O.getInstance());l(this,"bitStringEncoder",S.getInstance());e&&this.decode(e)}getFieldNames(){return fs}initializeFields(){const e=new class{test(o){return o>=0&&o<=2}},n=new class{test(o){return o>=1&&o<=2}},i=new class{test(o){for(let d=0;d<o.length;d++){let r=o[d];if(r<0||r>2)return!1}return!0}};let a=new f;return a.put(M.VERSION.toString(),new c(6,Ee.VERSION)),a.put(M.PROCESSING_NOTICE.toString(),new c(2,0).withValidator(e)),a.put(M.SALE_OPT_OUT_NOTICE.toString(),new c(2,0).withValidator(e)),a.put(M.TARGETED_ADVERTISING_OPT_OUT_NOTICE.toString(),new c(2,0).withValidator(e)),a.put(M.SALE_OPT_OUT.toString(),new c(2,0).withValidator(e)),a.put(M.TARGETED_ADVERTISING_OPT_OUT.toString(),new c(2,0).withValidator(e)),a.put(M.SENSITIVE_DATA_PROCESSING.toString(),new U(2,[0,0,0,0,0,0,0,0]).withValidator(i)),a.put(M.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS.toString(),new U(2,[0,0,0]).withValidator(i)),a.put(M.ADDITIONAL_DATA_PROCESSING_CONSENT.toString(),new c(2,0).withValidator(e)),a.put(M.MSPA_COVERED_TRANSACTION.toString(),new c(2,1).withValidator(n)),a.put(M.MSPA_OPT_OUT_OPTION_MODE.toString(),new c(2,0).withValidator(e)),a.put(M.MSPA_SERVICE_PROVIDER_MODE.toString(),new c(2,0).withValidator(e)),a}encodeSegment(e){let n=this.bitStringEncoder.encode(e,this.getFieldNames());return this.base64UrlEncoder.encode(n)}decodeSegment(e,n){(e==null||e.length===0)&&this.fields.reset(n);try{let i=this.base64UrlEncoder.decode(e);this.bitStringEncoder.decode(i,this.getFieldNames(),n)}catch{throw new p("Unable to decode UsNhCoreSegment '"+e+"'")}}}class Ns extends b{constructor(e){super();l(this,"base64UrlEncoder",O.getInstance());l(this,"bitStringEncoder",S.getInstance());e&&this.decode(e)}getFieldNames(){return Is}initializeFields(){let e=new f;return e.put(M.GPC_SEGMENT_TYPE.toString(),new c(2,1)),e.put(M.GPC_SEGMENT_INCLUDED.toString(),new T(!0)),e.put(M.GPC.toString(),new T(!1)),e}encodeSegment(e){let n=this.bitStringEncoder.encode(e,this.getFieldNames());return this.base64UrlEncoder.encode(n)}decodeSegment(e,n){(e==null||e.length===0)&&this.fields.reset(n);try{let i=this.base64UrlEncoder.decode(e);this.bitStringEncoder.decode(i,this.getFieldNames(),n)}catch{throw new p("Unable to decode UsNhGpcSegment '"+e+"'")}}}const $e=class $e extends Y{constructor(t){super(),t&&t.length>0&&this.decode(t)}getId(){return $e.ID}getName(){return $e.NAME}getVersion(){return $e.VERSION}initializeSegments(){let t=[];return t.push(new Os),t.push(new Ns),t}decodeSection(t){let e=this.initializeSegments();if(t!=null&&t.length!==0){let n=t.split(".");n.length>0&&e[0].decode(n[0]),n.length>1?(e[1].setFieldValue(M.GPC_SEGMENT_INCLUDED,!0),e[1].decode(n[1])):e[1].setFieldValue(M.GPC_SEGMENT_INCLUDED,!1)}return e}encodeSection(t){let e=[];return t.length>=1&&(e.push(t[0].encode()),t.length>=2&&t[1].getFieldValue(M.GPC_SEGMENT_INCLUDED)===!0&&e.push(t[1].encode())),e.join(".")}};l($e,"ID",20),l($e,"VERSION",1),l($e,"NAME","usnh");let Ee=$e;var R;(function(s){s.VERSION="Version",s.PROCESSING_NOTICE="ProcessingNotice",s.SALE_OPT_OUT_NOTICE="SaleOptOutNotice",s.TARGETED_ADVERTISING_OPT_OUT_NOTICE="TargetedAdvertisingOptOutNotice",s.SALE_OPT_OUT="SaleOptOut",s.TARGETED_ADVERTISING_OPT_OUT="TargetedAdvertisingOptOut",s.SENSITIVE_DATA_PROCESSING="SensitiveDataProcessing",s.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS="KnownChildSensitiveDataConsents",s.ADDITIONAL_DATA_PROCESSING_CONSENT="AdditionalDataProcessingConsent",s.MSPA_COVERED_TRANSACTION="MspaCoveredTransaction",s.MSPA_OPT_OUT_OPTION_MODE="MspaOptOutOptionMode",s.MSPA_SERVICE_PROVIDER_MODE="MspaServiceProviderMode",s.GPC_SEGMENT_TYPE="GpcSegmentType",s.GPC_SEGMENT_INCLUDED="GpcSegmentIncluded",s.GPC="Gpc"})(R||(R={}));const As=[R.VERSION,R.PROCESSING_NOTICE,R.SALE_OPT_OUT_NOTICE,R.TARGETED_ADVERTISING_OPT_OUT_NOTICE,R.SALE_OPT_OUT,R.TARGETED_ADVERTISING_OPT_OUT,R.SENSITIVE_DATA_PROCESSING,R.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS,R.ADDITIONAL_DATA_PROCESSING_CONSENT,R.MSPA_COVERED_TRANSACTION,R.MSPA_OPT_OUT_OPTION_MODE,R.MSPA_SERVICE_PROVIDER_MODE],Ts=[R.GPC_SEGMENT_TYPE,R.GPC];class _s extends b{constructor(e){super();l(this,"base64UrlEncoder",O.getInstance());l(this,"bitStringEncoder",S.getInstance());e&&this.decode(e)}getFieldNames(){return As}initializeFields(){const e=new class{test(o){return o>=0&&o<=2}},n=new class{test(o){return o>=1&&o<=2}},i=new class{test(o){for(let d=0;d<o.length;d++){let r=o[d];if(r<0||r>2)return!1}return!0}};let a=new f;return a.put(R.VERSION.toString(),new c(6,he.VERSION)),a.put(R.PROCESSING_NOTICE.toString(),new c(2,0).withValidator(e)),a.put(R.SALE_OPT_OUT_NOTICE.toString(),new c(2,0).withValidator(e)),a.put(R.TARGETED_ADVERTISING_OPT_OUT_NOTICE.toString(),new c(2,0).withValidator(e)),a.put(R.SALE_OPT_OUT.toString(),new c(2,0).withValidator(e)),a.put(R.TARGETED_ADVERTISING_OPT_OUT.toString(),new c(2,0).withValidator(e)),a.put(R.SENSITIVE_DATA_PROCESSING.toString(),new U(2,[0,0,0,0,0,0,0,0,0,0]).withValidator(i)),a.put(R.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS.toString(),new U(2,[0,0,0,0,0]).withValidator(i)),a.put(R.ADDITIONAL_DATA_PROCESSING_CONSENT.toString(),new c(2,0).withValidator(e)),a.put(R.MSPA_COVERED_TRANSACTION.toString(),new c(2,1).withValidator(n)),a.put(R.MSPA_OPT_OUT_OPTION_MODE.toString(),new c(2,0).withValidator(e)),a.put(R.MSPA_SERVICE_PROVIDER_MODE.toString(),new c(2,0).withValidator(e)),a}encodeSegment(e){let n=this.bitStringEncoder.encode(e,this.getFieldNames());return this.base64UrlEncoder.encode(n)}decodeSegment(e,n){(e==null||e.length===0)&&this.fields.reset(n);try{let i=this.base64UrlEncoder.decode(e);this.bitStringEncoder.decode(i,this.getFieldNames(),n)}catch{throw new p("Unable to decode UsNjCoreSegment '"+e+"'")}}}class ys extends b{constructor(e){super();l(this,"base64UrlEncoder",O.getInstance());l(this,"bitStringEncoder",S.getInstance());e&&this.decode(e)}getFieldNames(){return Ts}initializeFields(){let e=new f;return e.put(R.GPC_SEGMENT_TYPE.toString(),new c(2,1)),e.put(R.GPC_SEGMENT_INCLUDED.toString(),new T(!0)),e.put(R.GPC.toString(),new T(!1)),e}encodeSegment(e){let n=this.bitStringEncoder.encode(e,this.getFieldNames());return this.base64UrlEncoder.encode(n)}decodeSegment(e,n){(e==null||e.length===0)&&this.fields.reset(n);try{let i=this.base64UrlEncoder.decode(e);this.bitStringEncoder.decode(i,this.getFieldNames(),n)}catch{throw new p("Unable to decode UsNjGpcSegment '"+e+"'")}}}const Je=class Je extends Y{constructor(t){super(),t&&t.length>0&&this.decode(t)}getId(){return Je.ID}getName(){return Je.NAME}getVersion(){return Je.VERSION}initializeSegments(){let t=[];return t.push(new _s),t.push(new ys),t}decodeSection(t){let e=this.initializeSegments();if(t!=null&&t.length!==0){let n=t.split(".");n.length>0&&e[0].decode(n[0]),n.length>1?(e[1].setFieldValue(R.GPC_SEGMENT_INCLUDED,!0),e[1].decode(n[1])):e[1].setFieldValue(R.GPC_SEGMENT_INCLUDED,!1)}return e}encodeSection(t){let e=[];return t.length>=1&&(e.push(t[0].encode()),t.length>=2&&t[1].getFieldValue(R.GPC_SEGMENT_INCLUDED)===!0&&e.push(t[1].encode())),e.join(".")}};l(Je,"ID",21),l(Je,"VERSION",1),l(Je,"NAME","usnj");let he=Je;var k;(function(s){s.VERSION="Version",s.PROCESSING_NOTICE="ProcessingNotice",s.SALE_OPT_OUT_NOTICE="SaleOptOutNotice",s.TARGETED_ADVERTISING_OPT_OUT_NOTICE="TargetedAdvertisingOptOutNotice",s.SALE_OPT_OUT="SaleOptOut",s.TARGETED_ADVERTISING_OPT_OUT="TargetedAdvertisingOptOut",s.SENSITIVE_DATA_PROCESSING="SensitiveDataProcessing",s.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS="KnownChildSensitiveDataConsents",s.ADDITIONAL_DATA_PROCESSING_CONSENT="AdditionalDataProcessingConsent",s.MSPA_COVERED_TRANSACTION="MspaCoveredTransaction",s.MSPA_OPT_OUT_OPTION_MODE="MspaOptOutOptionMode",s.MSPA_SERVICE_PROVIDER_MODE="MspaServiceProviderMode",s.GPC_SEGMENT_TYPE="GpcSegmentType",s.GPC_SEGMENT_INCLUDED="GpcSegmentIncluded",s.GPC="Gpc"})(k||(k={}));const Vs=[k.VERSION,k.PROCESSING_NOTICE,k.SALE_OPT_OUT_NOTICE,k.TARGETED_ADVERTISING_OPT_OUT_NOTICE,k.SALE_OPT_OUT,k.TARGETED_ADVERTISING_OPT_OUT,k.SENSITIVE_DATA_PROCESSING,k.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS,k.ADDITIONAL_DATA_PROCESSING_CONSENT,k.MSPA_COVERED_TRANSACTION,k.MSPA_OPT_OUT_OPTION_MODE,k.MSPA_SERVICE_PROVIDER_MODE],Cs=[k.GPC_SEGMENT_TYPE,k.GPC];class Ps extends b{constructor(e){super();l(this,"base64UrlEncoder",O.getInstance());l(this,"bitStringEncoder",S.getInstance());e&&this.decode(e)}getFieldNames(){return Vs}initializeFields(){const e=new class{test(o){return o>=0&&o<=2}},n=new class{test(o){return o>=1&&o<=2}},i=new class{test(o){for(let d=0;d<o.length;d++){let r=o[d];if(r<0||r>2)return!1}return!0}};let a=new f;return a.put(k.VERSION.toString(),new c(6,Se.VERSION)),a.put(k.PROCESSING_NOTICE.toString(),new c(2,0).withValidator(e)),a.put(k.SALE_OPT_OUT_NOTICE.toString(),new c(2,0).withValidator(e)),a.put(k.TARGETED_ADVERTISING_OPT_OUT_NOTICE.toString(),new c(2,0).withValidator(e)),a.put(k.SALE_OPT_OUT.toString(),new c(2,0).withValidator(e)),a.put(k.TARGETED_ADVERTISING_OPT_OUT.toString(),new c(2,0).withValidator(e)),a.put(k.SENSITIVE_DATA_PROCESSING.toString(),new U(2,[0,0,0,0,0,0,0,0]).withValidator(i)),a.put(k.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS.toString(),new c(2,0).withValidator(e)),a.put(k.ADDITIONAL_DATA_PROCESSING_CONSENT.toString(),new c(2,0).withValidator(e)),a.put(k.MSPA_COVERED_TRANSACTION.toString(),new c(2,1).withValidator(n)),a.put(k.MSPA_OPT_OUT_OPTION_MODE.toString(),new c(2,0).withValidator(e)),a.put(k.MSPA_SERVICE_PROVIDER_MODE.toString(),new c(2,0).withValidator(e)),a}encodeSegment(e){let n=this.bitStringEncoder.encode(e,this.getFieldNames());return this.base64UrlEncoder.encode(n)}decodeSegment(e,n){(e==null||e.length===0)&&this.fields.reset(n);try{let i=this.base64UrlEncoder.decode(e);this.bitStringEncoder.decode(i,this.getFieldNames(),n)}catch{throw new p("Unable to decode UsTnCoreSegment '"+e+"'")}}}class Ds extends b{constructor(e){super();l(this,"base64UrlEncoder",O.getInstance());l(this,"bitStringEncoder",S.getInstance());e&&this.decode(e)}getFieldNames(){return Cs}initializeFields(){let e=new f;return e.put(k.GPC_SEGMENT_TYPE.toString(),new c(2,1)),e.put(k.GPC_SEGMENT_INCLUDED.toString(),new T(!0)),e.put(k.GPC.toString(),new T(!1)),e}encodeSegment(e){let n=this.bitStringEncoder.encode(e,this.getFieldNames());return this.base64UrlEncoder.encode(n)}decodeSegment(e,n){(e==null||e.length===0)&&this.fields.reset(n);try{let i=this.base64UrlEncoder.decode(e);this.bitStringEncoder.decode(i,this.getFieldNames(),n)}catch{throw new p("Unable to decode UsTnGpcSegment '"+e+"'")}}}const Qe=class Qe extends Y{constructor(t){super(),t&&t.length>0&&this.decode(t)}getId(){return Qe.ID}getName(){return Qe.NAME}getVersion(){return Qe.VERSION}initializeSegments(){let t=[];return t.push(new Ps),t.push(new Ds),t}decodeSection(t){let e=this.initializeSegments();if(t!=null&&t.length!==0){let n=t.split(".");n.length>0&&e[0].decode(n[0]),n.length>1?(e[1].setFieldValue(k.GPC_SEGMENT_INCLUDED,!0),e[1].decode(n[1])):e[1].setFieldValue(k.GPC_SEGMENT_INCLUDED,!1)}return e}encodeSection(t){let e=[];return t.length>=1&&(e.push(t[0].encode()),t.length>=2&&t[1].getFieldValue(k.GPC_SEGMENT_INCLUDED)===!0&&e.push(t[1].encode())),e.join(".")}};l(Qe,"ID",22),l(Qe,"VERSION",1),l(Qe,"NAME","ustn");let Se=Qe;var G;(function(s){s.VERSION="Version",s.PROCESSING_NOTICE="ProcessingNotice",s.SALE_OPT_OUT_NOTICE="SaleOptOutNotice",s.TARGETED_ADVERTISING_OPT_OUT_NOTICE="TargetedAdvertisingOptOutNotice",s.SALE_OPT_OUT="SaleOptOut",s.TARGETED_ADVERTISING_OPT_OUT="TargetedAdvertisingOptOut",s.SENSITIVE_DATA_PROCESSING="SensitiveDataProcessing",s.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS="KnownChildSensitiveDataConsents",s.ADDITIONAL_DATA_PROCESSING_CONSENT="AdditionalDataProcessingConsent",s.MSPA_COVERED_TRANSACTION="MspaCoveredTransaction",s.MSPA_OPT_OUT_OPTION_MODE="MspaOptOutOptionMode",s.MSPA_SERVICE_PROVIDER_MODE="MspaServiceProviderMode",s.GPC_SEGMENT_TYPE="GpcSegmentType",s.GPC_SEGMENT_INCLUDED="GpcSegmentIncluded",s.GPC="Gpc"})(G||(G={}));const ws=[G.VERSION,G.PROCESSING_NOTICE,G.SALE_OPT_OUT_NOTICE,G.TARGETED_ADVERTISING_OPT_OUT_NOTICE,G.SALE_OPT_OUT,G.TARGETED_ADVERTISING_OPT_OUT,G.SENSITIVE_DATA_PROCESSING,G.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS,G.ADDITIONAL_DATA_PROCESSING_CONSENT,G.MSPA_COVERED_TRANSACTION,G.MSPA_OPT_OUT_OPTION_MODE,G.MSPA_SERVICE_PROVIDER_MODE],Ms=[G.GPC_SEGMENT_TYPE,G.GPC];class Rs extends b{constructor(e){super();l(this,"base64UrlEncoder",O.getInstance());l(this,"bitStringEncoder",S.getInstance());e&&this.decode(e)}getFieldNames(){return ws}initializeFields(){const e=new class{test(o){return o>=0&&o<=2}},n=new class{test(o){return o>=1&&o<=2}},i=new class{test(o){for(let d=0;d<o.length;d++){let r=o[d];if(r<0||r>2)return!1}return!0}};let a=new f;return a.put(G.VERSION.toString(),new c(6,be.VERSION)),a.put(G.PROCESSING_NOTICE.toString(),new c(2,0).withValidator(e)),a.put(G.SALE_OPT_OUT_NOTICE.toString(),new c(2,0).withValidator(e)),a.put(G.TARGETED_ADVERTISING_OPT_OUT_NOTICE.toString(),new c(2,0).withValidator(e)),a.put(G.SALE_OPT_OUT.toString(),new c(2,0).withValidator(e)),a.put(G.TARGETED_ADVERTISING_OPT_OUT.toString(),new c(2,0).withValidator(e)),a.put(G.SENSITIVE_DATA_PROCESSING.toString(),new U(2,[0,0,0,0,0,0,0,0]).withValidator(i)),a.put(G.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS.toString(),new c(2,0).withValidator(e)),a.put(G.ADDITIONAL_DATA_PROCESSING_CONSENT.toString(),new c(2,0).withValidator(e)),a.put(G.MSPA_COVERED_TRANSACTION.toString(),new c(2,1).withValidator(n)),a.put(G.MSPA_OPT_OUT_OPTION_MODE.toString(),new c(2,0).withValidator(e)),a.put(G.MSPA_SERVICE_PROVIDER_MODE.toString(),new c(2,0).withValidator(e)),a}encodeSegment(e){let n=this.bitStringEncoder.encode(e,this.getFieldNames());return this.base64UrlEncoder.encode(n)}decodeSegment(e,n){(e==null||e.length===0)&&this.fields.reset(n);try{let i=this.base64UrlEncoder.decode(e);this.bitStringEncoder.decode(i,this.getFieldNames(),n)}catch{throw new p("Unable to decode UsMnCoreSegment '"+e+"'")}}}class ks extends b{constructor(e){super();l(this,"base64UrlEncoder",O.getInstance());l(this,"bitStringEncoder",S.getInstance());e&&this.decode(e)}getFieldNames(){return Ms}initializeFields(){let e=new f;return e.put(G.GPC_SEGMENT_TYPE.toString(),new c(2,1)),e.put(G.GPC_SEGMENT_INCLUDED.toString(),new T(!0)),e.put(G.GPC.toString(),new T(!1)),e}encodeSegment(e){let n=this.bitStringEncoder.encode(e,this.getFieldNames());return this.base64UrlEncoder.encode(n)}decodeSegment(e,n){(e==null||e.length===0)&&this.fields.reset(n);try{let i=this.base64UrlEncoder.decode(e);this.bitStringEncoder.decode(i,this.getFieldNames(),n)}catch{throw new p("Unable to decode UsMnGpcSegment '"+e+"'")}}}const Ze=class Ze extends Y{constructor(t){super(),t&&t.length>0&&this.decode(t)}getId(){return Ze.ID}getName(){return Ze.NAME}getVersion(){return Ze.VERSION}initializeSegments(){let t=[];return t.push(new Rs),t.push(new ks),t}decodeSection(t){let e=this.initializeSegments();if(t!=null&&t.length!==0){let n=t.split(".");n.length>0&&e[0].decode(n[0]),n.length>1?(e[1].setFieldValue(G.GPC_SEGMENT_INCLUDED,!0),e[1].decode(n[1])):e[1].setFieldValue(G.GPC_SEGMENT_INCLUDED,!1)}return e}encodeSection(t){let e=[];return t.length>=1&&(e.push(t[0].encode()),t.length>=2&&t[1].getFieldValue(G.GPC_SEGMENT_INCLUDED)===!0&&e.push(t[1].encode())),e.join(".")}};l(Ze,"ID",23),l(Ze,"VERSION",1),l(Ze,"NAME","usmn");let be=Ze;var K;(function(s){s.MSPA_VERSION="MspaVersion",s.MSPA_COVERED_TRANSACTION="MspaCoveredTransaction",s.MSPA_MODE="MspaMode",s.PROCESSING_NOTICE="ProcessingNotice",s.SALE_OPT_OUT_NOTICE="SaleOptOutNotice",s.TARGETED_ADVERTISING_OPT_OUT_NOTICE="TargetedAdvertisingOptOutNotice",s.SALE_OPT_OUT="SaleOptOut",s.TARGETED_ADVERTISING_OPT_OUT="TargetedAdvertisingOptOut",s.ADDITIONAL_DATA_PROCESSING_CONSENT="AdditionalDataProcessingConsent",s.GPC_SEGMENT_TYPE="GpcSegmentType",s.GPC_SEGMENT_INCLUDED="GpcSegmentIncluded",s.GPC="Gpc"})(K||(K={}));const Gs=[K.MSPA_VERSION,K.MSPA_COVERED_TRANSACTION,K.MSPA_MODE,K.PROCESSING_NOTICE,K.SALE_OPT_OUT_NOTICE,K.TARGETED_ADVERTISING_OPT_OUT_NOTICE,K.SALE_OPT_OUT,K.TARGETED_ADVERTISING_OPT_OUT,K.ADDITIONAL_DATA_PROCESSING_CONSENT],xs=[K.GPC_SEGMENT_TYPE,K.GPC];class Bs extends b{constructor(e){super();l(this,"base64UrlEncoder",O.getInstance());l(this,"bitStringEncoder",S.getInstance());e&&this.decode(e)}getFieldNames(){return Gs}initializeFields(){const e=new class{test(a){return a>=0&&a<=2}},n=new class{test(a){return a>=1&&a<=2}};let i=new f;return i.put(K.MSPA_VERSION.toString(),new c(6,fe.VERSION)),i.put(K.MSPA_COVERED_TRANSACTION.toString(),new c(2,1).withValidator(n)),i.put(K.MSPA_MODE.toString(),new c(2,0).withValidator(e)),i.put(K.PROCESSING_NOTICE.toString(),new c(2,0).withValidator(e)),i.put(K.SALE_OPT_OUT_NOTICE.toString(),new c(2,0).withValidator(e)),i.put(K.TARGETED_ADVERTISING_OPT_OUT_NOTICE.toString(),new c(2,0).withValidator(e)),i.put(K.SALE_OPT_OUT.toString(),new c(2,0).withValidator(e)),i.put(K.TARGETED_ADVERTISING_OPT_OUT.toString(),new c(2,0).withValidator(e)),i.put(K.ADDITIONAL_DATA_PROCESSING_CONSENT.toString(),new c(2,0).withValidator(e)),i}encodeSegment(e){let n=this.bitStringEncoder.encode(e,this.getFieldNames());return this.base64UrlEncoder.encode(n)}decodeSegment(e,n){(e==null||e.length===0)&&this.fields.reset(n);try{let i=this.base64UrlEncoder.decode(e);this.bitStringEncoder.decode(i,this.getFieldNames(),n)}catch{throw new p("Unable to decode UsMdCoreSegment '"+e+"'")}}}class Ls extends b{constructor(e){super();l(this,"base64UrlEncoder",O.getInstance());l(this,"bitStringEncoder",S.getInstance());e&&this.decode(e)}getFieldNames(){return xs}initializeFields(){let e=new f;return e.put(K.GPC_SEGMENT_TYPE.toString(),new c(2,1)),e.put(K.GPC_SEGMENT_INCLUDED.toString(),new T(!0)),e.put(K.GPC.toString(),new T(!1)),e}encodeSegment(e){let n=this.bitStringEncoder.encode(e,this.getFieldNames());return this.base64UrlEncoder.encode(n)}decodeSegment(e,n){(e==null||e.length===0)&&this.fields.reset(n);try{let i=this.base64UrlEncoder.decode(e);this.bitStringEncoder.decode(i,this.getFieldNames(),n)}catch{throw new p("Unable to decode UsMdGpcSegment '"+e+"'")}}}const Xe=class Xe extends Y{constructor(t){super(),t&&t.length>0&&this.decode(t)}getId(){return Xe.ID}getName(){return Xe.NAME}getVersion(){return Xe.VERSION}initializeSegments(){let t=[];return t.push(new Bs),t.push(new Ls),t}decodeSection(t){let e=this.initializeSegments();if(t!=null&&t.length!==0){let n=t.split(".");n.length>0&&e[0].decode(n[0]),n.length>1?(e[1].setFieldValue(K.GPC_SEGMENT_INCLUDED,!0),e[1].decode(n[1])):e[1].setFieldValue(K.GPC_SEGMENT_INCLUDED,!1)}return e}encodeSection(t){let e=[];return t.length>=1&&(e.push(t[0].encode()),t.length>=2&&t[1].getFieldValue(K.GPC_SEGMENT_INCLUDED)===!0&&e.push(t[1].encode())),e.join(".")}};l(Xe,"ID",24),l(Xe,"VERSION",1),l(Xe,"NAME","usmd");let fe=Xe;var F;(function(s){s.MSPA_VERSION="MspaVersion",s.MSPA_COVERED_TRANSACTION="MspaCoveredTransaction",s.MSPA_MODE="MspaMode",s.PROCESSING_NOTICE="ProcessingNotice",s.SALE_OPT_OUT_NOTICE="SaleOptOutNotice",s.TARGETED_ADVERTISING_OPT_OUT_NOTICE="TargetedAdvertisingOptOutNotice",s.SALE_OPT_OUT="SaleOptOut",s.TARGETED_ADVERTISING_OPT_OUT="TargetedAdvertisingOptOut",s.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS="KnownChildSensitiveDataConsents",s.ADDITIONAL_DATA_PROCESSING_CONSENT="AdditionalDataProcessingConsent",s.SENSITIVE_DATA_PROCESSING="SensitiveDataProcessing",s.SENSITIVE_DATA_CONSENT_SEGMENT_INCLUDED="SensitiveDataConsentSegmentIncluded"})(F||(F={}));const Us=[F.MSPA_VERSION,F.MSPA_COVERED_TRANSACTION,F.MSPA_MODE,F.PROCESSING_NOTICE,F.SALE_OPT_OUT_NOTICE,F.TARGETED_ADVERTISING_OPT_OUT_NOTICE,F.SALE_OPT_OUT,F.TARGETED_ADVERTISING_OPT_OUT,F.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS,F.ADDITIONAL_DATA_PROCESSING_CONSENT],Fs=[F.SENSITIVE_DATA_PROCESSING];class js extends b{constructor(e){super();l(this,"base64UrlEncoder",O.getInstance());l(this,"bitStringEncoder",S.getInstance());e&&this.decode(e)}getFieldNames(){return Us}initializeFields(){const e=new class{test(a){return a>=0&&a<=2}},n=new class{test(a){return a>=1&&a<=2}};let i=new f;return i.put(F.MSPA_VERSION.toString(),new c(6,Ie.VERSION)),i.put(F.MSPA_COVERED_TRANSACTION.toString(),new c(2,1).withValidator(n)),i.put(F.MSPA_MODE.toString(),new c(2,0).withValidator(e)),i.put(F.PROCESSING_NOTICE.toString(),new c(2,0).withValidator(e)),i.put(F.SALE_OPT_OUT_NOTICE.toString(),new c(2,0).withValidator(e)),i.put(F.TARGETED_ADVERTISING_OPT_OUT_NOTICE.toString(),new c(2,0).withValidator(e)),i.put(F.SALE_OPT_OUT.toString(),new c(2,0).withValidator(e)),i.put(F.TARGETED_ADVERTISING_OPT_OUT.toString(),new c(2,0).withValidator(e)),i.put(F.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS.toString(),new c(2,0).withValidator(e)),i.put(F.ADDITIONAL_DATA_PROCESSING_CONSENT.toString(),new c(2,0).withValidator(e)),i}encodeSegment(e){let n=this.bitStringEncoder.encode(e,this.getFieldNames());return this.base64UrlEncoder.encode(n)}decodeSegment(e,n){(e==null||e.length===0)&&this.fields.reset(n);try{let i=this.base64UrlEncoder.decode(e);this.bitStringEncoder.decode(i,this.getFieldNames(),n)}catch{throw new p("Unable to decode UsInCoreSegment '"+e+"'")}}}class Hs extends b{constructor(e){super();l(this,"base64UrlEncoder",O.getInstance());l(this,"bitStringEncoder",S.getInstance());e&&this.decode(e)}getFieldNames(){return Fs}initializeFields(){const e=new class{test(i){for(let a=0;a<i.length;a++){let o=i[a];if(o<0||o>2)return!1}return!0}};let n=new f;return n.put(F.SENSITIVE_DATA_CONSENT_SEGMENT_INCLUDED.toString(),new T(!0)),n.put(F.SENSITIVE_DATA_PROCESSING.toString(),new U(2,[0,0,0,0,0,0,0,0]).withValidator(e)),n}encodeSegment(e){let n=this.bitStringEncoder.encode(e,this.getFieldNames());return this.base64UrlEncoder.encode(n)}decodeSegment(e,n){(e==null||e.length===0)&&this.fields.reset(n);try{let i=this.base64UrlEncoder.decode(e);this.bitStringEncoder.decode(i,this.getFieldNames(),n)}catch{throw new p("Unable to decode UsInSensitiveDataConsentSegment '"+e+"'")}}}const qe=class qe extends Y{constructor(t){super(),t&&t.length>0&&this.decode(t)}getId(){return qe.ID}getName(){return qe.NAME}getVersion(){return qe.VERSION}initializeSegments(){let t=[];return t.push(new js),t.push(new Hs),t}decodeSection(t){let e=this.initializeSegments();if(t!=null&&t.length!==0){let n=t.split(".");n.length>0&&e[0].decode(n[0]),n.length>1?(e[1].setFieldValue(F.SENSITIVE_DATA_CONSENT_SEGMENT_INCLUDED,!0),e[1].decode(n[1])):e[1].setFieldValue(F.SENSITIVE_DATA_CONSENT_SEGMENT_INCLUDED,!1)}return e}encodeSection(t){let e=[];return t.length>=1&&(e.push(t[0].encode()),t.length>=2&&t[1].getFieldValue(F.SENSITIVE_DATA_CONSENT_SEGMENT_INCLUDED)===!0&&e.push(t[1].encode())),e.join(".")}};l(qe,"ID",25),l(qe,"VERSION",1),l(qe,"NAME","usin");let Ie=qe;var j;(function(s){s.MSPA_VERSION="MspaVersion",s.MSPA_COVERED_TRANSACTION="MspaCoveredTransaction",s.MSPA_MODE="MspaMode",s.PROCESSING_NOTICE="ProcessingNotice",s.SALE_OPT_OUT_NOTICE="SaleOptOutNotice",s.TARGETED_ADVERTISING_OPT_OUT_NOTICE="TargetedAdvertisingOptOutNotice",s.SALE_OPT_OUT="SaleOptOut",s.TARGETED_ADVERTISING_OPT_OUT="TargetedAdvertisingOptOut",s.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS="KnownChildSensitiveDataConsents",s.ADDITIONAL_DATA_PROCESSING_CONSENT="AdditionalDataProcessingConsent",s.SENSITIVE_DATA_PROCESSING="SensitiveDataProcessing",s.SENSITIVE_DATA_CONSENT_SEGMENT_INCLUDED="SensitiveDataConsentSegmentIncluded"})(j||(j={}));const Ks=[j.MSPA_VERSION,j.MSPA_COVERED_TRANSACTION,j.MSPA_MODE,j.PROCESSING_NOTICE,j.SALE_OPT_OUT_NOTICE,j.TARGETED_ADVERTISING_OPT_OUT_NOTICE,j.SALE_OPT_OUT,j.TARGETED_ADVERTISING_OPT_OUT,j.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS,j.ADDITIONAL_DATA_PROCESSING_CONSENT],zs=[j.SENSITIVE_DATA_PROCESSING];class Ws extends b{constructor(e){super();l(this,"base64UrlEncoder",O.getInstance());l(this,"bitStringEncoder",S.getInstance());e&&this.decode(e)}getFieldNames(){return Ks}initializeFields(){const e=new class{test(a){return a>=0&&a<=2}},n=new class{test(a){return a>=1&&a<=2}};let i=new f;return i.put(j.MSPA_VERSION.toString(),new c(6,Oe.VERSION)),i.put(j.MSPA_COVERED_TRANSACTION.toString(),new c(2,1).withValidator(n)),i.put(j.MSPA_MODE.toString(),new c(2,0).withValidator(e)),i.put(j.PROCESSING_NOTICE.toString(),new c(2,0).withValidator(e)),i.put(j.SALE_OPT_OUT_NOTICE.toString(),new c(2,0).withValidator(e)),i.put(j.TARGETED_ADVERTISING_OPT_OUT_NOTICE.toString(),new c(2,0).withValidator(e)),i.put(j.SALE_OPT_OUT.toString(),new c(2,0).withValidator(e)),i.put(j.TARGETED_ADVERTISING_OPT_OUT.toString(),new c(2,0).withValidator(e)),i.put(j.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS.toString(),new c(2,0).withValidator(e)),i.put(j.ADDITIONAL_DATA_PROCESSING_CONSENT.toString(),new c(2,0).withValidator(e)),i}encodeSegment(e){let n=this.bitStringEncoder.encode(e,this.getFieldNames());return this.base64UrlEncoder.encode(n)}decodeSegment(e,n){(e==null||e.length===0)&&this.fields.reset(n);try{let i=this.base64UrlEncoder.decode(e);this.bitStringEncoder.decode(i,this.getFieldNames(),n)}catch{throw new p("Unable to decode UsKyCoreSegment '"+e+"'")}}}class Ys extends b{constructor(e){super();l(this,"base64UrlEncoder",O.getInstance());l(this,"bitStringEncoder",S.getInstance());e&&this.decode(e)}getFieldNames(){return zs}initializeFields(){const e=new class{test(i){for(let a=0;a<i.length;a++){let o=i[a];if(o<0||o>2)return!1}return!0}};let n=new f;return n.put(j.SENSITIVE_DATA_CONSENT_SEGMENT_INCLUDED.toString(),new T(!0)),n.put(j.SENSITIVE_DATA_PROCESSING.toString(),new U(2,[0,0,0,0,0,0,0,0]).withValidator(e)),n}encodeSegment(e){let n=this.bitStringEncoder.encode(e,this.getFieldNames());return this.base64UrlEncoder.encode(n)}decodeSegment(e,n){(e==null||e.length===0)&&this.fields.reset(n);try{let i=this.base64UrlEncoder.decode(e);this.bitStringEncoder.decode(i,this.getFieldNames(),n)}catch{throw new p("Unable to decode UsKySensitiveDataConsentSegment '"+e+"'")}}}const et=class et extends Y{constructor(t){super(),t&&t.length>0&&this.decode(t)}getId(){return et.ID}getName(){return et.NAME}getVersion(){return et.VERSION}initializeSegments(){let t=[];return t.push(new Ws),t.push(new Ys),t}decodeSection(t){let e=this.initializeSegments();if(t!=null&&t.length!==0){let n=t.split(".");n.length>0&&e[0].decode(n[0]),n.length>1?(e[1].setFieldValue(j.SENSITIVE_DATA_CONSENT_SEGMENT_INCLUDED,!0),e[1].decode(n[1])):e[1].setFieldValue(j.SENSITIVE_DATA_CONSENT_SEGMENT_INCLUDED,!1)}return e}encodeSection(t){let e=[];return t.length>=1&&(e.push(t[0].encode()),t.length>=2&&t[1].getFieldValue(j.SENSITIVE_DATA_CONSENT_SEGMENT_INCLUDED)===!0&&e.push(t[1].encode())),e.join(".")}};l(et,"ID",26),l(et,"VERSION",1),l(et,"NAME","usky");let Oe=et;var H;(function(s){s.MSPA_VERSION="MspaVersion",s.MSPA_COVERED_TRANSACTION="MspaCoveredTransaction",s.MSPA_MODE="MspaMode",s.PROCESSING_NOTICE="ProcessingNotice",s.SALE_OPT_OUT_NOTICE="SaleOptOutNotice",s.TARGETED_ADVERTISING_OPT_OUT_NOTICE="TargetedAdvertisingOptOutNotice",s.SALE_OPT_OUT="SaleOptOut",s.TARGETED_ADVERTISING_OPT_OUT="TargetedAdvertisingOptOut",s.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS="KnownChildSensitiveDataConsents",s.ADDITIONAL_DATA_PROCESSING_CONSENT="AdditionalDataProcessingConsent",s.SENSITIVE_DATA_PROCESSING="SensitiveDataProcessing",s.SENSITIVE_DATA_CONSENT_SEGMENT_INCLUDED="SensitiveDataConsentSegmentIncluded"})(H||(H={}));const $s=[H.MSPA_VERSION,H.MSPA_COVERED_TRANSACTION,H.MSPA_MODE,H.PROCESSING_NOTICE,H.SALE_OPT_OUT_NOTICE,H.TARGETED_ADVERTISING_OPT_OUT_NOTICE,H.SALE_OPT_OUT,H.TARGETED_ADVERTISING_OPT_OUT,H.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS,H.ADDITIONAL_DATA_PROCESSING_CONSENT],Js=[H.SENSITIVE_DATA_PROCESSING];class Qs extends b{constructor(e){super();l(this,"base64UrlEncoder",O.getInstance());l(this,"bitStringEncoder",S.getInstance());e&&this.decode(e)}getFieldNames(){return $s}initializeFields(){const e=new class{test(a){return a>=0&&a<=2}},n=new class{test(a){return a>=1&&a<=2}};let i=new f;return i.put(H.MSPA_VERSION.toString(),new c(6,Ne.VERSION)),i.put(H.MSPA_COVERED_TRANSACTION.toString(),new c(2,1).withValidator(n)),i.put(H.MSPA_MODE.toString(),new c(2,0).withValidator(e)),i.put(H.PROCESSING_NOTICE.toString(),new c(2,0).withValidator(e)),i.put(H.SALE_OPT_OUT_NOTICE.toString(),new c(2,0).withValidator(e)),i.put(H.TARGETED_ADVERTISING_OPT_OUT_NOTICE.toString(),new c(2,0).withValidator(e)),i.put(H.SALE_OPT_OUT.toString(),new c(2,0).withValidator(e)),i.put(H.TARGETED_ADVERTISING_OPT_OUT.toString(),new c(2,0).withValidator(e)),i.put(H.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS.toString(),new c(2,0).withValidator(e)),i.put(H.ADDITIONAL_DATA_PROCESSING_CONSENT.toString(),new c(2,0).withValidator(e)),i}encodeSegment(e){let n=this.bitStringEncoder.encode(e,this.getFieldNames());return this.base64UrlEncoder.encode(n)}decodeSegment(e,n){(e==null||e.length===0)&&this.fields.reset(n);try{let i=this.base64UrlEncoder.decode(e);this.bitStringEncoder.decode(i,this.getFieldNames(),n)}catch{throw new p("Unable to decode UsRiCoreSegment '"+e+"'")}}}class Zs extends b{constructor(e){super();l(this,"base64UrlEncoder",O.getInstance());l(this,"bitStringEncoder",S.getInstance());e&&this.decode(e)}getFieldNames(){return Js}initializeFields(){const e=new class{test(i){for(let a=0;a<i.length;a++){let o=i[a];if(o<0||o>2)return!1}return!0}};let n=new f;return n.put(H.SENSITIVE_DATA_CONSENT_SEGMENT_INCLUDED.toString(),new T(!0)),n.put(H.SENSITIVE_DATA_PROCESSING.toString(),new U(2,[0,0,0,0,0,0,0,0]).withValidator(e)),n}encodeSegment(e){let n=this.bitStringEncoder.encode(e,this.getFieldNames());return this.base64UrlEncoder.encode(n)}decodeSegment(e,n){(e==null||e.length===0)&&this.fields.reset(n);try{let i=this.base64UrlEncoder.decode(e);this.bitStringEncoder.decode(i,this.getFieldNames(),n)}catch{throw new p("Unable to decode UsRiSensitiveDataConsentSegment '"+e+"'")}}}const tt=class tt extends Y{constructor(t){super(),t&&t.length>0&&this.decode(t)}getId(){return tt.ID}getName(){return tt.NAME}getVersion(){return tt.VERSION}initializeSegments(){let t=[];return t.push(new Qs),t.push(new Zs),t}decodeSection(t){let e=this.initializeSegments();if(t!=null&&t.length!==0){let n=t.split(".");n.length>0&&e[0].decode(n[0]),n.length>1?(e[1].setFieldValue(H.SENSITIVE_DATA_CONSENT_SEGMENT_INCLUDED,!0),e[1].decode(n[1])):e[1].setFieldValue(H.SENSITIVE_DATA_CONSENT_SEGMENT_INCLUDED,!1)}return e}encodeSection(t){let e=[];return t.length>=1&&(e.push(t[0].encode()),t.length>=2&&t[1].getFieldValue(H.SENSITIVE_DATA_CONSENT_SEGMENT_INCLUDED)===!0&&e.push(t[1].encode())),e.join(".")}};l(tt,"ID",27),l(tt,"VERSION",1),l(tt,"NAME","usri");let Ne=tt;class Q{}l(Q,"SECTION_ID_NAME_MAP",new Map([[ee.ID,ee.NAME],[te.ID,te.NAME],[ne.ID,ne.NAME],[se.ID,se.NAME],[ie.ID,ie.NAME],[ae.ID,ae.NAME],[oe.ID,oe.NAME],[le.ID,le.NAME],[ce.ID,ce.NAME],[de.ID,de.NAME],[re.ID,re.NAME],[ue.ID,ue.NAME],[pe.ID,pe.NAME],[me.ID,me.NAME],[ve.ID,ve.NAME],[ge.ID,ge.NAME],[Ee.ID,Ee.NAME],[he.ID,he.NAME],[Se.ID,Se.NAME],[be.ID,be.NAME],[fe.ID,fe.NAME],[Ie.ID,Ie.NAME],[Oe.ID,Oe.NAME],[Ne.ID,Ne.NAME]])),l(Q,"SECTION_ORDER",[ee.NAME,te.NAME,ne.NAME,se.NAME,ie.NAME,ae.NAME,oe.NAME,le.NAME,ce.NAME,de.NAME,re.NAME,ue.NAME,pe.NAME,me.NAME,ve.NAME,ge.NAME,Ee.NAME,he.NAME,Se.NAME,be.NAME,fe.NAME,Ie.NAME,Oe.NAME,Ne.NAME]);class Lt{constructor(t){l(this,"sections",new Map);l(this,"encodedString",null);l(this,"decoded",!0);l(this,"dirty",!1);t&&this.decode(t)}setFieldValue(t,e,n){this.decoded||(this.sections=this.decodeModel(this.encodedString),this.dirty=!1,this.decoded=!0);let i=null;if(this.sections.has(t)?i=this.sections.get(t):t===te.NAME?(i=new te,this.sections.set(te.NAME,i)):t===ee.NAME?(i=new ee,this.sections.set(ee.NAME,i)):t===ne.NAME?(i=new ne,this.sections.set(ne.NAME,i)):t===se.NAME?(i=new se,this.sections.set(se.NAME,i)):t===ie.NAME?(i=new ie,this.sections.set(ie.NAME,i)):t===ae.NAME?(i=new ae,this.sections.set(ae.NAME,i)):t===oe.NAME?(i=new oe,this.sections.set(oe.NAME,i)):t===le.NAME?(i=new le,this.sections.set(le.NAME,i)):t===ce.NAME?(i=new ce,this.sections.set(ce.NAME,i)):t===de.NAME?(i=new de,this.sections.set(de.NAME,i)):t===re.NAME?(i=new re,this.sections.set(re.NAME,i)):t===ue.NAME?(i=new ue,this.sections.set(ue.NAME,i)):t===pe.NAME?(i=new pe,this.sections.set(pe.NAME,i)):t===me.NAME?(i=new me,this.sections.set(me.NAME,i)):t===ve.NAME?(i=new ve,this.sections.set(ve.NAME,i)):t===ge.NAME?(i=new ge,this.sections.set(ge.NAME,i)):t===Ee.NAME?(i=new Ee,this.sections.set(Ee.NAME,i)):t===he.NAME?(i=new he,this.sections.set(he.NAME,i)):t===Se.NAME?(i=new Se,this.sections.set(Se.NAME,i)):t===be.NAME?(i=new be,this.sections.set(be.NAME,i)):t===fe.NAME?(i=new fe,this.sections.set(fe.NAME,i)):t===Ie.NAME?(i=new Ie,this.sections.set(Ie.NAME,i)):t===Oe.NAME?(i=new Oe,this.sections.set(Oe.NAME,i)):t===Ne.NAME&&(i=new Ne,this.sections.set(Ne.NAME,i)),i)i.setFieldValue(e,n),this.dirty=!0,i.setIsDirty(!0);else throw new mt(t+"."+e+" not found")}setFieldValueBySectionId(t,e,n){this.setFieldValue(Q.SECTION_ID_NAME_MAP.get(t),e,n)}getFieldValue(t,e){return this.decoded||(this.sections=this.decodeModel(this.encodedString),this.dirty=!1,this.decoded=!0),this.sections.has(t)?this.sections.get(t).getFieldValue(e):null}getFieldValueBySectionId(t,e){return this.getFieldValue(Q.SECTION_ID_NAME_MAP.get(t),e)}hasField(t,e){return this.decoded||(this.sections=this.decodeModel(this.encodedString),this.dirty=!1,this.decoded=!0),this.sections.has(t)?this.sections.get(t).hasField(e):!1}hasFieldBySectionId(t,e){return this.hasField(Q.SECTION_ID_NAME_MAP.get(t),e)}hasSection(t){return this.decoded||(this.sections=this.decodeModel(this.encodedString),this.dirty=!1,this.decoded=!0),this.sections.has(t)}hasSectionId(t){return this.hasSection(Q.SECTION_ID_NAME_MAP.get(t))}deleteSection(t){!this.decoded&&this.encodedString!=null&&this.encodedString.length>0&&this.decode(this.encodedString),this.sections.delete(t),this.dirty=!0}deleteSectionById(t){this.deleteSection(Q.SECTION_ID_NAME_MAP.get(t))}clear(){this.sections.clear(),this.encodedString="DBAA",this.decoded=!1,this.dirty=!1}getHeader(){this.decoded||(this.sections=this.decodeModel(this.encodedString),this.dirty=!1,this.decoded=!0);let t=new Ve;return t.setFieldValue("SectionIds",this.getSectionIds()),t.toObj()}getSection(t){return this.decoded||(this.sections=this.decodeModel(this.encodedString),this.dirty=!1,this.decoded=!0),this.sections.has(t)?this.sections.get(t).toObj():null}getSectionIds(){this.decoded||(this.sections=this.decodeModel(this.encodedString),this.dirty=!1,this.decoded=!0);let t=[];for(let e=0;e<Q.SECTION_ORDER.length;e++){let n=Q.SECTION_ORDER[e];if(this.sections.has(n)){let i=this.sections.get(n);t.push(i.getId())}}return t}encodeModel(t){let e=[],n=[];for(let a=0;a<Q.SECTION_ORDER.length;a++){let o=Q.SECTION_ORDER[a];if(t.has(o)){let d=t.get(o);d.setIsDirty(!0),e.push(d.encode()),n.push(d.getId())}}let i=new Ve;return i.setFieldValue("SectionIds",n),e.unshift(i.encode()),e.join("~")}decodeModel(t){if(!t||t.length==0||t.startsWith("DB")){let e=t.split("~"),n=new Map;if(e[0].startsWith("D")){let a=new Ve(e[0]).getFieldValue("SectionIds");if(a.length!==e.length-1)throw new p("Unable to decode '"+t+"'. The number of sections does not match the number of sections defined in the header.");for(let o=0;o<a.length;o++){if(e[o+1].trim()==="")throw new p("Unable to decode '"+t+"'. Section "+(o+1)+" is blank.");if(a[o]===te.ID){let r=new te(e[o+1]);n.set(te.NAME,r)}else if(a[o]===ee.ID){let r=new ee(e[o+1]);n.set(ee.NAME,r)}else if(a[o]===ne.ID){let r=new ne(e[o+1]);n.set(ne.NAME,r)}else if(a[o]===se.ID){let r=new se(e[o+1]);n.set(se.NAME,r)}else if(a[o]===ie.ID){let r=new ie(e[o+1]);n.set(ie.NAME,r)}else if(a[o]===ae.ID){let r=new ae(e[o+1]);n.set(ae.NAME,r)}else if(a[o]===oe.ID){let r=new oe(e[o+1]);n.set(oe.NAME,r)}else if(a[o]===le.ID){let r=new le(e[o+1]);n.set(le.NAME,r)}else if(a[o]===ce.ID){let r=new ce(e[o+1]);n.set(ce.NAME,r)}else if(a[o]===de.ID){let r=new de(e[o+1]);n.set(de.NAME,r)}else if(a[o]===re.ID){let r=new re(e[o+1]);n.set(re.NAME,r)}else if(a[o]===ue.ID){let r=new ue(e[o+1]);n.set(ue.NAME,r)}else if(a[o]===pe.ID){let r=new pe(e[o+1]);n.set(pe.NAME,r)}else if(a[o]===me.ID){let r=new me(e[o+1]);n.set(me.NAME,r)}else if(a[o]===ve.ID){let r=new ve(e[o+1]);n.set(ve.NAME,r)}else if(a[o]===ge.ID){let r=new ge(e[o+1]);n.set(ge.NAME,r)}else if(a[o]===Ee.ID){let r=new Ee(e[o+1]);n.set(Ee.NAME,r)}else if(a[o]===he.ID){let r=new he(e[o+1]);n.set(he.NAME,r)}else if(a[o]===Se.ID){let r=new Se(e[o+1]);n.set(Se.NAME,r)}else if(a[o]===be.ID){let r=new be(e[o+1]);n.set(be.NAME,r)}else if(a[o]===fe.ID){let r=new fe(e[o+1]);n.set(fe.NAME,r)}else if(a[o]===Ie.ID){let r=new Ie(e[o+1]);n.set(Ie.NAME,r)}else if(a[o]===Oe.ID){let r=new Oe(e[o+1]);n.set(Oe.NAME,r)}else if(a[o]===Ne.ID){let r=new Ne(e[o+1]);n.set(Ne.NAME,r)}}}return n}else if(t.startsWith("C")){let e=new Map,n=new ee(t);return e.set(ee.NAME,n),new Ve().setFieldValue(Ce.SECTION_IDS,[2]),e.set(Ve.NAME,n),e}else throw new p("Unable to decode '"+t+"'")}encodeSection(t){return this.decoded||(this.sections=this.decodeModel(this.encodedString),this.dirty=!1,this.decoded=!0),this.sections.has(t)?this.sections.get(t).encode():null}encodeSectionById(t){return this.encodeSection(Q.SECTION_ID_NAME_MAP.get(t))}decodeSection(t,e){this.decoded||(this.sections=this.decodeModel(this.encodedString),this.dirty=!1,this.decoded=!0);let n=null;this.sections.has(t)?n=this.sections.get(t):t===te.NAME?(n=new te,this.sections.set(te.NAME,n)):t===ee.NAME?(n=new ee,this.sections.set(ee.NAME,n)):t===ne.NAME?(n=new ne,this.sections.set(ne.NAME,n)):t===se.NAME?(n=new se,this.sections.set(se.NAME,n)):t===ie.NAME?(n=new ie,this.sections.set(ie.NAME,n)):t===ae.NAME?(n=new ae,this.sections.set(ae.NAME,n)):t===oe.NAME?(n=new oe,this.sections.set(oe.NAME,n)):t===le.NAME?(n=new le,this.sections.set(le.NAME,n)):t===ce.NAME?(n=new ce,this.sections.set(ce.NAME,n)):t===de.NAME?(n=new de,this.sections.set(de.NAME,n)):t===re.NAME?(n=new re,this.sections.set(re.NAME,n)):t===ue.NAME?(n=new ue,this.sections.set(ue.NAME,n)):t===pe.NAME?(n=new pe,this.sections.set(pe.NAME,n)):t===me.NAME?(n=new me,this.sections.set(me.NAME,n)):t===ve.NAME?(n=new ve,this.sections.set(ve.NAME,n)):t===ge.NAME?(n=new ge,this.sections.set(ge.NAME,n)):t===Ee.NAME?(n=new Ee,this.sections.set(Ee.NAME,n)):t===he.NAME?(n=new he,this.sections.set(he.NAME,n)):t===Se.NAME?(n=new Se,this.sections.set(Se.NAME,n)):t===be.NAME?(n=new be,this.sections.set(be.NAME,n)):t===fe.NAME?(n=new fe,this.sections.set(fe.NAME,n)):t===Ie.NAME?(n=new Ie,this.sections.set(Ie.NAME,n)):t===Oe.NAME?(n=new Oe,this.sections.set(Oe.NAME,n)):t===Ne.NAME&&(n=new Ne,this.sections.set(Ne.NAME,n)),n&&(n.decode(e),this.dirty=!0)}decodeSectionById(t,e){this.decodeSection(Q.SECTION_ID_NAME_MAP.get(t),e)}toObject(){this.decoded||(this.sections=this.decodeModel(this.encodedString),this.dirty=!1,this.decoded=!0);let t={};for(let e=0;e<Q.SECTION_ORDER.length;e++){let n=Q.SECTION_ORDER[e];this.sections.has(n)&&(t[n]=this.sections.get(n).toObj())}return t}encode(){return(this.encodedString==null||this.encodedString.length===0||this.dirty)&&(this.encodedString=this.encodeModel(this.sections),this.dirty=!1,this.decoded=!0),this.encodedString}decode(t){this.encodedString=t,this.dirty=!1,this.decoded=!1}}class Xs{constructor(){l(this,"gppVersion","1.1");l(this,"supportedAPIs",[]);l(this,"eventQueue",new an(this));l(this,"cmpStatus",gt.LOADING);l(this,"cmpDisplayStatus",Et.HIDDEN);l(this,"signalStatus",ht.NOT_READY);l(this,"applicableSections",[]);l(this,"gppModel",new Lt);l(this,"cmpId");l(this,"cmpVersion");l(this,"eventStatus")}reset(){this.eventQueue.clear(),this.cmpStatus=gt.LOADING,this.cmpDisplayStatus=Et.HIDDEN,this.signalStatus=ht.NOT_READY,this.applicableSections=[],this.supportedAPIs=[],this.gppModel=new Lt,delete this.cmpId,delete this.cmpVersion,delete this.eventStatus}}class Pt{static absCall(t,e,n,i){return new Promise((a,o)=>{const d=new XMLHttpRequest,r=()=>{if(d.readyState==XMLHttpRequest.DONE)if(d.status>=200&&d.status<300){let u=d.response;if(typeof u=="string")try{u=JSON.parse(u)}catch{}a(u)}else o(new Error(`HTTP Status: ${d.status} response type: ${d.responseType}`))},h=()=>{o(new Error("error"))},m=()=>{o(new Error("aborted"))},v=()=>{o(new Error("Timeout "+i+"ms "+t))};d.withCredentials=n,d.addEventListener("load",r),d.addEventListener("error",h),d.addEventListener("abort",m),e===null?d.open("GET",t,!0):d.open("POST",t,!0),d.responseType="json",d.timeout=i,d.ontimeout=v,d.send(e)})}static post(t,e,n=!1,i=0){return this.absCall(t,JSON.stringify(e),n,i)}static fetch(t,e=!1,n=0){return this.absCall(t,null,e,n)}}class vt extends Error{constructor(t){super(t),this.name="GVLError"}}const ot=class ot{has(t){return ot.langSet.has(t)}forEach(t){ot.langSet.forEach(t)}get size(){return ot.langSet.size}};l(ot,"langSet",new Set(["AR","BG","BS","CA","CS","CY","DA","DE","EL","EN","ES","ET","EU","FI","FR","GL","HE","HI","HR","HU","ID","IS","IT","JA","KA","KO","LT","LV","MK","MS","MT","NL","NO","PL","PT-BR","PT-PT","RO","RU","SK","SL","SQ","SR-LATN","SR-CYRL","SV","SW","TH","TL","TR","UK","VI","ZH","ZH-HANT"]));let Mt=ot;const lt=class lt{constructor(){l(this,"vendors");l(this,"consentLanguages",new Mt);l(this,"gvlSpecificationVersion");l(this,"vendorListVersion");l(this,"tcfPolicyVersion");l(this,"lastUpdated");l(this,"purposes");l(this,"specialPurposes");l(this,"features");l(this,"specialFeatures");l(this,"stacks");l(this,"dataCategories");l(this,"language",lt.DEFAULT_LANGUAGE);l(this,"vendorIds");l(this,"ready",!1);l(this,"fullVendorList");l(this,"byPurposeVendorMap");l(this,"bySpecialPurposeVendorMap");l(this,"byFeatureVendorMap");l(this,"bySpecialFeatureVendorMap");l(this,"baseUrl");l(this,"languageFilename","purposes-[LANG].json")}static fromVendorList(t){let e=new lt;return e.populate(t),e}static async fromUrl(t){let e=t.baseUrl;if(!e||e.length===0)throw new vt("Invalid baseUrl: '"+e+"'");if(/^https?:\/\/vendorlist\.consensu\.org\//.test(e))throw new vt("Invalid baseUrl!  You may not pull directly from vendorlist.consensu.org and must provide your own cache");e.length>0&&e[e.length-1]!=="/"&&(e+="/");let n=new lt;if(n.baseUrl=e,t.languageFilename?n.languageFilename=t.languageFilename:n.languageFilename="purposes-[LANG].json",t.version>0){let i=t.versionedFilename;i||(i="archives/vendor-list-v[VERSION].json");let a=e+i.replace("[VERSION]",String(t.version));n.populate(await Pt.fetch(a))}else{let i=t.latestFilename;i||(i="vendor-list.json");let a=e+i;n.populate(await Pt.fetch(a))}return n}async changeLanguage(t){const e=t.toUpperCase();if(this.consentLanguages.has(e)){if(e!==this.language){this.language=e;const n=this.baseUrl+this.languageFilename.replace("[LANG]",t);try{this.populate(await Pt.fetch(n))}catch(i){throw new vt("unable to load language: "+i.message)}}}else throw new vt(`unsupported language ${t}`)}getJson(){return JSON.parse(JSON.stringify({gvlSpecificationVersion:this.gvlSpecificationVersion,vendorListVersion:this.vendorListVersion,tcfPolicyVersion:this.tcfPolicyVersion,lastUpdated:this.lastUpdated,purposes:this.purposes,specialPurposes:this.specialPurposes,features:this.features,specialFeatures:this.specialFeatures,stacks:this.stacks,dataCategories:this.dataCategories,vendors:this.fullVendorList}))}isVendorList(t){return t!==void 0&&t.vendors!==void 0}populate(t){this.purposes=t.purposes,this.specialPurposes=t.specialPurposes,this.features=t.features,this.specialFeatures=t.specialFeatures,this.stacks=t.stacks,this.dataCategories=t.dataCategories,this.isVendorList(t)&&(this.gvlSpecificationVersion=t.gvlSpecificationVersion,this.tcfPolicyVersion=t.tcfPolicyVersion,this.vendorListVersion=t.vendorListVersion,this.lastUpdated=t.lastUpdated,typeof this.lastUpdated=="string"&&(this.lastUpdated=new Date(this.lastUpdated)),this.vendors=t.vendors,this.fullVendorList=t.vendors,this.mapVendors(),this.ready=!0)}mapVendors(t){this.byPurposeVendorMap={},this.bySpecialPurposeVendorMap={},this.byFeatureVendorMap={},this.bySpecialFeatureVendorMap={},Object.keys(this.purposes).forEach(e=>{this.byPurposeVendorMap[e]={legInt:new Set,impCons:new Set,consent:new Set,flexible:new Set}}),Object.keys(this.specialPurposes).forEach(e=>{this.bySpecialPurposeVendorMap[e]=new Set}),Object.keys(this.features).forEach(e=>{this.byFeatureVendorMap[e]=new Set}),Object.keys(this.specialFeatures).forEach(e=>{this.bySpecialFeatureVendorMap[e]=new Set}),Array.isArray(t)||(t=Object.keys(this.fullVendorList).map(e=>+e)),this.vendorIds=new Set(t),this.vendors=t.reduce((e,n)=>{const i=this.vendors[String(n)];return i&&i.deletedDate===void 0&&(i.purposes.forEach(a=>{this.byPurposeVendorMap[String(a)].consent.add(n)}),i.specialPurposes.forEach(a=>{this.bySpecialPurposeVendorMap[String(a)].add(n)}),i.legIntPurposes&&i.legIntPurposes.forEach(a=>{this.byPurposeVendorMap[String(a)].legInt.add(n)}),i.impConsPurposes&&i.impConsPurposes.forEach(a=>{this.byPurposeVendorMap[String(a)].impCons.add(n)}),i.flexiblePurposes&&i.flexiblePurposes.forEach(a=>{this.byPurposeVendorMap[String(a)].flexible.add(n)}),i.features.forEach(a=>{this.byFeatureVendorMap[String(a)].add(n)}),i.specialFeatures.forEach(a=>{this.bySpecialFeatureVendorMap[String(a)].add(n)}),e[n]=i),e},{})}getFilteredVendors(t,e,n,i){const a=t.charAt(0).toUpperCase()+t.slice(1);let o;const d={};return t==="purpose"&&n?o=this["by"+a+"VendorMap"][String(e)][n]:o=this["by"+(i?"Special":"")+a+"VendorMap"][String(e)],o.forEach(r=>{d[String(r)]=this.vendors[String(r)]}),d}getVendorsWithConsentPurpose(t){return this.getFilteredVendors("purpose",t,"consent")}getVendorsWithLegIntPurpose(t){return this.getFilteredVendors("purpose",t,"legInt")}getVendorsWithFlexiblePurpose(t){return this.getFilteredVendors("purpose",t,"flexible")}getVendorsWithSpecialPurpose(t){return this.getFilteredVendors("purpose",t,void 0,!0)}getVendorsWithFeature(t){return this.getFilteredVendors("feature",t)}getVendorsWithSpecialFeature(t){return this.getFilteredVendors("feature",t,void 0,!0)}narrowVendorsTo(t){this.mapVendors(t)}get isReady(){return this.ready}static isInstanceOf(t){return typeof t=="object"&&typeof t.narrowVendorsTo=="function"}};l(lt,"DEFAULT_LANGUAGE","EN");let Ot=lt;class qs{constructor(t,e,n){l(this,"callResponder");l(this,"cmpApiContext");this.cmpApiContext=new Xs,this.cmpApiContext.cmpId=t,this.cmpApiContext.cmpVersion=e,this.callResponder=new sn(this.cmpApiContext,n)}fireEvent(t,e){this.cmpApiContext.eventQueue.exec(t,e)}fireErrorEvent(t){this.cmpApiContext.eventQueue.exec("error",t)}fireSectionChange(t){this.cmpApiContext.eventQueue.exec("sectionChange",t)}getEventStatus(){return this.cmpApiContext.eventStatus}setEventStatus(t){this.cmpApiContext.eventStatus=t}getCmpStatus(){return this.cmpApiContext.cmpStatus}setCmpStatus(t){this.cmpApiContext.cmpStatus=t,this.cmpApiContext.eventQueue.exec("cmpStatus",t)}getCmpDisplayStatus(){return this.cmpApiContext.cmpDisplayStatus}setCmpDisplayStatus(t){this.cmpApiContext.cmpDisplayStatus=t,this.cmpApiContext.eventQueue.exec("cmpDisplayStatus",t)}getSignalStatus(){return this.cmpApiContext.signalStatus}setSignalStatus(t){this.cmpApiContext.signalStatus=t,this.cmpApiContext.eventQueue.exec("signalStatus",t)}getApplicableSections(){return this.cmpApiContext.applicableSections}setApplicableSections(t){this.cmpApiContext.applicableSections=t}getSupportedAPIs(){return this.cmpApiContext.supportedAPIs}setSupportedAPIs(t){this.cmpApiContext.supportedAPIs=t}setGppString(t){this.cmpApiContext.gppModel.decode(t)}getGppString(){return this.cmpApiContext.gppModel.encode()}setSectionString(t,e){this.cmpApiContext.gppModel.decodeSection(t,e)}setSectionStringById(t,e){this.setSectionString(Q.SECTION_ID_NAME_MAP.get(t),e)}getSectionString(t){return this.cmpApiContext.gppModel.encodeSection(t)}getSectionStringById(t){return this.getSectionString(Q.SECTION_ID_NAME_MAP.get(t))}setFieldValue(t,e,n){this.cmpApiContext.gppModel.setFieldValue(t,e,n)}setFieldValueBySectionId(t,e,n){this.setFieldValue(Q.SECTION_ID_NAME_MAP.get(t),e,n)}getFieldValue(t,e){return this.cmpApiContext.gppModel.getFieldValue(t,e)}getFieldValueBySectionId(t,e){return this.getFieldValue(Q.SECTION_ID_NAME_MAP.get(t),e)}getSection(t){return this.cmpApiContext.gppModel.getSection(t)}getSectionById(t){return this.getSection(Q.SECTION_ID_NAME_MAP.get(t))}hasSection(t){return this.cmpApiContext.gppModel.hasSection(t)}hasSectionId(t){return this.hasSection(Q.SECTION_ID_NAME_MAP.get(t))}deleteSection(t){this.cmpApiContext.gppModel.deleteSection(t)}deleteSectionById(t){this.deleteSection(Q.SECTION_ID_NAME_MAP.get(t))}clear(){this.cmpApiContext.gppModel.clear()}getObject(){return this.cmpApiContext.gppModel.toObject()}getGvlFromVendorList(t){return Ot.fromVendorList(t)}async getGvlFromUrl(t){return Ot.fromUrl(t)}}const ei=`  <div class="mb-3">
    <label for="header-version" class="form-label">Version</label>
    <input type="text" id="header-version" class="form-control" placeholder="1" value="1" disabled />
  </div>

  <div class="mt-3 mb-3 form-check">
    <input
      class="form-check-input"
      type="checkbox"
      value=""
      id="header-tcfeuv2"
      onclick="disableTcfEuV2(!this.checked)"
    />
    <label class="form-check-label" for="header-tcfeuv2">tcfeu</label>
  </div>

  <div class="mt-3 mb-3 form-check">
    <input
      class="form-check-input"
      type="checkbox"
      value=""
      id="header-tcfcav1"
      onclick="disableTcfCaV1(!this.checked)"
    />
    <label class="form-check-label" for="header-tcfcav1">tcfca</label>
  </div>

  <div class="mt-3 mb-3 form-check">
    <input
      class="form-check-input"
      type="checkbox"
      value=""
      id="header-uspv1"
      onclick="disableUspV1(!this.checked)"
    />
    <label class="form-check-label" for="header-uspv1">usp</label>
  </div>

  <div class="mt-3 mb-3 form-check">
    <input
      class="form-check-input"
      type="checkbox"
      value=""
      id="header-usnat"
      onclick="disableusnat(!this.checked)"
    />
    <label class="form-check-label" for="header-usnat">usnat</label>
  </div>

  <div class="mt-3 mb-3 form-check">
    <input
      class="form-check-input"
      type="checkbox"
      value=""
      id="header-usca"
      onclick="disableusca(!this.checked)"
    />
    <label class="form-check-label" for="header-usca">usca</label>
  </div>

  <div class="mt-3 mb-3 form-check">
    <input
      class="form-check-input"
      type="checkbox"
      value=""
      id="header-usva"
      onclick="disableusva(!this.checked)"
    />
    <label class="form-check-label" for="header-usva">usva</label>
  </div>

  <div class="mt-3 mb-3 form-check">
    <input
      class="form-check-input"
      type="checkbox"
      value=""
      id="header-usco"
      onclick="disableusco(!this.checked)"
    />
    <label class="form-check-label" for="header-usco">usco</label>
  </div>

  <div class="mt-3 mb-3 form-check">
    <input
      class="form-check-input"
      type="checkbox"
      value=""
      id="header-usut"
      onclick="disableusut(!this.checked)"
    />
    <label class="form-check-label" for="header-usut">usut</label>
  </div>

  <div class="mt-3 mb-3 form-check">
    <input
      class="form-check-input"
      type="checkbox"
      value=""
      id="header-usct"
      onclick="disableusct(!this.checked)"
    />
    <label class="form-check-label" for="header-usct">usct</label>
  </div>

  <div class="mt-3 mb-3 form-check">
    <input
      class="form-check-input"
      type="checkbox"
      value=""
      id="header-usfl"
      onclick="disableusfl(!this.checked)"
    />
    <label class="form-check-label" for="header-usfl">usfl</label>
  </div>

  <div class="mt-3 mb-3 form-check">
    <input
      class="form-check-input"
      type="checkbox"
      value=""
      id="header-usmt"
      onclick="disableusmt(!this.checked)"
    />
    <label class="form-check-label" for="header-usmt">usmt</label>
  </div>

  <div class="mt-3 mb-3 form-check">
    <input
      class="form-check-input"
      type="checkbox"
      value=""
      id="header-usor"
      onclick="disableusor(!this.checked)"
    />
    <label class="form-check-label" for="header-usor">usor</label>
  </div>

  <div class="mt-3 mb-3 form-check">
    <input
      class="form-check-input"
      type="checkbox"
      value=""
      id="header-ustx"
      onclick="disableustx(!this.checked)"
    />
    <label class="form-check-label" for="header-ustx">ustx</label>
  </div>

  <div class="mt-3 mb-3 form-check">
    <input
      class="form-check-input"
      type="checkbox"
      value=""
      id="header-usde"
      onclick="disableusde(!this.checked)"
    />
    <label class="form-check-label" for="header-usde">usde</label>
  </div>

  <div class="mt-3 mb-3 form-check">
    <input
      class="form-check-input"
      type="checkbox"
      value=""
      id="header-usia"
      onclick="disableusia(!this.checked)"
    />
    <label class="form-check-label" for="header-usia">usia</label>
  </div>

  <div class="mt-3 mb-3 form-check">
    <input
      class="form-check-input"
      type="checkbox"
      value=""
      id="header-usne"
      onclick="disableusne(!this.checked)"
    />
    <label class="form-check-label" for="header-usne">usne</label>
  </div>

  <div class="mt-3 mb-3 form-check">
    <input
      class="form-check-input"
      type="checkbox"
      value=""
      id="header-usnh"
      onclick="disableusnh(!this.checked)"
    />
    <label class="form-check-label" for="header-usnh">usnh</label>
  </div>

  <div class="mt-3 mb-3 form-check">
    <input
      class="form-check-input"
      type="checkbox"
      value=""
      id="header-usnj"
      onclick="disableusnj(!this.checked)"
    />
    <label class="form-check-label" for="header-usnj">usnj</label>
  </div>

  <div class="mt-3 mb-3 form-check">
    <input
      class="form-check-input"
      type="checkbox"
      value=""
      id="header-ustn"
      onclick="disableustn(!this.checked)"
    />
    <label class="form-check-label" for="header-ustn">ustn</label>
  </div>

  <div class="mt-3 mb-3 form-check">
    <input
      class="form-check-input"
      type="checkbox"
      value=""
      id="header-usmn"
      onclick="disableusmn(!this.checked)"
    />
    <label class="form-check-label" for="header-usmn">usmn</label>
  </div>
`,ti=`  <div class="mt-3 mb-3 form-check">
    <input
      class="form-check-input"
      type="checkbox"
      value=""
      id="tcfeuv2-included"
      onclick="disableTcfEuV2(!this.checked)"
    />
    <label class="form-check-label" for="tcfeuv2-included">Included</label>
  </div>
  <div class="mb-3">
    <label for="tcfeuv2-version" class="form-label">Version</label>
    <input type="text" id="tcfeuv2-version" class="form-control" placeholder="2" value="2" disabled />
  </div>
  <div class="mb-3">
    <label class="radio-inline control-label">Policy Version</label>
    <div class="form-check form-check-inline">
      <input class="form-check-input" type="radio" name="tcfeuv2-policy-version" id="tcfeuv2-policy-version-2" value="2" onclick="tcfEuV2PolicyVersionChanged(2)" disabled>
      <label class="form-check-label" for="tcfeuv2-policy-version-2">2</label>
    </div>
    <div class="form-check form-check-inline">
      <input class="form-check-input" type="radio" name="tcfeuv2-policy-version" id="tcfeuv2-policy-version-4" value="4" onclick="tcfEuV2PolicyVersionChanged(4)" disabled checked>
      <label class="form-check-label" for="tcfeuv2-policy-version-4">4</label>
    </div>
  </div>
  <div class="mb-3">
    <label for="tcfeuv2-vendor-list-version" class="form-label">Vendor List Version</label>
    <input
      type="number"
      min="0"
      max="4095"
      id="tcfeuv2-vendor-list-version"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="tcfeuv2-vendor-list-version-feedback" class="invalid-feedback">Valid values are 0-4095</div>
  </div>
  <div class="mb-3">
    <label for="tcfeuv2-created" class="form-label">Created</label>
    <input
      type="date"
      id="tcfeuv2-created"
      class="form-control"
      disabled
    />
    <div id="tcfeuv2-created-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="tcfeuv2-last-updated" class="form-label">Last Updated</label>
    <input
      type="date"
      id="tcfeuv2-last-updated"
      class="form-control"
      disabled
    />
    <div id="tcfeuv2-last-updated-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="tcfeuv2-cmp-id" class="form-label">CMP ID</label>
    <input
      type="number"
      min="0"
      max="4095"
      id="tcfeuv2-cmp-id"
      class="form-control"
      placeholder="1000"
      value="1000"
      disabled
    />
    <div id="tcfeuv2-cmp-id-feedback" class="invalid-feedback">Valid values are 0-4095</div>
  </div>
  <div class="mb-3">
    <label for="tcfeuv2-cmp-version" class="form-label">CMP Version</label>
    <input
      type="number"
      min="0"
      max="4095"
      id="tcfeuv2-cmp-version"
      class="form-control"
      placeholder="1"
      value="1"
      disabled
    />
    <div id="tcfeuv2-cmp-version-feedback" class="invalid-feedback">Valid values are 0-4095</div>
  </div>
  <div class="mb-3">
    <label for="tcfeuv2-consent-screen" class="form-label">Consent Screen</label>
    <input
      type="number"
      min="0"
      max="63"
      id="tcfeuv2-consent-screen"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="tcfeuv2-consent-screen-feedback" class="invalid-feedback">Valid values are 0-63</div>
  </div>
  <div class="mb-3">
    <label for="tcfeuv2-consent-language" class="form-label">Consent Language</label>
    <select id="tcfeuv2-consent-language" class="form-select" disabled>
    </select>
  </div>
  <div class="mb-3">
    <input class="form-check-input" type="checkbox" value="" id="tcfeuv2-is-service-specific" checked disabled />
    <label class="form-check-label" for="tcfeuv2-is-service-specific">Is Service Specific</label>
  </div>
  <div class="mb-3">
    <input class="form-check-input" type="checkbox" value="" id="tcfeuv2-use-non-standard-stacks" disabled />
    <label class="form-check-label" for="tcfeuv2-use-non-standard-stacks">Publisher Uses Non-Standard Stacks</label>
  </div>
  <div class="mb-3">
    <label for="tcfeuv2-special-feature-optins" class="form-label">Special Feature Optins</label>
    <select id="tcfeuv2-special-feature-optins" class="form-select" multiple disabled>
    </select>
  </div>
  <div class="mb-3">
    <label for="tcfeuv2-purpose-consents" class="form-label">Purpose Consents</label>
    <select id="tcfeuv2-purpose-consents" class="form-select" size="11" multiple disabled>
    </select>
  </div>
  <div class="mb-3">
    <label for="tcfeuv2-purpose-legitimate-interests" class="form-label">Purpose Legitimate Interests</label>
    <select id="tcfeuv2-purpose-legitimate-interests" class="form-select" size="11" multiple disabled>
    </select>
  </div>
  <div class="mb-3">
    <input class="form-check-input" type="checkbox" value="" id="tcfeuv2-purpose-one-treatment" disabled />
    <label class="form-check-label" for="tcfeuv2-purpose-one-treatment">Special Purpose One Treatment</label>
  </div>
  <div class="mb-3">
    <label for="tcfeuv2-publisher-country-code" class="form-label">Publisher Country Code</label>
    <select id="tcfeuv2-publisher-country-code" class="form-select" disabled>
      <option value="AA">AA</option>
      <option value="AD">AD</option>
      <option value="AE">AE</option>
      <option value="AF">AF</option>
      <option value="AG">AG</option>
      <option value="AI">AI</option>
      <option value="AL">AL</option>
      <option value="AM">AM</option>
      <option value="AO">AO</option>
      <option value="AQ">AQ</option>
      <option value="AR">AR</option>
      <option value="AS">AS</option>
      <option value="AT">AT</option>
      <option value="AU">AU</option>
      <option value="AW">AW</option>
      <option value="AX">AX</option>
      <option value="AZ">AZ</option>
      <option value="BA">BA</option>
      <option value="BB">BB</option>
      <option value="BD">BD</option>
      <option value="BE">BE</option>
      <option value="BF">BF</option>
      <option value="BG">BG</option>
      <option value="BH">BH</option>
      <option value="BI">BI</option>
      <option value="BJ">BJ</option>
      <option value="BL">BL</option>
      <option value="BM">BM</option>
      <option value="BN">BN</option>
      <option value="BO">BO</option>
      <option value="BQ">BQ</option>
      <option value="BR">BR</option>
      <option value="BS">BS</option>
      <option value="BT">BT</option>
      <option value="BV">BV</option>
      <option value="BW">BW</option>
      <option value="BY">BY</option>
      <option value="BZ">BZ</option>
      <option value="CA">CA</option>
      <option value="CC">CC</option>
      <option value="CD">CD</option>
      <option value="CF">CF</option>
      <option value="CG">CG</option>
      <option value="CH">CH</option>
      <option value="CI">CI</option>
      <option value="CK">CK</option>
      <option value="CL">CL</option>
      <option value="CM">CM</option>
      <option value="CN">CN</option>
      <option value="CO">CO</option>
      <option value="CR">CR</option>
      <option value="CU">CU</option>
      <option value="CV">CV</option>
      <option value="CW">CW</option>
      <option value="CX">CX</option>
      <option value="CY">CY</option>
      <option value="CZ">CZ</option>
      <option value="DE">DE</option>
      <option value="DJ">DJ</option>
      <option value="DK">DK</option>
      <option value="DM">DM</option>
      <option value="DO">DO</option>
      <option value="DZ">DZ</option>
      <option value="EC">EC</option>
      <option value="EE">EE</option>
      <option value="EG">EG</option>
      <option value="EH">EH</option>
      <option value="ER">ER</option>
      <option value="ES">ES</option>
      <option value="ET">ET</option>
      <option value="FI">FI</option>
      <option value="FJ">FJ</option>
      <option value="FK">FK</option>
      <option value="FM">FM</option>
      <option value="FO">FO</option>
      <option value="FR">FR</option>
      <option value="GA">GA</option>
      <option value="GB">GB</option>
      <option value="GD">GD</option>
      <option value="GE">GE</option>
      <option value="GF">GF</option>
      <option value="GG">GG</option>
      <option value="GH">GH</option>
      <option value="GI">GI</option>
      <option value="GL">GL</option>
      <option value="GM">GM</option>
      <option value="GN">GN</option>
      <option value="GP">GP</option>
      <option value="GQ">GQ</option>
      <option value="GR">GR</option>
      <option value="GS">GS</option>
      <option value="GT">GT</option>
      <option value="GU">GU</option>
      <option value="GW">GW</option>
      <option value="GY">GY</option>
      <option value="HK">HK</option>
      <option value="HM">HM</option>
      <option value="HN">HN</option>
      <option value="HR">HR</option>
      <option value="HT">HT</option>
      <option value="HU">HU</option>
      <option value="ID">ID</option>
      <option value="IE">IE</option>
      <option value="IL">IL</option>
      <option value="IM">IM</option>
      <option value="IN">IN</option>
      <option value="IO">IO</option>
      <option value="IQ">IQ</option>
      <option value="IR">IR</option>
      <option value="IS">IS</option>
      <option value="IT">IT</option>
      <option value="JE">JE</option>
      <option value="JM">JM</option>
      <option value="JO">JO</option>
      <option value="JP">JP</option>
      <option value="KE">KE</option>
      <option value="KG">KG</option>
      <option value="KH">KH</option>
      <option value="KI">KI</option>
      <option value="KM">KM</option>
      <option value="KN">KN</option>
      <option value="KP">KP</option>
      <option value="KR">KR</option>
      <option value="KW">KW</option>
      <option value="KY">KY</option>
      <option value="KZ">KZ</option>
      <option value="LA">LA</option>
      <option value="LB">LB</option>
      <option value="LC">LC</option>
      <option value="LI">LI</option>
      <option value="LK">LK</option>
      <option value="LR">LR</option>
      <option value="LS">LS</option>
      <option value="LT">LT</option>
      <option value="LU">LU</option>
      <option value="LV">LV</option>
      <option value="LY">LY</option>
      <option value="MA">MA</option>
      <option value="MC">MC</option>
      <option value="MD">MD</option>
      <option value="ME">ME</option>
      <option value="MF">MF</option>
      <option value="MG">MG</option>
      <option value="MH">MH</option>
      <option value="MK">MK</option>
      <option value="ML">ML</option>
      <option value="MM">MM</option>
      <option value="MN">MN</option>
      <option value="MO">MO</option>
      <option value="MP">MP</option>
      <option value="MQ">MQ</option>
      <option value="MR">MR</option>
      <option value="MS">MS</option>
      <option value="MT">MT</option>
      <option value="MU">MU</option>
      <option value="MV">MV</option>
      <option value="MW">MW</option>
      <option value="MX">MX</option>
      <option value="MY">MY</option>
      <option value="MZ">MZ</option>
      <option value="NA">NA</option>
      <option value="NC">NC</option>
      <option value="NE">NE</option>
      <option value="NF">NF</option>
      <option value="NG">NG</option>
      <option value="NI">NI</option>
      <option value="NL">NL</option>
      <option value="NO">NO</option>
      <option value="NP">NP</option>
      <option value="NR">NR</option>
      <option value="NU">NU</option>
      <option value="NZ">NZ</option>
      <option value="OM">OM</option>
      <option value="PA">PA</option>
      <option value="PE">PE</option>
      <option value="PF">PF</option>
      <option value="PG">PG</option>
      <option value="PH">PH</option>
      <option value="PK">PK</option>
      <option value="PL">PL</option>
      <option value="PM">PM</option>
      <option value="PN">PN</option>
      <option value="PR">PR</option>
      <option value="PS">PS</option>
      <option value="PT">PT</option>
      <option value="PW">PW</option>
      <option value="PY">PY</option>
      <option value="QA">QA</option>
      <option value="RE">RE</option>
      <option value="RO">RO</option>
      <option value="RS">RS</option>
      <option value="RU">RU</option>
      <option value="RW">RW</option>
      <option value="SA">SA</option>
      <option value="SB">SB</option>
      <option value="SC">SC</option>
      <option value="SD">SD</option>
      <option value="SE">SE</option>
      <option value="SG">SG</option>
      <option value="SH">SH</option>
      <option value="SI">SI</option>
      <option value="SJ">SJ</option>
      <option value="SK">SK</option>
      <option value="SL">SL</option>
      <option value="SM">SM</option>
      <option value="SN">SN</option>
      <option value="SO">SO</option>
      <option value="SR">SR</option>
      <option value="SS">SS</option>
      <option value="ST">ST</option>
      <option value="SV">SV</option>
      <option value="SX">SX</option>
      <option value="SY">SY</option>
      <option value="SZ">SZ</option>
      <option value="TC">TC</option>
      <option value="TD">TD</option>
      <option value="TF">TF</option>
      <option value="TG">TG</option>
      <option value="TH">TH</option>
      <option value="TJ">TJ</option>
      <option value="TK">TK</option>
      <option value="TL">TL</option>
      <option value="TM">TM</option>
      <option value="TN">TN</option>
      <option value="TO">TO</option>
      <option value="TR">TR</option>
      <option value="TT">TT</option>
      <option value="TV">TV</option>
      <option value="TW">TW</option>
      <option value="TZ">TZ</option>
      <option value="UA">UA</option>
      <option value="UG">UG</option>
      <option value="UM">UM</option>
      <option value="US">US</option>
      <option value="UY">UY</option>
      <option value="UZ">UZ</option>
      <option value="VA">VA</option>
      <option value="VC">VC</option>
      <option value="VE">VE</option>
      <option value="VG">VG</option>
      <option value="VI">VI</option>
      <option value="VN">VN</option>
      <option value="VU">VU</option>
      <option value="WF">WF</option>
      <option value="WS">WS</option>
      <option value="YE">YE</option>
      <option value="YT">YT</option>
      <option value="ZA">ZA</option>
      <option value="ZM">ZM</option>
      <option value="ZW">ZW</option>
    </select>
  </div>
  <div class="mb-0">
    <label class="form-label">Vendor Consents</label>
  </div>
  <div class="mb-3">
    <div class="row">
      <div class="col-5">
        <label for="tcfeuv2-vendor-consents-available" class="form-label" style="width:100%; text-align:center">Available</label>
        <select id="tcfeuv2-vendor-consents-available" class="form-select" size="20" multiple disabled>
        </select>
      </div>
      <div class="col-2 d-flex flex-column justify-content-center">
        <button id="tcfeuv2-vendor-consents-include-button" class="btn btn-light" style="width:90%" onclick="includeVendors('tcfeuv2-vendor-consents')" disabled>&gt;&gt;</button>
        <button id="tcfeuv2-vendor-consents-remove-button" cclass="btn btn-light" style="width:90%" onclick="removeVendors('tcfeuv2-vendor-consents')" disabled>&lt;&lt;</button>
      </div>
      <div class="col-5">
        <label for="tcfeuv2-vendor-consents-included" class="form-label float-right" style="width:100%; text-align:center">Included</label>
        <select id="tcfeuv2-vendor-consents-included" class="form-select" size="20" multiple disabled>
        </select>
      </div>
    </div>
  </div>
  <div class="mb-0">
    <label class="form-label">Vendor Legitimate Interests</label>
  </div>
  <div class="mb-3">
    <div class="row">
      <div class="col-5">
        <label for="tcfeuv2-vendor-legitimate-interests-available" class="form-label" style="width:100%; text-align:center">Available</label>
        <select id="tcfeuv2-vendor-legitimate-interests-available" class="form-select" size="20" multiple disabled>
        </select>
      </div>
      <div class="col-2 d-flex flex-column justify-content-center">
        <button id="tcfeuv2-vendor-legitimate-interests-include-button" class="btn btn-light" style="width:90%" onclick="includeVendors('tcfeuv2-vendor-legitimate-interests')" disabled>&gt;&gt;</button>
        <button id="tcfeuv2-vendor-legitimate-interests-remove-button" class="btn btn-light" style="width:90%" onclick="removeVendors('tcfeuv2-vendor-legitimate-interests')" disabled>&lt;&lt;</button>
      </div>
      <div class="col-5">
        <label for="tcfeuv2-vendor-legitimate-interests-included" class="form-label float-right" style="width:100%; text-align:center">Included</label>
        <select id="tcfeuv2-vendor-legitimate-interests-included" class="form-select" size="20" multiple disabled>
        </select>
      </div>
    </div>
  </div>
  <div class="mb-0">
    <label class="form-label">Vendors Allowed</label>
  </div>
  <div class="mb-3">
    <div class="row">
      <div class="col-5">
        <label for="tcfeuv2-vendors-allowed-available" class="form-label" style="width:100%; text-align:center">Available</label>
        <select id="tcfeuv2-vendors-allowed-available" class="form-select" size="20" multiple disabled>
        </select>
      </div>
      <div class="col-2 d-flex flex-column justify-content-center">
        <button id="tcfeuv2-vendors-allowed-include-button" class="btn btn-light" style="width:90%" onclick="includeVendors('tcfeuv2-vendors-allowed')" disabled>&gt;&gt;</button>
        <button id="tcfeuv2-vendors-allowed-remove-button" class="btn btn-light" style="width:90%" onclick="removeVendors('tcfeuv2-vendors-allowed')" disabled>&lt;&lt;</button>
      </div>
      <div class="col-5">
        <label for="tcfeuv2-vendors-allowed-included" class="form-label float-right" style="width:100%; text-align:center">Included</label>
        <select id="tcfeuv2-vendors-allowed-included" class="form-select" size="20" multiple disabled>
        </select>
      </div>
    </div>
  </div>
  <div class="mb-0">
    <label class="form-label">Vendors Disclosed</label>
  </div>
  <div class="mb-3">
    <div class="row">
      <div class="col-5">
        <label for="tcfeuv2-vendors-disclosed-available" class="form-label" style="width:100%; text-align:center">Available</label>
        <select id="tcfeuv2-vendors-disclosed-available" class="form-select" size="20" multiple disabled>
        </select>
      </div>
      <div class="col-2 d-flex flex-column justify-content-center">
        <button id="tcfeuv2-vendors-disclosed-include-button" class="btn btn-light" style="width:90%" onclick="includeVendors('tcfeuv2-vendors-disclosed')" disabled>&gt;&gt;</button>
        <button id="tcfeuv2-vendors-disclosed-remove-button" class="btn btn-light" style="width:90%" onclick="removeVendors('tcfeuv2-vendors-disclosed')" disabled>&lt;&lt;</button>
      </div>
      <div class="col-5">
        <label for="tcfeuv2-vendors-disclosed-included" class="form-label float-right" style="width:100%; text-align:center">Included</label>
        <select id="tcfeuv2-vendors-disclosed-included" class="form-select" size="20" multiple disabled>
        </select>
      </div>
    </div>
  </div>
  <span id="tcfeuv2-publisher-restrictions-container" hidden="hidden">
    <div class="mb-0">
      <label class="form-label">Publisher Restrictions</label>
    </div>
    <div class="mb-3">
      <table class="table" id="tcfeuv2-publisher-restrictions-table">
        <thead>
          <th scope="col">Purpose ID</th>
          <th scope="col">Type</th>
          <th scope="col">Vendor Ids</th>
        </thead>
        <tbody id="tcfeuv2-publisher-restrictions-tbody">

        </tbody>
      </table>
    </div>
  </span>
`,ni=`  <div class="mt-3 mb-3 form-check">
    <input
      class="form-check-input"
      type="checkbox"
      value=""
      id="tcfcav1-included"
      onclick="disableTcfCaV1(!this.checked)"
    />
    <label class="form-check-label" for="tcfcav1-included">Included</label>
  </div>
  <div class="mb-3">
    <label for="tcfcav1-version" class="form-label">Version</label>
    <input type="text" id="tcfcav1-version" class="form-control" placeholder="1" value="1" disabled />
  </div>
  <div class="mb-3">
    <label class="radio-inline control-label">Policy Version</label>
    <div class="form-check form-check-inline">
      <input class="form-check-input" type="radio" name="tcfcav1-tcf-policy-version" id="tcfcav1-tcf-policy-version-2" value="2" onclick="tcfCaV1PolicyVersionChanged(2)" disabled checked>
      <label class="form-check-label" for="tcfcav1-tcf-policy-version-2">2</label>
    </div>
  </div>
  <div class="mb-3">
    <label for="tcfcav1-vendor-list-version" class="form-label">Vendor List Version</label>
    <input
      type="number"
      min="0"
      max="4095"
      id="tcfcav1-vendor-list-version"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="tcfcav1-vendor-list-version-feedback" class="invalid-feedback">Valid values are 0-4095</div>
  </div>
  <div class="mb-3">
    <label for="tcfcav1-created" class="form-label">Created</label>
    <input
      type="date"
      id="tcfcav1-created"
      class="form-control"
      disabled
    />
    <div id="tcfcav1-created-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="tcfcav1-last-updated" class="form-label">Last Updated</label>
    <input
      type="date"
      id="tcfcav1-last-updated"
      class="form-control"
      disabled
    />
    <div id="tcfcav1-last-updated-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="tcfcav1-cmp-id" class="form-label">CMP ID</label>
    <input
      type="number"
      min="0"
      max="4095"
      id="tcfcav1-cmp-id"
      class="form-control"
      placeholder="1000"
      value="1000"
      disabled
    />
    <div id="tcfcav1-cmp-id-feedback" class="invalid-feedback">Valid values are 0-4095</div>
  </div>
  <div class="mb-3">
    <label for="tcfcav1-cmp-version" class="form-label">CMP Version</label>
    <input
      type="number"
      min="0"
      max="4095"
      id="tcfcav1-cmp-version"
      class="form-control"
      placeholder="1"
      value="1"
      disabled
    />
    <div id="tcfcav1-cmp-version-feedback" class="invalid-feedback">Valid values are 0-4095</div>
  </div>
  <div class="mb-3">
    <label for="tcfcav1-consent-screen" class="form-label">Consent Screen</label>
    <input
      type="number"
      min="0"
      max="63"
      id="tcfcav1-consent-screen"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="tcfcav1-consent-screen-feedback" class="invalid-feedback">Valid values are 0-63</div>
  </div>
  <div class="mb-3">
    <label for="tcfcav1-consent-language" class="form-label">Consent Language</label>
    <select id="tcfcav1-consent-language" class="form-select" disabled>
    </select>
  </div>
  <div class="mb-3">
    <input class="form-check-input" type="checkbox" value="" id="tcfcav1-use-non-standard-stacks" disabled />
    <label class="form-check-label" for="tcfcav1-use-non-standard-stacks">Publisher Uses Non-Standard Stacks</label>
  </div>
  <div class="mb-3">
    <label for="tcfcav1-special-feature-express-consent" class="form-label">Special Feature Express Consent</label>
    <select id="tcfcav1-special-feature-express-consent" class="form-select" multiple disabled>
    </select>
  </div>
  <div class="mb-3">
    <label for="tcfcav1-purposes-express-consent" class="form-label">Purposes Express Consents</label>
    <select id="tcfcav1-purposes-express-consent" class="form-select" size="11" multiple disabled>
    </select>
  </div>
  <div class="mb-3">
    <label for="tcfcav1-purposes-implied-consent" class="form-label">Purposes Implied Consents</label>
    <select id="tcfcav1-purposes-implied-consent" class="form-select" size="11" multiple disabled>
    </select>
  </div>
  <div class="mb-0">
    <label class="form-label">Vendor Express Consent</label>
  </div>
  <div class="mb-3">
    <div class="row">
      <div class="col-5">
        <label for="tcfcav1-vendor-express-consent-available" class="form-label" style="width:100%; text-align:center">Available</label>
        <select id="tcfcav1-vendor-express-consent-available" class="form-select" size="20" multiple disabled>
        </select>
      </div>
      <div class="col-2 d-flex flex-column justify-content-center">
        <button id="tcfcav1-vendor-express-consent-include-button" class="btn btn-light" style="width:90%" onclick="includeVendors('tcfcav1-vendor-express-consent')" disabled>&gt;&gt;</button>
        <button id="tcfcav1-vendor-express-consent-remove-button" class="btn btn-light" style="width:90%" onclick="removeVendors('tcfcav1-vendor-express-consent')" disabled>&lt;&lt;</button>
      </div>
      <div class="col-5">
        <label for="tcfcav1-vendor-express-consent-included" class="form-label float-right" style="width:100%; text-align:center">Included</label>
        <select id="tcfcav1-vendor-express-consent-included" class="form-select" size="20" multiple disabled>
        </select>
      </div>
    </div>
  </div>
  <div class="mb-0">
    <label class="form-label">Vendor Implied Consent</label>
  </div>
  <div class="mb-3">
    <div class="row">
      <div class="col-5">
        <label for="tcfcav1-vendor-implied-consent-available" class="form-label" style="width:100%; text-align:center">Available</label>
        <select id="tcfcav1-vendor-implied-consent-available" class="form-select" size="20" multiple disabled>
        </select>
      </div>
      <div class="col-2 d-flex flex-column justify-content-center">
        <button id="tcfcav1-vendor-implied-consent-include-button" class="btn btn-light" style="width:90%" onclick="includeVendors('tcfcav1-vendor-implied-consent')" disabled>&gt;&gt;</button>
        <button id="tcfcav1-vendor-implied-consent-remove-button" class="btn btn-light" style="width:90%" onclick="removeVendors('tcfcav1-vendor-implied-consent')" disabled>&lt;&lt;</button>
      </div>
      <div class="col-5">
        <label for="tcfcav1-vendor-implied-consent-included" class="form-label float-right" style="width:100%; text-align:center">Included</label>
        <select id="tcfcav1-vendor-implied-consent-included" class="form-select" size="20" multiple disabled>
        </select>
      </div>
    </div>
  </div>
  <span id="tcfcav1-pub-restrictions-container" hidden="hidden">
    <div class="mb-0">
      <label class="form-label">Publisher Restrictions</label>
    </div>
    <div class="mb-3">
      <table class="table" id="tcfcav1-pub-restrictions-table">
        <thead>
          <th scope="col">Purpose ID</th>
          <th scope="col">Type</th>
          <th scope="col">Vendor Ids</th>
        </thead>
        <tbody id="tcfcav1-pub-restrictions-tbody">

        </tbody>
      </table>
    </div>
  </span>
`,si=`  <div class="mt-3 mb-3">
    <div class="form-check">
      <input
        class="form-check-input"
        type="checkbox"
        value=""
        id="uspv1-included"
        onclick="disableUspV1(!this.checked)"
      />
      <label class="form-check-label" for="uspv1-included">Included</label>
    </div>
  </div>
  <div class="mb-3">
    <label for="uspv1-version" class="form-label">Version</label>
    <input type="number" id="uspv1-version" class="form-control" placeholder="1" value="1" disabled />
  </div>
  <div class="mb-3">
    <label for="uspv1-notice" class="form-label">Notice</label>
    <select id="uspv1-notice" class="form-select" disabled>
      <option value="-">-</option>
      <option value="Y">Y</option>
      <option value="N">N</option>
    </select>
  </div>
  <div class="mb-3">
    <label for="uspv1-opt-out-sale" class="form-label">Opt Out Sale</label>
    <select id="uspv1-opt-out-sale" class="form-select" disabled>
      <option value="-">-</option>
      <option value="Y">Y</option>
      <option value="N">N</option>
    </select>
  </div>
  <div class="mb-3">
    <label for="uspv1-lspa-covered" class="form-label">LSPA Covered</label>
    <select id="uspv1-lspa-covered" class="form-select" disabled>
      <option value="-">-</option>
      <option value="Y">Y</option>
      <option value="N">N</option>
    </select>
  </div>
`,ii=`  <div class="mt-3 mb-3 form-check">
    <input
      class="form-check-input"
      type="checkbox"
      value=""
      id="usnat-included"
      onclick="disableusnat(!this.checked)"
    />
    <label class="form-check-label" for="usnat-included">Included</label>
  </div>
  <div class="mb-3">
    <label for="usnat-version" class="form-label">Version</label>
    <input type="number" id="usnat-version" class="form-control" placeholder="1" value="1" disabled />
  </div>
  <div class="mb-3">
    <label for="usnat-sharing-notice" class="form-label">Sharing Notice</label>
    <input
      type="number"
      min="0"
      max="2"
      id="usnat-sharing-notice"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usnat-sharing-notice-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="usnat-sale-opt-out-notice" class="form-label">Sale Opt Out Notice</label>
    <input
      type="number"
      min="0"
      max="2"
      id="usnat-sale-opt-out-notice"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usnat-sale-opt-out-notice-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="usnat-sharing-opt-out-notice" class="form-label">Sharing Opt Out Notice</label>
    <input
      type="number"
      min="0"
      max="2"
      id="usnat-sharing-opt-out-notice"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usnat-sharing-opt-out-notice-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="usnat-targeted-advertising-opt-out-notice" class="form-label"
      >Targeted Advertising Opt Out Notice</label
    >
    <input
      type="number"
      min="0"
      max="2"
      id="usnat-targeted-advertising-opt-out-notice"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usnat-targeted-advertising-opt-out-notice-feedback" class="invalid-feedback">
      Valid values are 0-2
    </div>
  </div>
  <div class="mb-3">
    <label for="usnat-sensitive-data-processing-opt-out-notice" class="form-label"
      >Sensitive Data Processing Opt Out Notice</label
    >
    <input
      type="number"
      min="0"
      max="2"
      id="usnat-sensitive-data-processing-opt-out-notice"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usnat-sensitive-data-processing-opt-out-notice-feedback" class="invalid-feedback">
      Valid values are 0-2
    </div>
  </div>
  <div class="mb-3">
    <label for="usnat-sensitive-data-limit-use-notice" class="form-label"
      >Sensitive Data Limit Use Notice</label
    >
    <input
      type="number"
      min="0"
      max="2"
      id="usnat-sensitive-data-limit-use-notice"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usnat-sensitive-data-limit-use-notice-feedback" class="invalid-feedback">
      Valid values are 0-2
    </div>
  </div>
  <div class="mb-3">
    <label for="usnat-sale-opt-out" class="form-label">Sale Opt Out</label>
    <input
      type="number"
      min="0"
      max="2"
      id="usnat-sale-opt-out"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usnat-sale-opt-out-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="usnat-sharing-opt-out" class="form-label">Sharing Opt Out</label>
    <input
      type="number"
      min="0"
      max="2"
      id="usnat-sharing-opt-out"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usnat-sharing-opt-out-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="usnat-targeted-advertising-opt-out" class="form-label"
      >Targeted Advertising Opt Out</label
    >
    <input
      type="number"
      min="0"
      max="2"
      id="usnat-targeted-advertising-opt-out"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usnat-targeted-advertising-opt-out-feedback" class="invalid-feedback">
      Valid values are 0-2
    </div>
  </div>
  <div class="mb-3">
    <label for="usnat-sensitive-data-processing-0" class="form-label">Sensitive Data Processing</label>
    <div class="input-group">
      <input
        type="number"
        min="0"
        max="2"
        id="usnat-sensitive-data-processing-0"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usnat-sensitive-data-processing-1"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usnat-sensitive-data-processing-2"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usnat-sensitive-data-processing-3"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usnat-sensitive-data-processing-4"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usnat-sensitive-data-processing-5"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usnat-sensitive-data-processing-6"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usnat-sensitive-data-processing-7"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usnat-sensitive-data-processing-8"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usnat-sensitive-data-processing-9"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usnat-sensitive-data-processing-10"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usnat-sensitive-data-processing-11"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usnat-sensitive-data-processing-12"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usnat-sensitive-data-processing-13"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usnat-sensitive-data-processing-14"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usnat-sensitive-data-processing-15"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
    </div>
  </div>
  <div class="mb-3">
    <label for="usnat-known-child-sensitive-data-consents-0" class="form-label"
      >Known Child Sensitive Data Consents</label
    >
    <div class="input-group">
      <input
        type="number"
        min="0"
        max="2"
        id="usnat-known-child-sensitive-data-consents-0"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usnat-known-child-sensitive-data-consents-1"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usnat-known-child-sensitive-data-consents-2"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
    </div>
  </div>
  <div class="mb-3">
    <label for="usnat-personal-data-consents" class="form-label">Personal Data Consents</label>
    <input
      type="number"
      min="0"
      max="2"
      id="usnat-personal-data-consents"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usnat-personal-data-consents-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="usnat-mspa-covered-transaction" class="form-label">MSPA Covered Transaction</label>
    <input
      type="number"
      min="1"
      max="2"
      id="usnat-mspa-covered-transaction"
      class="form-control"
      placeholder="1"
      value="1"
      disabled
    />
    <div id="usnat-mspa-covered-transaction-feedback" class="invalid-feedback">Valid values are 1-2</div>
  </div>
  <div class="mb-3">
    <label for="usnat-mspa-opt-out-option-mode" class="form-label">MSPA Opt Out Option Mode</label>
    <input
      type="number"
      min="0"
      max="2"
      id="usnat-mspa-opt-out-option-mode"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usnat-mspa-opt-out-option-mode-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="usnat-mspa-service-provider-mode" class="form-label">MSPA Service Provider Mode</label>
    <input
      type="number"
      min="0"
      max="2"
      id="usnat-mspa-service-provider-mode"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usnat-mspa-service-provider-mode-feedback" class="invalid-feedback">
      Valid values are 0-2
    </div>
  </div>
  <div class="mb-3 form-check">
    <input class="form-check-input" type="checkbox" value="" id="usnat-gpc-segment-included" checked disabled/>
    <label class="form-check-label" for="usnat-gpc-segment-included">GPC Segment Included</label>
  </div>
  <div class="mb-3 form-check">
    <input class="form-check-input" type="checkbox" value="" id="usnat-gpc" disabled />
    <label class="form-check-label" for="usnat-gpc">GPC Enabled</label>
  </div>
`,ai=`  <div class="mt-3 mb-3 form-check">
    <input
      class="form-check-input"
      type="checkbox"
      value=""
      id="usca-included"
      onclick="disableusca(!this.checked)"
    />
    <label class="form-check-label" for="usca-included">Included</label>
  </div>
  <div class="mb-3">
    <label for="usca-version" class="form-label">Version</label>
    <input type="text" id="usca-version" class="form-control" placeholder="1" value="1" disabled />
  </div>
  <div class="mb-3">
    <label for="usca-sale-opt-out-notice" class="form-label">Sale Opt Out Notice</label>
    <input
      type="number"
      min="0"
      max="2"
      id="usca-sale-opt-out-notice"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usca-sale-opt-out-notice-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="usca-sharing-opt-out-notice" class="form-label">Sharing Opt Out Notice</label>
    <input
      type="number"
      min="0"
      max="2"
      id="usca-sharing-opt-out-notice"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usca-sharing-opt-out-notice-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="usca-sensitive-data-limit-use-notice" class="form-label"
      >Sensitive Data Limit Use Notice</label
    >
    <input
      type="number"
      min="0"
      max="2"
      id="usca-sensitive-data-limit-use-notice"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usca-sensitive-data-limit-use-notice-feedback" class="invalid-feedback">
      Valid values are 0-2
    </div>
  </div>
  <div class="mb-3">
    <label for="usca-sale-opt-out" class="form-label">Sale Opt Out</label>
    <input
      type="number"
      min="0"
      max="2"
      id="usca-sale-opt-out"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usca-sale-opt-out-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="usca-sharing-opt-out" class="form-label">Sharing Opt Out</label>
    <input
      type="number"
      min="0"
      max="2"
      id="usca-sharing-opt-out"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usca-sharing-opt-out-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="usca-sensitive-data-processing-0" class="form-label">Sensitive Data Processing</label>
    <div class="input-group">
      <input
        type="number"
        min="0"
        max="2"
        id="usca-sensitive-data-processing-0"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usca-sensitive-data-processing-1"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usca-sensitive-data-processing-2"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usca-sensitive-data-processing-3"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usca-sensitive-data-processing-4"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usca-sensitive-data-processing-5"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usca-sensitive-data-processing-6"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usca-sensitive-data-processing-7"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usca-sensitive-data-processing-8"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
    </div>
  </div>
  <div class="mb-3">
    <label for="usca-known-child-sensitive-data-consents-0" class="form-label"
      >Known Child Sensitive Data Consents</label
    >
    <div class="input-group">
      <input
        type="number"
        min="0"
        max="2"
        id="usca-known-child-sensitive-data-consents-0"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usca-known-child-sensitive-data-consents-1"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
    </div>
  </div>
  <div class="mb-3">
    <label for="usca-personal-data-consents" class="form-label">Personal Data Consents</label>
    <input
      type="number"
      min="0"
      max="2"
      id="usca-personal-data-consents"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usca-personal-data-consents-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="usca-mspa-covered-transaction" class="form-label">MSPA Covered Transaction</label>
    <input
      type="number"
      min="1"
      max="2"
      id="usca-mspa-covered-transaction"
      class="form-control"
      placeholder="1"
      value="1"
      disabled
    />
    <div id="usca-mspa-covered-transaction-feedback" class="invalid-feedback">Valid values are 1-2</div>
  </div>
  <div class="mb-3">
    <label for="usca-mspa-opt-out-option-mode" class="form-label">MSPA Opt Out Option Mode</label>
    <input
      type="number"
      min="0"
      max="2"
      id="usca-mspa-opt-out-option-mode"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usca-mspa-opt-out-option-mode-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="usca-mspa-service-provider-mode" class="form-label">MSPA Service Provider Mode</label>
    <input
      type="number"
      min="0"
      max="2"
      id="usca-mspa-service-provider-mode"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usca-mspa-service-provider-mode-feedback" class="invalid-feedback">
      Valid values are 0-2
    </div>
  </div>
  <div class="mb-3 form-check">
    <input class="form-check-input" type="checkbox" value="" id="usca-gpc-segment-included" checked disabled/>
    <label class="form-check-label" for="usca-gpc-segment-included">GPC Segment Included</label>
  </div>
  <div class="mb-3 form-check">
    <input class="form-check-input" type="checkbox" value="" id="usca-gpc" disabled />
    <label class="form-check-label" for="usca-gpc">GPC Enabled</label>
  </div>
`,oi=`  <div class="mt-3 mb-3 form-check">
    <input
      class="form-check-input"
      type="checkbox"
      value=""
      id="usva-included"
      onclick="disableusva(!this.checked)"
    />
    <label class="form-check-label" for="usva-included">Included</label>
  </div>
  <div class="mb-3">
    <label for="usva-version" class="form-label">Version</label>
    <input type="text" id="usva-version" class="form-control" placeholder="1" value="1" disabled />
  </div>
  <div class="mb-3">
    <label for="usva-sharing-notice" class="form-label">Sharing Notice</label>
    <input
      type="number"
      min="0"
      max="2"
      id="usva-sharing-notice"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usva-sharing-notice-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="usva-sale-opt-out-notice" class="form-label">Sale Opt Out Notice</label>
    <input
      type="number"
      min="0"
      max="2"
      id="usva-sale-opt-out-notice"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usva-sale-opt-out-notice-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="usva-targeted-advertising-opt-out-notice" class="form-label"
      >Targeted Advertising Opt Out Notice</label
    >
    <input
      type="number"
      min="0"
      max="2"
      id="usva-targeted-advertising-opt-out-notice"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usva-targeted-advertising-opt-out-notice-feedback" class="invalid-feedback">
      Valid values are 0-2
    </div>
  </div>
  <div class="mb-3">
    <label for="usva-sale-opt-out" class="form-label">Sale Opt Out</label>
    <input
      type="number"
      min="0"
      max="2"
      id="usva-sale-opt-out"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usva-sale-opt-out-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="usva-targeted-advertising-opt-out" class="form-label"
      >Targeted Advertising Opt Out</label
    >
    <input
      type="number"
      min="0"
      max="2"
      id="usva-targeted-advertising-opt-out"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usva-targeted-advertising-opt-out-feedback" class="invalid-feedback">
      Valid values are 0-2
    </div>
  </div>
  <div class="mb-3">
    <label for="usva-sensitive-data-processing-0" class="form-label">Sensitive Data Processing</label>
    <div class="input-group">
      <input
        type="number"
        min="0"
        max="2"
        id="usva-sensitive-data-processing-0"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usva-sensitive-data-processing-1"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usva-sensitive-data-processing-2"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usva-sensitive-data-processing-3"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usva-sensitive-data-processing-4"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usva-sensitive-data-processing-5"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usva-sensitive-data-processing-6"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usva-sensitive-data-processing-7"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
    </div>
  </div>
  <div class="mb-3">
    <label for="usva-known-child-sensitive-data-consents" class="form-label"
      >Known Child Sensitive Data Consents</label
    >
    <input
      type="number"
      min="0"
      max="2"
      id="usva-known-child-sensitive-data-consents"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usva-known-child-sensitive-data-consents-feedback" class="invalid-feedback">
      Valid values are 0-2
    </div>
  </div>
  <div class="mb-3">
    <label for="usva-mspa-covered-transaction" class="form-label">MSPA Covered Transaction</label>
    <input
      type="number"
      min="1"
      max="2"
      id="usva-mspa-covered-transaction"
      class="form-control"
      placeholder="1"
      value="1"
      disabled
    />
    <div id="usva-mspa-covered-transaction-feedback" class="invalid-feedback">Valid values are 1-2</div>
  </div>
  <div class="mb-3">
    <label for="usva-mspa-opt-out-option-mode" class="form-label">MSPA Opt Out Option Mode</label>
    <input
      type="number"
      min="0"
      max="2"
      id="usva-mspa-opt-out-option-mode"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usva-mspa-opt-out-option-mode-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="usva-mspa-service-provider-mode" class="form-label">MSPA Service Provider Mode</label>
    <input
      type="number"
      min="0"
      max="2"
      id="usva-mspa-service-provider-mode"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usva-mspa-service-provider-mode-feedback" class="invalid-feedback">
      Valid values are 0-2
    </div>
  </div>
`,li=`  <div class="mt-3 mb-3 form-check">
    <input
      class="form-check-input"
      type="checkbox"
      value=""
      id="usco-included"
      onclick="disableusco(!this.checked)"
    />
    <label class="form-check-label" for="usco-included">Included</label>
  </div>
  <div class="mb-3">
    <label for="usco-version" class="form-label">Version</label>
    <input type="text" id="usco-version" class="form-control" placeholder="1" value="1" disabled />
  </div>
  <div class="mb-3">
    <label for="usco-sharing-notice" class="form-label">Sharing Notice</label>
    <input
      type="number"
      min="0"
      max="2"
      id="usco-sharing-notice"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usco-sharing-notice-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="usco-sale-opt-out-notice" class="form-label">Sale Opt Out Notice</label>
    <input
      type="number"
      min="0"
      max="2"
      id="usco-sale-opt-out-notice"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usco-sale-opt-out-notice-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="usco-targeted-advertising-opt-out-notice" class="form-label"
      >Targeted Advertising Opt Out Notice</label
    >
    <input
      type="number"
      min="0"
      max="2"
      id="usco-targeted-advertising-opt-out-notice"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usco-targeted-advertising-opt-out-notice-feedback" class="invalid-feedback">
      Valid values are 0-2
    </div>
  </div>
  <div class="mb-3">
    <label for="usco-sale-opt-out" class="form-label">Sale Opt Out</label>
    <input
      type="number"
      min="0"
      max="2"
      id="usco-sale-opt-out"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usco-sale-opt-out-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="usco-targeted-advertising-opt-out" class="form-label"
      >Targeted Advertising Opt Out</label
    >
    <input
      type="number"
      min="0"
      max="2"
      id="usco-targeted-advertising-opt-out"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usco-targeted-advertising-opt-out-feedback" class="invalid-feedback">
      Valid values are 0-2
    </div>
  </div>
  <div class="mb-3">
    <label for="usco-sensitive-data-processing-0" class="form-label">Sensitive Data Processing</label>
    <div class="input-group">
      <input
        type="number"
        min="0"
        max="2"
        id="usco-sensitive-data-processing-0"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usco-sensitive-data-processing-1"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usco-sensitive-data-processing-2"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usco-sensitive-data-processing-3"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usco-sensitive-data-processing-4"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usco-sensitive-data-processing-5"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usco-sensitive-data-processing-6"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
    </div>
  </div>
  <div class="mb-3">
    <label for="usco-known-child-sensitive-data-consents" class="form-label"
      >Known Child Sensitive Data Consents</label
    >
    <input
      type="number"
      min="0"
      max="2"
      id="usco-known-child-sensitive-data-consents"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usco-known-child-sensitive-data-consents-feedback" class="invalid-feedback">
      Valid values are 0-2
    </div>
  </div>
  <div class="mb-3">
    <label for="usco-mspa-covered-transaction" class="form-label">MSPA Covered Transaction</label>
    <input
      type="number"
      min="1"
      max="2"
      id="usco-mspa-covered-transaction"
      class="form-control"
      placeholder="1"
      value="1"
      disabled
    />
    <div id="usco-mspa-covered-transaction-feedback" class="invalid-feedback">Valid values are 1-2</div>
  </div>
  <div class="mb-3">
    <label for="usco-mspa-opt-out-option-mode" class="form-label">MSPA Opt Out Option Mode</label>
    <input
      type="number"
      min="0"
      max="2"
      id="usco-mspa-opt-out-option-mode"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usco-mspa-opt-out-option-mode-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="usco-mspa-service-provider-mode" class="form-label">MSPA Service Provider Mode</label>
    <input
      type="number"
      min="0"
      max="2"
      id="usco-mspa-service-provider-mode"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usco-mspa-service-provider-mode-feedback" class="invalid-feedback">
      Valid values are 0-2
    </div>
  </div>
  <div class="mb-3 form-check">
    <input class="form-check-input" type="checkbox" value="" id="usco-gpc-segment-included" checked disabled />
    <label class="form-check-label" for="usco-gpc-segment-included">GPC Segment Included</label>
  </div>
  <div class="mb-3 form-check">
    <input class="form-check-input" type="checkbox" value="" id="usco-gpc" disabled />
    <label class="form-check-label" for="usco-gpc">GPC Enabled</label>
  </div>
`,ci=`  <div class="mt-3 mb-3 form-check">
    <input
      class="form-check-input"
      type="checkbox"
      value=""
      id="usut-included"
      onclick="disableusut(!this.checked)"
    />
    <label class="form-check-label" for="usut-included">Included</label>
  </div>
  <div class="mb-3">
    <label for="usut-version" class="form-label">Version</label>
    <input type="text" id="usut-version" class="form-control" placeholder="1" value="1" disabled />
  </div>
  <div class="mb-3">
    <label for="usut-sharing-notice" class="form-label">Sharing Notice</label>
    <input
      type="number"
      min="0"
      max="2"
      id="usut-sharing-notice"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usut-sharing-notice-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="usut-sale-opt-out-notice" class="form-label">Sale Opt Out Notice</label>
    <input
      type="number"
      min="0"
      max="2"
      id="usut-sale-opt-out-notice"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usut-sale-opt-out-notice-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="usut-targeted-advertising-opt-out-notice" class="form-label"
      >Targeted Advertising Opt Out Notice</label
    >
    <input
      type="number"
      min="0"
      max="2"
      id="usut-targeted-advertising-opt-out-notice"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usut-targeted-advertising-opt-out-notice-feedback" class="invalid-feedback">
      Valid values are 0-2
    </div>
  </div>
  <div class="mb-3">
    <label for="usut-sensitive-data-processing-opt-out-notice" class="form-label"
      >Sensitive Data Processing Opt Out Notice</label
    >
    <input
      type="number"
      min="0"
      max="2"
      id="usut-sensitive-data-processing-opt-out-notice"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usut-sensitive-data-processing-opt-out-notice-feedback" class="invalid-feedback">
      Valid values are 0-2
    </div>
  </div>
  <div class="mb-3">
    <label for="usut-sale-opt-out" class="form-label">Sale Opt Out</label>
    <input
      type="number"
      min="0"
      max="2"
      id="usut-sale-opt-out"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usut-sale-opt-out-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="usut-targeted-advertising-opt-out" class="form-label"
      >Targeted Advertising Opt Out</label
    >
    <input
      type="number"
      min="0"
      max="2"
      id="usut-targeted-advertising-opt-out"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usut-targeted-advertising-opt-out-feedback" class="invalid-feedback">
      Valid values are 0-2
    </div>
  </div>
  <div class="mb-3">
    <label for="usut-sensitive-data-processing-0" class="form-label">Sensitive Data Processing</label>
    <div class="input-group">
      <input
        type="number"
        min="0"
        max="2"
        id="usut-sensitive-data-processing-0"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usut-sensitive-data-processing-1"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usut-sensitive-data-processing-2"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usut-sensitive-data-processing-3"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usut-sensitive-data-processing-4"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usut-sensitive-data-processing-5"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usut-sensitive-data-processing-6"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usut-sensitive-data-processing-7"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
    </div>
  </div>
  <div class="mb-3">
    <label for="usut-known-child-sensitive-data-consents" class="form-label"
      >Known Child Sensitive Data Consents</label
    >
    <input
      type="number"
      min="0"
      max="2"
      id="usut-known-child-sensitive-data-consents"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usut-known-child-sensitive-data-consents-feedback" class="invalid-feedback">
      Valid values are 0-2
    </div>
  </div>
  <div class="mb-3">
    <label for="usut-mspa-covered-transaction" class="form-label">MSPA Covered Transaction</label>
    <input
      type="number"
      min="1"
      max="2"
      id="usut-mspa-covered-transaction"
      class="form-control"
      placeholder="1"
      value="1"
      disabled
    />
    <div id="usut-mspa-covered-transaction-feedback" class="invalid-feedback">Valid values are 1-2</div>
  </div>
  <div class="mb-3">
    <label for="usut-mspa-opt-out-option-mode" class="form-label">MSPA Opt Out Option Mode</label>
    <input
      type="number"
      min="0"
      max="2"
      id="usut-mspa-opt-out-option-mode"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usut-mspa-opt-out-option-mode-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="usut-mspa-service-provider-mode" class="form-label">MSPA Service Provider Mode</label>
    <input
      type="number"
      min="0"
      max="2"
      id="usut-mspa-service-provider-mode"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usut-mspa-service-provider-mode-feedback" class="invalid-feedback">
      Valid values are 0-2
    </div>
  </div>
`,di=`  <div class="mt-3 mb-3 form-check">
    <input
      class="form-check-input"
      type="checkbox"
      value=""
      id="usct-included"
      onclick="disableusct(!this.checked)"
    />
    <label class="form-check-label" for="usct-included">Included</label>
  </div>
  <div class="mb-3">
    <label for="usct-version" class="form-label">Version</label>
    <input type="text" id="usct-version" class="form-control" placeholder="1" value="1" disabled />
  </div>
  <div class="mb-3">
    <label for="usct-sharing-notice" class="form-label">Sharing Notice</label>
    <input
      type="number"
      min="0"
      max="2"
      id="usct-sharing-notice"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usct-sharing-notice-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="usct-sale-opt-out-notice" class="form-label">Sale Opt Out Notice</label>
    <input
      type="number"
      min="0"
      max="2"
      id="usct-sale-opt-out-notice"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usct-sale-opt-out-notice-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="usct-targeted-advertising-opt-out-notice" class="form-label"
      >Targeted Advertising Opt Out Notice</label
    >
    <input
      type="number"
      min="0"
      max="2"
      id="usct-targeted-advertising-opt-out-notice"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usct-targeted-advertising-opt-out-notice-feedback" class="invalid-feedback">
      Valid values are 0-2
    </div>
  </div>
  <div class="mb-3">
    <label for="usct-sale-opt-out" class="form-label">Sale Opt Out</label>
    <input
      type="number"
      min="0"
      max="2"
      id="usct-sale-opt-out"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usct-sale-opt-out-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="usct-targeted-advertising-opt-out" class="form-label"
      >Targeted Advertising Opt Out</label
    >
    <input
      type="number"
      min="0"
      max="2"
      id="usct-targeted-advertising-opt-out"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usct-targeted-advertising-opt-out-feedback" class="invalid-feedback">
      Valid values are 0-2
    </div>
  </div>
  <div class="mb-3">
    <label for="usct-sensitive-data-processing-0" class="form-label">Sensitive Data Processing</label>
    <div class="input-group">
      <input
        type="number"
        min="0"
        max="2"
        id="usct-sensitive-data-processing-0"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usct-sensitive-data-processing-1"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usct-sensitive-data-processing-2"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usct-sensitive-data-processing-3"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usct-sensitive-data-processing-4"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usct-sensitive-data-processing-5"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usct-sensitive-data-processing-6"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usct-sensitive-data-processing-7"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
    </div>
  </div>
  <div class="mb-3">
    <label for="usct-known-child-sensitive-data-consents-0" class="form-label"
      >Known Child Sensitive Data Consents</label
    >
    <div class="input-group">
      <input
        type="number"
        min="0"
        max="2"
        id="usct-known-child-sensitive-data-consents-0"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usct-known-child-sensitive-data-consents-1"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usct-known-child-sensitive-data-consents-2"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
    </div>
  </div>
  <div class="mb-3">
    <label for="usct-mspa-covered-transaction" class="form-label">MSPA Covered Transaction</label>
    <input
      type="number"
      min="1"
      max="2"
      id="usct-mspa-covered-transaction"
      class="form-control"
      placeholder="1"
      value="1"
      disabled
    />
    <div id="usct-mspa-covered-transaction-feedback" class="invalid-feedback">Valid values are 1-2</div>
  </div>
  <div class="mb-3">
    <label for="usct-mspa-opt-out-option-mode" class="form-label">MSPA Opt Out Option Mode</label>
    <input
      type="number"
      min="0"
      max="2"
      id="usct-mspa-opt-out-option-mode"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usct-mspa-opt-out-option-mode-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="usct-mspa-service-provider-mode" class="form-label">MSPA Service Provider Mode</label>
    <input
      type="number"
      min="0"
      max="2"
      id="usct-mspa-service-provider-mode"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usct-mspa-service-provider-mode-feedback" class="invalid-feedback">
      Valid values are 0-2
    </div>
  </div>
  <div class="mb-3 form-check">
    <input class="form-check-input" type="checkbox" value="" id="usct-gpc-segment-included" checked disabled />
    <label class="form-check-label" for="usct-gpc-segment-included">GPC Segment Included</label>
  </div>
  <div class="mb-3 form-check">
    <input class="form-check-input" type="checkbox" value="" id="usct-gpc" disabled />
    <label class="form-check-label" for="usct-gpc">GPC Enabled</label>
  </div>
`,ri=`  <div class="mt-3 mb-3 form-check">
    <input
      class="form-check-input"
      type="checkbox"
      value=""
      id="usfl-included"
      onclick="disableusfl(!this.checked)"
    />
    <label class="form-check-label" for="usfl-included">Included</label>
  </div>
  <div class="mb-3">
    <label for="usfl-version" class="form-label">Version</label>
    <input type="text" id="usfl-version" class="form-control" placeholder="1" value="1" disabled />
  </div>
  <div class="mb-3">
    <label for="usfl-processing-notice" class="form-label">Processing Notice</label>
    <input
      type="number"
      min="0"
      max="2"
      id="usfl-processing-notice"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usfl-processing-notice-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="usfl-sale-opt-out-notice" class="form-label">Sale Opt Out Notice</label>
    <input
      type="number"
      min="0"
      max="2"
      id="usfl-sale-opt-out-notice"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usfl-sale-opt-out-notice-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="usfl-targeted-advertising-opt-out-notice" class="form-label"
      >Targeted Advertising Opt Out Notice</label
    >
    <input
      type="number"
      min="0"
      max="2"
      id="usfl-targeted-advertising-opt-out-notice"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usfl-targeted-advertising-opt-out-notice-feedback" class="invalid-feedback">
      Valid values are 0-2
    </div>
  </div>
  <div class="mb-3">
    <label for="usfl-sale-opt-out" class="form-label">Sale Opt Out</label>
    <input
      type="number"
      min="0"
      max="2"
      id="usfl-sale-opt-out"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usfl-sale-opt-out-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="usfl-targeted-advertising-opt-out" class="form-label"
      >Targeted Advertising Opt Out</label
    >
    <input
      type="number"
      min="0"
      max="2"
      id="usfl-targeted-advertising-opt-out"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usfl-targeted-advertising-opt-out-feedback" class="invalid-feedback">
      Valid values are 0-2
    </div>
  </div>
  <div class="mb-3">
    <label for="usfl-sensitive-data-processing-0" class="form-label">Sensitive Data Processing</label>
    <div class="input-group">
      <input
        type="number"
        min="0"
        max="2"
        id="usfl-sensitive-data-processing-0"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usfl-sensitive-data-processing-1"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usfl-sensitive-data-processing-2"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usfl-sensitive-data-processing-3"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usfl-sensitive-data-processing-4"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usfl-sensitive-data-processing-5"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usfl-sensitive-data-processing-6"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usfl-sensitive-data-processing-7"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
    </div>
  </div>
  <div class="mb-3">
    <label for="usfl-known-child-sensitive-data-consents-0" class="form-label"
      >Known Child Sensitive Data Consents</label
    >
    <div class="input-group">
      <input
        type="number"
        min="0"
        max="2"
        id="usfl-known-child-sensitive-data-consents-0"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usfl-known-child-sensitive-data-consents-1"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usfl-known-child-sensitive-data-consents-2"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
    </div>
  </div>
  <div class="mb-3">
    <label for="usfl-additional-data-processing-consent" class="form-label">Additional Data Processing Consent</label>
    <input type="number" min="0" max="2" id="usfl-additional-data-processing-consent" class="form-control" placeholder="0" value="0" disabled />
    <div id="usfl-additional-data-processing-consent-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="usfl-mspa-covered-transaction" class="form-label">MSPA Covered Transaction</label>
    <input
      type="number"
      min="1"
      max="2"
      id="usfl-mspa-covered-transaction"
      class="form-control"
      placeholder="1"
      value="1"
      disabled
    />
    <div id="usfl-mspa-covered-transaction-feedback" class="invalid-feedback">Valid values are 1-2</div>
  </div>
  <div class="mb-3">
    <label for="usfl-mspa-opt-out-option-mode" class="form-label">MSPA Opt Out Option Mode</label>
    <input
      type="number"
      min="0"
      max="2"
      id="usfl-mspa-opt-out-option-mode"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usfl-mspa-opt-out-option-mode-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="usfl-mspa-service-provider-mode" class="form-label">MSPA Service Provider Mode</label>
    <input
      type="number"
      min="0"
      max="2"
      id="usfl-mspa-service-provider-mode"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usfl-mspa-service-provider-mode-feedback" class="invalid-feedback">
      Valid values are 0-2
    </div>
  </div>
`,ui=`  <div class="mt-3 mb-3 form-check">
    <input
      class="form-check-input"
      type="checkbox"
      value=""
      id="usmt-included"
      onclick="disableusmt(!this.checked)"
    />
    <label class="form-check-label" for="usmt-included">Included</label>
  </div>
  <div class="mb-3">
    <label for="usmt-version" class="form-label">Version</label>
    <input type="text" id="usmt-version" class="form-control" placeholder="1" value="1" disabled />
  </div>
  <div class="mb-3">
    <label for="usmt-sharing-notice" class="form-label">Sharing Notice</label>
    <input
      type="number"
      min="0"
      max="2"
      id="usmt-sharing-notice"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usmt-sharing-notice-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="usmt-sale-opt-out-notice" class="form-label">Sale Opt Out Notice</label>
    <input
      type="number"
      min="0"
      max="2"
      id="usmt-sale-opt-out-notice"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usmt-sale-opt-out-notice-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="usmt-targeted-advertising-opt-out-notice" class="form-label"
      >Targeted Advertising Opt Out Notice</label
    >
    <input
      type="number"
      min="0"
      max="2"
      id="usmt-targeted-advertising-opt-out-notice"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usmt-targeted-advertising-opt-out-notice-feedback" class="invalid-feedback">
      Valid values are 0-2
    </div>
  </div>
  <div class="mb-3">
    <label for="usmt-sale-opt-out" class="form-label">Sale Opt Out</label>
    <input
      type="number"
      min="0"
      max="2"
      id="usmt-sale-opt-out"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usmt-sale-opt-out-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="usmt-targeted-advertising-opt-out" class="form-label"
      >Targeted Advertising Opt Out</label
    >
    <input
      type="number"
      min="0"
      max="2"
      id="usmt-targeted-advertising-opt-out"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usmt-targeted-advertising-opt-out-feedback" class="invalid-feedback">
      Valid values are 0-2
    </div>
  </div>
  <div class="mb-3">
    <label for="usmt-sensitive-data-processing-0" class="form-label">Sensitive Data Processing</label>
    <div class="input-group">
      <input
        type="number"
        min="0"
        max="2"
        id="usmt-sensitive-data-processing-0"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usmt-sensitive-data-processing-1"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usmt-sensitive-data-processing-2"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usmt-sensitive-data-processing-3"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usmt-sensitive-data-processing-4"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usmt-sensitive-data-processing-5"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usmt-sensitive-data-processing-6"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usmt-sensitive-data-processing-7"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
    </div>
  </div>
  <div class="mb-3">
    <label for="usmt-known-child-sensitive-data-consents-0" class="form-label"
      >Known Child Sensitive Data Consents</label
    >
    <div class="input-group">
      <input
        type="number"
        min="0"
        max="2"
        id="usmt-known-child-sensitive-data-consents-0"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usmt-known-child-sensitive-data-consents-1"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usmt-known-child-sensitive-data-consents-2"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
    </div>
  </div>
  <div class="mb-3">
    <label for="usmt-additional-data-processing-consent" class="form-label">Additional Data Processing Consent</label>
    <input type="number" min="0" max="2" id="usmt-additional-data-processing-consent" class="form-control" placeholder="0" value="0" disabled />
    <div id="usmt-additional-data-processing-consent-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="usmt-mspa-covered-transaction" class="form-label">MSPA Covered Transaction</label>
    <input
      type="number"
      min="1"
      max="2"
      id="usmt-mspa-covered-transaction"
      class="form-control"
      placeholder="1"
      value="1"
      disabled
    />
    <div id="usmt-mspa-covered-transaction-feedback" class="invalid-feedback">Valid values are 1-2</div>
  </div>
  <div class="mb-3">
    <label for="usmt-mspa-opt-out-option-mode" class="form-label">MSPA Opt Out Option Mode</label>
    <input
      type="number"
      min="0"
      max="2"
      id="usmt-mspa-opt-out-option-mode"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usmt-mspa-opt-out-option-mode-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="usmt-mspa-service-provider-mode" class="form-label">MSPA Service Provider Mode</label>
    <input
      type="number"
      min="0"
      max="2"
      id="usmt-mspa-service-provider-mode"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usmt-mspa-service-provider-mode-feedback" class="invalid-feedback">
      Valid values are 0-2
    </div>
  </div>
  <div class="mb-3 form-check">
    <input class="form-check-input" type="checkbox" value="" id="usmt-gpc-segment-included" checked disabled />
    <label class="form-check-label" for="usmt-gpc-segment-included">GPC Segment Included</label>
  </div>
  <div class="mb-3 form-check">
    <input class="form-check-input" type="checkbox" value="" id="usmt-gpc" disabled />
    <label class="form-check-label" for="usmt-gpc">GPC Enabled</label>
  </div>
`,pi=`  <div class="mt-3 mb-3 form-check">
    <input
      class="form-check-input"
      type="checkbox"
      value=""
      id="usor-included"
      onclick="disableusor(!this.checked)"
    />
    <label class="form-check-label" for="usor-included">Included</label>
  </div>
  <div class="mb-3">
    <label for="usor-version" class="form-label">Version</label>
    <input type="text" id="usor-version" class="form-control" placeholder="1" value="1" disabled />
  </div>
  <div class="mb-3">
    <label for="usor-processing-notice" class="form-label">Processing Notice</label>
    <input
      type="number"
      min="0"
      max="2"
      id="usor-processing-notice"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usor-processing-notice-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="usor-sale-opt-out-notice" class="form-label">Sale Opt Out Notice</label>
    <input
      type="number"
      min="0"
      max="2"
      id="usor-sale-opt-out-notice"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usor-sale-opt-out-notice-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="usor-targeted-advertising-opt-out-notice" class="form-label"
      >Targeted Advertising Opt Out Notice</label
    >
    <input
      type="number"
      min="0"
      max="2"
      id="usor-targeted-advertising-opt-out-notice"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usor-targeted-advertising-opt-out-notice-feedback" class="invalid-feedback">
      Valid values are 0-2
    </div>
  </div>
  <div class="mb-3">
    <label for="usor-sale-opt-out" class="form-label">Sale Opt Out</label>
    <input
      type="number"
      min="0"
      max="2"
      id="usor-sale-opt-out"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usor-sale-opt-out-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="usor-targeted-advertising-opt-out" class="form-label"
      >Targeted Advertising Opt Out</label
    >
    <input
      type="number"
      min="0"
      max="2"
      id="usor-targeted-advertising-opt-out"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usor-targeted-advertising-opt-out-feedback" class="invalid-feedback">
      Valid values are 0-2
    </div>
  </div>
  <div class="mb-3">
    <label for="usor-sensitive-data-processing-0" class="form-label">Sensitive Data Processing</label>
    <div class="input-group">
      <input
        type="number"
        min="0"
        max="2"
        id="usor-sensitive-data-processing-0"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usor-sensitive-data-processing-1"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usor-sensitive-data-processing-2"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usor-sensitive-data-processing-3"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usor-sensitive-data-processing-4"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usor-sensitive-data-processing-5"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usor-sensitive-data-processing-6"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usor-sensitive-data-processing-7"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usor-sensitive-data-processing-8"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usor-sensitive-data-processing-9"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usor-sensitive-data-processing-10"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
    </div>
  </div>
  <div class="mb-3">
    <label for="usor-known-child-sensitive-data-consents-0" class="form-label"
      >Known Child Sensitive Data Consents</label
    >
    <div class="input-group">
      <input
        type="number"
        min="0"
        max="2"
        id="usor-known-child-sensitive-data-consents-0"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usor-known-child-sensitive-data-consents-1"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usor-known-child-sensitive-data-consents-2"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
    </div>
  </div>
  <div class="mb-3">
    <label for="usor-additional-data-processing-consent" class="form-label">Additional Data Processing Consent</label>
    <input type="number" min="0" max="2" id="usor-additional-data-processing-consent" class="form-control" placeholder="0" value="0" disabled />
    <div id="usor-additional-data-processing-consent-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="usor-mspa-covered-transaction" class="form-label">MSPA Covered Transaction</label>
    <input
      type="number"
      min="1"
      max="2"
      id="usor-mspa-covered-transaction"
      class="form-control"
      placeholder="1"
      value="1"
      disabled
    />
    <div id="usor-mspa-covered-transaction-feedback" class="invalid-feedback">Valid values are 1-2</div>
  </div>
  <div class="mb-3">
    <label for="usor-mspa-opt-out-option-mode" class="form-label">MSPA Opt Out Option Mode</label>
    <input
      type="number"
      min="0"
      max="2"
      id="usor-mspa-opt-out-option-mode"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usor-mspa-opt-out-option-mode-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="usor-mspa-service-provider-mode" class="form-label">MSPA Service Provider Mode</label>
    <input
      type="number"
      min="0"
      max="2"
      id="usor-mspa-service-provider-mode"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usor-mspa-service-provider-mode-feedback" class="invalid-feedback">
      Valid values are 0-2
    </div>
  </div>
  <div class="mb-3 form-check">
    <input class="form-check-input" type="checkbox" value="" id="usor-gpc-segment-included" checked disabled />
    <label class="form-check-label" for="usor-gpc-segment-included">GPC Segment Included</label>
  </div>
  <div class="mb-3 form-check">
    <input class="form-check-input" type="checkbox" value="" id="usor-gpc" disabled />
    <label class="form-check-label" for="usor-gpc">GPC Enabled</label>
  </div>
`,mi=`  <div class="mt-3 mb-3 form-check">
    <input
      class="form-check-input"
      type="checkbox"
      value=""
      id="ustx-included"
      onclick="disableustx(!this.checked)"
    />
    <label class="form-check-label" for="ustx-included">Included</label>
  </div>
  <div class="mb-3">
    <label for="ustx-version" class="form-label">Version</label>
    <input type="text" id="ustx-version" class="form-control" placeholder="1" value="1" disabled />
  </div>
  <div class="mb-3">
    <label for="ustx-processing-notice" class="form-label">Processing Notice</label>
    <input
      type="number"
      min="0"
      max="2"
      id="ustx-processing-notice"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="ustx-processing-notice-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="ustx-sale-opt-out-notice" class="form-label">Sale Opt Out Notice</label>
    <input
      type="number"
      min="0"
      max="2"
      id="ustx-sale-opt-out-notice"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="ustx-sale-opt-out-notice-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="ustx-targeted-advertising-opt-out-notice" class="form-label"
      >Targeted Advertising Opt Out Notice</label
    >
    <input
      type="number"
      min="0"
      max="2"
      id="ustx-targeted-advertising-opt-out-notice"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="ustx-targeted-advertising-opt-out-notice-feedback" class="invalid-feedback">
      Valid values are 0-2
    </div>
  </div>
  <div class="mb-3">
    <label for="ustx-sale-opt-out" class="form-label">Sale Opt Out</label>
    <input
      type="number"
      min="0"
      max="2"
      id="ustx-sale-opt-out"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="ustx-sale-opt-out-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="ustx-targeted-advertising-opt-out" class="form-label"
      >Targeted Advertising Opt Out</label
    >
    <input
      type="number"
      min="0"
      max="2"
      id="ustx-targeted-advertising-opt-out"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="ustx-targeted-advertising-opt-out-feedback" class="invalid-feedback">
      Valid values are 0-2
    </div>
  </div>
  <div class="mb-3">
    <label for="ustx-sensitive-data-processing-0" class="form-label">Sensitive Data Processing</label>
    <div class="input-group">
      <input
        type="number"
        min="0"
        max="2"
        id="ustx-sensitive-data-processing-0"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="ustx-sensitive-data-processing-1"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="ustx-sensitive-data-processing-2"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="ustx-sensitive-data-processing-3"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="ustx-sensitive-data-processing-4"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="ustx-sensitive-data-processing-5"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="ustx-sensitive-data-processing-6"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="ustx-sensitive-data-processing-7"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
    </div>
  </div>
  <div class="mb-3">
    <label for="ustx-known-child-sensitive-data-consents" class="form-label"
      >Known Child Sensitive Data Consents</label
    >
    <input
      type="number"
      min="0"
      max="2"
      id="ustx-known-child-sensitive-data-consents"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="ustx-known-child-sensitive-data-consents-feedback" class="invalid-feedback">
      Valid values are 0-2
    </div>
  </div>
  <div class="mb-3">
    <label for="ustx-additional-data-processing-consent" class="form-label">Additional Data Processing Consent</label>
    <input type="number" min="0" max="2" id="ustx-additional-data-processing-consent" class="form-control" placeholder="0" value="0" disabled />
    <div id="ustx-additional-data-processing-consent-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="ustx-mspa-covered-transaction" class="form-label">MSPA Covered Transaction</label>
    <input
      type="number"
      min="1"
      max="2"
      id="ustx-mspa-covered-transaction"
      class="form-control"
      placeholder="1"
      value="1"
      disabled
    />
    <div id="ustx-mspa-covered-transaction-feedback" class="invalid-feedback">Valid values are 1-2</div>
  </div>
  <div class="mb-3">
    <label for="ustx-mspa-opt-out-option-mode" class="form-label">MSPA Opt Out Option Mode</label>
    <input
      type="number"
      min="0"
      max="2"
      id="ustx-mspa-opt-out-option-mode"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="ustx-mspa-opt-out-option-mode-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="ustx-mspa-service-provider-mode" class="form-label">MSPA Service Provider Mode</label>
    <input
      type="number"
      min="0"
      max="2"
      id="ustx-mspa-service-provider-mode"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="ustx-mspa-service-provider-mode-feedback" class="invalid-feedback">
      Valid values are 0-2
    </div>
  </div>
  <div class="mb-3 form-check">
    <input class="form-check-input" type="checkbox" value="" id="ustx-gpc-segment-included" checked disabled />
    <label class="form-check-label" for="ustx-gpc-segment-included">GPC Segment Included</label>
  </div>
  <div class="mb-3 form-check">
    <input class="form-check-input" type="checkbox" value="" id="ustx-gpc" disabled />
    <label class="form-check-label" for="ustx-gpc">GPC Enabled</label>
  </div>
`,vi=`  <div class="mt-3 mb-3 form-check">
    <input
      class="form-check-input"
      type="checkbox"
      value=""
      id="usde-included"
      onclick="disableusde(!this.checked)"
    />
    <label class="form-check-label" for="usde-included">Included</label>
  </div>
  <div class="mb-3">
    <label for="usde-version" class="form-label">Version</label>
    <input type="text" id="usde-version" class="form-control" placeholder="1" value="1" disabled />
  </div>
  <div class="mb-3">
    <label for="usde-processing-notice" class="form-label">Processing Notice</label>
    <input
      type="number"
      min="0"
      max="2"
      id="usde-processing-notice"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usde-processing-notice-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="usde-sale-opt-out-notice" class="form-label">Sale Opt Out Notice</label>
    <input
      type="number"
      min="0"
      max="2"
      id="usde-sale-opt-out-notice"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usde-sale-opt-out-notice-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="usde-targeted-advertising-opt-out-notice" class="form-label"
      >Targeted Advertising Opt Out Notice</label
    >
    <input
      type="number"
      min="0"
      max="2"
      id="usde-targeted-advertising-opt-out-notice"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usde-targeted-advertising-opt-out-notice-feedback" class="invalid-feedback">
      Valid values are 0-2
    </div>
  </div>
  <div class="mb-3">
    <label for="usde-sale-opt-out" class="form-label">Sale Opt Out</label>
    <input
      type="number"
      min="0"
      max="2"
      id="usde-sale-opt-out"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usde-sale-opt-out-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="usde-targeted-advertising-opt-out" class="form-label"
      >Targeted Advertising Opt Out</label
    >
    <input
      type="number"
      min="0"
      max="2"
      id="usde-targeted-advertising-opt-out"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usde-targeted-advertising-opt-out-feedback" class="invalid-feedback">
      Valid values are 0-2
    </div>
  </div>
  <div class="mb-3">
    <label for="usde-sensitive-data-processing-0" class="form-label">Sensitive Data Processing</label>
    <div class="input-group">
      <input
        type="number"
        min="0"
        max="2"
        id="usde-sensitive-data-processing-0"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usde-sensitive-data-processing-1"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usde-sensitive-data-processing-2"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usde-sensitive-data-processing-3"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usde-sensitive-data-processing-4"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usde-sensitive-data-processing-5"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usde-sensitive-data-processing-6"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usde-sensitive-data-processing-7"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usde-sensitive-data-processing-8"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
    </div>
  </div>
  <div class="mb-3">
    <label for="usde-known-child-sensitive-data-consents-0" class="form-label"
      >Known Child Sensitive Data Consents</label
    >
    <div class="input-group">
      <input
        type="number"
        min="0"
        max="2"
        id="usde-known-child-sensitive-data-consents-0"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usde-known-child-sensitive-data-consents-1"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usde-known-child-sensitive-data-consents-2"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usde-known-child-sensitive-data-consents-3"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usde-known-child-sensitive-data-consents-4"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
    </div>
  </div>
  <div class="mb-3">
    <label for="usde-additional-data-processing-consent" class="form-label">Additional Data Processing Consent</label>
    <input type="number" min="0" max="2" id="usde-additional-data-processing-consent" class="form-control" placeholder="0" value="0" disabled />
    <div id="usde-additional-data-processing-consent-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="usde-mspa-covered-transaction" class="form-label">MSPA Covered Transaction</label>
    <input
      type="number"
      min="1"
      max="2"
      id="usde-mspa-covered-transaction"
      class="form-control"
      placeholder="1"
      value="1"
      disabled
    />
    <div id="usde-mspa-covered-transaction-feedback" class="invalid-feedback">Valid values are 1-2</div>
  </div>
  <div class="mb-3">
    <label for="usde-mspa-opt-out-option-mode" class="form-label">MSPA Opt Out Option Mode</label>
    <input
      type="number"
      min="0"
      max="2"
      id="usde-mspa-opt-out-option-mode"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usde-mspa-opt-out-option-mode-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="usde-mspa-service-provider-mode" class="form-label">MSPA Service Provider Mode</label>
    <input
      type="number"
      min="0"
      max="2"
      id="usde-mspa-service-provider-mode"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usde-mspa-service-provider-mode-feedback" class="invalid-feedback">
      Valid values are 0-2
    </div>
  </div>
  <div class="mb-3 form-check">
    <input class="form-check-input" type="checkbox" value="" id="usde-gpc-segment-included" checked disabled />
    <label class="form-check-label" for="usde-gpc-segment-included">GPC Segment Included</label>
  </div>
  <div class="mb-3 form-check">
    <input class="form-check-input" type="checkbox" value="" id="usde-gpc" disabled />
    <label class="form-check-label" for="usde-gpc">GPC Enabled</label>
  </div>
`,gi=`  <div class="mt-3 mb-3 form-check">
    <input
      class="form-check-input"
      type="checkbox"
      value=""
      id="usia-included"
      onclick="disableusia(!this.checked)"
    />
    <label class="form-check-label" for="usia-included">Included</label>
  </div>
  <div class="mb-3">
    <label for="usia-version" class="form-label">Version</label>
    <input type="text" id="usia-version" class="form-control" placeholder="1" value="1" disabled />
  </div>
  <div class="mb-3">
    <label for="usia-processing-notice" class="form-label">Processing Notice</label>
    <input
      type="number"
      min="0"
      max="2"
      id="usia-processing-notice"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usia-processing-notice-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="usia-sale-opt-out-notice" class="form-label">Sale Opt Out Notice</label>
    <input
      type="number"
      min="0"
      max="2"
      id="usia-sale-opt-out-notice"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usia-sale-opt-out-notice-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="usia-targeted-advertising-opt-out-notice" class="form-label"
      >Targeted Advertising Opt Out Notice</label
    >
    <input
      type="number"
      min="0"
      max="2"
      id="usia-targeted-advertising-opt-out-notice"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usia-targeted-advertising-opt-out-notice-feedback" class="invalid-feedback">
      Valid values are 0-2
    </div>
  </div>
  <div class="mb-3">
    <label for="usia-sensitive-data-opt-out-notice" class="form-label">Sensitive Data Opt Out Notice</label>
    <input
      type="number"
      min="0"
      max="2"
      id="usia-sensitive-data-opt-out-notice"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usia-sensitive-data-opt-out-notice-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="usia-sale-opt-out" class="form-label">Sale Opt Out</label>
    <input
      type="number"
      min="0"
      max="2"
      id="usia-sale-opt-out"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usia-sale-opt-out-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="usia-targeted-advertising-opt-out" class="form-label"
      >Targeted Advertising Opt Out</label
    >
    <input
      type="number"
      min="0"
      max="2"
      id="usia-targeted-advertising-opt-out"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usia-targeted-advertising-opt-out-feedback" class="invalid-feedback">
      Valid values are 0-2
    </div>
  </div>
  <div class="mb-3">
    <label for="usia-sensitive-data-processing-0" class="form-label">Sensitive Data Processing</label>
    <div class="input-group">
      <input
        type="number"
        min="0"
        max="2"
        id="usia-sensitive-data-processing-0"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usia-sensitive-data-processing-1"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usia-sensitive-data-processing-2"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usia-sensitive-data-processing-3"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usia-sensitive-data-processing-4"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usia-sensitive-data-processing-5"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usia-sensitive-data-processing-6"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usia-sensitive-data-processing-7"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
    </div>
  </div>
  <div class="mb-3">
    <label for="usia-known-child-sensitive-data-consents" class="form-label"
      >Known Child Sensitive Data Consents</label
    >
    <input
      type="number"
      min="0"
      max="2"
      id="usia-known-child-sensitive-data-consents"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usia-known-child-sensitive-data-consents-feedback" class="invalid-feedback">
      Valid values are 0-2
    </div>
  </div>
  <div class="mb-3">
    <label for="usia-mspa-covered-transaction" class="form-label">MSPA Covered Transaction</label>
    <input
      type="number"
      min="1"
      max="2"
      id="usia-mspa-covered-transaction"
      class="form-control"
      placeholder="1"
      value="1"
      disabled
    />
    <div id="usia-mspa-covered-transaction-feedback" class="invalid-feedback">Valid values are 1-2</div>
  </div>
  <div class="mb-3">
    <label for="usia-mspa-opt-out-option-mode" class="form-label">MSPA Opt Out Option Mode</label>
    <input
      type="number"
      min="0"
      max="2"
      id="usia-mspa-opt-out-option-mode"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usia-mspa-opt-out-option-mode-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="usia-mspa-service-provider-mode" class="form-label">MSPA Service Provider Mode</label>
    <input
      type="number"
      min="0"
      max="2"
      id="usia-mspa-service-provider-mode"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usia-mspa-service-provider-mode-feedback" class="invalid-feedback">
      Valid values are 0-2
    </div>
  </div>
  <div class="mb-3 form-check">
    <input class="form-check-input" type="checkbox" value="" id="usia-gpc-segment-included" checked disabled />
    <label class="form-check-label" for="usia-gpc-segment-included">GPC Segment Included</label>
  </div>
  <div class="mb-3 form-check">
    <input class="form-check-input" type="checkbox" value="" id="usia-gpc" disabled />
    <label class="form-check-label" for="usia-gpc">GPC Enabled</label>
  </div>
`,Ei=`  <div class="mt-3 mb-3 form-check">
    <input
      class="form-check-input"
      type="checkbox"
      value=""
      id="usne-included"
      onclick="disableusne(!this.checked)"
    />
    <label class="form-check-label" for="usne-included">Included</label>
  </div>
  <div class="mb-3">
    <label for="usne-version" class="form-label">Version</label>
    <input type="text" id="usne-version" class="form-control" placeholder="1" value="1" disabled />
  </div>
  <div class="mb-3">
    <label for="usne-processing-notice" class="form-label">Processing Notice</label>
    <input
      type="number"
      min="0"
      max="2"
      id="usne-processing-notice"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usne-processing-notice-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="usne-sale-opt-out-notice" class="form-label">Sale Opt Out Notice</label>
    <input
      type="number"
      min="0"
      max="2"
      id="usne-sale-opt-out-notice"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usne-sale-opt-out-notice-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="usne-targeted-advertising-opt-out-notice" class="form-label"
      >Targeted Advertising Opt Out Notice</label
    >
    <input
      type="number"
      min="0"
      max="2"
      id="usne-targeted-advertising-opt-out-notice"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usne-targeted-advertising-opt-out-notice-feedback" class="invalid-feedback">
      Valid values are 0-2
    </div>
  </div>
  <div class="mb-3">
    <label for="usne-sale-opt-out" class="form-label">Sale Opt Out</label>
    <input
      type="number"
      min="0"
      max="2"
      id="usne-sale-opt-out"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usne-sale-opt-out-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="usne-targeted-advertising-opt-out" class="form-label"
      >Targeted Advertising Opt Out</label
    >
    <input
      type="number"
      min="0"
      max="2"
      id="usne-targeted-advertising-opt-out"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usne-targeted-advertising-opt-out-feedback" class="invalid-feedback">
      Valid values are 0-2
    </div>
  </div>
  <div class="mb-3">
    <label for="usne-sensitive-data-processing-0" class="form-label">Sensitive Data Processing</label>
    <div class="input-group">
      <input
        type="number"
        min="0"
        max="2"
        id="usne-sensitive-data-processing-0"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usne-sensitive-data-processing-1"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usne-sensitive-data-processing-2"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usne-sensitive-data-processing-3"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usne-sensitive-data-processing-4"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usne-sensitive-data-processing-5"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usne-sensitive-data-processing-6"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usne-sensitive-data-processing-7"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
    </div>
  </div>
  <div class="mb-3">
    <label for="usne-known-child-sensitive-data-consents" class="form-label"
      >Known Child Sensitive Data Consents</label
    >
    <input
      type="number"
      min="0"
      max="2"
      id="usne-known-child-sensitive-data-consents"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usne-known-child-sensitive-data-consents-feedback" class="invalid-feedback">
      Valid values are 0-2
    </div>
  </div>
  <div class="mb-3">
    <label for="usne-additional-data-processing-consent" class="form-label">Additional Data Processing Consent</label>
    <input type="number" min="0" max="2" id="usne-additional-data-processing-consent" class="form-control" placeholder="0" value="0" disabled />
    <div id="usne-additional-data-processing-consent-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="usne-mspa-covered-transaction" class="form-label">MSPA Covered Transaction</label>
    <input
      type="number"
      min="1"
      max="2"
      id="usne-mspa-covered-transaction"
      class="form-control"
      placeholder="1"
      value="1"
      disabled
    />
    <div id="usne-mspa-covered-transaction-feedback" class="invalid-feedback">Valid values are 1-2</div>
  </div>
  <div class="mb-3">
    <label for="usne-mspa-opt-out-option-mode" class="form-label">MSPA Opt Out Option Mode</label>
    <input
      type="number"
      min="0"
      max="2"
      id="usne-mspa-opt-out-option-mode"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usne-mspa-opt-out-option-mode-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="usne-mspa-service-provider-mode" class="form-label">MSPA Service Provider Mode</label>
    <input
      type="number"
      min="0"
      max="2"
      id="usne-mspa-service-provider-mode"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usne-mspa-service-provider-mode-feedback" class="invalid-feedback">
      Valid values are 0-2
    </div>
  </div>
  <div class="mb-3 form-check">
    <input class="form-check-input" type="checkbox" value="" id="usne-gpc-segment-included" checked disabled />
    <label class="form-check-label" for="usne-gpc-segment-included">GPC Segment Included</label>
  </div>
  <div class="mb-3 form-check">
    <input class="form-check-input" type="checkbox" value="" id="usne-gpc" disabled />
    <label class="form-check-label" for="usne-gpc">GPC Enabled</label>
  </div>
`,hi=`  <div class="mt-3 mb-3 form-check">
    <input
      class="form-check-input"
      type="checkbox"
      value=""
      id="usnh-included"
      onclick="disableusnh(!this.checked)"
    />
    <label class="form-check-label" for="usnh-included">Included</label>
  </div>
  <div class="mb-3">
    <label for="usnh-version" class="form-label">Version</label>
    <input type="text" id="usnh-version" class="form-control" placeholder="1" value="1" disabled />
  </div>
  <div class="mb-3">
    <label for="usnh-processing-notice" class="form-label">Processing Notice</label>
    <input
      type="number"
      min="0"
      max="2"
      id="usnh-processing-notice"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usnh-processing-notice-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="usnh-sale-opt-out-notice" class="form-label">Sale Opt Out Notice</label>
    <input
      type="number"
      min="0"
      max="2"
      id="usnh-sale-opt-out-notice"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usnh-sale-opt-out-notice-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="usnh-targeted-advertising-opt-out-notice" class="form-label"
      >Targeted Advertising Opt Out Notice</label
    >
    <input
      type="number"
      min="0"
      max="2"
      id="usnh-targeted-advertising-opt-out-notice"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usnh-targeted-advertising-opt-out-notice-feedback" class="invalid-feedback">
      Valid values are 0-2
    </div>
  </div>
  <div class="mb-3">
    <label for="usnh-sale-opt-out" class="form-label">Sale Opt Out</label>
    <input
      type="number"
      min="0"
      max="2"
      id="usnh-sale-opt-out"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usnh-sale-opt-out-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="usnh-targeted-advertising-opt-out" class="form-label"
      >Targeted Advertising Opt Out</label
    >
    <input
      type="number"
      min="0"
      max="2"
      id="usnh-targeted-advertising-opt-out"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usnh-targeted-advertising-opt-out-feedback" class="invalid-feedback">
      Valid values are 0-2
    </div>
  </div>
  <div class="mb-3">
    <label for="usnh-sensitive-data-processing-0" class="form-label">Sensitive Data Processing</label>
    <div class="input-group">
      <input
        type="number"
        min="0"
        max="2"
        id="usnh-sensitive-data-processing-0"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usnh-sensitive-data-processing-1"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usnh-sensitive-data-processing-2"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usnh-sensitive-data-processing-3"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usnh-sensitive-data-processing-4"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usnh-sensitive-data-processing-5"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usnh-sensitive-data-processing-6"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usnh-sensitive-data-processing-7"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
    </div>
  </div>
  <div class="mb-3">
    <label for="usnh-known-child-sensitive-data-consents-0" class="form-label"
      >Known Child Sensitive Data Consents</label
    >
    <div class="input-group">
      <input
        type="number"
        min="0"
        max="2"
        id="usnh-known-child-sensitive-data-consents-0"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usnh-known-child-sensitive-data-consents-1"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usnh-known-child-sensitive-data-consents-2"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
    </div>
  </div>
  <div class="mb-3">
    <label for="usnh-additional-data-processing-consent" class="form-label">Additional Data Processing Consent</label>
    <input type="number" min="0" max="2" id="usnh-additional-data-processing-consent" class="form-control" placeholder="0" value="0" disabled />
    <div id="usnh-additional-data-processing-consent-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="usnh-mspa-covered-transaction" class="form-label">MSPA Covered Transaction</label>
    <input
      type="number"
      min="1"
      max="2"
      id="usnh-mspa-covered-transaction"
      class="form-control"
      placeholder="1"
      value="1"
      disabled
    />
    <div id="usnh-mspa-covered-transaction-feedback" class="invalid-feedback">Valid values are 1-2</div>
  </div>
  <div class="mb-3">
    <label for="usnh-mspa-opt-out-option-mode" class="form-label">MSPA Opt Out Option Mode</label>
    <input
      type="number"
      min="0"
      max="2"
      id="usnh-mspa-opt-out-option-mode"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usnh-mspa-opt-out-option-mode-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="usnh-mspa-service-provider-mode" class="form-label">MSPA Service Provider Mode</label>
    <input
      type="number"
      min="0"
      max="2"
      id="usnh-mspa-service-provider-mode"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usnh-mspa-service-provider-mode-feedback" class="invalid-feedback">
      Valid values are 0-2
    </div>
  </div>
  <div class="mb-3 form-check">
    <input class="form-check-input" type="checkbox" value="" id="usnh-gpc-segment-included" checked disabled />
    <label class="form-check-label" for="usnh-gpc-segment-included">GPC Segment Included</label>
  </div>
  <div class="mb-3 form-check">
    <input class="form-check-input" type="checkbox" value="" id="usnh-gpc" disabled />
    <label class="form-check-label" for="usnh-gpc">GPC Enabled</label>
  </div>
`,Si=`  <div class="mt-3 mb-3 form-check">
    <input
      class="form-check-input"
      type="checkbox"
      value=""
      id="usnj-included"
      onclick="disableusnj(!this.checked)"
    />
    <label class="form-check-label" for="usnj-included">Included</label>
  </div>
  <div class="mb-3">
    <label for="usnj-version" class="form-label">Version</label>
    <input type="text" id="usnj-version" class="form-control" placeholder="1" value="1" disabled />
  </div>
  <div class="mb-3">
    <label for="usnj-processing-notice" class="form-label">Processing Notice</label>
    <input
      type="number"
      min="0"
      max="2"
      id="usnj-processing-notice"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usnj-processing-notice-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="usnj-sale-opt-out-notice" class="form-label">Sale Opt Out Notice</label>
    <input
      type="number"
      min="0"
      max="2"
      id="usnj-sale-opt-out-notice"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usnj-sale-opt-out-notice-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="usnj-targeted-advertising-opt-out-notice" class="form-label"
      >Targeted Advertising Opt Out Notice</label
    >
    <input
      type="number"
      min="0"
      max="2"
      id="usnj-targeted-advertising-opt-out-notice"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usnj-targeted-advertising-opt-out-notice-feedback" class="invalid-feedback">
      Valid values are 0-2
    </div>
  </div>
  <div class="mb-3">
    <label for="usnj-sale-opt-out" class="form-label">Sale Opt Out</label>
    <input
      type="number"
      min="0"
      max="2"
      id="usnj-sale-opt-out"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usnj-sale-opt-out-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="usnj-targeted-advertising-opt-out" class="form-label"
      >Targeted Advertising Opt Out</label
    >
    <input
      type="number"
      min="0"
      max="2"
      id="usnj-targeted-advertising-opt-out"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usnj-targeted-advertising-opt-out-feedback" class="invalid-feedback">
      Valid values are 0-2
    </div>
  </div>
  <div class="mb-3">
    <label for="usnj-sensitive-data-processing-0" class="form-label">Sensitive Data Processing</label>
    <div class="input-group">
      <input
        type="number"
        min="0"
        max="2"
        id="usnj-sensitive-data-processing-0"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usnj-sensitive-data-processing-1"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usnj-sensitive-data-processing-2"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usnj-sensitive-data-processing-3"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usnj-sensitive-data-processing-4"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usnj-sensitive-data-processing-5"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usnj-sensitive-data-processing-6"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usnj-sensitive-data-processing-7"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usnj-sensitive-data-processing-8"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usnj-sensitive-data-processing-9"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
    </div>
  </div>
  <div class="mb-3">
    <label for="usnj-known-child-sensitive-data-consents-0" class="form-label"
      >Known Child Sensitive Data Consents</label
    >
    <div class="input-group">
      <input
        type="number"
        min="0"
        max="2"
        id="usnj-known-child-sensitive-data-consents-0"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usnj-known-child-sensitive-data-consents-1"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usnj-known-child-sensitive-data-consents-2"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usnj-known-child-sensitive-data-consents-3"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usnj-known-child-sensitive-data-consents-4"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
    </div>
  </div>
  <div class="mb-3">
    <label for="usnj-additional-data-processing-consent" class="form-label">Additional Data Processing Consent</label>
    <input type="number" min="0" max="2" id="usnj-additional-data-processing-consent" class="form-control" placeholder="0" value="0" disabled />
    <div id="usnj-additional-data-processing-consent-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="usnj-mspa-covered-transaction" class="form-label">MSPA Covered Transaction</label>
    <input
      type="number"
      min="1"
      max="2"
      id="usnj-mspa-covered-transaction"
      class="form-control"
      placeholder="1"
      value="1"
      disabled
    />
    <div id="usnj-mspa-covered-transaction-feedback" class="invalid-feedback">Valid values are 1-2</div>
  </div>
  <div class="mb-3">
    <label for="usnj-mspa-opt-out-option-mode" class="form-label">MSPA Opt Out Option Mode</label>
    <input
      type="number"
      min="0"
      max="2"
      id="usnj-mspa-opt-out-option-mode"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usnj-mspa-opt-out-option-mode-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="usnj-mspa-service-provider-mode" class="form-label">MSPA Service Provider Mode</label>
    <input
      type="number"
      min="0"
      max="2"
      id="usnj-mspa-service-provider-mode"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usnj-mspa-service-provider-mode-feedback" class="invalid-feedback">
      Valid values are 0-2
    </div>
  </div>
  <div class="mb-3 form-check">
    <input class="form-check-input" type="checkbox" value="" id="usnj-gpc-segment-included" checked disabled />
    <label class="form-check-label" for="usnj-gpc-segment-included">GPC Segment Included</label>
  </div>
  <div class="mb-3 form-check">
    <input class="form-check-input" type="checkbox" value="" id="usnj-gpc" disabled />
    <label class="form-check-label" for="usnj-gpc">GPC Enabled</label>
  </div>
`,bi=`  <div class="mt-3 mb-3 form-check">
    <input
      class="form-check-input"
      type="checkbox"
      value=""
      id="ustn-included"
      onclick="disableustn(!this.checked)"
    />
    <label class="form-check-label" for="ustn-included">Included</label>
  </div>
  <div class="mb-3">
    <label for="ustn-version" class="form-label">Version</label>
    <input type="text" id="ustn-version" class="form-control" placeholder="1" value="1" disabled />
  </div>
  <div class="mb-3">
    <label for="ustn-processing-notice" class="form-label">Processing Notice</label>
    <input
      type="number"
      min="0"
      max="2"
      id="ustn-processing-notice"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="ustn-processing-notice-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="ustn-sale-opt-out-notice" class="form-label">Sale Opt Out Notice</label>
    <input
      type="number"
      min="0"
      max="2"
      id="ustn-sale-opt-out-notice"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="ustn-sale-opt-out-notice-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="ustn-targeted-advertising-opt-out-notice" class="form-label"
      >Targeted Advertising Opt Out Notice</label
    >
    <input
      type="number"
      min="0"
      max="2"
      id="ustn-targeted-advertising-opt-out-notice"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="ustn-targeted-advertising-opt-out-notice-feedback" class="invalid-feedback">
      Valid values are 0-2
    </div>
  </div>
  <div class="mb-3">
    <label for="ustn-sale-opt-out" class="form-label">Sale Opt Out</label>
    <input
      type="number"
      min="0"
      max="2"
      id="ustn-sale-opt-out"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="ustn-sale-opt-out-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="ustn-targeted-advertising-opt-out" class="form-label"
      >Targeted Advertising Opt Out</label
    >
    <input
      type="number"
      min="0"
      max="2"
      id="ustn-targeted-advertising-opt-out"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="ustn-targeted-advertising-opt-out-feedback" class="invalid-feedback">
      Valid values are 0-2
    </div>
  </div>
  <div class="mb-3">
    <label for="ustn-sensitive-data-processing-0" class="form-label">Sensitive Data Processing</label>
    <div class="input-group">
      <input
        type="number"
        min="0"
        max="2"
        id="ustn-sensitive-data-processing-0"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="ustn-sensitive-data-processing-1"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="ustn-sensitive-data-processing-2"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="ustn-sensitive-data-processing-3"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="ustn-sensitive-data-processing-4"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="ustn-sensitive-data-processing-5"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="ustn-sensitive-data-processing-6"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="ustn-sensitive-data-processing-7"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
    </div>
  </div>
  <div class="mb-3">
    <label for="ustn-known-child-sensitive-data-consents" class="form-label"
      >Known Child Sensitive Data Consents</label
    >
    <input
      type="number"
      min="0"
      max="2"
      id="ustn-known-child-sensitive-data-consents"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="ustn-known-child-sensitive-data-consents-feedback" class="invalid-feedback">
      Valid values are 0-2
    </div>
  </div>
  <div class="mb-3">
    <label for="ustn-additional-data-processing-consent" class="form-label">Additional Data Processing Consent</label>
    <input type="number" min="0" max="2" id="ustn-additional-data-processing-consent" class="form-control" placeholder="0" value="0" disabled />
    <div id="ustn-additional-data-processing-consent-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="ustn-mspa-covered-transaction" class="form-label">MSPA Covered Transaction</label>
    <input
      type="number"
      min="1"
      max="2"
      id="ustn-mspa-covered-transaction"
      class="form-control"
      placeholder="1"
      value="1"
      disabled
    />
    <div id="ustn-mspa-covered-transaction-feedback" class="invalid-feedback">Valid values are 1-2</div>
  </div>
  <div class="mb-3">
    <label for="ustn-mspa-opt-out-option-mode" class="form-label">MSPA Opt Out Option Mode</label>
    <input
      type="number"
      min="0"
      max="2"
      id="ustn-mspa-opt-out-option-mode"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="ustn-mspa-opt-out-option-mode-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="ustn-mspa-service-provider-mode" class="form-label">MSPA Service Provider Mode</label>
    <input
      type="number"
      min="0"
      max="2"
      id="ustn-mspa-service-provider-mode"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="ustn-mspa-service-provider-mode-feedback" class="invalid-feedback">
      Valid values are 0-2
    </div>
  </div>
  <div class="mb-3 form-check">
    <input class="form-check-input" type="checkbox" value="" id="ustn-gpc-segment-included" checked disabled />
    <label class="form-check-label" for="ustn-gpc-segment-included">GPC Segment Included</label>
  </div>
  <div class="mb-3 form-check">
    <input class="form-check-input" type="checkbox" value="" id="ustn-gpc" disabled />
    <label class="form-check-label" for="ustn-gpc">GPC Enabled</label>
  </div>
`,fi=`<div class="mt-3 mb-3 form-check">
  <input
    class="form-check-input"
    type="checkbox"
    value=""
    id="usmn-included"
    onclick="disableusmn(!this.checked)"
  />
  <label class="form-check-label" for="usmn-included">Included</label>
</div>
<div class="mb-3">
  <label for="usmn-version" class="form-label">Version</label>
  <input type="text" id="usmn-version" class="form-control" placeholder="1" value="1" disabled />
</div>
<div class="mb-3">
  <label for="usmn-processing-notice" class="form-label">Processing Notice</label>
  <input
    type="number"
    min="0"
    max="2"
    id="usmn-processing-notice"
    class="form-control"
    placeholder="0"
    value="0"
    disabled
  />
  <div id="usmn-processing-notice-feedback" class="invalid-feedback">Valid values are 0-2</div>
</div>
<div class="mb-3">
  <label for="usmn-sale-opt-out-notice" class="form-label">Sale Opt Out Notice</label>
  <input
    type="number"
    min="0"
    max="2"
    id="usmn-sale-opt-out-notice"
    class="form-control"
    placeholder="0"
    value="0"
    disabled
  />
  <div id="usmn-sale-opt-out-notice-feedback" class="invalid-feedback">Valid values are 0-2</div>
</div>
<div class="mb-3">
  <label for="usmn-targeted-advertising-opt-out-notice" class="form-label"
    >Targeted Advertising Opt Out Notice</label
  >
  <input
    type="number"
    min="0"
    max="2"
    id="usmn-targeted-advertising-opt-out-notice"
    class="form-control"
    placeholder="0"
    value="0"
    disabled
  />
  <div id="usmn-targeted-advertising-opt-out-notice-feedback" class="invalid-feedback">
    Valid values are 0-2
  </div>
</div>
<div class="mb-3">
  <label for="usmn-sale-opt-out" class="form-label">Sale Opt Out</label>
  <input
    type="number"
    min="0"
    max="2"
    id="usmn-sale-opt-out"
    class="form-control"
    placeholder="0"
    value="0"
    disabled
  />
  <div id="usmn-sale-opt-out-feedback" class="invalid-feedback">Valid values are 0-2</div>
</div>
<div class="mb-3">
  <label for="usmn-targeted-advertising-opt-out" class="form-label"
    >Targeted Advertising Opt Out</label
  >
  <input
    type="number"
    min="0"
    max="2"
    id="usmn-targeted-advertising-opt-out"
    class="form-control"
    placeholder="0"
    value="0"
    disabled
  />
  <div id="usmn-targeted-advertising-opt-out-feedback" class="invalid-feedback">
    Valid values are 0-2
  </div>
</div>
<div class="mb-3">
  <label for="usmn-sensitive-data-processing-0" class="form-label">Sensitive Data Processing</label>
  <div class="input-group">
    <input type="number" min="0" max="2" id="usmn-sensitive-data-processing-0" class="form-control" placeholder="0" value="0" disabled />
    <input type="number" min="0" max="2" id="usmn-sensitive-data-processing-1" class="form-control" placeholder="0" value="0" disabled />
    <input type="number" min="0" max="2" id="usmn-sensitive-data-processing-2" class="form-control" placeholder="0" value="0" disabled />
    <input type="number" min="0" max="2" id="usmn-sensitive-data-processing-3" class="form-control" placeholder="0" value="0" disabled />
    <input type="number" min="0" max="2" id="usmn-sensitive-data-processing-4" class="form-control" placeholder="0" value="0" disabled />
    <input type="number" min="0" max="2" id="usmn-sensitive-data-processing-5" class="form-control" placeholder="0" value="0" disabled />
    <input type="number" min="0" max="2" id="usmn-sensitive-data-processing-6" class="form-control" placeholder="0" value="0" disabled />
    <input type="number" min="0" max="2" id="usmn-sensitive-data-processing-7" class="form-control" placeholder="0" value="0" disabled />
  </div>
</div>
<div class="mb-3">
  <label for="usmn-known-child-sensitive-data-consents" class="form-label"
    >Known Child Sensitive Data Consents</label
  >
  <input
    type="number"
    min="0"
    max="2"
    id="usmn-known-child-sensitive-data-consents"
    class="form-control"
    placeholder="0"
    value="0"
    disabled
  />
  <div id="usmn-known-child-sensitive-data-consents-feedback" class="invalid-feedback">
    Valid values are 0-2
  </div>
</div>
<div class="mb-3">
  <label for="usmn-additional-data-processing-consent" class="form-label"
    >Additional Data Processing Consent</label
  >
  <input
    type="number"
    min="0"
    max="2"
    id="usmn-additional-data-processing-consent"
    class="form-control"
    placeholder="0"
    value="0"
    disabled
  />
  <div id="usmn-additional-data-processing-consent-feedback" class="invalid-feedback">
    Valid values are 0-2
  </div>
</div>
<div class="mb-3">
  <label for="usmn-mspa-covered-transaction" class="form-label">MSPA Covered Transaction</label>
  <input
    type="number"
    min="1"
    max="2"
    id="usmn-mspa-covered-transaction"
    class="form-control"
    placeholder="1"
    value="1"
    disabled
  />
  <div id="usmn-mspa-covered-transaction-feedback" class="invalid-feedback">Valid values are 1-2</div>
</div>
<div class="mb-3">
  <label for="usmn-mspa-opt-out-option-mode" class="form-label">MSPA Opt Out Option Mode</label>
  <input
    type="number"
    min="0"
    max="2"
    id="usmn-mspa-opt-out-option-mode"
    class="form-control"
    placeholder="0"
    value="0"
    disabled
  />
  <div id="usmn-mspa-opt-out-option-mode-feedback" class="invalid-feedback">Valid values are 0-2</div>
</div>
<div class="mb-3">
  <label for="usmn-mspa-service-provider-mode" class="form-label">MSPA Service Provider Mode</label>
  <input
    type="number"
    min="0"
    max="2"
    id="usmn-mspa-service-provider-mode"
    class="form-control"
    placeholder="0"
    value="0"
    disabled
  />
  <div id="usmn-mspa-service-provider-mode-feedback" class="invalid-feedback">
    Valid values are 0-2
  </div>
</div>
<div class="mb-3 form-check">
  <input class="form-check-input" type="checkbox" value="" id="usmn-gpc-segment-included" checked disabled />
  <label class="form-check-label" for="usmn-gpc-segment-included">GPC Segment Included</label>
</div>
<div class="mb-3 form-check">
  <input class="form-check-input" type="checkbox" value="" id="usmn-gpc" disabled />
  <label class="form-check-label" for="usmn-gpc">GPC Enabled</label>
</div>
`;function Ii(s,t,e){let n=[],i=document.getElementById(s),a=i.value,o=parseInt(i.min),d=parseInt(i.max);return isNaN(a)?(n.push(s),i.classList.contains("is-invalid")||i.classList.add("is-invalid")):(a=parseInt(a),a>=o&&a<=d?(cmpApi.setFieldValue(t,e,a),i.classList.contains("is-invalid")&&i.classList.remove("is-invalid")):(n.push(s),i.classList.contains("is-invalid")||i.classList.add("is-invalid"))),n}function Oi(s,t,e){let n=[],i=[];for(let a=0;a<s.length;a++){let o=s[a],d=document.getElementById(o),r=d.value,h=parseInt(d.min),m=parseInt(d.max);isNaN(r)?(n.push(o),d.classList.contains("is-invalid")||d.classList.add("is-invalid")):(r=parseInt(r),r>=h&&r<=m?(i.push(r),d.classList.contains("is-invalid")&&d.classList.remove("is-invalid")):(n.push(o),d.classList.contains("is-invalid")||d.classList.add("is-invalid")))}return n.length==0&&cmpApi.setFieldValue(t,e,i),n}function Ni(s,t,e){let n=[],a=document.getElementById(s).valueAsDate;return cmpApi.setFieldValue(t,e,a),n}function Ai(s,t,e){let n=[],i=document.getElementById(s),a=parseInt(i.value);return cmpApi.setFieldValue(t,e,a),n}function Ti(s,t,e){let n=[],a=document.getElementById(s).value;return cmpApi.setFieldValue(t,e,a),n}function _i(s,t,e){let n=[],i=Array.from(document.getElementById(s).options).map(({value:a})=>parseInt(a));return cmpApi.setFieldValue(t,e,i),n}function yi(s,t,e){let n=[],i=[],a=document.getElementById(s);for(let o=0;o<a.length;o++){let d=a[o];i.push(d.selected)}return cmpApi.setFieldValue(t,e,i),n}function Vi(s,t,e){let n=[],a=document.getElementById(s).checked;return cmpApi.setFieldValue(t,e,a),n}function Ci(s,t,e){let n=[],i=0;for(let a=0;a<s.length;a++){let o=s[a],d=document.getElementById(o);d.checked&&(i=parseInt(d.value))}return cmpApi.setFieldValue(t,e,i),n}window.processNumericInput=Ii;window.processNumericInputs=Oi;window.processDateInput=Ni;window.processNumericSelect=Ai;window.processStringSelect=Ti;window.processMultipleNumericIncludedSelect=_i;window.processBitfieldSelect=yi;window.processCheckbox=Vi;window.processNumericRadio=Ci;function Pi(s){let t=document.getElementById(s+"-available"),e=document.getElementById(s+"-included"),n=[],i=[];for(let a=0;a<t.options.length;a++)t.options[a].selected===!0&&(n.push(a),i.push({label:t.options[a].innerHTML,value:t.options[a].value}));for(let a=0;a<e.options.length;a++)i.push({label:e.options[a].innerHTML,value:e.options[a].value});i.sort(function(a,o){return a.value-o.value});for(let a=0;a<i.length;a++)e.options[a]=new Option(i[a].label,i[a].value);for(let a=n.length-1;a>=0;a--)t.remove(n[a])}function Di(s){let t=document.getElementById(s+"-available"),e=document.getElementById(s+"-included"),n=[],i=[];for(let a=0;a<t.options.length;a++)n.push(a),i.push({label:t.options[a].innerHTML,value:t.options[a].value});for(let a=0;a<e.options.length;a++)i.push({label:e.options[a].innerHTML,value:e.options[a].value});i.sort(function(a,o){return a.value-o.value});for(let a=0;a<i.length;a++)e.options[a]=new Option(i[a].label,i[a].value);for(let a=n.length-1;a>=0;a--)t.remove(n[a])}function wi(s){let t=document.getElementById(s+"-available"),e=document.getElementById(s+"-included"),n=[],i=[];for(let a=0;a<e.options.length;a++)e.options[a].selected===!0&&(n.push(a),i.push({label:e.options[a].innerHTML,value:e.options[a].value}));for(let a=0;a<t.options.length;a++)i.push({label:t.options[a].innerHTML,value:t.options[a].value});i.sort(function(a,o){return a.value-o.value});for(let a=0;a<i.length;a++)t.options[a]=new Option(i[a].label,i[a].value);for(let a=n.length-1;a>=0;a--)e.remove(n[a])}function Mi(s){let t=document.getElementById(s+"-available"),e=document.getElementById(s+"-included"),n=[],i=[];for(let a=0;a<e.options.length;a++)n.push(a),i.push({label:e.options[a].innerHTML,value:e.options[a].value});for(let a=0;a<t.options.length;a++)i.push({label:t.options[a].innerHTML,value:t.options[a].value});i.sort(function(a,o){return a.value-o.value});for(let a=0;a<i.length;a++)t.options[a]=new Option(i[a].label,i[a].value);for(let a=n.length-1;a>=0;a--)e.remove(n[a])}window.includeVendors=Pi;window.includeAllVendors=Di;window.removeVendors=wi;window.removeAllVendors=Mi;function Ri(s){let t=document.getElementById("tcfeuv2-vendor-list-version"),e=[document.getElementById("tcfeuv2-vendor-consents-available"),document.getElementById("tcfeuv2-vendor-legitimate-interests-available"),document.getElementById("tcfeuv2-vendors-allowed-available"),document.getElementById("tcfeuv2-vendors-disclosed-available")],n=[document.getElementById("tcfeuv2-vendor-consents-included"),document.getElementById("tcfeuv2-vendor-legitimate-interests-included"),document.getElementById("tcfeuv2-vendors-allowed-included"),document.getElementById("tcfeuv2-vendors-disclosed-included")],i=[document.getElementById("tcfeuv2-purpose-consents"),document.getElementById("tcfeuv2-purpose-legitimate-interests")],a=[document.getElementById("tcfeuv2-special-feature-optins")];s===2?Nt(gvlV2,t,e,n,i,a):s===4&&Nt(gvlV3,t,e,n,i,a)}function ki(s){let t=document.getElementById("tcfcav1-vendor-list-version"),e=[document.getElementById("tcfcav1-vendor-express-consent-available"),document.getElementById("tcfcav1-vendor-implied-consent-available")],n=[document.getElementById("tcfcav1-vendor-express-consent-included"),document.getElementById("tcfcav1-vendor-implied-consent-included")],i=[document.getElementById("tcfcav1-purposes-express-consent"),document.getElementById("tcfcav1-purposes-implied-consent")],a=[document.getElementById("tcfcav1-special-feature-express-consent")];s===2&&Nt(gvlV2Ca,t,e,n,i,a)}function Nt(s,t,e,n,i,a){t.value=s.vendorListVersion;for(let h=0;h<n.length;h++){let m=n[h];for(let v=m.options.length-1;v>=0;v--)m.remove(v)}let o=Object.values(s.vendors);for(let h=0;h<e.length;h++){let m=e[h];for(let v=0;v<o.length;v++){let u=o[v];m.options[v]=new Option("["+u.id+"] "+u.name,u.id)}for(let v=m.options.length-1;v>=o.length;v--)m.remove(v)}let d=Object.values(s.purposes);for(let h=0;h<i.length;h++){let m=i[h];for(let v=0;v<d.length;v++){let u=d[v];m.options[v]=new Option("["+u.id+"] "+u.name,u.id)}for(let v=m.options.length-1;v>=d.length;v--)m.remove(v)}let r=Object.values(s.specialFeatures);for(let h=0;h<a.length;h++){let m=a[h];for(let v=0;v<r.length;v++){let u=r[v];m.options[v]=new Option("["+u.id+"] "+u.name,u.id)}for(let v=m.options.length-1;v>=r.length;v--)m.remove(v)}}window.tcfEuV2PolicyVersionChanged=Ri;window.tcfCaV1PolicyVersionChanged=ki;window.updateGvlRelatedElements=Nt;function X(s,t){for(let e=0;e<s.length;e++)document.getElementById(s[e]).disabled=t}function Gi(s){document.getElementById("header-tcfeuv2").checked=!s,document.getElementById("tcfeuv2-included").checked=!s,X(["tcfeuv2-created","tcfeuv2-last-updated","tcfeuv2-cmp-id","tcfeuv2-cmp-version","tcfeuv2-consent-screen","tcfeuv2-consent-language","tcfeuv2-vendor-list-version","tcfeuv2-policy-version-2","tcfeuv2-policy-version-4","tcfeuv2-is-service-specific","tcfeuv2-use-non-standard-stacks","tcfeuv2-special-feature-optins","tcfeuv2-purpose-consents","tcfeuv2-purpose-legitimate-interests","tcfeuv2-purpose-one-treatment","tcfeuv2-publisher-country-code","tcfeuv2-vendor-consents-available","tcfeuv2-vendor-consents-included","tcfeuv2-vendor-consents-include-button","tcfeuv2-vendor-consents-remove-button","tcfeuv2-vendor-legitimate-interests-available","tcfeuv2-vendor-legitimate-interests-included","tcfeuv2-vendor-legitimate-interests-include-button","tcfeuv2-vendor-legitimate-interests-remove-button","tcfeuv2-vendors-allowed-available","tcfeuv2-vendors-allowed-included","tcfeuv2-vendors-allowed-include-button","tcfeuv2-vendors-allowed-remove-button","tcfeuv2-vendors-disclosed-available","tcfeuv2-vendors-disclosed-included","tcfeuv2-vendors-disclosed-include-button","tcfeuv2-vendors-disclosed-remove-button"],s)}function xi(s){document.getElementById("header-tcfcav1").checked=!s,document.getElementById("tcfcav1-included").checked=!s,X(["tcfcav1-created","tcfcav1-last-updated","tcfcav1-cmp-id","tcfcav1-cmp-version","tcfcav1-consent-screen","tcfcav1-consent-language","tcfcav1-vendor-list-version","tcfcav1-tcf-policy-version-2","tcfcav1-use-non-standard-stacks","tcfcav1-special-feature-express-consent","tcfcav1-purposes-express-consent","tcfcav1-purposes-implied-consent","tcfcav1-vendor-express-consent-available","tcfcav1-vendor-express-consent-included","tcfcav1-vendor-express-consent-include-button","tcfcav1-vendor-express-consent-remove-button","tcfcav1-vendor-implied-consent-available","tcfcav1-vendor-implied-consent-included","tcfcav1-vendor-implied-consent-include-button","tcfcav1-vendor-implied-consent-remove-button"],s)}function Bi(s){document.getElementById("header-uspv1").checked=!s,document.getElementById("uspv1-included").checked=!s,X(["uspv1-notice","uspv1-opt-out-sale","uspv1-lspa-covered"],s)}function Li(s){document.getElementById("header-usnat").checked=!s,document.getElementById("usnat-included").checked=!s,X(["usnat-sharing-notice","usnat-sale-opt-out-notice","usnat-sharing-opt-out-notice","usnat-targeted-advertising-opt-out-notice","usnat-sensitive-data-processing-opt-out-notice","usnat-sensitive-data-limit-use-notice","usnat-sale-opt-out","usnat-sharing-opt-out","usnat-targeted-advertising-opt-out","usnat-sensitive-data-processing-0","usnat-sensitive-data-processing-1","usnat-sensitive-data-processing-2","usnat-sensitive-data-processing-3","usnat-sensitive-data-processing-4","usnat-sensitive-data-processing-5","usnat-sensitive-data-processing-6","usnat-sensitive-data-processing-7","usnat-sensitive-data-processing-8","usnat-sensitive-data-processing-9","usnat-sensitive-data-processing-10","usnat-sensitive-data-processing-11","usnat-sensitive-data-processing-12","usnat-sensitive-data-processing-13","usnat-sensitive-data-processing-14","usnat-sensitive-data-processing-15","usnat-known-child-sensitive-data-consents-0","usnat-known-child-sensitive-data-consents-1","usnat-known-child-sensitive-data-consents-2","usnat-personal-data-consents","usnat-mspa-covered-transaction","usnat-mspa-opt-out-option-mode","usnat-mspa-service-provider-mode","usnat-gpc-segment-included","usnat-gpc"],s)}function Ui(s){document.getElementById("header-usca").checked=!s,document.getElementById("usca-included").checked=!s,X(["usca-sale-opt-out-notice","usca-sharing-opt-out-notice","usca-sensitive-data-limit-use-notice","usca-sale-opt-out","usca-sharing-opt-out","usca-sensitive-data-processing-0","usca-sensitive-data-processing-1","usca-sensitive-data-processing-2","usca-sensitive-data-processing-3","usca-sensitive-data-processing-4","usca-sensitive-data-processing-5","usca-sensitive-data-processing-6","usca-sensitive-data-processing-7","usca-sensitive-data-processing-8","usca-known-child-sensitive-data-consents-0","usca-known-child-sensitive-data-consents-1","usca-personal-data-consents","usca-mspa-covered-transaction","usca-mspa-opt-out-option-mode","usca-mspa-service-provider-mode","usca-gpc-segment-included","usca-gpc"],s)}function Fi(s){document.getElementById("header-usva").checked=!s,document.getElementById("usva-included").checked=!s,X(["usva-sharing-notice","usva-sale-opt-out-notice","usva-targeted-advertising-opt-out-notice","usva-sale-opt-out","usva-targeted-advertising-opt-out","usva-sensitive-data-processing-0","usva-sensitive-data-processing-1","usva-sensitive-data-processing-2","usva-sensitive-data-processing-3","usva-sensitive-data-processing-4","usva-sensitive-data-processing-5","usva-sensitive-data-processing-6","usva-sensitive-data-processing-7","usva-known-child-sensitive-data-consents","usva-mspa-covered-transaction","usva-mspa-opt-out-option-mode","usva-mspa-service-provider-mode"],s)}function ji(s){document.getElementById("header-usco").checked=!s,document.getElementById("usco-included").checked=!s,X(["usco-sharing-notice","usco-sale-opt-out-notice","usco-targeted-advertising-opt-out-notice","usco-sale-opt-out","usco-targeted-advertising-opt-out","usco-sensitive-data-processing-0","usco-sensitive-data-processing-1","usco-sensitive-data-processing-2","usco-sensitive-data-processing-3","usco-sensitive-data-processing-4","usco-sensitive-data-processing-5","usco-sensitive-data-processing-6","usco-known-child-sensitive-data-consents","usco-mspa-covered-transaction","usco-mspa-opt-out-option-mode","usco-mspa-service-provider-mode","usco-gpc-segment-included","usco-gpc"],s)}function Hi(s){document.getElementById("header-usut").checked=!s,document.getElementById("usut-included").checked=!s,X(["usut-sharing-notice","usut-sale-opt-out-notice","usut-targeted-advertising-opt-out-notice","usut-sensitive-data-processing-opt-out-notice","usut-sale-opt-out","usut-targeted-advertising-opt-out","usut-sensitive-data-processing-0","usut-sensitive-data-processing-1","usut-sensitive-data-processing-2","usut-sensitive-data-processing-3","usut-sensitive-data-processing-4","usut-sensitive-data-processing-5","usut-sensitive-data-processing-6","usut-sensitive-data-processing-7","usut-known-child-sensitive-data-consents","usut-mspa-covered-transaction","usut-mspa-opt-out-option-mode","usut-mspa-service-provider-mode"],s)}function Ki(s){document.getElementById("header-usct").checked=!s,document.getElementById("usct-included").checked=!s,X(["usct-sharing-notice","usct-sale-opt-out-notice","usct-targeted-advertising-opt-out-notice","usct-sale-opt-out","usct-targeted-advertising-opt-out","usct-sensitive-data-processing-0","usct-sensitive-data-processing-1","usct-sensitive-data-processing-2","usct-sensitive-data-processing-3","usct-sensitive-data-processing-4","usct-sensitive-data-processing-5","usct-sensitive-data-processing-6","usct-sensitive-data-processing-7","usct-known-child-sensitive-data-consents-0","usct-known-child-sensitive-data-consents-1","usct-known-child-sensitive-data-consents-2","usct-mspa-covered-transaction","usct-mspa-opt-out-option-mode","usct-mspa-service-provider-mode","usct-gpc-segment-included","usct-gpc"],s)}function zi(s){document.getElementById("header-usfl").checked=!s,document.getElementById("usfl-included").checked=!s,X(["usfl-processing-notice","usfl-sale-opt-out-notice","usfl-targeted-advertising-opt-out-notice","usfl-sale-opt-out","usfl-targeted-advertising-opt-out","usfl-sensitive-data-processing-0","usfl-sensitive-data-processing-1","usfl-sensitive-data-processing-2","usfl-sensitive-data-processing-3","usfl-sensitive-data-processing-4","usfl-sensitive-data-processing-5","usfl-sensitive-data-processing-6","usfl-sensitive-data-processing-7","usfl-known-child-sensitive-data-consents-0","usfl-known-child-sensitive-data-consents-1","usfl-known-child-sensitive-data-consents-2","usfl-additional-data-processing-consent","usfl-mspa-covered-transaction","usfl-mspa-opt-out-option-mode","usfl-mspa-service-provider-mode"],s)}function Wi(s){document.getElementById("header-usmt").checked=!s,document.getElementById("usmt-included").checked=!s,X(["usmt-sharing-notice","usmt-sale-opt-out-notice","usmt-targeted-advertising-opt-out-notice","usmt-sale-opt-out","usmt-targeted-advertising-opt-out","usmt-sensitive-data-processing-0","usmt-sensitive-data-processing-1","usmt-sensitive-data-processing-2","usmt-sensitive-data-processing-3","usmt-sensitive-data-processing-4","usmt-sensitive-data-processing-5","usmt-sensitive-data-processing-6","usmt-sensitive-data-processing-7","usmt-known-child-sensitive-data-consents-0","usmt-known-child-sensitive-data-consents-1","usmt-known-child-sensitive-data-consents-2","usmt-additional-data-processing-consent","usmt-mspa-covered-transaction","usmt-mspa-opt-out-option-mode","usmt-mspa-service-provider-mode","usmt-gpc-segment-included","usmt-gpc"],s)}function Yi(s){document.getElementById("header-usor").checked=!s,document.getElementById("usor-included").checked=!s,X(["usor-processing-notice","usor-sale-opt-out-notice","usor-targeted-advertising-opt-out-notice","usor-sale-opt-out","usor-targeted-advertising-opt-out","usor-sensitive-data-processing-0","usor-sensitive-data-processing-1","usor-sensitive-data-processing-2","usor-sensitive-data-processing-3","usor-sensitive-data-processing-4","usor-sensitive-data-processing-5","usor-sensitive-data-processing-6","usor-sensitive-data-processing-7","usor-sensitive-data-processing-8","usor-sensitive-data-processing-9","usor-sensitive-data-processing-10","usor-known-child-sensitive-data-consents-0","usor-known-child-sensitive-data-consents-1","usor-known-child-sensitive-data-consents-2","usor-additional-data-processing-consent","usor-mspa-covered-transaction","usor-mspa-opt-out-option-mode","usor-mspa-service-provider-mode","usor-gpc-segment-included","usor-gpc"],s)}function $i(s){document.getElementById("header-ustx").checked=!s,document.getElementById("ustx-included").checked=!s,X(["ustx-processing-notice","ustx-sale-opt-out-notice","ustx-targeted-advertising-opt-out-notice","ustx-sale-opt-out","ustx-targeted-advertising-opt-out","ustx-sensitive-data-processing-0","ustx-sensitive-data-processing-1","ustx-sensitive-data-processing-2","ustx-sensitive-data-processing-3","ustx-sensitive-data-processing-4","ustx-sensitive-data-processing-5","ustx-sensitive-data-processing-6","ustx-sensitive-data-processing-7","ustx-known-child-sensitive-data-consents","ustx-additional-data-processing-consent","ustx-mspa-covered-transaction","ustx-mspa-opt-out-option-mode","ustx-mspa-service-provider-mode","ustx-gpc-segment-included","ustx-gpc"],s)}function Ji(s){document.getElementById("header-usde").checked=!s,document.getElementById("usde-included").checked=!s,X(["usde-processing-notice","usde-sale-opt-out-notice","usde-targeted-advertising-opt-out-notice","usde-sale-opt-out","usde-targeted-advertising-opt-out","usde-sensitive-data-processing-0","usde-sensitive-data-processing-1","usde-sensitive-data-processing-2","usde-sensitive-data-processing-3","usde-sensitive-data-processing-4","usde-sensitive-data-processing-5","usde-sensitive-data-processing-6","usde-sensitive-data-processing-7","usde-sensitive-data-processing-8","usde-known-child-sensitive-data-consents-0","usde-known-child-sensitive-data-consents-1","usde-known-child-sensitive-data-consents-2","usde-known-child-sensitive-data-consents-3","usde-known-child-sensitive-data-consents-4","usde-additional-data-processing-consent","usde-mspa-covered-transaction","usde-mspa-opt-out-option-mode","usde-mspa-service-provider-mode","usde-gpc-segment-included","usde-gpc"],s)}function Qi(s){document.getElementById("header-usia").checked=!s,document.getElementById("usia-included").checked=!s,X(["usia-processing-notice","usia-sale-opt-out-notice","usia-targeted-advertising-opt-out-notice","usia-sensitive-data-opt-out-notice","usia-sale-opt-out","usia-targeted-advertising-opt-out","usia-sensitive-data-processing-0","usia-sensitive-data-processing-1","usia-sensitive-data-processing-2","usia-sensitive-data-processing-3","usia-sensitive-data-processing-4","usia-sensitive-data-processing-5","usia-sensitive-data-processing-6","usia-sensitive-data-processing-7","usia-known-child-sensitive-data-consents","usia-mspa-covered-transaction","usia-mspa-opt-out-option-mode","usia-mspa-service-provider-mode","usia-gpc-segment-included","usia-gpc"],s)}function Zi(s){document.getElementById("header-usne").checked=!s,document.getElementById("usne-included").checked=!s,X(["usne-processing-notice","usne-sale-opt-out-notice","usne-targeted-advertising-opt-out-notice","usne-sale-opt-out","usne-targeted-advertising-opt-out","usne-sensitive-data-processing-0","usne-sensitive-data-processing-1","usne-sensitive-data-processing-2","usne-sensitive-data-processing-3","usne-sensitive-data-processing-4","usne-sensitive-data-processing-5","usne-sensitive-data-processing-6","usne-sensitive-data-processing-7","usne-known-child-sensitive-data-consents","usne-additional-data-processing-consent","usne-mspa-covered-transaction","usne-mspa-opt-out-option-mode","usne-mspa-service-provider-mode","usne-gpc-segment-included","usne-gpc"],s)}function Xi(s){document.getElementById("header-usnh").checked=!s,document.getElementById("usnh-included").checked=!s,X(["usnh-processing-notice","usnh-sale-opt-out-notice","usnh-targeted-advertising-opt-out-notice","usnh-sale-opt-out","usnh-targeted-advertising-opt-out","usnh-sensitive-data-processing-0","usnh-sensitive-data-processing-1","usnh-sensitive-data-processing-2","usnh-sensitive-data-processing-3","usnh-sensitive-data-processing-4","usnh-sensitive-data-processing-5","usnh-sensitive-data-processing-6","usnh-sensitive-data-processing-7","usnh-known-child-sensitive-data-consents-0","usnh-known-child-sensitive-data-consents-1","usnh-known-child-sensitive-data-consents-2","usnh-additional-data-processing-consent","usnh-mspa-covered-transaction","usnh-mspa-opt-out-option-mode","usnh-mspa-service-provider-mode","usnh-gpc-segment-included","usnh-gpc"],s)}function qi(s){document.getElementById("header-usnj").checked=!s,document.getElementById("usnj-included").checked=!s,X(["usnj-processing-notice","usnj-sale-opt-out-notice","usnj-targeted-advertising-opt-out-notice","usnj-sale-opt-out","usnj-targeted-advertising-opt-out","usnj-sensitive-data-processing-0","usnj-sensitive-data-processing-1","usnj-sensitive-data-processing-2","usnj-sensitive-data-processing-3","usnj-sensitive-data-processing-4","usnj-sensitive-data-processing-5","usnj-sensitive-data-processing-6","usnj-sensitive-data-processing-7","usnj-sensitive-data-processing-8","usnj-sensitive-data-processing-9","usnj-known-child-sensitive-data-consents-0","usnj-known-child-sensitive-data-consents-1","usnj-known-child-sensitive-data-consents-2","usnj-known-child-sensitive-data-consents-3","usnj-known-child-sensitive-data-consents-4","usnj-additional-data-processing-consent","usnj-mspa-covered-transaction","usnj-mspa-opt-out-option-mode","usnj-mspa-service-provider-mode","usnj-gpc-segment-included","usnj-gpc"],s)}function ea(s){document.getElementById("header-ustn").checked=!s,document.getElementById("ustn-included").checked=!s,X(["ustn-processing-notice","ustn-sale-opt-out-notice","ustn-targeted-advertising-opt-out-notice","ustn-sale-opt-out","ustn-targeted-advertising-opt-out","ustn-sensitive-data-processing-0","ustn-sensitive-data-processing-1","ustn-sensitive-data-processing-2","ustn-sensitive-data-processing-3","ustn-sensitive-data-processing-4","ustn-sensitive-data-processing-5","ustn-sensitive-data-processing-6","ustn-sensitive-data-processing-7","ustn-known-child-sensitive-data-consents","ustn-additional-data-processing-consent","ustn-mspa-covered-transaction","ustn-mspa-opt-out-option-mode","ustn-mspa-service-provider-mode","ustn-gpc-segment-included","ustn-gpc"],s)}window.disableAll=X;window.disableTcfEuV2=Gi;window.disableTcfCaV1=xi;window.disableUspV1=Bi;window.disableusnat=Li;window.disableusca=Ui;window.disableusva=Fi;window.disableusco=ji;window.disableusut=Hi;window.disableusct=Ki;window.disableusfl=zi;window.disableusmt=Wi;window.disableusor=Yi;window.disableustx=$i;window.disableusde=Ji;window.disableusia=Qi;window.disableusne=Zi;window.disableusnh=Xi;window.disableusnj=qi;window.disableustn=ea;function ta(s){document.getElementById("header-usmn").checked=!s,document.getElementById("usmn-included").checked=!s,X(["usmn-processing-notice","usmn-sale-opt-out-notice","usmn-targeted-advertising-opt-out-notice","usmn-sale-opt-out","usmn-targeted-advertising-opt-out","usmn-sensitive-data-processing-0","usmn-sensitive-data-processing-1","usmn-sensitive-data-processing-2","usmn-sensitive-data-processing-3","usmn-sensitive-data-processing-4","usmn-sensitive-data-processing-5","usmn-sensitive-data-processing-6","usmn-sensitive-data-processing-7","usmn-known-child-sensitive-data-consents","usmn-additional-data-processing-consent","usmn-mspa-covered-transaction","usmn-mspa-opt-out-option-mode","usmn-mspa-service-provider-mode","usmn-gpc-segment-included","usmn-gpc"],s)}window.disableusmn=ta;function na(){let s=[];cmpApi.clear();let t=[];if(document.getElementById("tcfeuv2-included").checked==!0&&(t.push(2),Array.prototype.push.apply(s,processNumericInput("tcfeuv2-cmp-id","tcfeuv2","CmpId")),Array.prototype.push.apply(s,processNumericInput("tcfeuv2-cmp-version","tcfeuv2","CmpVersion")),Array.prototype.push.apply(s,processNumericInput("tcfeuv2-consent-screen","tcfeuv2","ConsentScreen")),Array.prototype.push.apply(s,processStringSelect("tcfeuv2-consent-language","tcfeuv2","ConsentLanguage")),Array.prototype.push.apply(s,processNumericInput("tcfeuv2-vendor-list-version","tcfeuv2","VendorListVersion")),Array.prototype.push.apply(s,processNumericRadio(["tcfeuv2-policy-version-2","tcfeuv2-policy-version-4"],"tcfeuv2","PolicyVersion")),Array.prototype.push.apply(s,processCheckbox("tcfeuv2-is-service-specific","tcfeuv2","IsServiceSpecific")),Array.prototype.push.apply(s,processCheckbox("tcfeuv2-use-non-standard-stacks","tcfeuv2","UseNonStandardStacks")),Array.prototype.push.apply(s,processBitfieldSelect("tcfeuv2-special-feature-optins","tcfeuv2","SpecialFeatureOptins")),Array.prototype.push.apply(s,processBitfieldSelect("tcfeuv2-purpose-consents","tcfeuv2","PurposeConsents")),Array.prototype.push.apply(s,processBitfieldSelect("tcfeuv2-purpose-legitimate-interests","tcfeuv2","PurposeLegitimateInterests")),Array.prototype.push.apply(s,processCheckbox("tcfeuv2-purpose-one-treatment","tcfeuv2","PurposeOneTreatment")),Array.prototype.push.apply(s,processStringSelect("tcfeuv2-publisher-country-code","tcfeuv2","PublisherCountryCode")),Array.prototype.push.apply(s,processMultipleNumericIncludedSelect("tcfeuv2-vendor-consents-included","tcfeuv2","VendorConsents")),Array.prototype.push.apply(s,processMultipleNumericIncludedSelect("tcfeuv2-vendor-legitimate-interests-included","tcfeuv2","VendorLegitimateInterests")),Array.prototype.push.apply(s,processMultipleNumericIncludedSelect("tcfeuv2-vendors-allowed-included","tcfeuv2","VendorsAllowed")),Array.prototype.push.apply(s,processMultipleNumericIncludedSelect("tcfeuv2-vendors-disclosed-included","tcfeuv2","VendorsDisclosed")),Array.prototype.push.apply(s,processDateInput("tcfeuv2-created","tcfeuv2","Created")),Array.prototype.push.apply(s,processDateInput("tcfeuv2-last-updated","tcfeuv2","LastUpdated"))),document.getElementById("tcfcav1-included").checked==!0&&(t.push(5),Array.prototype.push.apply(s,processNumericInput("tcfcav1-cmp-id","tcfcav1","CmpId")),Array.prototype.push.apply(s,processNumericInput("tcfcav1-cmp-version","tcfcav1","CmpVersion")),Array.prototype.push.apply(s,processNumericInput("tcfcav1-consent-screen","tcfcav1","ConsentScreen")),Array.prototype.push.apply(s,processStringSelect("tcfcav1-consent-language","tcfcav1","ConsentLanguage")),Array.prototype.push.apply(s,processNumericInput("tcfcav1-vendor-list-version","tcfcav1","VendorListVersion")),Array.prototype.push.apply(s,processNumericRadio(["tcfcav1-tcf-policy-version-2"],"tcfcav1","TcfPolicyVersion")),Array.prototype.push.apply(s,processCheckbox("tcfcav1-use-non-standard-stacks","tcfcav1","UseNonStandardStacks")),Array.prototype.push.apply(s,processBitfieldSelect("tcfcav1-special-feature-express-consent","tcfcav1","SpecialFeatureExpressConsent")),Array.prototype.push.apply(s,processBitfieldSelect("tcfcav1-purposes-express-consent","tcfcav1","PurposesExpressConsent")),Array.prototype.push.apply(s,processBitfieldSelect("tcfcav1-purposes-implied-consent","tcfcav1","PurposesImpliedConsent")),Array.prototype.push.apply(s,processMultipleNumericIncludedSelect("tcfcav1-vendor-express-consent-included","tcfcav1","VendorExpressConsent")),Array.prototype.push.apply(s,processMultipleNumericIncludedSelect("tcfcav1-vendor-implied-consent-included","tcfcav1","VendorImpliedConsent")),Array.prototype.push.apply(s,processDateInput("tcfcav1-created","tcfcav1","Created")),Array.prototype.push.apply(s,processDateInput("tcfcav1-last-updated","tcfcav1","LastUpdated"))),document.getElementById("uspv1-included").checked==!0&&(t.push(6),Array.prototype.push.apply(s,processStringSelect("uspv1-notice","uspv1","Notice")),Array.prototype.push.apply(s,processStringSelect("uspv1-opt-out-sale","uspv1","OptOutSale")),Array.prototype.push.apply(s,processStringSelect("uspv1-lspa-covered","uspv1","LspaCovered"))),document.getElementById("usnat-included").checked==!0&&(t.push(7),Array.prototype.push.apply(s,processNumericInput("usnat-sharing-notice","usnat","SharingNotice")),Array.prototype.push.apply(s,processNumericInput("usnat-sale-opt-out-notice","usnat","SaleOptOutNotice")),Array.prototype.push.apply(s,processNumericInput("usnat-sharing-opt-out-notice","usnat","SharingOptOutNotice")),Array.prototype.push.apply(s,processNumericInput("usnat-targeted-advertising-opt-out-notice","usnat","TargetedAdvertisingOptOutNotice")),Array.prototype.push.apply(s,processNumericInput("usnat-sensitive-data-processing-opt-out-notice","usnat","SensitiveDataProcessingOptOutNotice")),Array.prototype.push.apply(s,processNumericInput("usnat-sensitive-data-limit-use-notice","usnat","SensitiveDataLimitUseNotice")),Array.prototype.push.apply(s,processNumericInput("usnat-sale-opt-out","usnat","SaleOptOut")),Array.prototype.push.apply(s,processNumericInput("usnat-sharing-opt-out","usnat","SharingOptOut")),Array.prototype.push.apply(s,processNumericInput("usnat-targeted-advertising-opt-out","usnat","TargetedAdvertisingOptOut")),Array.prototype.push.apply(s,processNumericInputs(["usnat-sensitive-data-processing-0","usnat-sensitive-data-processing-1","usnat-sensitive-data-processing-2","usnat-sensitive-data-processing-3","usnat-sensitive-data-processing-4","usnat-sensitive-data-processing-5","usnat-sensitive-data-processing-6","usnat-sensitive-data-processing-7","usnat-sensitive-data-processing-8","usnat-sensitive-data-processing-9","usnat-sensitive-data-processing-10","usnat-sensitive-data-processing-11","usnat-sensitive-data-processing-12","usnat-sensitive-data-processing-13","usnat-sensitive-data-processing-14","usnat-sensitive-data-processing-15"],"usnat","SensitiveDataProcessing")),Array.prototype.push.apply(s,processNumericInputs(["usnat-known-child-sensitive-data-consents-0","usnat-known-child-sensitive-data-consents-1","usnat-known-child-sensitive-data-consents-2"],"usnat","KnownChildSensitiveDataConsents")),Array.prototype.push.apply(s,processNumericInput("usnat-personal-data-consents","usnat","PersonalDataConsents")),Array.prototype.push.apply(s,processNumericInput("usnat-mspa-covered-transaction","usnat","MspaCoveredTransaction")),Array.prototype.push.apply(s,processNumericInput("usnat-mspa-opt-out-option-mode","usnat","MspaOptOutOptionMode")),Array.prototype.push.apply(s,processNumericInput("usnat-mspa-service-provider-mode","usnat","MspaServiceProviderMode")),Array.prototype.push.apply(s,processCheckbox("usnat-gpc-segment-included","usnat","GpcSegmentIncluded")),Array.prototype.push.apply(s,processCheckbox("usnat-gpc","usnat","Gpc"))),document.getElementById("usca-included").checked==!0&&(t.push(8),Array.prototype.push.apply(s,processNumericInput("usca-sale-opt-out-notice","usca","SaleOptOutNotice")),Array.prototype.push.apply(s,processNumericInput("usca-sharing-opt-out-notice","usca","SharingOptOutNotice")),Array.prototype.push.apply(s,processNumericInput("usca-sensitive-data-limit-use-notice","usca","SensitiveDataLimitUseNotice")),Array.prototype.push.apply(s,processNumericInput("usca-sale-opt-out","usca","SaleOptOut")),Array.prototype.push.apply(s,processNumericInput("usca-sharing-opt-out","usca","SharingOptOut")),Array.prototype.push.apply(s,processNumericInputs(["usca-sensitive-data-processing-0","usca-sensitive-data-processing-1","usca-sensitive-data-processing-2","usca-sensitive-data-processing-3","usca-sensitive-data-processing-4","usca-sensitive-data-processing-5","usca-sensitive-data-processing-6","usca-sensitive-data-processing-7","usca-sensitive-data-processing-8"],"usca","SensitiveDataProcessing")),Array.prototype.push.apply(s,processNumericInputs(["usca-known-child-sensitive-data-consents-0","usca-known-child-sensitive-data-consents-1"],"usca","KnownChildSensitiveDataConsents")),Array.prototype.push.apply(s,processNumericInput("usca-personal-data-consents","usca","PersonalDataConsents")),Array.prototype.push.apply(s,processNumericInput("usca-mspa-covered-transaction","usca","MspaCoveredTransaction")),Array.prototype.push.apply(s,processNumericInput("usca-mspa-opt-out-option-mode","usca","MspaOptOutOptionMode")),Array.prototype.push.apply(s,processNumericInput("usca-mspa-service-provider-mode","usca","MspaServiceProviderMode")),Array.prototype.push.apply(s,processCheckbox("usca-gpc-segment-included","usca","GpcSegmentIncluded")),Array.prototype.push.apply(s,processCheckbox("usca-gpc","usca","Gpc"))),document.getElementById("usva-included").checked==!0&&(t.push(9),Array.prototype.push.apply(s,processNumericInput("usva-sharing-notice","usva","SharingNotice")),Array.prototype.push.apply(s,processNumericInput("usva-sale-opt-out-notice","usva","SaleOptOutNotice")),Array.prototype.push.apply(s,processNumericInput("usva-targeted-advertising-opt-out-notice","usva","TargetedAdvertisingOptOutNotice")),Array.prototype.push.apply(s,processNumericInput("usva-sale-opt-out","usva","SaleOptOut")),Array.prototype.push.apply(s,processNumericInput("usva-targeted-advertising-opt-out","usva","TargetedAdvertisingOptOut")),Array.prototype.push.apply(s,processNumericInputs(["usva-sensitive-data-processing-0","usva-sensitive-data-processing-1","usva-sensitive-data-processing-2","usva-sensitive-data-processing-3","usva-sensitive-data-processing-4","usva-sensitive-data-processing-5","usva-sensitive-data-processing-6","usva-sensitive-data-processing-7"],"usva","SensitiveDataProcessing")),Array.prototype.push.apply(s,processNumericInput("usva-known-child-sensitive-data-consents","usva","KnownChildSensitiveDataConsents")),Array.prototype.push.apply(s,processNumericInput("usva-mspa-covered-transaction","usva","MspaCoveredTransaction")),Array.prototype.push.apply(s,processNumericInput("usva-mspa-opt-out-option-mode","usva","MspaOptOutOptionMode")),Array.prototype.push.apply(s,processNumericInput("usva-mspa-service-provider-mode","usva","MspaServiceProviderMode"))),document.getElementById("usco-included").checked==!0&&(t.push(10),Array.prototype.push.apply(s,processNumericInput("usco-sharing-notice","usco","SharingNotice")),Array.prototype.push.apply(s,processNumericInput("usco-sale-opt-out-notice","usco","SaleOptOutNotice")),Array.prototype.push.apply(s,processNumericInput("usco-targeted-advertising-opt-out-notice","usco","TargetedAdvertisingOptOutNotice")),Array.prototype.push.apply(s,processNumericInput("usco-sale-opt-out","usco","SaleOptOut")),Array.prototype.push.apply(s,processNumericInput("usco-targeted-advertising-opt-out","usco","TargetedAdvertisingOptOut")),Array.prototype.push.apply(s,processNumericInputs(["usco-sensitive-data-processing-0","usco-sensitive-data-processing-1","usco-sensitive-data-processing-2","usco-sensitive-data-processing-3","usco-sensitive-data-processing-4","usco-sensitive-data-processing-5","usco-sensitive-data-processing-6"],"usco","SensitiveDataProcessing")),Array.prototype.push.apply(s,processNumericInput("usco-known-child-sensitive-data-consents","usco","KnownChildSensitiveDataConsents")),Array.prototype.push.apply(s,processNumericInput("usco-mspa-covered-transaction","usco","MspaCoveredTransaction")),Array.prototype.push.apply(s,processNumericInput("usco-mspa-opt-out-option-mode","usco","MspaOptOutOptionMode")),Array.prototype.push.apply(s,processNumericInput("usco-mspa-service-provider-mode","usco","MspaServiceProviderMode")),Array.prototype.push.apply(s,processCheckbox("usco-gpc-segment-included","usco","GpcSegmentIncluded")),Array.prototype.push.apply(s,processCheckbox("usco-gpc","usco","Gpc"))),document.getElementById("usut-included").checked==!0&&(t.push(11),Array.prototype.push.apply(s,processNumericInput("usut-sharing-notice","usut","SharingNotice")),Array.prototype.push.apply(s,processNumericInput("usut-sale-opt-out-notice","usut","SaleOptOutNotice")),Array.prototype.push.apply(s,processNumericInput("usut-targeted-advertising-opt-out-notice","usut","TargetedAdvertisingOptOutNotice")),Array.prototype.push.apply(s,processNumericInput("usut-sensitive-data-processing-opt-out-notice","usut","SensitiveDataProcessingOptOutNotice")),Array.prototype.push.apply(s,processNumericInput("usut-sale-opt-out","usut","SaleOptOut")),Array.prototype.push.apply(s,processNumericInput("usut-targeted-advertising-opt-out","usut","TargetedAdvertisingOptOut")),Array.prototype.push.apply(s,processNumericInputs(["usut-sensitive-data-processing-0","usut-sensitive-data-processing-1","usut-sensitive-data-processing-2","usut-sensitive-data-processing-3","usut-sensitive-data-processing-4","usut-sensitive-data-processing-5","usut-sensitive-data-processing-6","usut-sensitive-data-processing-7"],"usut","SensitiveDataProcessing")),Array.prototype.push.apply(s,processNumericInput("usut-known-child-sensitive-data-consents","usut","KnownChildSensitiveDataConsents")),Array.prototype.push.apply(s,processNumericInput("usut-mspa-covered-transaction","usut","MspaCoveredTransaction")),Array.prototype.push.apply(s,processNumericInput("usut-mspa-opt-out-option-mode","usut","MspaOptOutOptionMode")),Array.prototype.push.apply(s,processNumericInput("usut-mspa-service-provider-mode","usut","MspaServiceProviderMode"))),document.getElementById("usct-included").checked==!0&&(t.push(12),Array.prototype.push.apply(s,processNumericInput("usct-sharing-notice","usct","SharingNotice")),Array.prototype.push.apply(s,processNumericInput("usct-sale-opt-out-notice","usct","SaleOptOutNotice")),Array.prototype.push.apply(s,processNumericInput("usct-targeted-advertising-opt-out-notice","usct","TargetedAdvertisingOptOutNotice")),Array.prototype.push.apply(s,processNumericInput("usct-sale-opt-out","usct","SaleOptOut")),Array.prototype.push.apply(s,processNumericInput("usct-targeted-advertising-opt-out","usct","TargetedAdvertisingOptOut")),Array.prototype.push.apply(s,processNumericInputs(["usct-sensitive-data-processing-0","usct-sensitive-data-processing-1","usct-sensitive-data-processing-2","usct-sensitive-data-processing-3","usct-sensitive-data-processing-4","usct-sensitive-data-processing-5","usct-sensitive-data-processing-6","usct-sensitive-data-processing-7"],"usct","SensitiveDataProcessing")),Array.prototype.push.apply(s,processNumericInputs(["usct-known-child-sensitive-data-consents-0","usct-known-child-sensitive-data-consents-1","usct-known-child-sensitive-data-consents-2"],"usct","KnownChildSensitiveDataConsents")),Array.prototype.push.apply(s,processNumericInput("usct-mspa-covered-transaction","usct","MspaCoveredTransaction")),Array.prototype.push.apply(s,processNumericInput("usct-mspa-opt-out-option-mode","usct","MspaOptOutOptionMode")),Array.prototype.push.apply(s,processNumericInput("usct-mspa-service-provider-mode","usct","MspaServiceProviderMode")),Array.prototype.push.apply(s,processCheckbox("usct-gpc-segment-included","usct","GpcSegmentIncluded")),Array.prototype.push.apply(s,processCheckbox("usct-gpc","usct","Gpc"))),document.getElementById("usfl-included").checked==!0&&(t.push(13),Array.prototype.push.apply(s,processNumericInput("usfl-processing-notice","usfl","ProcessingNotice")),Array.prototype.push.apply(s,processNumericInput("usfl-sale-opt-out-notice","usfl","SaleOptOutNotice")),Array.prototype.push.apply(s,processNumericInput("usfl-targeted-advertising-opt-out-notice","usfl","TargetedAdvertisingOptOutNotice")),Array.prototype.push.apply(s,processNumericInput("usfl-sale-opt-out","usfl","SaleOptOut")),Array.prototype.push.apply(s,processNumericInput("usfl-targeted-advertising-opt-out","usfl","TargetedAdvertisingOptOut")),Array.prototype.push.apply(s,processNumericInputs(["usfl-sensitive-data-processing-0","usfl-sensitive-data-processing-1","usfl-sensitive-data-processing-2","usfl-sensitive-data-processing-3","usfl-sensitive-data-processing-4","usfl-sensitive-data-processing-5","usfl-sensitive-data-processing-6","usfl-sensitive-data-processing-7"],"usfl","SensitiveDataProcessing")),Array.prototype.push.apply(s,processNumericInputs(["usfl-known-child-sensitive-data-consents-0","usfl-known-child-sensitive-data-consents-1","usfl-known-child-sensitive-data-consents-2"],"usfl","KnownChildSensitiveDataConsents")),Array.prototype.push.apply(s,processNumericInput("usfl-additional-data-processing-consent","usfl","AdditionalDataProcessingConsent")),Array.prototype.push.apply(s,processNumericInput("usfl-mspa-covered-transaction","usfl","MspaCoveredTransaction")),Array.prototype.push.apply(s,processNumericInput("usfl-mspa-opt-out-option-mode","usfl","MspaOptOutOptionMode")),Array.prototype.push.apply(s,processNumericInput("usfl-mspa-service-provider-mode","usfl","MspaServiceProviderMode"))),document.getElementById("usmt-included").checked==!0&&(t.push(14),Array.prototype.push.apply(s,processNumericInput("usmt-sharing-notice","usmt","SharingNotice")),Array.prototype.push.apply(s,processNumericInput("usmt-sale-opt-out-notice","usmt","SaleOptOutNotice")),Array.prototype.push.apply(s,processNumericInput("usmt-targeted-advertising-opt-out-notice","usmt","TargetedAdvertisingOptOutNotice")),Array.prototype.push.apply(s,processNumericInput("usmt-sale-opt-out","usmt","SaleOptOut")),Array.prototype.push.apply(s,processNumericInput("usmt-targeted-advertising-opt-out","usmt","TargetedAdvertisingOptOut")),Array.prototype.push.apply(s,processNumericInputs(["usmt-sensitive-data-processing-0","usmt-sensitive-data-processing-1","usmt-sensitive-data-processing-2","usmt-sensitive-data-processing-3","usmt-sensitive-data-processing-4","usmt-sensitive-data-processing-5","usmt-sensitive-data-processing-6","usmt-sensitive-data-processing-7"],"usmt","SensitiveDataProcessing")),Array.prototype.push.apply(s,processNumericInputs(["usmt-known-child-sensitive-data-consents-0","usmt-known-child-sensitive-data-consents-1","usmt-known-child-sensitive-data-consents-2"],"usmt","KnownChildSensitiveDataConsents")),Array.prototype.push.apply(s,processNumericInput("usmt-additional-data-processing-consent","usmt","AdditionalDataProcessingConsent")),Array.prototype.push.apply(s,processNumericInput("usmt-mspa-covered-transaction","usmt","MspaCoveredTransaction")),Array.prototype.push.apply(s,processNumericInput("usmt-mspa-opt-out-option-mode","usmt","MspaOptOutOptionMode")),Array.prototype.push.apply(s,processNumericInput("usmt-mspa-service-provider-mode","usmt","MspaServiceProviderMode")),Array.prototype.push.apply(s,processCheckbox("usmt-gpc-segment-included","usmt","GpcSegmentIncluded")),Array.prototype.push.apply(s,processCheckbox("usmt-gpc","usmt","Gpc"))),document.getElementById("usor-included").checked==!0&&(t.push(15),Array.prototype.push.apply(s,processNumericInput("usor-processing-notice","usor","ProcessingNotice")),Array.prototype.push.apply(s,processNumericInput("usor-sale-opt-out-notice","usor","SaleOptOutNotice")),Array.prototype.push.apply(s,processNumericInput("usor-targeted-advertising-opt-out-notice","usor","TargetedAdvertisingOptOutNotice")),Array.prototype.push.apply(s,processNumericInput("usor-sale-opt-out","usor","SaleOptOut")),Array.prototype.push.apply(s,processNumericInput("usor-targeted-advertising-opt-out","usor","TargetedAdvertisingOptOut")),Array.prototype.push.apply(s,processNumericInputs(["usor-sensitive-data-processing-0","usor-sensitive-data-processing-1","usor-sensitive-data-processing-2","usor-sensitive-data-processing-3","usor-sensitive-data-processing-4","usor-sensitive-data-processing-5","usor-sensitive-data-processing-6","usor-sensitive-data-processing-7","usor-sensitive-data-processing-8","usor-sensitive-data-processing-9","usor-sensitive-data-processing-10"],"usor","SensitiveDataProcessing")),Array.prototype.push.apply(s,processNumericInputs(["usor-known-child-sensitive-data-consents-0","usor-known-child-sensitive-data-consents-1","usor-known-child-sensitive-data-consents-2"],"usor","KnownChildSensitiveDataConsents")),Array.prototype.push.apply(s,processNumericInput("usor-additional-data-processing-consent","usor","AdditionalDataProcessingConsent")),Array.prototype.push.apply(s,processNumericInput("usor-mspa-covered-transaction","usor","MspaCoveredTransaction")),Array.prototype.push.apply(s,processNumericInput("usor-mspa-opt-out-option-mode","usor","MspaOptOutOptionMode")),Array.prototype.push.apply(s,processNumericInput("usor-mspa-service-provider-mode","usor","MspaServiceProviderMode")),Array.prototype.push.apply(s,processCheckbox("usor-gpc-segment-included","usor","GpcSegmentIncluded")),Array.prototype.push.apply(s,processCheckbox("usor-gpc","usor","Gpc"))),document.getElementById("ustx-included").checked==!0&&(t.push(16),Array.prototype.push.apply(s,processNumericInput("ustx-processing-notice","ustx","ProcessingNotice")),Array.prototype.push.apply(s,processNumericInput("ustx-sale-opt-out-notice","ustx","SaleOptOutNotice")),Array.prototype.push.apply(s,processNumericInput("ustx-targeted-advertising-opt-out-notice","ustx","TargetedAdvertisingOptOutNotice")),Array.prototype.push.apply(s,processNumericInput("ustx-sale-opt-out","ustx","SaleOptOut")),Array.prototype.push.apply(s,processNumericInput("ustx-targeted-advertising-opt-out","ustx","TargetedAdvertisingOptOut")),Array.prototype.push.apply(s,processNumericInputs(["ustx-sensitive-data-processing-0","ustx-sensitive-data-processing-1","ustx-sensitive-data-processing-2","ustx-sensitive-data-processing-3","ustx-sensitive-data-processing-4","ustx-sensitive-data-processing-5","ustx-sensitive-data-processing-6","ustx-sensitive-data-processing-7"],"ustx","SensitiveDataProcessing")),Array.prototype.push.apply(s,processNumericInput("ustx-known-child-sensitive-data-consents","ustx","KnownChildSensitiveDataConsents")),Array.prototype.push.apply(s,processNumericInput("ustx-additional-data-processing-consent","ustx","AdditionalDataProcessingConsent")),Array.prototype.push.apply(s,processNumericInput("ustx-mspa-covered-transaction","ustx","MspaCoveredTransaction")),Array.prototype.push.apply(s,processNumericInput("ustx-mspa-opt-out-option-mode","ustx","MspaOptOutOptionMode")),Array.prototype.push.apply(s,processNumericInput("ustx-mspa-service-provider-mode","ustx","MspaServiceProviderMode")),Array.prototype.push.apply(s,processCheckbox("ustx-gpc-segment-included","ustx","GpcSegmentIncluded")),Array.prototype.push.apply(s,processCheckbox("ustx-gpc","ustx","Gpc"))),document.getElementById("usde-included").checked==!0&&(t.push(17),Array.prototype.push.apply(s,processNumericInput("usde-processing-notice","usde","ProcessingNotice")),Array.prototype.push.apply(s,processNumericInput("usde-sale-opt-out-notice","usde","SaleOptOutNotice")),Array.prototype.push.apply(s,processNumericInput("usde-targeted-advertising-opt-out-notice","usde","TargetedAdvertisingOptOutNotice")),Array.prototype.push.apply(s,processNumericInput("usde-sale-opt-out","usde","SaleOptOut")),Array.prototype.push.apply(s,processNumericInput("usde-targeted-advertising-opt-out","usde","TargetedAdvertisingOptOut")),Array.prototype.push.apply(s,processNumericInputs(["usde-sensitive-data-processing-0","usde-sensitive-data-processing-1","usde-sensitive-data-processing-2","usde-sensitive-data-processing-3","usde-sensitive-data-processing-4","usde-sensitive-data-processing-5","usde-sensitive-data-processing-6","usde-sensitive-data-processing-7","usde-sensitive-data-processing-8"],"usde","SensitiveDataProcessing")),Array.prototype.push.apply(s,processNumericInputs(["usde-known-child-sensitive-data-consents-0","usde-known-child-sensitive-data-consents-1","usde-known-child-sensitive-data-consents-2","usde-known-child-sensitive-data-consents-3","usde-known-child-sensitive-data-consents-4"],"usde","KnownChildSensitiveDataConsents")),Array.prototype.push.apply(s,processNumericInput("usde-additional-data-processing-consent","usde","AdditionalDataProcessingConsent")),Array.prototype.push.apply(s,processNumericInput("usde-mspa-covered-transaction","usde","MspaCoveredTransaction")),Array.prototype.push.apply(s,processNumericInput("usde-mspa-opt-out-option-mode","usde","MspaOptOutOptionMode")),Array.prototype.push.apply(s,processNumericInput("usde-mspa-service-provider-mode","usde","MspaServiceProviderMode")),Array.prototype.push.apply(s,processCheckbox("usde-gpc-segment-included","usde","GpcSegmentIncluded")),Array.prototype.push.apply(s,processCheckbox("usde-gpc","usde","Gpc"))),document.getElementById("usia-included").checked==!0&&(t.push(18),Array.prototype.push.apply(s,processNumericInput("usia-processing-notice","usia","ProcessingNotice")),Array.prototype.push.apply(s,processNumericInput("usia-sale-opt-out-notice","usia","SaleOptOutNotice")),Array.prototype.push.apply(s,processNumericInput("usia-targeted-advertising-opt-out-notice","usia","TargetedAdvertisingOptOutNotice")),Array.prototype.push.apply(s,processNumericInput("usia-sensitive-data-opt-out-notice","usia","SensitiveDataOptOutNotice")),Array.prototype.push.apply(s,processNumericInput("usia-sale-opt-out","usia","SaleOptOut")),Array.prototype.push.apply(s,processNumericInput("usia-targeted-advertising-opt-out","usia","TargetedAdvertisingOptOut")),Array.prototype.push.apply(s,processNumericInputs(["usia-sensitive-data-processing-0","usia-sensitive-data-processing-1","usia-sensitive-data-processing-2","usia-sensitive-data-processing-3","usia-sensitive-data-processing-4","usia-sensitive-data-processing-5","usia-sensitive-data-processing-6","usia-sensitive-data-processing-7"],"usia","SensitiveDataProcessing")),Array.prototype.push.apply(s,processNumericInput("usia-known-child-sensitive-data-consents","usia","KnownChildSensitiveDataConsents")),Array.prototype.push.apply(s,processNumericInput("usia-mspa-covered-transaction","usia","MspaCoveredTransaction")),Array.prototype.push.apply(s,processNumericInput("usia-mspa-opt-out-option-mode","usia","MspaOptOutOptionMode")),Array.prototype.push.apply(s,processNumericInput("usia-mspa-service-provider-mode","usia","MspaServiceProviderMode")),Array.prototype.push.apply(s,processCheckbox("usia-gpc-segment-included","usia","GpcSegmentIncluded")),Array.prototype.push.apply(s,processCheckbox("usia-gpc","usia","Gpc"))),document.getElementById("usne-included").checked==!0&&(t.push(19),Array.prototype.push.apply(s,processNumericInput("usne-processing-notice","usne","ProcessingNotice")),Array.prototype.push.apply(s,processNumericInput("usne-sale-opt-out-notice","usne","SaleOptOutNotice")),Array.prototype.push.apply(s,processNumericInput("usne-targeted-advertising-opt-out-notice","usne","TargetedAdvertisingOptOutNotice")),Array.prototype.push.apply(s,processNumericInput("usne-sale-opt-out","usne","SaleOptOut")),Array.prototype.push.apply(s,processNumericInput("usne-targeted-advertising-opt-out","usne","TargetedAdvertisingOptOut")),Array.prototype.push.apply(s,processNumericInputs(["usne-sensitive-data-processing-0","usne-sensitive-data-processing-1","usne-sensitive-data-processing-2","usne-sensitive-data-processing-3","usne-sensitive-data-processing-4","usne-sensitive-data-processing-5","usne-sensitive-data-processing-6","usne-sensitive-data-processing-7"],"usne","SensitiveDataProcessing")),Array.prototype.push.apply(s,processNumericInput("usne-known-child-sensitive-data-consents","usne","KnownChildSensitiveDataConsents")),Array.prototype.push.apply(s,processNumericInput("usne-additional-data-processing-consent","usne","AdditionalDataProcessingConsent")),Array.prototype.push.apply(s,processNumericInput("usne-mspa-covered-transaction","usne","MspaCoveredTransaction")),Array.prototype.push.apply(s,processNumericInput("usne-mspa-opt-out-option-mode","usne","MspaOptOutOptionMode")),Array.prototype.push.apply(s,processNumericInput("usne-mspa-service-provider-mode","usne","MspaServiceProviderMode")),Array.prototype.push.apply(s,processCheckbox("usne-gpc-segment-included","usne","GpcSegmentIncluded")),Array.prototype.push.apply(s,processCheckbox("usne-gpc","usne","Gpc"))),document.getElementById("usnh-included").checked==!0&&(t.push(20),Array.prototype.push.apply(s,processNumericInput("usnh-processing-notice","usnh","ProcessingNotice")),Array.prototype.push.apply(s,processNumericInput("usnh-sale-opt-out-notice","usnh","SaleOptOutNotice")),Array.prototype.push.apply(s,processNumericInput("usnh-targeted-advertising-opt-out-notice","usnh","TargetedAdvertisingOptOutNotice")),Array.prototype.push.apply(s,processNumericInput("usnh-sale-opt-out","usnh","SaleOptOut")),Array.prototype.push.apply(s,processNumericInput("usnh-targeted-advertising-opt-out","usnh","TargetedAdvertisingOptOut")),Array.prototype.push.apply(s,processNumericInputs(["usnh-sensitive-data-processing-0","usnh-sensitive-data-processing-1","usnh-sensitive-data-processing-2","usnh-sensitive-data-processing-3","usnh-sensitive-data-processing-4","usnh-sensitive-data-processing-5","usnh-sensitive-data-processing-6","usnh-sensitive-data-processing-7"],"usnh","SensitiveDataProcessing")),Array.prototype.push.apply(s,processNumericInputs(["usnh-known-child-sensitive-data-consents-0","usnh-known-child-sensitive-data-consents-1","usnh-known-child-sensitive-data-consents-2"],"usnh","KnownChildSensitiveDataConsents")),Array.prototype.push.apply(s,processNumericInput("usnh-additional-data-processing-consent","usnh","AdditionalDataProcessingConsent")),Array.prototype.push.apply(s,processNumericInput("usnh-mspa-covered-transaction","usnh","MspaCoveredTransaction")),Array.prototype.push.apply(s,processNumericInput("usnh-mspa-opt-out-option-mode","usnh","MspaOptOutOptionMode")),Array.prototype.push.apply(s,processNumericInput("usnh-mspa-service-provider-mode","usnh","MspaServiceProviderMode")),Array.prototype.push.apply(s,processCheckbox("usnh-gpc-segment-included","usnh","GpcSegmentIncluded")),Array.prototype.push.apply(s,processCheckbox("usnh-gpc","usnh","Gpc"))),document.getElementById("usnj-included").checked==!0&&(t.push(21),Array.prototype.push.apply(s,processNumericInput("usnj-processing-notice","usnj","ProcessingNotice")),Array.prototype.push.apply(s,processNumericInput("usnj-sale-opt-out-notice","usnj","SaleOptOutNotice")),Array.prototype.push.apply(s,processNumericInput("usnj-targeted-advertising-opt-out-notice","usnj","TargetedAdvertisingOptOutNotice")),Array.prototype.push.apply(s,processNumericInput("usnj-sale-opt-out","usnj","SaleOptOut")),Array.prototype.push.apply(s,processNumericInput("usnj-targeted-advertising-opt-out","usnj","TargetedAdvertisingOptOut")),Array.prototype.push.apply(s,processNumericInputs(["usnj-sensitive-data-processing-0","usnj-sensitive-data-processing-1","usnj-sensitive-data-processing-2","usnj-sensitive-data-processing-3","usnj-sensitive-data-processing-4","usnj-sensitive-data-processing-5","usnj-sensitive-data-processing-6","usnj-sensitive-data-processing-7","usnj-sensitive-data-processing-8","usnj-sensitive-data-processing-9"],"usnj","SensitiveDataProcessing")),Array.prototype.push.apply(s,processNumericInputs(["usnj-known-child-sensitive-data-consents-0","usnj-known-child-sensitive-data-consents-1","usnj-known-child-sensitive-data-consents-2","usnj-known-child-sensitive-data-consents-3","usnj-known-child-sensitive-data-consents-4"],"usnj","KnownChildSensitiveDataConsents")),Array.prototype.push.apply(s,processNumericInput("usnj-additional-data-processing-consent","usnj","AdditionalDataProcessingConsent")),Array.prototype.push.apply(s,processNumericInput("usnj-mspa-covered-transaction","usnj","MspaCoveredTransaction")),Array.prototype.push.apply(s,processNumericInput("usnj-mspa-opt-out-option-mode","usnj","MspaOptOutOptionMode")),Array.prototype.push.apply(s,processNumericInput("usnj-mspa-service-provider-mode","usnj","MspaServiceProviderMode")),Array.prototype.push.apply(s,processCheckbox("usnj-gpc-segment-included","usnj","GpcSegmentIncluded")),Array.prototype.push.apply(s,processCheckbox("usnj-gpc","usnj","Gpc"))),document.getElementById("ustn-included").checked==!0&&(t.push(22),Array.prototype.push.apply(s,processNumericInput("ustn-processing-notice","ustn","ProcessingNotice")),Array.prototype.push.apply(s,processNumericInput("ustn-sale-opt-out-notice","ustn","SaleOptOutNotice")),Array.prototype.push.apply(s,processNumericInput("ustn-targeted-advertising-opt-out-notice","ustn","TargetedAdvertisingOptOutNotice")),Array.prototype.push.apply(s,processNumericInput("ustn-sale-opt-out","ustn","SaleOptOut")),Array.prototype.push.apply(s,processNumericInput("ustn-targeted-advertising-opt-out","ustn","TargetedAdvertisingOptOut")),Array.prototype.push.apply(s,processNumericInputs(["ustn-sensitive-data-processing-0","ustn-sensitive-data-processing-1","ustn-sensitive-data-processing-2","ustn-sensitive-data-processing-3","ustn-sensitive-data-processing-4","ustn-sensitive-data-processing-5","ustn-sensitive-data-processing-6","ustn-sensitive-data-processing-7"],"ustn","SensitiveDataProcessing")),Array.prototype.push.apply(s,processNumericInput("ustn-known-child-sensitive-data-consents","ustn","KnownChildSensitiveDataConsents")),Array.prototype.push.apply(s,processNumericInput("ustn-additional-data-processing-consent","ustn","AdditionalDataProcessingConsent")),Array.prototype.push.apply(s,processNumericInput("ustn-mspa-covered-transaction","ustn","MspaCoveredTransaction")),Array.prototype.push.apply(s,processNumericInput("ustn-mspa-opt-out-option-mode","ustn","MspaOptOutOptionMode")),Array.prototype.push.apply(s,processNumericInput("ustn-mspa-service-provider-mode","ustn","MspaServiceProviderMode")),Array.prototype.push.apply(s,processCheckbox("ustn-gpc-segment-included","ustn","GpcSegmentIncluded")),Array.prototype.push.apply(s,processCheckbox("ustn-gpc","ustn","Gpc"))),document.getElementById("usmn-included").checked==!0&&(t.push(23),Array.prototype.push.apply(s,processNumericInput("usmn-processing-notice","usmn","ProcessingNotice")),Array.prototype.push.apply(s,processNumericInput("usmn-sale-opt-out-notice","usmn","SaleOptOutNotice")),Array.prototype.push.apply(s,processNumericInput("usmn-targeted-advertising-opt-out-notice","usmn","TargetedAdvertisingOptOutNotice")),Array.prototype.push.apply(s,processNumericInput("usmn-sale-opt-out","usmn","SaleOptOut")),Array.prototype.push.apply(s,processNumericInput("usmn-targeted-advertising-opt-out","usmn","TargetedAdvertisingOptOut")),Array.prototype.push.apply(s,processNumericInputs(["usmn-sensitive-data-processing-0","usmn-sensitive-data-processing-1","usmn-sensitive-data-processing-2","usmn-sensitive-data-processing-3","usmn-sensitive-data-processing-4","usmn-sensitive-data-processing-5","usmn-sensitive-data-processing-6","usmn-sensitive-data-processing-7"],"usmn","SensitiveDataProcessing")),Array.prototype.push.apply(s,processNumericInput("usmn-known-child-sensitive-data-consents","usmn","KnownChildSensitiveDataConsents")),Array.prototype.push.apply(s,processNumericInput("usmn-additional-data-processing-consent","usmn","AdditionalDataProcessingConsent")),Array.prototype.push.apply(s,processNumericInput("usmn-mspa-covered-transaction","usmn","MspaCoveredTransaction")),Array.prototype.push.apply(s,processNumericInput("usmn-mspa-opt-out-option-mode","usmn","MspaOptOutOptionMode")),Array.prototype.push.apply(s,processNumericInput("usmn-mspa-service-provider-mode","usmn","MspaServiceProviderMode")),Array.prototype.push.apply(s,processCheckbox("usmn-gpc-segment-included","usmn","GpcSegmentIncluded")),Array.prototype.push.apply(s,processCheckbox("usmn-gpc","usmn","Gpc"))),cmpApi.setApplicableSections(t),s.length==0)try{let e=cmpApi.getGppString();console.log(e),document.getElementById("gpp-string").value=e,document.getElementById("tcfeu-string").value=cmpApi.getSectionString("tcfeuv2");let n=e;document.getElementById("tcfeu-string-tab").getAttribute("class").indexOf("active")>=0&&(n=cmpApi.hasSection("tcfeuv2")?cmpApi.getSectionString("tcfeuv2"):""),n||(n="");let a=window.location.href.indexOf("#");a>-1?window.location.href=window.location.href.substring(0,a+1)+n:window.location.href=window.location.href+"#"+n;let o=cmpApi.getObject();o.tcfeuv2&&(o.tcfeuv2.Created=o.tcfeuv2.Created.toJSON(),o.tcfeuv2.LastUpdated=o.tcfeuv2.LastUpdated.toJSON()),o.tcfcav1&&(o.tcfcav1.Created=o.tcfcav1.Created.toJSON(),o.tcfcav1.LastUpdated=o.tcfcav1.LastUpdated.toJSON()),console.log(JSON.stringify(o)),$("#jsonview").JSONView(o,{collapsed:!0})}catch(e){console.log(e),toastr.error(e,"Error")}else toastr.error(s.join("</br>"),"Error")}window.encode=na;function sa(){let s,t,e;try{if(removeAllVendors("tcfeuv2-vendor-consents"),removeAllVendors("tcfeuv2-vendor-legitimate-interests"),removeAllVendors("tcfeuv2-vendors-allowed"),removeAllVendors("tcfeuv2-vendors-disclosed"),removeAllVendors("tcfcav1-vendor-express-consent"),removeAllVendors("tcfcav1-vendor-implied-consent"),document.getElementById("gpp-string-tab").getAttribute("class").indexOf("active")>=0){let h=document.getElementById("gpp-string").value;h.startsWith("C")&&(document.getElementById("tcfeu-string").value=h,document.getElementById("gpp-string").value="",$("#tcfeu-string-tab").tab("show"))}let i=document.getElementById("tcfeu-string-tab").getAttribute("class").indexOf("active")>=0;if(i){let h=document.getElementById("tcfeu-string").value;h.startsWith("D")?(document.getElementById("gpp-string").value=h,document.getElementById("tcfeu-string").value="",$("#gpp-string-tab").tab("show")):(h.length>0?document.getElementById("gpp-string").value="DBABMA~"+document.getElementById("tcfeu-string").value:document.getElementById("gpp-string").value="",$("#tcfeuv2-tab").tab("show"))}let a=document.getElementById("gpp-string").value.trim();if(a===""&&(a="",document.getElementById("gpp-string").value=a),console.log(a),cmpApi.setGppString(a),cmpApi.hasSection("tcfeuv2")){document.getElementById("tcfeuv2-included").checked=!0,disableTcfEuV2(!1);let h=cmpApi.getFieldValue("tcfeuv2","PolicyVersion");h===2&&!document.getElementById("tcfeuv2-policy-version-2").checked&&(document.getElementById("tcfeuv2-policy-version-2").checked=!0,tcfEuV2PolicyVersionChanged(h)),h===4&&!document.getElementById("tcfeuv2-policy-version-4").checked&&(document.getElementById("tcfeuv2-policy-version-2").checked=!0,tcfEuV2PolicyVersionChanged(h)),document.getElementById("tcfeuv2-vendor-list-version").value=cmpApi.getFieldValue("tcfeuv2","VendorListVersion"),document.getElementById("tcfeuv2-created").valueAsDate=cmpApi.getFieldValue("tcfeuv2","Created"),document.getElementById("tcfeuv2-last-updated").valueAsDate=cmpApi.getFieldValue("tcfeuv2","LastUpdated"),document.getElementById("tcfeuv2-cmp-id").value=cmpApi.getFieldValue("tcfeuv2","CmpId"),document.getElementById("tcfeuv2-cmp-version").value=cmpApi.getFieldValue("tcfeuv2","CmpVersion"),document.getElementById("tcfeuv2-consent-screen").value=cmpApi.getFieldValue("tcfeuv2","ConsentScreen"),document.getElementById("tcfeuv2-consent-language").value=cmpApi.getFieldValue("tcfeuv2","ConsentLanguage"),document.getElementById("tcfeuv2-is-service-specific").checked=cmpApi.getFieldValue("tcfeuv2","IsServiceSpecific"),document.getElementById("tcfeuv2-use-non-standard-stacks").checked=cmpApi.getFieldValue("tcfeuv2","UseNonStandardStacks");let m=cmpApi.getFieldValue("tcfeuv2","SpecialFeatureOptins"),v=document.getElementById("tcfeuv2-special-feature-optins");for(let u=0;u<v.length;u++){let N=v[u];u<m.length&&m[u]===!0?N.selected=!0:N.selected=!1}m=cmpApi.getFieldValue("tcfeuv2","PurposeConsents"),v=document.getElementById("tcfeuv2-purpose-consents");for(let u=0;u<v.length;u++){let N=v[u];u<m.length&&m[u]===!0?N.selected=!0:N.selected=!1}m=cmpApi.getFieldValue("tcfeuv2","PurposeLegitimateInterests"),v=document.getElementById("tcfeuv2-purpose-legitimate-interests");for(let u=0;u<v.length;u++){let N=v[u];u<m.length&&m[u]===!0?N.selected=!0:N.selected=!1}document.getElementById("tcfeuv2-purpose-one-treatment").checked=cmpApi.getFieldValue("tcfeuv2","PurposeOneTreatment"),document.getElementById("tcfeuv2-publisher-country-code").value=cmpApi.getFieldValue("tcfeuv2","PublisherCountryCode"),m=cmpApi.getFieldValue("tcfeuv2","VendorConsents"),v=document.getElementById("tcfeuv2-vendor-consents-available");for(let u=0;u<v.length;u++){let N=v[u];m.includes(parseInt(N.value))?N.selected=!0:N.selected=!1}includeVendors("tcfeuv2-vendor-consents"),m=cmpApi.getFieldValue("tcfeuv2","VendorLegitimateInterests"),v=document.getElementById("tcfeuv2-vendor-legitimate-interests-available");for(let u=0;u<v.length;u++){let N=v[u];m.includes(parseInt(N.value))?N.selected=!0:N.selected=!1}includeVendors("tcfeuv2-vendor-legitimate-interests"),m=cmpApi.getFieldValue("tcfeuv2","VendorsAllowed"),v=document.getElementById("tcfeuv2-vendors-allowed-available");for(let u=0;u<v.length;u++){let N=v[u];m.includes(parseInt(N.value))?N.selected=!0:N.selected=!1}includeVendors("tcfeuv2-vendors-allowed"),m=cmpApi.getFieldValue("tcfeuv2","VendorsDisclosed"),v=document.getElementById("tcfeuv2-vendors-disclosed-available");for(let u=0;u<v.length;u++){let N=v[u];m.includes(parseInt(N.value))?N.selected=!0:N.selected=!1}for(includeVendors("tcfeuv2-vendors-disclosed"),s=document.getElementById("tcfeuv2-publisher-restrictions-tbody");s.hasChildNodes();)s.removeChild(s.lastChild);if(m=cmpApi.getFieldValue("tcfeuv2","PublisherRestrictions"),m.length>0){for(let u=0;u<m.length;u++){switch(t=s.insertRow(),e=t.insertCell(0),e.innerHTML=m[u].key,e=t.insertCell(1),m[u].type){case 1:e.innerHTML=m[u].type+" - Require Consent";break;case 2:e.innerHTML=m[u].type+" - Require Legitimate Interest";break;case 3:e.innerHTML=m[u].type+" - Undefined";break;default:e.innerHTML=m[u].type+" - Not Allowed"}e=t.insertCell(2),e.innerHTML=m[u].ids}document.getElementById("tcfeuv2-publisher-restrictions-container").removeAttribute("hidden")}else document.getElementById("tcfeuv2-publisher-restrictions-container").setAttribute("hidden","hidden")}else document.getElementById("tcfeuv2-included").checked=!1,document.getElementById("tcfeuv2-publisher-restrictions-container").setAttribute("hidden","hidden"),disableTcfEuV2(!0);if(cmpApi.hasSection("tcfcav1")){document.getElementById("tcfcav1-included").checked=!0,disableTcfCaV1(!1);let h=cmpApi.getFieldValue("tcfcav1","TcfPolicyVersion");h===2&&!document.getElementById("tcfcav1-tcf-policy-version-2").checked&&(document.getElementById("tcfcav1-tcf-policy-version-2").checked=!0,tcfCaV1PolicyVersionChanged(h)),document.getElementById("tcfcav1-vendor-list-version").value=cmpApi.getFieldValue("tcfcav1","VendorListVersion"),document.getElementById("tcfcav1-created").valueAsDate=cmpApi.getFieldValue("tcfcav1","Created"),document.getElementById("tcfcav1-last-updated").valueAsDate=cmpApi.getFieldValue("tcfcav1","LastUpdated"),document.getElementById("tcfcav1-cmp-id").value=cmpApi.getFieldValue("tcfcav1","CmpId"),document.getElementById("tcfcav1-cmp-version").value=cmpApi.getFieldValue("tcfcav1","CmpVersion"),document.getElementById("tcfcav1-consent-screen").value=cmpApi.getFieldValue("tcfcav1","ConsentScreen"),document.getElementById("tcfcav1-consent-language").value=cmpApi.getFieldValue("tcfcav1","ConsentLanguage"),document.getElementById("tcfcav1-use-non-standard-stacks").checked=cmpApi.getFieldValue("tcfcav1","UseNonStandardStacks"),document.getElementById("tcfcav1-special-feature-express-consent").checked=cmpApi.getFieldValue("tcfcav1","SpecialFeatureExpressConsent");let m=cmpApi.getFieldValue("tcfcav1","PurposesExpressConsent"),v=document.getElementById("tcfcav1-purposes-express-consent");for(let u=0;u<v.length;u++){let N=v[u];u<m.length&&m[u]===!0?N.selected=!0:N.selected=!1}m=cmpApi.getFieldValue("tcfcav1","PurposesImpliedConsent"),v=document.getElementById("tcfcav1-purposes-implied-consent");for(let u=0;u<v.length;u++){let N=v[u];u<m.length&&m[u]===!0?N.selected=!0:N.selected=!1}m=cmpApi.getFieldValue("tcfcav1","VendorExpressConsent"),v=document.getElementById("tcfcav1-vendor-express-consent-available");for(let u=0;u<v.length;u++){let N=v[u];m.includes(parseInt(N.value))?N.selected=!0:N.selected=!1}includeVendors("tcfcav1-vendor-express-consent"),m=cmpApi.getFieldValue("tcfcav1","VendorImpliedConsent"),v=document.getElementById("tcfcav1-vendor-implied-consent-available");for(let u=0;u<v.length;u++){let N=v[u];m.includes(parseInt(N.value))?N.selected=!0:N.selected=!1}for(includeVendors("tcfcav1-vendor-implied-consent"),s=document.getElementById("tcfcav1-pub-restrictions-tbody");s.hasChildNodes();)s.removeChild(s.lastChild);if(m=cmpApi.getFieldValue("tcfcav1","PubRestrictions"),m.length>0){for(let u=0;u<m.length;u++){switch(t=s.insertRow(),e=t.insertCell(0),e.innerHTML=m[u].key,e=t.insertCell(1),m[u].type){case 1:e.innerHTML=m[u].type+" - Require Consent";break;case 2:e.innerHTML=m[u].type+" - Require Legitimate Interest";break;case 3:e.innerHTML=m[u].type+" - Undefined";break;default:e.innerHTML=m[u].type+" - Not Allowed"}e=t.insertCell(2),e.innerHTML=m[u].ids}document.getElementById("tcfcav1-pub-restrictions-container").removeAttribute("hidden")}else document.getElementById("tcfcav1-pub-restrictions-container").setAttribute("hidden","hidden")}else document.getElementById("tcfcav1-included").checked=!1,document.getElementById("tcfcav1-pub-restrictions-container").setAttribute("hidden","hidden"),disableTcfCaV1(!0);cmpApi.hasSection("uspv1")?(document.getElementById("uspv1-included").checked=!0,disableUspV1(!1),document.getElementById("uspv1-notice").value=cmpApi.getFieldValue("uspv1","Notice"),document.getElementById("uspv1-opt-out-sale").value=cmpApi.getFieldValue("uspv1","OptOutSale"),document.getElementById("uspv1-lspa-covered").value=cmpApi.getFieldValue("uspv1","LspaCovered")):(document.getElementById("uspv1-included").checked=!1,disableUspV1(!0)),cmpApi.hasSection("usnat")?(document.getElementById("usnat-included").checked=!0,disableusnat(!1),document.getElementById("usnat-sharing-notice").value=cmpApi.getFieldValue("usnat","SharingNotice"),document.getElementById("usnat-sale-opt-out-notice").value=cmpApi.getFieldValue("usnat","SaleOptOutNotice"),document.getElementById("usnat-sharing-opt-out-notice").value=cmpApi.getFieldValue("usnat","SharingOptOutNotice"),document.getElementById("usnat-targeted-advertising-opt-out-notice").value=cmpApi.getFieldValue("usnat","TargetedAdvertisingOptOutNotice"),document.getElementById("usnat-sensitive-data-processing-opt-out-notice").value=cmpApi.getFieldValue("usnat","SensitiveDataProcessingOptOutNotice"),document.getElementById("usnat-sensitive-data-limit-use-notice").value=cmpApi.getFieldValue("usnat","SensitiveDataLimitUseNotice"),document.getElementById("usnat-sale-opt-out").value=cmpApi.getFieldValue("usnat","SaleOptOut"),document.getElementById("usnat-sharing-opt-out").value=cmpApi.getFieldValue("usnat","SharingOptOut"),document.getElementById("usnat-targeted-advertising-opt-out").value=cmpApi.getFieldValue("usnat","TargetedAdvertisingOptOut"),document.getElementById("usnat-sensitive-data-processing-0").value=cmpApi.getFieldValue("usnat","SensitiveDataProcessing")[0],document.getElementById("usnat-sensitive-data-processing-1").value=cmpApi.getFieldValue("usnat","SensitiveDataProcessing")[1],document.getElementById("usnat-sensitive-data-processing-2").value=cmpApi.getFieldValue("usnat","SensitiveDataProcessing")[2],document.getElementById("usnat-sensitive-data-processing-3").value=cmpApi.getFieldValue("usnat","SensitiveDataProcessing")[3],document.getElementById("usnat-sensitive-data-processing-4").value=cmpApi.getFieldValue("usnat","SensitiveDataProcessing")[4],document.getElementById("usnat-sensitive-data-processing-5").value=cmpApi.getFieldValue("usnat","SensitiveDataProcessing")[5],document.getElementById("usnat-sensitive-data-processing-6").value=cmpApi.getFieldValue("usnat","SensitiveDataProcessing")[6],document.getElementById("usnat-sensitive-data-processing-7").value=cmpApi.getFieldValue("usnat","SensitiveDataProcessing")[7],document.getElementById("usnat-sensitive-data-processing-8").value=cmpApi.getFieldValue("usnat","SensitiveDataProcessing")[8],document.getElementById("usnat-sensitive-data-processing-9").value=cmpApi.getFieldValue("usnat","SensitiveDataProcessing")[9],document.getElementById("usnat-sensitive-data-processing-10").value=cmpApi.getFieldValue("usnat","SensitiveDataProcessing")[10],document.getElementById("usnat-sensitive-data-processing-11").value=cmpApi.getFieldValue("usnat","SensitiveDataProcessing")[11],document.getElementById("usnat-sensitive-data-processing-12").value=cmpApi.getFieldValue("usnat","SensitiveDataProcessing")[12],document.getElementById("usnat-sensitive-data-processing-13").value=cmpApi.getFieldValue("usnat","SensitiveDataProcessing")[13],document.getElementById("usnat-sensitive-data-processing-14").value=cmpApi.getFieldValue("usnat","SensitiveDataProcessing")[14],document.getElementById("usnat-sensitive-data-processing-15").value=cmpApi.getFieldValue("usnat","SensitiveDataProcessing")[15],document.getElementById("usnat-known-child-sensitive-data-consents-0").value=cmpApi.getFieldValue("usnat","KnownChildSensitiveDataConsents")[0],document.getElementById("usnat-known-child-sensitive-data-consents-1").value=cmpApi.getFieldValue("usnat","KnownChildSensitiveDataConsents")[1],document.getElementById("usnat-known-child-sensitive-data-consents-2").value=cmpApi.getFieldValue("usnat","KnownChildSensitiveDataConsents")[2],document.getElementById("usnat-personal-data-consents").value=cmpApi.getFieldValue("usnat","PersonalDataConsents"),document.getElementById("usnat-mspa-covered-transaction").value=cmpApi.getFieldValue("usnat","MspaCoveredTransaction"),document.getElementById("usnat-mspa-opt-out-option-mode").value=cmpApi.getFieldValue("usnat","MspaOptOutOptionMode"),document.getElementById("usnat-mspa-service-provider-mode").value=cmpApi.getFieldValue("usnat","MspaServiceProviderMode"),document.getElementById("usnat-gpc-segment-included").checked=cmpApi.getFieldValue("usnat","GpcSegmentIncluded"),document.getElementById("usnat-gpc").checked=cmpApi.getFieldValue("usnat","Gpc")):(document.getElementById("usnat-included").checked=!1,disableusnat(!0)),cmpApi.hasSection("usca")?(document.getElementById("usca-included").checked=!0,disableusca(!1),document.getElementById("usca-sale-opt-out-notice").value=cmpApi.getFieldValue("usca","SaleOptOutNotice"),document.getElementById("usca-sharing-opt-out-notice").value=cmpApi.getFieldValue("usca","SharingOptOutNotice"),document.getElementById("usca-sensitive-data-limit-use-notice").value=cmpApi.getFieldValue("usca","SensitiveDataLimitUseNotice"),document.getElementById("usca-sale-opt-out").value=cmpApi.getFieldValue("usca","SaleOptOut"),document.getElementById("usca-sharing-opt-out").value=cmpApi.getFieldValue("usca","SharingOptOut"),document.getElementById("usca-sensitive-data-processing-0").value=cmpApi.getFieldValue("usca","SensitiveDataProcessing")[0],document.getElementById("usca-sensitive-data-processing-1").value=cmpApi.getFieldValue("usca","SensitiveDataProcessing")[1],document.getElementById("usca-sensitive-data-processing-2").value=cmpApi.getFieldValue("usca","SensitiveDataProcessing")[2],document.getElementById("usca-sensitive-data-processing-3").value=cmpApi.getFieldValue("usca","SensitiveDataProcessing")[3],document.getElementById("usca-sensitive-data-processing-4").value=cmpApi.getFieldValue("usca","SensitiveDataProcessing")[4],document.getElementById("usca-sensitive-data-processing-5").value=cmpApi.getFieldValue("usca","SensitiveDataProcessing")[5],document.getElementById("usca-sensitive-data-processing-6").value=cmpApi.getFieldValue("usca","SensitiveDataProcessing")[6],document.getElementById("usca-sensitive-data-processing-7").value=cmpApi.getFieldValue("usca","SensitiveDataProcessing")[7],document.getElementById("usca-sensitive-data-processing-8").value=cmpApi.getFieldValue("usca","SensitiveDataProcessing")[8],document.getElementById("usca-known-child-sensitive-data-consents-0").value=cmpApi.getFieldValue("usca","KnownChildSensitiveDataConsents")[0],document.getElementById("usca-known-child-sensitive-data-consents-1").value=cmpApi.getFieldValue("usca","KnownChildSensitiveDataConsents")[1],document.getElementById("usca-personal-data-consents").value=cmpApi.getFieldValue("usca","PersonalDataConsents"),document.getElementById("usca-mspa-covered-transaction").value=cmpApi.getFieldValue("usca","MspaCoveredTransaction"),document.getElementById("usca-mspa-opt-out-option-mode").value=cmpApi.getFieldValue("usca","MspaOptOutOptionMode"),document.getElementById("usca-mspa-service-provider-mode").value=cmpApi.getFieldValue("usca","MspaServiceProviderMode"),document.getElementById("usca-gpc-segment-included").checked=cmpApi.getFieldValue("usca","GpcSegmentIncluded"),document.getElementById("usca-gpc").checked=cmpApi.getFieldValue("usca","Gpc")):(document.getElementById("usca-included").checked=!1,disableusca(!0)),cmpApi.hasSection("usva")?(document.getElementById("usva-included").checked=!0,disableusva(!1),document.getElementById("usva-sharing-notice").value=cmpApi.getFieldValue("usva","SharingNotice"),document.getElementById("usva-sale-opt-out-notice").value=cmpApi.getFieldValue("usva","SaleOptOutNotice"),document.getElementById("usva-targeted-advertising-opt-out-notice").value=cmpApi.getFieldValue("usva","TargetedAdvertisingOptOutNotice"),document.getElementById("usva-sale-opt-out").value=cmpApi.getFieldValue("usva","SaleOptOut"),document.getElementById("usva-targeted-advertising-opt-out").value=cmpApi.getFieldValue("usva","TargetedAdvertisingOptOut"),document.getElementById("usva-sensitive-data-processing-0").value=cmpApi.getFieldValue("usva","SensitiveDataProcessing")[0],document.getElementById("usva-sensitive-data-processing-1").value=cmpApi.getFieldValue("usva","SensitiveDataProcessing")[1],document.getElementById("usva-sensitive-data-processing-2").value=cmpApi.getFieldValue("usva","SensitiveDataProcessing")[2],document.getElementById("usva-sensitive-data-processing-3").value=cmpApi.getFieldValue("usva","SensitiveDataProcessing")[3],document.getElementById("usva-sensitive-data-processing-4").value=cmpApi.getFieldValue("usva","SensitiveDataProcessing")[4],document.getElementById("usva-sensitive-data-processing-5").value=cmpApi.getFieldValue("usva","SensitiveDataProcessing")[5],document.getElementById("usva-sensitive-data-processing-6").value=cmpApi.getFieldValue("usva","SensitiveDataProcessing")[6],document.getElementById("usva-sensitive-data-processing-7").value=cmpApi.getFieldValue("usva","SensitiveDataProcessing")[7],document.getElementById("usva-known-child-sensitive-data-consents").value=cmpApi.getFieldValue("usva","KnownChildSensitiveDataConsents"),document.getElementById("usva-mspa-covered-transaction").value=cmpApi.getFieldValue("usva","MspaCoveredTransaction"),document.getElementById("usva-mspa-opt-out-option-mode").value=cmpApi.getFieldValue("usva","MspaOptOutOptionMode"),document.getElementById("usva-mspa-service-provider-mode").value=cmpApi.getFieldValue("usva","MspaServiceProviderMode")):(document.getElementById("usva-included").checked=!1,disableusva(!0)),cmpApi.hasSection("usco")?(document.getElementById("usco-included").checked=!0,disableusco(!1),document.getElementById("usco-sharing-notice").value=cmpApi.getFieldValue("usco","SharingNotice"),document.getElementById("usco-sale-opt-out-notice").value=cmpApi.getFieldValue("usco","SaleOptOutNotice"),document.getElementById("usco-targeted-advertising-opt-out-notice").value=cmpApi.getFieldValue("usco","TargetedAdvertisingOptOutNotice"),document.getElementById("usco-sale-opt-out").value=cmpApi.getFieldValue("usco","SaleOptOut"),document.getElementById("usco-targeted-advertising-opt-out").value=cmpApi.getFieldValue("usco","TargetedAdvertisingOptOut"),document.getElementById("usco-sensitive-data-processing-0").value=cmpApi.getFieldValue("usco","SensitiveDataProcessing")[0],document.getElementById("usco-sensitive-data-processing-1").value=cmpApi.getFieldValue("usco","SensitiveDataProcessing")[1],document.getElementById("usco-sensitive-data-processing-2").value=cmpApi.getFieldValue("usco","SensitiveDataProcessing")[2],document.getElementById("usco-sensitive-data-processing-3").value=cmpApi.getFieldValue("usco","SensitiveDataProcessing")[3],document.getElementById("usco-sensitive-data-processing-4").value=cmpApi.getFieldValue("usco","SensitiveDataProcessing")[4],document.getElementById("usco-sensitive-data-processing-5").value=cmpApi.getFieldValue("usco","SensitiveDataProcessing")[5],document.getElementById("usco-sensitive-data-processing-6").value=cmpApi.getFieldValue("usco","SensitiveDataProcessing")[6],document.getElementById("usco-known-child-sensitive-data-consents").value=cmpApi.getFieldValue("usco","KnownChildSensitiveDataConsents"),document.getElementById("usco-mspa-covered-transaction").value=cmpApi.getFieldValue("usco","MspaCoveredTransaction"),document.getElementById("usco-mspa-opt-out-option-mode").value=cmpApi.getFieldValue("usco","MspaOptOutOptionMode"),document.getElementById("usco-mspa-service-provider-mode").value=cmpApi.getFieldValue("usco","MspaServiceProviderMode"),document.getElementById("usco-gpc-segment-included").checked=cmpApi.getFieldValue("usco","GpcSegmentIncluded"),document.getElementById("usco-gpc").checked=cmpApi.getFieldValue("usco","Gpc")):(document.getElementById("usco-included").checked=!1,disableusco(!0)),cmpApi.hasSection("usut")?(document.getElementById("usut-included").checked=!0,disableusut(!1),document.getElementById("usut-sharing-notice").value=cmpApi.getFieldValue("usut","SharingNotice"),document.getElementById("usut-sale-opt-out-notice").value=cmpApi.getFieldValue("usut","SaleOptOutNotice"),document.getElementById("usut-targeted-advertising-opt-out-notice").value=cmpApi.getFieldValue("usut","TargetedAdvertisingOptOutNotice"),document.getElementById("usut-sensitive-data-processing-opt-out-notice").value=cmpApi.getFieldValue("usut","SensitiveDataProcessingOptOutNotice"),document.getElementById("usut-sale-opt-out").value=cmpApi.getFieldValue("usut","SaleOptOut"),document.getElementById("usut-targeted-advertising-opt-out").value=cmpApi.getFieldValue("usut","TargetedAdvertisingOptOut"),document.getElementById("usut-sensitive-data-processing-0").value=cmpApi.getFieldValue("usut","SensitiveDataProcessing")[0],document.getElementById("usut-sensitive-data-processing-1").value=cmpApi.getFieldValue("usut","SensitiveDataProcessing")[1],document.getElementById("usut-sensitive-data-processing-2").value=cmpApi.getFieldValue("usut","SensitiveDataProcessing")[2],document.getElementById("usut-sensitive-data-processing-3").value=cmpApi.getFieldValue("usut","SensitiveDataProcessing")[3],document.getElementById("usut-sensitive-data-processing-4").value=cmpApi.getFieldValue("usut","SensitiveDataProcessing")[4],document.getElementById("usut-sensitive-data-processing-5").value=cmpApi.getFieldValue("usut","SensitiveDataProcessing")[5],document.getElementById("usut-sensitive-data-processing-6").value=cmpApi.getFieldValue("usut","SensitiveDataProcessing")[6],document.getElementById("usut-sensitive-data-processing-7").value=cmpApi.getFieldValue("usut","SensitiveDataProcessing")[7],document.getElementById("usut-known-child-sensitive-data-consents").value=cmpApi.getFieldValue("usut","KnownChildSensitiveDataConsents"),document.getElementById("usut-mspa-covered-transaction").value=cmpApi.getFieldValue("usut","MspaCoveredTransaction"),document.getElementById("usut-mspa-opt-out-option-mode").value=cmpApi.getFieldValue("usut","MspaOptOutOptionMode"),document.getElementById("usut-mspa-service-provider-mode").value=cmpApi.getFieldValue("usut","MspaServiceProviderMode")):(document.getElementById("usut-included").checked=!1,disableusut(!0)),cmpApi.hasSection("usct")?(document.getElementById("usct-included").checked=!0,disableusct(!1),document.getElementById("usct-sharing-notice").value=cmpApi.getFieldValue("usct","SharingNotice"),document.getElementById("usct-sale-opt-out-notice").value=cmpApi.getFieldValue("usct","SaleOptOutNotice"),document.getElementById("usct-targeted-advertising-opt-out-notice").value=cmpApi.getFieldValue("usct","TargetedAdvertisingOptOutNotice"),document.getElementById("usct-sale-opt-out").value=cmpApi.getFieldValue("usct","SaleOptOut"),document.getElementById("usct-targeted-advertising-opt-out").value=cmpApi.getFieldValue("usct","TargetedAdvertisingOptOut"),document.getElementById("usct-sensitive-data-processing-0").value=cmpApi.getFieldValue("usct","SensitiveDataProcessing")[0],document.getElementById("usct-sensitive-data-processing-1").value=cmpApi.getFieldValue("usct","SensitiveDataProcessing")[1],document.getElementById("usct-sensitive-data-processing-2").value=cmpApi.getFieldValue("usct","SensitiveDataProcessing")[2],document.getElementById("usct-sensitive-data-processing-3").value=cmpApi.getFieldValue("usct","SensitiveDataProcessing")[3],document.getElementById("usct-sensitive-data-processing-4").value=cmpApi.getFieldValue("usct","SensitiveDataProcessing")[4],document.getElementById("usct-sensitive-data-processing-5").value=cmpApi.getFieldValue("usct","SensitiveDataProcessing")[5],document.getElementById("usct-sensitive-data-processing-6").value=cmpApi.getFieldValue("usct","SensitiveDataProcessing")[6],document.getElementById("usct-sensitive-data-processing-7").value=cmpApi.getFieldValue("usct","SensitiveDataProcessing")[7],document.getElementById("usct-known-child-sensitive-data-consents-0").value=cmpApi.getFieldValue("usct","KnownChildSensitiveDataConsents")[0],document.getElementById("usct-known-child-sensitive-data-consents-1").value=cmpApi.getFieldValue("usct","KnownChildSensitiveDataConsents")[1],document.getElementById("usct-known-child-sensitive-data-consents-2").value=cmpApi.getFieldValue("usct","KnownChildSensitiveDataConsents")[2],document.getElementById("usct-mspa-covered-transaction").value=cmpApi.getFieldValue("usct","MspaCoveredTransaction"),document.getElementById("usct-mspa-opt-out-option-mode").value=cmpApi.getFieldValue("usct","MspaOptOutOptionMode"),document.getElementById("usct-mspa-service-provider-mode").value=cmpApi.getFieldValue("usct","MspaServiceProviderMode"),document.getElementById("usct-gpc-segment-included").checked=cmpApi.getFieldValue("usct","GpcSegmentIncluded"),document.getElementById("usct-gpc").checked=cmpApi.getFieldValue("usct","Gpc")):(document.getElementById("usct-included").checked=!1,disableusct(!0)),cmpApi.hasSection("usfl")?(document.getElementById("usfl-included").checked=!0,disableusfl(!1),document.getElementById("usfl-processing-notice").value=cmpApi.getFieldValue("usfl","ProcessingNotice"),document.getElementById("usfl-sale-opt-out-notice").value=cmpApi.getFieldValue("usfl","SaleOptOutNotice"),document.getElementById("usfl-targeted-advertising-opt-out-notice").value=cmpApi.getFieldValue("usfl","TargetedAdvertisingOptOutNotice"),document.getElementById("usfl-sale-opt-out").value=cmpApi.getFieldValue("usfl","SaleOptOut"),document.getElementById("usfl-targeted-advertising-opt-out").value=cmpApi.getFieldValue("usfl","TargetedAdvertisingOptOut"),document.getElementById("usfl-sensitive-data-processing-0").value=cmpApi.getFieldValue("usfl","SensitiveDataProcessing")[0],document.getElementById("usfl-sensitive-data-processing-1").value=cmpApi.getFieldValue("usfl","SensitiveDataProcessing")[1],document.getElementById("usfl-sensitive-data-processing-2").value=cmpApi.getFieldValue("usfl","SensitiveDataProcessing")[2],document.getElementById("usfl-sensitive-data-processing-3").value=cmpApi.getFieldValue("usfl","SensitiveDataProcessing")[3],document.getElementById("usfl-sensitive-data-processing-4").value=cmpApi.getFieldValue("usfl","SensitiveDataProcessing")[4],document.getElementById("usfl-sensitive-data-processing-5").value=cmpApi.getFieldValue("usfl","SensitiveDataProcessing")[5],document.getElementById("usfl-sensitive-data-processing-6").value=cmpApi.getFieldValue("usfl","SensitiveDataProcessing")[6],document.getElementById("usfl-sensitive-data-processing-7").value=cmpApi.getFieldValue("usfl","SensitiveDataProcessing")[7],document.getElementById("usfl-known-child-sensitive-data-consents-0").value=cmpApi.getFieldValue("usfl","KnownChildSensitiveDataConsents")[0],document.getElementById("usfl-known-child-sensitive-data-consents-1").value=cmpApi.getFieldValue("usfl","KnownChildSensitiveDataConsents")[1],document.getElementById("usfl-known-child-sensitive-data-consents-2").value=cmpApi.getFieldValue("usfl","KnownChildSensitiveDataConsents")[2],document.getElementById("usfl-additional-data-processing-consent").value=cmpApi.getFieldValue("usfl","AdditionalDataProcessingConsent"),document.getElementById("usfl-mspa-covered-transaction").value=cmpApi.getFieldValue("usfl","MspaCoveredTransaction"),document.getElementById("usfl-mspa-opt-out-option-mode").value=cmpApi.getFieldValue("usfl","MspaOptOutOptionMode"),document.getElementById("usfl-mspa-service-provider-mode").value=cmpApi.getFieldValue("usfl","MspaServiceProviderMode")):(document.getElementById("usfl-included").checked=!1,disableusfl(!0)),cmpApi.hasSection("usmt")?(document.getElementById("usmt-included").checked=!0,disableusmt(!1),document.getElementById("usmt-sharing-notice").value=cmpApi.getFieldValue("usmt","SharingNotice"),document.getElementById("usmt-sale-opt-out-notice").value=cmpApi.getFieldValue("usmt","SaleOptOutNotice"),document.getElementById("usmt-targeted-advertising-opt-out-notice").value=cmpApi.getFieldValue("usmt","TargetedAdvertisingOptOutNotice"),document.getElementById("usmt-sale-opt-out").value=cmpApi.getFieldValue("usmt","SaleOptOut"),document.getElementById("usmt-targeted-advertising-opt-out").value=cmpApi.getFieldValue("usmt","TargetedAdvertisingOptOut"),document.getElementById("usmt-sensitive-data-processing-0").value=cmpApi.getFieldValue("usmt","SensitiveDataProcessing")[0],document.getElementById("usmt-sensitive-data-processing-1").value=cmpApi.getFieldValue("usmt","SensitiveDataProcessing")[1],document.getElementById("usmt-sensitive-data-processing-2").value=cmpApi.getFieldValue("usmt","SensitiveDataProcessing")[2],document.getElementById("usmt-sensitive-data-processing-3").value=cmpApi.getFieldValue("usmt","SensitiveDataProcessing")[3],document.getElementById("usmt-sensitive-data-processing-4").value=cmpApi.getFieldValue("usmt","SensitiveDataProcessing")[4],document.getElementById("usmt-sensitive-data-processing-5").value=cmpApi.getFieldValue("usmt","SensitiveDataProcessing")[5],document.getElementById("usmt-sensitive-data-processing-6").value=cmpApi.getFieldValue("usmt","SensitiveDataProcessing")[6],document.getElementById("usmt-sensitive-data-processing-7").value=cmpApi.getFieldValue("usmt","SensitiveDataProcessing")[7],document.getElementById("usmt-known-child-sensitive-data-consents-0").value=cmpApi.getFieldValue("usmt","KnownChildSensitiveDataConsents")[0],document.getElementById("usmt-known-child-sensitive-data-consents-1").value=cmpApi.getFieldValue("usmt","KnownChildSensitiveDataConsents")[1],document.getElementById("usmt-known-child-sensitive-data-consents-2").value=cmpApi.getFieldValue("usmt","KnownChildSensitiveDataConsents")[2],document.getElementById("usmt-additional-data-processing-consent").value=cmpApi.getFieldValue("usmt","AdditionalDataProcessingConsent"),document.getElementById("usmt-mspa-covered-transaction").value=cmpApi.getFieldValue("usmt","MspaCoveredTransaction"),document.getElementById("usmt-mspa-opt-out-option-mode").value=cmpApi.getFieldValue("usmt","MspaOptOutOptionMode"),document.getElementById("usmt-mspa-service-provider-mode").value=cmpApi.getFieldValue("usmt","MspaServiceProviderMode"),document.getElementById("usmt-gpc-segment-included").checked=cmpApi.getFieldValue("usmt","GpcSegmentIncluded"),document.getElementById("usmt-gpc").checked=cmpApi.getFieldValue("usmt","Gpc")):(document.getElementById("usmt-included").checked=!1,disableusmt(!0)),cmpApi.hasSection("usor")?(document.getElementById("usor-included").checked=!0,disableusor(!1),document.getElementById("usor-processing-notice").value=cmpApi.getFieldValue("usor","ProcessingNotice"),document.getElementById("usor-sale-opt-out-notice").value=cmpApi.getFieldValue("usor","SaleOptOutNotice"),document.getElementById("usor-targeted-advertising-opt-out-notice").value=cmpApi.getFieldValue("usor","TargetedAdvertisingOptOutNotice"),document.getElementById("usor-sale-opt-out").value=cmpApi.getFieldValue("usor","SaleOptOut"),document.getElementById("usor-targeted-advertising-opt-out").value=cmpApi.getFieldValue("usor","TargetedAdvertisingOptOut"),document.getElementById("usor-sensitive-data-processing-0").value=cmpApi.getFieldValue("usor","SensitiveDataProcessing")[0],document.getElementById("usor-sensitive-data-processing-1").value=cmpApi.getFieldValue("usor","SensitiveDataProcessing")[1],document.getElementById("usor-sensitive-data-processing-2").value=cmpApi.getFieldValue("usor","SensitiveDataProcessing")[2],document.getElementById("usor-sensitive-data-processing-3").value=cmpApi.getFieldValue("usor","SensitiveDataProcessing")[3],document.getElementById("usor-sensitive-data-processing-4").value=cmpApi.getFieldValue("usor","SensitiveDataProcessing")[4],document.getElementById("usor-sensitive-data-processing-5").value=cmpApi.getFieldValue("usor","SensitiveDataProcessing")[5],document.getElementById("usor-sensitive-data-processing-6").value=cmpApi.getFieldValue("usor","SensitiveDataProcessing")[6],document.getElementById("usor-sensitive-data-processing-7").value=cmpApi.getFieldValue("usor","SensitiveDataProcessing")[7],document.getElementById("usor-sensitive-data-processing-8").value=cmpApi.getFieldValue("usor","SensitiveDataProcessing")[8],document.getElementById("usor-sensitive-data-processing-9").value=cmpApi.getFieldValue("usor","SensitiveDataProcessing")[9],document.getElementById("usor-sensitive-data-processing-10").value=cmpApi.getFieldValue("usor","SensitiveDataProcessing")[10],document.getElementById("usor-known-child-sensitive-data-consents-0").value=cmpApi.getFieldValue("usor","KnownChildSensitiveDataConsents")[0],document.getElementById("usor-known-child-sensitive-data-consents-1").value=cmpApi.getFieldValue("usor","KnownChildSensitiveDataConsents")[1],document.getElementById("usor-known-child-sensitive-data-consents-2").value=cmpApi.getFieldValue("usor","KnownChildSensitiveDataConsents")[2],document.getElementById("usor-additional-data-processing-consent").value=cmpApi.getFieldValue("usor","AdditionalDataProcessingConsent"),document.getElementById("usor-mspa-covered-transaction").value=cmpApi.getFieldValue("usor","MspaCoveredTransaction"),document.getElementById("usor-mspa-opt-out-option-mode").value=cmpApi.getFieldValue("usor","MspaOptOutOptionMode"),document.getElementById("usor-mspa-service-provider-mode").value=cmpApi.getFieldValue("usor","MspaServiceProviderMode"),document.getElementById("usor-gpc-segment-included").checked=cmpApi.getFieldValue("usor","GpcSegmentIncluded"),document.getElementById("usor-gpc").checked=cmpApi.getFieldValue("usor","Gpc")):(document.getElementById("usor-included").checked=!1,disableusor(!0)),cmpApi.hasSection("ustx")?(document.getElementById("ustx-included").checked=!0,disableustx(!1),document.getElementById("ustx-processing-notice").value=cmpApi.getFieldValue("ustx","ProcessingNotice"),document.getElementById("ustx-sale-opt-out-notice").value=cmpApi.getFieldValue("ustx","SaleOptOutNotice"),document.getElementById("ustx-targeted-advertising-opt-out-notice").value=cmpApi.getFieldValue("ustx","TargetedAdvertisingOptOutNotice"),document.getElementById("ustx-sale-opt-out").value=cmpApi.getFieldValue("ustx","SaleOptOut"),document.getElementById("ustx-targeted-advertising-opt-out").value=cmpApi.getFieldValue("ustx","TargetedAdvertisingOptOut"),document.getElementById("ustx-sensitive-data-processing-0").value=cmpApi.getFieldValue("ustx","SensitiveDataProcessing")[0],document.getElementById("ustx-sensitive-data-processing-1").value=cmpApi.getFieldValue("ustx","SensitiveDataProcessing")[1],document.getElementById("ustx-sensitive-data-processing-2").value=cmpApi.getFieldValue("ustx","SensitiveDataProcessing")[2],document.getElementById("ustx-sensitive-data-processing-3").value=cmpApi.getFieldValue("ustx","SensitiveDataProcessing")[3],document.getElementById("ustx-sensitive-data-processing-4").value=cmpApi.getFieldValue("ustx","SensitiveDataProcessing")[4],document.getElementById("ustx-sensitive-data-processing-5").value=cmpApi.getFieldValue("ustx","SensitiveDataProcessing")[5],document.getElementById("ustx-sensitive-data-processing-6").value=cmpApi.getFieldValue("ustx","SensitiveDataProcessing")[6],document.getElementById("ustx-sensitive-data-processing-7").value=cmpApi.getFieldValue("ustx","SensitiveDataProcessing")[7],document.getElementById("ustx-known-child-sensitive-data-consents").value=cmpApi.getFieldValue("ustx","KnownChildSensitiveDataConsents"),document.getElementById("ustx-additional-data-processing-consent").value=cmpApi.getFieldValue("ustx","AdditionalDataProcessingConsent"),document.getElementById("ustx-mspa-covered-transaction").value=cmpApi.getFieldValue("ustx","MspaCoveredTransaction"),document.getElementById("ustx-mspa-opt-out-option-mode").value=cmpApi.getFieldValue("ustx","MspaOptOutOptionMode"),document.getElementById("ustx-mspa-service-provider-mode").value=cmpApi.getFieldValue("ustx","MspaServiceProviderMode"),document.getElementById("ustx-gpc-segment-included").checked=cmpApi.getFieldValue("ustx","GpcSegmentIncluded"),document.getElementById("ustx-gpc").checked=cmpApi.getFieldValue("ustx","Gpc")):(document.getElementById("ustx-included").checked=!1,disableustx(!0)),cmpApi.hasSection("usde")?(document.getElementById("usde-included").checked=!0,disableusde(!1),document.getElementById("usde-processing-notice").value=cmpApi.getFieldValue("usde","ProcessingNotice"),document.getElementById("usde-sale-opt-out-notice").value=cmpApi.getFieldValue("usde","SaleOptOutNotice"),document.getElementById("usde-targeted-advertising-opt-out-notice").value=cmpApi.getFieldValue("usde","TargetedAdvertisingOptOutNotice"),document.getElementById("usde-sale-opt-out").value=cmpApi.getFieldValue("usde","SaleOptOut"),document.getElementById("usde-targeted-advertising-opt-out").value=cmpApi.getFieldValue("usde","TargetedAdvertisingOptOut"),document.getElementById("usde-sensitive-data-processing-0").value=cmpApi.getFieldValue("usde","SensitiveDataProcessing")[0],document.getElementById("usde-sensitive-data-processing-1").value=cmpApi.getFieldValue("usde","SensitiveDataProcessing")[1],document.getElementById("usde-sensitive-data-processing-2").value=cmpApi.getFieldValue("usde","SensitiveDataProcessing")[2],document.getElementById("usde-sensitive-data-processing-3").value=cmpApi.getFieldValue("usde","SensitiveDataProcessing")[3],document.getElementById("usde-sensitive-data-processing-4").value=cmpApi.getFieldValue("usde","SensitiveDataProcessing")[4],document.getElementById("usde-sensitive-data-processing-5").value=cmpApi.getFieldValue("usde","SensitiveDataProcessing")[5],document.getElementById("usde-sensitive-data-processing-6").value=cmpApi.getFieldValue("usde","SensitiveDataProcessing")[6],document.getElementById("usde-sensitive-data-processing-7").value=cmpApi.getFieldValue("usde","SensitiveDataProcessing")[7],document.getElementById("usde-sensitive-data-processing-8").value=cmpApi.getFieldValue("usde","SensitiveDataProcessing")[8],document.getElementById("usde-known-child-sensitive-data-consents-0").value=cmpApi.getFieldValue("usde","KnownChildSensitiveDataConsents")[0],document.getElementById("usde-known-child-sensitive-data-consents-1").value=cmpApi.getFieldValue("usde","KnownChildSensitiveDataConsents")[1],document.getElementById("usde-known-child-sensitive-data-consents-2").value=cmpApi.getFieldValue("usde","KnownChildSensitiveDataConsents")[2],document.getElementById("usde-known-child-sensitive-data-consents-3").value=cmpApi.getFieldValue("usde","KnownChildSensitiveDataConsents")[3],document.getElementById("usde-known-child-sensitive-data-consents-4").value=cmpApi.getFieldValue("usde","KnownChildSensitiveDataConsents")[4],document.getElementById("usde-additional-data-processing-consent").value=cmpApi.getFieldValue("usde","AdditionalDataProcessingConsent"),document.getElementById("usde-mspa-covered-transaction").value=cmpApi.getFieldValue("usde","MspaCoveredTransaction"),document.getElementById("usde-mspa-opt-out-option-mode").value=cmpApi.getFieldValue("usde","MspaOptOutOptionMode"),document.getElementById("usde-mspa-service-provider-mode").value=cmpApi.getFieldValue("usde","MspaServiceProviderMode"),document.getElementById("usde-gpc-segment-included").checked=cmpApi.getFieldValue("usde","GpcSegmentIncluded"),document.getElementById("usde-gpc").checked=cmpApi.getFieldValue("usde","Gpc")):(document.getElementById("usde-included").checked=!1,disableusde(!0)),cmpApi.hasSection("usia")?(document.getElementById("usia-included").checked=!0,disableusia(!1),document.getElementById("usia-processing-notice").value=cmpApi.getFieldValue("usia","ProcessingNotice"),document.getElementById("usia-sale-opt-out-notice").value=cmpApi.getFieldValue("usia","SaleOptOutNotice"),document.getElementById("usia-targeted-advertising-opt-out-notice").value=cmpApi.getFieldValue("usia","TargetedAdvertisingOptOutNotice"),document.getElementById("usia-sensitive-data-opt-out-notice").value=cmpApi.getFieldValue("usia","SensitiveDataOptOutNotice"),document.getElementById("usia-sale-opt-out").value=cmpApi.getFieldValue("usia","SaleOptOut"),document.getElementById("usia-targeted-advertising-opt-out").value=cmpApi.getFieldValue("usia","TargetedAdvertisingOptOut"),document.getElementById("usia-sensitive-data-processing-0").value=cmpApi.getFieldValue("usia","SensitiveDataProcessing")[0],document.getElementById("usia-sensitive-data-processing-1").value=cmpApi.getFieldValue("usia","SensitiveDataProcessing")[1],document.getElementById("usia-sensitive-data-processing-2").value=cmpApi.getFieldValue("usia","SensitiveDataProcessing")[2],document.getElementById("usia-sensitive-data-processing-3").value=cmpApi.getFieldValue("usia","SensitiveDataProcessing")[3],document.getElementById("usia-sensitive-data-processing-4").value=cmpApi.getFieldValue("usia","SensitiveDataProcessing")[4],document.getElementById("usia-sensitive-data-processing-5").value=cmpApi.getFieldValue("usia","SensitiveDataProcessing")[5],document.getElementById("usia-sensitive-data-processing-6").value=cmpApi.getFieldValue("usia","SensitiveDataProcessing")[6],document.getElementById("usia-sensitive-data-processing-7").value=cmpApi.getFieldValue("usia","SensitiveDataProcessing")[7],document.getElementById("usia-known-child-sensitive-data-consents").value=cmpApi.getFieldValue("usia","KnownChildSensitiveDataConsents"),document.getElementById("usia-mspa-covered-transaction").value=cmpApi.getFieldValue("usia","MspaCoveredTransaction"),document.getElementById("usia-mspa-opt-out-option-mode").value=cmpApi.getFieldValue("usia","MspaOptOutOptionMode"),document.getElementById("usia-mspa-service-provider-mode").value=cmpApi.getFieldValue("usia","MspaServiceProviderMode"),document.getElementById("usia-gpc-segment-included").checked=cmpApi.getFieldValue("usia","GpcSegmentIncluded"),document.getElementById("usia-gpc").checked=cmpApi.getFieldValue("usia","Gpc")):(document.getElementById("usia-included").checked=!1,disableusia(!0)),cmpApi.hasSection("usne")?(document.getElementById("usne-included").checked=!0,disableusne(!1),document.getElementById("usne-processing-notice").value=cmpApi.getFieldValue("usne","ProcessingNotice"),document.getElementById("usne-sale-opt-out-notice").value=cmpApi.getFieldValue("usne","SaleOptOutNotice"),document.getElementById("usne-targeted-advertising-opt-out-notice").value=cmpApi.getFieldValue("usne","TargetedAdvertisingOptOutNotice"),document.getElementById("usne-sale-opt-out").value=cmpApi.getFieldValue("usne","SaleOptOut"),document.getElementById("usne-targeted-advertising-opt-out").value=cmpApi.getFieldValue("usne","TargetedAdvertisingOptOut"),document.getElementById("usne-sensitive-data-processing-0").value=cmpApi.getFieldValue("usne","SensitiveDataProcessing")[0],document.getElementById("usne-sensitive-data-processing-1").value=cmpApi.getFieldValue("usne","SensitiveDataProcessing")[1],document.getElementById("usne-sensitive-data-processing-2").value=cmpApi.getFieldValue("usne","SensitiveDataProcessing")[2],document.getElementById("usne-sensitive-data-processing-3").value=cmpApi.getFieldValue("usne","SensitiveDataProcessing")[3],document.getElementById("usne-sensitive-data-processing-4").value=cmpApi.getFieldValue("usne","SensitiveDataProcessing")[4],document.getElementById("usne-sensitive-data-processing-5").value=cmpApi.getFieldValue("usne","SensitiveDataProcessing")[5],document.getElementById("usne-sensitive-data-processing-6").value=cmpApi.getFieldValue("usne","SensitiveDataProcessing")[6],document.getElementById("usne-sensitive-data-processing-7").value=cmpApi.getFieldValue("usne","SensitiveDataProcessing")[7],document.getElementById("usne-known-child-sensitive-data-consents").value=cmpApi.getFieldValue("usne","KnownChildSensitiveDataConsents"),document.getElementById("usne-additional-data-processing-consent").value=cmpApi.getFieldValue("usne","AdditionalDataProcessingConsent"),document.getElementById("usne-mspa-covered-transaction").value=cmpApi.getFieldValue("usne","MspaCoveredTransaction"),document.getElementById("usne-mspa-opt-out-option-mode").value=cmpApi.getFieldValue("usne","MspaOptOutOptionMode"),document.getElementById("usne-mspa-service-provider-mode").value=cmpApi.getFieldValue("usne","MspaServiceProviderMode"),document.getElementById("usne-gpc-segment-included").checked=cmpApi.getFieldValue("usne","GpcSegmentIncluded"),document.getElementById("usne-gpc").checked=cmpApi.getFieldValue("usne","Gpc")):(document.getElementById("usne-included").checked=!1,disableusne(!0)),cmpApi.hasSection("usnh")?(document.getElementById("usnh-included").checked=!0,disableusnh(!1),document.getElementById("usnh-processing-notice").value=cmpApi.getFieldValue("usnh","ProcessingNotice"),document.getElementById("usnh-sale-opt-out-notice").value=cmpApi.getFieldValue("usnh","SaleOptOutNotice"),document.getElementById("usnh-targeted-advertising-opt-out-notice").value=cmpApi.getFieldValue("usnh","TargetedAdvertisingOptOutNotice"),document.getElementById("usnh-sale-opt-out").value=cmpApi.getFieldValue("usnh","SaleOptOut"),document.getElementById("usnh-targeted-advertising-opt-out").value=cmpApi.getFieldValue("usnh","TargetedAdvertisingOptOut"),document.getElementById("usnh-sensitive-data-processing-0").value=cmpApi.getFieldValue("usnh","SensitiveDataProcessing")[0],document.getElementById("usnh-sensitive-data-processing-1").value=cmpApi.getFieldValue("usnh","SensitiveDataProcessing")[1],document.getElementById("usnh-sensitive-data-processing-2").value=cmpApi.getFieldValue("usnh","SensitiveDataProcessing")[2],document.getElementById("usnh-sensitive-data-processing-3").value=cmpApi.getFieldValue("usnh","SensitiveDataProcessing")[3],document.getElementById("usnh-sensitive-data-processing-4").value=cmpApi.getFieldValue("usnh","SensitiveDataProcessing")[4],document.getElementById("usnh-sensitive-data-processing-5").value=cmpApi.getFieldValue("usnh","SensitiveDataProcessing")[5],document.getElementById("usnh-sensitive-data-processing-6").value=cmpApi.getFieldValue("usnh","SensitiveDataProcessing")[6],document.getElementById("usnh-sensitive-data-processing-7").value=cmpApi.getFieldValue("usnh","SensitiveDataProcessing")[7],document.getElementById("usnh-known-child-sensitive-data-consents-0").value=cmpApi.getFieldValue("usnh","KnownChildSensitiveDataConsents")[0],document.getElementById("usnh-known-child-sensitive-data-consents-1").value=cmpApi.getFieldValue("usnh","KnownChildSensitiveDataConsents")[1],document.getElementById("usnh-known-child-sensitive-data-consents-2").value=cmpApi.getFieldValue("usnh","KnownChildSensitiveDataConsents")[2],document.getElementById("usnh-additional-data-processing-consent").value=cmpApi.getFieldValue("usnh","AdditionalDataProcessingConsent"),document.getElementById("usnh-mspa-covered-transaction").value=cmpApi.getFieldValue("usnh","MspaCoveredTransaction"),document.getElementById("usnh-mspa-opt-out-option-mode").value=cmpApi.getFieldValue("usnh","MspaOptOutOptionMode"),document.getElementById("usnh-mspa-service-provider-mode").value=cmpApi.getFieldValue("usnh","MspaServiceProviderMode"),document.getElementById("usnh-gpc-segment-included").checked=cmpApi.getFieldValue("usnh","GpcSegmentIncluded"),document.getElementById("usnh-gpc").checked=cmpApi.getFieldValue("usnh","Gpc")):(document.getElementById("usnh-included").checked=!1,disableusnh(!0)),cmpApi.hasSection("usnj")?(document.getElementById("usnj-included").checked=!0,disableusnj(!1),document.getElementById("usnj-processing-notice").value=cmpApi.getFieldValue("usnj","ProcessingNotice"),document.getElementById("usnj-sale-opt-out-notice").value=cmpApi.getFieldValue("usnj","SaleOptOutNotice"),document.getElementById("usnj-targeted-advertising-opt-out-notice").value=cmpApi.getFieldValue("usnj","TargetedAdvertisingOptOutNotice"),document.getElementById("usnj-sale-opt-out").value=cmpApi.getFieldValue("usnj","SaleOptOut"),document.getElementById("usnj-targeted-advertising-opt-out").value=cmpApi.getFieldValue("usnj","TargetedAdvertisingOptOut"),document.getElementById("usnj-sensitive-data-processing-0").value=cmpApi.getFieldValue("usnj","SensitiveDataProcessing")[0],document.getElementById("usnj-sensitive-data-processing-1").value=cmpApi.getFieldValue("usnj","SensitiveDataProcessing")[1],document.getElementById("usnj-sensitive-data-processing-2").value=cmpApi.getFieldValue("usnj","SensitiveDataProcessing")[2],document.getElementById("usnj-sensitive-data-processing-3").value=cmpApi.getFieldValue("usnj","SensitiveDataProcessing")[3],document.getElementById("usnj-sensitive-data-processing-4").value=cmpApi.getFieldValue("usnj","SensitiveDataProcessing")[4],document.getElementById("usnj-sensitive-data-processing-5").value=cmpApi.getFieldValue("usnj","SensitiveDataProcessing")[5],document.getElementById("usnj-sensitive-data-processing-6").value=cmpApi.getFieldValue("usnj","SensitiveDataProcessing")[6],document.getElementById("usnj-sensitive-data-processing-7").value=cmpApi.getFieldValue("usnj","SensitiveDataProcessing")[7],document.getElementById("usnj-sensitive-data-processing-8").value=cmpApi.getFieldValue("usnj","SensitiveDataProcessing")[8],document.getElementById("usnj-sensitive-data-processing-9").value=cmpApi.getFieldValue("usnj","SensitiveDataProcessing")[9],document.getElementById("usnj-known-child-sensitive-data-consents-0").value=cmpApi.getFieldValue("usnj","KnownChildSensitiveDataConsents")[0],document.getElementById("usnj-known-child-sensitive-data-consents-1").value=cmpApi.getFieldValue("usnj","KnownChildSensitiveDataConsents")[1],document.getElementById("usnj-known-child-sensitive-data-consents-2").value=cmpApi.getFieldValue("usnj","KnownChildSensitiveDataConsents")[2],document.getElementById("usnj-known-child-sensitive-data-consents-3").value=cmpApi.getFieldValue("usnj","KnownChildSensitiveDataConsents")[3],document.getElementById("usnj-known-child-sensitive-data-consents-4").value=cmpApi.getFieldValue("usnj","KnownChildSensitiveDataConsents")[4],document.getElementById("usnj-additional-data-processing-consent").value=cmpApi.getFieldValue("usnj","AdditionalDataProcessingConsent"),document.getElementById("usnj-mspa-covered-transaction").value=cmpApi.getFieldValue("usnj","MspaCoveredTransaction"),document.getElementById("usnj-mspa-opt-out-option-mode").value=cmpApi.getFieldValue("usnj","MspaOptOutOptionMode"),document.getElementById("usnj-mspa-service-provider-mode").value=cmpApi.getFieldValue("usnj","MspaServiceProviderMode"),document.getElementById("usnj-gpc-segment-included").checked=cmpApi.getFieldValue("usnj","GpcSegmentIncluded"),document.getElementById("usnj-gpc").checked=cmpApi.getFieldValue("usnj","Gpc")):(document.getElementById("usnj-included").checked=!1,disableusnj(!0)),cmpApi.hasSection("ustn")?(document.getElementById("ustn-included").checked=!0,disableustn(!1),document.getElementById("ustn-processing-notice").value=cmpApi.getFieldValue("ustn","ProcessingNotice"),document.getElementById("ustn-sale-opt-out-notice").value=cmpApi.getFieldValue("ustn","SaleOptOutNotice"),document.getElementById("ustn-targeted-advertising-opt-out-notice").value=cmpApi.getFieldValue("ustn","TargetedAdvertisingOptOutNotice"),document.getElementById("ustn-sale-opt-out").value=cmpApi.getFieldValue("ustn","SaleOptOut"),document.getElementById("ustn-targeted-advertising-opt-out").value=cmpApi.getFieldValue("ustn","TargetedAdvertisingOptOut"),document.getElementById("ustn-sensitive-data-processing-0").value=cmpApi.getFieldValue("ustn","SensitiveDataProcessing")[0],document.getElementById("ustn-sensitive-data-processing-1").value=cmpApi.getFieldValue("ustn","SensitiveDataProcessing")[1],document.getElementById("ustn-sensitive-data-processing-2").value=cmpApi.getFieldValue("ustn","SensitiveDataProcessing")[2],document.getElementById("ustn-sensitive-data-processing-3").value=cmpApi.getFieldValue("ustn","SensitiveDataProcessing")[3],document.getElementById("ustn-sensitive-data-processing-4").value=cmpApi.getFieldValue("ustn","SensitiveDataProcessing")[4],document.getElementById("ustn-sensitive-data-processing-5").value=cmpApi.getFieldValue("ustn","SensitiveDataProcessing")[5],document.getElementById("ustn-sensitive-data-processing-6").value=cmpApi.getFieldValue("ustn","SensitiveDataProcessing")[6],document.getElementById("ustn-sensitive-data-processing-7").value=cmpApi.getFieldValue("ustn","SensitiveDataProcessing")[7],document.getElementById("ustn-known-child-sensitive-data-consents").value=cmpApi.getFieldValue("ustn","KnownChildSensitiveDataConsents"),document.getElementById("ustn-additional-data-processing-consent").value=cmpApi.getFieldValue("ustn","AdditionalDataProcessingConsent"),document.getElementById("ustn-mspa-covered-transaction").value=cmpApi.getFieldValue("ustn","MspaCoveredTransaction"),document.getElementById("ustn-mspa-opt-out-option-mode").value=cmpApi.getFieldValue("ustn","MspaOptOutOptionMode"),document.getElementById("ustn-mspa-service-provider-mode").value=cmpApi.getFieldValue("ustn","MspaServiceProviderMode"),document.getElementById("ustn-gpc-segment-included").checked=cmpApi.getFieldValue("ustn","GpcSegmentIncluded"),document.getElementById("ustn-gpc").checked=cmpApi.getFieldValue("ustn","Gpc")):(document.getElementById("ustn-included").checked=!1,disableustn(!0)),cmpApi.hasSection("usmn")?(document.getElementById("usmn-included").checked=!0,disableusmn(!1),document.getElementById("usmn-processing-notice").value=cmpApi.getFieldValue("usmn","ProcessingNotice"),document.getElementById("usmn-sale-opt-out-notice").value=cmpApi.getFieldValue("usmn","SaleOptOutNotice"),document.getElementById("usmn-targeted-advertising-opt-out-notice").value=cmpApi.getFieldValue("usmn","TargetedAdvertisingOptOutNotice"),document.getElementById("usmn-sale-opt-out").value=cmpApi.getFieldValue("usmn","SaleOptOut"),document.getElementById("usmn-targeted-advertising-opt-out").value=cmpApi.getFieldValue("usmn","TargetedAdvertisingOptOut"),document.getElementById("usmn-sensitive-data-processing-0").value=cmpApi.getFieldValue("usmn","SensitiveDataProcessing")[0],document.getElementById("usmn-sensitive-data-processing-1").value=cmpApi.getFieldValue("usmn","SensitiveDataProcessing")[1],document.getElementById("usmn-sensitive-data-processing-2").value=cmpApi.getFieldValue("usmn","SensitiveDataProcessing")[2],document.getElementById("usmn-sensitive-data-processing-3").value=cmpApi.getFieldValue("usmn","SensitiveDataProcessing")[3],document.getElementById("usmn-sensitive-data-processing-4").value=cmpApi.getFieldValue("usmn","SensitiveDataProcessing")[4],document.getElementById("usmn-sensitive-data-processing-5").value=cmpApi.getFieldValue("usmn","SensitiveDataProcessing")[5],document.getElementById("usmn-sensitive-data-processing-6").value=cmpApi.getFieldValue("usmn","SensitiveDataProcessing")[6],document.getElementById("usmn-sensitive-data-processing-7").value=cmpApi.getFieldValue("usmn","SensitiveDataProcessing")[7],document.getElementById("usmn-known-child-sensitive-data-consents").value=cmpApi.getFieldValue("usmn","KnownChildSensitiveDataConsents"),document.getElementById("usmn-additional-data-processing-consent").value=cmpApi.getFieldValue("usmn","AdditionalDataProcessingConsent"),document.getElementById("usmn-mspa-covered-transaction").value=cmpApi.getFieldValue("usmn","MspaCoveredTransaction"),document.getElementById("usmn-mspa-opt-out-option-mode").value=cmpApi.getFieldValue("usmn","MspaOptOutOptionMode"),document.getElementById("usmn-mspa-service-provider-mode").value=cmpApi.getFieldValue("usmn","MspaServiceProviderMode"),document.getElementById("usmn-gpc-segment-included").checked=cmpApi.getFieldValue("usmn","GpcSegmentIncluded"),document.getElementById("usmn-gpc").checked=cmpApi.getFieldValue("usmn","Gpc")):(document.getElementById("usmn-included").checked=!1,disableusmn(!0));let o=cmpApi.getObject();o.tcfeuv2&&(o.tcfeuv2.Created=o.tcfeuv2.Created.toJSON(),o.tcfeuv2.LastUpdated=o.tcfeuv2.LastUpdated.toJSON()),o.tcfcav1&&(o.tcfcav1.Created=o.tcfcav1.Created.toJSON(),o.tcfcav1.LastUpdated=o.tcfcav1.LastUpdated.toJSON()),console.log(JSON.stringify(o));let d=a;i&&(d=cmpApi.hasSection("tcfeuv2")?cmpApi.getSectionString("tcfeuv2"):""),d||(d="");let r=window.location.href.indexOf("#");r>-1?window.location.href=window.location.href.substring(0,r+1)+d:window.location.href=window.location.href+"#"+d,$("#jsonview").JSONView(o,{collapsed:!0})}catch(n){throw toastr.error(n),n}}window.decode=sa;const ia=[{id:"header-tab-pane",html:ei},{id:"tcfeuv2-tab-pane",html:ti},{id:"tcfcav1-tab-pane",html:ni},{id:"uspv1-tab-pane",html:si},{id:"usnat-tab-pane",html:ii},{id:"usca-tab-pane",html:ai},{id:"usva-tab-pane",html:oi},{id:"usco-tab-pane",html:li},{id:"usut-tab-pane",html:ci},{id:"usct-tab-pane",html:di},{id:"usfl-tab-pane",html:ri},{id:"usmt-tab-pane",html:ui},{id:"usor-tab-pane",html:pi},{id:"ustx-tab-pane",html:mi},{id:"usde-tab-pane",html:vi},{id:"usia-tab-pane",html:gi},{id:"usne-tab-pane",html:Ei},{id:"usnh-tab-pane",html:hi},{id:"usnj-tab-pane",html:Si},{id:"ustn-tab-pane",html:bi},{id:"usmn-tab-pane",html:fi}];function aa(){for(const s of ia){const t=document.getElementById(s.id);t&&(t.innerHTML=s.html)}}async function oa(){window.cmpApi=new qs(100,1),window.gvlV2=await cmpApi.getGvlFromUrl({baseUrl:"/vendorlist/v2"}),console.log(gvlV2),window.gvlV3=await cmpApi.getGvlFromUrl({baseUrl:"/vendorlist/v3"}),console.log(gvlV3),window.gvlV2Ca=await cmpApi.getGvlFromUrl({baseUrl:"/vendorlist/v2/ca"}),console.log(gvlV2Ca),tcfEuV2PolicyVersionChanged(4),tcfCaV1PolicyVersionChanged(2);let s=[document.getElementById("tcfeuv2-consent-language"),document.getElementById("tcfcav1-consent-language")],t=["BG","CA","CS","DA","DE","EL","EN","ES","ET","FI","FR","HR","HU","IT","LT","LV","MT","NL","NO","PL","PT","RO","RU","SK","SL","SV","ZH"];for(let n=0;n<t.length;n++){let i=t[n];for(let a=0;a<s.length;a++){let o=s[a];o.options[o.options.length]=new Option(i,i)}}let e=window.location.href.indexOf("#");if(e>-1){let n=window.location.href.substring(e+1,window.location.href.length);n.startsWith("D")?(document.getElementById("gpp-string").value=n,decode(),document.getElementById("tcfeu-string").value=cmpApi.getSectionString("tcfeuv2")):n.startsWith("C")&&($("#tcfeu-string-tab").tab("show"),$("#tcfeuv2-tab").tab("show"),document.getElementById("tcfeu-string").value=n,document.getElementById("gpp-string").value="DBABMA~"+n,decode())}else window.location.href+="#";document.getElementById("decode-spinner").style.display="none",document.getElementById("encode-spinner").style.display="none",document.getElementById("decode-button").style.display="inline",document.getElementById("encode-button").style.display="inline"}Date.prototype.toJSON=function(){return this.toUTCString()};aa();let Vt=new Date;document.getElementById("tcfeuv2-created").valueAsDate=Vt;document.getElementById("tcfeuv2-last-updated").valueAsDate=Vt;document.getElementById("tcfcav1-created").valueAsDate=Vt;document.getElementById("tcfcav1-last-updated").valueAsDate=Vt;toastr.options={positionClass:"toast-top-full-width"};$("#jsonview").JSONView({},{collapsed:!0});oa();
