// JavaScript Document


/* exibe div */
$("#botao").click(function () {
    $(".div").show();
});
/* exibe div */


/* esconde div */
$("#botao").click(function () {
    $(".div").hide();
});
/* esconde div */


/* toggle div */
$("#botao").click(function () {
    $(".div").toggle();
});
/* toggle div */



var fontSmallSize = 11;

    //ACESSIBILIDADE

    if (jQuery.cookie('contraste1') === "true") {
        jQuery('body').addClass('contraste1');
        jQuery('.sb-nav-fixed').addClass('contraste1');
    }

    if (jQuery.cookie('contraste2') === "true") {
        jQuery('body').addClass('contraste2');
        jQuery('.sb-nav-fixed').addClass('contraste2');
    }

    if (jQuery.cookie('resetCookie') === "true") {
        jQuery('body').removeClass('contraste1');
        jQuery('body').removeClass('contraste2');
        jQuery('.sb-nav-fixed').removeClass('contraste1');
        jQuery('.sb-nav-fixed').removeClass('contraste2');
    }

    


// Acoes nos botoes de acessibilidade

    $(".btn-contrate1").click(function () {
        alert('teste');
    });

    jQuery(".btn-contraste1").click(function () {
        //alert('teste');
        jQuery.removeCookie('contraste2', { path: '/' });
        jQuery.removeCookie('resetCookie', { path: '/' });
        if (!(jQuery.cookie('contraste1') === "true")) {
            jQuery('body').removeClass('contraste2');
            jQuery('body').addClass('contraste1');
            jQuery('header').removeClass('contraste2');
            jQuery('header').addClass('contraste1');
            jQuery('.sb-nav-fixed').removeClass('contraste2');
            jQuery('.sb-nav-fixed').addClass('contraste1');
            //jQuery('.logoExtraSmallDevices img').attr('src', 'img/iprem_PB.png');

            jQuery.cookie('contraste1','true',{path:'/'});
        }
        else {
            jQuery.cookie('contraste1','false',{path:'/'});
        }
        
        return false;
    });

    jQuery(".btn-contraste2").click(function () {
        jQuery.removeCookie('contraste1', { path: '/' });
        jQuery.removeCookie('resetCookie', { path: '/' });
        if (!(jQuery.cookie('contraste2') === "true")) {
            jQuery('body').removeClass('contraste1');
            jQuery('body').addClass('contraste2');
            jQuery('header').removeClass('contraste1');
            jQuery('header').addClass('contraste2');
            jQuery('.sb-nav-fixed').removeClass('contraste1');
            jQuery('.sb-nav-fixed').addClass('contraste2');
           // jQuery('.logoExtraSmallDevices img').attr('src', 'img/ipremYellow.png');
            jQuery.cookie('contraste2','true',{path:'/'});
        }
        else {
            jQuery.cookie('contraste2','false',{path:'/'});
        }
        
        return false;
    });



    //AUMENTAR FONTE

    jQuery(".fontResizer_add").click(function () {
        maisFont();
    });
    jQuery(".fontResizer_minus").click(function () {
        menosFont();
    });
    jQuery(".fontResizer_reset").click(function () {
        jQuery('.logoExtraSmallDevices img').attr('src', 'img/iprem.png');
        resetFont();
    });

    (function(){
        var tam = jQuery.cookie('tamanhoLetra');
        jQuery('html').css("font-size",tam+"px");
    })();

    function maisFont(){
        var tamanho = jQuery('html').css("font-size");
        var maisUm = parseInt(tamanho.substr(0, 2));
        maisUm++;
        fontSmallSize++;
        
        jQuery.cookie('tamanhoLetra', maisUm,{ path: '/' });
        jQuery('html').css("font-size", maisUm + "px");
        $("label").css("font-size", maisUm + "px");
        $("input:text").css("font-size", maisUm + "px");
        $("textarea").css("font-size", maisUm + "px");
        $("select").attr("style", "font-size:" + maisUm + "px !important");
        $('.panel-title').css("font-size", maisUm + "px");
        $('#dvConcordo').css("font-size", maisUm + "px");
        $("#spQtdCaracteres").css("font-size", maisUm + "px");
        $("input[type='button']").css("font-size", maisUm + "px");
        $("input[type='submit']").css("font-size", maisUm + "px");
        $("button").css("font-size", maisUm + "px");
        $(".divbreadcrumb").css("font-size", maisUm + "px");
        $(".divbreadcrumb a").css("font-size", maisUm + "px");
        $(".label-danger").css("font-size", fontSmallSize + "px");
        
        
        
        //console.log("MAiS",jQuery.cookie('tamanhoLetra'));
    }
    function menosFont(){
        var tamanho = jQuery('html').css("font-size");
        var maisUm = parseInt(tamanho.substr(0, 2));
        maisUm--;
        fontSmallSize--;
        jQuery.cookie('tamanhoLetra', maisUm,{ path: '/' });
        jQuery('html').css("font-size", maisUm + "px");
        $("label").css("font-size", maisUm + "px");
        $("input[type='text']").css("font-size", maisUm + "px");
        $("textarea").css("font-size", maisUm + "px");
        $("select").attr("style", "font-size:" + maisUm + "px !important");
        $('.panel-title').css("font-size", maisUm + "px");
        $('#dvConcordo').css("font-size", maisUm + "px");
        $("#spQtdCaracteres").css("font-size", maisUm + "px");
        $("input[type='button']").css("font-size", maisUm + "px");
        $("input[type='submit']").css("font-size", maisUm + "px");
        $("button").css("font-size", maisUm + "px");
        $(".divbreadcrumb").css("font-size", maisUm + "px");
        $(".divbreadcrumb a").css("font-size", maisUm + "px");
        $(".label-danger").css("font-size", fontSmallSize + "px");
        
        
    }
    function resetFont(){
        jQuery('html').css("font-size", "13px");
        $("label").css("font-size", "13px");
        $("input[type='text']").css("font-size", "13px");
        $("textarea").css("font-size", "13px");
        $("select").attr("style", "font-size: 13px !important");
        $('.panel-title').css("font-size", "16px");
        $('#dvConcordo').css("font-size", "14px");
        $("#spQtdCaracteres").css("font-size", "12px");
        $("input[type='button']").css("font-size", "14px");
        $("input[type='submit']").css("font-size", "14px");
        $("button").css("font-size", "14px");
        $(".divbreadcrumb").css("font-size", "12px");
        $(".divbreadcrumb a").css("font-size", "12px");
        $(".label-danger").css("font-size", "0.7em");

        jQuery.removeCookie('contraste2', { path: '/' });
        jQuery.removeCookie('contraste1', { path: '/' });

        if (!(jQuery.cookie('resetCookie') === "true")) {
            jQuery('body').removeClass('contraste1');
            jQuery('body').removeClass('contraste2');
            jQuery('header').removeClass('contraste1');
            jQuery('header').removeClass('contraste2');
            jQuery('.panel-body').removeClass('contraste1');
            jQuery('.panel-body').removeClass('contraste2');
            jQuery.cookie('resetCookie','true',{path:'/'});

            //jQuery('.fontSize').removeAttr('style');
            //jQuery('.fontSize15').removeAttr('style');
            jQuery.removeCookie('tamanhoLetra', { path: '/' });
        }
        else {
            //jQuery('.fontSize').removeAttr('style');
            //jQuery('.fontSize15').removeAttr('style');
            jQuery.removeCookie('tamanhoLetra', { path: '/' });
            jQuery.cookie('resetCookie','false',{path:'/'});
        }
    }



    