(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{124:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_exports__.a={threeCommons:[{id:5,name:"Seths Common"},{id:4,name:"Phils Common"},{id:18,name:"Kevins Common"}]}},135:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return AppNavbar}));var react_bootstrap__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(225),react_bootstrap__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(224),react_bootstrap__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(542),react_bootstrap__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(541),react_bootstrap__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(222),react_router_dom__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(211),main_utils_currentUser__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(217),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(1);function AppNavbar(_ref){var currentUser=_ref.currentUser,doLogout=_ref.doLogout;return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__.a,{expand:"xl",variant:"dark",bg:"dark",sticky:"top",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.a,{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__.a.Brand,{as:react_router_dom__WEBPACK_IMPORTED_MODULE_5__.a,to:"/",children:"Happier Cows"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__.a.Toggle,{}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__.a.Collapse,{className:"justify-content-between",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.a,{className:"mr-auto",children:Object(main_utils_currentUser__WEBPACK_IMPORTED_MODULE_6__.a)(currentUser,"ROLE_ADMIN")&&Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.a,{title:"Admin",id:"appnavbar-admin-dropdown",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.a.Item,{href:"/admin/users",children:"Users"})})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.a,{className:"ml-auto",children:currentUser&&currentUser.loggedIn?Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment,{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__.a.Text,{className:"me-3",as:react_router_dom__WEBPACK_IMPORTED_MODULE_5__.a,to:"/profile",children:["Welcome, ",currentUser.root.user.email]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.a,{onClick:doLogout,children:"Log Out"})]}):Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.a,{href:"/oauth2/authorization/google",children:"Log In"})})]})]})})}AppNavbar.__docgenInfo={description:"",methods:[],displayName:"AppNavbar"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/main/components/Nav/AppNavbar.js"]={name:"AppNavbar",docgenInfo:AppNavbar.__docgenInfo,path:"src/main/components/Nav/AppNavbar.js"})},181:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(0);var _CommonsCard__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(216),react_bootstrap__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(282),react_bootstrap__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(224),react_bootstrap__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(540),react_bootstrap__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(138),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(1),CommonsList=function CommonsList(props){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.a,{style:{opacity:".9"},className:"my-3 border-0",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.a.Title,{style:{fontSize:"35px"},className:"text-center my-3",children:[props.buttonText," A Commons"]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.a.Subtitle,{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.a,{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.a,{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.a,{sx:4,children:"ID#"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.a,{sx:4,children:"Common's Name"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.a,{sm:4})]})})}),props.commonList.map((function(c){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_CommonsCard__WEBPACK_IMPORTED_MODULE_1__.a,{commons:c,buttonText:props.buttonText,buttonLink:props.buttonLink},c.id)}))]})};CommonsList.__docgenInfo={description:"",methods:[],displayName:"CommonsList"},__webpack_exports__.a=CommonsList,"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/main/components/Commons/CommonsList.js"]={name:"CommonsList",docgenInfo:CommonsList.__docgenInfo,path:"src/main/components/Commons/CommonsList.js"})},216:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(0);var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(282),react_bootstrap__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(224),react_bootstrap__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(540),react_bootstrap__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(138),react_bootstrap__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(222),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(1),CommonsCard=function CommonsCard(props){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.a.Body,{style:{fontSize:"20px",borderTop:"1px solid lightgrey"},children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.a,{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.a,{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.a,{sx:4,children:props.commons.id}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.a,{sx:4,children:props.commons.name}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.a,{sm:4,children:null!=props.buttonText&&Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.a,{variant:"danger",size:"sm",className:"mx-4",onClick:props.buttonLink,block:!0,children:props.buttonText})})]})})})};CommonsCard.__docgenInfo={description:"",methods:[],displayName:"CommonsCard"},__webpack_exports__.a=CommonsCard,"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/main/components/Commons/CommonsCard.js"]={name:"CommonsCard",docgenInfo:CommonsCard.__docgenInfo,path:"src/main/components/Commons/CommonsCard.js"})},217:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"b",(function(){return useCurrentUser})),__webpack_require__.d(__webpack_exports__,"c",(function(){return useLogout})),__webpack_require__.d(__webpack_exports__,"a",(function(){return hasRole}));var _home_runner_work_HappierCows_HappierCows_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(223),_home_runner_work_HappierCows_HappierCows_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_home_runner_work_HappierCows_HappierCows_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__),_home_runner_work_HappierCows_HappierCows_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(27),_home_runner_work_HappierCows_HappierCows_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(359),react_query__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(965),react_query__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(215),react_query__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(966),axios__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(360),axios__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__),react_router_dom__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(24);function useCurrentUser(){var rolesList=[];return Object(react_query__WEBPACK_IMPORTED_MODULE_3__.a)("current user",Object(_home_runner_work_HappierCows_HappierCows_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.a)(_home_runner_work_HappierCows_HappierCows_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark((function _callee(){var response;return _home_runner_work_HappierCows_HappierCows_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return _context.prev=0,_context.next=3,axios__WEBPACK_IMPORTED_MODULE_6___default.a.get("/api/currentUser");case 3:response=_context.sent;try{rolesList=response.data.roles.map((function(r){return r.authority}))}catch(e){console.error("Error getting roles: ",e),rolesList=["ERROR_GETTING_ROLES"]}return response.data=Object(_home_runner_work_HappierCows_HappierCows_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.a)(Object(_home_runner_work_HappierCows_HappierCows_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.a)({},response.data),{},{rolesList:rolesList}),_context.abrupt("return",{loggedIn:!0,root:response.data});case 9:return _context.prev=9,_context.t0=_context.catch(0),console.error("Error invoking axios.get: ",_context.t0),_context.abrupt("return",{loggedIn:!1,root:null});case 13:case"end":return _context.stop()}}),_callee,null,[[0,9]])}))),{initialData:{loggedIn:!1,root:null}})}function useLogout(){var queryClient=Object(react_query__WEBPACK_IMPORTED_MODULE_4__.b)(),navigate=Object(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.f)();return Object(react_query__WEBPACK_IMPORTED_MODULE_5__.a)(Object(_home_runner_work_HappierCows_HappierCows_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.a)(_home_runner_work_HappierCows_HappierCows_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark((function _callee2(){return _home_runner_work_HappierCows_HappierCows_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap((function _callee2$(_context2){for(;;)switch(_context2.prev=_context2.next){case 0:return _context2.next=2,axios__WEBPACK_IMPORTED_MODULE_6___default.a.post("/logout");case 2:return _context2.next=4,queryClient.resetQueries("current user",{exact:!0});case 4:navigate("/");case 5:case"end":return _context2.stop()}}),_callee2)}))))}function hasRole(currentUser,role){return currentUser&&currentUser.loggedIn&&currentUser.root&&currentUser.root.rolesList&&currentUser.root.rolesList.includes(role)}},219:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return BasicLayout}));var react_bootstrap__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(224),main_components_Nav_Footer__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(220),main_components_Nav_AppNavbar__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(135),main_utils_currentUser__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(217),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(1);function BasicLayout(_ref){var children=_ref.children,currentUser=Object(main_utils_currentUser__WEBPACK_IMPORTED_MODULE_3__.b)().data,doLogout=Object(main_utils_currentUser__WEBPACK_IMPORTED_MODULE_3__.c)().mutate;return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div",{className:"d-flex flex-column min-vh-100",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(main_components_Nav_AppNavbar__WEBPACK_IMPORTED_MODULE_2__.a,{currentUser:currentUser,doLogout:doLogout}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__.a,{expand:"xl",className:"pt-4 flex-grow-1",children:children}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(main_components_Nav_Footer__WEBPACK_IMPORTED_MODULE_1__.a,{})]})}BasicLayout.__docgenInfo={description:"",methods:[],displayName:"BasicLayout"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/main/layouts/BasicLayout/BasicLayout.js"]={name:"BasicLayout",docgenInfo:BasicLayout.__docgenInfo,path:"src/main/layouts/BasicLayout/BasicLayout.js"})},220:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return Footer}));var react_bootstrap__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(224),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1);function Footer(){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("footer",{className:"bg-light pt-3 pt-md-4 pb-4 pb-md-5",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__.a,{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p",{children:"This is a sample webapp using React with a Spring Boot backend."})})})}Footer.__docgenInfo={description:"",methods:[],displayName:"Footer"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/main/components/Nav/Footer.js"]={name:"Footer",docgenInfo:Footer.__docgenInfo,path:"src/main/components/Nav/Footer.js"})},563:function(module,exports,__webpack_require__){__webpack_require__(564),__webpack_require__(719),__webpack_require__(720),__webpack_require__(956),__webpack_require__(954),__webpack_require__(958),__webpack_require__(959),__webpack_require__(957),__webpack_require__(955),__webpack_require__(960),__webpack_require__(961),module.exports=__webpack_require__(925)},631:function(module,exports){},720:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(408)},923:function(module,exports,__webpack_require__){},925:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(408).configure)([__webpack_require__(926),__webpack_require__(927)],module,!1)}).call(this,__webpack_require__(250)(module))},926:function(module,exports,__webpack_require__){var map={"./stories/components/Commons/CreateCommonsForm.stories.mdx":962};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=926},927:function(module,exports,__webpack_require__){var map={"./stories/components/Commons/CommonsCard.stories.js":928,"./stories/components/Commons/CommonsList.stories.js":929,"./stories/components/Nav/AppNavbar.stories.js":930,"./stories/components/Profile/RoleBadge.stories.js":963,"./stories/layouts/BasicLayout/AppNavbar.stories.js":951,"./stories/layouts/BasicLayout/BasicLayout.stories.js":952,"./stories/layouts/BasicLayout/Footer.stories.js":953,"./stories/pages/HomePage/HomePage.stories.js":964};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=927},928:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"nullButton",(function(){return nullButton})),__webpack_require__.d(__webpack_exports__,"textButton",(function(){return textButton}));var _home_runner_work_HappierCows_HappierCows_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(27),main_components_Commons_CommonsCard__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__(0),__webpack_require__(216)),fixtures_commonsFixtures__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(124),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(1);__webpack_exports__.default={title:"components/Commons/CommonsCard",component:main_components_Commons_CommonsCard__WEBPACK_IMPORTED_MODULE_2__.a};var Template=function Template(args){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(main_components_Commons_CommonsCard__WEBPACK_IMPORTED_MODULE_2__.a,Object(_home_runner_work_HappierCows_HappierCows_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({},args))},nullButton=Template.bind({});nullButton.args={buttonText:null,commons:fixtures_commonsFixtures__WEBPACK_IMPORTED_MODULE_3__.a.threeCommons[0]};var textButton=Template.bind({});textButton.args={buttonText:"Join",commons:fixtures_commonsFixtures__WEBPACK_IMPORTED_MODULE_3__.a.threeCommons[0]},nullButton.parameters=Object(_home_runner_work_HappierCows_HappierCows_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({storySource:{source:"(args) => {\n    return (\n        <CommonsCard {...args} />\n    )\n}"}},nullButton.parameters),textButton.parameters=Object(_home_runner_work_HappierCows_HappierCows_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({storySource:{source:"(args) => {\n    return (\n        <CommonsCard {...args} />\n    )\n}"}},textButton.parameters)},929:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"nullButton",(function(){return nullButton})),__webpack_require__.d(__webpack_exports__,"textButton",(function(){return textButton}));var _home_runner_work_HappierCows_HappierCows_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(27),main_components_Commons_CommonsList__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__(0),__webpack_require__(181)),fixtures_commonsFixtures__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(124),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(1);__webpack_exports__.default={title:"components/Commons/CommonsList",component:main_components_Commons_CommonsList__WEBPACK_IMPORTED_MODULE_2__.a};var Template=function Template(args){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(main_components_Commons_CommonsList__WEBPACK_IMPORTED_MODULE_2__.a,Object(_home_runner_work_HappierCows_HappierCows_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({},args))},nullButton=Template.bind({});nullButton.args={buttonText:null,commonList:fixtures_commonsFixtures__WEBPACK_IMPORTED_MODULE_3__.a.threeCommons};var textButton=Template.bind({});textButton.args={buttonText:"Join",commonList:fixtures_commonsFixtures__WEBPACK_IMPORTED_MODULE_3__.a.threeCommons},nullButton.parameters=Object(_home_runner_work_HappierCows_HappierCows_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({storySource:{source:"(args) => {\n    return (\n        <CommonsList {...args} />\n    )\n}"}},nullButton.parameters),textButton.parameters=Object(_home_runner_work_HappierCows_HappierCows_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({storySource:{source:"(args) => {\n    return (\n        <CommonsList {...args} />\n    )\n}"}},textButton.parameters)},930:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"noRole",(function(){return noRole})),__webpack_require__.d(__webpack_exports__,"admin",(function(){return admin}));var _home_runner_work_HappierCows_HappierCows_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(27),main_components_Nav_AppNavbar__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__(0),__webpack_require__(135)),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(1);__webpack_exports__.default={title:"components/Nav/AppNavbar",component:main_components_Nav_AppNavbar__WEBPACK_IMPORTED_MODULE_2__.a};var Template=function Template(args){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(main_components_Nav_AppNavbar__WEBPACK_IMPORTED_MODULE_2__.a,Object(_home_runner_work_HappierCows_HappierCows_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({},args))},noRole=Template.bind({}),admin=Template.bind({});admin.args={role:"admin"},noRole.parameters=Object(_home_runner_work_HappierCows_HappierCows_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({storySource:{source:"(args) => {\n    return (\n        <AppNavbar {...args} />\n    )\n}"}},noRole.parameters),admin.parameters=Object(_home_runner_work_HappierCows_HappierCows_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({storySource:{source:"(args) => {\n    return (\n        <AppNavbar {...args} />\n    )\n}"}},admin.parameters)},951:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default}));var _home_runner_work_HappierCows_HappierCows_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(27),main_components_Nav_AppNavbar__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__(0),__webpack_require__(135)),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(1);__webpack_exports__.default={title:"layouts/BasicLayout/AppNavbar",component:main_components_Nav_AppNavbar__WEBPACK_IMPORTED_MODULE_2__.a};var Default=function Template(){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(main_components_Nav_AppNavbar__WEBPACK_IMPORTED_MODULE_2__.a,{})}.bind({});Default.parameters=Object(_home_runner_work_HappierCows_HappierCows_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({storySource:{source:"() => <AppNavbar />"}},Default.parameters)},952:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default}));var _home_runner_work_HappierCows_HappierCows_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(27),main_layouts_BasicLayout_BasicLayout__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__(0),__webpack_require__(219)),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(1);__webpack_exports__.default={title:"layouts/BasicLayout/BasicLayout",component:main_layouts_BasicLayout_BasicLayout__WEBPACK_IMPORTED_MODULE_2__.a};var Default=function Template(){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(main_layouts_BasicLayout_BasicLayout__WEBPACK_IMPORTED_MODULE_2__.a,{})}.bind({});Default.parameters=Object(_home_runner_work_HappierCows_HappierCows_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({storySource:{source:"() => <BasicLayout />"}},Default.parameters)},953:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default}));var _home_runner_work_HappierCows_HappierCows_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(27),main_components_Nav_Footer__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__(0),__webpack_require__(220)),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(1);__webpack_exports__.default={title:"layouts/BasicLayout/Footer",component:main_components_Nav_Footer__WEBPACK_IMPORTED_MODULE_2__.a};var Default=function Template(){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(main_components_Nav_Footer__WEBPACK_IMPORTED_MODULE_2__.a,{})}.bind({});Default.parameters=Object(_home_runner_work_HappierCows_HappierCows_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({storySource:{source:"() => {\n    return (\n        <Footer />\n    )\n}"}},Default.parameters)},961:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters})),__webpack_require__.d(preview_namespaceObject,"decorators",(function(){return decorators}));var client_api=__webpack_require__(980),esm=__webpack_require__(9),queryClient=(__webpack_require__(921),__webpack_require__(922),__webpack_require__(923),__webpack_require__(979)),QueryClientProvider=__webpack_require__(215),react_router=__webpack_require__(24),jsx_runtime=__webpack_require__(1),parameters={actions:{argTypesRegex:"^on[A-Z].*"}},preview_queryClient=new queryClient.a,decorators=[function(Story){return Object(jsx_runtime.jsx)(QueryClientProvider.a,{client:preview_queryClient,children:Object(jsx_runtime.jsx)(react_router.a,{children:Object(jsx_runtime.jsx)(Story,{})})})}];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":case"argTypes":return esm.a.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return Object(client_api.b)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(client_api.c)(loader,!1)}));case"parameters":return Object(client_api.d)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(client_api.a)(enhancer)}));case"globals":case"globalTypes":var v={};return v[key]=value,Object(client_api.d)(v,!1);default:return console.log(key+" was not supported :( !")}}))},962:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"uncontrolled",(function(){return uncontrolled}));__webpack_require__(0);var esm=__webpack_require__(56),blocks=__webpack_require__(180),dist_esm=__webpack_require__(133),objectSpread2=__webpack_require__(27),Form=__webpack_require__(978),Button=__webpack_require__(222),index_esm=__webpack_require__(536),jsx_runtime=__webpack_require__(1);function CreateCommonsForm(props){var _errors$name,_errors$cowPrice,_errors$milkPrice,_errors$startDate,onSubmit=props.onSubmit,_useForm=Object(index_esm.a)(),register=_useForm.register,handleSubmit=_useForm.handleSubmit,errors=_useForm.formState.errors;return Object(jsx_runtime.jsxs)(Form.a,{onSubmit:handleSubmit(onSubmit),children:[Object(jsx_runtime.jsxs)(Form.a.Group,{className:"mb-3",children:[Object(jsx_runtime.jsx)(Form.a.Label,{htmlFor:"name",children:"Commons Name"}),Object(jsx_runtime.jsx)(Form.a.Control,Object(objectSpread2.a)({id:"name",type:"text",isInvalid:!!errors.name},register("name",{required:"Commons name is required"}))),Object(jsx_runtime.jsx)(Form.a.Control.Feedback,{type:"invalid",children:null===(_errors$name=errors.name)||void 0===_errors$name?void 0:_errors$name.message})]}),Object(jsx_runtime.jsxs)(Form.a.Group,{className:"mb-3",children:[Object(jsx_runtime.jsx)(Form.a.Label,{htmlFor:"cowPrice",children:"Cow Price"}),Object(jsx_runtime.jsx)(Form.a.Control,Object(objectSpread2.a)({id:"cowPrice",type:"number",step:"0.01",isInvalid:!!errors.cowPrice},register("cowPrice",{valueAsNumber:!0,required:"Cow price is required",min:{value:.01,message:"Cow price must be positive"}}))),Object(jsx_runtime.jsx)(Form.a.Control.Feedback,{type:"invalid",children:null===(_errors$cowPrice=errors.cowPrice)||void 0===_errors$cowPrice?void 0:_errors$cowPrice.message})]}),Object(jsx_runtime.jsxs)(Form.a.Group,{className:"mb-3",children:[Object(jsx_runtime.jsx)(Form.a.Label,{htmlFor:"milkPrice",children:"Milk Price"}),Object(jsx_runtime.jsx)(Form.a.Control,Object(objectSpread2.a)({id:"milkPrice",type:"number",step:"0.01",isInvalid:!!errors.milkPrice},register("milkPrice",{valueAsNumber:!0,required:"Milk price is required",min:{value:.01,message:"Milk price must be positive"}}))),Object(jsx_runtime.jsx)(Form.a.Control.Feedback,{type:"invalid",children:null===(_errors$milkPrice=errors.milkPrice)||void 0===_errors$milkPrice?void 0:_errors$milkPrice.message})]}),Object(jsx_runtime.jsxs)(Form.a.Group,{className:"mb-3",children:[Object(jsx_runtime.jsx)(Form.a.Label,{htmlFor:"startDate",children:"Start Date"}),Object(jsx_runtime.jsx)(Form.a.Control,Object(objectSpread2.a)({id:"startDate",type:"date",isInvalid:!!errors.startDate},register("startDate",{valueAsDate:!0,validate:{isPresent:function isPresent(v){return!isNaN(v)||"Start date is required"}}}))),Object(jsx_runtime.jsx)(Form.a.Control.Feedback,{type:"invalid",children:null===(_errors$startDate=errors.startDate)||void 0===_errors$startDate?void 0:_errors$startDate.message})]}),Object(jsx_runtime.jsx)(Button.a,{type:"submit",children:"Create"})]})}function _extends(){return(_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}CreateCommonsForm.__docgenInfo={description:"",methods:[],displayName:"CreateCommonsForm"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/main/components/Commons/CreateCommonsForm.js"]={name:"CreateCommonsForm",docgenInfo:CreateCommonsForm.__docgenInfo,path:"src/main/components/Commons/CreateCommonsForm.js"});const layoutProps={};function MDXContent({components:components,...props}){return Object(esm.b)("wrapper",_extends({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(esm.b)(blocks.c,{title:"components/Commons/CreateCommonsForm",component:CreateCommonsForm,mdxType:"Meta"}),Object(esm.b)("h1",{id:"createcommonsform"},"CreateCommonsForm"),Object(esm.b)("p",null,"A form for creating a new commons, with basic validations for fields such as cow/milk price."),Object(esm.b)(blocks.b,{mdxType:"Canvas"},Object(esm.b)(blocks.d,{name:"uncontrolled",mdxType:"Story"},Object(esm.b)(CreateCommonsForm,{onSubmit:Object(dist_esm.action)("submit"),mdxType:"CreateCommonsForm"}))))}MDXContent.isMDXComponent=!0;const uncontrolled=()=>Object(esm.b)(CreateCommonsForm,{onSubmit:Object(dist_esm.action)("submit")});uncontrolled.storyName="uncontrolled",uncontrolled.parameters={storySource:{source:'<CreateCommonsForm onSubmit={action("submit")} />'}};const componentMeta={title:"components/Commons/CreateCommonsForm",component:CreateCommonsForm,includeStories:["uncontrolled"]},mdxStoryNameToKey={uncontrolled:"uncontrolled"};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:()=>Object(esm.b)(blocks.a,{mdxStoryNameToKey:mdxStoryNameToKey,mdxComponentMeta:componentMeta},Object(esm.b)(MDXContent,null))};__webpack_exports__.default=componentMeta},963:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"noRole",(function(){return noRole})),__webpack_require__.d(__webpack_exports__,"admin",(function(){return admin}));var objectSpread2=__webpack_require__(27),Badge=(__webpack_require__(0),__webpack_require__(977)),jsx_runtime=__webpack_require__(1);function RoleBadge(_ref){var role=_ref.role;return _ref.currentUser.root.roles.map((function(o){return o.authority})).includes(role)?Object(jsx_runtime.jsx)(Badge.a,{className:"bg-primary","data-testid":"role-badge",children:role.replace("ROLE_","").toLowerCase()}):Object(jsx_runtime.jsx)("span",{className:"missing-role","data-testid":"missing-role","data-missingrole":role})}RoleBadge.__docgenInfo={description:"",methods:[],displayName:"RoleBadge"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/main/components/Profile/RoleBadge.js"]={name:"RoleBadge",docgenInfo:RoleBadge.__docgenInfo,path:"src/main/components/Profile/RoleBadge.js"});__webpack_exports__.default={title:"components/Profile/RoleBadge",component:RoleBadge};var RoleBadge_stories_Template=function Template(args){return Object(jsx_runtime.jsx)(RoleBadge,Object(objectSpread2.a)({},args))},noRole=RoleBadge_stories_Template.bind({}),admin=RoleBadge_stories_Template.bind({});admin.args={role:"admin"},noRole.parameters=Object(objectSpread2.a)({storySource:{source:"(args) => {\n    return (\n        <RoleBadge {...args} />\n    )\n}"}},noRole.parameters),admin.parameters=Object(objectSpread2.a)({storySource:{source:"(args) => {\n    return (\n        <RoleBadge {...args} />\n    )\n}"}},admin.parameters)},964:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default}));var objectSpread2=__webpack_require__(27),BasicLayout=(__webpack_require__(0),__webpack_require__(219)),CommonsList=__webpack_require__(181),commonsFixtures=__webpack_require__(124),Container=__webpack_require__(224),Row=__webpack_require__(540),Col=__webpack_require__(138),jsx_runtime=__webpack_require__(1);function HomePage(){var commonsJoined=commonsFixtures.a.threeCommons,commonsAll=commonsFixtures.a.threeCommons,onButtonClick=function onButtonClick(){console.log("clicked")};return Object(jsx_runtime.jsx)(BasicLayout.a,{children:Object(jsx_runtime.jsxs)("div",{children:[Object(jsx_runtime.jsx)("h1",{children:"Hello, world!"}),Object(jsx_runtime.jsx)("p",{children:"This is a webapp containing a bunch of different Spring Boot/React examples."}),Object(jsx_runtime.jsx)(Container.a,{children:Object(jsx_runtime.jsxs)(Row.a,{children:[Object(jsx_runtime.jsx)(Col.a,{sm:!0,children:Object(jsx_runtime.jsx)(CommonsList.a,{commonList:commonsJoined,buttonText:"Visit",buttonLink:onButtonClick})}),Object(jsx_runtime.jsx)(Col.a,{sm:!0,children:Object(jsx_runtime.jsx)(CommonsList.a,{commonList:commonsAll,buttonText:"Join",buttonLink:onButtonClick})})]})})]})})}HomePage.__docgenInfo={description:"",methods:[],displayName:"HomePage"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/main/pages/HomePage.js"]={name:"HomePage",docgenInfo:HomePage.__docgenInfo,path:"src/main/pages/HomePage.js"});__webpack_exports__.default={title:"pages/HomePage/HomePage",component:HomePage};var Default=function Template(){return Object(jsx_runtime.jsx)(HomePage,{})}.bind({});Default.parameters=Object(objectSpread2.a)({storySource:{source:"() => <HomePage />"}},Default.parameters)}},[[563,2,3]]]);