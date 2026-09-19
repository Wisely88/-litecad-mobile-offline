import{aR as un,aS as Re,aT as k,aU as fe,aV as N,aW as mn,aX as W,aY as pn,aZ as pa,a_ as Ge,O as Me,a$ as Ce,b0 as hn,b1 as fn,b2 as ha,b3 as gn,b4 as fa,b5 as bn,b6 as yn,b7 as wn,b8 as xn,Q as Ga,E as Xa,N as Za,b9 as vn,ba as kn,bb as An,bc as nt,bd as Cn,be as Wa,bf as zn,bg as En,bh as Sn,bi as Pn,bj as Un,bk as Fn,bl as Mn,bm as In,ad as Ln,bn as Tn,bo as Hn,U as Dn,ai as Rn,bp as Bn,q as On,m as jn,s as jt,y as Nn,D as $n,I as _n,K as Vn,L as Yn,ae as Kn,af as Gn,C as Xn,bq as Zn,k as Wn,Y as Jn,Z as qn,_ as Qn,V as eo,X as to,aa as ao,a7 as ro,z as no,al as oo,br as io,bs as ga,bt as so,bu as lo,bv as te,v as co,bw as ge,bx as Ja,M as uo,S as mo}from"./cad-viewer-QmNE3w9S.js";import{by as Fc,bz as Mc}from"./cad-viewer-QmNE3w9S.js";import"./index-CxXm9SpT.js";const $=4;var M=Uint8Array,K=Uint16Array,Nt=Int32Array,Xe=new M([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Ze=new M([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),ft=new M([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),qa=function(e,t){for(var a=new K(31),r=0;r<31;++r)a[r]=t+=1<<e[r-1];for(var n=new Nt(a[30]),r=1;r<30;++r)for(var o=a[r];o<a[r+1];++o)n[o]=o-a[r]<<5|r;return{b:a,r:n}},Qa=qa(Xe,2),er=Qa.b,gt=Qa.r;er[28]=258,gt[258]=28;var tr=qa(Ze,0),po=tr.b,ba=tr.r,bt=new K(32768);for(var U=0;U<32768;++U){var oe=(U&43690)>>1|(U&21845)<<1;oe=(oe&52428)>>2|(oe&13107)<<2,oe=(oe&61680)>>4|(oe&3855)<<4,bt[U]=((oe&65280)>>8|(oe&255)<<8)>>1}var ee=(function(e,t,a){for(var r=e.length,n=0,o=new K(t);n<r;++n)e[n]&&++o[e[n]-1];var i=new K(t);for(n=1;n<t;++n)i[n]=i[n-1]+o[n-1]<<1;var s;if(a){s=new K(1<<t);var l=15-t;for(n=0;n<r;++n)if(e[n])for(var c=n<<4|e[n],d=t-e[n],u=i[e[n]-1]++<<d,m=u|(1<<d)-1;u<=m;++u)s[bt[u]>>l]=c}else for(s=new K(r),n=0;n<r;++n)e[n]&&(s[n]=bt[i[e[n]-1]++]>>15-e[n]);return s}),ie=new M(288);for(var U=0;U<144;++U)ie[U]=8;for(var U=144;U<256;++U)ie[U]=9;for(var U=256;U<280;++U)ie[U]=7;for(var U=280;U<288;++U)ie[U]=8;var Ee=new M(32);for(var U=0;U<32;++U)Ee[U]=5;var ho=ee(ie,9,0),fo=ee(ie,9,1),go=ee(Ee,5,0),bo=ee(Ee,5,1),ot=function(e){for(var t=e[0],a=1;a<e.length;++a)e[a]>t&&(t=e[a]);return t},Z=function(e,t,a){var r=t/8|0;return(e[r]|e[r+1]<<8)>>(t&7)&a},it=function(e,t){var a=t/8|0;return(e[a]|e[a+1]<<8|e[a+2]<<16)>>(t&7)},$t=function(e){return(e+7)/8|0},Ie=function(e,t,a){return(t==null||t<0)&&(t=0),(a==null||a>e.length)&&(a=e.length),new M(e.subarray(t,a))},yo=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],j=function(e,t,a){var r=new Error(t||yo[e]);if(r.code=e,Error.captureStackTrace&&Error.captureStackTrace(r,j),!a)throw r;return r},ar=function(e,t,a,r){var n=e.length,o=r?r.length:0;if(!n||t.f&&!t.l)return a||new M(0);var i=!a,s=i||t.i!=2,l=t.i;i&&(a=new M(n*3));var c=function(ye){var we=a.length;if(ye>we){var pe=new M(Math.max(we*2,ye));pe.set(a),a=pe}},d=t.f||0,u=t.p||0,m=t.b||0,p=t.l,h=t.d,f=t.m,g=t.n,A=n*8;do{if(!p){d=Z(e,u,1);var w=Z(e,u+1,3);if(u+=3,w)if(w==1)p=fo,h=bo,f=9,g=5;else if(w==2){var z=Z(e,u,31)+257,C=Z(e,u+10,15)+4,b=z+Z(e,u+5,31)+1;u+=14;for(var E=new M(b),S=new M(19),y=0;y<C;++y)S[ft[y]]=Z(e,u+y*3,7);u+=C*3;for(var x=ot(S),O=(1<<x)-1,G=ee(S,x,1),y=0;y<b;){var F=G[Z(e,u,O)];u+=F&15;var I=F>>4;if(I<16)E[y++]=I;else{var P=0,T=0;for(I==16?(T=3+Z(e,u,3),u+=2,P=E[y-1]):I==17?(T=3+Z(e,u,7),u+=3):I==18&&(T=11+Z(e,u,127),u+=7);T--;)E[y++]=P}}var R=E.subarray(0,z),v=E.subarray(z);f=ot(R),g=ot(v),p=ee(R,f,1),h=ee(v,g,1)}else j(1);else{var I=$t(u)+4,H=e[I-4]|e[I-3]<<8,_=I+H;if(_>n){l&&j(0);break}s&&c(m+H),a.set(e.subarray(I,_),m),t.b=m+=H,t.p=u=_*8,t.f=d;continue}if(u>A){l&&j(0);break}}s&&c(m+131072);for(var be=(1<<f)-1,X=(1<<g)-1,ae=u;;ae=u){var P=p[it(e,u)&be],V=P>>4;if(u+=P&15,u>A){l&&j(0);break}if(P||j(2),V<256)a[m++]=V;else if(V==256){ae=u,p=null;break}else{var Y=V-254;if(V>264){var y=V-257,L=Xe[y];Y=Z(e,u,(1<<L)-1)+er[y],u+=L}var q=h[it(e,u)&X],ue=q>>4;q||j(3),u+=q&15;var v=po[ue];if(ue>3){var L=Ze[ue];v+=it(e,u)&(1<<L)-1,u+=L}if(u>A){l&&j(0);break}s&&c(m+131072);var me=m+Y;if(m<v){var He=o-v,De=Math.min(v,me);for(He+m<0&&j(3);m<De;++m)a[m]=r[He+m]}for(;m<me;++m)a[m]=a[m-v]}}t.l=p,t.p=ae,t.b=m,t.f=d,p&&(d=1,t.m=f,t.d=h,t.n=g)}while(!d);return m!=a.length&&i?Ie(a,0,m):a.subarray(0,m)},re=function(e,t,a){a<<=t&7;var r=t/8|0;e[r]|=a,e[r+1]|=a>>8},xe=function(e,t,a){a<<=t&7;var r=t/8|0;e[r]|=a,e[r+1]|=a>>8,e[r+2]|=a>>16},st=function(e,t){for(var a=[],r=0;r<e.length;++r)e[r]&&a.push({s:r,f:e[r]});var n=a.length,o=a.slice();if(!n)return{t:nr,l:0};if(n==1){var i=new M(a[0].s+1);return i[a[0].s]=1,{t:i,l:1}}a.sort(function(b,E){return b.f-E.f}),a.push({s:-1,f:25001});var s=a[0],l=a[1],c=0,d=1,u=2;for(a[0]={s:-1,f:s.f+l.f,l:s,r:l};d!=n-1;)s=a[a[c].f<a[u].f?c++:u++],l=a[c!=d&&a[c].f<a[u].f?c++:u++],a[d++]={s:-1,f:s.f+l.f,l:s,r:l};for(var m=o[0].s,r=1;r<n;++r)o[r].s>m&&(m=o[r].s);var p=new K(m+1),h=yt(a[d-1],p,0);if(h>t){var r=0,f=0,g=h-t,A=1<<g;for(o.sort(function(E,S){return p[S.s]-p[E.s]||E.f-S.f});r<n;++r){var w=o[r].s;if(p[w]>t)f+=A-(1<<h-p[w]),p[w]=t;else break}for(f>>=g;f>0;){var z=o[r].s;p[z]<t?f-=1<<t-p[z]++-1:++r}for(;r>=0&&f;--r){var C=o[r].s;p[C]==t&&(--p[C],++f)}h=t}return{t:new M(p),l:h}},yt=function(e,t,a){return e.s==-1?Math.max(yt(e.l,t,a+1),yt(e.r,t,a+1)):t[e.s]=a},ya=function(e){for(var t=e.length;t&&!e[--t];);for(var a=new K(++t),r=0,n=e[0],o=1,i=function(l){a[r++]=l},s=1;s<=t;++s)if(e[s]==n&&s!=t)++o;else{if(!n&&o>2){for(;o>138;o-=138)i(32754);o>2&&(i(o>10?o-11<<5|28690:o-3<<5|12305),o=0)}else if(o>3){for(i(n),--o;o>6;o-=6)i(8304);o>2&&(i(o-3<<5|8208),o=0)}for(;o--;)i(n);o=1,n=e[s]}return{c:a.subarray(0,r),n:t}},ve=function(e,t){for(var a=0,r=0;r<t.length;++r)a+=e[r]*t[r];return a},rr=function(e,t,a){var r=a.length,n=$t(t+2);e[n]=r&255,e[n+1]=r>>8,e[n+2]=e[n]^255,e[n+3]=e[n+1]^255;for(var o=0;o<r;++o)e[n+o+4]=a[o];return(n+4+r)*8},wa=function(e,t,a,r,n,o,i,s,l,c,d){re(t,d++,a),++n[256];for(var u=st(n,15),m=u.t,p=u.l,h=st(o,15),f=h.t,g=h.l,A=ya(m),w=A.c,z=A.n,C=ya(f),b=C.c,E=C.n,S=new K(19),y=0;y<w.length;++y)++S[w[y]&31];for(var y=0;y<b.length;++y)++S[b[y]&31];for(var x=st(S,7),O=x.t,G=x.l,F=19;F>4&&!O[ft[F-1]];--F);var I=c+5<<3,P=ve(n,ie)+ve(o,Ee)+i,T=ve(n,m)+ve(o,f)+i+14+3*F+ve(S,O)+2*S[16]+3*S[17]+7*S[18];if(l>=0&&I<=P&&I<=T)return rr(t,d,e.subarray(l,l+c));var R,v,H,_;if(re(t,d,1+(T<P)),d+=2,T<P){R=ee(m,p,0),v=m,H=ee(f,g,0),_=f;var be=ee(O,G,0);re(t,d,z-257),re(t,d+5,E-1),re(t,d+10,F-4),d+=14;for(var y=0;y<F;++y)re(t,d+3*y,O[ft[y]]);d+=3*F;for(var X=[w,b],ae=0;ae<2;++ae)for(var V=X[ae],y=0;y<V.length;++y){var Y=V[y]&31;re(t,d,be[Y]),d+=O[Y],Y>15&&(re(t,d,V[y]>>5&127),d+=V[y]>>12)}}else R=ho,v=ie,H=go,_=Ee;for(var y=0;y<s;++y){var L=r[y];if(L>255){var Y=L>>18&31;xe(t,d,R[Y+257]),d+=v[Y+257],Y>7&&(re(t,d,L>>23&31),d+=Xe[Y]);var q=L&31;xe(t,d,H[q]),d+=_[q],q>3&&(xe(t,d,L>>5&8191),d+=Ze[q])}else xe(t,d,R[L]),d+=v[L]}return xe(t,d,R[256]),d+v[256]},wo=new Nt([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),nr=new M(0),xo=function(e,t,a,r,n,o){var i=o.z||e.length,s=new M(r+i+5*(1+Math.ceil(i/7e3))+n),l=s.subarray(r,s.length-n),c=o.l,d=(o.r||0)&7;if(t){d&&(l[0]=o.r>>3);for(var u=wo[t-1],m=u>>13,p=u&8191,h=(1<<a)-1,f=o.p||new K(32768),g=o.h||new K(h+1),A=Math.ceil(a/3),w=2*A,z=function(rt){return(e[rt]^e[rt+1]<<A^e[rt+2]<<w)&h},C=new Nt(25e3),b=new K(288),E=new K(32),S=0,y=0,x=o.i||0,O=0,G=o.w||0,F=0;x+2<i;++x){var I=z(x),P=x&32767,T=g[I];if(f[P]=T,g[I]=P,G<=x){var R=i-x;if((S>7e3||O>24576)&&(R>423||!c)){d=wa(e,l,0,C,b,E,y,O,F,x-F,d),O=S=y=0,F=x;for(var v=0;v<286;++v)b[v]=0;for(var v=0;v<30;++v)E[v]=0}var H=2,_=0,be=p,X=P-T&32767;if(R>2&&I==z(x-X))for(var ae=Math.min(m,R)-1,V=Math.min(32767,x),Y=Math.min(258,R);X<=V&&--be&&P!=T;){if(e[x+H]==e[x+H-X]){for(var L=0;L<Y&&e[x+L]==e[x+L-X];++L);if(L>H){if(H=L,_=X,L>ae)break;for(var q=Math.min(X,L-2),ue=0,v=0;v<q;++v){var me=x-X+v&32767,He=f[me],De=me-He&32767;De>ue&&(ue=De,T=me)}}}P=T,T=f[P],X+=P-T&32767}if(_){C[O++]=268435456|gt[H]<<18|ba[_];var ye=gt[H]&31,we=ba[_]&31;y+=Xe[ye]+Ze[we],++b[257+ye],++E[we],G=x+H,++S}else C[O++]=e[x],++b[e[x]]}}for(x=Math.max(x,G);x<i;++x)C[O++]=e[x],++b[e[x]];d=wa(e,l,c,C,b,E,y,O,F,x-F,d),c||(o.r=d&7|l[d/8|0]<<3,d-=7,o.h=g,o.p=f,o.i=x,o.w=G)}else{for(var x=o.w||0;x<i+c;x+=65535){var pe=x+65535;pe>=i&&(l[d/8|0]=c,pe=i),d=rr(l,d+1,e.subarray(x,pe))}o.i=i}return Ie(s,0,r+$t(d)+n)},vo=(function(){for(var e=new Int32Array(256),t=0;t<256;++t){for(var a=t,r=9;--r;)a=(a&1&&-306674912)^a>>>1;e[t]=a}return e})(),or=function(){var e=-1;return{p:function(t){for(var a=e,r=0;r<t.length;++r)a=vo[a&255^t[r]]^a>>>8;e=a},d:function(){return~e}}},ir=function(e,t,a,r,n){if(!n&&(n={l:1},t.dictionary)){var o=t.dictionary.subarray(-32768),i=new M(o.length+e.length);i.set(o),i.set(e,o.length),e=i,n.w=o.length}return xo(e,t.level==null?6:t.level,t.mem==null?n.l?Math.ceil(Math.max(8,Math.min(13,Math.log(e.length)))*1.5):20:12+t.mem,a,r,n)},sr=function(e,t){var a={};for(var r in e)a[r]=e[r];for(var r in t)a[r]=t[r];return a},Q=function(e,t){return e[t]|e[t+1]<<8},J=function(e,t){return(e[t]|e[t+1]<<8|e[t+2]<<16|e[t+3]<<24)>>>0},lt=function(e,t){return J(e,t)+J(e,t+4)*4294967296},D=function(e,t,a){for(;a;++t)e[t]=a,a>>>=8},ko=function(e,t){var a=t.filename;if(e[0]=31,e[1]=139,e[2]=8,e[8]=t.level<2?4:t.level==9?2:0,e[9]=3,t.mtime!=0&&D(e,4,Math.floor(new Date(t.mtime||Date.now())/1e3)),a){e[3]=8;for(var r=0;r<=a.length;++r)e[r+10]=a.charCodeAt(r)}},Ao=function(e){(e[0]!=31||e[1]!=139||e[2]!=8)&&j(6,"invalid gzip data");var t=e[3],a=10;t&4&&(a+=(e[10]|e[11]<<8)+2);for(var r=(t>>3&1)+(t>>4&1);r>0;r-=!e[a++]);return a+(t&2)},Co=function(e){var t=e.length;return(e[t-4]|e[t-3]<<8|e[t-2]<<16|e[t-1]<<24)>>>0},zo=function(e){return 10+(e.filename?e.filename.length+1:0)};function Eo(e,t){return ir(e,t||{},0,0)}function So(e,t){return ar(e,{i:2},t&&t.out,t&&t.dictionary)}function Po(e,t){t||(t={});var a=or(),r=e.length;a.p(e);var n=ir(e,t,zo(t),8),o=n.length;return ko(n,t),D(n,o-8,a.d()),D(n,o-4,r),n}function Uo(e,t){var a=Ao(e);return a+8>e.length&&j(6,"invalid gzip data"),ar(e.subarray(a,-8),{i:2},new M(Co(e)),t)}var lr=function(e,t,a,r){for(var n in e){var o=e[n],i=t+n,s=r;Array.isArray(o)&&(s=sr(r,o[1]),o=o[0]),o instanceof M?a[i]=[o,s]:(a[i+="/"]=[new M(0),s],lr(o,i,a,r))}},xa=typeof TextEncoder<"u"&&new TextEncoder,wt=typeof TextDecoder<"u"&&new TextDecoder,Fo=0;try{wt.decode(nr,{stream:!0}),Fo=1}catch{}var Mo=function(e){for(var t="",a=0;;){var r=e[a++],n=(r>127)+(r>223)+(r>239);if(a+n>e.length)return{s:t,r:Ie(e,a-1)};n?n==3?(r=((r&15)<<18|(e[a++]&63)<<12|(e[a++]&63)<<6|e[a++]&63)-65536,t+=String.fromCharCode(55296|r>>10,56320|r&1023)):n&1?t+=String.fromCharCode((r&31)<<6|e[a++]&63):t+=String.fromCharCode((r&15)<<12|(e[a++]&63)<<6|e[a++]&63):t+=String.fromCharCode(r)}};function Se(e,t){var a;if(xa)return xa.encode(e);for(var r=e.length,n=new M(e.length+(e.length>>1)),o=0,i=function(d){n[o++]=d},a=0;a<r;++a){if(o+5>n.length){var s=new M(o+8+(r-a<<1));s.set(n),n=s}var l=e.charCodeAt(a);l<128||t?i(l):l<2048?(i(192|l>>6),i(128|l&63)):l>55295&&l<57344?(l=65536+(l&1047552)|e.charCodeAt(++a)&1023,i(240|l>>18),i(128|l>>12&63),i(128|l>>6&63),i(128|l&63)):(i(224|l>>12),i(128|l>>6&63),i(128|l&63))}return Ie(n,0,o)}function _t(e,t){if(t){for(var a="",r=0;r<e.length;r+=16384)a+=String.fromCharCode.apply(null,e.subarray(r,r+16384));return a}else{if(wt)return wt.decode(e);var n=Mo(e),o=n.s,a=n.r;return a.length&&j(8),o}}var Io=function(e,t){return t+30+Q(e,t+26)+Q(e,t+28)},Lo=function(e,t,a){var r=Q(e,t+28),n=_t(e.subarray(t+46,t+46+r),!(Q(e,t+8)&2048)),o=t+46+r,i=J(e,t+20),s=a&&i==4294967295?To(e,o):[i,J(e,t+24),J(e,t+42)],l=s[0],c=s[1],d=s[2];return[Q(e,t+10),l,c,n,o+Q(e,t+30)+Q(e,t+32),d]},To=function(e,t){for(;Q(e,t)!=1;t+=4+Q(e,t+2));return[lt(e,t+12),lt(e,t+4),lt(e,t+20)]},xt=function(e){var t=0;if(e)for(var a in e){var r=e[a].length;r>65535&&j(9),t+=r+4}return t},va=function(e,t,a,r,n,o,i,s){var l=r.length,c=a.extra,d=s&&s.length,u=xt(c);D(e,t,i!=null?33639248:67324752),t+=4,i!=null&&(e[t++]=20,e[t++]=a.os),e[t]=20,t+=2,e[t++]=a.flag<<1|(o<0&&8),e[t++]=n&&8,e[t++]=a.compression&255,e[t++]=a.compression>>8;var m=new Date(a.mtime==null?Date.now():a.mtime),p=m.getFullYear()-1980;if((p<0||p>119)&&j(10),D(e,t,p<<25|m.getMonth()+1<<21|m.getDate()<<16|m.getHours()<<11|m.getMinutes()<<5|m.getSeconds()>>1),t+=4,o!=-1&&(D(e,t,a.crc),D(e,t+4,o<0?-o-2:o),D(e,t+8,a.size)),D(e,t+12,l),D(e,t+14,u),t+=16,i!=null&&(D(e,t,d),D(e,t+6,a.attrs),D(e,t+10,i),t+=14),e.set(r,t),t+=l,u)for(var h in c){var f=c[h],g=f.length;D(e,t,+h),D(e,t+2,g),e.set(f,t+4),t+=4+g}return d&&(e.set(s,t),t+=d),t},Ho=function(e,t,a,r,n){D(e,t,101010256),D(e,t+8,a),D(e,t+10,a),D(e,t+12,r),D(e,t+16,n)};function Do(e,t){t||(t={});var a={},r=[];lr(e,"",a,t);var n=0,o=0;for(var i in a){var s=a[i],l=s[0],c=s[1],d=c.level==0?0:8,u=Se(i),m=u.length,p=c.comment,h=p&&Se(p),f=h&&h.length,g=xt(c.extra);m>65535&&j(11);var A=d?Eo(l,c):l,w=A.length,z=or();z.p(l),r.push(sr(c,{size:l.length,crc:z.d(),c:A,f:u,m:h,u:m!=i.length||h&&p.length!=f,o:n,compression:d})),n+=30+m+g+w,o+=76+2*(m+g)+(f||0)+w}for(var C=new M(o+22),b=n,E=o-n,S=0;S<r.length;++S){var u=r[S];va(C,u.o,u,u.f,u.u,u.c.length);var y=30+u.f.length+xt(u.extra);C.set(u.c,u.o+y),va(C,n,u,u.f,u.u,u.c.length,u.o,u.m),n+=16+y+(u.m?u.m.length:0)}return Ho(C,n,r.length,E,b),C}function Ro(e,t){for(var a={},r=e.length-22;J(e,r)!=101010256;--r)(!r||e.length-r>65558)&&j(13);var n=Q(e,r+8);if(!n)return{};var o=J(e,r+16),i=o==4294967295||n==65535;if(i){var s=J(e,r-12);i=J(e,s)==101075792,i&&(n=J(e,s+32),o=J(e,s+48))}for(var l=0;l<n;++l){var c=Lo(e,o,i),d=c[0],u=c[1],m=c[2],p=c[3],h=c[4],f=c[5],g=Io(e,f);o=h,d?d==8?a[p]=So(e.subarray(g,g+u),{out:new M(m)}):j(14,"unknown compression type "+d):a[p]=Ie(e,g,g+u)}return a}const Bo="gzip",Oo=512*1024*1024,vt=256*1024*1024;function Vt(e){return{bytes:Po(e),compression:Bo}}function Yt(e){if(e.byteLength>vt)throw new Error("Compressed payload exceeds size limit");const t=Uo(e);if(t.byteLength>Oo)throw new Error("Decompressed payload exceeds size limit");return t}const kt=1,At=2,Ct=4,zt=8,Et=16,cr=32,St=1,Pt=2,Ut=4,Ft=8,Mt=16,dr=32,It=64,Lt=128;function Kt(e){let t=256+e.positions.byteLength;return e.indices&&(t+=e.indices.byteLength),e.lineDistances&&(t+=e.lineDistances.byteLength),e.linePattern&&(t+=64+e.linePattern.pattern.length*8),t}function Gt(e){let t=256+e.positions.byteLength;return e.indices&&(t+=e.indices.byteLength),e.gradientPositions&&(t+=e.gradientPositions.byteLength),e.uvs&&(t+=e.uvs.byteLength),e.texture&&(t+=e.texture.bytes.byteLength+64),e.hatchPattern&&(t+=128),e.gradientFill&&(t+=64),t}function ur(e,t){e.writeString(t.layer),e.writeU32(t.color>>>0),e.writeF64(t.offset[0]),e.writeF64(t.offset[1]),e.writeF64(t.offset[2]),e.writeFloat32Array(t.positions);let a=0;t.indices&&t.indices.length>0&&(a|=kt),t.linePattern&&(a|=At),t.lineDistances&&t.lineDistances.length>0&&(a|=Ct),t.lineWidth!=null&&t.lineWidth>0&&(a|=zt),t.renderOrder!=null&&t.renderOrder!==0&&(a|=Et),t.excludeFromOsnap&&(a|=cr),e.writeU8(a),a&kt&&e.writeUint32Array(t.indices),a&At&&e.writeJson(t.linePattern),a&Ct&&e.writeFloat32Array(t.lineDistances),a&zt&&e.writeF32(t.lineWidth),a&Et&&e.writeI32(t.renderOrder)}function mr(e){const t=e.readString(),a=e.readU32(),r=[e.readF64(),e.readF64(),e.readF64()],n=e.readFloat32Array(),o=e.readU8(),i={layer:t,color:a,offset:r,positions:n};return o&kt&&(i.indices=e.readUint32Array()),o&At&&(i.linePattern=e.readJson()),o&Ct&&(i.lineDistances=e.readFloat32Array()),o&zt&&(i.lineWidth=e.readF32()),o&Et&&(i.renderOrder=e.readI32()),o&cr&&(i.excludeFromOsnap=!0),i}function pr(e,t){e.writeString(t.layer),e.writeU32(t.color>>>0),e.writeF64(t.offset[0]),e.writeF64(t.offset[1]),e.writeF64(t.offset[2]),e.writeFloat32Array(t.positions);let a=0;t.indices&&t.indices.length>0&&(a|=St),t.hatchPattern&&(a|=Pt),t.gradientFill&&(a|=Ut),t.gradientPositions&&t.gradientPositions.length>0&&(a|=Ft),t.side!=null&&(a|=Mt),t.points&&(a|=dr),t.renderOrder!=null&&t.renderOrder!==0&&(a|=It),t.texture&&t.texture.bytes.length>0&&t.uvs&&t.uvs.length>=2&&(a|=Lt),e.writeU8(a),a&St&&e.writeUint32Array(t.indices),a&Pt&&e.writeJson(t.hatchPattern),a&Ut&&e.writeJson(t.gradientFill),a&Ft&&e.writeFloat32Array(t.gradientPositions),a&Mt&&e.writeU8(t.side),a&It&&e.writeI32(t.renderOrder),a&Lt&&(e.writeFloat32Array(t.uvs),e.writeString(t.texture.mimeType||"image/png"),e.writeU32(t.texture.bytes.byteLength),e.writeBytes(t.texture.bytes))}function hr(e){const t=e.readString(),a=e.readU32(),r=[e.readF64(),e.readF64(),e.readF64()],n=e.readFloat32Array(),o=e.readU8(),i={layer:t,color:a,offset:r,positions:n};if(o&St&&(i.indices=e.readUint32Array()),o&Pt&&(i.hatchPattern=e.readJson()),o&Ut&&(i.gradientFill=e.readJson()),o&Ft&&(i.gradientPositions=e.readFloat32Array()),o&Mt&&(i.side=e.readU8()),o&dr&&(i.points=!0),o&It&&(i.renderOrder=e.readI32()),o&Lt){i.uvs=e.readFloat32Array();const s=e.readString()||"image/png",l=e.readU32();i.texture={mimeType:s,bytes:e.readBytes(l)}}return i}const jo=512*1024*1024,ka=512*1024*1024;class Xt{constructor(){this.chunks=[],this.length=0}writeU8(t){const a=new Uint8Array(1);a[0]=t&255,this.chunks.push(a),this.length+=1}writeU32(t){const a=new Uint8Array(4);new DataView(a.buffer).setUint32(0,t>>>0,!0),this.chunks.push(a),this.length+=4}writeI32(t){const a=new Uint8Array(4);new DataView(a.buffer).setInt32(0,t|0,!0),this.chunks.push(a),this.length+=4}writeF32(t){const a=new Uint8Array(4);new DataView(a.buffer).setFloat32(0,t,!0),this.chunks.push(a),this.length+=4}writeF64(t){const a=new Uint8Array(8);new DataView(a.buffer).setFloat64(0,t,!0),this.chunks.push(a),this.length+=8}writeBytes(t){this.chunks.push(t),this.length+=t.length}writeString(t){const a=Se(t);this.writeU32(a.length),this.writeBytes(a)}writeJson(t){this.writeString(JSON.stringify(t))}writeFloat32Array(t){this.alignTo(4);const a=new Uint8Array(t.buffer,t.byteOffset,t.byteLength);this.writeU32(a.length),this.writeBytes(a)}writeUint32Array(t){this.alignTo(4);const a=new Uint8Array(t.buffer,t.byteOffset,t.byteLength);this.writeU32(a.length),this.writeBytes(a)}alignTo(t){const a=this.length%t;if(a===0)return;const r=t-a;for(let n=0;n<r;n++)this.writeU8(0)}toUint8Array(){const t=new Uint8Array(this.length);let a=0;for(const r of this.chunks)t.set(r,a),a+=r.length;return t}}class Zt{constructor(t){this.bytes=t,this.offset=0}ensureAvailable(t){if(t<0||!Number.isFinite(t))throw new Error("Invalid binary length");if(this.offset+t>this.bytes.length)throw new Error("Unexpected end of binary buffer")}readU8(){return this.ensureAvailable(1),this.bytes[this.offset++]}readU32(){this.ensureAvailable(4);const t=new DataView(this.bytes.buffer,this.bytes.byteOffset+this.offset,4).getUint32(0,!0);return this.offset+=4,t}readI32(){this.ensureAvailable(4);const t=new DataView(this.bytes.buffer,this.bytes.byteOffset+this.offset,4).getInt32(0,!0);return this.offset+=4,t}readF32(){this.ensureAvailable(4);const t=new DataView(this.bytes.buffer,this.bytes.byteOffset+this.offset,4).getFloat32(0,!0);return this.offset+=4,t}readF64(){this.ensureAvailable(8);const t=new DataView(this.bytes.buffer,this.bytes.byteOffset+this.offset,8).getFloat64(0,!0);return this.offset+=8,t}readBytes(t){this.ensureAvailable(t);const a=this.bytes.subarray(this.offset,this.offset+t);return this.offset+=t,a}readString(){const t=this.readU32();if(t===0)return"";if(t>jo)throw new Error("Binary string exceeds size limit");return _t(this.readBytes(t))}readJson(){const t=this.readString();if(t.length===0)throw new Error("Expected JSON payload");return JSON.parse(t)}alignTo(t){const a=this.offset%t;if(a===0)return;const r=t-a;this.ensureAvailable(r),this.offset+=r}readFloat32Array(){this.alignTo(4);const t=this.readU32();if(t===0)return new Float32Array(0);if(t%4!==0)throw new Error("Invalid float32 buffer length");if(t>ka)throw new Error("Float32 buffer exceeds size limit");const a=this.readBytes(t);if(a.byteOffset%4===0)return new Float32Array(a.buffer,a.byteOffset,t/4);const r=new ArrayBuffer(t);return new Uint8Array(r).set(a),new Float32Array(r)}readUint32Array(){this.alignTo(4);const t=this.readU32();if(t===0)return new Uint32Array(0);if(t%4!==0)throw new Error("Invalid uint32 buffer length");if(t>ka)throw new Error("Uint32 buffer exceeds size limit");const a=this.readBytes(t);if(a.byteOffset%4===0)return new Uint32Array(a.buffer,a.byteOffset,t/4);const r=new ArrayBuffer(t);return new Uint8Array(r).set(a),new Uint32Array(r)}}const Wt=1329939265,fr=1,gr=5e5,No=1e5,br=1,yr=2,wr=3,xr=4,vr=5,kr=6,Ar=7;function Cr(e){var t;switch(e.kind){case"line":return 37;case"circle":return 30;case"arc":return 46;case"ellipse":return 71;case"point":return 21;case"path":return 10+e.vertices.length*8;case"spline":return 10+(e.controlPoints.length+e.knots.length+e.weights.length+(((t=e.fitPoints)==null?void 0:t.length)??0))*8+16;default:return e}}function $o(e,t){if(e.length===0)return[];const a=[];let r=[],n=64;const o=()=>{r.length!==0&&(a.push(r),r=[],n=64)};for(const i of e){const s=Cr(i);r.length>0&&n+s>t&&o(),r.push(i),n+=s}return o(),a}function zr(e){const t=new Xt;t.writeU32(Wt),t.writeU8(fr),t.writeU8(0),t.writeU8(0),t.writeU8(0);const a=[],r=new Map,n=o=>{const i=r.get(o);if(i!=null)return i;const s=a.length;return a.push(o),r.set(o,s),s};for(const o of e.primitives)n(o.layer);t.writeU32(a.length);for(const o of a)t.writeString(o);t.writeU32(e.primitives.length);for(const o of e.primitives)Yo(t,o,n(o.layer));return t.toUint8Array()}function Er(e){const t=new Zt(e);if(t.readU32()!==Wt)throw new Error("Invalid osnap catalog magic");const a=t.readU8();if(t.readU8(),t.readU8(),t.readU8(),a!==fr)throw new Error(`Unsupported osnap catalog version: ${a}`);const r=t.readU32();if(r>No)throw new Error("Osnap layer count exceeds limit");const n=[];for(let s=0;s<r;s++)n.push(t.readString());const o=t.readU32();if(o>gr)throw new Error("Osnap primitive count exceeds limit");const i=[];for(let s=0;s<o;s++)i.push(Ko(t,n));return{primitives:i}}function _o(e){const t=zr(e),a=Vt(t).bytes;return{uncompressed:t,compressed:a}}function Vo(e){return Er(Yt(e))}function ct(e,t){e.writeU8(t<0?0:1)}function dt(e){return e.readU8()===0?-1:1}function ke(e,t){e.writeU32(t.length);for(const a of t)e.writeF64(a)}function Ae(e){const t=e.readU32();if(t>gr)throw new Error("Float64 array count exceeds limit");const a=[];for(let r=0;r<t;r++)a.push(e.readF64());return a}function Yo(e,t,a){switch(t.kind){case"line":e.writeU8(br),e.writeU32(a),e.writeF64(t.x0),e.writeF64(t.y0),e.writeF64(t.x1),e.writeF64(t.y1);return;case"circle":e.writeU8(yr),e.writeU32(a),e.writeF64(t.cx),e.writeF64(t.cy),e.writeF64(t.r),ct(e,t.normalSign);return;case"arc":e.writeU8(wr),e.writeU32(a),e.writeF64(t.cx),e.writeF64(t.cy),e.writeF64(t.r),e.writeF64(t.startAngle),e.writeF64(t.endAngle),ct(e,t.normalSign);return;case"ellipse":e.writeU8(xr),e.writeU32(a),e.writeF64(t.cx),e.writeF64(t.cy),e.writeF64(t.majorX),e.writeF64(t.majorY),e.writeF64(t.majorR),e.writeF64(t.minorR),e.writeF64(t.startAngle),e.writeF64(t.endAngle),e.writeU8(t.closed?1:0),ct(e,t.normalSign??1);return;case"spline":e.writeU8(vr),e.writeU32(a),ke(e,t.controlPoints),e.writeU32(t.degree),ke(e,t.knots),ke(e,t.weights),e.writeU8(t.closed?1:0),ke(e,t.fitPoints??[]);return;case"point":e.writeU8(kr),e.writeU32(a),e.writeF64(t.x),e.writeF64(t.y);return;case"path":e.writeU8(Ar),e.writeU32(a),e.writeU8(t.closed?1:0),ke(e,t.vertices);return;default:{const r=t;throw new Error(`Unsupported osnap primitive: ${String(r)}`)}}}function Ko(e,t){const a=e.readU8(),r=e.readU32(),n=t[r];if(n==null)throw new Error(`Invalid osnap layer index: ${r}`);switch(a){case br:return{kind:"line",layer:n,x0:e.readF64(),y0:e.readF64(),x1:e.readF64(),y1:e.readF64()};case yr:return{kind:"circle",layer:n,cx:e.readF64(),cy:e.readF64(),r:e.readF64(),normalSign:dt(e)};case wr:return{kind:"arc",layer:n,cx:e.readF64(),cy:e.readF64(),r:e.readF64(),startAngle:e.readF64(),endAngle:e.readF64(),normalSign:dt(e)};case xr:return{kind:"ellipse",layer:n,cx:e.readF64(),cy:e.readF64(),majorX:e.readF64(),majorY:e.readF64(),majorR:e.readF64(),minorR:e.readF64(),startAngle:e.readF64(),endAngle:e.readF64(),closed:e.readU8()!==0,normalSign:dt(e)};case vr:{const o=Ae(e),i=e.readU32(),s=Ae(e),l=Ae(e),c=e.readU8()!==0,d=Ae(e);return{kind:"spline",layer:n,controlPoints:o,degree:i,knots:s,weights:l,closed:c,...d.length>0?{fitPoints:d}:{}}}case kr:return{kind:"point",layer:n,x:e.readF64(),y:e.readF64()};case Ar:{const o=e.readU8()!==0,i=Ae(e);return{kind:"path",layer:n,closed:o,vertices:i}}default:throw new Error(`Unsupported osnap primitive kind: ${a}`)}}const Sr=1480934209;function Go(e){if(e.version!==$)throw new Error(`Unsupported snapshot version: ${e.version}`);const t=new Xt;t.writeU32(Sr),t.writeU8($),t.writeU8(0),t.writeU8(0),t.writeU8(0),t.writeJson(e.meta),t.writeJson(e.layers),t.writeString(e.activeLayoutBtrId),t.writeU32(e.layouts.length);for(const a of e.layouts)Zo(t,a);return t.toUint8Array()}function Xo(e){const t=new Zt(e);if(t.readU32()!==Sr)throw new Error("Invalid snapshot magic");const a=t.readU8();if(t.readU8(),t.readU8(),t.readU8(),a!==$)throw new Error(`Unsupported snapshot version: ${a}`);const r=t.readJson(),n=t.readJson(),o=t.readString(),i=t.readU32(),s=[];for(let l=0;l<i;l++)s.push(Jo(t));return{version:$,meta:r,layers:n,layouts:s,activeLayoutBtrId:o}}function Zo(e,t){e.writeString(t.btrId),e.writeString(t.name),e.writeU8(t.isModelSpace?1:0),Wo(e,t.osnap),e.writeJson(t.viewports??null),e.writeU32(t.lineBatches.length);for(const a of t.lineBatches)ur(e,a);e.writeU32(t.meshBatches.length);for(const a of t.meshBatches)pr(e,a)}function Wo(e,t){if(!t||t.primitives.length===0){e.writeU32(0);return}const a=zr(t);e.writeU32(a.length),e.writeBytes(a)}function Jo(e){const t=e.readString(),a=e.readString(),r=e.readU8()!==0,n=qo(e),o=e.readJson()??void 0,i=e.readU32(),s=[];for(let d=0;d<i;d++)s.push(mr(e));const l=e.readU32(),c=[];for(let d=0;d<l;d++)c.push(hr(e));return{btrId:t,name:a,isModelSpace:r,lineBatches:s,meshBatches:c,osnap:n,viewports:o}}function qo(e){const t=e.readU32();if(t===0)return;const a=e.readBytes(t);if(Qo(a))return Er(a);const r=_t(a);if(!(r.length===0||r==="null"))return JSON.parse(r)}function Qo(e){return e.length<4?!1:(e[0]|e[1]<<8|e[2]<<16|e[3]<<24)>>>0===Wt}const ei="application/vnd.mlightcad.acex-snapshot+binary";function Pr(e){if(e.version!==$)throw new Error(`Unsupported snapshot version: ${e.version}`);const t=Go(e),a=Vt(t);return{payload:ni(a.bytes),compression:a.compression}}function ec(e){return ti(ai(e))}function ti(e){const t=Yt(e);return Xo(t)}function ai(e){return oi(e.trim())}function ri(){return ei}function ni(e){let t="";for(let a=0;a<e.length;a++)t+=String.fromCharCode(e[a]);return btoa(t)}function oi(e){const t=atob(e),a=new Uint8Array(t.length);for(let r=0;r<t.length;r++)a[r]=t.charCodeAt(r);return a}function de(e,t,a){if(a<=0)return new Float32Array(0);const r=new Float32Array(a);for(let n=0;n<a;n++)r[n]=e[t+n];return r}function ii(e,t,a){if(a<=0)return new Uint32Array(0);const r=new Uint32Array(a);for(let n=0;n<a;n++)r[n]=e[t+n];return r}function Ur(e,t){if(t.length===0)return{positions:e,indices:t};let a=0;for(let n=0;n<t.length;n++){const o=t[n];o>a&&(a=o)}const r=(a+1)*3;return r>=e.length?{positions:e,indices:t}:{positions:de(e,0,r),indices:t}}function Aa(e,t){return e+t}const he={x:0,y:0,z:0};function si(e){e.updateMatrixWorld(!0);const t=e.matrixWorld.elements;return he.x=t[12],he.y=t[13],he.z=t[14],[he.x,he.y,he.z]}function li(e,t){const a=t.elements,r=e.positions;if(r.length===0)return{positions:new Float32Array(0),indices:e.indices};const n=new Float32Array(r.length);for(let o=0;o<r.length;o+=3){const i=r[o],s=r[o+1],l=r[o+2];n[o]=a[0]*i+a[4]*s+a[8]*l+a[12],n[o+1]=a[1]*i+a[5]*s+a[9]*l+a[13],n[o+2]=a[2]*i+a[6]*s+a[10]*l+a[14]}return{positions:n,indices:e.indices?new Uint32Array(e.indices):void 0}}function ci(e){const t=e.positions;if(t.length<3)return{slice:e,offset:[0,0,0]};let a=1/0,r=1/0,n=1/0,o=-1/0,i=-1/0,s=-1/0;for(let d=0;d<t.length;d+=3){const u=t[d],m=t[d+1],p=t[d+2];a=Math.min(a,u),r=Math.min(r,m),n=Math.min(n,p),o=Math.max(o,u),i=Math.max(i,m),s=Math.max(s,p)}const l=[(a+o)/2,(r+i)/2,(n+s)/2],c=new Float32Array(t.length);for(let d=0;d<t.length;d+=3)c[d]=t[d]-l[0],c[d+1]=t[d+1]-l[1],c[d+2]=t[d+2]-l[2];return{slice:{positions:c,indices:e.indices?new Uint32Array(e.indices):void 0},offset:l}}function di(e,t,a={}){e.updateMatrixWorld(!0);const r=li(t,e.matrixWorld);return ci(r)}function ui(e){const t=e.image;if(!t||typeof document>"u")return;const a=document.createElement("canvas"),r=a.getContext("2d");if(!r)return;try{if(t instanceof ImageData)a.width=t.width,a.height=t.height,r.putImageData(t,0,0);else if(pi(t)){a.width=t.width,a.height=t.height;const l=fi(t.data,t.width*t.height),c=new ImageData(new Uint8ClampedArray(l),t.width,t.height);r.putImageData(c,0,0)}else if(mi(t)){const l=hi(t);if(!l)return;a.width=l.width,a.height=l.height,r.drawImage(t,0,0)}else return}catch{return}const n=a.toDataURL("image/png"),o=n.indexOf(",");if(o<0)return;const i=atob(n.slice(o+1)),s=new Uint8Array(i.length);for(let l=0;l<i.length;l++)s[l]=i.charCodeAt(l);return{mimeType:"image/png",bytes:s}}function mi(e){return e instanceof HTMLImageElement||e instanceof HTMLCanvasElement||typeof OffscreenCanvas<"u"&&e instanceof OffscreenCanvas||typeof ImageBitmap<"u"&&e instanceof ImageBitmap||typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement}function pi(e){if(!e||typeof e!="object")return!1;const t=e;return t.data!=null&&typeof t.width=="number"&&typeof t.height=="number"&&t.width>=1&&t.height>=1}function hi(e){let t=Number(e.width),a=Number(e.height);if(e instanceof HTMLImageElement?(t=e.naturalWidth||e.width,a=e.naturalHeight||e.height):typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement&&(t=e.videoWidth||e.width,a=e.videoHeight||e.height),!(!Number.isFinite(t)||!Number.isFinite(a)||t<1||a<1))return{width:t,height:a}}function fi(e,t){const a=t*4;if(e instanceof Uint8ClampedArray&&e.length>=a)return e.length===a?e:e.subarray(0,a);const r=new Uint8ClampedArray(a),n=Math.min(a,e.length);for(let o=0;o<n;o++)r[o]=e[o];if(e.length>=t*3&&e.length<a)for(let o=t-1;o>=0;o--){const i=o*3,s=o*4;r[s]=e[i],r[s+1]=e[i+1],r[s+2]=e[i+2],r[s+3]=255}return r}function gi(e,t){const a=e.getAttribute("uv");if(!a||a.count===0||a.itemSize<2)return;const r=Math.floor(t.length/3)*2;if(r<=0)return;const n=a.array;if(!(a.count*a.itemSize<r))return de(n,0,r)}function bi(e){const t=e;return t.map?!1:t.transparent===!0&&typeof t.opacity=="number"&&t.opacity<.01}function Jt(e){const t=e;if(t.isShaderMaterial===!0||e.type==="ShaderMaterial")return t}function yi(e){var t;const a=Jt(e);if(!a)return;const r=a.uniforms.pattern,n=a.uniforms.patternLength;if(!r||!n)return;const o=r.value;if(!(!Array.isArray(o)||o.length===0))return{pattern:[...o],patternLength:Number(n.value),viewportScale:Number(((t=a.uniforms.u_viewportScale)==null?void 0:t.value)??1)}}function wi(e){var t;const a=Jt(e);if(!a)return;const r=a.uniforms.u_patternLines;if(!r)return;const n=r.value;if(!(!Array.isArray(n)||n.length===0))return{patternAngle:Number(((t=a.uniforms.u_patternAngle)==null?void 0:t.value)??0),patternLines:n.map(vi)}}function xi(e){var t,a,r,n,o;const i=Jt(e);if(!i||i.uniforms.u_patternLines)return;const s=(t=i.uniforms.u_startColor)==null?void 0:t.value,l=(a=i.uniforms.u_endColor)==null?void 0:a.value,c=i.uniforms.u_gradientType;if(!(!(s!=null&&s.getHex)||c==null))return{startColor:s.getHex(),endColor:((r=l==null?void 0:l.getHex)==null?void 0:r.call(l))??s.getHex(),angle:Number(((n=i.uniforms.u_angle)==null?void 0:n.value)??0),shift:Number(((o=i.uniforms.u_shift)==null?void 0:o.value)??0),gradientType:Number(c.value)}}function vi(e){return{angle:e.angle,base:[e.base.x,e.base.y],offset:[e.offset.x,e.offset.y],dashLengths:[...e.dashLengths],patternLength:e.patternLength}}function Fr(e){const t=e.length/3;if(t<2)return new Float32Array(0);const a=new Float32Array(t);for(let r=0;r<t;r+=2){r===0?a[r]=0:a[r]=a[r-1];const n=e[r*3],o=e[r*3+1],i=e[r*3+2]??0,s=e[(r+1)*3],l=e[(r+1)*3+1],c=e[(r+1)*3+2]??0,d=s-n,u=l-o,m=c-i;a[r+1]=a[r]+Math.sqrt(d*d+u*u+m*m)}return a}function ki(e,t){const a=e.getAttribute(t);if(!a||a.count===0)return;const r=a.itemSize;if(e.getIndex()){const d=a.array;return de(d,0,a.count*r)}const n=e.drawRange,o=a.count,i=Math.max(0,Math.min(Math.floor(n.start),o)),s=Math.max(0,o-i),l=!Number.isFinite(n.count)||n.count<=0?s:Math.min(Math.floor(n.count),s);if(l<=0)return;const c=a.array;return de(c,i*r,l*r)}function Ca(e,t){const a=Math.atan2(t[1],t[0]),r=(o,i)=>[t[0]*o+t[4]*i+t[12],t[1]*o+t[5]*i+t[13]],n=(o,i)=>[t[0]*o+t[4]*i,t[1]*o+t[5]*i];return{patternAngle:e.patternAngle+a,patternLines:e.patternLines.map(o=>({angle:o.angle+a,base:r(o.base[0],o.base[1]),offset:n(o.offset[0],o.offset[1]),dashLengths:[...o.dashLengths],patternLength:o.patternLength}))}}function Ai(e,t){return{patternAngle:e.patternAngle,patternLines:e.patternLines.map(a=>{const r=new ga(a.base[0]-t[0],a.base[1]-t[1]),n=new ga(a.offset[0],a.offset[1]);return so(r,n,a.angle,e.patternAngle,a.patternLength),{angle:a.angle,base:[r.x,r.y],offset:[a.offset[0],a.offset[1]],dashLengths:[...a.dashLengths],patternLength:a.patternLength}})}}function Tt(e,t){return!Number.isFinite(e)||e<0?0:Math.min(Math.floor(e),t)}function Ht(e,t,a){const r=Math.max(0,t-a);return!Number.isFinite(e)||e<=0?r:Math.min(Math.floor(e),r)}function za(e){const t=e.getAttribute("position");if(!t)return{positions:new Float32Array(0)};const a=e.drawRange,r=t.array,n=t.itemSize,o=e.getIndex();if(o){const l=de(r,0,t.count*n),c=o.array,d=Tt(a.start,o.count),u=Ht(a.count,o.count,d),m=ii(c,d,u);return Ur(l,m)}const i=Tt(a.start,t.count),s=Ht(a.count,t.count,i);return{positions:de(r,i*n,s*n)}}function je(e){return Un(e.flags)&&Fn(e.flags)}function Mr(e){const{count:t}=e.mappingStats;for(let a=0;a<t;a++){let r;try{r=e.getGeometryRangeAt(a)}catch{continue}if(je(r)&&r.bboxIntersectionCheck)return!0}return!1}function Ea(e){return Sn(e).bboxIntersectionCheck===!0}function qt(e,t){const a=t.getAttribute("position");if(!a)return{positions:new Float32Array(0)};const r=a.itemSize,n=a.array,o=t.getIndex(),{count:i}=e.mappingStats;if(o){const l=de(n,0,a.count*r),c=o.array,d=[];for(let u=0;u<i;u++){let m;try{m=e.getGeometryRangeAt(u)}catch{continue}const p=m.indexStart??0,h=m.indexCount??0;if(!(!je(m)||h<=0))for(let f=0;f<h;f++)d.push(c[p+f])}return d.length===0?{positions:new Float32Array(0)}:Ur(l,new Uint32Array(d))}const s=[];for(let l=0;l<i;l++){let c;try{c=e.getGeometryRangeAt(l)}catch{continue}if(!je(c)||c.vertexCount<=0)continue;const d=c.vertexStart*r,u=c.vertexCount*r;for(let m=0;m<u;m++)s.push(n[d+m])}return{positions:new Float32Array(s)}}function Ne(e,t,a){e.push(t.getX(a),t.getY(a),t.getZ(a))}function Ci(e,t){const a=t.getAttribute("instanceStart"),r=t.getAttribute("instanceEnd");if(!a||!r)return{positions:new Float32Array(0)};const{count:n}=e.mappingStats,o=[];for(let i=0;i<n;i++){let s;try{s=e.getGeometryRangeAt(i)}catch{continue}if(!je(s)||s.vertexCount<=0)continue;const l=s.vertexStart,c=l+s.vertexCount;for(let d=l;d<c;d++)Ne(o,a,d),Ne(o,r,d)}return{positions:new Float32Array(o)}}function zi(e,t){const a=e.instanceCount;if(Number.isFinite(a)&&a>=0)return Math.min(Math.floor(a),t);const r=e.drawRange,n=Tt(r.start,t);return Ht(r.count,t,n)}function Ei(e){const t=e.getAttribute("instanceStart"),a=e.getAttribute("instanceEnd");if(!t||!a||t.count===0)return{positions:new Float32Array(0)};const r=zi(e,t.count);if(r<=0)return{positions:new Float32Array(0)};const n=[];for(let o=0;o<r;o++)Ne(n,t,o),Ne(n,a,o);return{positions:new Float32Array(n)}}function ut(e){return Cn(e)}function Ir(e){if(e instanceof En)return e.linewidth}function mt(e){if("material"in e){const t=e.userData.originalMaterial??e.material;return Array.isArray(t)?t[0]:t}return e.material}function Pe(e){var t;const a=Wa(e),r=a.layer??"0",n=e;let o=n.color!=null?n.color.getHex():a.color??16777215;const i=yi(e),s=wi(e),l=xi(e);if(e instanceof zn||e.type==="ShaderMaterial"){const c=(t=e.uniforms.u_color)==null?void 0:t.value;c!=null&&c.getHex?o=c.getHex():l&&(o=l.startColor)}return{color:o,layer:r,linePattern:i,hatchPattern:s,gradientFill:l,side:s||l?e.side:void 0}}function Si(e,t){const a=Wa(t).drawOrder??e.renderOrder;return a===0?void 0:a}function Ue(e,t,a){const r=Si(t,a);r!=null&&(e.renderOrder=r)}function Pi(e,t){if(!t)return;const a=e.userData.bakedWorldMatrix;return a&&a.length>=16?Ca(t,a):(e.updateMatrixWorld(!0),Ca(t,Array.from(e.matrixWorld.elements)))}function We(e){return si(e)}function pt(e,t,a={}){const r=di(e,t,a);return{...r.slice,offset:r.offset}}function Qt(e,t,a,r,n){const o=Pe(t),i=Pi(a,o.hatchPattern),s=i?Ai(i,n):void 0,l=o.gradientFill?ki(e,"gradientPosition"):void 0,c={layer:o.layer,color:o.color,offset:n,hatchPattern:s,gradientFill:o.gradientFill,gradientPositions:l,side:o.side,...r},d=t;if(d.map){const u=ui(d.map),m=gi(e,r.positions);if(!u||!m)return;c.texture=u,c.uvs=m,c.color=16777215,c.side=Pn}return Ue(c,a,t),c}function Ui(e){const t=Ci(e,e.geometry);if(t.positions.length===0)return;const{color:a,layer:r}=Pe(e.material),n=Ir(e.material),o={layer:r,color:a,offset:We(e),lineWidth:n,...t};return Mr(e)&&(o.excludeFromOsnap=!0),Ue(o,e,e.material),o}function Fi(e){const t=qt(e,e.geometry);if(t.positions.length===0)return;const{color:a,layer:r,linePattern:n}=Pe(e.material),o=n?Fr(t.positions):void 0,i={layer:r,color:a,offset:We(e),linePattern:n,lineDistances:o,...t};return Mr(e)&&(i.excludeFromOsnap=!0),Ue(i,e,e.material),i}function Mi(e){const t=qt(e,e.geometry);if(t.positions.length!==0)return Qt(e.geometry,e.material,e,t,We(e))}function Ii(e){const t=qt(e,e.geometry);if(t.positions.length===0)return;const a=Qt(e.geometry,e.material,e,t,We(e));if(a)return{points:!0,...a}}function Li(e){const t=[],a=[];return e.traverse(r=>{if(!(hn(r)||fn(r))){if(r instanceof ha){const n=Fi(r);n&&t.push(n);return}if(r instanceof gn){const n=Ui(r);n&&t.push(n);return}if(r instanceof fa){const n=Mi(r);n&&a.push(n);return}if(r instanceof bn){const n=Ii(r);n&&a.push(n);return}if(r instanceof yn){if(!ut(r))return;const n=Ei(r.geometry);if(n.positions.length===0)return;const o=mt(r),{color:i,layer:s}=Pe(o),{offset:l,...c}=pt(r,n),d={layer:s,color:i,offset:l,lineWidth:Ir(o),...c};Ea(r)&&(d.excludeFromOsnap=!0),Ue(d,r,o),t.push(d)}else if(r instanceof wn&&!(r instanceof ha)){if(!ut(r))return;const n=za(r.geometry);if(n.positions.length===0)return;const o=mt(r),{color:i,layer:s,linePattern:l}=Pe(o),{offset:c,...d}=pt(r,n),u=l?Fr(d.positions):void 0,m={layer:s,color:i,offset:c,linePattern:l,lineDistances:u,...d};Ea(r)&&(m.excludeFromOsnap=!0),Ue(m,r,o),t.push(m)}else if(r instanceof xn&&!(r instanceof fa)){if(!ut(r))return;const n=mt(r);if(bi(n))return;const o=za(r.geometry);if(o.positions.length===0)return;const{offset:i,...s}=pt(r,o),l=Qt(r.geometry,n,r,s,i);l&&a.push(l)}}}),{lineBatches:t,meshBatches:a}}const Sa={size:8,colorCss:"#0080ff",hotColorCss:"#ff0000"};function Pa(e){const t=new oo(io.ByACI,e);return t.cssColor??`rgb(${t.red}, ${t.green}, ${t.blue})`}function Ti(e){try{const t=An.instance(),a=t.getVar(nt.GRIPSIZE,e),r=t.getVar(nt.GRIPCOLOR,e),n=t.getVar(nt.GRIPHOT,e);return!(a>0)||!Number.isFinite(a)?Sa:{size:a,colorCss:Pa(r),hotColorCss:Pa(n)}}catch{return Sa}}function Ua(e,t){const a=e.extmin,r=e.extmax,n=Ti(e);return{title:t==null?void 0:t.title,extents:{minX:a.x,minY:a.y,maxX:r.x,maxY:r.y},units:{insunits:e.insunits,lunits:e.lunits,luprec:e.luprec,aunits:e.aunits,auprec:e.auprec,measurement:e.measurement,ltscale:e.ltscale,angbase:e.angbase,angdir:e.angdir},grip:n,background:(t==null?void 0:t.background)??0}}const tc=["endpoint","midpoint","center","quadrant","intersection","nearest"];function Hi(e,t){let a=t-e;for(;a<=0;)a+=Ce;for(;a>Ce;)a-=Ce;return a}function Fa(e,t,a,r,n){const o=n===-1?-1:1;return new Xa(e+o*a*Math.cos(r),t+a*Math.sin(r))}function Ma(e,t,a,r,n){return Math.atan2(r-t,n*(a-e))}function Di(e){const t=Fa(e.cx,e.cy,e.r,e.startAngle,e.normalSign),a=Fa(e.cx,e.cy,e.r,e.endAngle,e.normalSign),r=Hi(e.startAngle,e.endAngle),n=e.normalSign*Math.tan(r/4);return new Me(t,a,n)}function Ri(e){return e.kind==="circle"?new Me({x:e.cx,y:e.cy},e.r,0,Ce,e.normalSign===-1):Di(e)}function Bi(e){const t=Math.atan2(e.majorY,e.majorX);return new Ga({x:e.cx,y:e.cy,z:0},e.majorR,e.minorR,e.startAngle,e.endAngle,e.closed,t)}function Oi(e){const t=[];for(let a=0;a+1<e.controlPoints.length;a+=2)t.push({x:e.controlPoints[a],y:e.controlPoints[a+1],z:0});return new vn(e.degree,e.knots,t,e.weights.length>0?e.weights:void 0)}function ac(e){switch(e.kind){case"line":return{kind:"line",curve:new Za({x:e.x0,y:e.y0},{x:e.x1,y:e.y1})};case"circle":case"arc":return{kind:"circArc",curve:Ri(e)};case"ellipse":return{kind:"ellipse",curve:Bi(e)};case"spline":return{kind:"spline",curve:Oi(e)};case"point":return{kind:"point",point:new Xa(e.x,e.y)};case"path":throw new Error("path primitives must be expanded before curve conversion")}}function ea(e){return e.z>=0?1:-1}function Lr(e,t,a){if(!(a.radius>0)||!Number.isFinite(a.radius))return;const r=a.clockwise?-1:1,n=a.center.x,o=a.center.y;e.push({kind:"arc",layer:t,cx:n,cy:o,r:a.radius,startAngle:Ma(n,o,a.startPoint.x,a.startPoint.y,r),endAngle:Ma(n,o,a.endPoint.x,a.endPoint.y,r),normalSign:r})}function B(e,t){const a=new te(t.x,t.y,t.z??0).applyMatrix4(e);return{x:a.x,y:a.y}}function ji(e){const t=e.elements;return new Ge(t[0],t[4],t[8],t[12],t[1],t[5],t[9],t[13],t[2],t[6],t[10],t[14],t[3],t[7],t[11],t[15])}function $e(e,t){return new Ge().multiplyMatrices(e,ji(t))}function Tr(e,t){const a=new te(t.x,t.y,t.z??0).transformDirection(e).normalize();return{x:a.x,y:a.y}}function Dt(e){const t=new te(e.elements[0],e.elements[1],e.elements[2]).length(),a=new te(e.elements[4],e.elements[5],e.elements[6]).length();return ge.equal(t,a,Ja*Math.max(t,a,1))}function Ni(e,t){const a=e.tables.blockTable.getIdAt(t);if(a)return a;for(const n of e.tables.blockTable.newIterator())if(n.objectId===t)return n;const r=e.tables.blockTable.modelSpace;if(r.objectId===t)return r}function $i(e){if(e instanceof co)return!0;const t=e;return(t.type==="LINE"||t.type==="Line")&&t.startPoint!=null&&t.endPoint!=null}function _i(e,t,a,r){r.startPoint,r.endPoint}function Hr(e,t){return e.blockTableRecord??(e.blockName?t.tables.blockTable.getAt(e.blockName):void 0)}function Vi(e,t){const a=e.dimBlockId;return a?t.tables.blockTable.getAt(a):void 0}function Yi(e,t){const a=Hr(e,t);if(a)return a;const r=e.owningBlockRecordId;return r?t.tables.blockTable.getAt(r):void 0}function Dr(e){return e.getFullInsertionTransform()}function Ki(e){for(const t of e.newIterator())return!0;return!1}function Gi(e){return typeof e.getFullInsertionTransform=="function"&&"blockTableRecord"in e}function se(e,t,a,r,n){if(r.length<2)return;const o=Dt(a),i=a.elements[0]*a.elements[5]-a.elements[4]*a.elements[1]<0?-1:1,s=[];for(const l of r){const c=B(a,l);let d=l.bulge??0;ge.isPositive(Math.abs(d))&&(d=o?d*i:0),s.push(c.x,c.y,d)}e.push({kind:"path",layer:t,closed:n,vertices:s})}function Rr(e,t){return ge.equal(e.x,t.x)&&ge.equal(e.y,t.y)}function Xi(e){return(e.clockwise?-1:1)*Math.tan(e.deltaAngle/4)}function Ia(e,t,a,r){if(e.length===0){e.push({x:t.x,y:t.y,z:t.z??0,bulge:r}),e.push({x:a.x,y:a.y,z:a.z??0,bulge:0});return}const n=e[e.length-1];Rr(n,t)?n.bulge=r:(n.bulge=0,e.push({x:t.x,y:t.y,z:t.z??0,bulge:r})),e.push({x:a.x,y:a.y,z:a.z??0,bulge:0})}function La(e){return e.length>=2&&Rr(e[0],e[e.length-1])&&e.pop(),e}function ze(e,t,a,r,n){if(r.length<2)return;const o=n?r.length:r.length-1;for(let i=0;i<o;i++)r[i],r[(i+1)%r.length]}function Zi(e,t,a,r){const n=[r.startPosition];for(const o of r.segments)n.push(o.position);ze(e,t,a,n,r.closed)}function Wi(e,t,a){if(a.vertices.length>=2)return a.vertices;if(a.vertices.length===0)return[];const r=a.vertices[0],n=t.lastLeaderLinePoint??t.landingPoint??e.landingPoint??e.contentBasePosition;if(!n)return a.vertices;const o=r.x-n.x,i=r.y-n.y,s=(r.z??0)-(n.z??0);return Math.hypot(o,i,s)<=Ja?a.vertices:[r,n]}function Ji(e,t,a,r){var n,o;for(const s of r.leaders)for(const l of s.leaderLines){const c=Wi(r,s,l);ze(e,t,a,c,!1)}const i=s=>{if(!s)return;const l=B(a,s);e.push({kind:"point",layer:t,x:l.x,y:l.y})};i(r.contentBasePosition),i((n=r.mtextContent)==null?void 0:n.anchorPoint),i((o=r.blockContent)==null?void 0:o.position)}function qi(e,t,a,r){const n=r.numberOfVertices;if(n<2)return;const o=r.elevation,i=r.closed?n:n-1;for(let s=0;s<i;s++){const l=r.getPointAt(s),c=r.getPointAt((s+1)%n),d=r.getBulgeAt(s),u={x:l.x,y:l.y,z:o},m={x:c.x,y:c.y,z:o};if(ge.isPositive(Math.abs(d))){const p=B(a,u),h=B(a,m);Lr(e,t,new Me(p,h,d))}}}function Qi(e,t,a,r,n,o){const i=B(a,r),s=new te(a.elements[0],a.elements[1],a.elements[2]).length(),l={kind:"circle",layer:t,cx:i.x,cy:i.y,r:n*s,normalSign:ea(o)};e.push(l)}function es(e,t,a,r){const n=B(a,r.center),o=new te(a.elements[0],a.elements[1],a.elements[2]).length(),i={kind:"arc",layer:t,cx:n.x,cy:n.y,r:r.radius*o,startAngle:r.startAngle,endAngle:r.endAngle,normalSign:ea(r.normal)};e.push(i)}function ht(e,t,a,r){const n=B(a,r.center),o=r._geo,i=(o==null?void 0:o.majorAxis)??{x:1,y:0,z:0},s=Tr(a,i),l=Math.hypot(s.x,s.y)||1,c=new te(a.elements[0],a.elements[1],a.elements[2]).length(),d=new te(a.elements[4],a.elements[5],a.elements[6]).length(),u={kind:"ellipse",layer:t,cx:n.x,cy:n.y,majorX:s.x/l,majorY:s.y/l,majorR:r.majorAxisRadius*c,minorR:r.minorAxisRadius*d,startAngle:r.startAngle,endAngle:r.endAngle,closed:r.closed,normalSign:ea(r.normal)};e.push(u)}function ts(e,t,a,r){var n,o;const i=r._geo;if(!((n=i==null?void 0:i.controlPoints)!=null&&n.length))return;const s=[];for(const c of i.controlPoints){const d=B(a,c);s.push(d.x,d.y)}const l={kind:"spline",layer:t,controlPoints:s,degree:i.degree??3,knots:[...i.knots??[]],weights:[...i.weights??[]],closed:i.closed??!1};if((o=i.fitPoints)!=null&&o.length){l.fitPoints=[];for(const c of i.fitPoints){const d=B(a,c);l.fitPoints.push(d.x,d.y)}}e.push(l)}const Ta=1e-6;function as(e){var t;const a=e.elevation,r=(t=e._geo)==null?void 0:t.vertices;return r&&r.length>1?r.map(n=>({x:n.x,y:n.y,z:a,bulge:n.bulge,startWidth:n.startWidth,endWidth:n.endWidth})):Array.from({length:e.numberOfVertices},(n,o)=>{const i=e.getPoint2dAt(o);return{x:i.x,y:i.y,z:a,bulge:0}})}function rs(e){return e.some(t=>{const a=Math.max(0,t.startWidth??0),r=Math.max(0,t.endWidth??0);return a>Ta||r>Ta})}function ns(e,t,a,r){const n=as(r),o=n.length;if(o<2)return;if(rs(n)){se(e,t,a,n,r.closed);return}const i=r.closed?o:o-1;for(let s=0;s<i;s++){const l=n[s],c=n[(s+1)%o],d=l.bulge??0;if(ge.isPositive(Math.abs(d))){const u=B(a,l),m=B(a,c);Lr(e,t,new Me(u,m,d))}}}function os(e,t,a,r,n){const o=B(a,{x:r.center.x,y:r.center.y,z:n}),i=Tr(a,{x:Math.cos(r.rotation),y:Math.sin(r.rotation),z:0}),s=Math.hypot(i.x,i.y)||1,l=new te(a.elements[0],a.elements[1],a.elements[2]).length(),c=new te(a.elements[4],a.elements[5],a.elements[6]).length();e.push({kind:"ellipse",layer:t,cx:o.x,cy:o.y,majorX:i.x/s,majorY:i.y/s,majorR:r.majorAxisRadius*l,minorR:r.minorAxisRadius*c,startAngle:r.startAngle,endAngle:r.endAngle,closed:!1,normalSign:r.clockwise?-1:1})}function is(e,t,a,r,n){var o;const i=r.numberOfVertices;if(i<2)return;const s=[];for(let l=0;l<i;l++){const c=r.getPointAt(l);s.push({x:c.x,y:c.y,z:n,bulge:((o=r.vertices[l])==null?void 0:o.bulge)??0})}se(e,t,a,s,r.closed)}function ss(e,t,a,r,n){if(r instanceof uo){is(e,t,a,r,n);return}if(!(r instanceof mo))return;const o=[];let i=!1;const s=()=>{const c=La(o);c.length>=2&&se(e,t,a,c,!1),o.length=0};for(const c of r.curves)c instanceof Za?Ia(o,{x:c.startPoint.x,y:c.startPoint.y,z:n},{x:c.endPoint.x,y:c.endPoint.y,z:n},0):c instanceof Me?Ia(o,{x:c.startPoint.x,y:c.startPoint.y,z:n},{x:c.endPoint.x,y:c.endPoint.y,z:n},Xi(c)):c instanceof Ga&&(i=!0,s(),os(e,t,a,c,n));const l=La(o);l.length>=2&&se(e,t,a,l,!i)}function ls(e,t,a,r){var n;const o=(n=r._geo)==null?void 0:n.loops;if(!(o!=null&&o.length))return;const i=r.elevation;for(const s of o)ss(e,t,a,s,i)}function cs(e,t,a,r){$e(a,Dr(r));const n=[0];for(let i=0;i<r.numColumns;i++)n.push(n[i]+r.columnWidth(i));const o=[0];for(let i=0;i<r.numRows;i++)o.push(o[i]-r.rowHeight(i));n[n.length-1],o[o.length-1];for(const i of o);for(const i of n);}function ds(e,t,a,r,n,o,i,s=!0){const l=Rt(e.layer,a);if(i&&!i(l))return;const c=Yi(e,o);if(c&&!n.has(c.objectId)&&Ki(c)){n.add(c.objectId);const u=$e(t,Dr(e));_e(c,u,l,r,n,o,i,s),n.delete(c.objectId);return}cs(r,l,t,e);const d=B(t,e.position);r.push({kind:"point",layer:l,x:d.x,y:d.y})}function us(e,t,a,r){let n=r.boundaryPath();if(n.length>1){const i=n[0],s=n[n.length-1];i.x===s.x&&i.y===s.y&&(i.z??0)===(s.z??0)&&(n=n.slice(0,-1))}n.length>=2&&se(e,t,a,n,!0);const o=B(a,r.position);e.push({kind:"point",layer:t,x:o.x,y:o.y})}function ms(e,t,a,r){const n=r.position();se(e,t,a,[n.upperLeft,n.upperRight,n.lowerRight,n.lowerLeft],!0);const o=B(a,r.getLocation());e.push({kind:"point",layer:t,x:o.x,y:o.y})}function ps(e){var t;const a=(t=e.attributeIterator)==null?void 0:t.call(e);return a?typeof a.toArray=="function"?a.toArray():[...a]:[]}function Rt(e,t){return e==="0"?t:e}function Br(e,t,a,r,n,o,i,s=!0){if(!e.visibility)return;const l=Rt(e.layer,a);if(!(i&&!i(l))){if(e instanceof Dn){ds(e,t,a,r,n,o,i,s);return}if(Gi(e)){const c=Hr(e,o);if(!c||n.has(c.objectId))return;n.add(c.objectId);const d=e.getFullInsertionTransform(),u=Math.max(1,e.columnCount??1),m=Math.max(1,e.rowCount??1),p=e.columnSpacing??0,h=e.rowSpacing??0,f=Rt(e.layer,a);for(let g=0;g<m;g++)for(let A=0;A<u;A++){const w=$e(t,d);(A!==0||g!==0)&&w.multiply(new Ge().makeTranslation(A*p,g*h,0));const z=B(w,{x:0,y:0,z:0});r.push({kind:"point",layer:f,x:z.x,y:z.y}),_e(c,w,f,r,n,o,i,s)}for(const g of ps(e))g instanceof Rn,g.isInvisible||Br(g,t,f,r,n,o,i,s);n.delete(c.objectId);return}if(e instanceof Bn){const c=e,d=Vi(c,o);if(!d||n.has(d.objectId))return;n.add(d.objectId);const u=$e(t,c.getFullDimBlockTransform());_e(d,u,l,r,n,o,i,!0),n.delete(d.objectId);return}if($i(e)){_i(r,l,t,e);return}if(e instanceof On){Dt(t)?Qi(r,l,t,e.center,e.radius,e.normal):ht(r,l,t,hs(e));return}if(e instanceof jn){Dt(t)?es(r,l,t,e):ht(r,l,t,fs(e));return}if(e instanceof jt){ht(r,l,t,e);return}if(e instanceof Nn){ts(r,l,t,e);return}if(e instanceof $n){ns(r,l,t,e);return}if(e instanceof _n){qi(r,l,t,e);return}if(e instanceof Vn){const c=[];for(let d=0;d<e.numberOfVertices;d++)c.push(e.getPointAt(d));ze(r,l,t,c,e.closed);return}if(e instanceof Yn){s&&ls(r,l,t,e);return}if(e instanceof Kn){e.basePoint,e.unitDir;return}if(e instanceof Gn){e.basePoint,e.unitDir;return}if(e instanceof Xn){se(r,l,t,[e.getPointAt(0),e.getPointAt(1),e.getPointAt(3),e.getPointAt(2)],!0);return}if(e instanceof Zn){s&&se(r,l,t,[e.getPointAt(0),e.getPointAt(1),e.getPointAt(3),e.getPointAt(2)],!0);return}if(e instanceof Wn){const c=e.subGetGripPoints();c.length>=2&&ze(r,l,t,c,c.length>=3);return}if(e instanceof Jn){const c=e.vertices;c.length>=2&&ze(r,l,t,c,!1);return}if(e instanceof qn){Zi(r,l,t,e);return}if(e instanceof Qn){Ji(r,l,t,e);return}if(e instanceof eo){const c=B(t,e.position);r.push({kind:"point",layer:l,x:c.x,y:c.y});return}if(e instanceof to){const c=B(t,e.location);r.push({kind:"point",layer:l,x:c.x,y:c.y});return}if(e instanceof ao){s&&ms(r,l,t,e);return}if(e instanceof ro){s&&us(r,l,t,e);return}if(e instanceof no){const c=B(t,e.position);r.push({kind:"point",layer:l,x:c.x,y:c.y})}}}function _e(e,t,a,r,n,o,i,s=!0){for(const l of e.newIterator())Br(l,t,a,r,n,o,i,s)}function hs(e){return new jt(e.center,e.normal,{x:1,y:0,z:0},e.radius,e.radius,0,Ce)}function fs(e){return new jt(e.center,e.normal,{x:1,y:0,z:0},e.radius,e.radius,e.startAngle,e.endAngle)}function gs(e,t,a={}){const r=Ni(e,t);if(!r)return{primitives:[]};const n=[],o=new Ge;return _e(r,o,"0",n,new Set,e,a.includeLayer),{primitives:n.filter(i=>i.kind!=="line"&&bs(i))}}function bs(e){switch(e.kind){case"line":return Number.isFinite(e.x0)&&Number.isFinite(e.y0)&&Number.isFinite(e.x1)&&Number.isFinite(e.y1);case"circle":return Number.isFinite(e.cx)&&Number.isFinite(e.cy)&&Number.isFinite(e.r);case"arc":return Number.isFinite(e.cx)&&Number.isFinite(e.cy)&&Number.isFinite(e.r)&&Number.isFinite(e.startAngle)&&Number.isFinite(e.endAngle);case"ellipse":return Number.isFinite(e.cx)&&Number.isFinite(e.cy)&&Number.isFinite(e.majorX)&&Number.isFinite(e.majorY)&&Number.isFinite(e.majorR)&&Number.isFinite(e.minorR)&&Number.isFinite(e.startAngle)&&Number.isFinite(e.endAngle);case"spline":return e.controlPoints.every(t=>Number.isFinite(t))&&e.knots.every(t=>Number.isFinite(t))&&e.weights.every(t=>Number.isFinite(t));case"point":return Number.isFinite(e.x)&&Number.isFinite(e.y);case"path":return e.vertices.length>=6&&e.vertices.length%3===0&&e.vertices.every(t=>Number.isFinite(t));default:return e}}const Oe=["en","zh","cs","tr","ar"],ys={en:"EN",zh:"中",cs:"CS",tr:"TR",ar:"AR"},Or="mlcad-html-locale",ws={en:{toolbar:{viewerTools:"Viewer tools",select:"Select",pan:"Pan",zoom:"Zoom",zoomExtents:"Extents",zoomWindow:"Window",zoomOriginal:"Original",measureDistance:"Distance",measureContinuous:"Continuous",measureAngle:"Angle",measureArc:"Arc",measureArea:"Area",measureCoordinate:"XY",clearMeasurements:"Clear",measureHide:"Hide",measureShow:"Show",measureImport:"Import",measureExport:"Export",measurementPanel:"Results",measure:"Measure",annotation:"Review",markupCloud:"Cloud",markupCallout:"Callout",markupText:"Text",markupRect:"Rect",markupCircle:"Circle",markupArrow:"Arrow",markupStamp:"Stamp",markupPanel:"Results",markupHide:"Hide",markupShow:"Show",clearMarkups:"Clear",markupImport:"Import",markupExport:"Export",snap:"Snap",layers:"Layers",layout:"Layout",settings:"Settings",simulatedMouseOn:"Mouse",simulatedMouseOff:"Loupe",themeLight:"Light",themeDark:"Dark",switchBg:"Background",language:"Language",localeEn:"English",localeZh:"中文",localeCs:"Čeština",localeTr:"Türkçe",localeAr:"العربية",collapse:"Collapse toolbar",expand:"Expand toolbar",moreOverflow:"More tools"},settings:{ortho:"Toggle orthogonal mode",polar:"Polar tracking angles",polarAngles:"Polar tracking angles"},drawStyle:{color:"Color",fontSize:"Text height",pickerTitle:"Select Color",close:"Close",ok:"OK",cancel:"Cancel",index:"Color Index: ",rgb:"RGB: ",input:"Color",inputPlaceholder:"1-255 or #RRGGBB"},shortCutToolbar:{more:"More",undo:"Undo",redo:"Redo",erase:"Delete",collapse:"Collapse toolbar",expand:"Expand toolbar"},textHeight:{title:"Text Height",close:"Close",ok:"OK",cancel:"Cancel",adaptive:"Fit to screen",custom:"Custom text height",customPlaceholder:"World height",fromScreen:"From screen size",fromScreenHint:"Enter how large the text should look on screen at the current zoom. It is converted to a fixed world-space height that stays constant when you zoom later.",screenPxPlaceholder:"Font size",screenUnit:"px",convert:"Convert"},entityPick:{cancel:"Cancel selection"},layers:{title:"Layers",close:"Close layers",showAll:"Show all",hideAll:"Hide all",zoomTo:"Zoom to {name}"},review:{title:"Review",close:"Close review",searchPlaceholder:"Search markups",empty:"No markups yet",type:"Type",status:"Status",author:"Author",summary:"Summary",details:"Details",closeDetails:"Close details",label:"Label",comment:"Comment",zoomTo:"Zoom to",delete:"Delete",clear:"Clear all",statusValues:{open:"Open",question:"Question",answered:"Answered",closed:"Closed"}},measurePanel:{title:"Measurements",close:"Close measurements",filterGroup:"Filter by type",filterDistance:"Distance",filterArc:"Arc",filterAngle:"Angle",filterArea:"Area",empty:"No measurements yet",type:"Type",value:"Value",delete:"Delete",clear:"Clear all"},session:{length:"Length",angle:"Angle",dx:"ΔX",dy:"ΔY",x:"X",y:"Y",confirm:"Confirm",cancel:"Cancel",help:"Help",back:"Back",collapse:"Collapse",expand:"Expand",undo:"Undo"},touchPointTutorial:{title:"How to pick points precisely?",description:"Long-press on the screen for about 0.5 seconds. A cross appears above your finger and follows as you move, snapping to geometry for more accurate picks.",snoozeToday:"Don't remind me today",hideForever:"Don't remind me again",ok:"Got it"},status:{ready:"Ready",zoomWindowHint:"Click two corners to zoom to a window.",measureDistanceHint:"Click two points to measure distance (object snap enabled).",measureContinuousHint:"Tap successive points to measure each segment; tap ✓ to finish. Long-press for precise snap.",measureAreaHint:"Tap polygon vertices; tap ✓ to finish when at least three points are set. Long-press for precise snap.",measureAngleHint:"Click vertex, then two points on each arm (object snap enabled).",measureArcHint:"Click a circle or arc to measure along it, or click start, a point on the arc, then end (object snap enabled). Ctrl (⌘ on Mac) switches major/minor arc.",measureCoordinateHint:"Click a point to read its X/Y coordinates (object snap enabled).",measureExported:"Exported {count} measurement(s).",measureImported:"Imported {count} measurement(s).",measureImportFailed:"Failed to import measurements: {error}",markupCloudHint:"Click two corners to draw a revision cloud.",markupCalloutHint:"Click the leader tip, or the outline of a cloud / rectangle / circle that has no callout, then the text anchor.",markupTextHint:"Click a point to place text.",markupRectHint:"Click two corners to draw a rectangle.",markupCircleHint:"Click the center, then a point on the circumference.",markupArrowHint:"Click the start point, then the arrow tip.",markupStampHint:"Click to place a stamp (cycles approved / rejected / …).",markupArrowEndHint:"Click the arrow tip.",markupRectCornerHint:"Click the opposite corner.",markupCloudCornerHint:"Click the opposite corner.",markupCalloutAnchorHint:"Click the text bubble position.",markupCircleRadiusHint:"Click a point on the circumference.",markupTextPrompt:"Enter markup text",markupTextEditHint:"Type text on the canvas. Enter to finish, Esc to cancel.",markupShapeCalloutHint:"Click to place the text box (leader attaches to the shape). Esc cancels the callout.",markupDefaultLabel:"Note",markupSelected:"Selected markup: {type}",markupSelectedCount:"Selected markups: {count}",markupCount:"Markups: {count}",markupExported:"Exported {count} markup(s).",markupImported:"Imported {count} markup(s).",markupImportFailed:"Failed to import markups: {error}",distance:"Distance: {value}",coordinates:"X: {x} | Y: {y}",angle:"Angle: {value}",arcLength:"Arc length: {length} | Radius: {radius} | Angle: {angle} | Chord: {chord}",continuousTotal:"Total length: {value}",area:"Area: {value}",lengthTotal:"Length total: {value}",areaTotal:"Area total: {value}",zoomLayer:"Zoom: {name}",loadFailed:"Failed to load drawing: {error}",noLayout:"No layout data in snapshot.",loadingChunks:"Loading geometry… {loaded}/{total}",loadingOsnap:"Loading object snap… {loaded}/{total}",buildingOsnap:"Building object snap index…"},package:{title:"Open drawing package",hint:"No drawing.acex.json was found next to this page. Choose a local package folder or enter the manifest URL.",hintUrlOnly:"No drawing.acex.json was found next to this page. Enter the manifest URL to open the package.",chooseFolder:"Choose local folder",urlPlaceholder:"https://example.com/drawing.acex.json",openUrl:"Open URL",urlRequired:"Please enter a manifest URL.",manifestNotFound:"drawing.acex.json was not found next to this page.",invalidManifest:"The package manifest is invalid or uses an unsupported version: {error}",folderMissingManifest:"The selected folder must contain drawing.acex.json.",folderUnsupported:"This browser cannot open a local package folder. Paste a manifest URL instead.",loadFailed:"Failed to open package: {error}"},access:{title:"Protected drawing",passwordPrompt:"Enter the password to open this file.",passwordPlaceholder:"Password",unlock:"Unlock",passwordRequired:"Please enter a password.",wrongPassword:"Incorrect password. Try again.",expired:"This file has expired and can no longer be opened.",expiredTitle:"File expired",expiredDetail:"This file expired on {time} and can no longer be opened.",expiresAt:"Expires: {time}",badgeExpires:"Expires {time}",badgeCountdown:"Expires in {time}",tooManyAttempts:"Too many incorrect password attempts. Refresh the page to try again."}},zh:{toolbar:{viewerTools:"查看器工具",select:"选择",pan:"平移",zoom:"缩放",zoomExtents:"范围",zoomWindow:"窗口",zoomOriginal:"原始",measureDistance:"测距离",measureContinuous:"连续测",measureAngle:"测角度",measureArc:"测弧长",measureArea:"测面积",measureCoordinate:"测坐标",clearMeasurements:"清除",measureHide:"隐藏",measureShow:"显示",measureImport:"导入",measureExport:"导出",measurementPanel:"看结果",measure:"测量",annotation:"审阅",markupCloud:"云线",markupCallout:"标注",markupText:"文字",markupRect:"矩形",markupCircle:"圆",markupArrow:"箭头",markupStamp:"图章",markupPanel:"看结果",markupHide:"隐藏",markupShow:"显示",clearMarkups:"清除",markupImport:"导入",markupExport:"导出",snap:"捕捉",layers:"图层",layout:"布局",settings:"设置",simulatedMouseOn:"鼠标",simulatedMouseOff:"放大",themeLight:"浅色",themeDark:"深色",switchBg:"背景",language:"语言",localeEn:"English",localeZh:"中文",localeCs:"Čeština",localeTr:"Türkçe",collapse:"收起工具栏",expand:"展开工具栏",moreOverflow:"更多工具"},settings:{ortho:"切换正交模式",polar:"极轴追踪角度",polarAngles:"极轴追踪角度"},drawStyle:{color:"颜色",fontSize:"字高",pickerTitle:"选择颜色",close:"关闭",ok:"确定",cancel:"取消",index:"颜色索引：",rgb:"RGB：",input:"颜色",inputPlaceholder:"1-255 或 #RRGGBB"},shortCutToolbar:{more:"更多",undo:"撤销",redo:"重做",erase:"删除",collapse:"收起工具栏",expand:"展开工具栏"},textHeight:{title:"字高设置",close:"关闭",ok:"确定",cancel:"取消",adaptive:"自适应屏幕",custom:"自定义字高",customPlaceholder:"世界坐标字高",fromScreen:"按屏幕字号换算",fromScreenHint:"按当前视图缩放，输入希望看到的屏幕字号（像素），换算为固定的世界坐标字高；之后缩放时字的世界高度不变。",screenPxPlaceholder:"屏幕字号",screenUnit:"px",convert:"换算"},entityPick:{cancel:"取消选择"},layers:{title:"图层",close:"关闭图层",showAll:"全部显示",hideAll:"全部隐藏",zoomTo:"缩放到 {name}"},review:{title:"批注",close:"关闭批注面板",searchPlaceholder:"搜索批注",empty:"暂无批注",type:"类型",status:"状态",author:"作者",summary:"摘要",details:"详情",closeDetails:"关闭详情",label:"标签",comment:"评论",zoomTo:"缩放到",delete:"删除",clear:"全部清除",statusValues:{open:"打开",question:"疑问",answered:"已答复",closed:"已关闭"}},measurePanel:{title:"测量",close:"关闭测量面板",filterGroup:"按类型筛选",filterDistance:"距离",filterArc:"弧长",filterAngle:"角度",filterArea:"面积",empty:"暂无测量",type:"类型",value:"数值",delete:"删除",clear:"全部清除"},session:{length:"长度",angle:"角度",dx:"ΔX",dy:"ΔY",x:"X",y:"Y",confirm:"确定",cancel:"取消",help:"帮助",back:"返回",collapse:"收起",expand:"展开",undo:"撤销"},touchPointTutorial:{title:"怎样可以精确取点？",description:"手指在屏幕上长按0.5s左右，上方出现十字，手指移动时十字跟随移动并自动捕捉。取点更精准。",snoozeToday:"今日不再提醒",hideForever:"不再提醒",ok:"我知道了"},status:{ready:"就绪",zoomWindowHint:"点击两个角点以窗口缩放。",measureDistanceHint:"点击两点以测量距离（已启用对象捕捉）。",measureContinuousHint:"依次点击多个点测量各段距离，点 ✓ 完成。长按可精确捕捉。",measureAreaHint:"依次点击多边形顶点；至少三点后点 ✓ 完成。长按可精确捕捉。",measureAngleHint:"依次点击顶点与两条边上的点（已启用对象捕捉）。",measureArcHint:"点击圆或圆弧可沿其测量；否则依次点击弧起点、弧上一点与弧端点（已启用对象捕捉）。锁定后按 Ctrl（Mac 为 Control 或 ⌘）可在大弧与小弧之间切换。",measureCoordinateHint:"点击一点以读取其 X/Y 坐标（已启用对象捕捉）。",measureExported:"已导出 {count} 条测量。",measureImported:"已导入 {count} 条测量。",measureImportFailed:"导入测量失败：{error}",markupCloudHint:"点击两个对角点绘制修订云线。",markupCalloutHint:"先点击引线端点，或点击尚无标注的云线/矩形/圆外框，再点击文字位置。",markupTextHint:"点击一点放置文字。",markupRectHint:"点击两个对角点绘制矩形。",markupCircleHint:"先点击圆心，再点击圆周上一点。",markupArrowHint:"先点击起点，再点击箭头端点。",markupStampHint:"点击放置图章（在批准/拒绝等之间循环）。",markupArrowEndHint:"点击箭头端点。",markupRectCornerHint:"点击对角点。",markupCloudCornerHint:"点击对角点。",markupCalloutAnchorHint:"点击文字气泡位置。",markupCircleRadiusHint:"点击圆周上一点。",markupTextPrompt:"输入批注文字",markupTextEditHint:"在画布上输入文字。Enter 完成，Esc 取消。",markupShapeCalloutHint:"点击放置文本框（引线自动贴到图形）。Esc 取消引线和文本框。",markupDefaultLabel:"批注",markupSelected:"已选批注：{type}",markupSelectedCount:"已选批注：{count} 个",markupCount:"批注数：{count}",markupExported:"已导出 {count} 条批注。",markupImported:"已导入 {count} 条批注。",markupImportFailed:"导入批注失败：{error}",distance:"距离：{value}",coordinates:"X：{x} | Y：{y}",angle:"角度：{value}",arcLength:"弧长：{length} | 半径：{radius} | 总角度：{angle} | 弦长：{chord}",continuousTotal:"总长度：{value}",area:"面积：{value}",lengthTotal:"长度合计：{value}",areaTotal:"面积合计：{value}",zoomLayer:"缩放：{name}",loadFailed:"无法加载图纸：{error}",noLayout:"快照中没有布局数据。",loadingChunks:"正在加载几何… {loaded}/{total}",loadingOsnap:"正在加载对象捕捉… {loaded}/{total}",buildingOsnap:"正在构建对象捕捉索引…"},package:{title:"打开图纸包",hint:"当前页面同级目录未找到 drawing.acex.json。请选择本地包文件夹，或输入清单 URL。",hintUrlOnly:"当前页面同级目录未找到 drawing.acex.json。请输入清单 URL 以打开图纸包。",chooseFolder:"选择本地文件夹",urlPlaceholder:"https://example.com/drawing.acex.json",openUrl:"打开 URL",urlRequired:"请输入清单 URL。",manifestNotFound:"当前页面同级目录未找到 drawing.acex.json。",invalidManifest:"包清单无效或版本不受支持：{error}",folderMissingManifest:"所选文件夹必须包含 drawing.acex.json。",folderUnsupported:"当前浏览器无法选择本地包文件夹，请改为输入清单 URL。",loadFailed:"无法打开图纸包：{error}"},access:{title:"受保护的图纸",passwordPrompt:"请输入密码以打开此文件。",passwordPlaceholder:"密码",unlock:"解锁",passwordRequired:"请输入密码。",wrongPassword:"密码错误，请重试。",expired:"此文件已过期，无法打开。",expiredTitle:"文件已过期",expiredDetail:"此文件已于 {time} 过期，无法打开。",expiresAt:"有效期至：{time}",badgeExpires:"有效期至 {time}",badgeCountdown:"剩余 {time}",tooManyAttempts:"密码错误次数过多，请刷新页面后重新输入。"}},cs:{toolbar:{viewerTools:"Nástroje prohlížeče",select:"Výběr",pan:"Posun",zoom:"Přiblížení",zoomExtents:"Rozsah",zoomWindow:"Okno",zoomOriginal:"Původní",measureDistance:"Vzdálenost",measureContinuous:"Spojité",measureAngle:"Úhel",measureArc:"Oblouk",measureArea:"Plocha",measureCoordinate:"Souřadnice",clearMeasurements:"Vymazat",measureHide:"Skrýt",measureShow:"Zobrazit",measureImport:"Import",measureExport:"Export",measurementPanel:"Výsledky",measure:"Měření",annotation:"Kontrola",markupCloud:"Obláček",markupCallout:"Odkaz",markupText:"Text",markupRect:"Obdélník",markupCircle:"Kružnice",markupArrow:"Šipka",markupStamp:"Razítko",markupPanel:"Výsledky",markupHide:"Skrýt",markupShow:"Zobrazit",clearMarkups:"Vymazat",markupImport:"Import",markupExport:"Export",snap:"Uchopit",layers:"Hladiny",layout:"Rozvržení",settings:"Nastavení",simulatedMouseOn:"Myš",simulatedMouseOff:"Lupa",themeLight:"Světlý",themeDark:"Tmavý",switchBg:"Pozadí",language:"Jazyk",localeEn:"English",localeZh:"中文",localeCs:"Čeština",localeTr:"Türkçe",collapse:"Sbalit panel nástrojů",expand:"Rozbalit panel nástrojů",moreOverflow:"Další nástroje"},settings:{ortho:"Přepnout ortogonální režim",polar:"Úhly polárního trasování",polarAngles:"Úhly polárního trasování"},drawStyle:{color:"Barva",fontSize:"Výška textu",pickerTitle:"Vybrat barvu",close:"Zavřít",ok:"OK",cancel:"Zrušit",index:"Index barvy: ",rgb:"RGB: ",input:"Barva",inputPlaceholder:"1-255 nebo #RRGGBB"},shortCutToolbar:{more:"Více",undo:"Zpět",redo:"Znovu",erase:"Smazat",collapse:"Sbalit panel nástrojů",expand:"Rozbalit panel nástrojů"},textHeight:{title:"Výška textu",close:"Zavřít",ok:"OK",cancel:"Zrušit",adaptive:"Přizpůsobit obrazovce",custom:"Vlastní výška textu",customPlaceholder:"Světová výška",fromScreen:"Ze velikosti na obrazovce",fromScreenHint:"Zadejte, jak velký má text vypadat na obrazovce při aktuálním zoomu. Přepočítá se na pevnou světovou výšku, která se při pozdějším zoomování nemění.",screenPxPlaceholder:"Velikost písma",screenUnit:"px",convert:"Přepočítat"},entityPick:{cancel:"Zrušit výběr"},layers:{title:"Hladiny",close:"Zavřít hladiny",showAll:"Zobrazit vše",hideAll:"Skrýt vše",zoomTo:"Přiblížit na {name}"},review:{title:"Kontrola",close:"Zavřít kontrolu",searchPlaceholder:"Hledat poznámky",empty:"Zatím žádné poznámky",type:"Typ",status:"Stav",author:"Autor",summary:"Souhrn",details:"Podrobnosti",closeDetails:"Zavřít podrobnosti",label:"Popisek",comment:"Komentář",zoomTo:"Přiblížit na",delete:"Odstranit",clear:"Vymazat vše",statusValues:{open:"Otevřeno",question:"Otázka",answered:"Zodpovězeno",closed:"Uzavřeno"}},measurePanel:{title:"Měření",close:"Zavřít měření",filterGroup:"Filtrovat podle typu",filterDistance:"Vzdálenost",filterArc:"Oblouk",filterAngle:"Úhel",filterArea:"Plocha",empty:"Zatím žádná měření",type:"Typ",value:"Hodnota",delete:"Odstranit",clear:"Vymazat vše"},session:{length:"Délka",angle:"Úhel",dx:"ΔX",dy:"ΔY",x:"X",y:"Y",confirm:"Potvrdit",cancel:"Zrušit",help:"Nápověda",back:"Zpět",collapse:"Sbalit",expand:"Rozbalit",undo:"Zpět"},touchPointTutorial:{title:"Jak přesně vybrat bod?",description:"Podržte prst na obrazovce asi 0,5 sekundy. Nad prstem se objeví kříž, který při pohybu sleduje prst a přichytává se k geometrii pro přesnější výběr.",snoozeToday:"Dnes už nepřipomínat",hideForever:"Už nepřipomínat",ok:"Rozumím"},status:{ready:"Připraveno",zoomWindowHint:"Klikněte na dva rohy pro přiblížení oknem.",measureDistanceHint:"Klikněte na dva body pro změření vzdálenosti (uchopení objektů zapnuto).",measureContinuousHint:"Klepejte na další body pro měření každého úseku; dokončete klepnutím na ✓. Dlouhé stisknutí pro přesné uchopení.",measureAngleHint:"Klikněte na vrchol, poté na dva body na každém rameni (uchopení objektů zapnuto).",measureArcHint:"Klikněte na kružnici nebo oblouk pro měření podél něj, nebo klikněte na začátek, bod na oblouku a konec (uchopení objektů zapnuto). Ctrl (⌘ na Macu) přepíná velký/malý oblouk.",measureAreaHint:"Klepejte na vrcholy mnohoúhelníku; dokončete klepnutím na ✓ po alespoň třech bodech.",measureCoordinateHint:"Klikněte na bod pro zobrazení jeho souřadnic X/Y (uchopení objektů zapnuto).",measureExported:"Exportováno {count} měření.",measureImported:"Importováno {count} měření.",measureImportFailed:"Import měření selhal: {error}",markupCloudHint:"Klikněte na dva rohy pro nakreslení obláčku.",markupCalloutHint:"Klikněte na hrot vodítka, nebo na obrys obláčku/obdélníku/kružnice bez odkazu, a poté na kotvu textu.",markupTextHint:"Klikněte pro umístění textu.",markupRectHint:"Klikněte na dva rohy pro nakreslení obdélníku.",markupCircleHint:"Klikněte na střed a poté na bod na kružnici.",markupArrowHint:"Klikněte na začátek a poté na hrot šipky.",markupStampHint:"Klikněte pro umístění razítka (schváleno / zamítnuto / …).",markupArrowEndHint:"Klikněte na hrot šipky.",markupRectCornerHint:"Klikněte na protilehlý roh.",markupCloudCornerHint:"Klikněte na protilehlý roh.",markupCalloutAnchorHint:"Klikněte na pozici textové bubliny.",markupCircleRadiusHint:"Klikněte na bod na kružnici.",markupTextPrompt:"Zadejte text poznámky",markupTextEditHint:"Pište text přímo na plátno. Enter dokončí, Esc zruší.",markupShapeCalloutHint:"Klikněte pro umístění textového pole (vodítko se připojí k tvaru). Esc zruší odkaz.",markupDefaultLabel:"Poznámka",markupSelected:"Vybraná poznámka: {type}",markupSelectedCount:"Vybrané poznámky: {count}",markupCount:"Poznámky: {count}",markupExported:"Exportováno {count} poznámek.",markupImported:"Importováno {count} poznámek.",markupImportFailed:"Import poznámek selhal: {error}",distance:"Vzdálenost: {value}",coordinates:"X: {x} | Y: {y}",angle:"Úhel: {value}",arcLength:"Délka oblouku: {length} | Poloměr: {radius} | Úhel: {angle} | Tětiva: {chord}",continuousTotal:"Celková délka: {value}",area:"Plocha: {value}",lengthTotal:"Celková délka: {value}",areaTotal:"Celková plocha: {value}",zoomLayer:"Zoom: {name}",loadFailed:"Nepodařilo se načíst výkres: {error}",noLayout:"Snímek neobsahuje data rozvržení.",loadingChunks:"Načítání geometrie… {loaded}/{total}",loadingOsnap:"Načítání uchopování… {loaded}/{total}",buildingOsnap:"Sestavování indexu uchopování…"},package:{title:"Otevřít balíček výkresu",hint:"Vedle této stránky nebyl nalezen drawing.acex.json. Vyberte místní složku balíčku nebo zadejte URL manifestu.",hintUrlOnly:"Vedle této stránky nebyl nalezen drawing.acex.json. Zadejte URL manifestu pro otevření balíčku.",chooseFolder:"Vybrat místní složku",urlPlaceholder:"https://example.com/drawing.acex.json",openUrl:"Otevřít URL",urlRequired:"Zadejte URL manifestu.",manifestNotFound:"drawing.acex.json nebyl vedle této stránky nalezen.",invalidManifest:"Manifest balíčku je neplatný nebo používá nepodporovanou verzi: {error}",folderMissingManifest:"Vybraná složka musí obsahovat drawing.acex.json.",folderUnsupported:"Tento prohlížeč neumí otevřít místní složku balíčku. Zadejte místo toho URL manifestu.",loadFailed:"Nepodařilo se otevřít balíček: {error}"},access:{title:"Chráněný výkres",passwordPrompt:"Zadejte heslo pro otevření tohoto souboru.",passwordPlaceholder:"Heslo",unlock:"Odemknout",passwordRequired:"Zadejte heslo.",wrongPassword:"Nesprávné heslo. Zkuste to znovu.",expired:"Platnost tohoto souboru vypršela a nelze jej otevřít.",expiredTitle:"Soubor vypršel",expiredDetail:"Platnost tohoto souboru vypršela dne {time} a již jej nelze otevřít.",expiresAt:"Platnost do: {time}",badgeExpires:"Platnost do {time}",badgeCountdown:"Vyprší za {time}",tooManyAttempts:"Příliš mnoho nesprávných pokusů o heslo. Obnovte stránku a zkuste to znovu."}},tr:{toolbar:{viewerTools:"Görüntüleyici araçları",select:"Seç",pan:"Kaydır",zoom:"Yakınlaştır",zoomExtents:"Sınırlar",zoomWindow:"Pencere",zoomOriginal:"Orijinal",measureDistance:"Mesafe",measureContinuous:"Sürekli",measureAngle:"Açı",measureArc:"Yay",measureArea:"Alan",measureCoordinate:"XY",clearMeasurements:"Temizle",measureHide:"Gizle",measureShow:"Göster",measureImport:"İçe aktar",measureExport:"Dışa aktar",measurementPanel:"Sonuç",measure:"Ölçüm",annotation:"İnceleme",markupCloud:"Bulut",markupCallout:"Çağrı",markupText:"Metin",markupRect:"Dörtgen",markupCircle:"Daire",markupArrow:"Ok",markupStamp:"Damga",markupPanel:"Sonuç",markupHide:"Gizle",markupShow:"Göster",clearMarkups:"Temizle",markupImport:"İçe aktar",markupExport:"Dışa aktar",snap:"Yakalama",layers:"Katman",layout:"Düzen",settings:"Ayarlar",simulatedMouseOn:"Fare",simulatedMouseOff:"Büyüteç",themeLight:"Açık",themeDark:"Koyu",switchBg:"Arka plan",language:"Dil",localeEn:"English",localeZh:"中文",localeCs:"Čeština",localeTr:"Türkçe",collapse:"Araç çubuğunu daralt",expand:"Araç çubuğunu genişlet",moreOverflow:"Diğer araçlar"},settings:{ortho:"Dik modu aç/kapat",polar:"Kutupsal izleme açıları",polarAngles:"Kutupsal izleme açıları"},drawStyle:{color:"Renk",fontSize:"Yazı yüksekliği",pickerTitle:"Renk Seç",close:"Kapat",ok:"Tamam",cancel:"İptal",index:"Renk İndeksi: ",rgb:"RGB: ",input:"Renk",inputPlaceholder:"1-255 veya #RRGGBB"},shortCutToolbar:{more:"Daha fazla",undo:"Geri al",redo:"Yinele",erase:"Sil",collapse:"Araç çubuğunu daralt",expand:"Araç çubuğunu genişlet"},textHeight:{title:"Yazı Yüksekliği",close:"Kapat",ok:"Tamam",cancel:"İptal",adaptive:"Ekrana uyarla",custom:"Özel yazı yüksekliği",customPlaceholder:"Dünya yüksekliği",fromScreen:"Ekran boyutundan",fromScreenHint:"Geçerli yakınlaştırmada ekranda istediğiniz yazı boyutunu girin. Sabit bir dünya yüksekliğine dönüştürülür; sonra yakınlaştırınca bu yükseklik değişmez.",screenPxPlaceholder:"Yazı boyutu",screenUnit:"px",convert:"Dönüştür"},entityPick:{cancel:"Seçimi iptal et"},layers:{title:"Katmanlar",close:"Katmanları kapat",showAll:"Tümünü göster",hideAll:"Tümünü gizle",zoomTo:"{name} katmanına yakınlaştır"},review:{title:"İnceleme",close:"İncelemeyi kapat",searchPlaceholder:"İşaretlerde ara",empty:"Henüz işaret yok",type:"Tür",status:"Durum",author:"Yazar",summary:"Özet",details:"Ayrıntılar",closeDetails:"Ayrıntıları kapat",label:"Etiket",comment:"Yorum",zoomTo:"Yakınlaştır",delete:"Sil",clear:"Tümünü temizle",statusValues:{open:"Açık",question:"Soru",answered:"Yanıtlandı",closed:"Kapalı"}},measurePanel:{title:"Ölçümler",close:"Ölçümleri kapat",filterGroup:"Türe göre filtrele",filterDistance:"Mesafe",filterArc:"Yay",filterAngle:"Açı",filterArea:"Alan",empty:"Henüz ölçüm yok",type:"Tür",value:"Değer",delete:"Sil",clear:"Tümünü temizle"},session:{length:"Uzunluk",angle:"Açı",dx:"ΔX",dy:"ΔY",x:"X",y:"Y",confirm:"Onayla",cancel:"İptal",help:"Yardım",back:"Geri",collapse:"Daralt",expand:"Genişlet",undo:"Geri al"},touchPointTutorial:{title:"Noktalar nasıl hassas seçilir?",description:"Ekranda yaklaşık 0,5 saniye basılı tutun. Parmağınızın üstünde bir artı belirir ve hareket ederken geometriye yapışarak daha doğru seçim yapmanızı sağlar.",snoozeToday:"Bugün tekrar hatırlatma",hideForever:"Bir daha hatırlatma",ok:"Anladım"},status:{ready:"Hazır",zoomWindowHint:"Pencere yakınlaştırmak için iki köşeyi tıklayın.",measureDistanceHint:"Mesafe ölçmek için iki nokta tıklayın (nesne yakalama etkin).",measureContinuousHint:"Her segmenti ölçmek için ardışık noktalar dokunun; bitirmek için ✓. Hassas yakalama için basılı tutun.",measureAngleHint:"Önce köşe noktasını, sonra her koldan birer nokta tıklayın (nesne yakalama etkin).",measureArcHint:"Ölçmek için bir çember veya yaya tıklayın; ya da yay başlangıcı, yay üzerindeki bir nokta ve yay sonunu tıklayın (nesne yakalama etkin). Ctrl (Mac’te ⌘) büyük/küçük yay arasında geçiş yapar.",measureAreaHint:"Çokgen köşelerini dokunun; en az üç noktadan sonra bitirmek için ✓.",measureCoordinateHint:"X/Y koordinatlarını okumak için bir nokta tıklayın (nesne yakalama etkin).",measureExported:"{count} ölçüm dışa aktarıldı.",measureImported:"{count} ölçüm içe aktarıldı.",measureImportFailed:"Ölçüm içe aktarılamadı: {error}",markupCloudHint:"Revizyon bulutu çizmek için iki köşe tıklayın.",markupCalloutHint:"Lider ucunu veya çağrısı olmayan bulut/dikdörtgen/daire dış çerçevesini tıklayın, ardından metin konumunu tıklayın.",markupTextHint:"Metin yerleştirmek için bir nokta tıklayın.",markupRectHint:"Dikdörtgen çizmek için iki köşe tıklayın.",markupCircleHint:"Önce merkezi, sonra çevre üzerindeki bir noktayı tıklayın.",markupArrowHint:"Önce başlangıcı, sonra ok ucunu tıklayın.",markupStampHint:"Damga yerleştirmek için tıklayın (onaylandı / reddedildi / …).",markupArrowEndHint:"Ok ucunu tıklayın.",markupRectCornerHint:"Karşı köşeyi tıklayın.",markupCloudCornerHint:"Karşı köşeyi tıklayın.",markupCalloutAnchorHint:"Metin balonu konumunu tıklayın.",markupCircleRadiusHint:"Çevre üzerindeki bir noktayı tıklayın.",markupTextPrompt:"İşaretleme metnini girin",markupTextEditHint:"Metni tuval üzerinde yazın. Enter ile bitirin, Esc ile iptal edin.",markupShapeCalloutHint:"Metin kutusunu yerleştirmek için tıklayın (lider şekle bağlanır). Esc çağrıyı iptal eder.",markupDefaultLabel:"Not",markupSelected:"Seçili işaretleme: {type}",markupSelectedCount:"Seçili işaretlemeler: {count}",markupCount:"İşaretlemeler: {count}",markupExported:"{count} işaretleme dışa aktarıldı.",markupImported:"{count} işaretleme içe aktarıldı.",markupImportFailed:"İşaretleme içe aktarılamadı: {error}",distance:"Mesafe: {value}",coordinates:"X: {x} | Y: {y}",angle:"Açı: {value}",arcLength:"Yay uzunluğu: {length} | Yarıçap: {radius} | Açı: {angle} | Kiriş: {chord}",continuousTotal:"Toplam uzunluk: {value}",area:"Alan: {value}",lengthTotal:"Toplam uzunluk: {value}",areaTotal:"Toplam alan: {value}",zoomLayer:"Yakınlaştır: {name}",loadFailed:"Çizim yüklenemedi: {error}",noLayout:"Anlık görüntüde yerleşim verisi yok.",loadingChunks:"Geometri yükleniyor… {loaded}/{total}",loadingOsnap:"Nesne yakalama yükleniyor… {loaded}/{total}",buildingOsnap:"Nesne yakalama dizini oluşturuluyor…"},package:{title:"Çizim paketini aç",hint:"Bu sayfanın yanında drawing.acex.json bulunamadı. Yerel bir paket klasörü seçin veya manifesto URL’sini girin.",hintUrlOnly:"Bu sayfanın yanında drawing.acex.json bulunamadı. Paketi açmak için manifesto URL’sini girin.",chooseFolder:"Yerel klasör seç",urlPlaceholder:"https://example.com/drawing.acex.json",openUrl:"URL aç",urlRequired:"Lütfen bir manifesto URL’si girin.",manifestNotFound:"Bu sayfanın yanında drawing.acex.json bulunamadı.",invalidManifest:"Paket manifestosu geçersiz veya desteklenmeyen bir sürüm kullanıyor: {error}",folderMissingManifest:"Seçilen klasör drawing.acex.json içermelidir.",folderUnsupported:"Bu tarayıcı yerel paket klasörü açamıyor. Bunun yerine manifesto URL’si yapıştırın.",loadFailed:"Paket açılamadı: {error}"},access:{title:"Korumalı çizim",passwordPrompt:"Bu dosyayı açmak için parolayı girin.",passwordPlaceholder:"Parola",unlock:"Kilidi aç",passwordRequired:"Lütfen bir parola girin.",wrongPassword:"Parola yanlış. Tekrar deneyin.",expired:"Bu dosyanın süresi doldu ve artık açılamaz.",expiredTitle:"Dosyanın süresi doldu",expiredDetail:"Bu dosyanın süresi {time} tarihinde doldu ve artık açılamaz.",expiresAt:"Son geçerlilik: {time}",badgeExpires:"Son geçerlilik {time}",badgeCountdown:"Kalan süre {time}",tooManyAttempts:"Çok fazla yanlış parola denemesi yapıldı. Tekrar denemek için sayfayı yenileyin."}}},xs={toolbar:{viewerTools:"أدوات العارض",select:"تحديد",pan:"تحريك",zoom:"تكبير/تصغير",zoomExtents:"ملاءمة",zoomWindow:"نافذة",zoomOriginal:"أصلي",measureDistance:"مسافة",measureContinuous:"مستمر",measureAngle:"زاوية",measureArc:"قوس",measureArea:"مساحة",measureCoordinate:"إحداثيات",clearMeasurements:"مسح",measureHide:"إخفاء",measureShow:"إظهار",measureImport:"استيراد",measureExport:"تصدير",measurementPanel:"نتائج",measure:"قياس",annotation:"مراجعة",markupCloud:"سحابة",markupCallout:"تعليق",markupText:"نص",markupRect:"مستطيل",markupCircle:"دائرة",markupArrow:"سهم",markupStamp:"ختم",markupPanel:"نتائج",markupHide:"إخفاء",markupShow:"إظهار",clearMarkups:"مسح",markupImport:"استيراد",markupExport:"تصدير",snap:"التقاط",layers:"طبقات",layout:"تخطيط",settings:"إعدادات",simulatedMouseOn:"ماوس",simulatedMouseOff:"عدسة",themeLight:"فاتح",themeDark:"داكن",switchBg:"خلفية",language:"اللغة",localeEn:"English",localeZh:"中文",localeCs:"Čeština",localeTr:"Türkçe",localeAr:"العربية",collapse:"طي شريط الأدوات",expand:"توسيع شريط الأدوات",moreOverflow:"المزيد من الأدوات"},settings:{ortho:"تبديل الوضع المتعامد",polar:"زوايا التتبع القطبي",polarAngles:"زوايا التتبع القطبي"},drawStyle:{color:"اللون",fontSize:"ارتفاع النص",pickerTitle:"تحديد اللون",close:"إغلاق",ok:"موافق",cancel:"إلغاء",index:"فهرس اللون: ",rgb:"RGB: ",input:"اللون",inputPlaceholder:"1-255 أو #RRGGBB"},textHeight:{title:"ارتفاع النص",close:"إغلاق",ok:"موافق",cancel:"إلغاء",adaptive:"ملاءمة الشاشة",custom:"ارتفاع نص مخصص",customPlaceholder:"ارتفاع العالم",fromScreen:"من حجم الشاشة",fromScreenHint:"أدخل حجم النص المطلوب على الشاشة عند التكبير الحالي. يُحوَّل إلى ارتفاع ثابت في إحداثيات الرسم ويبقى كما هو عند تغيير التكبير لاحقًا.",screenPxPlaceholder:"حجم الخط",screenUnit:"px",convert:"تحويل"},layers:{title:"الطبقات",close:"إغلاق الطبقات",showAll:"إظهار الكل",hideAll:"إخفاء الكل",zoomTo:"تكبير إلى {name}"},review:{title:"مراجعة",close:"إغلاق المراجعة",searchPlaceholder:"البحث في الملاحظات",empty:"لا توجد ملاحظات بعد",type:"النوع",status:"الحالة",author:"المؤلف",summary:"الملخص",details:"التفاصيل",closeDetails:"إغلاق التفاصيل",label:"التسمية",comment:"التعليق",zoomTo:"تكبير إلى",delete:"حذف",clear:"مسح الكل",statusValues:{open:"مفتوح",question:"سؤال",answered:"تمت الإجابة",closed:"مغلق"}},measurePanel:{title:"القياسات",close:"إغلاق القياسات",filterGroup:"التصفية حسب النوع",filterDistance:"مسافة",filterArc:"قوس",filterAngle:"زاوية",filterArea:"مساحة",empty:"لا توجد قياسات حتى الآن",type:"النوع",value:"القيمة",delete:"حذف",clear:"مسح الكل"},session:{length:"الطول",angle:"الزاوية",dx:"ΔX",dy:"ΔY",x:"X",y:"Y",confirm:"تأكيد",cancel:"إلغاء",help:"مساعدة",back:"رجوع",collapse:"طي",expand:"توسيع",undo:"تراجع"},touchPointTutorial:{title:"كيف أختار النقاط بدقة؟",description:"اضغط مطولاً على الشاشة لمدة نصف ثانية تقريباً. يظهر صليب فوق إصبعك ويتبعه أثناء الحركة ويلتقط إلى الهندسة لاختيار أدق.",snoozeToday:"لا تذكرني اليوم",hideForever:"لا تذكرني مرة أخرى",ok:"فهمت"},status:{ready:"جاهز",zoomWindowHint:"انقر على ركنين لتحديد نافذة التكبير.",measureDistanceHint:"انقر على نقطتين لقياس المسافة (التقاط الكائنات مفعّل).",measureContinuousHint:"انقر على نقاط متتالية لقياس كل قطعة؛ انقر ✓ للإنهاء. اضغط مطولاً للالتقاط الدقيق.",measureAngleHint:"انقر على رأس الزاوية، ثم نقطة على كل ضلع (التقاط الكائنات مفعّل).",measureArcHint:"انقر على دائرة أو قوس للقياس عليه، أو انقر على نقطة البداية ثم نقطة على القوس ثم نقطة النهاية (التقاط الكائنات مفعّل). استخدم Ctrl (⌘ على Mac) للتبديل بين القوس الأكبر والأصغر.",measureAreaHint:"انقر على رؤوس المضلع؛ انقر ✓ للإنهاء بعد ثلاث نقاط على الأقل.",measureCoordinateHint:"انقر على نقطة لقراءة إحداثيات X/Y الخاصة بها (التقاط الكائنات مفعّل).",measureExported:"تم تصدير {count} من القياسات.",measureImported:"تم استيراد {count} من القياسات.",measureImportFailed:"فشل استيراد القياسات: {error}",markupCloudHint:"انقر على ركنين لرسم سحابة مراجعة.",markupCalloutHint:"انقر على طرف خط الإشارة، أو على إطار سحابة/مستطيل/دائرة بدون تعليق توضيحي، ثم موضع النص.",markupTextHint:"انقر على نقطة لوضع النص.",markupRectHint:"انقر على ركنين لرسم مستطيل.",markupCircleHint:"انقر على المركز، ثم على نقطة على المحيط.",markupArrowHint:"انقر على نقطة البداية، ثم على رأس السهم.",markupStampHint:"انقر لوضع ختم (يتنقل بين معتمد / مرفوض / …).",markupArrowEndHint:"انقر على رأس السهم.",markupRectCornerHint:"انقر على الركن المقابل.",markupCloudCornerHint:"انقر على الركن المقابل.",markupCalloutAnchorHint:"انقر على موضع فقاعة النص.",markupCircleRadiusHint:"انقر على نقطة على المحيط.",markupTextPrompt:"أدخل نص الملاحظة",markupTextEditHint:"اكتب النص على مساحة الرسم. اضغط Enter للإنهاء أو Esc للإلغاء.",markupShapeCalloutHint:"انقر لوضع مربع النص (يتصل خط الإشارة بالشكل). اضغط Esc لإلغاء التعليق التوضيحي.",markupDefaultLabel:"ملاحظة",markupSelected:"الملاحظة المحددة: {type}",markupSelectedCount:"الملاحظات المحددة: {count}",markupCount:"عدد الملاحظات: {count}",markupExported:"تم تصدير {count} من الملاحظات.",markupImported:"تم استيراد {count} من الملاحظات.",markupImportFailed:"فشل استيراد الملاحظات: {error}",distance:"المسافة: {value}",coordinates:"X: {x} | Y: {y}",angle:"الزاوية: {value}",arcLength:"طول القوس: {length} | نصف القطر: {radius} | الزاوية: {angle} | الوتر: {chord}",continuousTotal:"إجمالي الطول: {value}",area:"المساحة: {value}",lengthTotal:"إجمالي الطول: {value}",areaTotal:"إجمالي المساحة: {value}",zoomLayer:"تكبير: {name}",loadFailed:"فشل تحميل الرسم: {error}",noLayout:"لا توجد بيانات تخطيط في اللقطة.",loadingChunks:"جاري تحميل الهندسة… {loaded}/{total}",loadingOsnap:"جاري تحميل الالتقاط… {loaded}/{total}",buildingOsnap:"جاري بناء فهرس الالتقاط…"},package:{title:"فتح حزمة الرسم",hint:"لم يتم العثور على drawing.acex.json بجانب هذه الصفحة. اختر مجلد الحزمة المحلي أو أدخل عنوان URL للقائمة.",hintUrlOnly:"لم يتم العثور على drawing.acex.json بجانب هذه الصفحة. أدخل عنوان URL للقائمة لفتح الحزمة.",chooseFolder:"اختيار مجلد محلي",urlPlaceholder:"https://example.com/drawing.acex.json",openUrl:"فتح الرابط",urlRequired:"يرجى إدخال عنوان URL للقائمة.",manifestNotFound:"لم يتم العثور على drawing.acex.json بجانب هذه الصفحة.",invalidManifest:"قائمة الحزمة غير صالحة أو تستخدم إصداراً غير مدعوم: {error}",folderMissingManifest:"يجب أن يحتوي المجلد المحدد على drawing.acex.json.",folderUnsupported:"لا يمكن لهذا المتصفح فتح مجلد حزمة محلي. الصق عنوان URL للقائمة بدلاً من ذلك.",loadFailed:"تعذر فتح الحزمة: {error}"},access:{title:"رسم محمي",passwordPrompt:"أدخل كلمة المرور لفتح هذا الملف.",passwordPlaceholder:"كلمة المرور",unlock:"فتح",passwordRequired:"يرجى إدخال كلمة المرور.",wrongPassword:"كلمة المرور غير صحيحة. حاول مرة أخرى.",expired:"انتهت صلاحية هذا الملف ولا يمكن فتحه.",expiredTitle:"انتهت صلاحية الملف",expiredDetail:"انتهت صلاحية هذا الملف في {time} ولا يمكن فتحه.",expiresAt:"ينتهي في: {time}",badgeExpires:"ينتهي في {time}",badgeCountdown:"متبقي {time}",tooManyAttempts:"عدد محاولات إدخال كلمة المرور كبير جدًا. قم بتحديث الصفحة للمحاولة مرة أخرى."}},Ha={...ws,ar:xs};function Le(e){if(e==null||e==="")return null;const t=e.toLowerCase().replace("_","-");for(const a of Oe)if(t===a||t.startsWith(`${a}-`))return a;return null}function vs(){if(typeof navigator>"u")return"en";const e=[...navigator.languages??[],navigator.language].filter(Boolean);for(const t of e){const a=Le(t);if(a)return a}return"en"}function ks(){if(typeof localStorage<"u")try{const e=localStorage.getItem(Or),t=Le(e);if(t)return t}catch{}return vs()}function Da(e,t){const a=t.split(".");let r=e;for(const n of a){if(r==null||typeof r=="string")return;r=r[n]}return typeof r=="string"?r:void 0}function As(e,t){return t?e.replace(/\{(\w+)\}/g,(a,r)=>{const n=t[r];return n!=null?String(n):`{${r}}`}):e}class rc{constructor(t){this._onChange=null,this._locale=t??ks()}get locale(){return this._locale}get localeBadge(){return ys[this._locale]}setOnChange(t){this._onChange=t}t(t,a){const r=Da(Ha[this._locale],t)??Da(Ha.en,t)??t;return As(r,a)}toggleLocale(){const t=Oe.indexOf(this._locale),a=Oe[(t+1)%Oe.length];return this.setLocale(a),a}setLocale(t){var a;if(this._locale!==t){this._locale=t,typeof document<"u"&&(document.documentElement.lang=t);try{typeof localStorage<"u"&&localStorage.setItem(Or,t)}catch{}this.applyToDocument(),(a=this._onChange)==null||a.call(this)}}applyToDocument(t){if(typeof document>"u")return;const a=t??document;document.documentElement.lang=this._locale,a.querySelectorAll("[data-i18n-text]").forEach(n=>{const o=n.dataset.i18nKey;o&&(n.textContent=this.t(o))}),a.querySelectorAll("[data-i18n-attr]").forEach(n=>{var o;const i=n.dataset.i18nKey,s=((o=n.dataset.i18nAttr)==null?void 0:o.split(/\s+/))??[];if(!i||s.length===0)return;const l=this.t(i);for(const c of s)n.setAttribute(c,l)});const r=document.getElementById("mlcad-lang-badge");r&&(r.textContent=this.localeBadge)}}const jr=1128612673,Ra=1e5;function Cs(e){if(e.version!==$)throw new Error(`Unsupported chunk version: ${e.version}`);const t=new Xt;t.writeU32(jr),t.writeU8($),t.writeU8(0),t.writeU8(0),t.writeU8(0),t.writeString(e.layoutBtrId),t.writeU32(e.lineBatches.length);for(const a of e.lineBatches)ur(t,a);t.writeU32(e.meshBatches.length);for(const a of e.meshBatches)pr(t,a);return t.toUint8Array()}function zs(e){const t=new Zt(e);if(t.readU32()!==jr)throw new Error("Invalid chunk magic");const a=t.readU8();if(t.readU8(),t.readU8(),t.readU8(),a!==$)throw new Error(`Unsupported chunk version: ${a}`);const r=t.readString(),n=t.readU32();if(n>Ra)throw new Error("Chunk line batch count exceeds limit");const o=[];for(let l=0;l<n;l++)o.push(mr(t));const i=t.readU32();if(i>Ra)throw new Error("Chunk mesh batch count exceeds limit");const s=[];for(let l=0;l<i;l++)s.push(hr(t));return{version:$,layoutBtrId:r,lineBatches:o,meshBatches:s}}function Es(e){const t=Cs(e),a=Vt(t).bytes;return{uncompressed:t,compressed:a}}function Nr(e){return zs(Yt(e))}const $r=1,Ss=2*1024*1024,Je=2*1024*1024,Ps=512*1024,Us=8*1024*1024,Ba=12*1024*1024,Fs=2*1024*1024,ta=6;function aa(e,t,a){const r=e.length,n=r>0?Math.max(1,Math.min(Number.isFinite(t)?Math.floor(t):1,r)):0,o=new Array(r);let i=0,s=0;const l=c=>{const d=Promise.resolve().then(()=>a(e[c],c));d.catch(()=>{}),o[c]=d,i+=1};for(;i<n;)l(i);return{async next(){if(s>=r)return null;const c=s;s+=1;const d=await o[c];return i<r&&l(i),{item:e[c],index:c,bytes:d}}}}const Ms=/^(?:\.[/\\])?[A-Za-z0-9._-]+(?:[/\\][A-Za-z0-9._-]+)*$/;function Is(e){const t=e.trim();return!t||t!==e||t.startsWith("/")||t.startsWith("\\")||t.startsWith("//")||/^[a-zA-Z][a-zA-Z0-9+.-]*:/.test(t)||t.includes("..")||t.includes("\\")?!1:Ms.test(t)}function Ve(e,t){if(!Is(e))throw new Error(`Invalid ${t}: must be a relative package path`)}function qe(e){if(!e||typeof e!="object")throw new Error("Invalid package manifest");const t=e;if(t.format!=="acex-package")throw new Error("Unsupported package format");if(t.packageVersion!==$r)throw new Error(`Unsupported package version: ${String(t.packageVersion)}`);if(t.snapshotVersion!==$)throw new Error(`Unsupported snapshot version: ${String(t.snapshotVersion)}`);if(!Array.isArray(t.layouts)||!Array.isArray(t.chunks))throw new Error("Invalid package manifest structure");for(const a of t.chunks){if(!a||typeof a!="object")throw new Error("Invalid package chunk entry");Ve(a.href,"chunk href")}for(const a of t.osnapChunks??[]){if(!a||typeof a!="object")throw new Error("Invalid package osnap chunk entry");Ve(a.href,"osnap chunk href")}return t}function Ls(e){return{version:$,meta:e.meta,layers:e.layers,activeLayoutBtrId:e.activeLayoutBtrId,layouts:e.layouts.map(t=>({btrId:t.btrId,name:t.name,isModelSpace:t.isModelSpace,lineBatches:[],meshBatches:[],viewports:t.viewports}))}}function ra(e,t){Ve(t,"chunk href");let a,r;try{a=new URL(t,e),r=new URL(e)}catch{throw new Error("Invalid chunk or manifest URL")}if(a.protocol!==r.protocol||a.host!==r.host)throw new Error("Chunk URL must share the manifest origin");const n=r.pathname.replace(/[^/]*$/,""),o=a.pathname;if(!o.startsWith(n))throw new Error("Chunk URL escapes package directory");if(o.split("/").includes(".."))throw new Error("Chunk URL escapes package directory");return a.toString()}function Ts(e,t){Ve(e,"manifestUrl");let a,r;try{a=new URL(e,t),r=new URL(t)}catch{throw new Error("Invalid manifestUrl")}if(a.protocol!==r.protocol||a.host!==r.host)throw new Error("manifestUrl must be same-origin");return a.toString()}async function na(e,t,a){const r=await e(t);if(!r.ok)throw new Error(`Failed to load ${a} (${r.status})`);const n=r.headers.get("content-length");if(n!=null){const i=Number(n);if(Number.isFinite(i)&&i>vt)throw new Error(`${a} exceeds size limit`)}const o=await r.arrayBuffer();if(o.byteLength>vt)throw new Error(`${a} exceeds size limit`);return new Uint8Array(o)}async function nc(e){var t;const a=e.fetchImpl??Qe,r=e.loadOsnap!==!1,n=e.fetchConcurrency??ta,o=await a(e.manifestUrl);if(!o.ok)throw new Error(`Failed to load package manifest (${o.status})`);const i=qe(await o.json()),s=Ls(i),l=new Map(s.layouts.map(p=>[p.btrId,p])),c=e.layoutFilter==null?null:e.layoutFilter instanceof Set?e.layoutFilter:new Set(e.layoutFilter),d=i.chunks.filter(p=>c==null||c.has(p.layoutBtrId)),u=aa(d,n,p=>na(a,ra(e.manifestUrl,p.href),"geometry chunk"));let m=0;for(;;){const p=await u.next();if(!p)break;const h=p.item,f=l.get(h.layoutBtrId);if(!f)throw new Error("Unknown layout for package chunk");const g=Nr(p.bytes);if(g.layoutBtrId!==h.layoutBtrId)throw new Error("Chunk layout mismatch");_r(f,g.lineBatches,g.meshBatches),m+=1,await((t=e.onChunk)==null?void 0:t.call(e,f,h,{loadedChunks:m,totalChunks:d.length,layoutBtrId:h.layoutBtrId,chunkId:h.id}))}if(r)for(const p of i.layouts){if(c!=null&&!c.has(p.btrId))continue;const h=l.get(p.btrId);h&&await Hs(i,e.manifestUrl,p.btrId,h,{fetchImpl:a})}return s}async function oc(e,t,a,r,n={}){var o;const i=n.fetchImpl??Qe,s=n.fetchConcurrency??ta,l=e.layouts.find(p=>p.btrId===a);if(!l)throw new Error(`Layout not found: ${a}`);const c=new Map(e.chunks.map(p=>[p.id,p])),d=l.chunkIds.map(p=>c.get(p)).filter(p=>p!=null),u=aa(d,s,p=>na(i,ra(t,p.href),"geometry chunk"));let m=0;for(;;){const p=await u.next();if(!p)break;const h=p.item,f=Nr(p.bytes);_r(r,f.lineBatches,f.meshBatches),m+=1,await((o=n.onChunk)==null?void 0:o.call(n,r,h,{loadedChunks:m,totalChunks:d.length,layoutBtrId:a,chunkId:h.id}))}}async function Hs(e,t,a,r,n={}){var o;if(r.osnap)return;const i=e.layouts.find(w=>w.btrId===a);if(!i)return;const s=i.osnapChunkIds;if(!s||s.length===0)return;const l=new Map((e.osnapChunks??[]).map(w=>[w.id,w])),c=s.map(w=>l.get(w)).filter(w=>w!=null);if(c.length===0)return;const d=n.fetchImpl??Qe,u=n.fetchConcurrency??ta,m=n.yieldFn??(()=>new Promise(w=>{setTimeout(w,0)})),p=c.reduce((w,z)=>w+z.primitiveCount,0),h=p>0?new Array(p):[];let f=0;const g=aa(c,u,w=>na(d,ra(t,w.href),"osnap chunk"));let A=0;for(;;){const w=await g.next();if(!w)break;const z=w.item,C=Vo(w.bytes).primitives;if(p>0)for(let b=0;b<C.length;b++)h[f++]=C[b];else for(const b of C)h.push(b);A+=1,await((o=n.onChunk)==null?void 0:o.call(n,{loadedChunks:A,totalChunks:c.length,layoutBtrId:a,chunkId:z.id})),await m()}p>0&&f!==p&&(h.length=f),r.osnap={primitives:h}}function _r(e,t,a){e.lineBatches.push(...t),e.meshBatches.push(...a)}const ne="drawing.acex.json",Vr=`./${ne}`,Ds=["manifest","acex"],Ye="https://acex-package.invalid/",Qe=(e,t)=>globalThis.fetch(e,t);function ic(e){return e.directoryPicker||e.webkitDirectory}function sc(e){const t=(e==null?void 0:e.hasDirectoryPicker)??typeof globalThis.showDirectoryPicker=="function",a=(e==null?void 0:e.isSecureContext)??(typeof globalThis.isSecureContext=="boolean"?globalThis.isSecureContext:!0);let r=e==null?void 0:e.supportsWebkitDirectoryAttribute;if(r==null&&(r=!1,typeof document<"u")){const n=document.createElement("input");n.type="file",r="webkitdirectory"in n||"directory"in n}return{directoryPicker:t&&a,webkitDirectory:r}}function Rs(e){var t;const a=e.startsWith("?")?e.slice(1):e;if(!a)return null;let r;try{r=new URLSearchParams(a)}catch{return null}for(const n of Ds){const o=(t=r.get(n))==null?void 0:t.trim();if(o)return o}return null}function lc(e){var t;const a=Rs(e.search??"");if(a)return{href:a,fromQuery:!0};const r=(t=e.configManifestUrl)==null?void 0:t.trim();return r?{href:r,fromQuery:!1}:{href:Vr,fromQuery:!1}}function Bs(e){return/^https?:\/\//i.test(e.trim())}function cc(e,t){const a=e.trim();if(!a)throw new Error("Missing manifest URL");if(Bs(a))try{return new URL(a).toString()}catch{throw new Error("Invalid manifest URL")}return Ts(a,t)}async function dc(e,t=Qe){let a;try{a=await t(e)}catch(n){return{ok:!1,reason:"network",error:n instanceof Error?n:new Error(String(n))}}if(a.status===404||a.status===410)return{ok:!1,reason:"not-found",error:new Error(`Failed to load package manifest (${a.status})`)};if(!a.ok)return{ok:!1,reason:"network",error:new Error(`Failed to load package manifest (${a.status})`)};let r;try{r=await a.json()}catch(n){return{ok:!1,reason:"invalid",error:n instanceof Error?n:new Error("Invalid package manifest JSON")}}try{return{ok:!0,manifest:qe(r)}}catch(n){return{ok:!1,reason:"invalid",error:n instanceof Error?n:new Error(String(n))}}}function Os(e,t){let a=e.replace(/\\/g,"/").replace(/^\/+/,"");if(t){const r=t.replace(/\\/g,"/").replace(/\/+$/,"");a===r?a="":a.startsWith(`${r}/`)&&(a=a.slice(r.length+1))}return a.replace(/^\.\//,"")}function js(e){const t=[...e].map(r=>r.replace(/\\/g,"/").replace(/^\/+/,"")).filter(Boolean);if(t.length===0)return null;const a=t[0].split("/")[0];return!a||a===ne||!t.every(r=>r.split("/")[0]===a)?null:t.some(r=>r.includes("/"))?a:null}function uc(e){const t=[...e],a=js(t.map(n=>n.relativePath)),r=new Map;for(const n of t){const o=Os(n.relativePath,a);!o||o.endsWith("/")||r.set(o,n.bytes)}return r}function mc(e,t){const a=(t==null?void 0:t.manifestFileName)??ne;if(!e.has(a))throw new Error(`Missing ${a} in selected folder`);const r=new URL(a,Ye).toString(),n=new URL(Ye).origin;return{manifestUrl:r,fetchImpl:async o=>{const i=new URL(String(o));if(i.origin!==n)return new Response(null,{status:404});const s=decodeURIComponent(i.pathname.replace(/^\/+/,"")),l=e.get(s);if(!l)return new Response(null,{status:404});if(s.endsWith(".json")){const d=new TextDecoder().decode(l);return new Response(d,{status:200,headers:{"Content-Type":"application/json"}})}const c=new Uint8Array(l.byteLength);return c.set(l),new Response(c,{status:200})}}}function pc(e){return e.has(ne)?ne:null}const Bt={layerOn:Mn,layerOff:In,chevronDown:lo},Ns=[90,45,30,23,18,10,5];function $s(){return`<div id="mlcad-polar-angles" role="group" data-i18n-attr="aria-label" data-i18n-key="settings.polarAngles" aria-label="Polar tracking angles" hidden>
          ${Ns.map(e=>`<button type="button" class="mlcad-tool-btn mlcad-settings-option-btn mlcad-polar-angle-btn" data-polar-ang="${e}" title="${e}°" aria-label="${e}°"><span class="mlcad-settings-option-indicator" aria-hidden="true"></span><span class="mlcad-settings-option-text">${e}°</span></button>`).join("")}
        </div>`}const _s=600,Vs=960,oa=`
  :root {
    --mlcad-ui-bg: rgba(24, 26, 30, 0.94);
    --mlcad-ui-bg-elevated: rgba(32, 35, 40, 0.98);
    --mlcad-ui-border: rgba(255, 255, 255, 0.1);
    --mlcad-ui-text: #e8eaed;
    --mlcad-ui-muted: #9aa0a6;
    --mlcad-accent: #08e8de;
    --mlcad-accent-active: #1a8cff;
    /* Shared measure-tool SVGs read --el-color-primary (Element Plus in cad-viewer). */
    --el-color-primary: var(--mlcad-accent);
    --ml-ui-accent: var(--mlcad-accent);
    --ml-ui-bg: var(--mlcad-ui-bg);
    --ml-ui-bg-elevated: var(--mlcad-ui-bg-elevated);
    --ml-ui-border: var(--mlcad-ui-border);
    --ml-ui-text: var(--mlcad-ui-text);
    --ml-ui-muted: var(--mlcad-ui-muted);
    --mlcad-tool-btn-active-border: rgba(26, 140, 255, 0.55);
    --mlcad-tool-btn-active-bg: rgba(26, 140, 255, 0.22);
    --mlcad-measure-accent: #08e8de;
    --mlcad-measure-accent-border: rgba(8, 232, 222, 0.45);
    --mlcad-measure-accent-fill: rgba(8, 232, 222, 0.2);
    --mlcad-markup-accent: #e53935;
    --mlcad-markup-accent-border: rgba(229, 57, 53, 0.45);
    --mlcad-shadow: 0 8px 28px rgba(0, 0, 0, 0.45);
    --mlcad-toolbar-width: 44px;
    --mlcad-drawer-width: 220px;
    --mlcad-drawer-gap: 8px;
    --mlcad-ui-inset: 12px;
    --mlcad-review-max-height: calc(100vh - 2 * var(--mlcad-ui-inset) - 48px);
    --mlcad-z-chrome: 7;
    /* Drawing overlays stay under chrome, session panel, and modal dialogs. */
    --mlcad-z-measure: 1;
    --mlcad-z-markup: 2;
    --ml-ui-grip-size: 8px;
    --ml-ui-grip-normal: #0080ff;
    --ml-ui-grip-hot: #ff0000;
  }
  html, body {
    margin: 0; height: 100%; overflow: hidden;
    background: #121418;
    font-family: "Segoe UI", system-ui, -apple-system, sans-serif;
    color: var(--mlcad-ui-text);
  }
  #mlcad-root { position: relative; width: 100%; height: 100%; }
  #mlcad-canvas-host {
    position: absolute;
    inset: 0;
    min-width: 0;
    min-height: 0;
    -webkit-touch-callout: none;
    -webkit-tap-highlight-color: transparent;
  }
  #mlcad-canvas-host canvas,
  #mlcad-root > canvas {
    display: block;
    width: 100%;
    height: 100%;
    touch-action: none;
    -webkit-user-select: none;
    user-select: none;
    -webkit-touch-callout: none;
    -webkit-tap-highlight-color: transparent;
  }

  .mlcad-snap-loupe {
    position: absolute;
    left: 8px;
    top: 8px;
    width: 128px;
    height: 128px;
    box-sizing: border-box;
    border: 2px solid var(--mlcad-measure-accent, #08e8de);
    border-radius: 2px;
    pointer-events: none;
    z-index: 8;
    overflow: hidden;
    box-shadow: var(--mlcad-shadow);
  }

  html[data-mlcad-theme="light"] {
    --mlcad-ui-bg: rgba(255, 255, 255, 0.94);
    --mlcad-ui-bg-elevated: rgba(248, 249, 250, 0.98);
    --mlcad-ui-border: rgba(0, 0, 0, 0.12);
    --mlcad-ui-text: #202124;
    --mlcad-ui-muted: #5f6368;
    --mlcad-shadow: 0 8px 28px rgba(0, 0, 0, 0.18);
  }
  html[data-mlcad-theme="light"],
  html[data-mlcad-theme="light"] body {
    background: #e8eaed;
    color: var(--mlcad-ui-text);
  }

  #mlcad-sidebar {
    position: absolute;
    left: var(--mlcad-ui-inset);
    top: 50%;
    z-index: var(--mlcad-z-chrome);
    transform: translateY(-50%);
    display: flex;
    align-items: flex-start;
    gap: var(--mlcad-drawer-gap);
    max-width: calc(100% - 2 * var(--mlcad-ui-inset));
    box-sizing: border-box;
    pointer-events: none;
  }
  #mlcad-sidebar > * { pointer-events: auto; }

  #mlcad-toolbar {
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    padding: 0;
    background: transparent;
    border: none;
    border-radius: 0;
    box-shadow: none;
    backdrop-filter: none;
  }
  /* AcUiToolbar chrome replaces the old .mlcad-tool-btn shell styles. */
  #mlcad-toolbar .ml-ex-ui-toolbar {
    position: relative !important;
    inset: auto !important;
    left: auto !important;
    top: auto !important;
    right: auto !important;
    bottom: auto !important;
    transform: none !important;
    background: var(--mlcad-ui-bg);
    border: 1px solid var(--mlcad-ui-border);
    border-radius: 8px;
    box-shadow: var(--mlcad-shadow);
    backdrop-filter: blur(12px);
    --ml-ex-ui-toolbar-btn-size: var(--mlcad-toolbar-width);
  }
  #mlcad-toolbar .ml-ex-ui-toolbar.is-left,
  #mlcad-toolbar .ml-ex-ui-toolbar.is-right {
    flex-direction: column;
  }
  #mlcad-toolbar .ml-ex-ui-toolbar.is-bottom,
  #mlcad-toolbar .ml-ex-ui-toolbar.is-top {
    flex-direction: row;
    width: 100%;
    box-sizing: border-box;
  }
  #mlcad-sidebar > #mlcad-toolbar.ml-ex-ui-toolbar-host {
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }
  /* Phone strips mount on #mlcad-root so they can sit above the bottom bar. */
  #mlcad-root > .ml-ex-ui-subtoolbar {
    z-index: calc(var(--mlcad-z-chrome) + 1);
  }
  .mlcad-tool-btn {
    position: relative;
    display: flex; flex-direction: column; align-items: center; justify-content: center;
    gap: 2px;
    width: var(--mlcad-toolbar-width); height: var(--mlcad-toolbar-width);
    margin: 0; padding: 0;
    border: 1px solid transparent;
    border-radius: 6px;
    background: transparent;
    color: var(--mlcad-ui-text);
    cursor: pointer;
    transition: background 0.15s ease, border-color 0.15s ease, color 0.15s ease;
  }
  .mlcad-tool-btn:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: var(--mlcad-ui-border);
  }
  .mlcad-tool-btn.active,
  .mlcad-tool-btn.is-menu-open {
    background: var(--mlcad-tool-btn-active-bg);
    border-color: var(--mlcad-tool-btn-active-border);
    color: #fff;
  }
  .mlcad-tool-btn-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    flex-shrink: 0;
  }
  .mlcad-tool-btn-icon svg,
  .mlcad-tool-btn svg {
    width: 20px; height: 20px; display: block; flex-shrink: 0;
  }
  .mlcad-tool-btn-label {
    display: none;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 10px;
    line-height: 1.2;
    text-align: center;
    pointer-events: none;
  }
  /* Settings is always on the bar (desktop/pad/phone); language lives under it. */
  /* Flyout mark: opaque corner triangle (cad-simple-ui-plugin is-left style). */
  .mlcad-tool-btn.has-children::after {
    content: '';
    position: absolute;
    right: 1px;
    bottom: 1px;
    width: 6px;
    height: 6px;
    background: currentColor;
    clip-path: polygon(100% 100%, 0 100%, 100% 0);
    pointer-events: none;
  }
  .mlcad-dropdown {
    position: fixed;
    z-index: 40;
    min-width: 180px;
    max-width: min(280px, calc(100vw - 24px));
    max-height: min(360px, calc(100vh - 24px));
    overflow-y: auto;
    padding: 4px;
    background: var(--mlcad-ui-bg-elevated);
    border: 1px solid var(--mlcad-ui-border);
    border-radius: 8px;
    box-shadow: var(--mlcad-shadow);
    backdrop-filter: blur(12px);
  }
  .mlcad-dropdown-item {
    display: flex;
    align-items: center;
    gap: 8px;
    width: 100%;
    box-sizing: border-box;
    margin: 0;
    padding: 6px 8px;
    border: none;
    border-radius: 5px;
    background: transparent;
    color: var(--mlcad-ui-text);
    font-size: 12px;
    font-weight: 500;
    text-align: left;
    cursor: pointer;
  }
  .mlcad-dropdown-item:hover {
    background: rgba(255, 255, 255, 0.08);
  }
  .mlcad-dropdown-item.active,
  .mlcad-dropdown-item.is-toggled {
    background: rgba(26, 140, 255, 0.22);
    color: #fff;
  }
  .mlcad-dropdown-icon {
    display: inline-flex;
    width: 18px;
    height: 18px;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
  }
  .mlcad-dropdown-icon svg {
    width: 18px;
    height: 18px;
    display: block;
  }
  .mlcad-dropdown-label {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .mlcad-dropdown-separator {
    height: 1px;
    margin: 4px 6px;
    background: var(--mlcad-ui-border);
  }
  #mlcad-toolbar-toggle {
    height: calc(var(--mlcad-toolbar-width) / 2);
    margin-top: -4px;
    margin-bottom: -4px;
    border-radius: 4px;
  }
  #mlcad-toolbar-toggle svg {
    width: calc(var(--mlcad-toolbar-width) / 2);
    height: calc(var(--mlcad-toolbar-width) / 2);
  }
  .mlcad-tool-separator {
    height: 1px;
    margin: 4px 8px;
    background: var(--mlcad-ui-border);
  }
  .mlcad-locale-option-badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    font-size: 12px;
    font-weight: 700;
    line-height: 1;
    letter-spacing: -0.04em;
    user-select: none;
  }
  #mlcad-zoom-window-rect,
  #mlcad-selection-rect {
    position: fixed;
    z-index: 25;
    box-sizing: border-box;
    pointer-events: none;
    border: 1px dashed var(--mlcad-accent, #08e8de);
    background: rgba(8, 232, 222, 0.12);
  }
  #mlcad-zoom-window-rect[hidden],
  #mlcad-selection-rect[hidden] { display: none; }
  #mlcad-selection-rect[data-mode='window'] {
    border-style: solid;
    border-color: #00ff5a;
    background: rgba(64, 158, 255, 0.12);
  }
  #mlcad-selection-rect[data-mode='crossing'] {
    border-style: dashed;
    border-color: #00d1ff;
    background: rgba(64, 158, 255, 0.12);
  }

  #mlcad-layer-drawer,
  #mlcad-review-drawer,
  #mlcad-measure-drawer {
    flex-shrink: 1;
    min-width: 0;
    width: var(--mlcad-drawer-width);
    max-height: min(420px, var(--mlcad-review-max-height));
    display: flex; flex-direction: column;
    background: var(--mlcad-ui-bg-elevated);
    border: 1px solid var(--mlcad-ui-border);
    border-radius: 8px;
    box-shadow: var(--mlcad-shadow);
    backdrop-filter: blur(12px);
    overflow: hidden;
    box-sizing: border-box;
  }
  #mlcad-markup-strip-wrap {
    position: relative;
  }
  #mlcad-review-drawer {
    position: absolute;
    left: 100%;
    top: 0;
    margin-left: var(--mlcad-drawer-gap);
    width: min(320px, calc(100vw - 2 * var(--mlcad-ui-inset) - var(--mlcad-toolbar-width) - var(--mlcad-drawer-gap)));
    height: 100%;
    max-height: var(--mlcad-review-max-height);
  }
  #mlcad-layer-drawer[hidden],
  #mlcad-review-drawer[hidden],
  #mlcad-measure-drawer[hidden] { display: none; }

  .mlcad-drawer-header {
    display: flex; align-items: center; justify-content: space-between;
    gap: 6px; padding: 8px 10px;
    border-bottom: 1px solid var(--mlcad-ui-border);
    font-size: 13px; font-weight: 600;
  }
  .mlcad-drawer-close {
    width: 28px; height: 28px; padding: 0;
    border: none; border-radius: 4px;
    background: transparent; color: var(--mlcad-ui-muted);
    cursor: pointer; font-size: 18px; line-height: 1;
  }
  .mlcad-drawer-close:hover {
    background: rgba(255, 255, 255, 0.08); color: var(--mlcad-ui-text);
  }

  .mlcad-drawer-sheet-chrome {
    display: none;
    position: relative;
  }
  .mlcad-drawer-grabber {
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 20px;
    cursor: ns-resize;
    touch-action: none;
  }
  .mlcad-drawer-grabber::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 36px;
    height: 4px;
    border-radius: 2px;
    background: var(--mlcad-ui-muted);
    opacity: 0.75;
  }
  .mlcad-drawer-sheet-close {
    width: 36px; height: 28px; padding: 0;
    border: none; background: transparent;
    color: var(--mlcad-ui-muted); cursor: pointer;
    display: inline-flex; align-items: center; justify-content: center;
    flex: 0 0 auto;
    position: relative;
    z-index: 1;
  }
  .mlcad-drawer-sheet-close:hover { color: var(--mlcad-ui-text); }
  .mlcad-drawer-sheet-close svg { width: 18px; height: 18px; }

  .mlcad-layer-actions {
    display: flex; gap: 4px; padding: 6px 8px;
    border-bottom: 1px solid var(--mlcad-ui-border);
  }
  .mlcad-layer-action-btn {
    flex: 1; display: inline-flex; align-items: center; justify-content: center; gap: 6px;
    min-height: 30px; padding: 4px 8px;
    border: 1px solid var(--mlcad-ui-border);
    border-radius: 5px;
    background: rgba(255, 255, 255, 0.04);
    color: var(--mlcad-ui-text);
    font-size: 12px; cursor: pointer;
  }
  .mlcad-layer-action-btn:hover { background: rgba(255, 255, 255, 0.1); }
  .mlcad-layer-action-btn svg { width: 14px; height: 14px; flex-shrink: 0; }

  #mlcad-layer-list {
    flex: 1; overflow: auto; padding: 4px 0;
  }
  .mlcad-layer-item {
    display: grid;
    grid-template-columns: auto auto 1fr auto;
    align-items: center; gap: 6px;
    padding: 5px 8px;
    font-size: 12px; cursor: pointer;
  }
  .mlcad-layer-item:hover { background: rgba(255, 255, 255, 0.05); }
  .mlcad-layer-item input { margin: 0; cursor: pointer; }
  .mlcad-layer-swatch {
    width: 12px; height: 12px; border-radius: 2px;
    border: 1px solid rgba(255, 255, 255, 0.28);
  }
  .mlcad-layer-name {
    overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
  }
  .mlcad-layer-zoom {
    display: flex; align-items: center; justify-content: center;
    width: 22px; height: 22px; padding: 0;
    border: 1px solid transparent; border-radius: 4px;
    background: transparent; color: var(--mlcad-ui-muted);
    cursor: pointer;
  }
  .mlcad-layer-zoom svg {
    width: 14px; height: 14px; display: block;
  }
  .mlcad-layer-zoom:hover:not(:disabled) {
    color: var(--mlcad-accent);
    border-color: var(--mlcad-ui-border);
    background: rgba(255, 255, 255, 0.06);
  }
  .mlcad-layer-zoom:disabled { opacity: 0.35; cursor: not-allowed; }

  .mlcad-review-toolbar {
    display: flex; gap: 6px; align-items: center;
    padding: 6px 8px;
    border-bottom: 1px solid var(--mlcad-ui-border);
  }
  .mlcad-review-search {
    flex: 1; min-width: 0;
    box-sizing: border-box;
    padding: 4px 8px;
    border: 1px solid var(--mlcad-ui-border);
    border-radius: 4px;
    background: rgba(255, 255, 255, 0.04);
    color: var(--mlcad-ui-text);
    font-size: 12px;
  }
  .mlcad-review-clear,
  .mlcad-review-zoom,
  .mlcad-review-delete {
    flex: 0 0 auto;
    padding: 4px 8px;
    border: 1px solid var(--mlcad-ui-border);
    border-radius: 4px;
    background: rgba(255, 255, 255, 0.04);
    color: var(--mlcad-ui-text);
    font-size: 12px; cursor: pointer;
  }
  .mlcad-review-clear:disabled { opacity: 0.5; cursor: default; }
  .mlcad-review-delete { color: #f56c6c; border-color: rgba(245, 108, 108, 0.55); }
  .mlcad-review-table-wrap { flex: 1 1 auto; min-height: 0; overflow: auto; }
  .mlcad-review-table {
    width: 100%; border-collapse: collapse; font-size: 12px;
  }
  .mlcad-review-table th,
  .mlcad-review-table td {
    padding: 4px 8px; text-align: left;
    border-bottom: 1px solid var(--mlcad-ui-border);
    overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
    max-width: 90px;
  }
  .mlcad-review-table tr.is-selected td {
    background: rgba(26, 140, 255, 0.22);
  }
  .mlcad-review-table tr { cursor: pointer; }
  .mlcad-review-empty td { text-align: center; color: var(--mlcad-ui-muted); cursor: default; }
  .mlcad-review-detail {
    flex: 0 1 auto;
    max-height: 52%;
    overflow: auto;
    border-top: 1px solid var(--mlcad-ui-border);
    padding: 8px 10px 14px;
    display: flex; flex-direction: column; gap: 6px;
    box-sizing: border-box;
  }
  .mlcad-review-detail[hidden] { display: none; }
  .mlcad-review-detail-header {
    display: flex; align-items: center; justify-content: space-between; gap: 4px;
  }
  .mlcad-review-detail-title { font-weight: 600; font-size: 12px; }
  .mlcad-review-detail-close {
    flex-shrink: 0;
    width: 24px; height: 24px; padding: 0;
    border: none; border-radius: 4px;
    background: transparent; color: var(--mlcad-ui-muted);
    cursor: pointer; font-size: 16px; line-height: 1;
  }
  .mlcad-review-detail-close:hover {
    background: rgba(255, 255, 255, 0.08); color: var(--mlcad-ui-text);
  }
  .mlcad-review-field { display: flex; flex-direction: column; gap: 2px; }
  .mlcad-review-field-label { font-size: 11px; color: var(--mlcad-ui-muted); }
  .mlcad-review-status,
  .mlcad-review-author,
  .mlcad-review-text,
  .mlcad-review-comment {
    box-sizing: border-box; width: 100%;
    padding: 4px 6px;
    border: 1px solid var(--mlcad-ui-border);
    border-radius: 4px;
    background: rgba(255, 255, 255, 0.04);
    color: var(--mlcad-ui-text);
    font-size: 12px;
  }
  .mlcad-review-author:disabled { opacity: 0.7; }
  .mlcad-review-comment { min-height: 44px; resize: vertical; }
  .mlcad-review-detail-actions { display: flex; gap: 6px; margin-top: 2px; }

  .mlcad-measure-toolbar {
    display: flex; gap: 8px; align-items: center;
    padding: 8px 10px; border-bottom: 1px solid var(--mlcad-ui-border);
  }
  .mlcad-measure-filter {
    flex: 1 1 auto; min-width: 0;
    display: flex; overflow: hidden;
    border: 1px solid var(--mlcad-ui-border); border-radius: 4px;
  }
  .mlcad-measure-filter-btn {
    flex: 1 1 0; min-width: 0; padding: 4px 2px;
    border: none; border-right: 1px solid var(--mlcad-ui-border);
    background: transparent; color: var(--mlcad-ui-text);
    font: inherit; font-size: 11px; cursor: pointer;
    white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
  }
  .mlcad-measure-filter-btn:last-child { border-right: none; }
  .mlcad-measure-filter-btn:hover:not(.is-active) {
    background: rgba(255, 255, 255, 0.06);
  }
  .mlcad-measure-filter-btn.is-active {
    background: rgba(8, 232, 222, 0.18);
  }
  .mlcad-measure-clear,
  .mlcad-measure-row-delete {
    border: 1px solid var(--mlcad-ui-border); border-radius: 4px;
    background: rgba(255, 255, 255, 0.04); color: var(--mlcad-ui-text);
    padding: 4px 8px; font-size: 12px; cursor: pointer;
  }
  .mlcad-measure-clear:disabled { opacity: 0.5; cursor: default; }
  .mlcad-measure-row-delete { color: #f56c6c; border-color: rgba(245, 108, 108, 0.55); padding: 2px 6px; font-size: 11px; }
  .mlcad-measure-table-wrap { flex: 1 1 auto; min-height: 0; overflow: auto; }
  .mlcad-measure-table { width: 100%; border-collapse: collapse; table-layout: fixed; }
  .mlcad-measure-table th,
  .mlcad-measure-table td {
    padding: 6px 8px; text-align: left; font-size: 12px;
    border-bottom: 1px solid var(--mlcad-ui-border);
    overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
  }
  .mlcad-measure-table tr.is-selected td {
    background: rgba(8, 232, 222, 0.12);
  }
  .mlcad-measure-table tr { cursor: pointer; }
  .mlcad-measure-empty td { text-align: center; color: var(--mlcad-ui-muted); cursor: default; }
  #mlcad-measure-strip-wrap { position: relative; }
  #mlcad-measure-drawer {
    position: absolute;
    left: 100%;
    top: 0;
    margin-left: var(--mlcad-drawer-gap);
    width: min(320px, calc(100vw - 2 * var(--mlcad-ui-inset) - var(--mlcad-toolbar-width) - var(--mlcad-drawer-gap)));
    height: 100%;
    max-height: var(--mlcad-review-max-height);
  }

  /*
   * Top canvas chrome: message bar + expiry share one row. Shortcut toolbar
   * and snap loupe stack below (see AcExHtmlTopChrome / ShortCutToolbar /
   * SnapLoupeMath).
   */
  #mlcad-top-chrome {
    position: absolute;
    left: 12px;
    right: 12px;
    top: 10px;
    z-index: var(--mlcad-z-chrome);
    display: flex;
    align-items: flex-start;
    gap: 8px;
    box-sizing: border-box;
    pointer-events: none;
  }
  #mlcad-status-bar {
    position: relative;
    flex: 1 1 auto;
    min-width: 0;
    /* Block layout so text-overflow: ellipsis works on direct textContent. */
    display: block;
    min-height: 28px;
    line-height: 28px;
    padding: 0 12px;
    border: 1px solid rgba(0, 0, 0, 0.12);
    border-radius: 6px;
    background: var(--mlcad-accent);
    color: #0b1f1e;
    font-size: 12px;
    font-weight: 600;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.35);
    backdrop-filter: blur(10px);
    pointer-events: none;
    opacity: 1;
    transform: translateY(0);
    transition: opacity 0.18s ease, transform 0.18s ease;
    /* Shrink before the expiry badge; clip with an ellipsis when too narrow. */
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  #mlcad-status-bar:empty,
  #mlcad-status-bar[hidden] {
    display: none;
    opacity: 0;
    transform: translateY(-6px);
  }

  /* Session panel DOM/CSS comes from shared AcUiMobileSessionPanel. */
  #mlcad-root {
    --ml-mobile-cmd-collapsed-height: var(--mlcad-toolbar-phone-height, 56px);
  }
  .ml-mobile-cmd-panel {
    z-index: calc(var(--mlcad-z-chrome) + 3);
  }

  #mlcad-sidebar.mlcad-sidebar--collapsed #mlcad-snap-strip-wrap,
  #mlcad-sidebar.mlcad-sidebar--collapsed #mlcad-measure-strip-wrap,
  #mlcad-sidebar.mlcad-sidebar--collapsed #mlcad-markup-strip-wrap,
  #mlcad-sidebar.mlcad-sidebar--collapsed #mlcad-zoom-strip-wrap,
  #mlcad-sidebar.mlcad-sidebar--collapsed #mlcad-settings-strip-wrap,
  #mlcad-sidebar.mlcad-sidebar--collapsed #mlcad-locale-strip-wrap,
  #mlcad-sidebar.mlcad-sidebar--collapsed #mlcad-layer-drawer,
  #mlcad-sidebar.mlcad-sidebar--collapsed #mlcad-review-drawer,
  #mlcad-sidebar.mlcad-sidebar--collapsed #mlcad-measure-drawer {
    display: none !important;
  }
  #mlcad-sidebar.mlcad-sidebar--collapsed #mlcad-toolbar .mlcad-tool-btn:not(#mlcad-toolbar-toggle) {
    display: none;
  }
  #mlcad-sidebar.mlcad-sidebar--collapsed #mlcad-toolbar .mlcad-tool-separator {
    display: none;
  }

  #mlcad-snap-strip-wrap,
  #mlcad-measure-strip-wrap,
  #mlcad-markup-strip-wrap,
  #mlcad-zoom-strip-wrap,
  #mlcad-settings-strip-wrap,
  #mlcad-locale-strip-wrap {
    flex-shrink: 0;
    min-width: 0;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: var(--mlcad-drawer-gap);
  }
  #mlcad-snap-strip-wrap[hidden],
  #mlcad-measure-strip-wrap[hidden],
  #mlcad-markup-strip-wrap[hidden],
  #mlcad-zoom-strip-wrap[hidden],
  #mlcad-settings-strip-wrap[hidden],
  #mlcad-locale-strip-wrap[hidden] { display: none; }

  #mlcad-snap-strip,
  #mlcad-measure-strip,
  #mlcad-markup-strip,
  #mlcad-zoom-strip,
  #mlcad-settings-strip,
  #mlcad-locale-strip {
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 4px;
    padding: 6px;
    background: var(--mlcad-ui-bg);
    border: 1px solid var(--mlcad-ui-border);
    border-radius: 8px;
    box-shadow: var(--mlcad-shadow);
    backdrop-filter: blur(12px);
  }
  /* Pad/desktop: same button size as the parent bar so a vertical strip
     matches its width and a horizontal strip matches its height. */
  #mlcad-snap-strip .mlcad-tool-btn,
  #mlcad-measure-strip .mlcad-tool-btn,
  #mlcad-markup-strip .mlcad-tool-btn,
  #mlcad-zoom-strip .mlcad-tool-btn,
  #mlcad-settings-strip .mlcad-tool-btn,
  #mlcad-locale-strip .mlcad-tool-btn {
    width: var(--mlcad-toolbar-width);
    height: var(--mlcad-toolbar-width);
  }
  #mlcad-measure-strip .mlcad-tool-separator,
  #mlcad-markup-strip .mlcad-tool-separator {
    margin: 2px 4px;
  }

  #mlcad-polar-angles {
    flex-shrink: 0;
    display: inline-flex;
    flex-direction: column;
    align-items: stretch;
    gap: 4px;
    padding: 6px;
    max-width: min(280px, calc(100vw - 2 * var(--mlcad-ui-inset) - 3 * var(--mlcad-toolbar-width) - 3 * var(--mlcad-drawer-gap)));
    background: var(--mlcad-ui-bg);
    border: 1px solid var(--mlcad-ui-border);
    border-radius: 8px;
    box-shadow: var(--mlcad-shadow);
    backdrop-filter: blur(12px);
  }
  #mlcad-polar-angles[hidden] { display: none; }

  .mlcad-color-input {
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
    pointer-events: none;
  }
  .mlcad-settings-option-btn {
    width: 100%;
    box-sizing: border-box;
    height: var(--mlcad-toolbar-width);
    justify-content: flex-start;
    gap: 8px;
    padding: 0 10px;
    font-size: 11px;
    font-weight: 500;
  }
  .mlcad-settings-option-indicator {
    flex-shrink: 0;
    width: 10px;
    height: 10px;
    border: 1px solid var(--mlcad-ui-muted);
    border-radius: 2px;
    box-sizing: border-box;
    transition: background 0.15s ease, border-color 0.15s ease;
  }
  .mlcad-settings-option-btn.active .mlcad-settings-option-indicator {
    background: var(--mlcad-accent);
    border-color: var(--mlcad-accent);
  }
  .mlcad-settings-option-text {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    pointer-events: none;
    line-height: 1.2;
  }

  #mlcad-measure-overlays {
    position: absolute;
    inset: 0;
    pointer-events: none;
    z-index: var(--mlcad-z-measure);
    overflow: hidden;
  }
  .mlcad-measure-canvas {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
    pointer-events: none;
  }
  .mlcad-measure-dot {
    position: absolute;
    z-index: 3;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: var(--mlcad-measure-accent);
    border: 2px solid rgba(255, 255, 255, 0.9);
    box-sizing: border-box;
    transform: translate(-50%, -50%);
    visibility: hidden;
    pointer-events: none;
    cursor: grab;
  }
  .mlcad-measure-dot.mlcad-measure-selected {
    visibility: visible;
    pointer-events: auto;
    box-shadow:
      0 0 0 2px rgba(255, 213, 79, 0.75),
      0 0 10px rgba(255, 213, 79, 0.95),
      0 0 18px rgba(255, 213, 79, 0.55);
  }
  #mlcad-measure-overlays.mlcad-grip-dragging .mlcad-measure-dot {
    visibility: hidden !important;
    pointer-events: none !important;
  }
  .mlcad-measure-badge {
    position: absolute;
    z-index: 2;
    padding: 3px 10px;
    border-radius: 14px;
    background: var(--mlcad-ui-bg-elevated);
    border: 1px solid var(--mlcad-measure-accent-border);
    color: var(--mlcad-measure-accent);
    font-size: 12px;
    font-weight: 600;
    white-space: nowrap;
    transform: translate(-50%, -50%);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.35);
    pointer-events: none;
  }
  .mlcad-measure-badge--coordinate {
    transform: translate(-50%, calc(-50% - 16px));
  }
  .mlcad-measure-badge.mlcad-measure-selected {
    outline: 2px solid rgba(255, 213, 79, 0.85);
    outline-offset: 1px;
    box-shadow:
      0 0 0 2px rgba(255, 213, 79, 0.4),
      0 0 12px rgba(255, 213, 79, 0.75),
      0 2px 8px rgba(0, 0, 0, 0.35);
  }
  .mlcad-measure-canvas.mlcad-measure-selected {
    filter:
      drop-shadow(0 0 1.5px #ffd54f)
      drop-shadow(0 0 4px rgba(255, 213, 79, 0.95))
      drop-shadow(0 0 8px rgba(255, 213, 79, 0.55));
  }

  #mlcad-markup-overlays {
    position: absolute;
    inset: 0;
    pointer-events: none;
    z-index: var(--mlcad-z-markup);
    overflow: hidden;
  }
  .mlcad-markup-canvas {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
    pointer-events: none;
  }
  .mlcad-markup-badge,
  .mlcad-markup-stamp {
    position: absolute;
    z-index: 2;
    padding: 3px 10px;
    border-radius: 14px;
    background: var(--mlcad-ui-bg-elevated);
    border: 1px solid var(--mlcad-markup-accent-border);
    color: var(--mlcad-markup-accent);
    font-size: 12px;
    font-weight: 600;
    white-space: pre-wrap;
    max-width: 240px;
    min-width: 80px;
    min-height: 1.75em;
    box-sizing: border-box;
    transform: translate(-50%, -50%);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.35);
    pointer-events: auto;
    cursor: grab;
    touch-action: none;
    user-select: none;
  }
  .mlcad-markup-stamp {
    border-radius: 4px;
    border-width: 2px;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    font-size: 11px;
    white-space: nowrap;
    min-width: 0;
  }
  .mlcad-markup-preview-dot {
    position: absolute;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: var(--mlcad-markup-accent);
    border: 2px solid rgba(255, 255, 255, 0.9);
    box-sizing: border-box;
    transform: translate(-50%, -50%);
    pointer-events: none;
  }
  .mlcad-markup-dot {
    position: absolute;
    z-index: 3;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: var(--mlcad-markup-accent);
    border: 2px solid rgba(255, 255, 255, 0.9);
    box-sizing: border-box;
    transform: translate(-50%, -50%);
    visibility: hidden;
    pointer-events: none;
    cursor: grab;
  }
  .mlcad-markup-dot.mlcad-markup-selected {
    visibility: visible;
    pointer-events: auto;
    box-shadow:
      0 0 0 2px rgba(255, 213, 79, 0.75),
      0 0 10px rgba(255, 213, 79, 0.95),
      0 0 18px rgba(255, 213, 79, 0.55);
  }
  #mlcad-markup-overlays.mlcad-grip-dragging .mlcad-markup-dot {
    visibility: hidden !important;
    pointer-events: none !important;
  }
  .mlcad-markup-badge.mlcad-markup-selected,
  .mlcad-markup-stamp.mlcad-markup-selected {
    outline: 2px solid rgba(255, 213, 79, 0.85);
    outline-offset: 1px;
    box-shadow:
      0 0 0 2px rgba(255, 213, 79, 0.4),
      0 0 12px rgba(255, 213, 79, 0.75),
      0 2px 8px rgba(0, 0, 0, 0.35);
  }
  .mlcad-markup-canvas.mlcad-markup-selected {
    filter:
      drop-shadow(0 0 1.5px #ffd54f)
      drop-shadow(0 0 4px rgba(255, 213, 79, 0.95))
      drop-shadow(0 0 8px rgba(255, 213, 79, 0.55));
  }

  #mlcad-loading {
    position: fixed; inset: 0; z-index: 100;
    display: flex; align-items: center; justify-content: center;
    background: #121418;
    transition: opacity 0.35s ease, visibility 0.35s ease;
  }
  #mlcad-loading.mlcad-loading--done {
    opacity: 0; visibility: hidden; pointer-events: none;
  }
  #mlcad-loading.mlcad-loading--gate .mlcad-loading-spinner {
    display: none;
  }
  .mlcad-loading-spinner {
    width: 48px; height: 48px; box-sizing: border-box;
    border: 3px solid rgba(255, 255, 255, 0.12);
    border-top-color: var(--mlcad-accent);
    border-radius: 50%;
    animation: mlcad-spin 0.85s linear infinite;
  }
  @keyframes mlcad-spin { to { transform: rotate(360deg); } }

  #mlcad-access-gate {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 360px;
    padding: 0 20px;
    box-sizing: border-box;
  }
  #mlcad-access-gate[hidden] {
    display: none !important;
  }
  .mlcad-access-card {
    width: 100%;
    padding: 24px 20px;
    border-radius: 10px;
    border: 1px solid var(--mlcad-ui-border);
    background: var(--mlcad-ui-bg-elevated);
    box-shadow: var(--mlcad-shadow);
    box-sizing: border-box;
  }
  .mlcad-access-title {
    margin: 0 0 8px;
    font-size: 16px;
    font-weight: 600;
    color: var(--mlcad-ui-text);
    text-align: center;
  }
  .mlcad-access-hint {
    margin: 0 0 16px;
    font-size: 13px;
    line-height: 1.45;
    color: var(--mlcad-ui-muted);
    text-align: center;
  }
  .mlcad-access-expiry {
    margin: -8px 0 16px;
    font-size: 12px;
    line-height: 1.4;
    color: var(--mlcad-ui-muted);
    text-align: center;
  }
  .mlcad-access-expiry[hidden] {
    display: none;
  }
  .mlcad-access-expiry.mlcad-expiry-countdown {
    width: fit-content;
    max-width: 100%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 16px;
    padding: 6px 10px;
    border-radius: 6px;
    box-sizing: border-box;
  }
  .mlcad-access-field {
    display: flex;
    gap: 8px;
    margin-bottom: 12px;
  }
  .mlcad-access-field input {
    flex: 1 1 auto;
    min-width: 0;
    height: 36px;
    padding: 0 12px;
    border-radius: 6px;
    border: 1px solid var(--mlcad-ui-border);
    background: rgba(0, 0, 0, 0.25);
    color: var(--mlcad-ui-text);
    font: inherit;
    box-sizing: border-box;
  }
  .mlcad-access-field input:focus {
    outline: none;
    border-color: rgba(26, 140, 255, 0.65);
    box-shadow: 0 0 0 2px rgba(26, 140, 255, 0.2);
  }
  .mlcad-access-submit {
    width: 100%;
    height: 36px;
    border: 1px solid rgba(26, 140, 255, 0.55);
    border-radius: 6px;
    background: rgba(26, 140, 255, 0.22);
    color: #fff;
    font: inherit;
    font-weight: 600;
    cursor: pointer;
  }
  .mlcad-access-submit:hover {
    background: rgba(26, 140, 255, 0.32);
  }
  .mlcad-access-error {
    margin: 0;
    font-size: 12px;
    line-height: 1.4;
    color: #ff8a80;
    text-align: center;
  }
  .mlcad-access-error[hidden] {
    display: none;
  }
  .mlcad-access-gate--locked .mlcad-access-submit:disabled,
  .mlcad-access-gate--locked .mlcad-access-field input:disabled {
    opacity: 0.55;
    cursor: not-allowed;
  }
  .mlcad-access-field[hidden],
  .mlcad-access-submit[hidden],
  .mlcad-access-gate--expired .mlcad-access-field,
  .mlcad-access-gate--expired .mlcad-access-submit,
  .mlcad-access-gate--expired #mlcad-access-expiry,
  .mlcad-access-gate--expired #mlcad-access-error {
    display: none !important;
  }
  .mlcad-expiry-badge {
    position: relative;
    flex: 0 0 auto;
    margin-left: auto;
    max-width: none;
    padding: 8px 12px;
    border-radius: 6px;
    border: 1px solid var(--mlcad-ui-border);
    background: var(--mlcad-ui-bg-elevated);
    box-shadow: var(--mlcad-shadow);
    color: var(--mlcad-ui-text);
    font-size: 12px;
    line-height: 1.4;
    white-space: nowrap;
    pointer-events: none;
    box-sizing: border-box;
  }
  .mlcad-expiry-badge[hidden] {
    display: none !important;
  }
  .mlcad-expiry-countdown {
    border-color: rgba(255, 152, 0, 0.55);
    background: rgba(255, 152, 0, 0.16);
    color: #ffcc80;
    font-variant-numeric: tabular-nums;
  }

  @media (max-width: ${_s}px) {
    :root {
      --mlcad-drawer-width: min(280px, calc(100vw - 16px));
      --mlcad-ui-inset: 0px;
      --mlcad-toolbar-phone-height: 56px;
      /* Portrait min width (narrower than simple-ui's height - 4). */
      --mlcad-toolbar-phone-btn-size: max(
        24px,
        calc(var(--mlcad-toolbar-phone-height) - 16px)
      );
    }
    #mlcad-root {
      display: flex;
      flex-direction: column;
    }
    #mlcad-canvas-host {
      position: relative;
      flex: 1 1 auto;
      inset: auto;
      width: 100%;
      min-height: 0;
    }
    #mlcad-sidebar {
      position: relative;
      left: auto;
      top: auto;
      right: auto;
      transform: none;
      width: 100%;
      max-width: none;
      flex: 0 0 auto;
      flex-direction: column-reverse;
      align-items: stretch;
      gap: 0;
      overflow: visible;
    }
    #mlcad-toolbar {
      flex-direction: row;
      width: 100%;
      box-sizing: border-box;
      gap: 0;
      padding: 4px 0;
      border-radius: 0;
      border-left: none;
      border-right: none;
      border-bottom: none;
    }
    #mlcad-toolbar .mlcad-tool-btn {
      flex: 1 1 0;
      width: auto;
      min-width: 0;
      height: auto;
      min-height: var(--mlcad-toolbar-phone-height);
      border-radius: 0;
      padding: 4px 2px;
    }
    #mlcad-toolbar .mlcad-tool-btn-label,
    #mlcad-zoom-strip .mlcad-tool-btn-label,
    #mlcad-measure-strip .mlcad-tool-btn-label,
    #mlcad-markup-strip .mlcad-tool-btn-label,
    #mlcad-settings-strip .mlcad-tool-btn-label,
    #mlcad-locale-strip .mlcad-tool-btn-label,
    #mlcad-snap-strip .mlcad-tool-btn-label {
      display: block;
      max-width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    /* Drop sticky :focus / touch :hover chrome after closing a strip. */
    #mlcad-toolbar .mlcad-tool-btn:focus,
    #mlcad-toolbar .mlcad-tool-btn:focus-visible {
      outline: none;
    }
    #mlcad-toolbar .mlcad-tool-btn:focus:not(.active):not(.is-menu-open),
    #mlcad-toolbar .mlcad-tool-btn:focus-visible:not(.active):not(.is-menu-open) {
      background: transparent;
      border-color: transparent;
    }
    @media (hover: none) {
      #mlcad-toolbar .mlcad-tool-btn:hover:not(.active):not(.is-menu-open) {
        background: transparent;
        border-color: transparent;
      }
    }
    .mlcad-tool-btn.has-children::after {
      display: none;
    }
    #mlcad-toolbar-toggle,
    #mlcad-toolbar .mlcad-tool-separator {
      display: none !important;
    }
    /* Float above the bottom bar so the wrap does not occupy an in-flow
       rectangle of page background around the rounded strip. */
    #mlcad-sidebar > #mlcad-snap-strip-wrap,
    #mlcad-sidebar > #mlcad-measure-strip-wrap,
    #mlcad-sidebar > #mlcad-markup-strip-wrap,
    #mlcad-sidebar > #mlcad-zoom-strip-wrap,
    #mlcad-sidebar > #mlcad-settings-strip-wrap,
    #mlcad-sidebar > #mlcad-locale-strip-wrap {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 100%;
      width: auto;
      flex-direction: column;
      align-items: stretch;
      background: none;
      box-shadow: none;
      backdrop-filter: none;
      overflow: visible;
      pointer-events: none;
      z-index: calc(var(--mlcad-z-chrome) + 1);
    }
    #mlcad-settings-strip-wrap:not([hidden]) {
      display: flex !important;
    }
    #mlcad-snap-strip,
    #mlcad-measure-strip,
    #mlcad-markup-strip,
    #mlcad-zoom-strip,
    #mlcad-settings-strip,
    #mlcad-locale-strip {
      display: grid;
      /* Fallback before wrap-pack JS: auto-fit stretches a short strip evenly.
         JS then sets an explicit column count so wrapped last rows stay narrow. */
      grid-template-columns: repeat(
        auto-fit,
        minmax(var(--mlcad-toolbar-phone-btn-size), 1fr)
      );
      justify-content: start;
      align-content: flex-start;
      width: auto;
      box-sizing: border-box;
      gap: 0;
      margin: 4px 8px 8px;
      padding: 4px 0;
      border-radius: 8px;
      /* Match active toolbar button outline. */
      border: 1px solid var(--mlcad-tool-btn-active-border);
      box-shadow: none;
      backdrop-filter: none;
      overflow: hidden;
      isolation: isolate;
      clip-path: inset(0 round 8px);
      pointer-events: auto;
    }
    #mlcad-snap-strip .mlcad-tool-btn,
    #mlcad-measure-strip .mlcad-tool-btn,
    #mlcad-markup-strip .mlcad-tool-btn,
    #mlcad-zoom-strip .mlcad-tool-btn,
    #mlcad-settings-strip .mlcad-tool-btn,
    #mlcad-locale-strip .mlcad-tool-btn {
      width: 100%;
      min-width: 0;
      height: auto;
      min-height: var(--mlcad-toolbar-phone-height);
      border-radius: 0;
      padding: 4px 2px;
      box-sizing: border-box;
    }
    #mlcad-measure-strip .mlcad-tool-separator,
    #mlcad-markup-strip .mlcad-tool-separator {
      display: none;
    }
    #mlcad-polar-angles {
      flex-direction: row;
      flex-wrap: wrap;
      max-width: none;
      width: 100%;
      box-sizing: border-box;
      border-radius: 0;
      pointer-events: auto;
    }
    #mlcad-layer-drawer,
    #mlcad-review-drawer,
    #mlcad-measure-drawer {
      position: fixed;
      left: 0;
      right: 0;
      bottom: var(--mlcad-phone-drawer-bottom, var(--mlcad-toolbar-phone-height));
      top: auto;
      margin: 0;
      width: 100%;
      max-width: none;
      height: min(42vh, calc(100vh - var(--mlcad-phone-drawer-bottom, var(--mlcad-toolbar-phone-height)) - 12px));
      max-height: calc(100vh - var(--mlcad-phone-drawer-bottom, var(--mlcad-toolbar-phone-height)) - 12px);
      z-index: calc(var(--mlcad-z-chrome) + 1);
      border-radius: 12px 12px 0 0;
      pointer-events: auto;
    }
    #mlcad-layer-drawer .mlcad-drawer-sheet-chrome,
    #mlcad-review-drawer .mlcad-drawer-sheet-chrome,
    #mlcad-measure-drawer .mlcad-drawer-sheet-chrome {
      display: flex;
      align-items: center;
      flex: 0 0 auto;
      min-height: 28px;
    }
    #mlcad-layer-drawer .mlcad-drawer-header,
    #mlcad-review-drawer .mlcad-drawer-header,
    #mlcad-measure-drawer .mlcad-drawer-header {
      display: none;
    }
    .mlcad-layer-action-btn {
      min-height: 28px;
      padding: 3px 6px;
      font-size: 11px;
      gap: 4px;
    }
    .mlcad-layer-action-btn svg { width: 12px; height: 12px; }
    .mlcad-layer-zoom {
      width: 20px;
      height: 20px;
    }
    .mlcad-layer-zoom svg {
      width: 12px;
      height: 12px;
    }
    #mlcad-top-chrome {
      left: 8px;
      right: 8px;
      top: 8px;
    }

  }

  /* Pad / coarse pointer: same toolbar as desktop, minus select and pan. */
  @media (max-width: ${Vs}px), (pointer: coarse) {
    #mlcad-toolbar [data-action="select"],
    #mlcad-toolbar [data-action="pan"] {
      display: none !important;
    }
  }

  /*
   * Hide toolbar chrome during measure / markup without changing canvas size.
   * On phone the sidebar is in the flex column; display:none would expand
   * #mlcad-canvas-host and shift the drawing. Session panel floats on top.
   */
  #mlcad-root.mlcad-session-active #mlcad-sidebar {
    visibility: hidden !important;
    pointer-events: none !important;
  }
`;function ia(e,t="measure",a=!0){const r=t==="measure"?`${$s()}${Ks()}${Ys()}`:"";return`
  <div id="mlcad-loading" aria-hidden="true" style="background:${e}">
    <div class="mlcad-loading-spinner"></div>
    <div id="mlcad-access-gate" hidden>
      <form id="mlcad-access-form" class="mlcad-access-card">
        <h2 class="mlcad-access-title" data-i18n-key="access.title" data-i18n-text>Protected drawing</h2>
        <p class="mlcad-access-hint" data-i18n-key="access.passwordPrompt" data-i18n-text>Enter the password to open this file.</p>
        <p id="mlcad-access-expiry" class="mlcad-access-expiry" hidden></p>
        <div class="mlcad-access-field">
          <input
            id="mlcad-access-password"
            type="password"
            autocomplete="off"
            data-i18n-key="access.passwordPlaceholder"
            data-i18n-attr="placeholder aria-label"
            placeholder="Password"
            aria-label="Password"
          />
        </div>
        <button type="submit" class="mlcad-access-submit" data-i18n-key="access.unlock" data-i18n-text>Unlock</button>
        <p id="mlcad-access-error" class="mlcad-access-error" hidden></p>
      </form>
    </div>
  </div>
  <div id="mlcad-root">
    <div id="mlcad-canvas-host">
      <div id="mlcad-top-chrome">
        <footer id="mlcad-status-bar" aria-live="polite" hidden></footer>
      </div>
    </div>
    <aside id="mlcad-sidebar">
      <nav id="mlcad-toolbar" data-i18n-attr="aria-label" data-i18n-key="toolbar.viewerTools" aria-label="Viewer tools"></nav>
      ${r}
      <div id="mlcad-layer-drawer" role="dialog" data-i18n-attr="aria-label" data-i18n-key="layers.title" aria-label="Layers" hidden>
        ${sa("mlcad-layer-sheet-close","layers.close","Close layers")}
        <div class="mlcad-drawer-header">
          <span data-i18n-key="layers.title" data-i18n-text>Layers</span>
          <button type="button" class="mlcad-drawer-close" id="mlcad-layer-close" data-i18n-key="layers.close" data-i18n-attr="aria-label" aria-label="Close layers">×</button>
        </div>
        <div class="mlcad-layer-actions">
          <button type="button" class="mlcad-layer-action-btn" id="mlcad-layer-show-all">
            ${Bt.layerOn}<span data-i18n-key="layers.showAll" data-i18n-text>Show all</span>
          </button>
          <button type="button" class="mlcad-layer-action-btn" id="mlcad-layer-hide-all">
            ${Bt.layerOff}<span data-i18n-key="layers.hideAll" data-i18n-text>Hide all</span>
          </button>
        </div>
        <div id="mlcad-layer-list"></div>
      </div>
    </aside>
  </div>
`}function sa(e,t,a){return`<div class="mlcad-drawer-sheet-chrome">
          <div class="mlcad-drawer-grabber" role="separator" aria-orientation="horizontal"></div>
          <button type="button" class="mlcad-drawer-sheet-close" id="${e}" data-i18n-key="${t}" data-i18n-attr="aria-label" aria-label="${a}">${Bt.chevronDown}</button>
        </div>`}function Ys(){return`<div id="mlcad-review-drawer" role="dialog" data-i18n-attr="aria-label" data-i18n-key="review.title" aria-label="Review" hidden>
        ${sa("mlcad-review-sheet-close","review.close","Close review")}
        <div class="mlcad-drawer-header">
          <span data-i18n-key="review.title" data-i18n-text>Review</span>
          <button type="button" class="mlcad-drawer-close" id="mlcad-review-close" data-i18n-key="review.close" data-i18n-attr="aria-label" aria-label="Close review">×</button>
        </div>
        <div class="mlcad-review-toolbar">
          <input type="search" class="mlcad-review-search" data-i18n-key="review.searchPlaceholder" data-i18n-attr="placeholder" placeholder="Search markups" />
          <button type="button" class="mlcad-review-clear" data-i18n-key="review.clear" data-i18n-text>Clear all</button>
        </div>
        <div class="mlcad-review-table-wrap">
          <table class="mlcad-review-table">
            <thead>
              <tr>
                <th data-review-col="type" data-i18n-key="review.type" data-i18n-text>Type</th>
                <th data-review-col="status" data-i18n-key="review.status" data-i18n-text>Status</th>
                <th data-review-col="author" data-i18n-key="review.author" data-i18n-text>Author</th>
                <th data-review-col="summary" data-i18n-key="review.summary" data-i18n-text>Summary</th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div>
        <div class="mlcad-review-detail" hidden>
          <div class="mlcad-review-detail-header">
            <div class="mlcad-review-detail-title" data-i18n-key="review.details" data-i18n-text>Details</div>
            <button type="button" class="mlcad-review-detail-close" data-i18n-key="review.closeDetails" data-i18n-attr="title aria-label" title="Close details" aria-label="Close details">×</button>
          </div>
          <div class="mlcad-review-field">
            <label class="mlcad-review-field-label" data-review-field="status" data-i18n-key="review.status" data-i18n-text>Status</label>
            <select class="mlcad-review-status"></select>
          </div>
          <div class="mlcad-review-field">
            <label class="mlcad-review-field-label" data-review-field="author" data-i18n-key="review.author" data-i18n-text>Author</label>
            <input type="text" class="mlcad-review-author" disabled />
          </div>
          <div class="mlcad-review-field">
            <label class="mlcad-review-field-label" data-review-field="label" data-i18n-key="review.label" data-i18n-text>Label</label>
            <input type="text" class="mlcad-review-text" />
          </div>
          <div class="mlcad-review-field">
            <label class="mlcad-review-field-label" data-review-field="comment" data-i18n-key="review.comment" data-i18n-text>Comment</label>
            <textarea class="mlcad-review-comment" rows="2"></textarea>
          </div>
          <div class="mlcad-review-detail-actions">
            <button type="button" class="mlcad-review-zoom" data-i18n-key="review.zoomTo" data-i18n-text>Zoom to</button>
            <button type="button" class="mlcad-review-delete" data-i18n-key="review.delete" data-i18n-text>Delete</button>
          </div>
        </div>
      </div>`}function Ks(){return`<div id="mlcad-measure-drawer" role="dialog" data-i18n-attr="aria-label" data-i18n-key="measurePanel.title" aria-label="Measurements" hidden>
        ${sa("mlcad-measure-sheet-close","measurePanel.close","Close measurements")}
        <div class="mlcad-drawer-header">
          <span data-i18n-key="measurePanel.title" data-i18n-text>Measurements</span>
          <button type="button" class="mlcad-drawer-close" id="mlcad-measure-close" data-i18n-key="measurePanel.close" data-i18n-attr="aria-label" aria-label="Close measurements">×</button>
        </div>
        <div class="mlcad-measure-toolbar">
          <div class="mlcad-measure-filter" role="group" data-i18n-key="measurePanel.filterGroup" data-i18n-attr="aria-label" aria-label="Filter by type">
            <button type="button" class="mlcad-measure-filter-btn" data-measure-filter="distance" aria-pressed="false" data-i18n-key="measurePanel.filterDistance" data-i18n-text data-i18n-attr="title aria-label" title="Distance">Distance</button>
            <button type="button" class="mlcad-measure-filter-btn" data-measure-filter="arc" aria-pressed="false" data-i18n-key="measurePanel.filterArc" data-i18n-text data-i18n-attr="title aria-label" title="Arc">Arc</button>
            <button type="button" class="mlcad-measure-filter-btn" data-measure-filter="angle" aria-pressed="false" data-i18n-key="measurePanel.filterAngle" data-i18n-text data-i18n-attr="title aria-label" title="Angle">Angle</button>
            <button type="button" class="mlcad-measure-filter-btn" data-measure-filter="area" aria-pressed="false" data-i18n-key="measurePanel.filterArea" data-i18n-text data-i18n-attr="title aria-label" title="Area">Area</button>
          </div>
          <button type="button" class="mlcad-measure-clear" data-i18n-key="measurePanel.clear" data-i18n-text>Clear all</button>
        </div>
        <div class="mlcad-measure-table-wrap">
          <table class="mlcad-measure-table">
            <thead>
              <tr>
                <th data-measure-col="type" data-i18n-key="measurePanel.type" data-i18n-text>Type</th>
                <th data-measure-col="value" data-i18n-key="measurePanel.value" data-i18n-text>Value</th>
                <th></th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div>
      </div>`}function Gs(e,t){var a;const r=t.title??e.meta.title??"CAD Drawing",n=t.encoded??Pr(e),o=t.viewerRuntime,i=ri(),s=n.compression,l=((a=t.accessManifest)==null?void 0:a.encrypted)===!0,c=`#${e.meta.background.toString(16).padStart(6,"0")}`,d=Le(e.meta.locale)??"en",u=e.meta.viewerMode??"measure",m=e.meta.exportLayouts!==!1,p=t.accessManifest?`  <script id="mlcad-access" type="application/json">${Gr(JSON.stringify(t.accessManifest))}<\/script>
`:"",h=l?`${i}+aes-gcm;base64`:`${i}+${s};base64`;return`<!DOCTYPE html>
<html lang="${d}">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="generator" content="mlightcad-cad-html-plugin" />
  <title>${Yr(r)}</title>
  <style>${oa}</style>
</head>
<body>
${ia(c,u,m)}
${p}  <script id="mlcad-snapshot" type="${h}">${n.payload}<\/script>
  <script>${Kr(o)}<\/script>
</body>
</html>`}function Xs(e,t){var a;const r=t.title??e.meta.title??"CAD Drawing",n=t.viewerRuntime,o=`#${e.meta.background.toString(16).padStart(6,"0")}`,i=Le(e.meta.locale)??"en",s=e.meta.viewerMode??"measure",l=e.meta.exportLayouts!==!1,c=(a=t.manifestUrl)==null?void 0:a.trim(),d=JSON.stringify(c&&c!==Vr?{manifestUrl:c}:{});return`<!DOCTYPE html>
<html lang="${i}">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="generator" content="mlightcad-cad-html-plugin" />
  <title>${Yr(r)}</title>
  <style>${oa}</style>
</head>
<body>
${ia(o,s,l)}
  <script id="mlcad-package" type="application/json">${Gr(d)}<\/script>
  <script>${Kr(n)}<\/script>
</body>
</html>`}function Yr(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function Kr(e){return e.replace(/<\/script/gi,"<\\/script")}function Gr(e){return e.replace(/</g,"\\u003c")}const Xr=1,Zs=600*1e3,Ws=1e5,Js=16,Ot=12,qs={en:"en",zh:"zh-CN",cs:"cs",tr:"tr",ar:"ar"};function Qs(e,t=Date.now(),a){return e==="never"?null:e==="custom"?a??null:t+e*24*60*60*1e3}function Zr(e){var t;const a=!!((t=e.password)!=null&&t.trim());return e.expiresAt!=null||a}function hc(e,t=Date.now()){return e.expiresAt!=null&&t>e.expiresAt}function fc(e,t=Date.now()){const a=e-t;return a>0&&a<=Zs}function gc(e,t="en"){const a=qs[t]??t;try{return new Date(e).toLocaleString(a,{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1})}catch{return new Date(e).toISOString()}}function bc(e){const t=Math.max(0,Math.ceil(e/1e3)),a=Math.floor(t/3600),r=Math.floor(t%3600/60),n=t%60,o=String(r).padStart(2,"0"),i=String(n).padStart(2,"0");return a>0?`${a}:${o}:${i}`:`${r}:${i}`}function yc(e){const t=e==null?void 0:e.trim();if(!t)return null;try{const a=JSON.parse(t);return(a==null?void 0:a.v)!==Xr?null:a}catch{return null}}function Ke(e){var t;if(!Zr(e))return;const a=!!((t=e.password)!=null&&t.trim());return{v:Xr,expiresAt:e.expiresAt,encrypted:a,...a&&e.salt?{salt:e.salt}:{}}}async function la(e,t){const a=t!=null&&t.trim()?new Uint8Array(at(t)):crypto.getRandomValues(new Uint8Array(Js));return{key:await al(e,a),salt:tt(a)}}async function ca(e,t){const a=crypto.getRandomValues(new Uint8Array(Ot)),r=new Uint8Array(t),n=new Uint8Array(await crypto.subtle.encrypt({name:"AES-GCM",iv:a},e,r)),o=new Uint8Array(a.length+n.length);return o.set(a,0),o.set(n,a.length),o}async function da(e,t){const a=new Uint8Array(t.subarray(0,Ot)),r=new Uint8Array(t.subarray(Ot));return new Uint8Array(await crypto.subtle.decrypt({name:"AES-GCM",iv:a},e,r))}async function el(e,t){const{key:a,salt:r}=await la(e),n=new Uint8Array(at(t)),o=await ca(a,n);return{encryptedPayload:tt(o),salt:r}}async function wc(e,t,a){const{key:r}=await la(e,a),n=await da(r,at(t));return tt(n)}function ua(e){return tt(e)}function et(e){return at(e)}async function tl(e,t){var a;if(!Zr(t))return{encoded:e};const r=(a=t.password)==null?void 0:a.trim();if(r){const{encryptedPayload:n,salt:o}=await el(r,e.payload);return{encoded:{payload:n,compression:e.compression},manifest:Ke({expiresAt:t.expiresAt,password:r,salt:o})}}return{encoded:e,manifest:Ke({expiresAt:t.expiresAt})}}async function al(e,t){const a=new TextEncoder,r=await crypto.subtle.importKey("raw",a.encode(e),"PBKDF2",!1,["deriveKey"]);return crypto.subtle.deriveKey({name:"PBKDF2",salt:new Uint8Array(t),iterations:Ws,hash:"SHA-256"},r,{name:"AES-GCM",length:256},!1,["encrypt","decrypt"])}function tt(e){let t="";for(let a=0;a<e.length;a++)t+=String.fromCharCode(e[a]);return btoa(t)}function at(e){const t=atob(e.trim()),a=new Uint8Array(t.length);for(let r=0;r<t.length;r++)a[r]=t.charCodeAt(r);return a}const rl=256;function nl(e,t=Je){return!(t>0)||Kt(e)<=t?[e]:e.indices&&e.indices.length>=2?sl(e,t):il(e,t)}function ol(e,t=Je){return e.texture?[e]:!(t>0)||Gt(e)<=t?[e]:e.points?cl(e,t):!e.indices||e.indices.length<3?Jr(e,t):ul(e,t)}function Wr(e){return e.linePattern?64+e.linePattern.pattern.length*8:0}function ma(e){return(e.hatchPattern?128:0)+(e.gradientFill?64:0)}function Te(e,t,a){const r=e-rl-t;return r<a?1:Math.max(1,Math.floor(r/a))}function il(e,t){var a;const r=(((a=e.lineDistances)==null?void 0:a.length)??0)>=2,n=24+(r?8:0),o=Te(t,Wr(e),n),i=e.positions.length/6|0;if(i<=1)return[e];const s=[];for(let l=0;l<i;l+=o){const c=Math.min(o,i-l),d=l*6,u={layer:e.layer,color:e.color,offset:e.offset,positions:e.positions.slice(d,d+c*6)};if(en(e,u),r&&e.lineDistances){const m=l*2;u.lineDistances=e.lineDistances.slice(m,m+c*2)}s.push(u)}return s.length>0?s:[e]}function sl(e,t){var a;const r=e.indices,n=32+((((a=e.lineDistances)==null?void 0:a.length)??0)>0?8:0),o=Te(t,Wr(e),n),i=[];for(let s=0;s+1<r.length;){const l=Math.min(o*2,r.length-s),c=l-l%2;if(c<2)break;i.push(ll(e,s,c)),s+=c}return i.length>0?i:[e]}function ll(e,t,a){const r=Qr(e.positions,e.indices.subarray(t,t+a),e.lineDistances?[e.lineDistances]:[],[1]),n={layer:e.layer,color:e.color,offset:e.offset,positions:r.positions,indices:r.indices};return en(e,n),r.attributes[0]&&r.attributes[0].length>0&&(n.lineDistances=r.attributes[0]),n}function cl(e,t){return e.indices&&e.indices.length>0?dl(e,t):Jr(e,t)}function dl(e,t){const a=e.indices,r=16+(e.uvs?8:0)+(e.gradientPositions?8:0),n=Te(t,ma(e),r),o=[];for(let i=0;i<a.length;){const s=Math.min(n,a.length-i);if(s<1)break;o.push(qr(e,i,s)),i+=s}return o.length>0?o:[e]}function Jr(e,t){const a=e.positions.length/3|0;if(a<=1)return[e];const r=12+(e.uvs?8:0)+(e.gradientPositions?8:0),n=Te(t,ma(e),r),o=e.points?1:3,i=Math.max(o,n-n%o),s=[];for(let l=0;l<a;l+=i){const c=Math.min(i,a-l),d=c-c%o;if(d<o)break;s.push(ml(e,l,d))}return s.length>0?s:[e]}function ul(e,t){const a=e.indices,r=48+(e.uvs?24:0)+(e.gradientPositions?24:0),n=Te(t,ma(e),r),o=[];for(let i=0;i+2<a.length;){const s=Math.min(n*3,a.length-i),l=s-s%3;if(l<3)break;o.push(qr(e,i,l)),i+=l}return o.length>0?o:[e]}function ml(e,t,a){const r=t*3,n={layer:e.layer,color:e.color,offset:e.offset,positions:e.positions.slice(r,r+a*3)};return tn(e,n),e.uvs&&(n.uvs=e.uvs.slice(t*2,(t+a)*2)),e.gradientPositions&&(n.gradientPositions=e.gradientPositions.slice(t*2,(t+a)*2)),n}function qr(e,t,a){const r=[],n=[];e.uvs&&(r.push(e.uvs),n.push(2)),e.gradientPositions&&(r.push(e.gradientPositions),n.push(2));const o=Qr(e.positions,e.indices.subarray(t,t+a),r,n),i={layer:e.layer,color:e.color,offset:e.offset,positions:o.positions,indices:o.indices};tn(e,i);let s=0;return e.uvs&&(i.uvs=o.attributes[s++]),e.gradientPositions&&(i.gradientPositions=o.attributes[s]),i}function Qr(e,t,a,r){const n=new Map,o=[],i=new Uint32Array(t.length),s=a.map(()=>[]);for(let l=0;l<t.length;l++){const c=t[l];let d=n.get(c);if(d==null){d=n.size,n.set(c,d);const u=c*3;o.push(e[u]??0,e[u+1]??0,e[u+2]??0);for(let m=0;m<a.length;m++){const p=r[m],h=a[m],f=c*p;for(let g=0;g<p;g++)s[m].push(h[f+g]??0)}}i[l]=d}return{positions:Float32Array.from(o),indices:i,attributes:s.map(l=>Float32Array.from(l))}}function en(e,t){e.linePattern&&(t.linePattern=e.linePattern),e.lineWidth!=null&&(t.lineWidth=e.lineWidth),e.renderOrder!=null&&(t.renderOrder=e.renderOrder),e.excludeFromOsnap&&(t.excludeFromOsnap=!0)}function tn(e,t){e.hatchPattern&&(t.hatchPattern=e.hatchPattern),e.gradientFill&&(t.gradientFill=e.gradientFill),e.side!=null&&(t.side=e.side),e.renderOrder!=null&&(t.renderOrder=e.renderOrder),e.points&&(t.points=!0)}function pl(e,t,a=Je){const r=[];let n={lineBatches:[],meshBatches:[],estimatedBytes:64};const o=()=>{n.lineBatches.length===0&&n.meshBatches.length===0&&r.length>0||(r.push(n),n={lineBatches:[],meshBatches:[],estimatedBytes:64})},i=c=>{const d=Kt(c);n.estimatedBytes+d>t&&(n.lineBatches.length>0||n.meshBatches.length>0)&&o(),n.lineBatches.push(c),n.estimatedBytes+=d},s=c=>{const d=Gt(c);n.estimatedBytes+d>t&&(n.lineBatches.length>0||n.meshBatches.length>0)&&o(),n.meshBatches.push(c),n.estimatedBytes+=d},l=Math.min(t,a);for(const c of e.lineBatches)for(const d of nl(c,l))i(d);for(const c of e.meshBatches)for(const d of ol(c,l))s(d);return(r.length===0||n.lineBatches.length>0||n.meshBatches.length>0)&&o(),r.length===0&&r.push({lineBatches:[],meshBatches:[],estimatedBytes:64}),r}function an(e,t={}){var a,r;if(e.version!==$)throw new Error(`Unsupported snapshot version: ${e.version}`);const n=t.maxChunkBytes??Ss,o=t.maxBatchBytes??Je,i=t.maxOsnapChunkBytes??Ps,s=ne,l=fl(e.layouts,e.activeLayoutBtrId),c=[],d=[],u=[],m=[],p=new Map;l.forEach((b,E)=>{var S;p.set(b.btrId,E);const y=pl(b,n,o),x=[];y.forEach((F,I)=>{const P=`L${E}-${String(I).padStart(3,"0")}`,T=`chunks/${P}.acex.gz`,R={version:$,layoutBtrId:b.btrId,lineBatches:F.lineBatches,meshBatches:F.meshBatches},{uncompressed:v,compressed:H}=Es(R);x.push(P),c.push({id:P,href:T,layoutBtrId:b.btrId,byteLength:v.byteLength,compressedByteLength:H.byteLength,lineBatchCount:F.lineBatches.length,meshBatchCount:F.meshBatches.length}),m.push({path:T,bytes:H})});const O={btrId:b.btrId,name:b.name,isModelSpace:b.isModelSpace,viewports:b.viewports,chunkIds:x},G=(S=b.osnap)==null?void 0:S.primitives;if(G&&G.length>0){const F=$o(G,i),I=[];F.forEach((P,T)=>{const R=`L${E}-osnap-${String(T).padStart(3,"0")}`,v=`chunks/${R}.osnap.gz`,{uncompressed:H,compressed:_}=_o({primitives:P});I.push(R),d.push({id:R,href:v,layoutBtrId:b.btrId,byteLength:H.byteLength,compressedByteLength:_.byteLength,primitiveCount:P.length}),m.push({path:v,bytes:_})}),O.osnapChunkIds=I}u.push(O)});const h=e.layouts.map(b=>{const E=p.get(b.btrId);return u[E]}),f=new Set(((a=h.find(b=>b.btrId===e.activeLayoutBtrId))==null?void 0:a.chunkIds)??[]),g=[...c.filter(b=>f.has(b.id)),...c.filter(b=>!f.has(b.id))],A=new Set(((r=h.find(b=>b.btrId===e.activeLayoutBtrId))==null?void 0:r.osnapChunkIds)??[]),w=[...d.filter(b=>A.has(b.id)),...d.filter(b=>!A.has(b.id))],z={format:"acex-package",packageVersion:$r,snapshotVersion:$,meta:e.meta,layers:e.layers,activeLayoutBtrId:e.activeLayoutBtrId,layouts:h,chunks:g,...w.length>0?{osnapChunks:w}:{}},C=`${JSON.stringify(z)}
`;return m.unshift({path:s,bytes:Se(C)}),{manifest:z,manifestFileName:s,files:m}}function hl(e,t){const a=an(e,t),r=Xs(e,{title:e.meta.title,viewerRuntime:t.viewerRuntime,...t.manifestUrl?{manifestUrl:t.manifestUrl}:{}});return{html:r,manifest:a.manifest,manifestFileName:a.manifestFileName,files:[{path:"viewer.html",bytes:Se(r)},...a.files]}}function fl(e,t){const a=e.find(n=>n.btrId===t),r=e.filter(n=>n.btrId!==t);return a?[a,...r]:[...e]}const gl="application/vnd.mlightcad.acex-chunk;base64",bl="application/vnd.mlightcad.acex-chunk+aes-gcm;base64",le="data-acex-href";function yl(e){var t;let a=0;for(const r of e.layouts){for(const o of r.lineBatches)a+=Kt(o);for(const o of r.meshBatches)a+=Gt(o);const n=(t=r.osnap)==null?void 0:t.primitives;if(n)for(const o of n)a+=Cr(o)}return a}function wl(e,t=Us){return yl(e)>=t}async function xl(e,t){var a;const r=t.title??e.meta.title??"CAD Drawing",n=t.viewerRuntime,o=`#${e.meta.background.toString(16).padStart(6,"0")}`,i=Le(e.meta.locale)??"en",s=e.meta.viewerMode??"measure",l=e.meta.exportLayouts!==!1,c=t.expiresAt??null,d=((a=t.password)==null?void 0:a.trim())||void 0,u={maxChunkBytes:t.maxChunkBytes??Ba,maxBatchBytes:t.maxBatchBytes??t.maxChunkBytes??Ba,maxOsnapChunkBytes:t.maxOsnapChunkBytes??Fs},m=an(e,u);let p,h,f;if(d){const{key:A,salt:w}=await la(d);p=Ke({expiresAt:c,password:d,salt:w});const z=new TextEncoder().encode(`${JSON.stringify(m.manifest)}
`),C=await ca(A,z);h={mode:"embedded",encrypted:!0,encryptedManifest:ua(C)},f=await kl(m.files,A)}else p=Ke({expiresAt:c}),h={mode:"embedded",manifest:m.manifest},f=vl(m.files);const g=p?`  <script id="mlcad-access" type="application/json">${Oa(JSON.stringify(p))}<\/script>
`:"";return`<!DOCTYPE html>
<html lang="${i}">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="generator" content="mlightcad-cad-html-plugin" />
  <title>${rn(r)}</title>
  <style>${oa}</style>
</head>
<body>
${ia(o,s,l)}
${g}  <script id="mlcad-package" type="application/json">${Oa(JSON.stringify(h))}<\/script>
${f}  <script>${zl(n)}<\/script>
</body>
</html>`}function vl(e){const t=[];for(const a of e)a.path!==ne&&t.push(`  <script type="${gl}" ${le}="${nn(a.path)}">${ua(a.bytes)}<\/script>
`);return t.join("")}async function kl(e,t){const a=[];for(const r of e){if(r.path===ne)continue;const n=await ca(t,r.bytes);a.push(`  <script type="${bl}" ${le}="${nn(r.path)}">${ua(n)}<\/script>
`)}return a.join("")}function xc(e){const t=e==null?void 0:e.trim();if(!t)return null;try{const a=JSON.parse(t);return(a==null?void 0:a.mode)!=="embedded"?null:a.encrypted===!0?typeof a.encryptedManifest!="string"?null:a:a.manifest?{mode:"embedded",manifest:qe(a.manifest)}:null}catch{return null}}function vc(e=document){const t=new Map;return e.querySelectorAll(`script[${le}]`).forEach(a=>{var r;const n=(r=a.getAttribute(le))==null?void 0:r.trim();if(!n)return;const o=a.textContent??"";if(o.length===0)return;const i=o.charCodeAt(0)<=32||o.charCodeAt(o.length-1)<=32?o.trim():o;i.length!==0&&t.set(n,et(i))}),t}function kc(e,t=document){var a;const r=t.querySelectorAll(`script[${le}]`);for(let n=0;n<r.length;n++){const o=r[n];if(((a=o.getAttribute(le))==null?void 0:a.trim())!==e)continue;const i=o.textContent??"";if(i.length===0)return;const s=i.charCodeAt(0)<=32||i.charCodeAt(i.length-1)<=32?i.trim():i;return s.length===0?void 0:et(s)}}function Al(e,t=document){var a;const r=t.querySelectorAll(`script[${le}]`);for(let n=0;n<r.length;n++){const o=r[n];if(((a=o.getAttribute(le))==null?void 0:a.trim())!==e)continue;const i=o.textContent??"";if(i.length===0)return;const s=i.charCodeAt(0)<=32||i.charCodeAt(i.length-1)<=32?i.trim():i;if(s.length===0)return;const l=et(s);return o.remove(),l}}function Ac(e){const t=e.root??document,a=new Map;return Cl({manifest:e.manifest,decryptKey:e.decryptKey,getChunk:async r=>{const n=a.get(r);if(n)return n;const o=Al(r,t);return o&&a.set(r,o),o}})}function Cl(e){const t=ne,a=new URL(t,Ye).toString(),r=new URL(Ye).origin,n=`${JSON.stringify(e.manifest)}
`,o=e.decryptKey??null,i=e.consumeOnFetch!==!1,s=e.chunkBytes,l=e.getChunk;return{manifestUrl:a,fetchImpl:async c=>{const d=new URL(String(c));if(d.origin!==r)return new Response(null,{status:404});const u=decodeURIComponent(d.pathname.replace(/^\/+/,""));if(u===t)return new Response(n,{status:200,headers:{"Content-Type":"application/json"}});let m;if(l?m=await l(u):s&&(m=s.get(u)),!m)return new Response(null,{status:404});const p=o?await da(o,m):m;return i&&s&&s.delete(u),new Response(p,{status:200})}}}async function Cc(e,t){const a=await da(t,et(e)),r=new TextDecoder().decode(a);return qe(JSON.parse(r))}function rn(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function nn(e){return rn(e).replace(/'/g,"&#39;")}function zl(e){return e.replace(/<\/script/gi,"<\\/script")}function Oa(e){return e.replace(/</g,"\\u003c")}function on(e){return!e||e.startsWith("/")||e.includes("\\")||e.includes("\0")?!1:e.split("/").every(t=>t.length>0&&t!=="."&&t!==".."&&/^[A-Za-z0-9._-]+$/.test(t))}function El(e){const t={};for(const a of e.files){if(!on(a.path))throw new Error(`Unsafe package path: ${a.path}`);t[a.path]=a.bytes}return Do(t,{level:6})}function zc(e){const t=Ro(e),a=[];for(const[r,n]of Object.entries(t)){if(!on(r))throw new Error("Unsafe path in package archive");a.push({path:r,bytes:n})}return a}const Sl=400;function ce(e={}){var t;const a=e.exportFormat==="multi"?"multi":"single";return{exportFormat:a,exportInvisibleLayers:e.exportInvisibleLayers!==!1,exportLayouts:e.exportLayouts!==!1,initialView:e.initialView??"fit",viewerMode:e.viewerMode??"measure",expiryDays:a==="multi"?"never":e.expiryDays??"never",expiresAt:a==="multi"?null:e.expiresAt??null,password:a==="multi"?"":((t=e.password)==null?void 0:t.trim())??""}}function Pl(e){const t=e.activeLayoutView,a=t.center,r=t.trCamera.zoom,n=Math.max(t.height,1),o=r*(2*Sl)/n;return{centerX:a.x,centerY:a.y,zoom:o}}const Ul="./viewer-runtime.iife.js";let Fe={};function Fl(e){Fe={...Fe,...e}}function Ml(){return{...Fe}}function Il(e){return e!=null?String(e):Fe.viewerRuntimeUrl!=null?String(Fe.viewerRuntimeUrl):Ul}const sn="https://mlightcad.com/cad-viewer/docs/";let ln=cn(sn);function Ll(){return ln}function Tl(e){ln=cn(e)}function cn(e){const t=e.trim();return t?t.replace(/\/+$/,""):sn.replace(/\/+$/,"")}function Hl(){return{minX:0,minY:0,maxX:0,maxY:0,valid:!1}}function Dl(e,t,a){if(t.length<3)return;const r=a[0],n=a[1];for(let o=0;o+2<t.length;o+=3){const i=Aa(t[o],r),s=Aa(t[o+1],n);e.valid?(i<e.minX&&(e.minX=i),i>e.maxX&&(e.maxX=i),s<e.minY&&(e.minY=s),s>e.maxY&&(e.maxY=s)):(e.minX=e.maxX=i,e.minY=e.maxY=s,e.valid=!0)}}function ja(e,t){Dl(e,t.positions,t.offset)}function Rl(e){return e.valid?{minX:e.minX,minY:e.minY,maxX:e.maxX,maxY:e.maxY}:null}function Bl(e,t){const a=Hl();for(const r of e)ja(a,r);for(const r of t)ja(a,r);return Rl(a)}function dn(e,t){return e?t?{minX:Math.min(e.minX,t.minX),minY:Math.min(e.minY,t.minY),maxX:Math.max(e.maxX,t.maxX),maxY:Math.max(e.maxY,t.maxY)}:e:t??null}function Ol(e){if(!e||e.length===0)return null;let t=null;for(const a of e)t=dn(t,a.paper);return t}function jl(e){return dn(Bl(e.lineBatches,e.meshBatches),Ol(e.viewports))}function Nl(e,t,a){if(a)return;const r=$l(e,t);if(!(r!=null&&r.newIterator))return;const n=[];for(const o of r.newIterator()){if(!(o instanceof Ln)||Tn.isDefaultPaperSpaceViewport(o)||typeof o.toGiViewport!="function")continue;const i=o.toGiViewport(),s=i.box,l=i.viewBox,c=Na(s),d=Na(l);if(!c||!d)continue;const u=Number.isFinite(i.viewTwistAngle)?i.viewTwistAngle:o.viewTwistAngle;n.push(Number.isFinite(u)&&Math.abs(u)>1e-12?{paper:c,model:d,twist:u}:{paper:c,model:d})}return n.length>0?n:void 0}function Na(e){if(typeof e.isEmpty=="function"&&e.isEmpty())return;const t=e.min.x,a=e.min.y,r=e.max.x,n=e.max.y;if(!(!Number.isFinite(t)||!Number.isFinite(a)||!Number.isFinite(r)||!Number.isFinite(n)||r-t<=0||n-a<=0))return{minX:t,minY:a,maxX:r,maxY:n}}function $l(e,t){var a;const r=(a=e.tables)==null?void 0:a.blockTable;if(!r)return;const n=typeof r.getIdAt=="function"?r.getIdAt(t):void 0;if(n)return n;if(typeof r.newIterator=="function"){for(const i of r.newIterator())if(i.objectId===t)return i}const o=r.modelSpace;if((o==null?void 0:o.objectId)===t)return o}class _l{build(t,a,r={}){return this.buildSync(t,a,r)}async buildAsync(t,a,r={}){await W();const n=r.exportInvisibleLayers!==!1,o=r.exportLayouts!==!1,i=n?void 0:p=>Be(t,p,n),s=Ua(a,{title:r.title,background:r.background}),l=[];t.layers.forEach(p=>{Be(t,p.name,n)&&l.push({name:p.name,color:p.color.RGB??16777215,visible:!p.isOff&&!p.isFrozen})});const c=_a(a),d=new Map(c.map(p=>[p.blockTableRecordId,p.name])),u=Ya(t,o),m=[];for(const p of Va(t,c,o))m.push(Ka(t,a,p,d,r,i)),await W();return{version:$,meta:$a(s,r,m,u),layers:l,layouts:m,activeLayoutBtrId:u}}buildSync(t,a,r){const n=r.exportInvisibleLayers!==!1,o=r.exportLayouts!==!1,i=n?void 0:p=>Be(t,p,n),s=Ua(a,{title:r.title,background:r.background}),l=[];t.layers.forEach(p=>{Be(t,p.name,n)&&l.push({name:p.name,color:p.color.RGB??16777215,visible:!p.isOff&&!p.isFrozen})});const c=_a(a),d=new Map(c.map(p=>[p.blockTableRecordId,p.name])),u=Ya(t,o),m=[];for(const p of Va(t,c,o))m.push(Ka(t,a,p,d,r,i));return{version:$,meta:$a(s,r,m,u),layers:l,layouts:m,activeLayoutBtrId:u}}}function $a(e,t,a,r){const n=a.find(s=>s.btrId===r)??a[0],o=n?jl(n):null,i=t.initialView??"fit";return{title:e.title,createdAt:new Date().toISOString(),extents:e.extents,viewExtents:o??void 0,units:e.units,grip:e.grip,background:e.background,locale:t.locale??k.currentLocale,initialView:i,viewState:i==="current"?t.viewState:void 0,viewerMode:t.viewerMode??"measure",exportLayouts:t.exportLayouts!==!1,docsBaseUrl:Vl()}}function Vl(){try{Tl(Hn())}catch{}return Ll()}function Yl(e){return(e.viewerMode??"measure")==="measure"}function Be(e,t,a){if(a)return!0;const r=e.layers.get(t);return r?!r.isOff&&!r.isFrozen:!0}function _a(e){var t;const a=(t=e.objects)==null?void 0:t.layout;if(!(a!=null&&a.newIterator))return[];const r=[];for(const n of a.newIterator()){const o=n.blockTableRecordId;o&&r.push({name:n.layoutName||o,tabOrder:n.tabOrder??0,blockTableRecordId:o})}return r.sort((n,o)=>n.tabOrder-o.tabOrder),r}function Va(e,t,a){if(!a)return e.modelSpaceBtrId?[e.modelSpaceBtrId]:[];const r=new Set,n=[];for(const o of t)r.has(o.blockTableRecordId)||(r.add(o.blockTableRecordId),n.push(o.blockTableRecordId));for(const o of e.layouts.keys())r.has(o)||(r.add(o),n.push(o));return n}function Ya(e,t){return t&&e.activeLayoutBtrId||e.modelSpaceBtrId}function Ka(e,t,a,r,n,o){const i=[],s=[],l=e.layouts.get(a);if(l)for(const[,d]of l.layers){if(o&&!o(d.name))continue;const u=Li(d.internalObject);i.push(...u.lineBatches),s.push(...u.meshBatches)}const c=a===e.modelSpaceBtrId;return{btrId:a,name:r.get(a)??Kl(t,a),isModelSpace:c,lineBatches:i,meshBatches:s,osnap:Yl(n)?gs(t,a,{includeLayer:o}):void 0,viewports:Nl(t,a,c)}}function Kl(e,t){var a;const r=(a=e.tables)==null?void 0:a.blockTable;if(r!=null&&r.newIterator){for(const n of r.newIterator())if(n.objectId===t)return n.name}return t}class Gl{constructor(t={}){this.options=t,this._snapshotBuilder=new _l}async prepareAcTrView2dForHtmlExport(t,a={}){if(!t||!("cadScene"in t)||!t.cadScene)throw new Error("CAD scene is not available. Open a drawing before exporting to HTML.");if(!(t instanceof mn))throw new Error("HTML export requires a 2D CAD view. Open a drawing before exporting.");const r=ce(a),n={includeInvisibleLayers:r.exportInvisibleLayers,includeLayouts:r.exportLayouts};return await t.ensureEntitiesConvertedForExport(n),await W(),t}async convert(t,a={},r){const n=fe.instance,o=ce(a);await n.withBusyIndicator(async()=>{await W();const i=n.curDocument,s=await this.prepareAcTrView2dForHtmlExport(r??n.curView,o),l=t||i.fileName||i.docTitle,c=pn(l),d=await this._snapshotBuilder.buildAsync(s.cadScene,i.database,{title:c,background:s.backgroundColor,exportInvisibleLayers:o.exportInvisibleLayers,exportLayouts:o.exportLayouts,initialView:o.initialView,viewerMode:o.viewerMode,viewState:o.initialView==="current"&&(o.exportLayouts||s.activeLayoutBtrId===s.modelSpaceBtrId)?Pl(s):void 0});await W();const u=await this.loadViewerRuntime();if(await W(),o.exportFormat==="multi"){const h=hl(d,{viewerRuntime:u}),f=El(h);await W(),this.downloadBytes(f,pa(l,"zip"),"application/zip");return}const m=Qs(o.expiryDays,Date.now(),o.expiresAt),p=await this.packSelfContainedHtml(d,u,{expiresAt:m,password:o.password||void 0});await W(),this.downloadHtml(p,pa(l,"html"))})}async packSnapshot(t,a){await fe.instance.withBusyIndicator(async()=>{await W();const r=await this.loadViewerRuntime();await W();const n=await this.packSelfContainedHtml(t,r,{expiresAt:null});await W(),this.downloadHtml(n,a)})}async packSelfContainedHtml(t,a,r){if(wl(t))return xl(t,{title:t.meta.title,viewerRuntime:a,expiresAt:r.expiresAt,password:r.password});const n=await tl(Pr(t),{expiresAt:r.expiresAt,password:r.password});return Gs(t,{title:t.meta.title,viewerRuntime:a,encoded:n.encoded,accessManifest:n.manifest})}async loadViewerRuntime(){const t=Il(this.options.viewerRuntimeUrl),a=await fetch(t);if(!a.ok)throw new Error(`Failed to load HTML viewer runtime from "${t}" (${a.status}). Install @mlightcad/cad-html-plugin, copy viewer-runtime.iife.js to your app assets, and set viewerRuntimeUrl on registerLazyHtmlPlugin / createHtmlPlugin / AcApHtmlConvertor.`);return a.text()}downloadHtml(t,a){this.downloadBytes(new TextEncoder().encode(t),a,"text/html;charset=utf-8")}downloadBytes(t,a,r){const n=new Uint8Array(t.byteLength);n.set(t);const o=new Blob([n],{type:r}),i=URL.createObjectURL(o),s=document.createElement("a");s.href=i,s.download=a,document.body.appendChild(s),s.click(),document.body.removeChild(s),window.setTimeout(()=>URL.revokeObjectURL(i),6e4)}}class Xl extends un{constructor(t={}){super(),this.pluginOptions=t}async execute(t){const a=await this.promptOptions();a&&await new Gl(this.pluginOptions).convert(t.doc.fileName||t.doc.docTitle,a,t.view)}async promptOptions(){const t=ce(),a=await this.promptExportFormat();if(a===void 0)return;const r=await this.promptYesNo("jig.chtml.exportInvisibleLayers",t.exportInvisibleLayers);if(r===void 0)return;const n=await this.promptYesNo("jig.chtml.exportLayouts",t.exportLayouts);if(n===void 0)return;const o=await this.promptInitialView();if(o===void 0)return;const i=await this.promptViewerMode();if(i!==void 0)return ce({exportFormat:a,exportInvisibleLayers:r,exportLayouts:n,initialView:o,viewerMode:i})}async promptExportFormat(){const t=ce(),a=new Re(k.t("jig.chtml.exportFormat"));a.allowNone=!0;const r=a.keywords.add(k.t("jig.chtml.keywords.single.display"),k.t("jig.chtml.keywords.single.global"),k.t("jig.chtml.keywords.single.local")),n=a.keywords.add(k.t("jig.chtml.keywords.multi.display"),k.t("jig.chtml.keywords.multi.global"),k.t("jig.chtml.keywords.multi.local"));a.keywords.default=t.exportFormat==="multi"?n:r;const o=await fe.instance.editor.getKeywords(a);if(o.status!==N.Cancel){if(o.status===N.None)return t.exportFormat;if(o.status===N.OK||o.status===N.Keyword)return o.stringResult?o.stringResult==="Multi"?"multi":"single":t.exportFormat}}async promptYesNo(t,a){const r=new Re(k.t(t));r.allowNone=!0;const n=r.keywords.add(k.t("jig.chtml.keywords.yes.display"),k.t("jig.chtml.keywords.yes.global"),k.t("jig.chtml.keywords.yes.local")),o=r.keywords.add(k.t("jig.chtml.keywords.no.display"),k.t("jig.chtml.keywords.no.global"),k.t("jig.chtml.keywords.no.local"));r.keywords.default=a?n:o;const i=await fe.instance.editor.getKeywords(r);if(i.status!==N.Cancel){if(i.status===N.None)return a;if(i.status===N.OK||i.status===N.Keyword)return i.stringResult?i.stringResult==="Yes":a}}async promptInitialView(){const t=ce(),a=new Re(k.t("jig.chtml.initialView"));a.allowNone=!0;const r=a.keywords.add(k.t("jig.chtml.keywords.extents.display"),k.t("jig.chtml.keywords.extents.global"),k.t("jig.chtml.keywords.extents.local")),n=a.keywords.add(k.t("jig.chtml.keywords.current.display"),k.t("jig.chtml.keywords.current.global"),k.t("jig.chtml.keywords.current.local"));a.keywords.default=t.initialView==="current"?n:r;const o=await fe.instance.editor.getKeywords(a);if(o.status!==N.Cancel){if(o.status===N.None)return t.initialView;if(o.status===N.OK||o.status===N.Keyword)return o.stringResult?o.stringResult==="Current"?"current":"fit":t.initialView}}async promptViewerMode(){const t=ce(),a=new Re(k.t("jig.chtml.viewerMode"));a.allowNone=!0;const r=a.keywords.add(k.t("jig.chtml.keywords.view.display"),k.t("jig.chtml.keywords.view.global"),k.t("jig.chtml.keywords.view.local")),n=a.keywords.add(k.t("jig.chtml.keywords.measure.display"),k.t("jig.chtml.keywords.measure.global"),k.t("jig.chtml.keywords.measure.local"));a.keywords.default=t.viewerMode==="view"?r:n;const o=await fe.instance.editor.getKeywords(a);if(o.status!==N.Cancel){if(o.status===N.None)return t.viewerMode;if(o.status===N.OK||o.status===N.Keyword)return o.stringResult?o.stringResult==="View"?"view":"measure":t.viewerMode}}}const Zl="1.7.1",Wl={version:Zl};class Jl{constructor(t={}){this.options=t,this.name="HtmlPlugin",this.version=Wl.version,this.description="HTML export (-chtml) command",this.registeredCommands=[]}onLoad(t,a){const r=kn.SYSTEMT_COMMAND_GROUP_NAME,n=new Xl(this.options);a.addCommand(r,"-chtml","-chtml",n),this.registeredCommands.push({group:r,name:"-chtml"}),a.lookupGlobalCmd("chtml")||(a.addCommand(r,"chtml","chtml",n),this.registeredCommands.push({group:r,name:"chtml"}))}onUnload(t,a){for(const r of this.registeredCommands)a.removeCmd(r.group,r.name);this.registeredCommands=[]}}async function Ec(e={}){return e.viewerRuntimeUrl!=null&&Fl(e),new Jl(Ml())}const Sc="viewer-runtime.iife.js";export{jr as ACEC_CHUNK_MAGIC,Wt as ACEO_OSNAP_MAGIC,fr as ACEO_OSNAP_VERSION,Ss as ACEX_DEFAULT_CHUNK_MAX_BYTES,ne as ACEX_DEFAULT_MANIFEST_FILE,Vr as ACEX_DEFAULT_MANIFEST_HREF,Ps as ACEX_DEFAULT_OSNAP_CHUNK_MAX_BYTES,tc as ACEX_DEFAULT_OSNAP_MODES,bl as ACEX_EMBEDDED_CHUNK_ENCRYPTED_MIME,le as ACEX_EMBEDDED_CHUNK_HREF_ATTR,Ba as ACEX_EMBEDDED_CHUNK_MAX_BYTES,gl as ACEX_EMBEDDED_CHUNK_MIME,Us as ACEX_EMBEDDED_CHUNK_THRESHOLD_BYTES,Fs as ACEX_EMBEDDED_OSNAP_CHUNK_MAX_BYTES,ta as ACEX_GEOMETRY_CHUNK_FETCH_CONCURRENCY,Zs as ACEX_HTML_EXPIRY_COUNTDOWN_MS,Ds as ACEX_MANIFEST_QUERY_KEYS,vt as ACEX_MAX_COMPRESSED_BYTES,Oo as ACEX_MAX_DECOMPRESSED_BYTES,Je as ACEX_MAX_GEOMETRY_BATCH_BYTES,Ye as ACEX_PACKAGE_DIRECTORY_ORIGIN,$r as ACEX_PACKAGE_VERSION,Bo as ACEX_SNAPSHOT_COMPRESSION,$ as ACEX_SNAPSHOT_VERSION,Xl as AcApExportHtmlCmd,Gl as AcApHtmlConvertor,_l as AcApHtmlSnapshotBuilder,rc as AcExHtmlI18n,Ul as DEFAULT_HTML_VIEWER_RUNTIME_URL,Fc as HTML_PLUGIN_NAME,Mc as HTML_PLUGIN_TRIGGERS,Sc as HTML_VIEWER_RUNTIME_FILE,et as acExHtmlBase64ToBytes,ua as acExHtmlBytesToBase64,Qe as acexGlobalFetch,Ke as buildAcExHtmlAccessManifest,hl as buildAcExPackage,an as buildAcExPackageData,gs as buildOsnapCatalog,uc as buildPackageDirectoryFileMap,Ua as buildViewerMetadata,ic as canOpenLocalPackageFolder,Pl as captureAcApHtmlViewState,lc as chooseInitialManifestHref,Ri as circleOrArcToAcGe,vc as collectAcExEmbeddedChunkBytes,Li as collectBatchesFromObject3D,Vt as compressSnapshotBinary,Fl as configureHtmlPlugin,Al as consumeAcExEmbeddedChunkFromDom,Ac as createAcExDomEmbeddedPackageFetch,Cl as createAcExEmbeddedPackageFetch,la as createAcExHtmlAccessKey,aa as createAcExOrderedBytePrefetcher,Ec as createHtmlPlugin,mc as createPackageDirectoryFetch,zs as decodeChunkBinary,Nr as decodeChunkGzip,Er as decodeOsnapCatalogBinary,Vo as decodeOsnapCatalogGzip,ec as decodeSnapshot,Xo as decodeSnapshotBinary,ti as decodeSnapshotFromCompressedBytes,Yt as decompressSnapshotBinary,Cc as decryptAcExEmbeddedManifest,da as decryptAcExHtmlBytes,wc as decryptAcExHtmlSnapshotPayload,ks as detectAcExHtmlLocale,vs as detectBrowserAcExHtmlLocale,sc as detectLocalFolderOpenSupport,js as detectSharedDirectoryRoot,Bi as ellipseToAcGe,Cs as encodeChunkBinary,Es as encodeChunkGzip,zr as encodeOsnapCatalogBinary,_o as encodeOsnapCatalogGzip,Pr as encodeSnapshot,Go as encodeSnapshotBinary,ca as encryptAcExHtmlBytes,el as encryptAcExHtmlSnapshotPayload,yl as estimateAcExSnapshotGeometryBytes,Cr as estimateOsnapPrimitiveBytes,Ci as exportActiveBatchedLine2Slice,qt as exportActiveBatchedSlice,za as exportBufferGeometrySlice,pc as findDefaultManifestInDirectory,bc as formatAcExHtmlCountdown,gc as formatAcExHtmlExpiresAt,Ml as getHtmlPluginOptions,Bs as isAbsoluteHttpUrl,hc as isAcExHtmlAccessExpired,fc as isAcExHtmlExpiryCountdownActive,Is as isSafePackageHref,_a as listDatabaseLayouts,nc as loadAcExPackage,oc as loadAcExPackageLayout,Hs as loadAcExPackageLayoutOsnap,Zr as needsAcExHtmlAccessControl,Os as normalizePackageDirectoryPath,Gs as packHtml,xl as packHtmlEmbeddedPackage,Xs as packHtmlPackage,xc as parseAcExEmbeddedPackageConfig,yc as parseAcExHtmlAccessManifest,qe as parseAcExPackageManifest,ac as primitiveToAcGeCurve,dc as probePackageManifest,tl as protectAcExHtmlEncodedSnapshot,kc as readAcExEmbeddedChunkFromDom,Rs as readManifestUrlFromSearchParams,Qs as resolveAcApHtmlExpiresAt,ce as resolveAcApHtmlExportOptions,Le as resolveAcExHtmlLocale,ra as resolveChunkUrl,Ts as resolvePackageManifestUrl,cc as resolveViewerManifestUrl,Il as resolveViewerRuntimeUrl,wl as shouldEmbedAcExChunks,ri as snapshotMimeType,ai as snapshotPayloadToCompressedBytes,Ls as snapshotSkeletonFromManifest,Oi as splineToAcGe,pl as splitLayoutIntoSlices,$o as splitOsnapPrimitives,zc as unzipAcExPackageFiles,El as zipAcExPackageFiles};
