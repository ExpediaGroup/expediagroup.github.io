"use strict";(self.webpackChunkexpediagroup_github_io=self.webpackChunkexpediagroup_github_io||[]).push([[195],{5338:(e,t,a)=>{a.r(t),a.d(t,{default:()=>j});var r=a(7294),n=a(6932),i=a(2263),o=a(3968);const c="heroBanner_Gb1t";var s=a(6447),l=a(1711),m=a(7157),d=a(5461),u=a(9477);const p=(new m.J).parse(d);(0,s.l7)({TextGeometry:l.M});const g=function(e){let{text:t,size:a=1,color:n="black",positionY:i=0,stopAfterLoops:o=4}=e;const c=(0,r.useRef)(),[l,m]=(0,r.useState)(0),[d,g]=(0,r.useState)({direction:!1,count:0,active:!0}),{invalidate:h}=(0,s.Ky)();(0,r.useEffect)((()=>m(-function(e){var t,a,r;null==e||null==(t=e.geometry)||t.computeBoundingBox();const n=new u.Vector3;return null==e||null==(a=e.geometry)||null==(r=a.boundingBox)||r.getSize(n),n.x}(c.current)/2)),[]),(0,s.xQ)((()=>{if(d.active){h();const e=performance.now(),t=Math.sin(.001*e)+i,a=c.current.position.y;c.current.position.y=t,f(a,t)}}));const f=(e,t)=>{const a=t-e;if(a>=0&&d.direction||a<0&&!d.direction){const e=!d.direction,t=d.count+1;g({direction:e,count:t,active:t<=o})}};return r.createElement("mesh",{ref:c,position:[l,i,0]},r.createElement("textGeometry",{args:[t,{font:p,size:a,height:.15}]}),r.createElement("meshStandardMaterial",{color:n}))};var h=a(1104),f=a(3660);(0,s.l7)({Water:f.B});const E=function(e){let{sunDirection:t=new u.Vector3}=e;const a=(0,r.useRef)(),n=(0,s.Ky)((e=>e.gl)),i=(0,s.U2)(u.TextureLoader,"/img/waternormals.jpg");i.wrapS=i.wrapT=u.RepeatWrapping;const o=(0,r.useMemo)((()=>new u.PlaneGeometry(1e4,1e4)),[]),c=(0,r.useMemo)((()=>({textureWidth:512,textureHeight:512,waterNormals:i,sunDirection:t,sunColor:16777215,waterColor:1618851,distortionScale:1,fog:!1,format:n.encoding})),[i]);return(0,s.xQ)(((e,t)=>a.current.material.uniforms.time.value+=t/3)),r.createElement("water",{ref:a,args:[o,c],"rotation-x":-Math.PI/2})};const x=function(){const e=(0,r.useMemo)((()=>{const e=u.MathUtils.degToRad(89.9),t=u.MathUtils.degToRad(130),a=new u.Vector3;return a.setFromSphericalCoords(1,e,t),a}));return r.createElement(r.Suspense,{fallback:null},r.createElement(E,{sunDirection:e}),r.createElement(h.q,{scale:1e4,sunPosition:e,turbidity:10,rayleigh:2,mieCoefficient:.005,mieDirectionalG:.8}))},k=[0,2,9],v="rgb(0, 0, 153)";const w=function(e){let{title:t,subtitle:a}=e;return r.createElement("header",{className:c},r.createElement(s.Xz,{camera:{position:k,far:50},dpr:[1,2],frameloop:"demand"},r.createElement(x,null),r.createElement("pointLight",{position:k,intensity:2}),r.createElement(g,{text:t,size:1.5,color:v,positionY:2,stopAfterLoops:2}),r.createElement(g,{text:a,size:1,color:v,positionY:0,stopAfterLoops:2})))};var b=a(5385),N=a(4387);const C="social_k8ol",_="socialColumn_omUb",y="socialHeaderAndBody_TxKv",S="socialBody_oQsG",U="careersImage_rXQC";var A=a(3054),T=a.n(A);const L=function(e){let{twitterLink:t}=e;return T()({src:"https://platform.twitter.com/widgets.js"}),r.createElement("div",null,r.createElement("a",{className:"twitter-timeline",href:t,"data-height":"525","data-chrome":"noheader nofooter"},r.createElement("h3",null,"Loading tweets..")))},M="posts_DFiM",G="post_Xcxy",P="postImageColumn_hkdq",R="postDetailColumn_xYOL",D="postTitle_OYlL",F="postCreationInfo_LoK2",J="creator_Eou_",W="date_kSbf";function z(e){let{post:t}=e;return r.createElement("div",{className:G},r.createElement("div",{className:P},r.createElement("a",{href:t.link,target:"_blank"},r.createElement("img",{src:t.imageUrl}))),r.createElement("div",{className:R},r.createElement("div",{className:D},r.createElement("a",{href:t.link,target:"_blank"},r.createElement("h4",null,t.title))),r.createElement("div",{className:F},r.createElement("span",{className:J},t.creator),r.createElement("span",{className:W},t.date))))}const B=function(e){let{posts:t}=e;return r.createElement("div",{className:M},t.map((e=>r.createElement(z,{key:e.title,post:e}))))},I=JSON.parse('[{"title":"Introducing container-startup-autoscaler for Kubernetes","creator":"Will Tomlin","link":"https://medium.com/expedia-group-tech/introducing-container-startup-autoscaler-for-kubernetes-9f15a981b69e?source=rss----38998a53046f---4","date":"Apr 9, 2024","imageUrl":"https://cdn-images-1.medium.com/max/1024/0*dADh-EUAe9QNag4g"},{"title":"Chaos Engineering for AWS Resources: A Custom Approach","creator":"Asmita Bharti","link":"https://medium.com/expedia-group-tech/chaos-engineering-for-aws-resources-a-custom-approach-2dbd604d5df8?source=rss----38998a53046f---4","date":"Mar 26, 2024","imageUrl":"https://cdn-images-1.medium.com/max/1024/0*WakcYSGJGFF5L6so"},{"title":"Head in the Clouds","creator":"Nidhi","link":"https://medium.com/expedia-group-tech/head-in-the-cloud-a-force-for-good-d7544a4478a6?source=rss----38998a53046f---4","date":"Mar 12, 2024","imageUrl":"https://cdn-images-1.medium.com/max/1024/0*6PFJ9-iLdziKM9PN"},{"title":"Takeaways From React India 2023","creator":"Heena Gupta","link":"https://medium.com/expedia-group-tech/takeaways-from-react-india-2023-26f7d3dbe52c?source=rss----38998a53046f---4","date":"Feb 27, 2024","imageUrl":"https://cdn-images-1.medium.com/max/1024/0*PtZxzaOznr3fIWMb"},{"title":"Powering ML Platform Orchestration and Experimentation","creator":"Andrew Campen","link":"https://medium.com/expedia-group-tech/powering-ml-platform-orchestration-and-experimentation-a0574b97af30?source=rss----38998a53046f---4","date":"Feb 13, 2024","imageUrl":"https://cdn-images-1.medium.com/max/1024/0*R0XXmR6E0bWshEmx"},{"title":"Learning Embeddings for Lodging Travel Concepts","creator":"Ioannis Partalas","link":"https://medium.com/expedia-group-tech/learning-embeddings-for-lodging-travel-concepts-99165700cdbd?source=rss----38998a53046f---4","date":"Jan 30, 2024","imageUrl":"https://cdn-images-1.medium.com/max/1024/0*36ELVdfywSABnPeC"},{"title":"Traveler Trust and AI","creator":"Sarah Gomillion, PhD","link":"https://medium.com/expedia-group-tech/traveler-trust-and-ai-22311d833e04?source=rss----38998a53046f---4","date":"Jan 16, 2024","imageUrl":"https://cdn-images-1.medium.com/max/1024/0*_R-vwtmS25JSSgRk"},{"title":"Search Speed: Making Expedia Flights Faster","creator":"Heena Gupta","link":"https://medium.com/expedia-group-tech/search-speed-making-expedia-flights-faster-5c3f7fec4c10?source=rss----38998a53046f---4","date":"Jan 3, 2024","imageUrl":"https://cdn-images-1.medium.com/max/1024/0*9-rAUeZ48GcdnsfM"},{"title":"Candidate Generation Using a Two Tower Approach With Expedia Group Traveler Data","creator":"Eric Rincon","link":"https://medium.com/expedia-group-tech/candidate-generation-using-a-two-tower-approach-with-expedia-group-traveler-data-ca6a0dcab83e?source=rss----38998a53046f---4","date":"Dec 12, 2023","imageUrl":"https://cdn-images-1.medium.com/max/1024/0*AuPpnyPZt3j3RtND"},{"title":"Powering People\u2019s Data with an Enterprise Platform","creator":"Jordan Rusk","link":"https://medium.com/expedia-group-tech/powering-peoples-data-with-an-enterprise-platform-fa29c73f2016?source=rss----38998a53046f---4","date":"Nov 28, 2023","imageUrl":"https://cdn-images-1.medium.com/max/1024/0*Cbyt-GQGWAwKxxgh"}]'),Z="socialHeader_Sy3J";const K=function(e){let{title:t}=e;return r.createElement("div",{className:Z},r.createElement("h1",null,t))},Q="socialFooter_fNQX";var H=a(4823);const O=function(e){let{text:t,link:a}=e;return r.createElement("div",{className:Q},r.createElement("p",null,t),r.createElement(H.Z,{link:a}))},X=a.p+"assets/images/careers-c3b09f03295d4898cfcc83801b133ee2.jpg";const Y=function(e){let{socialConfig:t}=e;return r.createElement("section",{className:C},r.createElement("div",{className:"container"},r.createElement("div",{className:"row"},r.createElement("div",{className:"col col--4"},r.createElement("div",{className:_},r.createElement("div",{className:y},r.createElement(K,{title:t.blog.title}),r.createElement("div",{className:S},r.createElement(B,{posts:I}))),r.createElement(O,{text:t.blog.footerText,link:t.blog.link}))),r.createElement("div",{className:"col col--4"},r.createElement("div",{className:_},r.createElement("div",{className:y},r.createElement(K,{title:t.careers.title}),r.createElement("div",{className:S},r.createElement("a",{href:t.careers.link,target:"_blank"},r.createElement("img",{className:U,src:X,alt:t.careers.title})))),r.createElement(O,{text:t.careers.footerText,link:t.careers.link}))),r.createElement("div",{className:"col col--4"},r.createElement("div",{className:_},r.createElement("div",{className:y},r.createElement(K,{title:t.twitter.title}),r.createElement("div",{className:S},r.createElement(L,{twitterLink:t.twitter.link}))),r.createElement(O,{text:t.twitter.footerText,link:t.twitter.link}))))))};const j=function(){const e=(0,i.Z)(),{siteConfig:t}=e,{heroConfig:a,repositoriesConfig:c,socialConfig:s}=t.customFields;return r.createElement(n.Z,{title:t.title,description:t.tagline},a.hero3d.enabled?r.createElement(w,{title:a.hero3d.title,subtitle:a.hero3d.subtitle}):r.createElement(o.Z,{title:a.hero2d.title,subtitle:a.hero2d.subtitle,imageUrl:a.hero2d.imageUrl}),r.createElement("main",null,r.createElement(N.Z,{reposData:b,reposConfig:c,showOnlyFeatured:!0}),r.createElement(Y,{socialConfig:s})))}}}]);