function tieFlexMenu(){var e=jQuery(".is-flex-tabs, .is-flex-tabs-shortcodes .tabs");e.length&&(e.flexMenu({threshold:0,cutoff:0,linkText:'<span class="tie-icon-dots-three-horizontal"><span class="screen-reader-text">More</span></span>',linkTextAll:'<span class="tie-icon-dots-three-horizontal"><span class="screen-reader-text">More</span></span>',linkTitle:"",linkTitleAll:"",showOnHover:intialWidth>991?!0:!1}),e.css({opacity:1}))}function tieLazyLoad(){emergence.init()}function tieTabs(){document.querySelectorAll(".tabs-wrapper").forEach(function(e){var t=e.querySelector(".tabs");if("undefined"!=typeof t&&null!=t){e.classList.contains("tabs-vertical");var i=!1;t.querySelectorAll("li").forEach(function(a){i||(a.classList.add("active"),i=!0),a.addEventListener("click",function(i){if(!a.classList.contains("active")){t.querySelector(".active").classList.remove("active"),a.classList.add("active"),e.querySelectorAll(".tab-content").forEach(function(e){e.style.display="none",e.classList.add("is-not-active")});var n=a.querySelector("a").getAttribute("href"),s=e.querySelector(n);s.style.display="block";var o=s.querySelector(".tab-content-wrap");o&&o.classList.add("tie-animate-slideInUp"),s.querySelectorAll(".tab-content-elements li").forEach(function(e){e&&e.classList.add("tie-animate-slideInUp")}),tie_animate_element(s)}i.preventDefault()})})}})}function tie_animate_element(e){e&&(e=jQuery(e),tie_animate_reviews(e),tie.lazyload&&(e.find("[data-src]").each(function(){var e=jQuery(this);e.attr("src",e.data("src")),e.removeAttr("data-src")}),e.find("[data-lazy-bg]").each(function(){var e=jQuery(this);e.attr("style","background-image:url("+e.data("lazy-bg")+")"),e.removeAttr("data-lazy-bg")})))}function tie_animate_reviews(e){tie.is_taqyeem_active&&(e.find("[data-lazy-pie]").each(function(){var e=jQuery(this),t=parseInt(e.data("pct")),i=e.find(".circle_bar"),a=(100-t)/100*Math.PI*38;i.attr("style","stroke-dashoffset:"+a+"px"),e.removeAttr("data-lazy-pie")}),e.find("[data-lazy-percent]").each(function(){var e=jQuery(this);e.attr("style","width:"+e.data("rate-val")),e.removeAttr("data-lazy-percent")}))}!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)}(function(e){var t,i=window.innerWidth,a=[];e(window).resize(function(){clearTimeout(t),t=setTimeout(function(){var t=window.innerWidth;t!==i&&(i=t,e(a).each(function(){e(this).flexMenu({undo:!0}).flexMenu(this.options)}))},200)}),e.fn.flexMenu=function(t){var i,n=e.extend({threshold:2,cutoff:2,linkText:"More",linkTitle:"View More",linkTextAll:"Menu",linkTitleAll:"Open/Close Menu",shouldApply:function(){return!0},showOnHover:!0,popupAbsolute:!0,popupClass:"",undo:!1},t);return this.options=n,0<=(i=e.inArray(this,a))?a.splice(i,1):a.push(this),this.each(function(){function t(e){return e[0].offsetTop}function i(e){return t(e)>=f}var a=e(this),s=a.find("> li"),o=s.length;if(o){var r,l,d,c,u,p,f=t(s)+20,h=!1;if(i(s.last())&&o>n.threshold&&!n.undo&&n.shouldApply()){var m=e('<ul class="flexMenu-popup" style="display:none;'+(n.popupAbsolute?" position: absolute;":"")+'"></ul>');for(n.popupClass&&m.addClass(n.popupClass),p=o;p>1;p--){if(l=i(r=a.find("li:last-child")),p-1<=n.cutoff){e(a.children().get().reverse()).appendTo(m),h=!0;break}if(!l)break;r.appendTo(m)}h?a.append('<li class="flexMenu-viewMore flexMenu-allInPopup"><a href="#" title="'+n.linkTitleAll+'">'+n.linkTextAll+"</a></li>"):a.append('<li class="flexMenu-viewMore"><a href="#" title="'+n.linkTitle+'">'+n.linkText+"</a></li>"),i(d=a.find("> li.flexMenu-viewMore"))&&a.find("> li:nth-last-child(2)").appendTo(m),m.children().each(function(e,t){m.prepend(t)}),d.append(m),a.find("> li.flexMenu-viewMore > a").click(function(t){var i;i=d,e("li.flexMenu-viewMore.active").not(i).find("> ul").hide(),m.toggle(),t.preventDefault()}),n.showOnHover&&"undefined"!=typeof Modernizr&&!Modernizr.touch&&d.hover(function(){m.show()},function(){m.hide()})}else if(n.undo&&a.find("ul.flexMenu-popup")){for(c=(u=a.find("ul.flexMenu-popup")).find("li").length,p=1;c>=p;p++)u.find("> li:first-child").appendTo(a);u.remove(),a.find("> li.flexMenu-viewMore").remove()}}})}}),!function(e,t){"function"==typeof define&&define.amd?define(function(){return t(e)}):"object"==typeof exports?module.exports=t:e.emergence=t(e)}(this,function(){"use strict";var e,t,i,a,n,s,o,r={},l=function(){},d=function(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|playbook|silk/i.test(navigator.userAgent)},c=function(e){var t=e.offsetWidth,i=e.offsetHeight,a=0,n=0;do isNaN(e.offsetTop)||(a+=e.offsetTop),isNaN(e.offsetLeft)||(n+=e.offsetLeft);while(null!==(e=e.offsetParent));return{width:t,height:i,top:a,left:n}},u=function(e){if(function(e){return null===e.offsetParent}(e))return!1;var i,a,r,l=c(e),d=function(e){var t,i;return e!==window?(t=e.clientWidth,i=e.clientHeight):(t=window.innerWidth||document.documentElement.clientWidth,i=window.innerHeight||document.documentElement.clientHeight),{width:t,height:i}}(t),u=function(e){return e!==window?{x:e.scrollLeft+c(e).left,y:e.scrollTop+c(e).top}:{x:window.pageXOffset||document.documentElement.scrollLeft,y:window.pageYOffset||document.documentElement.scrollTop}}(t),p=(l.width,l.height),f=l.top;return l.left,i=f+p*n,a=f+p-p*n,r=u.y+s,i<u.y-o+d.height&&a>r},p=function(){e||(clearTimeout(e),e=setTimeout(function(){r.engage(),e=null},i))};return r.init=function(e){var r,c,u=function(e,t){return parseInt(e||t,10)};t=(e=e||{}).container||window,a=void 0===e.handheld||e.handheld,i=u(e.throttle,250),r=e.elemCushion,c=.1,n=parseFloat(r||c),s=u(e.offsetTop,0),u(e.offsetRight,0),o=u(e.offsetBottom,0),u(e.offsetLeft,0),l=e.callback||l,"querySelectorAll"in document?(d()&&a||!d())&&(window.addEventListener?(window.addEventListener("load",p,!1),t.addEventListener("scroll",p,!1),t.addEventListener("resize",p,!1)):(document.attachEvent("onreadystatechange",function(){"complete"===document.readyState&&p()}),t.attachEvent("onscroll",p),t.attachEvent("onresize",p))):console.log("Emergence.js is not supported in this browser.")},r.engage=function(){if(tie.lazyload){if("loading"in HTMLImageElement.prototype);else for(var e=(d=document.querySelectorAll("[data-src]")).length,t=0;e>t;t++)c=d[t],u(c)&&(c.setAttribute("src",c.getAttribute("data-src")),c.removeAttribute("data-src"),l(c,"tie_img_visible"),jQuery.fn.masonry&&jQuery("#masonry-grid").masonry("layout"));var i=(d=document.querySelectorAll("[data-lazy-bg]")).length;for(t=0;i>t;t++)c=d[t],u(c)&&(c.setAttribute("style","background-image:url("+c.getAttribute("data-lazy-bg")+")"),c.removeAttribute("data-lazy-bg"),l(c,"tie_bg_visible"))}if(tie.is_taqyeem_active){var a=(d=document.querySelectorAll("[data-lazy-pie]")).length;for(t=0;a>t;t++)if(c=d[t],u(c)){var n=parseInt(c.getAttribute("data-pct")),s=c.getElementsByClassName("circle_bar")[0],o=(100-n)/100*Math.PI*38;s.setAttribute("style","stroke-dashoffset:"+o+"px"),c.removeAttribute("data-lazy-pie"),l(c,"tie_pie_visible")}var d,c,p=(d=document.querySelectorAll("[data-lazy-percent]")).length;for(t=0;p>t;t++)c=d[t],u(c)&&(c.setAttribute("style","width:"+c.getAttribute("data-rate-val")),c.removeAttribute("data-lazy-percent"),l(c,"tie_rate_visible"))}e||a||p||i||r.disengage()},r.disengage=function(){window.removeEventListener?(t.removeEventListener("scroll",p,!1),t.removeEventListener("resize",p,!1)):(t.detachEvent("onscroll",p),t.detachEvent("onresize",p)),clearTimeout(e)},r});var $doc=jQuery(document),$window=jQuery(window),$html=jQuery("html"),$body=jQuery("body"),$themeHeader=jQuery("#theme-header"),$mainNav=jQuery("#main-nav"),$container=jQuery("#tie-container"),is_RTL=tie.is_rtl?!0:!1,intialWidth=window.innerWidth,isDuringAjax=!1,scrollBarWidth=!1,mobileMenu=!1;tieLazyLoad(),tieTabs(),$doc.ready(function(){"use strict";function e(){i("#tie-popup-adblock")}function t(e){var t=window.innerWidth;if(!(t>991)){var i=!0,a=0,n=0,s=0,o=0,r=!1,l="upwards"==tie.sticky_mobile_behavior?!0:!1,d="auto",c=0,u=0,p=$themeHeader.hasClass("header-layout-1")?$mainNav:jQuery(".logo-container");if(p.length){if("size"!==d){var f=0,h=0;if($body.hasClass("admin-bar")){var m=jQuery("#wpadminbar");m.length>0&&(f=m.outerHeight(),h=f,"resize"!==e.type&&(r=h),"absolute"===m.css("position")&&(h=0,"resize"!==e.type&&(r=0)))}var v=p.parent(),y=p.not(".fixed-nav").offset();y&&(u=v.outerHeight()+y.top,y&&!p.hasClass(".fixed-nav")?(c=y.top,o=y.top):c=o,32===r?46===f?c=c-h+14:c-=h:(46===r||0===r)&&(32===f?c=c-h-14:c-=h))}var g=jQuery(p).outerHeight();v.data("min-height",u-g),v.height(g),"resize"!==e.type&&(l&&v.addClass("sticky-type-slide"),jQuery(window).scroll(function(e){if(e.originalEvent){var t=jQuery(window).scrollTop();l?(t>u&&p.addClass("fixed-nav"),c>=t&&p.removeClass("fixed-nav"),t>n?(a=0,s="down",p.addClass("sticky-down").removeClass("sticky-up")):(a+=n-t,s="up",p.addClass("sticky-up").removeClass("sticky-down")),a>150&&"up"===s?(p.addClass("sticky-nav-slide-visible"),$doc.trigger("sticky-nav-visible")):(p.removeClass("sticky-nav-slide-visible"),$doc.trigger("sticky-nav-hide")),t>u+150?p.addClass("sticky-nav-slide"):p.removeClass("sticky-nav-slide"),i&&t>u+150&&(p.addClass("sticky-nav-slide sticky-nav-slide-visible sticky-up"),$doc.trigger("sticky-nav-visible"),a=151,s="up",i=!1)):t>c?(p.addClass("fixed-nav default-behavior-mode"),$doc.trigger("sticky-nav-visible")):(p.removeClass("fixed-nav"),$doc.trigger("sticky-nav-hide")),n=t}}))}}}function i(e){jQuery(e).show(),("#tie-popup-search-desktop"==e||"#tie-popup-search-mobile"==e)&&c.find('form input[type="text"]').focus(),tie_animate_element(jQuery(e)),scrollBarWidth||(scrollBarWidth=100-document.getElementById("is-scroller").offsetWidth),setTimeout(function(){$body.addClass("tie-popup-is-opend")},10),jQuery("html").css({marginRight:scrollBarWidth,overflow:"hidden"})}function a(){jQuery.when(c.fadeOut(500)).done(function(){jQuery("html").removeAttr("style")}),jQuery.when(jQuery("#autocomplete-suggestions").fadeOut(50)).done(function(){jQuery(this).html("")}),$body.removeClass("tie-popup-is-opend"),jQuery(".tie-popup-search-input").val("")}function n(){var e=jQuery("#go-to-top"),t=!1;$window.scroll(function(){e.length&&(t&&window.clearTimeout(t),t=window.setTimeout(function(){$window.scrollTop()>100?e.addClass("show-top-button"):e.removeClass("show-top-button")},100))})}function s(){if(!tie.mobile_menu_active||mobileMenu)return!1;var e=jQuery("#mobile-menu"),t="";if(e.hasClass("has-custom-menu")){var i=jQuery("#mobile-custom-menu");i.find("div.mega-menu-content").remove(),i.find("li.menu-item-has-children:not(.hide-mega-headings)").append('<span class="mobile-arrows tie-icon-chevron-down"></span>')}else{var a=$mainNav.find("div.main-menu > ul");if(a.length){var t=a.clone();t.find(".mega-menu-content").remove(),t.removeAttr("id").find("li").removeAttr("id"),t.find("li.menu-item-has-children:not(.hide-mega-headings)").append('<span class="mobile-arrows tie-icon-chevron-down"></span>'),e.append(t);var n=t.find("> li");1==n.length&&(n.find("> .mobile-arrows").toggleClass("is-open"),n.find("> ul").show())}if(tie.mobile_menu_top){var s=jQuery("#top-nav div.top-menu > ul");if(s.length){var o=s.clone();o.removeAttr("id").find("li").removeAttr("id"),o.find("li.menu-item-has-children").append('<span class="mobile-arrows tie-icon-chevron-down"></span>'),e.append(o)}}}tie.mobile_menu_parent?jQuery("li.menu-item-has-children .mobile-arrows","#mobile-menu").click(function(){return jQuery(this).toggleClass("is-open").closest(".menu-item").find("ul").first().slideToggle(300),!1}):jQuery("li.menu-item-has-children > a, li.menu-item-has-children > .mobile-arrows","#mobile-menu").click(function(){return jQuery(this).parent().find("ul").first().slideToggle(300),jQuery(this).parent().find("> .mobile-arrows").toggleClass("is-open"),!1}),mobileMenu=!0}if(performance.mark("TieStart"),tieFlexMenu(),tie.ad_blocker_detector&&!$body.hasClass("is-ajax-loaded-post"))if("undefined"!=typeof fuckAdBlock||"undefined"!=typeof FuckAdBlock);else{var o=document.createElement("script");o.onload=function(){fuckAdBlock.onDetected(e)},o.onerror=function(){e()},o.integrity="sha256-xjwKUY/NgkPjZZBOtOxRYtK20GaqTwUCf7WYCJ1z69w=",o.crossOrigin="anonymous",o.src="https://cdnjs.cloudflare.com/ajax/libs/fuckadblock/3.2.1/fuckadblock.min.js",document.head.appendChild(o)}if($doc.on("click",".profile-btn",function(){return!1}),$doc.on("click",".change-skin",function(){jQuery("#autocomplete-suggestions").hide();var e=$html.data("skin"),t="light",i=!1,a=!1,n="",s="";$html.hasClass("dark-skin")&&(t="dark");var o="dark"==t?"light":"dark";return $themeHeader.hasClass("main-nav-default-dark")&&(i=!0),$themeHeader.hasClass("top-nav-default-dark")&&(a=!0),"undefined"!=typeof localStorage&&localStorage.setItem("tie-skin",o),e==o?($html.removeClass("tie-skin-inverted"),s+=" tie-skin-inverted"):($html.addClass("tie-skin-inverted"),n+=" tie-skin-inverted"),"dark"==o?($html.addClass("dark-skin"),n+=" dark-skin",$themeHeader.addClass("main-nav-dark top-nav-dark"),$themeHeader.removeClass("main-nav-light top-nav-light")):($html.removeClass("dark-skin"),s+=" dark-skin",i||($themeHeader.removeClass("main-nav-dark"),$themeHeader.addClass("main-nav-light")),a||($themeHeader.removeClass("top-nav-dark"),$themeHeader.addClass("top-nav-light"))),tie.autoload_posts&&jQuery(".tie-infinte-post-iframe").each(function(){var e=jQuery(this),t=e[0].contentWindow;t.postMessage({removeClass:s,addClass:n})}),!1}),jQuery.fn.masonry){var r=jQuery("#masonry-grid");if(r.length){var l=jQuery("#media-page-layout");r.masonry({columnWidth:".grid-sizer",gutter:".gutter-sizer",itemSelector:".post-element",percentPosition:!0,isInitLayout:!1,initLayout:!1,originLeft:!is_RTL,isOriginLeft:!is_RTL}).addClass("masonry-loaded"),r.masonry("on","layoutComplete",function(){isDuringAjax=!1}),r.masonry(),jQuery.fn.imagesLoaded&&r.imagesLoaded().progress(function(){r.masonry("layout")}),l.find(".loader-overlay").fadeOut().remove();var d=0;l.find(".post-element").each(function(){d++;var e=jQuery(this);e.addClass("tie-animate-slideInUp"),e.attr("style",e.attr("style")+"; animation-delay:"+d/10+"s")}),jQuery(window).resize(function(){l.find(".post-element").removeClass("tie-animate-slideInUp")})}}tie.sticky_mobile&&($window.on("load",function(e){t(e)}),$window.resize(t));var c=jQuery(".tie-popup");$doc.on("click",".tie-popup-trigger",function(e){e.preventDefault(),i("#tie-popup-login")}),tie.type_to_search&&window.self===window.top&&jQuery("#tie-popup-search-desktop").length&&$doc.bind("keydown",function(e){!jQuery(".ql-editor").is(":focus")&&!jQuery("input, textarea").is(":focus")&&!jQuery("#tie-popup-login").is(":visible")&&!e.ctrlKey&&!e.metaKey&&e.keyCode>=65&&e.keyCode<=90&&($container.removeClass("side-aside-open"),i("#tie-popup-search-desktop"))}),jQuery(".tie-search-trigger").on("click",function(){return i("#tie-popup-search-desktop"),!1}),jQuery(".tie-search-trigger-mobile").on("click",function(){return i("#tie-popup-search-mobile"),!1}),c.length&&$doc.keyup(function(e){"27"==e.which&&$body.hasClass("tie-popup-is-opend")&&!jQuery("#tie-popup-adblock").is(":visible")&&a()}),c.on("click",function(e){return jQuery(e.target).is(".tie-popup:not(.is-fixed-popup)")?(a(),!1):void 0}),jQuery(".tie-btn-close").on("click",function(){return a(),!1});var u=function(){$container.removeClass("side-aside-open"),$container.off("touchstart click",p)},p=function(e){return $container.hasClass("side-aside-open")?void(jQuery(e.target).parents(".side-aside").length||u()):!1},f=jQuery(".side-aside-nav-icon, #mobile-menu-icon");f.on("touchstart click",function(){return s(),$container.addClass("side-aside-open"),$container.on("touchstart click",p),jQuery("#autocomplete-suggestions").hide(),tie_animate_element(jQuery(".side-aside")),!1}),$doc.on("keydown",function(e){27==e.which&&u()}),jQuery(".close-side-aside").on("click",function(){return u(),!1}),jQuery('a[href^="#go-to-"]').on("click",function(){var e=jQuery(this).attr("href"),t="#"+e.slice(7),i=tie.sticky_desktop?100:40,a=jQuery(t).offset().top-i;return jQuery("html, body").animate({scrollTop:a},"slow"),!1}),n(),$doc.on("click",".tie-weather-user-location",function(){var e=jQuery(this);if(!e.hasClass("is-loading")){var t=e.closest(".tie-weather-widget"),i=e.attr("data-options");return jQuery.ajax({url:tie.ajaxurl,type:"post",data:{action:"tie_get_user_weather",options:i},beforeSend:function(){e.addClass("is-loading").find("span").attr("class","tie-icon-spinner")},success:function(i){"theme-notice"==jQuery(i).attr("class")?(t.append('<div class="user-weather-error">'+i+"</div>"),t.find(".user-weather-error").delay(3e3).fadeOut()):(t.find(".weather-wrap").remove(),t.append(i)),e.removeClass("is-loading").find("span").attr("class","tie-icon-gps")}}),!1}}),$doc.on("click",".block-pagination",function(){var e=jQuery(this),t=e.closest(".mag-box"),i=t.get(0).id,a=t.closest(".section-item"),n=t.attr("data-term"),s=t.attr("data-current"),o=t.find(".posts-list-container"),r=t.find(".mag-box-container"),l=jQuery.extend({},window["js_"+i.replace("tie-","tie_")]),d="posts-items",c=!1,u="single";if(s&&l){if(n&&(l.tags?l.tags=n:l.id=n),l.ajax_class&&(d=l.ajax_class),e.hasClass("pagination-disabled"))return!1;e.hasClass("load-more-button")?(s++,c=!0):e.hasClass("next-posts")?(s++,t.find(".prev-posts").removeClass("pagination-disabled")):e.hasClass("prev-posts")&&(s--,t.find(".next-posts").removeClass("pagination-disabled")),a.hasClass("full-width")&&(u="full"),jQuery.ajax({url:tie.ajaxurl,type:"post",data:{action:"tie_blocks_load_more",block:l,page:s,width:u},beforeSend:function(){if(c)e.html(tie.ajax_loader);else{var t=r.height();r.append(tie.ajax_loader).attr("style","min-height:"+t+"px"),o.addClass("is-loading")}},success:function(i){if(i=jQuery.parseJSON(i),i.hide_next?(t.find(".next-posts").addClass("pagination-disabled"),(e.hasClass("show-more-button")||c)&&e.html(i.button)):c&&e.html(e.attr("data-text")),i.hide_prev&&t.find(".prev-posts").addClass("pagination-disabled"),i=i.code,c){var a='<ul class="'+d+" posts-list-container clearfix posts-items-loaded-ajax posts-items-"+s+'">'+i+"</ul>";a=jQuery(a),r.append(a)}else{var a='<ul class="'+d+" posts-list-container posts-items-"+s+'">'+i+"</ul>";a=jQuery(a),r.html(a)}var n=t.find(".posts-items-"+s),o=0;n.find("li").each(function(){o++,jQuery(this).addClass("tie-animate-slideInUp").attr("style","animation-delay:"+o/10+"s")}),tie_animate_element(n),r.attr("style","")}}),t.attr("data-current",s)}return!1}),$doc.on("click",".widget-pagination",function(){var e=jQuery(this),t=e.closest(".widget"),i=t.find(".widget-posts-list-container"),a=i.attr("data-current"),n=i.attr("data-query"),s=i.attr("data-style"),o=!1;return e.hasClass("pagination-disabled")?!1:(e.hasClass("load-more-button")?(a++,o=!0):e.hasClass("next-posts")?(a++,t.find(".prev-posts").removeClass("pagination-disabled")):e.hasClass("prev-posts")&&(a--,t.find(".next-posts").removeClass("pagination-disabled")),jQuery.ajax({url:tie.ajaxurl,type:"post",data:{action:"tie_widgets_load_more",query:n,style:s,page:a},beforeSend:function(){if(o)e.html(tie.ajax_loader);else{var t=i.height();i.append(tie.ajax_loader).attr("style","min-height:"+t+"px"),i.addClass("is-loading")}},success:function(n){n=jQuery.parseJSON(n),n.hide_next?(t.find(".next-posts").addClass("pagination-disabled"),(e.hasClass("show-more-button")||o)&&e.html(n.button)):o&&e.html(e.attr("data-text")),n.hide_prev&&t.find(".prev-posts").addClass("pagination-disabled"),i.find(".loader-overlay").remove(),i.removeClass("is-loading"),n=n.code.replace(/class="widget-single-post-item/g,'class="widget-single-post-item tie-animate-slideInUp posts-items-'+a+" "),o?i.find(".widget-posts-wrapper").append(n):i.find(".widget-posts-wrapper").html(n);var s=t.find(".posts-items-"+a);if(o){var r=0;s.each(function(){r++,jQuery(this).attr("style","animation-delay:"+r/10+"s")})}tie_animate_element(s),i.attr("style","")}}),i.attr("data-current",a),!1)}),$doc.on("click",".block-ajax-term",function(){var e=jQuery(this),t=e.closest(".mag-box"),i=e.attr("data-id"),a=t.get(0).id,n=t.find(".posts-list-container"),s=t.find(".mag-box-container"),o=jQuery.extend({},window["js_"+a.replace("tie-","tie_")]),r="posts-items";return o&&(t.attr("data-current",1),i?(o.tags?o.tags=i:o.id=i,t.attr("data-term",i)):t.removeAttr("data-term"),o.ajax_class&&(r=o.ajax_class),jQuery.ajax({url:tie.ajaxurl,type:"post",data:{action:"tie_blocks_load_more",block:o},beforeSend:function(){var e=s.height();s.append(tie.ajax_loader).attr("style","min-height:"+e+"px"),n.addClass("is-loading")},success:function(i){i=jQuery.parseJSON(i),t.find(".block-pagination").removeClass("pagination-disabled");var a=t.find(".show-more-button");a.html(a.attr("data-text")),t.find(".block-ajax-term").removeClass("active"),e.addClass("active"),i.hide_next&&(t.find(".next-posts").addClass("pagination-disabled"),t.find(".show-more-button").html(i.button)),i.hide_prev&&t.find(".prev-posts").addClass("pagination-disabled"),i=i.code;var n='<ul class="'+r+' ajax-content posts-list-container">'+i+"</ul>";n=jQuery(n),s.html(n);var o=0;s.find("li").each(function(){o++,jQuery(this).addClass("tie-animate-slideInUp").attr("style","animation-delay:"+o/10+"s")}),tie_animate_element(s),s.attr("style","")}})),!1}),performance.mark("TieEnd"),performance.measure("TieLabs Custom JS","TieStart","TieEnd")}),!function(e){"use strict";e.fn.tieFitVids=function(t){var i={customSelector:null,ignore:null};t&&e.extend(i,t);var a=['iframe[src*="player.vimeo.com"]','iframe[src*="player.twitch.tv"]','iframe[src*="youtube.com"]','iframe[src*="youtube-nocookie.com"]','iframe[src*="maps.google.com"]','iframe[src*="google.com/maps"]','iframe[src*="dailymotion.com"]','iframe[src*="twitter.com/i/videos"]',"object","embed"];if(a=a.join(","),i.customSelector&&a.push(i.customSelector),document.querySelectorAll(a).length){var n=".tie-ignore-fitvid, #buddypress";return i.ignore&&(n=n+", "+i.ignore),this.each(function(){e(this).find(a).each(function(){var t=e(this);if(!(t.parents(n).length>0||("embed"===this.tagName.toLowerCase()||"object"===this.tagName.toLowerCase())&&t.parent("object").length||t.parent(".tie-fluid-width-video-wrapper").length)){t.css("height")||t.css("width")||!isNaN(t.attr("height"))&&!isNaN(t.attr("width"))||(t.attr("height",9),t.attr("width",16));var i=("object"===this.tagName.toLowerCase()||t.attr("height")&&!isNaN(parseInt(t.attr("height"),10))?parseInt(t.attr("height"),10):t.height())/(isNaN(parseInt(t.attr("width"),10))?t.width():parseInt(t.attr("width"),10));t.removeAttr("height").removeAttr("width"),t.wrap('<div class="tie-fluid-width-video-wrapper"></div>').parent(".tie-fluid-width-video-wrapper").css("padding-top",100*i+"%")}})})}}}(window.jQuery),$container.tieFitVids();
