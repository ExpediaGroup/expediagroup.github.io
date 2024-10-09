"use strict";(self.webpackChunkexpediagroup_github_io=self.webpackChunkexpediagroup_github_io||[]).push([[195],{5338:(e,t,a)=>{a.r(t),a.d(t,{default:()=>X});var i=a(7294),r=a(6932),n=a(2263),o=a(3968);const c="heroBanner_Gb1t";var s=a(6447),l=a(1711),m=a(7157),d=a(5461),u=a(9477);const g=(new m.J).parse(d);(0,s.l7)({TextGeometry:l.M});const p=function(e){let{text:t,size:a=1,color:r="black",positionY:n=0,stopAfterLoops:o=4}=e;const c=(0,i.useRef)(),[l,m]=(0,i.useState)(0),[d,p]=(0,i.useState)({direction:!1,count:0,active:!0}),{invalidate:f}=(0,s.Ky)();(0,i.useEffect)((()=>m(-function(e){var t,a,i;null==e||null==(t=e.geometry)||t.computeBoundingBox();const r=new u.Vector3;return null==e||null==(a=e.geometry)||null==(i=a.boundingBox)||i.getSize(r),r.x}(c.current)/2)),[]),(0,s.xQ)((()=>{if(d.active){f();const e=performance.now(),t=Math.sin(.001*e)+n,a=c.current.position.y;c.current.position.y=t,h(a,t)}}));const h=(e,t)=>{const a=t-e;if(a>=0&&d.direction||a<0&&!d.direction){const e=!d.direction,t=d.count+1;p({direction:e,count:t,active:t<=o})}};return i.createElement("mesh",{ref:c,position:[l,n,0]},i.createElement("textGeometry",{args:[t,{font:g,size:a,height:.15}]}),i.createElement("meshStandardMaterial",{color:r}))};var f=a(1104),h=a(3660);(0,s.l7)({Water:h.B});const E=function(e){let{sunDirection:t=new u.Vector3}=e;const a=(0,i.useRef)(),r=(0,s.Ky)((e=>e.gl)),n=(0,s.U2)(u.TextureLoader,"/img/waternormals.jpg");n.wrapS=n.wrapT=u.RepeatWrapping;const o=(0,i.useMemo)((()=>new u.PlaneGeometry(1e4,1e4)),[]),c=(0,i.useMemo)((()=>({textureWidth:512,textureHeight:512,waterNormals:n,sunDirection:t,sunColor:16777215,waterColor:1618851,distortionScale:1,fog:!1,format:r.encoding})),[n]);return(0,s.xQ)(((e,t)=>a.current.material.uniforms.time.value+=t/3)),i.createElement("water",{ref:a,args:[o,c],"rotation-x":-Math.PI/2})};const x=function(){const e=(0,i.useMemo)((()=>{const e=u.MathUtils.degToRad(89.9),t=u.MathUtils.degToRad(130),a=new u.Vector3;return a.setFromSphericalCoords(1,e,t),a}));return i.createElement(i.Suspense,{fallback:null},i.createElement(E,{sunDirection:e}),i.createElement(f.q,{scale:1e4,sunPosition:e,turbidity:10,rayleigh:2,mieCoefficient:.005,mieDirectionalG:.8}))},k=[0,2,9],b="rgb(0, 0, 153)";const v=function(e){let{title:t,subtitle:a}=e;return i.createElement("header",{className:c},i.createElement(s.Xz,{camera:{position:k,far:50},dpr:[1,2],frameloop:"demand"},i.createElement(x,null),i.createElement("pointLight",{position:k,intensity:2}),i.createElement(p,{text:t,size:1.5,color:b,positionY:2,stopAfterLoops:2}),i.createElement(p,{text:a,size:1,color:b,positionY:0,stopAfterLoops:2})))};var y=a(5385),w=a(4387);const N="social_k8ol",C="socialColumn_omUb",_="socialHeaderAndBody_TxKv",S="socialBody_oQsG",U="careersImage_rXQC";var M=a(3054),A=a.n(M);const D=function(e){let{twitterLink:t}=e;return A()({src:"https://platform.twitter.com/widgets.js"}),i.createElement("div",null,i.createElement("a",{className:"twitter-timeline",href:t,"data-height":"525","data-chrome":"noheader nofooter"},i.createElement("h3",null,"Loading tweets..")))},L="posts_DFiM",T="post_Xcxy",B="postImageColumn_hkdq",F="postDetailColumn_xYOL",I="postTitle_OYlL",z="postCreationInfo_LoK2",J="creator_Eou_",O="date_kSbf";function P(e){let{post:t}=e;return i.createElement("div",{className:T},i.createElement("div",{className:B},i.createElement("a",{href:t.link,target:"_blank"},i.createElement("img",{src:t.imageUrl}))),i.createElement("div",{className:F},i.createElement("div",{className:I},i.createElement("a",{href:t.link,target:"_blank"},i.createElement("h4",null,t.title))),i.createElement("div",{className:z},i.createElement("span",{className:J},t.creator),i.createElement("span",{className:O},t.date))))}const W=function(e){let{posts:t}=e;return i.createElement("div",{className:L},t.map((e=>i.createElement(P,{key:e.title,post:e}))))},G=JSON.parse('[{"title":"Enhancing Data Reliability With An SLO Platform","creator":"Abhishek Chawla","link":"https://medium.com/expedia-group-tech/enhancing-data-reliability-with-an-slo-platform-de00249756f6?source=rss----38998a53046f---4","date":"Oct 8, 2024","imageUrl":"https://cdn-images-1.medium.com/max/1024/0*CIkdqI5Ue4Wz06ic"},{"title":"Optics: A Real-time Data Analytics Solution","creator":"Shubham Pandey","link":"https://medium.com/expedia-group-tech/optics-a-real-time-data-analytics-solution-fa3a414219aa?source=rss----38998a53046f---4","date":"Sep 24, 2024","imageUrl":"https://cdn-images-1.medium.com/max/1024/0*FMCU4of4UAWy53BH"},{"title":"Inside Expedia\u2019s Migration to ScyllaDB for Change Data Capture","creator":"Jean Carlo","link":"https://medium.com/expedia-group-tech/inside-expedias-migration-to-scylladb-for-change-data-capture-706365c8e2cf?source=rss----38998a53046f---4","date":"Sep 10, 2024","imageUrl":"https://cdn-images-1.medium.com/max/1024/0*ZbahYwKu9HgQ8YsF"},{"title":"Enabling Core Machine Learning Platform Capabilities","creator":"Anna Kelecs\xe9nyi","link":"https://medium.com/expedia-group-tech/enabling-core-machine-learning-platform-capabilities-ff42ff814292?source=rss----38998a53046f---4","date":"Aug 27, 2024","imageUrl":"https://cdn-images-1.medium.com/max/975/1*nzjPKWl9nG5cwxAVfWwqdg.png"},{"title":"Quantifying Stress for Customer Service Agents at Expedia Group","creator":"Courtney Crosby, PhD","link":"https://medium.com/expedia-group-tech/quantifying-stress-for-customer-service-agents-at-expedia-group-6d70d8db0c50?source=rss----38998a53046f---4","date":"Aug 6, 2024","imageUrl":"https://cdn-images-1.medium.com/max/1024/0*cdfngOs9cDF217WJ"},{"title":"Channel-Smart Property Search: How Expedia Tailors Rankings for You","creator":"Anne Morvan","link":"https://medium.com/expedia-group-tech/learning-to-rank-at-expedia-group-how-to-adapt-the-property-search-result-page-based-on-f4ebef78c94b?source=rss----38998a53046f---4","date":"Jul 23, 2024","imageUrl":"https://cdn-images-1.medium.com/max/1024/1*lmoFmDt_CQa5gkMd1EN1lg.jpeg"},{"title":"The Perils of Deprecating a Legacy Microservice","creator":"Shashank Jha","link":"https://medium.com/expedia-group-tech/the-perils-of-deprecating-a-legacy-microservice-febfa3e9f6cc?source=rss----38998a53046f---4","date":"Jul 10, 2024","imageUrl":"https://cdn-images-1.medium.com/max/1024/0*viFiVwILa2kcNOkk"},{"title":"Enhancing Expedia Group\u2019s Intraday Marketing Decisions","creator":"Blake Whatley","link":"https://medium.com/expedia-group-tech/enhancing-expedia-groups-intraday-marketing-decisions-ce76639ef18c?source=rss----38998a53046f---4","date":"Jul 2, 2024","imageUrl":"https://cdn-images-1.medium.com/max/1024/0*0vy4yVggtO0TbN8X"},{"title":"Downtime-Free Shift: Transitioning from Instance to IP-Based NLB amid live traffic","creator":"Isha Batra","link":"https://medium.com/expedia-group-tech/downtime-free-shift-transitioning-from-instance-to-ip-based-nlb-amid-live-traffic-8268253d266b?source=rss----38998a53046f---4","date":"Jun 7, 2024","imageUrl":"https://cdn-images-1.medium.com/max/1024/0*lJzVrOGzybdg0i0C"},{"title":"Choosing the Right Candidates for Lodging Ranking","creator":"Adam Woznica","link":"https://medium.com/expedia-group-tech/choosing-the-right-candidates-for-lodging-ranking-d0841bf40c0e?source=rss----38998a53046f---4","date":"May 21, 2024","imageUrl":"https://cdn-images-1.medium.com/max/1024/0*7HAnE2f4EqFkxH1X"}]'),R="socialHeader_Sy3J";const H=function(e){let{title:t}=e;return i.createElement("div",{className:R},i.createElement("h1",null,t))},Q="socialFooter_fNQX";var Y=a(4823);const K=function(e){let{text:t,link:a}=e;return i.createElement("div",{className:Q},i.createElement("p",null,t),i.createElement(Y.Z,{link:a}))},V=a.p+"assets/images/careers-c3b09f03295d4898cfcc83801b133ee2.jpg";const q=function(e){let{socialConfig:t}=e;return i.createElement("section",{className:N},i.createElement("div",{className:"container"},i.createElement("div",{className:"row"},i.createElement("div",{className:"col col--4"},i.createElement("div",{className:C},i.createElement("div",{className:_},i.createElement(H,{title:t.blog.title}),i.createElement("div",{className:S},i.createElement(W,{posts:G}))),i.createElement(K,{text:t.blog.footerText,link:t.blog.link}))),i.createElement("div",{className:"col col--4"},i.createElement("div",{className:C},i.createElement("div",{className:_},i.createElement(H,{title:t.careers.title}),i.createElement("div",{className:S},i.createElement("a",{href:t.careers.link,target:"_blank"},i.createElement("img",{className:U,src:V,alt:t.careers.title})))),i.createElement(K,{text:t.careers.footerText,link:t.careers.link}))),i.createElement("div",{className:"col col--4"},i.createElement("div",{className:C},i.createElement("div",{className:_},i.createElement(H,{title:t.twitter.title}),i.createElement("div",{className:S},i.createElement(D,{twitterLink:t.twitter.link}))),i.createElement(K,{text:t.twitter.footerText,link:t.twitter.link}))))))};const X=function(){const e=(0,n.Z)(),{siteConfig:t}=e,{heroConfig:a,repositoriesConfig:c,socialConfig:s}=t.customFields;return i.createElement(r.Z,{title:t.title,description:t.tagline},a.hero3d.enabled?i.createElement(v,{title:a.hero3d.title,subtitle:a.hero3d.subtitle}):i.createElement(o.Z,{title:a.hero2d.title,subtitle:a.hero2d.subtitle,imageUrl:a.hero2d.imageUrl}),i.createElement("main",null,i.createElement(w.Z,{reposData:y,reposConfig:c,showOnlyFeatured:!0}),i.createElement(q,{socialConfig:s})))}}}]);