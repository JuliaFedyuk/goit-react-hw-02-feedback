(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{1:function(t,e,a){t.exports={statistics_wrapper:"Statistics_statistics_wrapper__1RqQ7",votes:"Statistics_votes__1s792",statistics_item:"Statistics_statistics_item__3S2Om",total:"Statistics_total__3r5Vu",statistics_total:"Statistics_statistics_total__32mYm"}},10:function(t,e,a){t.exports={title:"Section_title__2a6ZV"}},12:function(t,e,a){t.exports={text:"Info_text__YJC26"}},28:function(t,e,a){"use strict";a.r(e);var s=a(2),c=a.n(s),n=a(6),i=a.n(n),r=a(7),o=a(8),l=a(9),b=a(14),d=a(13),u=a(1),j=a.n(u),_=a(0),p=function(t){var e=t.good,a=t.neutral,s=t.bad,c=t.Total,n=t.Percentage;return Object(_.jsxs)("div",{className:j.a.statistics_wrapper,children:[Object(_.jsxs)("div",{className:j.a.votes,children:[Object(_.jsxs)("p",{className:j.a.statistics_item,children:["Good:",e]}),Object(_.jsxs)("p",{className:j.a.statistics_item,children:["Neutral:",a]}),Object(_.jsxs)("p",{className:j.a.statistics_item,children:["Bad:",s]})]}),Object(_.jsxs)("div",{className:j.a.total,children:[Object(_.jsxs)("p",{className:j.a.statistics_total,children:["Total:",c]}),Object(_.jsxs)("p",{className:j.a.statistics_total,children:["Positive feedback:",n," %"]})]})]})},h=a(10),O=a.n(h),x=function(t){var e=t.title,a=t.children;return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)("h2",{className:O.a.title,children:e}),a]})},m=a(11),v=a.n(m),f=a(5),k=a.n(f),g=function(t){var e=t.options,a=t.onLeaveFeedback;return Object(_.jsx)("div",{className:k.a.button_wrapper,children:e.map((function(t){return Object(_.jsx)("button",{className:k.a.button,type:"button",name:t,onClick:a,children:t},v.a.generate())}))})},N=a(12),F=a.n(N),w=function(t){var e=t.text;return Object(_.jsx)(_.Fragment,{children:Object(_.jsx)("p",{className:F.a.text,children:e})})},S=function(t){Object(b.a)(a,t);var e=Object(d.a)(a);function a(){var t;Object(o.a)(this,a);for(var s=arguments.length,c=new Array(s),n=0;n<s;n++)c[n]=arguments[n];return(t=e.call.apply(e,[this].concat(c))).state={good:0,neutral:0,bad:0},t.onLeaveFeedback=function(e){var a=e.target.name;t.setState((function(t){return Object(r.a)({},a,t[a]+1)}))},t.countTotalFeedback=function(){return Object.values(t.state).reduce((function(t,e){return t+e}),0)},t.countPositiveFeedbackPercentage=function(){var e=t.countTotalFeedback(),a=100*t.state.good/e;return Math.round(a)},t}return Object(l.a)(a,[{key:"render",value:function(){var t=this.state,e=t.good,a=t.neutral,s=t.bad,c=this.countTotalFeedback(),n=this.countPositiveFeedbackPercentage(),i=Object.keys(this.state);return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(x,{title:"Please leave feedback",children:Object(_.jsx)(g,{options:i,onLeaveFeedback:this.onLeaveFeedback})}),0===c?Object(_.jsx)(w,{text:"No feedback given"}):Object(_.jsx)(x,{title:"Statistics",children:Object(_.jsx)(p,{good:e,neutral:a,bad:s,Total:c,Percentage:n})})]})}}]),a}(s.Component);i.a.render(Object(_.jsx)(c.a.StrictMode,{children:Object(_.jsx)(S,{})}),document.getElementById("root"))},5:function(t,e,a){t.exports={button:"FeedbackOptions_button__1cNrH",button_wrapper:"FeedbackOptions_button_wrapper__8rCc0"}}},[[28,1,2]]]);
//# sourceMappingURL=main.b9486c48.chunk.js.map