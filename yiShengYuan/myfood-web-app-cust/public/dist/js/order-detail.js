!function(e,t,n){"use strict";var o,s=t("#main"),a=t("#mask"),i=t("#footer"),d=a.find(".js-receipt"),r=a.find(".js-din-mode-mask"),c=s.find(".js-username"),f=s.find(".js-usertel"),l=s.find(".js-useraddr"),m=a.find(".js-username-edit"),u=a.find(".js-usertel-edit"),h=a.find(".js-useraddr-edit"),p=a.find(".js-m-dinbtn"),j=a.find(".js-m-sendfee"),v='<button class="js-din-mode-btn ts4 ${status}" data-zhname="${zhName}">${chName}</button>',C=!0,g={cellPhone:G.phone,shopList:function(){for(var e=[],t=s.find(".js-shop-item"),n=t.length;n--;)e.push(t.eq(n).data("end"));return e}()},b={editAddr:function(){b.showMask(d,209)},editDinMode:function(e){o=e.closest(".js-shop-item");for(var t,n=o.data("dinmodelist"),s=n.length,a=[];s--;)t=n[s],a.push(v.replace("${status}",t.isDefault?"active":"").replace("${zhName}",t.zhName).replace("${chName}",t.cnName));p.html(a.join("")),j.html(o.data("sendfee")),b.showMask(r,110)},changePay:function(e){e.siblings().removeClass("active"),e.addClass("active"),o=e.closest(".js-shop-item"),b.reEndData(o.data("end").shopId,"payMethod",e.html())},closeReceipt:function(){var e=t.trim(m.val()),n=t.trim(u.val()),o=t.trim(h.val());e&&(c.html(e).removeClass("fc-sub").addClass("fc-impor-one"),g.name=e),n&&(f.html(n),g.cellPhone=n),o&&(l.html(G.baseAddr+o),g.addr=G.baseAddr+o),b.closeMask()},selectDinMode:function(e){var t=e.html();e.siblings().removeClass("active"),e.addClass("active"),o.find(".js-din-name").html(t);for(var n=JSON.parse(o.attr("data-dinmodelist").replace("true","false")),s=n.length;s--;)if(n[s].cnName===t){n[s].isDefault=!0;break}o.attr("data-dinmodelist",JSON.stringify(n)),b.reEndData(o.data("end").shopId,"dinMethod",t);var a=setTimeout(function(){clearTimeout(a),b.closeMask()},200)},showMask:function(e,t){a.removeClass("none");var n=setTimeout(function(){a.addClass("active"),clearTimeout(n),n=setTimeout(function(){clearTimeout(n),e.css({height:t,padding:"5px"})},100)},50)},closeMask:function(){a.children().css({height:0,padding:"0 5px"});var e=setTimeout(function(){a.removeClass("active"),clearTimeout(e),e=setTimeout(function(){a.addClass("none")},500)},300)},reEndData:function(e,t,n){for(var o=g.shopList.length;o--;)if(g.shopList[o].shopId===e){g.shopList[o][t]=n;break}console.log(g)},del:function(n){C&&e.oConfrim("在订单中删除此店铺",!1,function(){C=!1,e.oLoad(),t.ajax({url:"/order/delete",type:"POST",dataType:"json",data:{shopId:n.closest(".js-shop-item").data("end").shopId},success:function(t){t.status?e.location.reload(!0):(e.cLoad(),e.oConfrim(t.msg,!0),C=!0)},error:function(){e.cLoad(),e.oConfrim("网络出错",!0),C=!0}})})},statement:function(){if(C){if(!g.name)return void e.oConfrim("请输入收餐人",!0,function(){b.editAddr(),e.cConfrim()});if(!g.cellPhone)return void e.oConfrim("请输入联系电话",!0,function(){b.editAddr(),e.cConfrim()});if(!g.addr)return void e.oConfrim("请输入详细地址",!0,function(){b.editAddr(),e.cConfrim()});for(var n,o=s.find(".js-shop-item"),a=o.length;a--;)n=o.eq(a),b.reEndData(n.data("end").shopId,"note",t.trim(n.find(".js-note").val()));C=!1,e.oLoad(),t.ajax({url:"/order/statement",type:"POST",dataType:"json",data:g,success:function(t){t.status?1==G.device?e.android.statement():location.href="objc://Statement":(e.cLoad(),e.oConfrim(t.msg,!0),C=!0)},error:function(){e.cLoad(),e.oConfrim("网络出错",!0),C=!0}})}}};s.on("tap",".js-user-addr",function(){b.editAddr()}).on("tap",".js-din-mode",function(){b.editDinMode(t(this))}).on("tap",".js-pay",function(){b.changePay(t(this))}).on("tap",".js-del",function(){b.del(t(this))}),i.on("tap",".js-statement",function(){b.statement()}),a.on("tap",".js-close-receipt",function(){b.closeReceipt()}).on("tap",".js-close-din",function(){b.closeMask()}).on("tap",".js-din-mode-btn",function(){b.selectDinMode(t(this))})}(window||this,Zepto);