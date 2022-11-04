// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(){"use strict";function r(r){return r!=r}var n,t=Math.floor,e="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),o=Object.prototype.toString,u=Object.prototype.hasOwnProperty,f="function"==typeof Symbol?Symbol.toStringTag:"";n=e&&"symbol"==typeof Symbol.toStringTag?function(r){var n,t,e,i,a;if(null==r)return o.call(r);t=r[f],a=f,n=null!=(i=r)&&u.call(i,a);try{r[f]=void 0}catch(n){return o.call(r)}return e=o.call(r),n?r[f]=t:delete r[f],e}:function(r){return o.call(r)};var i,a=n,c="function"==typeof Uint32Array,l="function"==typeof Uint32Array?Uint32Array:null,y="function"==typeof Uint32Array?Uint32Array:void 0;i=function(){var r,n,t;if("function"!=typeof l)return!1;try{n=new l(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(c&&t instanceof Uint32Array||"[object Uint32Array]"===a(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?y:function(){throw new Error("not implemented")};var v,p=i,s="function"==typeof Float64Array,b="function"==typeof Float64Array?Float64Array:null,w="function"==typeof Float64Array?Float64Array:void 0;v=function(){var r,n,t;if("function"!=typeof b)return!1;try{n=new b([1,3.14,-3.14,NaN]),t=n,r=(s&&t instanceof Float64Array||"[object Float64Array]"===a(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?w:function(){throw new Error("not implemented")};var d,A=v,_="function"==typeof Uint8Array,h="function"==typeof Uint8Array?Uint8Array:null,N="function"==typeof Uint8Array?Uint8Array:void 0;d=function(){var r,n,t;if("function"!=typeof h)return!1;try{n=new h(n=[1,3.14,-3.14,256,257]),t=n,r=(_&&t instanceof Uint8Array||"[object Uint8Array]"===a(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?N:function(){throw new Error("not implemented")};var m,U=d,g="function"==typeof Uint16Array,j="function"==typeof Uint16Array?Uint16Array:null,I="function"==typeof Uint16Array?Uint16Array:void 0;m=function(){var r,n,t;if("function"!=typeof j)return!1;try{n=new j(n=[1,3.14,-3.14,65536,65537]),t=n,r=(g&&t instanceof Uint16Array||"[object Uint16Array]"===a(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?I:function(){throw new Error("not implemented")};var O,S={uint16:m,uint8:U};(O=new S.uint16(1))[0]=4660;var E=52===new S.uint8(O.buffer)[0],F=!0===E?1:0,T=new A(1),H=new p(T.buffer);function G(r){return T[0]=r,H[F]}var P=!0===E?0:1,k=new A(1),x=new p(k.buffer);function L(r,n){return k[0]=r,x[P]=n>>>0,k[0]}function M(r,n,t){var e,o,u,f,i,a,c,l,y;return(o=2147483647&(e=G(r))|0)>=1072010280&&(r<0&&(r=-r,n=-n),r=(y=.7853981633974483-r)+(l=3061616997868383e-32-n),n=0),f=function(r){return 0===r?.13333333333320124:.13333333333320124+r*(.021869488294859542+r*(.0035920791075913124+r*(.0005880412408202641+r*(7817944429395571e-20+-18558637485527546e-21*r))))}(l=(y=r*r)*y),c=y*function(r){return 0===r?.05396825397622605:.05396825397622605+r*(.0088632398235993+r*(.0014562094543252903+r*(.0002464631348184699+r*(7140724913826082e-20+2590730518636337e-20*r))))}(l),f=n+y*((i=y*r)*(f+c)+n),l=r+(f+=.3333333333333341*i),o>=1072010280?(1-(e>>30&2))*((c=t)-2*(r-(l*l/(l+c)-f))):1===t?l:(L(y=l,0),c=f-(y-r),L(a=u=-1/l,0),a+u*((i=1+a*y)+a*c))}var V,W,Y=!0===E?0:1,C=new A(1),q=new p(C.buffer);!0===E?(V=1,W=0):(V=0,W=1);var z={HIGH:V,LOW:W},B=new A(1),D=new p(B.buffer),J=z.HIGH,K=z.LOW;function Q(r,n){return D[J]=r,D[K]=n,B[0]}var R,X,Z=Number.POSITIVE_INFINITY,$=Number.NEGATIVE_INFINITY,rr=1023;function nr(r){return r===Z||r===$}!0===E?(R=1,X=0):(R=0,X=1);var tr={HIGH:R,LOW:X},er=new A(1),or=new p(er.buffer),ur=tr.HIGH,fr=tr.LOW;function ir(r,n){return er[0]=n,r[0]=or[ur],r[1]=or[fr],r}function ar(r,n){return 1===arguments.length?ir([0,0],r):ir(r,n)}var cr=[0,0];function lr(r,n){var t,e;return ar(cr,r),t=cr[0],t&=2147483647,e=G(n),Q(t|=e&=2147483648,cr[1])}var yr,vr="function"==typeof Object.defineProperty?Object.defineProperty:null,pr=Object.defineProperty,sr=Object.prototype,br=sr.toString,wr=sr.__defineGetter__,dr=sr.__defineSetter__,Ar=sr.__lookupGetter__,_r=sr.__lookupSetter__;function hr(r){return Math.abs(r)}function Nr(n,t,e,o){return r(n)||nr(n)?(t[o]=n,t[o+e]=0,t):0!==n&&hr(n)<22250738585072014e-324?(t[o]=4503599627370496*n,t[o+e]=-52,t):(t[o]=n,t[o+e]=0,t)}yr=function(){try{return vr({},"x",{}),!0}catch(r){return!1}}()?pr:function(r,n,t){var e,o,u,f;if("object"!=typeof r||null===r||"[object Array]"===br.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===br.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((o="value"in t)&&(Ar.call(r,n)||_r.call(r,n)?(e=r.__proto__,r.__proto__=sr,delete r[n],r[n]=t.value,r.__proto__=e):r[n]=t.value),u="get"in t,f="set"in t,o&&(u||f))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return u&&wr&&wr.call(r,n,t.get),f&&dr&&dr.call(r,n,t.set),r},yr((function(r){return Nr(r,[0,0],1,0)}),"assign",{configurable:!1,enumerable:!1,writable:!1,value:Nr});var mr=[0,0],Ur=[0,0];function gr(n,t){var e,o;return 0===t||0===n||r(n)||nr(n)?n:(Nr(n,mr,1,0),t+=mr[1],t+=function(r){var n=G(r);return(n=(2146435072&n)>>>20)-rr|0}(n=mr[0]),t<-1074?lr(0,n):t>1023?n<0?$:Z:(t<=-1023?(t+=52,o=2220446049250313e-31):o=1,ar(Ur,n),e=Ur[0],e&=2148532223,o*Q(e|=t+rr<<20,Ur[1])))}function jr(r){return function(r,n){var t,e;for(t=[],e=0;e<n;e++)t.push(r);return t}(0,r)}var Ir=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],Or=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],Sr=16777216,Er=5.960464477539063e-8,Fr=jr(20),Tr=jr(20),Hr=jr(20),Gr=jr(20);function Pr(r,n,e,o,u,f,i,a,c){var l,y,v,p,s,b,w,d,A;for(p=f,A=o[e],d=e,s=0;d>0;s++)y=Er*A|0,Gr[s]=A-Sr*y|0,A=o[d-1]+y,d-=1;if(A=gr(A,u),A-=8*t(.125*A),A-=w=0|A,v=0,u>0?(w+=s=Gr[e-1]>>24-u,Gr[e-1]-=s<<24-u,v=Gr[e-1]>>23-u):0===u?v=Gr[e-1]>>23:A>=.5&&(v=2),v>0){for(w+=1,l=0,s=0;s<e;s++)d=Gr[s],0===l?0!==d&&(l=1,Gr[s]=16777216-d):Gr[s]=16777215-d;if(u>0)switch(u){case 1:Gr[e-1]&=8388607;break;case 2:Gr[e-1]&=4194303}2===v&&(A=1-A,0!==l&&(A-=gr(1,u)))}if(0===A){for(d=0,s=e-1;s>=f;s--)d|=Gr[s];if(0===d){for(b=1;0===Gr[f-b];b++);for(s=e+1;s<=e+b;s++){for(c[a+s]=Ir[i+s],y=0,d=0;d<=a;d++)y+=r[d]*c[a+(s-d)];o[s]=y}return Pr(r,n,e+=b,o,u,f,i,a,c)}}if(0===A)for(e-=1,u-=24;0===Gr[e];)e-=1,u-=24;else(A=gr(A,-u))>=Sr?(y=Er*A|0,Gr[e]=A-Sr*y|0,u+=24,Gr[e+=1]=y):Gr[e]=0|A;for(y=gr(1,u),s=e;s>=0;s--)o[s]=y*Gr[s],y*=Er;for(s=e;s>=0;s--){for(y=0,b=0;b<=p&&b<=e-s;b++)y+=Or[b]*o[s+b];Hr[e-s]=y}for(y=0,s=e;s>=0;s--)y+=Hr[s];for(n[0]=0===v?y:-y,y=Hr[0]-y,s=1;s<=e;s++)y+=Hr[s];return n[1]=0===v?y:-y,7&w}function kr(r,n,t,e){var o,u,f,i,a,c,l;for((u=(t-3)/24|0)<0&&(u=0),i=t-24*(u+1),c=u-(f=e-1),l=f+4,a=0;a<=l;a++)Fr[a]=c<0?0:Ir[c],c+=1;for(a=0;a<=4;a++){for(o=0,c=0;c<=f;c++)o+=r[c]*Fr[f+(a-c)];Tr[a]=o}return Pr(r,n,4,Tr,i,4,u,f,Fr)}var xr=Math.round;function Lr(r,n,t){var e,o,u,f,i;return u=r-1.5707963267341256*(e=xr(.6366197723675814*r)),f=6077100506506192e-26*e,i=n>>20|0,t[0]=u-f,i-(G(t[0])>>20&2047)>16&&(f=20222662487959506e-37*e-((o=u)-(u=o-(f=6077100506303966e-26*e))-f),t[0]=u-f,i-(G(t[0])>>20&2047)>49&&(f=84784276603689e-45*e-((o=u)-(u=o-(f=20222662487111665e-37*e))-f),t[0]=u-f)),t[1]=u-t[0]-f,e}var Mr=1.5707963267341256,Vr=6077100506506192e-26,Wr=2*Vr,Yr=3*Vr,Cr=4*Vr,qr=[0,0,0],zr=[0,0];function Br(r,n){var t,e,o,u,f,i,a;if((o=2147483647&G(r)|0)<=1072243195)return n[0]=r,n[1]=0,0;if(o<=1074752122)return 598523==(1048575&o)?Lr(r,o,n):o<=1073928572?r>0?(a=r-Mr,n[0]=a-Vr,n[1]=a-n[0]-Vr,1):(a=r+Mr,n[0]=a+Vr,n[1]=a-n[0]+Vr,-1):r>0?(a=r-2*Mr,n[0]=a-Wr,n[1]=a-n[0]-Wr,2):(a=r+2*Mr,n[0]=a+Wr,n[1]=a-n[0]+Wr,-2);if(o<=1075594811)return o<=1075183036?1074977148===o?Lr(r,o,n):r>0?(a=r-3*Mr,n[0]=a-Yr,n[1]=a-n[0]-Yr,3):(a=r+3*Mr,n[0]=a+Yr,n[1]=a-n[0]+Yr,-3):1075388923===o?Lr(r,o,n):r>0?(a=r-4*Mr,n[0]=a-Cr,n[1]=a-n[0]-Cr,4):(a=r+4*Mr,n[0]=a+Cr,n[1]=a-n[0]+Cr,-4);if(o<1094263291)return Lr(r,o,n);if(o>=2146435072)return n[0]=NaN,n[1]=NaN,0;for(t=function(r){return C[0]=r,q[Y]}(r),a=Q(o-((e=(o>>20)-1046)<<20|0),t),f=0;f<2;f++)qr[f]=0|a,a=16777216*(a-qr[f]);for(qr[2]=a,u=3;0===qr[u-1];)u-=1;return i=kr(qr,zr,e,u),r<0?(n[0]=-zr[0],n[1]=-zr[1],-i):(n[0]=zr[0],n[1]=zr[1],i)}var Dr=[0,0],Jr=3.141592653589793,Kr=!0===E?1:0,Qr=new A(1),Rr=new p(Qr.buffer),Xr=.6931471803691238,Zr=1.9082149292705877e-10,$r=1048575;function rn(n){var t,e,o,u,f,i,a,c,l,y,v,p;return 0===n?$:r(n)||n<0?NaN:(f=0,(e=G(n))<1048576&&(f-=54,e=G(n*=0x40000000000000)),e>=2146435072?n+n:(f+=(e>>20)-rr|0,f+=(c=614244+(e&=$r)&1048576|0)>>20|0,a=(n=function(r,n){return Qr[0]=r,Rr[Kr]=n>>>0,Qr[0]}(n,e|1072693248^c))-1,($r&2+e)<3?0===a?0===f?0:f*Xr+f*Zr:(i=a*a*(.5-.3333333333333333*a),0===f?a-i:f*Xr-(i-f*Zr-a)):(c=e-398458|0,l=440401-e|0,u=(v=(p=(y=a/(2+a))*y)*p)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(v),o=p*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(v),i=o+u,(c|=l)>0?(t=.5*a*a,0===f?a-(t-y*(t+i)):f*Xr-(t-(y*(t+i)+f*Zr)-a)):0===f?a-y*(a-i):f*Xr-(y*(a-i)-f*Zr-a))))}function nn(n){var e,o;if(r(n)||0===n)return NaN;if(n<=-1){if((e=(n=1-n)-t(n))>.5&&(e-=1),0===e)return NaN;o=Jr/function(r){var n,t;return n=G(r),(n&=2147483647)<=1072243195?n<1044381696?r:M(r,0,1):n>=2146435072?NaN:(t=Br(r,Dr),M(Dr[0],Dr[1],1-((1&t)<<1)))}(Jr*e)}else o=0;if(n>=10)return o+=function(r){var n;return rn(r-=1)+1/(2*r)-(n=1/(r*r))*function(r){return 0===r?.08333333333333333:.08333333333333333+r*(r*(.003968253968253968+r*(r*(.007575757575757576+r*(r*(.08333333333333333+-.4432598039215686*r)-.021092796092796094))-.004166666666666667))-.008333333333333333)}(n)}(n),o;for(;n>2;)o+=1/(n-=1);for(;n<1;)o-=1/n,n+=1;return o+=function(r){var n,t;return n=r-1.4616321446374059,n-=3.309564688275257e-10,n-=9.016312093258695e-20,t=function(r){var n,t;return 0===r?.25479851061131553:((r<0?-r:r)<=1?(n=.25479851061131553+r*(r*(r*(r*(r*(0*r-.002071332116774595)-.04525132144873906)-.28919126444774784)-.6503185377089651)-.3255503118680449),t=1+r*(2.076711702373047+r*(1.4606242909763516+r*(.43593529692665967+r*(.054151797245674226+r*(.0021284987017821146+-5.578984132167551e-7*r)))))):(n=0+(r=1/r)*(r*(r*(r*(r*(.25479851061131553*r-.3255503118680449)-.6503185377089651)-.28919126444774784)-.04525132144873906)-.002071332116774595),t=r*(.0021284987017821146+r*(.054151797245674226+r*(.43593529692665967+r*(1.4606242909763516+r*(2.076711702373047+1*r)))))-5.578984132167551e-7),n/t)}(r-1),.9955816268920898*n+n*t}(n),o}var tn=Math.ceil;function en(r,n){var t,e,o,u;return o=(u=r*r)*u,e=u*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(u),e+=o*o*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(u),(o=1-(t=.5*u))+(1-o-t+(u*e-r*n))}var on=-.16666666666666632;function un(r,n){var t,e,o;return t=.00833333333332249+(o=r*r)*(27557313707070068e-22*o-.0001984126982985795)+o*(o*o)*(1.58969099521155e-10*o-2.5050760253406863e-8),e=o*r,0===n?r+e*(on+o*t):r-(o*(.5*n-e*t)-n-e*on)}var fn=[0,0];function an(r){var n;if(n=G(r),(n&=2147483647)<=1072243195)return n<1044381696?1:en(r,0);if(n>=2146435072)return NaN;switch(3&Br(r,fn)){case 0:return en(fn[0],fn[1]);case 1:return-un(fn[0],fn[1]);case 2:return-en(fn[0],fn[1]);default:return un(fn[0],fn[1])}}var cn=[0,0];function ln(r){var n;if(n=G(r),(n&=2147483647)<=1072243195)return n<1045430272?r:un(r,0);if(n>=2146435072)return NaN;switch(3&Br(r,cn)){case 0:return un(cn[0],cn[1]);case 1:return en(cn[0],cn[1]);case 2:return-un(cn[0],cn[1]);default:return-en(cn[0],cn[1])}}var yn=1.4616321449683622,vn=1.4616321449683622;function pn(n){var e,o,u,f,i,a,c,l,y,v,p,s,b;if(r(n)||nr(n))return n;if(0===n)return Z;if(n<0?(e=!0,n=-n):e=!1,n<8470329472543003e-37)return-rn(n);if(e){if(n>=4503599627370496)return Z;if(y=function(n){var t,e;return r(n)||nr(n)?NaN:0===(t=hr(e=n%2))||1===t?lr(0,e):t<.25?ln(Jr*e):t<.75?lr(an(Jr*(t=.5-t)),e):t<1.25?(e=lr(1,e)-e,ln(Jr*e)):t<1.75?-lr(an(Jr*(t-=1.5)),e):(e-=lr(2,e),ln(Jr*e))}(n),0===y)return Z;o=rn(Jr/hr(y*n))}if(1===n||2===n)return 0;if(n<2)switch(n<=.9?(b=-rn(n),n>=yn-1+.27?(p=1-n,u=0):n>=yn-1-.27?(p=n-(vn-1),u=1):(p=n,u=2)):(b=0,n>=yn+.27?(p=2-n,u=0):n>=yn-.27?(p=n-vn,u=1):(p=n-1,u=2)),u){case 0:a=.07721566490153287+(s=p*p)*function(r){return 0===r?.06735230105312927:.06735230105312927+r*(.007385550860814029+r*(.0011927076318336207+r*(.00022086279071390839+25214456545125733e-21*r)))}(s),i=s*(.3224670334241136+s*function(r){return 0===r?.020580808432516733:.020580808432516733+r*(.0028905138367341563+r*(.0005100697921535113+r*(.00010801156724758394+44864094961891516e-21*r)))}(s)),b+=(c=p*a+i)-.5*p;break;case 1:a=.48383612272381005+(v=(s=p*p)*p)*function(r){return 0===r?-.032788541075985965:r*(.006100538702462913+r*(.00031563207090362595*r-.0014034646998923284))-.032788541075985965}(v),i=v*function(r){return 0===r?.01797067508118204:.01797067508118204+r*(r*(.000881081882437654+-.00031275416837512086*r)-.0036845201678113826)}(v)-.1475877229945939,f=.06462494023913339+v*function(r){return 0===r?-.010314224129834144:r*(.0022596478090061247+r*(.0003355291926355191*r-.0005385953053567405))-.010314224129834144}(v),b+=(c=s*a-(-3638676997039505e-33-v*(i+p*f)))-.12148629053584961;break;case 2:a=p*(p*function(r){return 0===r?.6328270640250934:.6328270640250934+r*(1.4549225013723477+r*(.9777175279633727+r*(.22896372806469245+.013381091853678766*r)))}(p)-.07721566490153287),i=1+p*function(r){return 0===r?2.4559779371304113:2.4559779371304113+r*(2.128489763798934+r*(.7692851504566728+r*(.10422264559336913+.003217092422824239*r)))}(p),b+=-.5*p+a/i}else if(n<8)switch(u=function(r){return r<0?tn(r):t(r)}(n),c=(p=n-u)*(p*function(r){return 0===r?.21498241596060885:.21498241596060885+r*(.325778796408931+r*(.14635047265246445+r*(.02664227030336386+r*(.0018402845140733772+3194753265841009e-20*r))))}(p)-.07721566490153287),l=1+p*function(r){return 0===r?1.3920053346762105:1.3920053346762105+r*(.7219355475671381+r*(.17193386563280308+r*(.01864591917156529+r*(.0007779424963818936+7326684307446256e-21*r))))}(p),b=.5*p+c/l,s=1,u){case 7:s*=p+6;case 6:s*=p+5;case 5:s*=p+4;case 4:s*=p+3;case 3:b+=rn(s*=p+2)}else n<0x400000000000000?(y=rn(n),v=.4189385332046727+(s=1/n)*function(r){return 0===r?.08333333333333297:.08333333333333297+r*(r*(.0007936505586430196+r*(r*(.0008363399189962821+-.0016309293409657527*r)-.00059518755745034))-.0027777777772877554)}(p=s*s),b=(n-.5)*(y-1)+v):b=n*(rn(n)-1);return e&&(b=o-b),b}return function(n,t){var e,o,u,f;return r(n)||r(t)||n<=0||t<=0?NaN:(e=(n+t)/2,o=n/2,u=t/2,f=rn(t/n)+pn(o)+pn(u)-pn(e),f+=(1-o)*nn(o),f+=(-1-u)*nn(u),f+=e*nn(e))}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).entropy=n();
//# sourceMappingURL=browser.js.map
