!function(e,r,t){"use strict";var o=r("#orderWrap"),i=r("#noneOrder").html(),n=r("#tpOrderList").html(),d=r("#tpStatusBtn"),a={CUSTCONFIRM:d.find(".js-CUSTCONFIRM").html(),CUSTCONFIRMCASH:d.find(".js-CUSTCONFIRMCASH").html(),CUSTPAY:d.find(".js-CUSTPAY").html(),SHOPTAKE:d.find(".js-SHOPTAKE").html(),SHOPFINISH:d.find(".js-SHOPFINISH").html(),SHOPREFUSE:d.find(".js-SHOPREFUSE").html()},s=!0,c=10,l=1,p={init:function(){p.orderList()},orderCancel:function(t){var o;s&&e.oConfrim("确认取消此订单",!1,function(){s=!1,o=t.closest(".order-item"),e.cConfrim(),r.ajax({url:"/order/cancel",type:"POST",dataType:"json",data:{orderId:o.data("orderid")},success:function(r){r.status?(e.cLoad(),p.slideUp(o,function(){e.location.reload()})):p.endOpt(r.msg),s=!0},error:function(){p.endOpt("网络错误")}})})},endOpt:function(r){e.cLoad(),s=!0,r&&(e.reConfrim(r),setTimeout(function(){e.cConfrim()},800))},slideUp:function(e,r){e.height(e.height()-10),setTimeout(function(){e.addClass("active"),setTimeout(function(){r&&r()},400)},80)},orderDetail:function(r){var t=r.data("orderid");1==G.device?e.android.toOrderDetail(t):location.href="objc://OrderDetail/"+t},pay:function(r){var t=r.closest(".order-item").data("orderid");1==G.device?e.android.orderPay(t):location.href="objc://OrderPay/"+t},orderList:function(){s&&(s=!0,e.oLoad(),r.ajax({url:"/order/list",type:"POST",dataType:"json",data:{pagenum:l,count:c,memberid:G.userId,category:G.orderType},success:function(r){r.status?(p.renderOrderList(r.data),++l):1===l?o.html(i.replace("${msg}",r.isempty?"您暂时还没有订单哦~":r.msg)):r.isempty||e.oConfrim(r.msg,!0),s=!0,e.cLoad()},error:function(){e.oConfrim("网络出错",!0),s=!0,e.cLoad()}}))},renderOrderList:function(r){for(var i,d=[],s=r.list,c=s.length;c--;)i=s[c],d.push(n.replace("${orderid}",i.orderid).replace("${ordersn}",i.ordersn).replace("${createtime}",i.createtime).replace("${expectdeliverytime}",i.expectdeliverytime).replace("${diningtypename}",e.dinType[i.diningtypename]).replace("${freight}",i.freight).replace("${orderaddress}",i.orderaddress).replace("${paymentamount}",i.paymentamount).replace("${orderstatus}",a[i.orderstatus]).replace("${unpay}",i.freight!==t||"unpay-active"));o.append(d.reverse().join(""))}};p.init(),o.on("tap",".js-order-del",function(){p.orderCancel(r(this))}).on("tap",".js-order-pay",function(){p.pay(r(this))}).on("tap",".order-detail",function(){}).on("scroll",function(){this.scrollHeight-this.offsetHeight===this.scrollTop&&p.orderList()})}(window||this,Zepto);