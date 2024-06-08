"use strict";(self.webpackChunkexpediagroup_github_io=self.webpackChunkexpediagroup_github_io||[]).push([[195],{5338:(e,t,a)=>{a.r(t),a.d(t,{default:()=>j});var r=a(7294),i=a(6932),n=a(2263),o=a(3968);const s="heroBanner_Gb1t";var c=a(6447),l=a(1711),m=a(7157),d=a(5461),u=a(9477);const g=(new m.J).parse(d);(0,c.l7)({TextGeometry:l.M});const p=function(e){let{text:t,size:a=1,color:i="black",positionY:n=0,stopAfterLoops:o=4}=e;const s=(0,r.useRef)(),[l,m]=(0,r.useState)(0),[d,p]=(0,r.useState)({direction:!1,count:0,active:!0}),{invalidate:h}=(0,c.Ky)();(0,r.useEffect)((()=>m(-function(e){var t,a,r;null==e||null==(t=e.geometry)||t.computeBoundingBox();const i=new u.Vector3;return null==e||null==(a=e.geometry)||null==(r=a.boundingBox)||r.getSize(i),i.x}(s.current)/2)),[]),(0,c.xQ)((()=>{if(d.active){h();const e=performance.now(),t=Math.sin(.001*e)+n,a=s.current.position.y;s.current.position.y=t,f(a,t)}}));const f=(e,t)=>{const a=t-e;if(a>=0&&d.direction||a<0&&!d.direction){const e=!d.direction,t=d.count+1;p({direction:e,count:t,active:t<=o})}};return r.createElement("mesh",{ref:s,position:[l,n,0]},r.createElement("textGeometry",{args:[t,{font:g,size:a,height:.15}]}),r.createElement("meshStandardMaterial",{color:i}))};var h=a(1104),f=a(3660);(0,c.l7)({Water:f.B});const E=function(e){let{sunDirection:t=new u.Vector3}=e;const a=(0,r.useRef)(),i=(0,c.Ky)((e=>e.gl)),n=(0,c.U2)(u.TextureLoader,"/img/waternormals.jpg");n.wrapS=n.wrapT=u.RepeatWrapping;const o=(0,r.useMemo)((()=>new u.PlaneGeometry(1e4,1e4)),[]),s=(0,r.useMemo)((()=>({textureWidth:512,textureHeight:512,waterNormals:n,sunDirection:t,sunColor:16777215,waterColor:1618851,distortionScale:1,fog:!1,format:i.encoding})),[n]);return(0,c.xQ)(((e,t)=>a.current.material.uniforms.time.value+=t/3)),r.createElement("water",{ref:a,args:[o,s],"rotation-x":-Math.PI/2})};const x=function(){const e=(0,r.useMemo)((()=>{const e=u.MathUtils.degToRad(89.9),t=u.MathUtils.degToRad(130),a=new u.Vector3;return a.setFromSphericalCoords(1,e,t),a}));return r.createElement(r.Suspense,{fallback:null},r.createElement(E,{sunDirection:e}),r.createElement(h.q,{scale:1e4,sunPosition:e,turbidity:10,rayleigh:2,mieCoefficient:.005,mieDirectionalG:.8}))},b=[0,2,9],k="rgb(0, 0, 153)";const v=function(e){let{title:t,subtitle:a}=e;return r.createElement("header",{className:s},r.createElement(c.Xz,{camera:{position:b,far:50},dpr:[1,2],frameloop:"demand"},r.createElement(x,null),r.createElement("pointLight",{position:b,intensity:2}),r.createElement(p,{text:t,size:1.5,color:k,positionY:2,stopAfterLoops:2}),r.createElement(p,{text:a,size:1,color:k,positionY:0,stopAfterLoops:2})))};var w=a(5385),N=a(4387);const y="social_k8ol",C="socialColumn_omUb",_="socialHeaderAndBody_TxKv",M="socialBody_oQsG",S="careersImage_rXQC";var U=a(3054),L=a.n(U);const T=function(e){let{twitterLink:t}=e;return L()({src:"https://platform.twitter.com/widgets.js"}),r.createElement("div",null,r.createElement("a",{className:"twitter-timeline",href:t,"data-height":"525","data-chrome":"noheader nofooter"},r.createElement("h3",null,"Loading tweets..")))},A="posts_DFiM",R="post_Xcxy",z="postImageColumn_hkdq",B="postDetailColumn_xYOL",F="postTitle_OYlL",W="postCreationInfo_LoK2",G="creator_Eou_",I="date_kSbf";function P(e){let{post:t}=e;return r.createElement("div",{className:R},r.createElement("div",{className:z},r.createElement("a",{href:t.link,target:"_blank"},r.createElement("img",{src:t.imageUrl}))),r.createElement("div",{className:B},r.createElement("div",{className:F},r.createElement("a",{href:t.link,target:"_blank"},r.createElement("h4",null,t.title))),r.createElement("div",{className:W},r.createElement("span",{className:G},t.creator),r.createElement("span",{className:I},t.date))))}const D=function(e){let{posts:t}=e;return r.createElement("div",{className:A},t.map((e=>r.createElement(P,{key:e.title,post:e}))))},J=JSON.parse('[{"title":"Downtime-Free Shift: Transitioning from Instance to IP-Based NLB amid live traffic","creator":"Isha Batra","link":"https://medium.com/expedia-group-tech/downtime-free-shift-transitioning-from-instance-to-ip-based-nlb-amid-live-traffic-8268253d266b?source=rss----38998a53046f---4","date":"Jun 7, 2024","imageUrl":"https://cdn-images-1.medium.com/max/1024/0*lJzVrOGzybdg0i0C"},{"title":"Choosing the Right Candidates for Lodging Ranking","creator":"Adam Woznica","link":"https://medium.com/expedia-group-tech/choosing-the-right-candidates-for-lodging-ranking-d0841bf40c0e?source=rss----38998a53046f---4","date":"May 21, 2024","imageUrl":"https://cdn-images-1.medium.com/max/1024/0*7HAnE2f4EqFkxH1X"},{"title":"Traveling Just Got a Whole Lot Smarter with Romie","creator":"Rathi Murthy","link":"https://medium.com/expedia-group-tech/traveling-just-got-a-whole-lot-smarter-with-romie-dfb9b21c07c5?source=rss----38998a53046f---4","date":"May 14, 2024","imageUrl":"https://cdn-images-1.medium.com/max/1024/0*BrW6M-nfWaRXtxhJ"},{"title":"Measuring Marketing Success: The Power of Incrementality and Geo Testing","creator":"Nivedita Sharma","link":"https://medium.com/expedia-group-tech/measuring-marketing-success-the-power-of-incrementality-and-geo-testing-1acd4291545d?source=rss----38998a53046f---4","date":"May 14, 2024","imageUrl":"https://cdn-images-1.medium.com/max/1024/0*Wo_HJu1Snhz_4S2x"},{"title":"Unveiling the Essence of Code-Level Extensibility in System Design","creator":"Keshavpeswani","link":"https://medium.com/expedia-group-tech/unveiling-the-essence-of-code-level-extensibility-in-system-design-e5e74067cbfa?source=rss----38998a53046f---4","date":"Apr 23, 2024","imageUrl":"https://cdn-images-1.medium.com/max/1024/0*uS5lZY7hCPfaKB1M"},{"title":"Introducing container-startup-autoscaler for Kubernetes","creator":"Will Tomlin","link":"https://medium.com/expedia-group-tech/introducing-container-startup-autoscaler-for-kubernetes-9f15a981b69e?source=rss----38998a53046f---4","date":"Apr 9, 2024","imageUrl":"https://cdn-images-1.medium.com/max/1024/0*dADh-EUAe9QNag4g"},{"title":"Chaos Engineering for AWS Resources: A Custom Approach","creator":"Asmita Bharti","link":"https://medium.com/expedia-group-tech/chaos-engineering-for-aws-resources-a-custom-approach-2dbd604d5df8?source=rss----38998a53046f---4","date":"Mar 26, 2024","imageUrl":"https://cdn-images-1.medium.com/max/1024/0*WakcYSGJGFF5L6so"},{"title":"Head in the Clouds","creator":"Nidhi","link":"https://medium.com/expedia-group-tech/head-in-the-cloud-a-force-for-good-d7544a4478a6?source=rss----38998a53046f---4","date":"Mar 12, 2024","imageUrl":"https://cdn-images-1.medium.com/max/1024/0*6PFJ9-iLdziKM9PN"},{"title":"Takeaways From React India 2023","creator":"Heena Gupta","link":"https://medium.com/expedia-group-tech/takeaways-from-react-india-2023-26f7d3dbe52c?source=rss----38998a53046f---4","date":"Feb 27, 2024","imageUrl":"https://cdn-images-1.medium.com/max/1024/0*PtZxzaOznr3fIWMb"},{"title":"Powering ML Platform Orchestration and Experimentation","creator":"Andrew Campen","link":"https://medium.com/expedia-group-tech/powering-ml-platform-orchestration-and-experimentation-a0574b97af30?source=rss----38998a53046f---4","date":"Feb 13, 2024","imageUrl":"https://cdn-images-1.medium.com/max/1024/0*R0XXmR6E0bWshEmx"}]'),H="socialHeader_Sy3J";const K=function(e){let{title:t}=e;return r.createElement("div",{className:H},r.createElement("h1",null,t))},X="socialFooter_fNQX";var O=a(4823);const Y=function(e){let{text:t,link:a}=e;return r.createElement("div",{className:X},r.createElement("p",null,t),r.createElement(O.Z,{link:a}))},Z=a.p+"assets/images/careers-c3b09f03295d4898cfcc83801b133ee2.jpg";const Q=function(e){let{socialConfig:t}=e;return r.createElement("section",{className:y},r.createElement("div",{className:"container"},r.createElement("div",{className:"row"},r.createElement("div",{className:"col col--4"},r.createElement("div",{className:C},r.createElement("div",{className:_},r.createElement(K,{title:t.blog.title}),r.createElement("div",{className:M},r.createElement(D,{posts:J}))),r.createElement(Y,{text:t.blog.footerText,link:t.blog.link}))),r.createElement("div",{className:"col col--4"},r.createElement("div",{className:C},r.createElement("div",{className:_},r.createElement(K,{title:t.careers.title}),r.createElement("div",{className:M},r.createElement("a",{href:t.careers.link,target:"_blank"},r.createElement("img",{className:S,src:Z,alt:t.careers.title})))),r.createElement(Y,{text:t.careers.footerText,link:t.careers.link}))),r.createElement("div",{className:"col col--4"},r.createElement("div",{className:C},r.createElement("div",{className:_},r.createElement(K,{title:t.twitter.title}),r.createElement("div",{className:M},r.createElement(T,{twitterLink:t.twitter.link}))),r.createElement(Y,{text:t.twitter.footerText,link:t.twitter.link}))))))};const j=function(){const e=(0,n.Z)(),{siteConfig:t}=e,{heroConfig:a,repositoriesConfig:s,socialConfig:c}=t.customFields;return r.createElement(i.Z,{title:t.title,description:t.tagline},a.hero3d.enabled?r.createElement(v,{title:a.hero3d.title,subtitle:a.hero3d.subtitle}):r.createElement(o.Z,{title:a.hero2d.title,subtitle:a.hero2d.subtitle,imageUrl:a.hero2d.imageUrl}),r.createElement("main",null,r.createElement(N.Z,{reposData:w,reposConfig:s,showOnlyFeatured:!0}),r.createElement(Q,{socialConfig:c})))}}}]);