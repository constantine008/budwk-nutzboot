(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{681:function(e,t,o){"use strict";o.d(t,"c",(function(){return n})),o.d(t,"a",(function(){return l})),o.d(t,"b",(function(){return r}));o(424);function n(e){return/^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[589])\d{8}$/.test(e)}function l(e){return new RegExp("^[a-zA-Z][a-zA-Z0-9_]{1,29}$").test(e)}function r(e){return new RegExp("^[a-zA-Z][a-zA-Z0-9_]{1,29}$").test(e)}},690:function(e,t,o){},708:function(e,t,o){"use strict";var n=o(690);o.n(n).a},723:function(e,t,o){"use strict";o.r(t);o(68),o(132),o(133),o(26);var n=o(681),l={middleware:["authenticated","check_permissions"],data:function(){var e=this;return{btnLoading:!1,listLoading:!1,userListLoading:!1,searchUserLoading:!1,addDialogVisible:!1,updateDialogVisible:!1,userDialogVisible:!1,userDialogTitle:"",drawerSee:!1,titleSee:"",doMenuDialogTitle:"",doMenuDialogVisible:!1,listData:[],doMenuData:[],doMenuCheckedData:[],pageData:{name:"",code:"",pageNo:1,pageSize:10,totalCount:0,pageOrderName:"createdAt",pageOrderBy:"descending"},formData:{},addMenuData:[],roleMenuTableData:[],seeRoleId:"",treeProps:{children:"children",label:"label"},props:{lazy:!0,checkStrictly:!0,multiple:!1,emitPath:!1,lazyLoad:function(t,o){e.$axios.$get("/platform/sys/role/get_unit_tree",{params:{pid:t.value}}).then((function(e){0===e.code&&o(e.data)}))}},userPageData:{roleId:"",pageNo:1,pageSize:10,totalCount:0,pageOrderName:"",pageOrderBy:""},userTableData:[],dbUsers:[],selUsers:[],userSelection:[]}},computed:{formRules:function(){var e={unitid:[{required:!0,message:this.$t("sys.manage.role.form.unitid"),trigger:["blur","change"]}],name:[{required:!0,message:this.$t("sys.manage.role.form.name"),trigger:["blur","change"]}],code:[{required:!0,message:this.$t("sys.manage.role.form.code"),trigger:["blur","change"]},{validator:this.validateRoleCode,trigger:["blur","change"]}]};return e}},created:function(){this.listPage()},methods:{validateRoleCode:function(e,t,o){Object(n.a)(t)?o():o(new Error(this.$t("system.commons.txt.check.code")))},doChangePage:function(e){this.pageData.pageNo=e,this.listPage()},doSizeChange:function(e){this.pageData.pageSize=e,this.listPage()},doPageSort:function(e){this.pageData.pageOrderName=e.prop,this.pageData.pageOrderBy=e.order,this.listPage()},listPage:function(){var e=this;this.listLoading=!0,this.$axios.$post("/platform/sys/role/list",this.pageData).then((function(t){e.listLoading=!1,0===t.code&&(e.listData=t.data.list,e.pageData.totalCount=t.data.totalCount)}))},doSearch:function(){this.pageData.pageNo=1,this.listPage()},openAdd:function(){this.formData={},this.$refs.addForm&&this.$refs.addForm.resetFields(),this.addMenuLoad(),this.addDialogVisible=!0},addMenuLoad:function(){var e=this;this.$axios.$get("/platform/sys/role/get_all_menu").then((function(t){0===t.code&&(e.addMenuData=t.data)}))},doAdd:function(){var e=this;this.$refs.addForm.validate((function(t){t&&(e.btnLoading=!0,e.formData.menuIds=e.$refs.addMenuTree.getCheckedKeys().toString(),e.$axios.$post("/platform/sys/role/create",e.formData).then((function(t){e.btnLoading=!1,0===t.code&&(e.$message({message:t.msg,type:"success"}),e.doSearch(),e.addDialogVisible=!1)})))}))},getTreeAllIds:function(e,t){var o=this;t&&t.length>0&&t.forEach((function(t){e.push(t.id),t.children&&o.getTreeAllIds(e,t.children)}))},addRoleSelAll:function(){var e=[];this.getTreeAllIds(e,this.addMenuData),this.$refs.addMenuTree.setCheckedKeys(e)},addRoleSelClear:function(){this.$refs.addMenuTree.setCheckedKeys([])},menuRoleSelAll:function(){var e=[];this.getTreeAllIds(e,this.doMenuData),this.$refs.doMenuTree.setCheckedKeys(e)},menuRoleSelClear:function(){this.$refs.doMenuTree.setCheckedKeys([])},disabledChange:function(e){var t=this;this.$axios.$post("/platform/sys/role/disabled",e).then((function(o){0===o.code?t.$message({message:o.msg,type:"success"}):setTimeout((function(){e.disabled=!e.disabled}),300)}))},deleteRow:function(e){var t=this;this.$confirm(this.$t("sys.manage.role.delete",{name:e.name}),this.$t("system.commons.txt.notice"),{confirmButtonText:this.$t("system.commons.button.ok"),cancelButtonText:this.$t("system.commons.button.cancel"),type:"warning"}).then((function(){t.$axios.$delete("/platform/sys/role/delete/"+e.id).then((function(e){0===e.code&&(t.$message({message:e.msg,type:"success"}),t.listPage())}))}))},openSee:function(e){this.titleSee=this.$t("sys.manage.role.see.title",{name:e.name}),this.seeRoleId=e.id,this.loadRoleMenuData(),this.drawerSee=!0},loadRoleMenuData:function(){var e=this;this.$axios.$get("/platform/sys/role/get_menu/"+this.seeRoleId).then((function(t){0===t.code&&(e.roleMenuTableData=t.data,e.tableKey=+new Date)}))},loadRoleMenuChild:function(e,t,o){this.$axios.$get("/platform/sys/role/get_menu/"+this.seeRoleId,{params:{pid:e.id}}).then((function(e){0===e.code&&o(e.data)}))},openDoMenu:function(e){this.doMenuDialogTitle=this.$t("sys.manage.role.do.menu",{name:e.name}),this.seeRoleId=e.id,this.loadDoMenuData(),this.doMenuDialogVisible=!0},loadDoMenuData:function(){var e=this;this.$axios.$get("/platform/sys/role/get_do_menu/"+this.seeRoleId).then((function(t){0===t.code&&(e.doMenuData=t.data.menu,e.doMenuCheckedData=t.data.cmenu)}))},doMenu:function(){var e=this,t=this.$refs.doMenuTree.getCheckedKeys();t&&0!==t.length?(this.btnLoading=!0,this.$axios.$post("/platform/sys/role/do_menu",{roleId:this.seeRoleId,menuIds:t.toString()}).then((function(t){e.btnLoading=!1,0===t.code&&(e.$message({message:t.msg,type:"success"}),e.doMenuDialogVisible=!1)}))):this.$message({message:this.$t("sys.manage.role.do.menu.select"),type:"warning"})},listUserPage:function(){var e=this;this.userListLoading=!0,this.$axios.$post("/platform/sys/role/user_list",this.userPageData).then((function(t){e.userListLoading=!1,0===t.code&&(e.userTableData=t.data.list,e.userPageData.totalCount=t.data.totalCount)}))},openDoUser:function(e){this.userDialogTitle=this.$t("sys.manage.role.do.user",{name:e.name}),this.seeRoleId=e.id,this.userPageData.roleId=e.id,this.userDialogVisible=!0,this.listUserPage(),this.searchUser("")},searchUser:function(e){var t=this;this.searchUserLoading=!0,this.$axios.$post("/platform/sys/role/user_search",{query:e,roleId:this.seeRoleId}).then((function(e){t.searchUserLoading=!1,0===e.code&&(t.dbUsers=e.data.list)}))},userAddRole:function(){var e=this;if(this.selUsers&&0!==this.selUsers.length){var t=[],o=[];this.selUsers.forEach((function(e){t.push(e.value),o.push(e.label)})),this.$axios.$post("/platform/sys/role/user_add",{users:t.toString(),loginnames:o.toString(),roleId:this.seeRoleId}).then((function(t){0===t.code&&(e.selUsers=[],e.$message({message:t.msg,type:"success"}),e.searchUser(""),e.listUserPage())}))}else this.$message({message:this.$t("sys.manage.role.user.search"),type:"warning"})},userDelRole:function(){var e=this;if(this.userSelection&&0!==this.userSelection.length){var t=[],o=[];this.userSelection.forEach((function(e){t.push(e.id),o.push(e.loginname+"("+e.username+")")})),this.$axios.$post("/platform/sys/role/user_remove",{users:t.toString(),loginnames:o.toString(),roleId:this.seeRoleId}).then((function(t){0===t.code&&(e.selUsers=[],e.$message({message:t.msg,type:"success"}),e.searchUser(""),e.listUserPage())}))}else this.$message({message:this.$t("sys.manage.role.user.select"),type:"warning"})},userSelectionChange:function(e){this.userSelection=e},userPageOrder:function(e){this.userPageData.pageOrderName=e.prop,this.userPageData.pageOrderBy=e.order,this.listUserPage()},userPageNumberChange:function(e){this.userPageData.pageNo=e,this.listUserPage()},userPageSizeChange:function(e){this.userPageData.pageSize=e,this.listUserPage()},userRowClick:function(e){this.$refs.userTable.toggleRowSelection(e)},openUpdate:function(e){var t=this;this.$axios.$get("/platform/sys/role/get/"+e.id).then((function(e){0===e.code&&(t.formData=e.data,t.updateDialogVisible=!0)}))},doUpdate:function(){var e=this;this.$refs.editForm.validate((function(t){t&&(e.btnLoading=!0,e.$axios.$post("/platform/sys/role/update",e.formData).then((function(t){e.btnLoading=!1,0===t.code&&(e.$message({message:t.msg,type:"success"}),e.updateDialogVisible=!1,e.listPage())})))}))}}},r=(o(708),o(11)),component=Object(r.a)(l,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"platform-content"},[o("h4",{staticClass:"platform-content-title"},[o("span",[e._v(e._s(e.$t("sys.manage.role")))]),e._v(" "),o("div",{staticClass:"platform-list-op"},[o("el-button",{directives:[{name:"permission",rawName:"v-permission",value:"sys.manage.role.create",expression:"'sys.manage.role.create'"}],attrs:{size:"small",type:"primary"},on:{click:e.openAdd}},[e._v("\n        "+e._s(e.$t("sys.manage.role.create"))+"\n      ")])],1)]),e._v(" "),o("div",{staticClass:"platform-content-info"},[o("div",{staticClass:"platform-content-search"},[o("el-form",{staticClass:"platform-content-search-form",attrs:{inline:!0,model:e.pageData}},[o("el-form-item",{attrs:{label:e.$t("sys.manage.role.form.name")}},[o("el-input",{staticClass:"platform-content-search-input",attrs:{placeholder:e.$t("sys.manage.role.form.name")},model:{value:e.pageData.name,callback:function(t){e.$set(e.pageData,"name",t)},expression:"pageData.name"}})],1),e._v(" "),o("el-form-item",{attrs:{label:e.$t("sys.manage.role.form.code")}},[o("el-input",{staticClass:"platform-content-search-input",attrs:{placeholder:e.$t("sys.manage.role.form.code")},model:{value:e.pageData.code,callback:function(t){e.$set(e.pageData,"code",t)},expression:"pageData.code"}})],1),e._v(" "),o("div",{staticClass:"platform-content-search-op"},[o("el-button",{attrs:{size:"small",type:"primary"},on:{click:e.doSearch}},[e._v("\n            "+e._s(e.$t("system.commons.button.search"))+"\n          ")])],1)],1)],1),e._v(" "),o("div",{staticClass:"platform-content-list"},[o("div",{staticClass:"platform-content-list-table"},[o("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],attrs:{data:e.listData,stripe:""},on:{"sort-change":e.doPageSort}},[o("el-table-column",{attrs:{prop:"name",label:e.$t("sys.manage.role.form.name"),sortable:""}}),e._v(" "),o("el-table-column",{attrs:{prop:"code",label:e.$t("sys.manage.role.form.code"),sortable:""}}),e._v(" "),o("el-table-column",{attrs:{prop:"unitid",label:e.$t("sys.manage.role.form.unitid"),"header-align":"center",align:"center","show-overflow-tooltip":!0},scopedSlots:e._u([{key:"default",fn:function(t){return[null==t.row.unit?o("span",{staticStyle:{"font-weight":"bold"}},[e._v("\n                "+e._s(e.$t("sys.manage.role.form.systemrole"))+"\n              ")]):e._e(),e._v(" "),t.row.unit?o("span",[e._v("\n                "+e._s(t.row.unit.name)+"\n              ")]):e._e()]}}])}),e._v(" "),o("el-table-column",{attrs:{sortable:"",prop:"createdAt",label:e.$t("system.commons.txt.createdAt"),"header-align":"center",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n              "+e._s(e._f("moment")(t.row.createdAt,"datetime"))+"\n            ")]}}])}),e._v(" "),o("el-table-column",{attrs:{sortable:"",prop:"createdBy",label:e.$t("system.commons.txt.createdBy"),"header-align":"center",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.createdByUser?o("span",[e._v("\n                "+e._s(t.row.createdByUser.loginname)+"("+e._s(t.row.createdByUser.username)+")\n              ")]):e._e()]}}])}),e._v(" "),o("el-table-column",{attrs:{label:e.$t("system.commons.txt.disabled"),"header-align":"center",prop:"disabled",align:"center",width:"100px","show-overflow-tooltip":!0},scopedSlots:e._u([{key:"default",fn:function(t){return[o("el-switch",{attrs:{size:"small","active-value":!1,"inactive-value":!0,"active-color":"green","inactive-color":"red"},on:{change:function(o){return e.disabledChange(t.row)}},model:{value:t.row.disabled,callback:function(o){e.$set(t.row,"disabled",o)},expression:"scope.row.disabled"}})]}}])}),e._v(" "),o("el-table-column",{attrs:{fixed:"right","header-align":"center",align:"center",label:e.$t("system.commons.txt.ext"),width:"290"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("el-button",{attrs:{type:"text",size:"small"},nativeOn:{click:function(o){return o.preventDefault(),e.openSee(t.row)}}},[e._v("\n                "+e._s(e.$t("sys.manage.role.see"))+"\n              ")]),e._v(" "),o("el-button",{directives:[{name:"permission",rawName:"v-permission",value:"sys.manage.role.menu",expression:"'sys.manage.role.menu'"}],attrs:{type:"text",size:"small"},nativeOn:{click:function(o){return o.preventDefault(),e.openDoMenu(t.row)}}},[e._v("\n                "+e._s(e.$t("sys.manage.role.assign.permissions"))+"\n              ")]),e._v(" "),o("el-button",{directives:[{name:"permission",rawName:"v-permission",value:"sys.manage.role.user",expression:"'sys.manage.role.user'"}],attrs:{type:"text",size:"small"},nativeOn:{click:function(o){return o.preventDefault(),e.openDoUser(t.row)}}},[e._v("\n                "+e._s(e.$t("sys.manage.role.assign.users"))+"\n              ")]),e._v(" "),"sysadmin"===t.row.code||"public"===t.row.code?o("el-button",{directives:[{name:"permission",rawName:"v-permission",value:"sys.manage.role.update",expression:"'sys.manage.role.update'"}],attrs:{type:"text",size:"small",disabled:!0}},[e._v("\n                "+e._s(e.$t("system.commons.button.update.mini"))+"\n              ")]):o("el-button",{directives:[{name:"permission",rawName:"v-permission",value:"sys.manage.role.update",expression:"'sys.manage.role.update'"}],attrs:{type:"text",size:"small"},nativeOn:{click:function(o){return o.preventDefault(),e.openUpdate(t.row)}}},[e._v("\n                "+e._s(e.$t("system.commons.button.update.mini"))+"\n              ")]),e._v(" "),"sysadmin"===t.row.code||"public"===t.row.code?o("el-button",{directives:[{name:"permission",rawName:"v-permission",value:"sys.manage.role.delete",expression:"'sys.manage.role.delete'"}],staticClass:"button-delete-color",attrs:{type:"text",size:"small",disabled:!0}},[e._v("\n                "+e._s(e.$t("system.commons.button.delete.mini"))+"\n              ")]):o("el-button",{directives:[{name:"permission",rawName:"v-permission",value:"sys.manage.role.delete",expression:"'sys.manage.role.delete'"}],staticClass:"button-delete-color",attrs:{type:"text",size:"small"},nativeOn:{click:function(o){return o.preventDefault(),e.deleteRow(t.row)}}},[e._v("\n                "+e._s(e.$t("system.commons.button.delete.mini"))+"\n              ")])]}}])})],1)],1),e._v(" "),o("div",{staticClass:"platform-content-list-pagination"},[o("el-pagination",{staticClass:"platform-pagenation",attrs:{"current-page":e.pageData.pageNo,"page-size":e.pageData.pageSize,total:e.pageData.totalCount,background:"","page-sizes":[10,20,30,50],layout:"sizes, prev, pager, next"},on:{"current-change":e.doChangePage,"size-change":e.doSizeChange}})],1)])]),e._v(" "),o("el-dialog",{directives:[{name:"permission",rawName:"v-permission",value:"sys.manage.role.create",expression:"'sys.manage.role.create'"}],attrs:{"append-to-body":"",title:e.$t("sys.manage.role.create"),visible:e.addDialogVisible,"close-on-click-modal":!1,width:"60%"},on:{"update:visible":function(t){e.addDialogVisible=t}}},[o("el-form",{ref:"addForm",attrs:{model:e.formData,rules:e.formRules,size:"small","label-width":"120px"}},[o("el-form-item",{staticClass:"is-required",attrs:{prop:"unitid",label:e.$t("sys.manage.role.form.unitid")}},[o("el-cascader",{staticStyle:{width:"100%"},attrs:{props:e.props,placeholder:e.$t("sys.manage.role.form.unitid.select")},model:{value:e.formData.unitid,callback:function(t){e.$set(e.formData,"unitid",t)},expression:"formData.unitid"}})],1),e._v(" "),o("el-form-item",{attrs:{prop:"name",label:e.$t("sys.manage.role.form.name")}},[o("el-input",{attrs:{maxlength:"50",placeholder:e.$t("sys.manage.role.form.name"),"auto-complete":"off",tabindex:"2",type:"text"},model:{value:e.formData.name,callback:function(t){e.$set(e.formData,"name",t)},expression:"formData.name"}})],1),e._v(" "),o("el-form-item",{attrs:{prop:"code",label:e.$t("sys.manage.role.form.code")}},[o("el-input",{attrs:{maxlength:"150",placeholder:e.$t("sys.manage.role.form.code"),"auto-complete":"off",tabindex:"3",type:"text"},model:{value:e.formData.code,callback:function(t){e.$set(e.formData,"code",t)},expression:"formData.code"}})],1),e._v(" "),o("el-form-item",{attrs:{prop:"disabled",label:e.$t("system.commons.txt.disabled")}},[o("el-switch",{attrs:{size:"small","active-value":!1,"inactive-value":!0,"active-color":"green","inactive-color":"red"},model:{value:e.formData.disabled,callback:function(t){e.$set(e.formData,"disabled",t)},expression:"formData.disabled"}})],1),e._v(" "),o("el-form-item",{attrs:{label:e.$t("sys.manage.role.form.assign.permissions")}},[o("el-row",{staticStyle:{"margin-bottom":"3px"}},[o("el-button",{attrs:{size:"small"},on:{click:e.addRoleSelAll}},[e._v(e._s(e.$t("system.commons.button.all.mini")))]),e._v(" "),o("el-button",{attrs:{size:"small"},on:{click:e.addRoleSelClear}},[e._v(e._s(e.$t("system.commons.button.clear.mini")))])],1),e._v(" "),o("el-tree",{ref:"addMenuTree",attrs:{data:e.addMenuData,"show-checkbox":"","check-strictly":"","node-key":"id",props:e.treeProps},scopedSlots:e._u([{key:"default",fn:function(t){return o("span",{staticClass:"custom-tree-node"},[o("span",[e._v(e._s(t.node.label))]),e._v(" "),o("span",["menu"===t.node.type?o("span",{staticStyle:{"font-weight":"bold"}},[e._v(e._s(e.$t("sys.manage.menu.form.type.menu")))]):e._e(),e._v(" "),"data"===t.node.type?o("span",[e._v(e._s(e.$t("sys.manage.menu.form.type.data")))]):e._e()])])}}])})],1)],1),e._v(" "),o("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{on:{click:function(t){e.addDialogVisible=!1}}},[e._v(e._s(e.$t("system.commons.button.cancel")))]),e._v(" "),o("el-button",{attrs:{type:"primary",loading:e.btnLoading},on:{click:e.doAdd}},[e._v(e._s(e.$t("system.commons.button.ok")))])],1)],1),e._v(" "),o("el-drawer",{attrs:{title:e.titleSee,visible:e.drawerSee,direction:"rtl","wrapper-closable":!0,size:"50%"},on:{"update:visible":function(t){e.drawerSee=t}}},[o("div",{staticClass:"platform-content-list"},[o("div",{staticClass:"platform-content-list-table"},[o("el-table",{staticStyle:{width:"100%"},attrs:{data:e.roleMenuTableData,size:"small","highlight-current-row":!0,"row-key":"id",lazy:"",load:e.loadRoleMenuChild}},[o("el-table-column",{attrs:{label:e.$t("sys.manage.menu.form.name"),"header-align":"center",prop:"name",width:"200","show-overflow-tooltip":!0,align:"left"}}),e._v(" "),o("el-table-column",{attrs:{label:e.$t("sys.manage.menu.form.href"),"header-align":"center",prop:"href","show-overflow-tooltip":!0}}),e._v(" "),o("el-table-column",{attrs:{label:e.$t("sys.manage.menu.form.type"),"header-align":"center",prop:"type","show-overflow-tooltip":!0,align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return["menu"===t.row.type?o("span",[e._v(e._s(e.$t("sys.manage.menu.form.type.menu")))]):e._e(),e._v(" "),"data"===t.row.type?o("span",[e._v(e._s(e.$t("sys.manage.menu.form.type.data")))]):e._e()]}}])}),e._v(" "),o("el-table-column",{attrs:{label:e.$t("sys.manage.menu.form.permission"),"header-align":"center",prop:"permission","show-overflow-tooltip":!0}})],1)],1)])]),e._v(" "),o("el-dialog",{directives:[{name:"permission",rawName:"v-permission",value:"sys.manage.role.menu",expression:"'sys.manage.role.menu'"}],attrs:{"append-to-body":"",title:e.doMenuDialogTitle,visible:e.doMenuDialogVisible,"close-on-click-modal":!1,width:"50%"},on:{"update:visible":function(t){e.doMenuDialogVisible=t}}},[o("el-row",{staticStyle:{"margin-bottom":"3px"}},[o("el-button",{attrs:{size:"small"},on:{click:e.menuRoleSelAll}},[e._v(e._s(e.$t("system.commons.button.all.mini")))]),e._v(" "),o("el-button",{attrs:{size:"small"},on:{click:e.menuRoleSelClear}},[e._v(e._s(e.$t("system.commons.button.clear.mini")))])],1),e._v(" "),o("el-tree",{ref:"doMenuTree",attrs:{data:e.doMenuData,"default-checked-keys":e.doMenuCheckedData,"check-strictly":"","show-checkbox":"","node-key":"id",props:e.treeProps},scopedSlots:e._u([{key:"default",fn:function(t){return o("span",{staticClass:"custom-tree-node"},[o("span",[e._v(e._s(t.node.label))]),e._v(" "),o("span",["menu"===t.node.type?o("span",{staticStyle:{"font-weight":"bold"}},[e._v(e._s(e.$t("sys.manage.menu.form.type.menu")))]):e._e(),e._v(" "),"data"===t.node.type?o("span",[e._v(e._s(e.$t("sys.manage.menu.form.type.data"))+"\n          ")]):e._e()])])}}])}),e._v(" "),o("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{on:{click:function(t){e.doMenuDialogVisible=!1}}},[e._v(e._s(e.$t("system.commons.button.cancel")))]),e._v(" "),o("el-button",{attrs:{type:"primary",loading:e.btnLoading},on:{click:e.doMenu}},[e._v(e._s(e.$t("system.commons.button.ok")))])],1)],1),e._v(" "),o("el-dialog",{directives:[{name:"permission",rawName:"v-permission",value:"sys.manage.role.user",expression:"'sys.manage.role.user'"}],attrs:{"append-to-body":"",title:e.userDialogTitle,visible:e.userDialogVisible,"close-on-click-modal":!1,width:"70%"},on:{"update:visible":function(t){e.userDialogVisible=t}}},[o("div",{staticClass:"block"},[o("el-select",{staticClass:"span_n",staticStyle:{width:"65%"},attrs:{size:"small",multiple:"",filterable:"",remote:"","default-first-option":"","reserve-keyword":"","remote-method":e.searchUser,loading:e.searchUserLoading,placeholder:e.$t("sys.manage.role.user.search")},model:{value:e.selUsers,callback:function(t){e.selUsers=t},expression:"selUsers"}},e._l(e.dbUsers,(function(e){return o("el-option",{key:e.value,attrs:{label:e.label,value:e}})})),1),e._v(" "),o("el-button",{attrs:{size:"small"},on:{click:e.userAddRole}},[e._v(e._s(e.$t("sys.manage.role.user.add")))]),e._v(" "),o("div",{staticClass:"pull-right offscreen-right"},[o("el-button",{attrs:{size:"small",type:"danger"},on:{click:e.userDelRole}},[e._v(e._s(e.$t("sys.manage.role.user.remove")))])],1)],1),e._v(" "),o("el-table",{ref:"userTable",staticStyle:{width:"100%"},attrs:{data:e.userTableData,"header-align":"center",loading:e.userListLoading,size:"small"},on:{"row-click":e.userRowClick,"sort-change":e.userPageOrder,"selection-change":e.userSelectionChange}},[o("el-table-column",{attrs:{type:"selection",width:"45"}}),e._v(" "),o("el-table-column",{attrs:{sortable:"",prop:"loginname",label:e.$t("sys.manage.user.form.loginname"),"header-align":"center"}}),e._v(" "),o("el-table-column",{attrs:{prop:"username",label:e.$t("sys.manage.user.form.username"),"header-align":"center","show-overflow-tooltip":!0}}),e._v(" "),o("el-table-column",{attrs:{prop:"unitname",label:e.$t("sys.manage.user.form.unitid"),"header-align":"center",align:"center","show-overflow-tooltip":!0}}),e._v(" "),o("el-table-column",{attrs:{label:e.$t("system.commons.txt.disabled"),"header-align":"center",prop:"disabled",align:"center","show-overflow-tooltip":!0},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.disabled?e._e():o("i",{staticClass:"fa fa-circle",staticStyle:{color:"green"}}),e._v(" "),t.row.disabled?o("i",{staticClass:"fa fa-circle",staticStyle:{color:"red"}}):e._e()]}}])}),e._v(" "),o("el-table-column",{attrs:{sortable:"",prop:"userOnline",label:e.$t("sys.manage.user.form.online"),"header-align":"center",align:"center","show-overflow-tooltip":!0},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.useronline?o("i",[e._v(e._s(e.$t("sys.manage.user.form.online.on")))]):e._e(),e._v(" "),t.row.useronline?e._e():o("i",[e._v(e._s(e.$t("sys.manage.user.form.online.off")))])]}}])})],1),e._v(" "),o("el-pagination",{attrs:{layout:"total, sizes, prev, pager, next, jumper","page-sizes":[10,20,30,50],"page-size":e.userPageData.pageSize,"current-page":e.userPageData.pageNo,total:e.userPageData.totalCount},on:{"current-change":e.userPageNumberChange,"size-change":e.userPageSizeChange}}),e._v(" "),o("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{on:{click:function(t){e.userDialogVisible=!1}}},[e._v(e._s(e.$t("system.commons.button.close")))])],1)],1),e._v(" "),o("el-dialog",{attrs:{"append-to-body":"",title:e.$t("sys.manage.role.update"),visible:e.updateDialogVisible,"close-on-click-modal":!1,width:"50%"},on:{"update:visible":function(t){e.updateDialogVisible=t}}},[o("el-form",{ref:"editForm",attrs:{model:e.formData,rules:e.formRules,size:"small","label-width":"80px"}},[o("el-form-item",{attrs:{prop:"name",label:e.$t("sys.manage.role.form.name")}},[o("el-input",{attrs:{maxlength:"50",placeholder:e.$t("sys.manage.role.form.name"),"auto-complete":"off",tabindex:"2",type:"text"},model:{value:e.formData.name,callback:function(t){e.$set(e.formData,"name",t)},expression:"formData.name"}})],1),e._v(" "),o("el-form-item",{attrs:{prop:"code",label:e.$t("sys.manage.role.form.code")}},[o("el-input",{attrs:{maxlength:"150",placeholder:e.$t("sys.manage.role.form.code"),"auto-complete":"off",tabindex:"3",type:"text"},model:{value:e.formData.code,callback:function(t){e.$set(e.formData,"code",t)},expression:"formData.code"}})],1),e._v(" "),o("el-form-item",{attrs:{prop:"disabled",label:e.$t("system.commons.txt.disabled")}},[o("el-switch",{attrs:{size:"small","active-value":!1,"inactive-value":!0,"active-color":"green","inactive-color":"red"},model:{value:e.formData.disabled,callback:function(t){e.$set(e.formData,"disabled",t)},expression:"formData.disabled"}})],1)],1),e._v(" "),o("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{on:{click:function(t){e.updateDialogVisible=!1}}},[e._v(e._s(e.$t("system.commons.button.cancel")))]),e._v(" "),o("el-button",{attrs:{type:"primary",loading:e.btnLoading},on:{click:e.doUpdate}},[e._v(e._s(e.$t("system.commons.button.ok")))])],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports}}]);