import{f as B,K as w,l as k,o as e,w as M,z as x,D as v,g as b,P as F,a5 as K,a6 as G,M as $,N as U,H,a7 as W,a8 as q,a as i,c as n,m as d,B as S,F as h,t as p,y as Q,L as J,C as X,a2 as Y,b as u,E as Z,A as ee,a9 as te,a4 as oe,R as ne,G as re,a1 as R,i as ae,u as se,j as le,r as j,d as y,k as g}from"./BPNI_pLR.js";import{_ as ie}from"./D-1otYj8.js";import{_ as de}from"./DCYYB_Wv.js";import{_ as ue}from"./CeM_SP6C.js";import{_ as pe}from"./BFIrHV2u.js";import{_ as ce}from"./Bf1Dvcfx.js";import{_ as me}from"./icrldYbl.js";import{_ as _e}from"./Bu3Y09va.js";import{s as be,a as ve}from"./BMERn43G.js";import{s as fe}from"./C3xG7RkI.js";import{_ as ge}from"./BheWnx7M.js";import"./DOI-q_7_.js";import"./BaWiOujC.js";import"./N61w77W8.js";import"./Ch1KY2pn.js";import"./D5b1U5v9.js";import"./DKGqIdMn.js";const he=B({__name:"BaseSeparator",props:{orientation:{default:"horizontal"},decorative:{type:Boolean},asChild:{type:Boolean},as:{}},setup(t){const r=t,l=["horizontal","vertical"];function C(m){return l.includes(m)}const s=w(()=>C(r.orientation)?r.orientation:"horizontal"),c=w(()=>s.value==="vertical"?r.orientation:void 0),a=w(()=>r.decorative?{role:"none"}:{"aria-orientation":c.value,role:"separator"});return(m,z)=>(e(),k(b(F),v({as:m.as,"as-child":m.asChild,"data-orientation":s.value},a.value),{default:M(()=>[x(m.$slots,"default")]),_:3},16,["as","as-child","data-orientation"]))}}),ye=B({__name:"Separator",props:{orientation:{default:"horizontal"},decorative:{type:Boolean},asChild:{type:Boolean},as:{}},setup(t){const r=t;return(l,C)=>(e(),k(he,K(G(r)),{default:M(()=>[x(l.$slots,"default")]),_:3},16))}}),ke={slots:{root:"flex items-center align-center text-center",border:"",container:"font-medium text-[var(--ui-text)] flex",icon:"shrink-0 size-5",avatar:"shrink-0",avatarSize:"2xs",label:"text-sm"},variants:{color:{primary:{border:"border-[var(--ui-primary)]"},secondary:{border:"border-[var(--ui-secondary)]"},success:{border:"border-[var(--ui-success)]"},info:{border:"border-[var(--ui-info)]"},warning:{border:"border-[var(--ui-warning)]"},error:{border:"border-[var(--ui-error)]"},neutral:{border:"border-[var(--ui-border)]"}},orientation:{horizontal:{root:"w-full flex-row",border:"w-full",container:"mx-3 whitespace-nowrap"},vertical:{root:"h-full flex-col",border:"h-full",container:"my-2"}},size:{xs:"",sm:"",md:"",lg:"",xl:""},type:{solid:{border:"border-solid"},dashed:{border:"border-dashed"},dotted:{border:"border-dotted"}}},compoundVariants:[{orientation:"horizontal",size:"xs",class:{border:"border-t"}},{orientation:"horizontal",size:"sm",class:{border:"border-t-[2px]"}},{orientation:"horizontal",size:"md",class:{border:"border-t-[3px]"}},{orientation:"horizontal",size:"lg",class:{border:"border-t-[4px]"}},{orientation:"horizontal",size:"xl",class:{border:"border-t-[5px]"}},{orientation:"vertical",size:"xs",class:{border:"border-s"}},{orientation:"vertical",size:"sm",class:{border:"border-s-[2px]"}},{orientation:"vertical",size:"md",class:{border:"border-s-[3px]"}},{orientation:"vertical",size:"lg",class:{border:"border-s-[4px]"}},{orientation:"vertical",size:"xl",class:{border:"border-s-[5px]"}}],defaultVariants:{color:"neutral",size:"xs",type:"solid"}},Te=U;var L;const je=$({extend:$(ke),...((L=Te.ui)==null?void 0:L.separator)||{}}),Me=B({__name:"Separator",props:{as:{},label:{},icon:{},avatar:{},color:{},size:{},type:{},orientation:{default:"horizontal"},class:{},ui:{},decorative:{type:Boolean}},setup(t){const r=t,l=H(),C=W(q(r,"as","decorative","orientation")),s=w(()=>je({color:r.color,orientation:r.orientation,size:r.size,type:r.type}));return(c,a)=>{var m;return e(),k(b(ye),v(b(C),{class:s.value.root({class:[r.class,(m=r.ui)==null?void 0:m.root]})}),{default:M(()=>{var z,T,P;return[i("div",{class:S(s.value.border({class:(z=r.ui)==null?void 0:z.border}))},null,2),c.label||c.icon||c.avatar||l.default?(e(),n(h,{key:0},[i("div",{class:S(s.value.container({class:(T=r.ui)==null?void 0:T.container}))},[x(c.$slots,"default",{},()=>{var E,V,O,I;return[c.label?(e(),n("span",{key:0,class:S(s.value.label({class:(E=r.ui)==null?void 0:E.label}))},p(c.label),3)):c.icon?(e(),k(Q,{key:1,name:c.icon,class:S(s.value.icon({class:(V=r.ui)==null?void 0:V.icon}))},null,8,["name","class"])):c.avatar?(e(),k(J,v({key:2,size:((O=r.ui)==null?void 0:O.avatarSize)||s.value.avatarSize()},c.avatar,{class:s.value.avatar({class:(I=r.ui)==null?void 0:I.avatar})}),null,16,["size","class"])):d("",!0)]})],2),i("div",{class:S(s.value.border({class:(P=r.ui)==null?void 0:P.border}))},null,2)],64)):d("",!0)]}),_:3},16,["class"])}}}),xe=Object.assign(Me,{__name:"USeparator"});var Ce=function(r){var l=r.dt;return`
.p-panel {
    border: 1px solid `.concat(l("panel.border.color"),`;
    border-radius: `).concat(l("panel.border.radius"),`;
    background: `).concat(l("panel.background"),`;
    color: `).concat(l("panel.color"),`;
}

.p-panel-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: `).concat(l("panel.header.padding"),`;
    background: `).concat(l("panel.header.background"),`;
    color: `).concat(l("panel.header.color"),`;
    border-style: solid;
    border-width: `).concat(l("panel.header.border.width"),`;
    border-color: `).concat(l("panel.header.border.color"),`;
    border-radius: `).concat(l("panel.header.border.radius"),`;
}

.p-panel-toggleable .p-panel-header {
    padding: `).concat(l("panel.toggleable.header.padding"),`;
}

.p-panel-title {
    line-height: 1;
    font-weight: `).concat(l("panel.title.font.weight"),`;
}

.p-panel-content {
    padding: `).concat(l("panel.content.padding"),`;
}

.p-panel-footer {
    padding: `).concat(l("panel.footer.padding"),`;
}
`)},Pe={root:function(r){var l=r.props;return["p-panel p-component",{"p-panel-toggleable":l.toggleable}]},header:"p-panel-header",title:"p-panel-title",headerActions:"p-panel-header-actions",pcToggleButton:"p-panel-toggle-button",contentContainer:"p-panel-content-container",content:"p-panel-content",footer:"p-panel-footer"},ze=X.extend({name:"panel",theme:Ce,classes:Pe}),Se={name:"BasePanel",extends:re,props:{header:String,toggleable:Boolean,collapsed:Boolean,toggleButtonProps:{type:Object,default:function(){return{severity:"secondary",text:!0,rounded:!0}}}},style:ze,provide:function(){return{$pcPanel:this,$parentInstance:this}}},A={name:"Panel",extends:Se,inheritAttrs:!1,emits:["update:collapsed","toggle"],data:function(){return{id:this.$attrs.id,d_collapsed:this.collapsed}},watch:{"$attrs.id":function(r){this.id=r||R()},collapsed:function(r){this.d_collapsed=r}},mounted:function(){this.id=this.id||R()},methods:{toggle:function(r){this.d_collapsed=!this.d_collapsed,this.$emit("update:collapsed",this.d_collapsed),this.$emit("toggle",{originalEvent:r,value:this.d_collapsed})},onKeyDown:function(r){(r.code==="Enter"||r.code==="NumpadEnter"||r.code==="Space")&&(this.toggle(r),r.preventDefault())}},computed:{buttonAriaLabel:function(){return this.toggleButtonProps&&this.toggleButtonProps.ariaLabel?this.toggleButtonProps.ariaLabel:this.header}},components:{PlusIcon:ve,MinusIcon:be,Button:fe},directives:{ripple:ne}},De=["id"],Ee=["id","aria-labelledby"];function Ve(t,r,l,C,s,c){var a=Y("Button");return e(),n("div",v({class:t.cx("root")},t.ptmi("root")),[i("div",v({class:t.cx("header")},t.ptm("header")),[x(t.$slots,"header",{id:s.id+"_header",class:S(t.cx("title"))},function(){return[t.header?(e(),n("span",v({key:0,id:s.id+"_header",class:t.cx("title")},t.ptm("title")),p(t.header),17,De)):d("",!0)]}),i("div",v({class:t.cx("headerActions")},t.ptm("headerActions")),[x(t.$slots,"icons"),t.toggleable?(e(),k(a,v({key:0,id:s.id+"_header",class:t.cx("pcToggleButton"),"aria-label":c.buttonAriaLabel,"aria-controls":s.id+"_content","aria-expanded":!s.d_collapsed,unstyled:t.unstyled,onClick:c.toggle,onKeydown:c.onKeyDown},t.toggleButtonProps,{pt:t.ptm("pcToggleButton")}),{icon:M(function(m){return[x(t.$slots,t.$slots.toggleicon?"toggleicon":"togglericon",{collapsed:s.d_collapsed},function(){return[(e(),k(Z(s.d_collapsed?"PlusIcon":"MinusIcon"),v({class:m.class},t.ptm("pcToggleButton").icon),null,16,["class"]))]})]}),_:3},16,["id","class","aria-label","aria-controls","aria-expanded","unstyled","onClick","onKeydown","pt"])):d("",!0)],16)],16),u(oe,v({name:"p-toggleable-content"},t.ptm("transition")),{default:M(function(){return[ee(i("div",v({id:s.id+"_content",class:t.cx("contentContainer"),role:"region","aria-labelledby":s.id+"_header"},t.ptm("contentContainer")),[i("div",v({class:t.cx("content")},t.ptm("content")),[x(t.$slots,"default")],16),t.$slots.footer?(e(),n("div",v({key:0,class:t.cx("footer")},t.ptm("footer")),[x(t.$slots,"footer")],16)):d("",!0)],16,Ee),[[te,!s.d_collapsed]])]}),_:3},16)],16)}A.render=Ve;const Oe={key:0,class:"flex"},Ie={key:1},we={class:"grid grid-cols-1 md:grid-cols-2 gap-2"},Be={class:"border border-border p-3 rounded bg-back"},$e={class:"text-durability font-extrabold"},Re={class:"text-xs text-current/70"},Le={class:"flex"},Ae={key:0,class:"title"},Ne={key:1,class:"title"},Fe={key:0,class:"title"},Ke={key:1,class:"title"},Ge={key:0,class:"title"},Ue={key:1,class:"title"},He={key:2},We={key:0},qe={key:0},Qe={key:0},Je={key:1},Xe={key:0},Ye={key:3,class:"mt-6"},Ze={class:"flex flex-wrap"},et={key:0},tt={key:1,class:"mr-2"},ot={class:"text-durability"},nt={key:2},rt={key:3},at={key:4},st={class:"has-text-info"},lt={key:0},it={key:5},Ct=B({__name:"NPC",props:["id"],async setup(t){let r,l;const C=t,s=([r,l]=ae(()=>ge(Object.assign({"../../generated/npc/0_1301.json":()=>g(()=>import("./DAigsliy.js"),[],import.meta.url),"../../generated/npc/0_1302.json":()=>g(()=>import("./Bdd_5mr_.js"),[],import.meta.url),"../../generated/npc/0_1303.json":()=>g(()=>import("./PwolBw_q.js"),[],import.meta.url),"../../generated/npc/0_1304.json":()=>g(()=>import("./CvPYfdCm.js"),[],import.meta.url),"../../generated/npc/0_1305.json":()=>g(()=>import("./B3s7iMAC.js"),[],import.meta.url),"../../generated/npc/0_1306.json":()=>g(()=>import("./VQZkpxMN.js"),[],import.meta.url),"../../generated/npc/0_1307.json":()=>g(()=>import("./D0p9BKXJ.js"),[],import.meta.url),"../../generated/npc/0_1309.json":()=>g(()=>import("./Dazbqi_w.js"),[],import.meta.url),"../../generated/npc/0_1310.json":()=>g(()=>import("./CWHL84RI.js"),[],import.meta.url),"../../generated/npc/0_1311.json":()=>g(()=>import("./BsEEnuH7.js"),[],import.meta.url),"../../generated/npc/0_4786.json":()=>g(()=>import("./yhJwnFzE.js"),[],import.meta.url),"../../generated/npc/0_4787.json":()=>g(()=>import("./CjqguAsx.js"),[],import.meta.url)}),`../../generated/npc/${C.id}.json`,5)),r=await r,l(),r).default;return se({title:`${s.AgentName.Text} - ${le().$gameName}`}),(c,a)=>{const m=ie,z=de,T=ue,P=pe,E=ce,V=me,O=xe,I=_e,N=A;return e(),n("div",null,[i("h1",null,p(b(s).AgentName.Text),1),a[15]||(a[15]=i("div",null,null,-1)),b(s).WeightCategory?(e(),n("div",Oe,[u(m,{title:"类型",value:b(s).WeightCategory.CategoryName.Text??""},null,8,["value"]),u(m,{title:"最大负重",value:b(s).MaxCarryWeight},null,8,["value"])])):d("",!0),b(s).AgentStats.length>0?(e(),n("section",Ie,[a[0]||(a[0]=i("h2",{class:"title mt-4"},"状态",-1)),i("div",we,[(e(!0),n(h,null,j(b(s).AgentStats,o=>{var _,f;return e(),n("div",Be,[i("div",$e,p((_=o.ModelStat)==null?void 0:_.name),1),i("div",Re,p((f=o.ModelStat)==null?void 0:f.desc),1),i("div",Le,[u(m,{title:"初始值",value:o.OverrideStartingValue.FloatValue??""},null,8,["value"]),u(m,{title:"范围",value:""},{default:M(()=>[o.OverrideMinMaxValue.Active?(e(),n("p",Ae,p(o.OverrideMinMaxValue.FloatValue)+"~"+p(o.OverrideMinMaxValue.MaxValue),1)):(e(),n("p",Ne,p(o.ModelStat.DefaultMinMaxValue.x)+"~"+p(o.ModelStat.DefaultMinMaxValue.y),1))]),_:2},1024),u(m,{title:"变化率",value:""},{default:M(()=>[o.OverrideRate.Active?(e(),n("p",Fe,p(o.OverrideRate.FloatValue),1)):(e(),n("p",Ke,p(o.ModelStat.DefaultRate),1))]),_:2},1024),u(m,{title:"变化率范围",value:""},{default:M(()=>[o.OverrideMinMaxRate.Active?(e(),n("p",Ge,p(o.OverrideMinMaxRate.FloatValue)+"~"+p(o.OverrideMinMaxRate.MaxValue),1)):(e(),n("p",Ue,p(o.ModelStat.DefaultMinMaxRate.x)+"~"+p(o.ModelStat.DefaultMinMaxRate.y),1))]),_:2},1024)])])}),256))])])):d("",!0),b(s).StartingInventory.length>0?(e(),n("section",He,[a[4]||(a[4]=i("h2",{class:"title mt-4"},"交易",-1)),i("template",null,[a[1]||(a[1]=y(" 条件： ")),u(z,{obj:b(s).TradingConditions},null,8,["obj"])]),i("div",null,[a[2]||(a[2]=y(" 初始背包： ")),(e(!0),n(h,null,j(b(s).StartingInventory,(o,_)=>(e(),n(h,null,[_>0?(e(),n("span",We,", ")):d("",!0),u(T,{obj:o.Item},null,8,["obj"]),o.Item?(e(),k(P,{key:1,obj:o.Quantity},null,8,["obj"])):d("",!0)],64))),256))]),(e(!0),n(h,null,j(b(s).TradingModifiers,o=>(e(),n("div",null,[o.TargetItems.filter(_=>!!(_!=null&&_.Target)).length>0?(e(),n("span",qe,[i("div",null,[a[3]||(a[3]=y("▫️ 交易 ")),(e(!0),n(h,null,j(o.TargetItems,(_,f)=>(e(),n(h,null,[f>0?(e(),n("span",Qe,", ")):d("",!0),_.Target?(e(),n("span",Je,[u(T,{obj:_.Target},null,8,["obj"])])):d("",!0)],64))),256)),y(" 时价值 "+p(o.ModifierMode==0?"+":"x")+p(o.SimpleModifier),1)]),o.GlobalStatModifiers.length>0?(e(),n("div",Xe,[(e(!0),n(h,null,j(o.GlobalStatModifiers,_=>(e(),n("span",null,[u(T,{obj:_.Stat},null,8,["obj"]),u(E,{obj:_.Modifier},null,8,["obj"])]))),256))])):d("",!0)])):d("",!0)]))),256))])):d("",!0),b(s).AgentActions.length>0?(e(),n("section",Ye,[a[14]||(a[14]=i("h2",{class:"title"},"动作",-1)),i("div",Ze,[(e(!0),n(h,null,j(b(s).AgentActions,o=>{var _;return e(),k(N,{header:(_=o.ActionLocalizedName)==null?void 0:_.Text,class:"m-2"},{default:M(()=>[(e(!0),n(h,null,j(o.StatModifications,f=>(e(),n("div",null,[a[5]||(a[5]=i("span",{class:"text-title"},"影响状态：",-1)),u(V,{obj:f},null,8,["obj"])]))),256)),o.Conditions?(e(),n("div",et,[u(z,{obj:o.Conditions},null,8,["obj"])])):d("",!0),o.NPCStatModifications.length>0?(e(),n("div",tt,[a[6]||(a[6]=i("span",{class:"text-title"},"影响NPC状态：",-1)),(e(!0),n(h,null,j(o.NPCStatModifications,f=>{var D;return e(),n("span",null,[i("span",ot,p((D=f.TargetStat)==null?void 0:D.name),1),u(P,{obj:f.ValueChange,sign:!0},null,8,["obj"])])}),256))])):d("",!0),o.MoveToEnvironment?(e(),n("div",nt,[a[7]||(a[7]=y(" 移动至： ")),o.MoveToEnvironment.envPlaceCard?(e(),k(T,{key:0,obj:o.MoveToEnvironment.envPlaceCard},null,8,["obj"])):d("",!0),a[8]||(a[8]=y(" (")),u(T,{obj:o.MoveToEnvironment},null,8,["obj"]),a[9]||(a[9]=y(") "))])):d("",!0),o.MoveToPlayerEnvironment?(e(),n("div",rt," 移动至玩家 ")):d("",!0),o.Tracks.Active?(e(),n("div",at,[a[11]||(a[11]=y(" 脚印： 时间")),u(P,{obj:o.Tracks.TrackLifetime,sign:!0},null,8,["obj"]),a[12]||(a[12]=y(" ，发现几率")),u(P,{obj:o.Tracks.AddedChanceToDiscoverTracks,sign:!0},null,8,["obj"]),a[13]||(a[13]=y(" ，方向")),i("span",st,p(["北","南","东","西"][o.Tracks.TracksDirection]),1),o.Tracks.OverrideDefaultTracksCard?(e(),n("span",lt,[a[10]||(a[10]=y(" 替换事件")),u(T,{obj:o.Tracks.OverrideDefaultTracksCard},null,8,["obj"])])):d("",!0)])):d("",!0),o.DroppedCards.length>0?(e(),n("div",it,[u(O,{label:"掉落",class:"max-w-100"}),(e(!0),n(h,null,j(o.DroppedCards,f=>{var D;return e(),n("span",null,[u(I,{obj:f,card:(D=f.DroppedCards[0])==null?void 0:D.DroppedCard},null,8,["obj","card"])])}),256))])):d("",!0)]),_:2},1032,["header"])}),256))])])):d("",!0)])}}});export{Ct as default};
