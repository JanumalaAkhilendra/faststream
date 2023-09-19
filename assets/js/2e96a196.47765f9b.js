"use strict";(self.webpackChunkfastkafka=self.webpackChunkfastkafka||[]).push([[3623],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(a),m=r,f=p["".concat(s,".").concat(m)]||p[m]||k[m]||l;return a?n.createElement(f,o(o({ref:t},c),{},{components:a})):n.createElement(f,o({ref:t},c))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5413:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>k,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var n=a(7462),r=(a(7294),a(3905));const l={},o=void 0,i={unversionedId:"api/fastkafka/executors/SequentialExecutor",id:"version-0.8.0/api/fastkafka/executors/SequentialExecutor",title:"SequentialExecutor",description:"fastkafka.executors.SequentialExecutor {fastkafka.executors.SequentialExecutor}",source:"@site/versioned_docs/version-0.8.0/api/fastkafka/executors/SequentialExecutor.md",sourceDirName:"api/fastkafka/executors",slug:"/api/fastkafka/executors/SequentialExecutor",permalink:"/docs/api/fastkafka/executors/SequentialExecutor",draft:!1,tags:[],version:"0.8.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"DynamicTaskExecutor",permalink:"/docs/api/fastkafka/executors/DynamicTaskExecutor"},next:{title:"ApacheKafkaBroker",permalink:"/docs/api/fastkafka/testing/ApacheKafkaBroker"}},s={},u=[{value:"fastkafka.executors.SequentialExecutor",id:"fastkafka.executors.SequentialExecutor",level:2},{value:"<strong>init</strong>",id:"fastkafka._components.task_streaming.SequentialExecutor.init",level:3},{value:"run",id:"fastkafka._components.task_streaming.SequentialExecutor.run",level:3}],c={toc:u},p="wrapper";function k(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"fastkafka.executors.SequentialExecutor"},"fastkafka.executors.SequentialExecutor"),(0,r.kt)("a",{href:"https://github.com/airtai/fastkafka/blob/0.8.0/fastkafka/_components/task_streaming.py#L305-L356",class:"link-to-source",target:"_blank"},"View source"),(0,r.kt)("p",null,"A class that implements a sequential executor for processing consumer records."),(0,r.kt)("p",null,"The SequentialExecutor class extends the StreamExecutor class and provides functionality\nfor running processing tasks in sequence by awaiting their coroutines."),(0,r.kt)("h3",{id:"fastkafka._components.task_streaming.SequentialExecutor.init"},(0,r.kt)("strong",{parentName:"h3"},"init")),(0,r.kt)("a",{href:"https://github.com/airtai/fastkafka/blob/0.8.0/fastkafka/_components/task_streaming.py#L312-L326",class:"link-to-source",target:"_blank"},"View source"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"__init__(\n    self, throw_exceptions=False, max_buffer_size=100000\n)\n")),(0,r.kt)("p",null,"Create an instance of SequentialExecutor"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"throw_exceptions")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bool")),(0,r.kt)("td",{parentName:"tr",align:null},"Flag indicating whether exceptions should be thrown or logged.Defaults to False."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"False"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"max_buffer_size")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"int")),(0,r.kt)("td",{parentName:"tr",align:null},"Maximum buffer size for the memory object stream.Defaults to 100_000."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"100000"))))),(0,r.kt)("h3",{id:"fastkafka._components.task_streaming.SequentialExecutor.run"},"run"),(0,r.kt)("a",{href:"https://github.com/airtai/fastkafka/blob/0.8.0/fastkafka/_components/task_streaming.py#L328-L356",class:"link-to-source",target:"_blank"},"View source"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"run(\n    self, is_shutting_down_f, generator, processor\n)\n")),(0,r.kt)("p",null,"Runs the sequential executor."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"is_shutting_down_f")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Callable[[], bool]")),(0,r.kt)("td",{parentName:"tr",align:null},"Function to check if the executor is shutting down."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"required"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"generator")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Callable[[], Awaitable[aiokafka.structs.ConsumerRecord]]")),(0,r.kt)("td",{parentName:"tr",align:null},"Generator function for retrieving consumer records."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"required"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"processor")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Callable[[aiokafka.structs.ConsumerRecord], Awaitable[NoneType]]")),(0,r.kt)("td",{parentName:"tr",align:null},"Processor function for processing consumer records."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"required"))))))}k.isMDXComponent=!0}}]);