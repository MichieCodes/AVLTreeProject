(this["webpackJsonpavl-trees"]=this["webpackJsonpavl-trees"]||[]).push([[0],{122:function(e,t,n){},123:function(e,t,n){},124:function(e,t,n){},125:function(e,t,n){},126:function(e,t,n){},127:function(e,t,n){},133:function(e,t,n){},134:function(e,t,n){},135:function(e,t,n){},136:function(e,t,n){},137:function(e,t,n){},138:function(e,t,n){},139:function(e,t,n){},140:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(42),l=n.n(o),i=n(5),c=n(4),u=n(37);n(80);function s(e){var t=e.NotificationOptions,n=e.onClose,a=r.a.useRef(null),o=r.a.useState(!1),l=Object(c.a)(o,2),i=l[0],u=l[1];return r.a.useEffect((function(){if(a.current){var e=a.current;return e.style.height="".concat(e.scrollHeight,"px"),t.timeout&&e.style.setProperty("--Notif-Progress-Animation","Notif-Progress ".concat(t.timeout/1e3,"s")),e.onanimationend=function(e){"Notif-ScaleOut"===e.animationName?n(t.id):"Notif-Progress"===e.animationName&&u(!0)},function(){clearTimeout(e),e.onanimationend=null}}}),[a,t,n,u]),r.a.createElement("div",{ref:a,className:"NotificationWrapper ".concat(i?"NotificationSlideOut":"")},r.a.createElement("div",{className:"Notification",onClick:function(){return u(!0)}},r.a.createElement("b",null,t.type||"Error")," | ",t.title,t.body&&r.a.createElement("p",null,t.body)))}var m=function(e){var t=e.Notifications,n=e.onClose;return r.a.createElement("div",{className:"NotificationList"},t.map((function(e){return r.a.createElement(s,{key:e.id,NotificationOptions:e,onClose:n})})))},d=r.a.createContext(),f=0;function v(e){var t=e.children,n=r.a.useState([]),a=Object(c.a)(n,2),o=a[0],l=a[1],i=r.a.useCallback((function(e){e.id=f++,l((function(t){return[].concat(Object(u.a)(t),[e])}))}),[l]),s=r.a.useCallback((function(e){return l((function(t){return t.length<=1&&(f=0),t.filter((function(t){return t.id!==e}))}))}),[l]);return r.a.createElement(d.Provider,{value:i},t,o.length>0?r.a.createElement(m,{Notifications:o,onClose:s}):r.a.createElement(r.a.Fragment,null))}var E=function(){return r.a.useContext(d)},p=r.a.createContext(),y=r.a.createContext();function b(e){var t=e.children,n=r.a.useState(null),a=Object(c.a)(n,2),o=a[0],l=a[1],i=r.a.useState(null),u=Object(c.a)(i,2),s=u[0],m=u[1],d=r.a.useState([]),f=Object(c.a)(d,2),v=f[0],E=f[1],b=r.a.useState([]),h=Object(c.a)(b,2),C=h[0],g=h[1];return r.a.createElement(y.Provider,{value:{setAVLTreeData:l,setBinaryTreeData:m,setAVLTreeLogs:E,setBinaryTreeLogs:g}},r.a.createElement(p.Provider,{value:{AVLTreeData:o,BinaryTreeData:s,AVLTreeLogs:v,BinaryTreeLogs:C}},t))}var h=function(){return r.a.useContext(p)},C=function(){return r.a.useContext(y)},g=function(e,t){switch(t.type){case"SET_BOOKS":return t.payload;case"UPDATE_BOOK":return e.map((function(e){return e.id===t.payload.id?t.payload:e}));case"CREATE_BOOK":return[].concat(Object(u.a)(e),[t.payload]);case"DELETE_BOOK":return e.filter((function(e){return e.id!==t.payload}));case"DELETE_ALL_BOOKS":return[];default:return console.log("ERROR"),e}};var T=r.a.createContext(),k=r.a.createContext();function O(e){var t=e.children,n=function(){var e=r.a.useReducer(g,[]),t=Object(c.a)(e,2),n=t[0],a=t[1];return[n,r.a.useCallback((function(e,t){return a({type:e,payload:t})}),[])]}(),a=Object(c.a)(n,2),o=a[0],l=a[1];return r.a.createElement(k.Provider,{value:l},r.a.createElement(T.Provider,{value:o},t))}var N=function(){return r.a.useContext(k)};n(81);var B=function(e){var t=e.style,n=e.children,a=e.onClick;return r.a.createElement("button",{className:"PrimaryButton",style:t,onClick:a},n)};n(82);var S=function(e){var t=e.Buttons,n=e.className,a=e.children;return r.a.createElement("div",{className:"DisplayPanel"},r.a.createElement("div",{className:"Display".concat(n?" ".concat(n):"")},a),(null===t||void 0===t?void 0:t.length)&&r.a.createElement("div",{className:"PanelButtonGroup"},t.map((function(e,t){return r.a.createElement(B,{key:t,onClick:e.action},e.text)}))))},L=n(70),A=n.n(L);n(122);var j=function(e){var t=e.TreeData,n=e.keyProperty,a=e.DisplayText,o=e.TreeNode,l=e.Size,i=void 0===l?175:l,u=e.Separation,s=void 0===u?{siblings:1.45,nonSiblings:1.45}:u,m=r.a.useRef(null),d=r.a.useState({x:0,y:0}),f=Object(c.a)(d,2),v=f[0],E=f[1];return r.a.useEffect((function(){var e;if(m.current){var t=m.current.getBoundingClientRect(),n=t.width,a=t.height,r=((null===(e=m.current.querySelector(".rd3t-tree-container > svg > g"))||void 0===e?void 0:e.getBoundingClientRect())||{}).height;E({x:n/2,y:r&&r<=a?(a-r)/2:15})}}),[m,E]),r.a.createElement(r.a.Fragment,null,t?r.a.createElement("div",{ref:m,style:{width:"100%",height:"100%"}},r.a.createElement(A.a,{data:t,orientation:"vertical",collapsible:!1,translate:v,zoom:.5,separation:s,nodeSvgShape:{shape:"none"},styles:{links:{strokeWidth:4}},allowForeignObjects:!0,nodeLabelComponent:{render:r.a.createElement(o,{keyProperty:n}),foreignObjectWrapper:{width:i,x:-i/2,y:-20,overflow:"visible"}}})):r.a.createElement("span",null,a))};n(123);var x=function(e){var t=r.a.useRef(null),n=r.a.useRef(null),a=r.a.useState(!1),o=Object(c.a)(a,2),l=o[0],i=o[1];return r.a.useEffect((function(){if(!(t.current.offsetWidth>=t.current.scrollWidth)){var n=t.current,a=n.scrollWidth-n.offsetWidth;return n.style.width="".concat(n.offsetWidth,"px"),n.style.setProperty("--scroll-amount","-".concat(a,"px - ").concat(e.offset||"0px")),n.onmouseover=function(){var t=parseFloat(getComputedStyle(n).textIndent);n.style.setProperty("--scroll-in-from","".concat(t,"px")),n.style.animation="Scroll-In ".concat((e.timeStretch||2)*(a-Math.abs(t))/a,"s ease-in-out forwards")},n.onmouseout=function(){var t=parseFloat(getComputedStyle(n).textIndent);n.style.setProperty("--scroll-out-from","".concat(t,"px")),n.style.animation="Scroll-Out ".concat((e.timeStretch||2)*Math.abs(t)/a,"s ease-in-out")},function(){n.onmouseover=null,n.onmouseout=null,n.style.width=null}}t.current.style.setProperty("--scroll-amount","0px")}),[t,l,e.timeStretch,e.enabled,e.offset,e.children]),r.a.useEffect((function(){return n.current=new ResizeObserver((function(){return i((function(e){return!e}))})),n.current.observe(t.current.parentNode),function(){return n.current.disconnect()}}),[t,n,i]),r.a.createElement("span",{className:e.className,ref:t,style:e.style},e.children)},P=[{title:"ISBN",displayName:"ISBN"},{title:"title",displayName:"Title"},{title:"author",displayName:"Author"}];var w=function(e){var t=e.nodeData,n=e.keyProperty,a=void 0===n?"ISBN":n,o=r.a.useRef(null),l=r.a.useState(null),i=Object(c.a)(l,2),u=i[0],s=i[1],m=(null===t||void 0===t?void 0:t.attributes)?t.attributes[a]:null;return r.a.useEffect((function(){if(t&&!t.attributes){var e=document.querySelector('[data-target-id*="'.concat(t.id,'"]'));e&&e.classList.add("EmptyTreeNode")}})),r.a.createElement("div",{className:"TreeNode ".concat(m?"":"EmptyTreeNode")},r.a.createElement("span",{onMouseOver:m?function(){o.current=setTimeout((function(){s(!0)}),1e3)}:null,onMouseLeave:m?function(){clearTimeout(o.current),o.current=null,s((function(e){return!e&&null}))}:null},r.a.createElement(x,{timeStretch:.95,offset:"6px"},m)),r.a.createElement("div",{className:"ToolTip",style:{animation:u?"ToolTipScaleIn 0.3s ease-in-out forwards":null}},P.map((function(e,n){return e.title!==a?r.a.createElement("span",{key:n},r.a.createElement("b",null,e.displayName,": "),m&&t.attributes[e.title]):null}))))},D=n(10);n(124);var I=function(e){var t=e.radio,n=e.defaultChecked,a=e.label,o=e.onChange,l=e.size,i=void 0===l?40:l,c=e.fontSize,u=r.a.useRef(null);return r.a.useEffect((function(){u.current.checked=n}),[u,n]),r.a.createElement("label",{className:"CheckBox"},r.a.createElement("input",{ref:u,type:t?"radio":"checkbox",name:t,onChange:o}),r.a.createElement("span",{className:"CheckMark Input",style:{width:"".concat(i,"px"),height:"".concat(i,"px")}},r.a.createElement("span",null,"x")),a&&r.a.createElement("span",{className:"CheckBoxLabel",style:{fontSize:c}},a))},F=n(74);function R(e,t,n){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:n;e&&(e.classList.add(n),e.onanimationend=function(e){e.animationName===a&&t()})}n(125);var G=function(e){var t=r.a.useRef(null),n=r.a.useRef(null),a=function(a,r){if(t.current&&n.current){a.persist();R(n.current,(function(){"function"===typeof r&&r(),R(t.current,(function(){return e.CloseCallback(e.PassCloseEvent?a:null)}),"OverlayFadeOut")}),"ModalFadeOut")}};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"Overlay",ref:t,onClick:a}),r.a.createElement("div",Object.assign({className:"PrimaryModal",ref:n,style:e.style},e.ModalOptions),r.a.createElement("h2",{className:"ModalHeader"},e.HeaderTitle||"Header",r.a.createElement("span",{className:"CloseButton",onClick:a},"x")),r.a.createElement("div",{className:"ModalContentContainer"},r.a.createElement("div",{className:"ModalContent"},e.children),(e.LeftTitle||e.LeftAction||e.RightTitle||e.RightAction)&&r.a.createElement("div",{className:"ModalButtonContainer"},r.a.createElement(B,{onClick:e.LeftAction?function(t){return e.LeftAction((function(e){return a(t,e)}))}:null},e.LeftTitle||"Cancel"),r.a.createElement(B,{onClick:e.RightAction?function(t){return e.RightAction((function(e){return a(t,e)}))}:null},e.RightTitle||"Save")))))};n(126);var M=function(e){return r.a.createElement(G,{HeaderTitle:e.HeaderTitle,CloseCallback:e.CloseCallback,LeftTitle:e.LeftTitle||"Cancel",LeftAction:e.LeftAction?function(t){return e.LeftAction(t)}:null,RightAction:e.RightAction?function(t){return e.RightAction(t)}:null,RightTitle:e.RightTitle||"Confirm",ModalOptions:Object(F.a)({className:"PrimaryModal SecondaryModal"},e.ModalOptions),style:e.style},e.children)};n(127);var $=function(e){var t=e.Loading,n=e.CloseCallback,a=r.a.useRef(null);return r.a.useEffect((function(){n&&!1===t&&R(a.current,(function(){return n()}),"OverlayFadeOut")}),[a,t,n]),r.a.createElement("div",{ref:a,className:"Overlay SpinnerOverlay"},r.a.createElement("svg",{className:"Spinner",width:"14rem",viewBox:"0 0 50 50",fill:"none"},r.a.createElement("circle",{className:"SpinnerStroke",cx:"25",cy:"25",r:"19.5",strokeWidth:5.9}),r.a.createElement("circle",{className:"SpinnerPath",cx:"25",cy:"25",r:"19.5",strokeWidth:6})))};function V(){var e=Object(D.a)(["\n  fragment fields on AVLTreeDisplay {\n    name attributes {ISBN title author}\n  }\n\n  fragment recursiveFields on AVLTreeDisplay {\n    children {\n      ...fields\n      children {\n        ...fields\n        children {\n          ...fields \n          children {\n          ...fields\n            children {...fields}\n          }\n        }\n      }\n    }\n  }\n\n  query GenerateAVLTree($comparator: String) {\n    GenerateAVLTree(comparator: $comparator) {\n      ...fields ...recursiveFields \n    }\n  }\n"]);return V=function(){return e},e}var z=[{title:"ISBN",displayName:"ISBN"},{title:"title",displayName:"Title"},{title:"author",displayName:"Author"}],q=Object(i.gql)(V());var W=function(e){var t=e.setSelected,n=e.CloseCallback,a=r.a.useState(!1),o=Object(c.a)(a,2),l=o[0],u=o[1],s=r.a.useState(!1),m=Object(c.a)(s,2),d=m[0],f=m[1],v=r.a.useState((function(){return 0})),p=Object(c.a)(v,2),y=p[0],b=p[1],h=r.a.useState(z[0].title),g=Object(c.a)(h,2),T=g[0],k=g[1],O=C().setAVLTreeData,N=E(),B=Object(i.useLazyQuery)(q,{fetchPolicy:"cache-and-network",onCompleted:function(e){u(!1),setTimeout((function(){O((function(){return[e.GenerateAVLTree]})),y&&y(),b(null),N({type:"Success",title:"Generated Tree",body:"Please Check Logs",timeout:4500})}),500)},onError:function(){setTimeout((function(){y&&y(),N({title:"Failed To Generate Tree",body:"Please Try Again Another Time",timeout:4500})}),500)}}),S=Object(c.a)(B,1)[0];return r.a.createElement(r.a.Fragment,null,r.a.createElement(M,{HeaderTitle:"Choose Property To Compare",CloseCallback:n,LeftTitle:"Cancel",RightTitle:"Choose",LeftAction:function(e){return e()},RightAction:function(e){u(!0),b(e),t(T),S({variables:{comparator:T}})}},r.a.createElement("div",{className:"PropertyRadioButtonGroup"},z.map((function(e,t){return r.a.createElement(I,{key:t,radio:"BookProperties",label:e.displayName,defaultChecked:e.title===T,onChange:function(){return k(e.title)}})})))),d&&r.a.createElement($,{Loading:l,CloseCallback:f}))};function H(){var e=Object(D.a)(["\n  mutation DeleteBook($id: Int!) {DeleteBook(id: $id)}\n"]);return H=function(){return e},e}var _=Object(i.gql)(H());var K=function(e){var t=e.setSelectedBook,n=r.a.useContext(T),a=N(),o=E(),l=Object(i.useMutation)(_,{errorPolicy:"all",onCompleted:function(e){e.DeleteBook>=0&&a("DELETE_BOOK",e.DeleteBook),setTimeout((function(){o({type:"Success",title:"Book Deleted",timeout:4500})}),500)},onError:function(){setTimeout((function(){o({title:"Failed To Delete Book",body:"Please Try Again Another Time",timeout:4500})}),500)}}),u=Object(c.a)(l,1)[0];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"BookTable"},n.length>0&&r.a.createElement("div",{style:{overflow:"auto",maxHeight:"45vh"}},r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"ISBN"),r.a.createElement("th",null,"Title"),r.a.createElement("th",null,"Author"),r.a.createElement("th",null))),r.a.createElement("tbody",null,n.map((function(e,n){return r.a.createElement("tr",{key:n},r.a.createElement("td",{className:"BookProperty"},r.a.createElement(x,null,e.ISBN)),r.a.createElement("td",{className:"BookProperty"},r.a.createElement(x,{style:{maxWidth:"15rem"}},e.title)),r.a.createElement("td",{className:"BookProperty"},r.a.createElement(x,{style:{maxWidth:"10rem"}},e.author)),r.a.createElement("td",{className:"BookActionButtonGroup"},r.a.createElement("button",{onClick:function(){return t(e)}},"Edit"),r.a.createElement("button",{onClick:function(){return u({variables:{id:e.id}})}},"Delete")))}))))),r.a.createElement(B,{style:n.length?null:{marginTop:"0"},onClick:function(){return t({})}},"Create New Book")))};n(133);var U=function(e){var t=e.value,n=e.label,a=e.onChange,o=e.size,l=void 0===o?40:o,i=e.fontSize;return r.a.createElement("label",{className:"TextInput"},n&&r.a.createElement("span",{className:"InputLabel",style:{fontSize:i}},n),r.a.createElement("input",{className:"Input",type:"text",style:{height:"".concat(l,"px")},value:t,onChange:a}))};function Q(){var e=Object(D.a)(["\n  mutation CreateBook($ISBN: String!, $title: String!, $author: String!) {\n    CreateBook(ISBN: $ISBN, title: $title, author: $author) {\n      id ISBN title author\n    }\n  }\n"]);return Q=function(){return e},e}function J(){var e=Object(D.a)(["\n  mutation UpdateBook($id: Int!, $ISBN: String!, $title: String!, $author: String!) {\n    UpdateBook(id: $id, ISBN: $ISBN, title: $title, author: $author) {\n      id ISBN title author\n    }\n  }\n"]);return J=function(){return e},e}var Z=Object(i.gql)(J()),X=Object(i.gql)(Q());var Y=function(e){var t=e.Book,n=e.CloseCallback,a=r.a.useState((function(){return 0})),o=Object(c.a)(a,2),l=o[0],u=o[1],s=r.a.useState((null===t||void 0===t?void 0:t.ISBN)||""),m=Object(c.a)(s,2),d=m[0],f=m[1],v=r.a.useState((null===t||void 0===t?void 0:t.title)||""),p=Object(c.a)(v,2),y=p[0],b=p[1],h=r.a.useState((null===t||void 0===t?void 0:t.author)||""),C=Object(c.a)(h,2),g=C[0],T=C[1],k=N(),O=E(),B=Object(i.useMutation)(X,{errorPolicy:"all",onCompleted:function(e){k("CREATE_BOOK",e.CreateBook),l&&l(),setTimeout((function(){O({type:"Success",title:"Book Created",timeout:4500})}),500),u(null)},onError:function(){setTimeout((function(){O({title:"Failed To Create Book",body:"Please Try Again",timeout:4500})}),500),u(null)}}),S=Object(c.a)(B,1)[0],L=Object(i.useMutation)(Z,{errorPolicy:"all",onCompleted:function(e){k("UPDATE_BOOK",e.UpdateBook),l&&l(),setTimeout((function(){O({type:"Success",title:"Book Updated",timeout:4500})}),500),u(null)},onError:function(){setTimeout((function(){O({title:"Failed To Update Book",body:"Please Try Again",timeout:4500})}),500),u(null)}}),A=Object(c.a)(L,1)[0];return r.a.createElement(M,{HeaderTitle:"".concat((null===t||void 0===t?void 0:t.ISBN)?"Edit":"Create"," Book"),CloseCallback:n,LeftTitle:"Cancel",RightTitle:"Save",LeftAction:function(e){return e()},RightAction:function(e){d.trim()&&y.trim()&&g.trim()?(u(e),t.id?A({variables:{id:t.id,ISBN:d,title:y,author:g}}):S({variables:{ISBN:d,title:y,author:g}})):O({title:"Empty Fields",body:"Please Fill out all Field Inputs",timeout:4500})}},r.a.createElement("div",{className:"PropertyInputGroup"},r.a.createElement("span",{className:"InputLabel"},"ISBN:"),r.a.createElement(U,{value:d,onChange:function(e){return f(e.target.value)}}),r.a.createElement("span",{className:"InputLabel"},"Title:"),r.a.createElement(U,{value:y,onChange:function(e){return b(e.target.value)}}),r.a.createElement("span",{className:"InputLabel"},"Author:"),r.a.createElement(U,{value:g,onChange:function(e){return T(e.target.value)}})))};function ee(){var e=Object(D.a)(["\n  mutation LoadBooksFromText($text: String, $append: Boolean!) {\n    LoadBooksFromText(text: $text, append: $append)\n  }\n"]);return ee=function(){return e},e}function te(){var e=Object(D.a)(["\n  mutation DeleteAllBooks {DeleteAllBooks}\n"]);return te=function(){return e},e}function ne(){var e=Object(D.a)(["\n  query GetBooks {GetBooks {id ISBN title author}}\n"]);return ne=function(){return e},e}var ae=Object(i.gql)(ne()),re=Object(i.gql)(te()),oe=Object(i.gql)(ee());var le=function(e){var t=e.CloseCallback,n=r.a.useState(!0),a=Object(c.a)(n,2),o=a[0],l=a[1],u=r.a.useState(!0),s=Object(c.a)(u,2),m=s[0],d=s[1],f=r.a.useState(null),v=Object(c.a)(f,2),p=v[0],y=v[1],b=N(),h=E(),C=Object(i.useLazyQuery)(ae,{fetchPolicy:"cache-and-network",onCompleted:function(e){b("SET_BOOKS",e.GetBooks),setTimeout((function(){l(!1)}),500)},onError:function(){setTimeout((function(){l(!1),t(),h({title:"Failed To Get Books",body:"Please Try Again Another Time",timeout:4500})}),500)}}),g=Object(c.a)(C,1)[0],T=Object(i.useMutation)(re,{errorPolicy:"all",onCompleted:function(){b("DELETE_ALL_BOOKS"),setTimeout((function(){h({type:"Success",title:"All Books Deleted",timeout:4500})}),500)},onError:function(){setTimeout((function(){h({title:"Failed To Delete All Books",body:"Please Try Again Another Time",timeout:4500})}),500)}}),k=Object(c.a)(T,1)[0],O=Object(i.useMutation)(oe,{errorPolicy:"all",onCompleted:function(){g(),setTimeout((function(){h({type:"Success",title:"Books Loaded",timeout:4500})}),500)},onError:function(){setTimeout((function(){h({title:"Failed To Load Books",body:"Please Try Again Another Time",timeout:4500})}),500)}}),S=Object(c.a)(O,1)[0];return r.a.useEffect((function(){return g()}),[g]),r.a.createElement(r.a.Fragment,null,m?r.a.createElement($,{Loading:o,CloseCallback:d}):r.a.createElement(r.a.Fragment,null,r.a.createElement(G,{HeaderTitle:"Book Editor",CloseCallback:t,style:{minWidth:"45vw",maxWidth:"55vw"}},r.a.createElement("div",{className:"BookListButtonGroup"},r.a.createElement(B,{onClick:function(){return S({variables:{append:!1}})}},"Load Default"),r.a.createElement(B,null,r.a.createElement("label",null,"Load From File",r.a.createElement("input",{type:"file",accept:".txt",onChange:function(e){var t=e.target,n=t.files?t.files[0]:null;if(window.FileReader)if(n){var a=new FileReader;a.onload=function(e){var n;S({variables:{text:null===e||void 0===e||null===(n=e.target)||void 0===n?void 0:n.result,append:!1}}),t.value=""},a.readAsText(n,"UTF-8")}else h({title:"No File Loaded",body:"Please Manully Enter Data",timeout:4500});else h({title:"Can't read file",body:"Please Manully Enter Data",timeout:4500})}}))),r.a.createElement(B,{onClick:function(){return k()}},"Delete All")),r.a.createElement(K,{setSelectedBook:y})),p&&r.a.createElement(Y,{Book:p,CloseCallback:y})))};n(134);var ie=function(e){var t=e.Logs,n=e.CloseCallback;return r.a.createElement(G,{HeaderTitle:"Logs",CloseCallback:n},r.a.createElement("div",{className:"Logs"},(null===t||void 0===t?void 0:t.length)?r.a.createElement("ul",null,null===t||void 0===t?void 0:t.map((function(e,t){return r.a.createElement("li",{key:t},e)}))):r.a.createElement("center",null,"No Logs To Display")))};function ce(){var e=Object(D.a)(["\n  query GetAVLTreeLogs {GetAVLTreeLogs}\n"]);return ce=function(){return e},e}var ue=Object(i.gql)(ce());var se=function(e){var t=e.CloseCallback,n=r.a.useState(!0),a=Object(c.a)(n,2),o=a[0],l=a[1],u=r.a.useState(!0),s=Object(c.a)(u,2),m=s[0],d=s[1],f=h().AVLTreeLogs,v=C().setAVLTreeLogs,p=E(),y=Object(i.useLazyQuery)(ue,{fetchPolicy:"cache-and-network",onCompleted:function(e){console.log(e.GetAVLTreeLogs),setTimeout((function(){l(!1),v(e.GetAVLTreeLogs)}),500)},onError:function(){setTimeout((function(){t(),p({title:"Failed To Get Logs",body:"Please Try Again Another Time",timeout:4500})}),500)}}),b=Object(c.a)(y,1)[0];return r.a.useEffect((function(){b()}),[b]),r.a.createElement(r.a.Fragment,null,m?r.a.createElement($,{Loading:o,CloseCallback:d}):r.a.createElement(ie,{Logs:f,CloseCallback:t}))};n(135);var me=function(){var e=r.a.useState(!1),t=Object(c.a)(e,2),n=t[0],a=t[1],o=r.a.useState(!1),l=Object(c.a)(o,2),i=l[0],u=l[1],s=r.a.useState(!1),m=Object(c.a)(s,2),d=m[0],f=m[1],v=r.a.useState("ISBN"),E=Object(c.a)(v,2),p=E[0],y=E[1],b=r.a.useRef([{text:"Edit Books",action:function(){return u(!0)}},{text:"Generate AVL Tree",action:function(){return a(!0)}},{text:"View Logs",action:function(){return f(!0)}}]),C=h().AVLTreeData;return r.a.createElement(r.a.Fragment,null,r.a.createElement(S,{Buttons:b.current},r.a.createElement(j,{key:C,DisplayText:"Please Generate An AVL Tree",TreeData:C,TreeNode:w,keyProperty:p})),n&&r.a.createElement(W,{CloseCallback:a,setSelected:y}),r.a.createElement(O,null,i&&r.a.createElement(le,{CloseCallback:u})),d&&r.a.createElement(se,{CloseCallback:f}))};var de=function(e){var t=e.nodeData;return r.a.useEffect((function(){if(t&&!t.name){var e=document.querySelector('[data-target-id*="'.concat(t.id,'"]'));e&&e.classList.add("EmptyTreeNode")}})),r.a.createElement("div",{className:"TreeNode BinaryTreeNode ".concat((null===t||void 0===t?void 0:t.name)?"":"EmptyTreeNode")},r.a.createElement("span",null,r.a.createElement("span",null,null===t||void 0===t?void 0:t.name)))};function fe(e){var t=e.size,n=void 0===t?16:t,a=e.color,o=e.strokeColor,l=e.className,i=e.style,c=e.onClick;return r.a.createElement("svg",{width:n,className:l,style:i,viewBox:"0 0 16 11",fill:"none",xmlns:"http://www.w3.org/2000/svg",onClick:c},r.a.createElement("path",{d:"M5.97163 9.66887C6.40428 10.1978 7.17314 10.5 8 10.5C8.82686 10.5 9.59572 10.1978 10.0284 9.66887L15.1893 3.35897C15.6136 2.84015 15.5787 2.28394 15.2338 1.821C14.8715 1.33452 14.1382 0.932836 13.1609 0.932836H2.83908C1.86176 0.932836 1.12854 1.33452 0.766171 1.821C0.421343 2.28394 0.386374 2.84016 0.810715 3.35897L5.97163 9.66887Z",fill:a,stroke:o}))}function ve(e){var t=e.size,n=e.color,a=e.offset,o=void 0===a?"0.525rem":a,l=e.className,i=e.TopAction,c=e.BottomAction;return r.a.createElement("span",{className:l},r.a.createElement(fe,{className:"Arrow",style:{transform:"scale(-1)",top:o},size:t,color:n,onClick:i}),r.a.createElement(fe,{className:"Arrow",style:{bottom:o},size:t,color:n,onClick:c}))}n(136);var Ee=function(e){var t=e.label,n=e.value,a=e.min,o=e.max,l=e.step,i=e.onChange,c=e.size,u=void 0===c?40:c,s=e.width,m=void 0===s?"40%":s,d=e.fontSize;return r.a.createElement("label",{className:"NumberInput"},t&&r.a.createElement("span",{className:"InputLabel",style:{fontSize:d}},t),r.a.createElement("span",{style:{position:"relative",width:m}},r.a.createElement("input",{className:"Input",type:"number",style:{height:"".concat(u,"px")},value:n,min:a||0,max:o||10,step:l||1,onChange:i}),r.a.createElement(ve,{className:"Arrows"})))};function pe(){var e=Object(D.a)(["\n  fragment fields on BinaryTreeDisplay {name}\n\n  fragment recursiveFields on BinaryTreeDisplay {\n    children {\n      ...fields\n      children {\n        ...fields\n        children {\n          ...fields \n          children {\n          ...fields\n            children {...fields}\n          }\n        }\n      }\n    }\n  }\n\n  query GenerateBinaryTree($nodes: Int!) {\n    GenerateBinaryTree(nodes: $nodes) {\n      ...fields ...recursiveFields \n    }\n  }\n"]);return pe=function(){return e},e}var ye=Object(i.gql)(pe());var be=function(e){var t=e.CloseCallback,n=r.a.useState(!1),a=Object(c.a)(n,2),o=a[0],l=a[1],u=r.a.useState(!1),s=Object(c.a)(u,2),m=s[0],d=s[1],f=r.a.useState((function(){return 0})),v=Object(c.a)(f,2),p=v[0],y=v[1],b=r.a.useState(1),h=Object(c.a)(b,2),g=h[0],T=h[1],k=C().setBinaryTreeData,O=E(),N=Object(i.useLazyQuery)(ye,{fetchPolicy:"cache-and-network",onCompleted:function(e){l(!1),setTimeout((function(){k((function(){return[e.GenerateBinaryTree]})),p&&p(),y(null),O({type:"Success",title:"Generated Tree",body:"Please Check Logs",timeout:4500})}),500)},onError:function(){setTimeout((function(){p&&p(),O({title:"Failed To Generate Tree",body:"Please Try Again Another Time",timeout:4500})}),500)}}),B=Object(c.a)(N,1)[0];return r.a.createElement(r.a.Fragment,null,r.a.createElement(M,{HeaderTitle:"Choose Number of Nodes",CloseCallback:t,LeftTitle:"Cancel",RightTitle:"Choose",LeftAction:function(e){return e()},RightAction:function(e){l(!0),y(e),B({variables:{nodes:g}})}},r.a.createElement(Ee,{label:"Nodes:",value:g,max:100,onChange:function(e){return T(e.target.value)}})),m&&r.a.createElement($,{Loading:o,CloseCallback:d}))};function he(){var e=Object(D.a)(["\n  query GetBinaryTreeLogs {GetBinaryTreeLogs}\n"]);return he=function(){return e},e}var Ce=Object(i.gql)(he());var ge=function(e){var t=e.CloseCallback,n=r.a.useState(!0),a=Object(c.a)(n,2),o=a[0],l=a[1],u=r.a.useState(!0),s=Object(c.a)(u,2),m=s[0],d=s[1],f=h().BinaryTreeLogs,v=C().setBinaryTreeLogs,p=E(),y=Object(i.useLazyQuery)(Ce,{fetchPolicy:"cache-and-network",onCompleted:function(e){v((function(){return e.GetBinaryTreeLogs})),l(!1)},onError:function(){setTimeout((function(){t(),p({title:"Failed To Get Logs",body:"Please Try Again Another Time",timeout:4500})}),500)}}),b=Object(c.a)(y,1)[0];return r.a.useEffect((function(){b()}),[b]),r.a.createElement(r.a.Fragment,null,m?r.a.createElement($,{Loading:o,CloseCallback:d}):r.a.createElement(ie,{Logs:f,CloseCallback:t}))};n(137);var Te=function(){var e=r.a.useState(!1),t=Object(c.a)(e,2),n=t[0],a=t[1],o=r.a.useState(!1),l=Object(c.a)(o,2),i=l[0],u=l[1],s=r.a.useRef([{text:"Generate Binary Tree",action:function(){return a(!0)}},{text:"View Logs",action:function(){return u(!0)}}]),m=h().BinaryTreeData;return r.a.createElement(r.a.Fragment,null,r.a.createElement(S,{Buttons:s.current},r.a.createElement(j,{key:m,DisplayText:"Please Generate A Binary Tree",TreeData:m,TreeNode:de})),n&&r.a.createElement(be,{CloseCallback:a}),i&&r.a.createElement(ge,{CloseCallback:u}))};n(138);var ke=function(){var e=r.a.useState(0),t=Object(c.a)(e,2),n=t[0],a=t[1];return r.a.createElement("div",{className:"App"},r.a.createElement("nav",null,r.a.createElement("li",{className:0===n?"ActiveLink":null,onClick:function(){return a(0)},style:{marginRight:"30px"}},r.a.createElement("span",null,"Book AVL Tree")),r.a.createElement("li",{className:0!==n?"ActiveLink":null,onClick:function(){return a(1)}},r.a.createElement("span",null,"Binary Tree Generator"))),r.a.createElement(v,null,r.a.createElement(b,null,0===n?r.a.createElement(me,null):r.a.createElement(Te,null))))};n(139),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Oe=0===window.location.protocol.indexOf("https")?"http://avl-tree-project.herokuapp.com/graphql":"http://localhost:8080/graphql",Ne=new i.ApolloClient({uri:Oe,cache:new i.InMemoryCache});l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(i.ApolloProvider,{client:Ne},r.a.createElement(ke,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},75:function(e,t,n){e.exports=n(140)},80:function(e,t,n){},81:function(e,t,n){},82:function(e,t,n){}},[[75,1,2]]]);
//# sourceMappingURL=main.96f7cff4.chunk.js.map