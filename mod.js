// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r){return r!=r}var n=Math.floor;var t="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var e=Object.prototype.toString;var u=Object.prototype.hasOwnProperty;var o,a="function"==typeof Symbol?Symbol.toStringTag:"";o=t&&"symbol"==typeof Symbol.toStringTag?function(r){var n,t,o,f,i;if(null==r)return e.call(r);t=r[a],i=a,n=null!=(f=r)&&u.call(f,i);try{r[a]=void 0}catch(n){return e.call(r)}return o=e.call(r),n?r[a]=t:delete r[a],o}:function(r){return e.call(r)};var f=o,i="function"==typeof Uint32Array;var c="function"==typeof Uint32Array?Uint32Array:null;var l,v="function"==typeof Uint32Array?Uint32Array:void 0;l=function(){var r,n,t;if("function"!=typeof c)return!1;try{n=new c(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(i&&t instanceof Uint32Array||"[object Uint32Array]"===f(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?v:function(){throw new Error("not implemented")};var y=l,p="function"==typeof Float64Array;var s="function"==typeof Float64Array?Float64Array:null;var b,w="function"==typeof Float64Array?Float64Array:void 0;b=function(){var r,n,t;if("function"!=typeof s)return!1;try{n=new s([1,3.14,-3.14,NaN]),t=n,r=(p&&t instanceof Float64Array||"[object Float64Array]"===f(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?w:function(){throw new Error("not implemented")};var A=b,_="function"==typeof Uint8Array;var N="function"==typeof Uint8Array?Uint8Array:null;var d,h="function"==typeof Uint8Array?Uint8Array:void 0;d=function(){var r,n,t;if("function"!=typeof N)return!1;try{n=new N(n=[1,3.14,-3.14,256,257]),t=n,r=(_&&t instanceof Uint8Array||"[object Uint8Array]"===f(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?h:function(){throw new Error("not implemented")};var m=d,U="function"==typeof Uint16Array;var j="function"==typeof Uint16Array?Uint16Array:null;var g,I="function"==typeof Uint16Array?Uint16Array:void 0;g=function(){var r,n,t;if("function"!=typeof j)return!1;try{n=new j(n=[1,3.14,-3.14,65536,65537]),t=n,r=(U&&t instanceof Uint16Array||"[object Uint16Array]"===f(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?I:function(){throw new Error("not implemented")};var O,S={uint16:g,uint8:m};(O=new S.uint16(1))[0]=4660;var E=52===new S.uint8(O.buffer)[0],F=!0===E?1:0,H=new A(1),T=new y(H.buffer);function G(r){return H[0]=r,T[F]}var P=!0===E?0:1,k=new A(1),x=new y(k.buffer);function L(r,n){return k[0]=r,x[P]=n>>>0,k[0]}function M(r,n,t){var e,u,o,a,f,i,c,l,v;return(u=2147483647&(e=G(r))|0)>=1072010280&&(r<0&&(r=-r,n=-n),r=(v=.7853981633974483-r)+(l=3061616997868383e-32-n),n=0),a=function(r){return 0===r?.13333333333320124:.13333333333320124+r*(.021869488294859542+r*(.0035920791075913124+r*(.0005880412408202641+r*(7817944429395571e-20+-18558637485527546e-21*r))))}(l=(v=r*r)*v),c=v*function(r){return 0===r?.05396825397622605:.05396825397622605+r*(.0088632398235993+r*(.0014562094543252903+r*(.0002464631348184699+r*(7140724913826082e-20+2590730518636337e-20*r))))}(l),a=n+v*((f=v*r)*(a+c)+n),l=r+(a+=.3333333333333341*f),u>=1072010280?(1-(e>>30&2))*((c=t)-2*(r-(l*l/(l+c)-a))):1===t?l:(L(v=l,0),c=a-(v-r),L(i=o=-1/l,0),i+o*((f=1+i*v)+i*c))}var V,W,Y=!0===E?0:1,C=new A(1),q=new y(C.buffer);!0===E?(V=1,W=0):(V=0,W=1);var z={HIGH:V,LOW:W},B=new A(1),D=new y(B.buffer),J=z.HIGH,K=z.LOW;function Q(r,n){return D[J]=r,D[K]=n,B[0]}var R,X,Z=Number.POSITIVE_INFINITY,$=Number.NEGATIVE_INFINITY;function rr(r){return r===Z||r===$}!0===E?(R=1,X=0):(R=0,X=1);var nr={HIGH:R,LOW:X},tr=new A(1),er=new y(tr.buffer),ur=nr.HIGH,or=nr.LOW;function ar(r,n){return tr[0]=n,r[0]=er[ur],r[1]=er[or],r}function fr(r,n){return 1===arguments.length?ar([0,0],r):ar(r,n)}var ir=[0,0];function cr(r,n){var t,e;return fr(ir,r),t=ir[0],t&=2147483647,e=G(n),Q(t|=e&=2147483648,ir[1])}var lr="function"==typeof Object.defineProperty?Object.defineProperty:null;var vr,yr=Object.defineProperty,pr=Object.prototype,sr=pr.toString,br=pr.__defineGetter__,wr=pr.__defineSetter__,Ar=pr.__lookupGetter__,_r=pr.__lookupSetter__;vr=function(){try{return lr({},"x",{}),!0}catch(r){return!1}}()?yr:function(r,n,t){var e,u,o,a;if("object"!=typeof r||null===r||"[object Array]"===sr.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===sr.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((u="value"in t)&&(Ar.call(r,n)||_r.call(r,n)?(e=r.__proto__,r.__proto__=pr,delete r[n],r[n]=t.value,r.__proto__=e):r[n]=t.value),o="get"in t,a="set"in t,u&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&br&&br.call(r,n,t.get),a&&wr&&wr.call(r,n,t.set),r};function Nr(r){return Math.abs(r)}function dr(n,t,e,u){return r(n)||rr(n)?(t[u]=n,t[u+e]=0,t):0!==n&&Nr(n)<22250738585072014e-324?(t[u]=4503599627370496*n,t[u+e]=-52,t):(t[u]=n,t[u+e]=0,t)}vr((function(r){return dr(r,[0,0],1,0)}),"assign",{configurable:!1,enumerable:!1,writable:!1,value:dr});var hr=[0,0],mr=[0,0];function Ur(n,t){var e,u;return 0===t||0===n||r(n)||rr(n)?n:(dr(n,hr,1,0),t+=hr[1],t+=function(r){var n=G(r);return(n=(2146435072&n)>>>20)-1023|0}(n=hr[0]),t<-1074?cr(0,n):t>1023?n<0?$:Z:(t<=-1023?(t+=52,u=2220446049250313e-31):u=1,fr(mr,n),e=mr[0],e&=2148532223,u*Q(e|=t+1023<<20,mr[1])))}function jr(r){return function(r,n){var t,e;for(t=[],e=0;e<n;e++)t.push(r);return t}(0,r)}var gr=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],Ir=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],Or=5.960464477539063e-8,Sr=jr(20),Er=jr(20),Fr=jr(20),Hr=jr(20);function Tr(r,t,e,u,o,a,f,i,c){var l,v,y,p,s,b,w,A,_;for(p=a,_=u[e],A=e,s=0;A>0;s++)v=Or*_|0,Hr[s]=_-16777216*v|0,_=u[A-1]+v,A-=1;if(_=Ur(_,o),_-=8*n(.125*_),_-=w=0|_,y=0,o>0?(w+=s=Hr[e-1]>>24-o,Hr[e-1]-=s<<24-o,y=Hr[e-1]>>23-o):0===o?y=Hr[e-1]>>23:_>=.5&&(y=2),y>0){for(w+=1,l=0,s=0;s<e;s++)A=Hr[s],0===l?0!==A&&(l=1,Hr[s]=16777216-A):Hr[s]=16777215-A;if(o>0)switch(o){case 1:Hr[e-1]&=8388607;break;case 2:Hr[e-1]&=4194303}2===y&&(_=1-_,0!==l&&(_-=Ur(1,o)))}if(0===_){for(A=0,s=e-1;s>=a;s--)A|=Hr[s];if(0===A){for(b=1;0===Hr[a-b];b++);for(s=e+1;s<=e+b;s++){for(c[i+s]=gr[f+s],v=0,A=0;A<=i;A++)v+=r[A]*c[i+(s-A)];u[s]=v}return Tr(r,t,e+=b,u,o,a,f,i,c)}}if(0===_)for(e-=1,o-=24;0===Hr[e];)e-=1,o-=24;else(_=Ur(_,-o))>=16777216?(v=Or*_|0,Hr[e]=_-16777216*v|0,o+=24,Hr[e+=1]=v):Hr[e]=0|_;for(v=Ur(1,o),s=e;s>=0;s--)u[s]=v*Hr[s],v*=Or;for(s=e;s>=0;s--){for(v=0,b=0;b<=p&&b<=e-s;b++)v+=Ir[b]*u[s+b];Fr[e-s]=v}for(v=0,s=e;s>=0;s--)v+=Fr[s];for(t[0]=0===y?v:-v,v=Fr[0]-v,s=1;s<=e;s++)v+=Fr[s];return t[1]=0===y?v:-v,7&w}function Gr(r,n,t,e){var u,o,a,f,i,c,l;for(4,(o=(t-3)/24|0)<0&&(o=0),f=t-24*(o+1),c=o-(a=e-1),l=a+4,i=0;i<=l;i++)Sr[i]=c<0?0:gr[c],c+=1;for(i=0;i<=4;i++){for(u=0,c=0;c<=a;c++)u+=r[c]*Sr[a+(i-c)];Er[i]=u}return 4,Tr(r,n,4,Er,f,4,o,a,Sr)}var Pr=Math.round;function kr(r,n,t){var e,u,o,a,f;return o=r-1.5707963267341256*(e=Pr(.6366197723675814*r)),a=6077100506506192e-26*e,f=n>>20|0,t[0]=o-a,f-(G(t[0])>>20&2047)>16&&(a=20222662487959506e-37*e-((u=o)-(o=u-(a=6077100506303966e-26*e))-a),t[0]=o-a,f-(G(t[0])>>20&2047)>49&&(a=84784276603689e-45*e-((u=o)-(o=u-(a=20222662487111665e-37*e))-a),t[0]=o-a)),t[1]=o-t[0]-a,e}var xr=1.5707963267341256,Lr=6077100506506192e-26,Mr=2*Lr,Vr=4*Lr,Wr=[0,0,0],Yr=[0,0];function Cr(r,n){var t,e,u,o,a,f,i;if((u=2147483647&G(r)|0)<=1072243195)return n[0]=r,n[1]=0,0;if(u<=1074752122)return 598523==(1048575&u)?kr(r,u,n):u<=1073928572?r>0?(i=r-xr,n[0]=i-Lr,n[1]=i-n[0]-Lr,1):(i=r+xr,n[0]=i+Lr,n[1]=i-n[0]+Lr,-1):r>0?(i=r-2*xr,n[0]=i-Mr,n[1]=i-n[0]-Mr,2):(i=r+2*xr,n[0]=i+Mr,n[1]=i-n[0]+Mr,-2);if(u<=1075594811)return u<=1075183036?1074977148===u?kr(r,u,n):r>0?(i=r-3*xr,n[0]=i-1.8231301519518578e-10,n[1]=i-n[0]-1.8231301519518578e-10,3):(i=r+3*xr,n[0]=i+1.8231301519518578e-10,n[1]=i-n[0]+1.8231301519518578e-10,-3):1075388923===u?kr(r,u,n):r>0?(i=r-4*xr,n[0]=i-Vr,n[1]=i-n[0]-Vr,4):(i=r+4*xr,n[0]=i+Vr,n[1]=i-n[0]+Vr,-4);if(u<1094263291)return kr(r,u,n);if(u>=2146435072)return n[0]=NaN,n[1]=NaN,0;for(t=function(r){return C[0]=r,q[Y]}(r),i=Q(u-((e=(u>>20)-1046)<<20|0),t),a=0;a<2;a++)Wr[a]=0|i,i=16777216*(i-Wr[a]);for(Wr[2]=i,o=3;0===Wr[o-1];)o-=1;return f=Gr(Wr,Yr,e,o),r<0?(n[0]=-Yr[0],n[1]=-Yr[1],-f):(n[0]=Yr[0],n[1]=Yr[1],f)}var qr=[0,0];var zr=3.141592653589793,Br=!0===E?1:0,Dr=new A(1),Jr=new y(Dr.buffer);var Kr=.6931471803691238,Qr=1.9082149292705877e-10;function Rr(n){var t,e,u,o,a,f,i,c,l,v,y,p;return 0===n?$:r(n)||n<0?NaN:(a=0,(e=G(n))<1048576&&(a-=54,e=G(n*=0x40000000000000)),e>=2146435072?n+n:(a+=(e>>20)-1023|0,a+=(c=(e&=1048575)+614244&1048576|0)>>20|0,i=(n=function(r,n){return Dr[0]=r,Jr[Br]=n>>>0,Dr[0]}(n,e|1072693248^c))-1,(1048575&2+e)<3?0===i?0===a?0:a*Kr+a*Qr:(f=i*i*(.5-.3333333333333333*i),0===a?i-f:a*Kr-(f-a*Qr-i)):(c=e-398458|0,l=440401-e|0,o=(y=(p=(v=i/(2+i))*v)*p)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(y),u=p*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(y),f=u+o,(c|=l)>0?(t=.5*i*i,0===a?i-(t-v*(t+f)):a*Kr-(t-(v*(t+f)+a*Qr)-i)):0===a?i-v*(i-f):a*Kr-(v*(i-f)-a*Qr-i))))}function Xr(t){var e,u;if(r(t)||0===t)return NaN;if(t<=-1){if((e=(t=1-t)-n(t))>.5&&(e-=1),0===e)return NaN;u=zr/function(r){var n,t;return n=G(r),(n&=2147483647)<=1072243195?n<1044381696?r:M(r,0,1):n>=2146435072?NaN:(t=Cr(r,qr),M(qr[0],qr[1],1-((1&t)<<1)))}(zr*e)}else u=0;if(t>=10)return u+=function(r){var n;return Rr(r-=1)+1/(2*r)-(n=1/(r*r))*function(r){return 0===r?.08333333333333333:.08333333333333333+r*(r*(.003968253968253968+r*(r*(.007575757575757576+r*(r*(.08333333333333333+-.4432598039215686*r)-.021092796092796094))-.004166666666666667))-.008333333333333333)}(n)}(t),u;for(;t>2;)u+=1/(t-=1);for(;t<1;)u-=1/t,t+=1;return u+=function(r){var n,t;return n=r-1.4616321446374059,n-=3.309564688275257e-10,n-=9.016312093258695e-20,t=function(r){var n,t;return 0===r?.25479851061131553:((r<0?-r:r)<=1?(n=.25479851061131553+r*(r*(r*(r*(r*(0*r-.002071332116774595)-.04525132144873906)-.28919126444774784)-.6503185377089651)-.3255503118680449),t=1+r*(2.076711702373047+r*(1.4606242909763516+r*(.43593529692665967+r*(.054151797245674226+r*(.0021284987017821146+-5.578984132167551e-7*r)))))):(n=0+(r=1/r)*(r*(r*(r*(r*(.25479851061131553*r-.3255503118680449)-.6503185377089651)-.28919126444774784)-.04525132144873906)-.002071332116774595),t=r*(.0021284987017821146+r*(.054151797245674226+r*(.43593529692665967+r*(1.4606242909763516+r*(2.076711702373047+1*r)))))-5.578984132167551e-7),n/t)}(r-1),.9955816268920898*n+n*t}(t),u}var Zr=Math.ceil;function $r(r,n){var t,e,u,o;return u=(o=r*r)*o,e=o*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(o),e+=u*u*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(o),(u=1-(t=.5*o))+(1-u-t+(o*e-r*n))}var rn=-.16666666666666632;function nn(r,n){var t,e,u;return t=.00833333333332249+(u=r*r)*(27557313707070068e-22*u-.0001984126982985795)+u*(u*u)*(1.58969099521155e-10*u-2.5050760253406863e-8),e=u*r,0===n?r+e*(rn+u*t):r-(u*(.5*n-e*t)-n-e*rn)}var tn=[0,0];function en(r){var n;if(n=G(r),(n&=2147483647)<=1072243195)return n<1044381696?1:$r(r,0);if(n>=2146435072)return NaN;switch(3&Cr(r,tn)){case 0:return $r(tn[0],tn[1]);case 1:return-nn(tn[0],tn[1]);case 2:return-$r(tn[0],tn[1]);default:return nn(tn[0],tn[1])}}var un=[0,0];function on(r){var n;if(n=G(r),(n&=2147483647)<=1072243195)return n<1045430272?r:nn(r,0);if(n>=2146435072)return NaN;switch(3&Cr(r,un)){case 0:return nn(un[0],un[1]);case 1:return $r(un[0],un[1]);case 2:return-nn(un[0],un[1]);default:return-$r(un[0],un[1])}}var an=1.4616321449683622,fn=1.4616321449683622;function cn(t){var e,u,o,a,f,i,c,l,v,y,p,s,b;if(r(t)||rr(t))return t;if(0===t)return Z;if(t<0?(e=!0,t=-t):e=!1,t<8470329472543003e-37)return-Rr(t);if(e){if(t>=4503599627370496)return Z;if(v=function(n){var t,e;return r(n)||rr(n)?NaN:0===(t=Nr(e=n%2))||1===t?cr(0,e):t<.25?on(zr*e):t<.75?cr(en(zr*(t=.5-t)),e):t<1.25?(e=cr(1,e)-e,on(zr*e)):t<1.75?-cr(en(zr*(t-=1.5)),e):(e-=cr(2,e),on(zr*e))}(t),0===v)return Z;u=Rr(zr/Nr(v*t))}if(1===t||2===t)return 0;if(t<2)switch(t<=.9?(b=-Rr(t),t>=an-1+.27?(p=1-t,o=0):t>=an-1-.27?(p=t-(fn-1),o=1):(p=t,o=2)):(b=0,t>=an+.27?(p=2-t,o=0):t>=an-.27?(p=t-fn,o=1):(p=t-1,o=2)),o){case 0:i=.07721566490153287+(s=p*p)*function(r){return 0===r?.06735230105312927:.06735230105312927+r*(.007385550860814029+r*(.0011927076318336207+r*(.00022086279071390839+25214456545125733e-21*r)))}(s),f=s*(.3224670334241136+s*function(r){return 0===r?.020580808432516733:.020580808432516733+r*(.0028905138367341563+r*(.0005100697921535113+r*(.00010801156724758394+44864094961891516e-21*r)))}(s)),b+=(c=p*i+f)-.5*p;break;case 1:i=.48383612272381005+(y=(s=p*p)*p)*function(r){return 0===r?-.032788541075985965:r*(.006100538702462913+r*(.00031563207090362595*r-.0014034646998923284))-.032788541075985965}(y),f=y*function(r){return 0===r?.01797067508118204:.01797067508118204+r*(r*(.000881081882437654+-.00031275416837512086*r)-.0036845201678113826)}(y)-.1475877229945939,a=.06462494023913339+y*function(r){return 0===r?-.010314224129834144:r*(.0022596478090061247+r*(.0003355291926355191*r-.0005385953053567405))-.010314224129834144}(y),b+=-.12148629053584961+(c=s*i-(-3638676997039505e-33-y*(f+p*a)));break;case 2:i=p*(p*function(r){return 0===r?.6328270640250934:.6328270640250934+r*(1.4549225013723477+r*(.9777175279633727+r*(.22896372806469245+.013381091853678766*r)))}(p)-.07721566490153287),f=1+p*function(r){return 0===r?2.4559779371304113:2.4559779371304113+r*(2.128489763798934+r*(.7692851504566728+r*(.10422264559336913+.003217092422824239*r)))}(p),b+=-.5*p+i/f}else if(t<8)switch(o=function(r){return r<0?Zr(r):n(r)}(t),c=(p=t-o)*(p*function(r){return 0===r?.21498241596060885:.21498241596060885+r*(.325778796408931+r*(.14635047265246445+r*(.02664227030336386+r*(.0018402845140733772+3194753265841009e-20*r))))}(p)-.07721566490153287),l=1+p*function(r){return 0===r?1.3920053346762105:1.3920053346762105+r*(.7219355475671381+r*(.17193386563280308+r*(.01864591917156529+r*(.0007779424963818936+7326684307446256e-21*r))))}(p),b=.5*p+c/l,s=1,o){case 7:s*=p+6;case 6:s*=p+5;case 5:s*=p+4;case 4:s*=p+3;case 3:b+=Rr(s*=p+2)}else t<0x400000000000000?(v=Rr(t),y=.4189385332046727+(s=1/t)*function(r){return 0===r?.08333333333333297:.08333333333333297+r*(r*(.0007936505586430196+r*(r*(.0008363399189962821+-.0016309293409657527*r)-.00059518755745034))-.0027777777772877554)}(p=s*s),b=(t-.5)*(v-1)+y):b=t*(Rr(t)-1);return e&&(b=u-b),b}function ln(n,t){var e,u,o,a;return r(n)||r(t)||n<=0||t<=0?NaN:(e=(n+t)/2,u=n/2,o=t/2,a=Rr(t/n)+cn(u)+cn(o)-cn(e),a+=(1-u)*Xr(u),a+=(-1-o)*Xr(o),a+=e*Xr(e))}export{ln as default};
//# sourceMappingURL=mod.js.map
